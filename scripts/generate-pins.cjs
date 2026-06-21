const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const titles = [
  "Is Study schedule Worth It for Early Birds?",
  "The Ultimate Guide to Study schedule for Freelancers",
  "Is Study schedule Worth It for ADHD Individuals?",
  "5 Fatal Study schedule Mistakes Every Law Students Makes",
  "Surviving Study schedule in 7 days",
  "Surviving Study schedule during inflation",
  "How Nursing Students Can Hack Study schedule",
  "Study schedule Hacks for When You Are for free",
  "The Ultimate Guide to Study schedule for Perfectionists",
  "How Night Owls Can Hack Study schedule",
  "Study schedule for College Students: A Realistic Routine",
  "How to Master Study schedule as a Medical Students",
  "Surviving Study schedule after a failure",
  "The Ultimate Guide to Study schedule for Men",
  "How to Master Study schedule as a Experts",
  "Surviving Study schedule when burnt out",
  "The Lazy Procrastinators's Guide to Study schedule",
  "5 Fatal Study schedule Mistakes Every International Students Makes",
  "Can You Do Study schedule without motivation?",
  "The Only Study schedule Strategy You Need last minute",
  "How to Master Study schedule as a High Schoolers",
  "Study schedule for Budget Shoppers: A Realistic Routine",
  "Stop Doing Study schedule Like This",
  "Is Study schedule Worth It for Women?",
  "Surviving Study schedule in 30 days",
  "The Ultimate Guide to Study schedule for Entrepreneurs",
  "A Step-by-Step Study schedule Plan for Developers",
  "How I Approached Study schedule (And Won)",
  "Is Study schedule Worth It for Couples?",
  "Can You Do Study schedule working from home?",
  "Why Your Study schedule Strategy Is Failing",
  "Study schedule for Beginners: A Realistic Routine",
  "The Only Study schedule Strategy You Need on weekends",
  "The Only Study schedule Strategy You Need during the holidays",
  "Can You Do Study schedule on a tight budget?",
  "Can You Do Study schedule in a rush?",
  "The Only Study schedule Strategy You Need as a broke college student",
  "The Lazy Working Professionals's Guide to Study schedule",
  "5 Fatal Study schedule Mistakes Every Teachers Makes",
  "How to Handle Study schedule with a full-time job",
  "Study schedule Hacks for When You Are while traveling",
  "Study schedule vs. The Alternatives: Which is Better?",
  "The Science Behind Effective Study schedule",
  "Can You Do Study schedule during exams?",
  "How to Master Study schedule as a Introverts",
  "The Lazy Remote Workers's Guide to Study schedule",
  "7 Study schedule Secrets Nobody Tells You",
  "The Only Study schedule Strategy You Need overnight",
  "The Lazy Parents's Guide to Study schedule",
  "The Ultimate Guide to Study schedule for Adult Learners",
  "Surviving Study schedule under $50"
];

const BLOG_IMAGES_DIR = path.join(__dirname, '../public/images/blog');
const PINS_IMAGES_DIR = path.join(__dirname, '../public/images/pins');
const PINS_DATA_FILE = path.join(__dirname, 'pins-data.json');

