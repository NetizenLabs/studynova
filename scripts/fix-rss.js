import fs from 'fs';
import path from 'path';

const PINS_DIR = path.join(process.cwd(), 'pins');
const PUBLIC_IMG_DIR = path.join(process.cwd(), 'public', 'images', 'blog');
const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

// Ensure directory exists
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

// Copy 10 pins to public
const filesToCopy = [
  '01-study-schedule.png',
  '02-motivation-vs-system.png',
  '03-study-timer.png',
  '04-stop-random-studying.png',
  '05-free-planner.png',
  '06-2-hour-rule.png',
  '07-todo-vs-timeblock.png',
  '08-maximize-focus.png',
  '09-sunday-routine.png',
  '10-assignment-tracker.png'
];

filesToCopy.forEach(file => {
  fs.copyFileSync(path.join(PINS_DIR, file), path.join(PUBLIC_IMG_DIR, file));
});

console.log('Images copied to public directory.');

// Add image frontmatter to mdx files
const mdxFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));

mdxFiles.forEach((file, index) => {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // assign an image from the 10 we copied
  const assignedImage = `/images/blog/${filesToCopy[index % filesToCopy.length]}`;
  
  if (!content.includes('image: ')) {
    content = content.replace('author: "StudyNova Team"\n', `author: "StudyNova Team"\nimage: "${assignedImage}"\n`);
    fs.writeFileSync(filePath, content);
  }
});

console.log('Frontmatter updated with images.');

// Update rss.xml.js
const rssPath = path.join(process.cwd(), 'src', 'pages', 'rss.xml.js');
let rssContent = fs.readFileSync(rssPath, 'utf-8');

if (!rssContent.includes('<enclosure')) {
  // We need to inject the enclosure tag into the customData of each item.
  // Astro rss function supports `customData` on items.
  
  rssContent = rssContent.replace(
    /description: post\.frontmatter\.description,/,
    `description: post.frontmatter.description,\n        customData: \`<enclosure url="\${context.site}\${post.frontmatter.image}" length="0" type="image/png" />\`,`
  );
  
  fs.writeFileSync(rssPath, rssContent);
}

console.log('rss.xml.js updated to include enclosure tags.');
