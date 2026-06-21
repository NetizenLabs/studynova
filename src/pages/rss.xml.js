export const prerender = true;
import rss from '@astrojs/rss';

export async function GET(context) {
  // Use import.meta.glob to dynamically import all blog posts
  const postImports = import.meta.glob('../content/blog/*.{md,mdx}', { eager: true });
  const posts = Object.values(postImports).filter((post) => {
    return new Date(post.frontmatter?.pubDate || 0) <= new Date();
  });

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
