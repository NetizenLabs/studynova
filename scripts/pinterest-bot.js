import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'scripts', 'pins-data.json');
const PINS_DIR = path.join(process.cwd(), 'pins');

// Environment Variables required for GitHub Actions
const APP_ID = process.env.PINTEREST_APP_ID;
const APP_SECRET = process.env.PINTEREST_APP_SECRET;
const REFRESH_TOKEN = process.env.PINTEREST_REFRESH_TOKEN;
const BOARD_ID = process.env.PINTEREST_BOARD_ID;
const PINS_PER_DAY = parseInt(process.env.PINS_PER_DAY || '3', 10);

async function getAccessToken() {
  const authHeader = 'Basic ' + Buffer.from(`${APP_ID}:${APP_SECRET}`).toString('base64');
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', REFRESH_TOKEN);

  const response = await fetch('https://api.pinterest.com/v5/oauth/token', {
    method: 'POST',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  });

  const data = await response.json();
  if (data.access_token) {
    return data.access_token;
  } else {
    throw new Error('Failed to refresh access token: ' + JSON.stringify(data));
  }
}

async function uploadPin(pinData, accessToken) {
  const filePath = path.join(PINS_DIR, pinData.filename);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return false;
  }

  // Read image and convert to Base64
  const imageBuffer = fs.readFileSync(filePath);
  const base64Data = imageBuffer.toString('base64');
  const contentType = pinData.filename.endsWith('.jpg') ? 'image/jpeg' : 'image/png';

  const payload = {
    link: pinData.link,
    title: pinData.title,
    description: pinData.description,
    board_id: BOARD_ID,
    media_source: {
      source_type: "image_base64",
      content_type: contentType,
      data: base64Data
    }
  };

  try {
    const response = await fetch('https://api.pinterest.com/v5/pins', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`Pinterest API Error for ${pinData.filename}:`, data);
      return false;
    }

    console.log(`Successfully uploaded ${pinData.filename}! Pin ID: ${data.id}`);
    return true;

  } catch (err) {
    console.error(`Network Error uploading ${pinData.filename}:`, err);
    return false;
  }
}

async function runBot() {
  console.log('--- Starting Pinterest Auto-Poster Bot ---');

  if (!APP_ID || !APP_SECRET || !REFRESH_TOKEN || !BOARD_ID) {
    console.error('CRITICAL ERROR: Missing PINTEREST_APP_ID, PINTEREST_APP_SECRET, PINTEREST_REFRESH_TOKEN, or PINTEREST_BOARD_ID environment variables.');
    process.exit(1);
  }

  let accessToken;
  try {
    console.log('Negotiating fresh Access Token...');
    accessToken = await getAccessToken();
    console.log('Successfully acquired fresh Access Token!');
  } catch (err) {
    console.error('CRITICAL ERROR: Could not get access token. Is your refresh token valid?');
    console.error(err);
    process.exit(1);
  }

  if (!fs.existsSync(DB_PATH)) {
    console.error('CRITICAL ERROR: pins-data.json database not found.');
    process.exit(1);
  }

  const database = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  
  // Find pins that haven't been posted yet
  const pendingPins = database.filter(pin => pin.status === 'pending');

  if (pendingPins.length === 0) {
    console.log('No pending pins left to post! You have successfully uploaded all images.');
    process.exit(0);
  }

  // Select the next N pins
  const pinsToPost = pendingPins.slice(0, PINS_PER_DAY);
  console.log(`Found ${pendingPins.length} pending pins. Attempting to post ${pinsToPost.length} pins today...`);

  let successCount = 0;

  for (const pin of pinsToPost) {
    console.log(`\nUploading: ${pin.title} (${pin.filename})`);
    
    const success = await uploadPin(pin, accessToken);
    
    if (success) {
      // Update database object in memory
      pin.status = 'posted';
      pin.postedAt = new Date().toISOString();
      successCount++;
    } else {
      console.log(`Failed to upload ${pin.filename}. Will try again tomorrow.`);
    }

    // Rate limiting: Wait 15 seconds between pins to avoid spam filters
    if (pinsToPost.length > 1) {
      console.log('Waiting 15 seconds before next pin to respect rate limits...');
      await new Promise(resolve => setTimeout(resolve, 15000));
    }
  }

  // Write updated state back to database so GitHub Actions can commit it
  fs.writeFileSync(DB_PATH, JSON.stringify(database, null, 2));
  
  console.log(`\n--- Bot Finished! Successfully posted ${successCount}/${pinsToPost.length} pins. ---`);
}

runBot();
