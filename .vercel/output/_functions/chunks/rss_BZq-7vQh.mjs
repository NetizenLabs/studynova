import { _ as __vite_glob_0_9, a as __vite_glob_0_8, b as __vite_glob_0_7, c as __vite_glob_0_6, d as __vite_glob_0_5, e as __vite_glob_0_4, f as __vite_glob_0_3, g as __vite_glob_0_2, h as __vite_glob_0_1, i as __vite_glob_0_0 } from './study-schedule_4VZKFFIQ.mjs';
import rss from '@astrojs/rss';

async function GET(context) {
  // Use import.meta.glob to dynamically import all blog posts
  const postImports = /* #__PURE__ */ Object.assign({"../content/blog/active-recall.mdx": __vite_glob_0_0,"../content/blog/burnout-prevention.mdx": __vite_glob_0_1,"../content/blog/exam-revision-system.mdx": __vite_glob_0_2,"../content/blog/gpa-hacking.mdx": __vite_glob_0_3,"../content/blog/morning-routine.mdx": __vite_glob_0_4,"../content/blog/note-taking-methods.mdx": __vite_glob_0_5,"../content/blog/overcoming-procrastination.mdx": __vite_glob_0_6,"../content/blog/pomodoro-technique.mdx": __vite_glob_0_7,"../content/blog/spaced-repetition.mdx": __vite_glob_0_8,"../content/blog/study-schedule.mdx": __vite_glob_0_9});
  const posts = Object.values(postImports);

  return rss({
    // `<title>` field in output xml
    title: 'StudyNova Blog',
    // `<description>` field in output xml
    description: 'Evidence-based study systems, productivity hacks, and templates to help students achieve a 4.0 GPA without burning out.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => {
      // Extract the slug from the file path
      const urlMatches = post.file.match(/\/content\/blog\/(.+)\.(md|mdx)$/);
      const slug = urlMatches ? urlMatches[1] : '';
      
      return {
        title: post.frontmatter.title,
        pubDate: new Date(post.frontmatter.pubDate),
        description: post.frontmatter.description,
        customData: `<enclosure url="${context.site}${post.frontmatter.image}" length="0" type="image/png" />`,
        // Compute RSS link from post `slug`
        link: `/blog/${slug}/`,
      };
    }),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