if (!fs.existsSync(BLOG_IMAGES_DIR)) fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
if (!fs.existsSync(PINS_IMAGES_DIR)) fs.mkdirSync(PINS_IMAGES_DIR, { recursive: true });

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for(let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = context.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

// Generate an OG Cover Image (1200x630)
function generateCover(title, slug) {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#0a2351';
  ctx.fillRect(0, 0, 1200, 630);
  
  ctx.beginPath();
  ctx.arc(1100, 100, 300, 0, Math.PI * 2, false);
  ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
  ctx.fill();

  ctx.font = 'bold 30px sans-serif';
  ctx.fillStyle = '#60a5fa'; 
  ctx.fillText('STUDYNOVA GUIDES', 80, 100);

  ctx.font = 'bold 80px sans-serif';
  ctx.fillStyle = '#ffffff';
  wrapText(ctx, title, 80, 240, 1000, 100);

  ctx.font = '30px sans-serif';
  ctx.fillStyle = '#9ca3af';
  ctx.fillText('getstudynova.online', 80, 570);

  const outPath = path.join(BLOG_IMAGES_DIR, `${slug}.png`);
  fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
}

// Generate a Pinterest Pin Image (1000x1500)
function generatePin(title, slug, variationIndex) {
  const canvas = createCanvas(1000, 1500);
  const ctx = canvas.getContext('2d');
  
  // Variations: Colors and hooks
  const styles = [
    { bg: '#0a2351', text: '#ffffff', accent: '#3b82f6', hook: 'SAVE THIS FOR LATER \u2193' },
    { bg: '#ffffff', text: '#0a2351', accent: '#f59e0b', hook: 'STOP SCROLLING \u2193' },
    { bg: '#3b82f6', text: '#ffffff', accent: '#0a2351', hook: 'NEW STUDY HACK \u2193' }
  ];
  
  const style = styles[variationIndex];
  
  ctx.fillStyle = style.bg;
  ctx.fillRect(0, 0, 1000, 1500);
  
  // Design Elements
  ctx.fillStyle = style.accent;
  ctx.fillRect(50, 50, 900, 1400);
  ctx.fillStyle = style.bg;
  ctx.fillRect(60, 60, 880, 1380);
  
  // Top Hook
  ctx.font = 'bold 35px sans-serif';
  ctx.fillStyle = style.accent;
  ctx.textAlign = 'center';
  ctx.fillText(style.hook, 500, 200);

  // Main Title
  ctx.font = 'bold 90px sans-serif';
  ctx.fillStyle = style.text;
  ctx.textAlign = 'center';
  
  // A crude center wrapping for large font
  const words = title.split(' ');
  let line = '';
  let y = 500;
  for(let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 800 && n > 0) {
      ctx.fillText(line, 500, y);
      line = words[n] + ' ';
      y += 110;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 500, y);

  // Bottom Branding
  ctx.font = 'bold 40px sans-serif';
  ctx.fillStyle = style.text;
  ctx.fillText('STUDYNOVA', 500, 1300);

  const filename = `${slug}-v${variationIndex + 1}.png`;
  const outPath = path.join(PINS_IMAGES_DIR, filename);
  fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
  
  return filename;
}

async function run() {
  console.log("Generating 51 Cover Images and 153 Pinterest Pins...");
  
  let pinsData = [];
  if (fs.existsSync(PINS_DATA_FILE)) {
    pinsData = JSON.parse(fs.readFileSync(PINS_DATA_FILE, 'utf8'));
  }

  titles.forEach(rawTitle => {
    const title = rawTitle.replace(/Study schedule/g, 'Study Schedule');
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const link = `https://getstudynova.online/blog/${slug}`;
    
    // Generate OG Cover
    generateCover(title, slug);
    
    // Generate 3 Pins
    for (let i = 0; i < 3; i++) {
      const pinFilename = generatePin(title, slug, i);
      
      const tags = "#studytok #studyhacks #collegelife #productivity #studynova";
      let desc = `Discover the ultimate system for ${title}. Click through to read the full guide!\n\n${tags}`;
      if (i === 1) desc = `Stop struggling with ${title}. Here is the science-backed way to do it right.\n\n${tags}`;
      if (i === 2) desc = `Everything you need to know about ${title} in one place. Save this pin!\n\n${tags}`;
      
      pinsData.push({
        filename: pinFilename,
        title: title,
        description: desc,
        link: link,
        status: "pending",
        postedAt: null
      });
    }
  });

  fs.writeFileSync(PINS_DATA_FILE, JSON.stringify(pinsData, null, 2));
  console.log("✅ Successfully generated all images and updated pins-data.json!");
}

run();
