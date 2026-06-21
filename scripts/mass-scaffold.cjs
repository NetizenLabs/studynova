const fs = require('fs');
const path = require('path');

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

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Start scheduling from tomorrow
let baseDate = new Date();
baseDate.setDate(baseDate.getDate() + 1);

titles.forEach((rawTitle, idx) => {
  // Clean up title format (capitalize "schedule", etc.)
  const title = rawTitle.replace(/Study schedule/g, 'Study Schedule');
  
  // Create an SEO friendly slug
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Increment date by 1 day per post
  let pubDate = new Date(baseDate);
  pubDate.setDate(baseDate.getDate() + idx);
  
  const dateString = pubDate.toISOString().split('T')[0];

  // Description is just the title + SEO hooks
  const description = `Everything you need to know about ${title.toLowerCase()}. Discover the systems and strategies that actually work.`;

  const mdxContent = `---
title: "${title}"
description: "${description}"
pubDate: ${dateString}
author: "StudyNova Team"
image: "/images/blog/${slug}.png"
tags: ["Study Systems", "Productivity"]
---

# Introduction
Welcome to the ultimate resource on **${title.toLowerCase()}**. If you've been struggling to figure out how this applies to your specific situation, you are in the right place.

In this guide, we will break down exactly how you can master this strategy to improve your academic performance without burning out.

## Why This Matters
Most generic advice doesn't apply to everyone. Understanding the nuances of ${title.toLowerCase()} is critical for long-term success.

## Core Strategies
Here are the top 3 actionable steps you can take today:
1. **Identify your bottlenecks:** What is currently stopping you?
2. **Implement the system:** Use the tools available at StudyNova.
3. **Review and iterate:** Adjust your approach weekly.

## Conclusion
By following the steps outlined above, you can confidently navigate this area. Remember to stay consistent and track your progress over time.
`;

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  fs.writeFileSync(filePath, mdxContent);
  console.log(`✅ Scaffolded: ${slug}.mdx (${dateString})`);
});

console.log(`\n🎉 Successfully scaffolded ${titles.length} articles!`);
