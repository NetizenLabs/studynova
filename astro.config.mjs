// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://getstudynova.online',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  redirects: {
    '/blog/how-to-create-a-study-schedule-that-actually-works-and-prevents-burnout': '/blog/study-schedule',
    '/blog/the-math-behind-a-4-0-how-to-reverse-engineer-your-semester-gpa': '/blog/gpa-hacking',
    '/blog/active-recall-the-most-effective-study-technique-supported-by-science': '/blog/active-recall',
    '/blog/spaced-repetition-the-secret-to-memorizing-anything-permanently': '/blog/spaced-repetition',
    '/blog/the-ultimate-guide-to-the-pomodoro-technique-for-college-students': '/blog/pomodoro-technique',
    '/blog/the-cornell-notes-method-take-notes-that-actually-help-you-study': '/blog/note-taking-methods',
    '/blog/the-ultimate-7-day-exam-revision-system': '/blog/exam-revision-system',
    '/blog/how-to-stop-procrastinating-the-5-minute-rule': '/blog/overcoming-procrastination',
    '/blog/how-to-prevent-academic-burnout-without-dropping-your-gpa': '/blog/burnout-prevention',
    '/blog/the-perfect-morning-routine-for-college-students': '/blog/morning-routine'
  },
  integrations: [react(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});