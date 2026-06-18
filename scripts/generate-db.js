import fs from 'fs';
import path from 'path';

const PINS_DIR = path.join(process.cwd(), 'pins');
const DB_PATH = path.join(process.cwd(), 'scripts', 'pins-data.json');

// Ensure scripts directory exists
if (!fs.existsSync(path.join(process.cwd(), 'scripts'))) {
  fs.mkdirSync(path.join(process.cwd(), 'scripts'));
}

const allFiles = fs.readdirSync(PINS_DIR).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

// Our content URLs to rotate through so the pins link back to our site
const links = [
  'https://getstudynova.online/blog/study-schedule',
  'https://getstudynova.online/blog/pomodoro-technique',
  'https://getstudynova.online/blog/spaced-repetition',
  'https://getstudynova.online/blog/gpa-hacking',
  'https://getstudynova.online/blog/active-recall',
  'https://getstudynova.online/blog/burnout-prevention',
  'https://getstudynova.online/blog/exam-revision-system',
  'https://getstudynova.online/blog/note-taking-methods',
  'https://getstudynova.online/blog/morning-routine',
  'https://getstudynova.online/blog/overcoming-procrastination',
  'https://getstudynova.online/tools/gpa-calculator',
  'https://getstudynova.online/tools/attendance-calculator',
  'https://getstudynova.online/tools/study-timer',
  'https://getstudynova.online/tools/study-tracker',
  'https://getstudynova.online/tools/exam-countdown',
  'https://getstudynova.online/printables'
];

const tags = '#studytok #studyhacks #collegelife #productivity #studynova #studenthacks';

const defaultDescriptions = [
  "Stop burning out and start using systems. Here is exactly how top students manage their time and get a 4.0 GPA without pulling all-nighters. Check out the link for the full guide!",
  "Are you still highlighting your textbook? Cognitive science proves that's the worst way to study. Learn the evidence-based study techniques that actually work.",
  "Need to track your classes and calculate what you need on the final? We built a suite of free student tools just for this. Click through to try them out!",
  "Don't wing your final exams. Map out a strict 7-day study schedule to guarantee you cover all the material without cramming at the last minute."
];

const database = allFiles.map((filename, index) => {
  // Format the title nicely from the filename if it has words
  let title = "The Ultimate College Study Hack";
  if (!filename.startsWith("pin_")) {
    const cleanName = filename.replace('.png', '').replace(/^\d+-/, '').replace(/-/g, ' ');
    title = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  } else {
    // If it's just "pin_11", give it a generic catchy title
    const catchyTitles = [
      "How to Actually Focus When Studying",
      "The Secret to a 4.0 GPA",
      "Stop Procrastinating With This Trick",
      "Free Aesthetic Study Planners",
      "How to Survive Midterm Season"
    ];
    title = catchyTitles[index % catchyTitles.length];
  }

  return {
    filename: filename,
    title: title,
    description: defaultDescriptions[index % defaultDescriptions.length] + '\n\n' + tags,
    link: links[index % links.length],
    status: "pending",
    postedAt: null
  };
});

fs.writeFileSync(DB_PATH, JSON.stringify(database, null, 2));
console.log(`Successfully generated database with ${database.length} pins!`);
