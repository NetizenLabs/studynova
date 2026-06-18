import { _ as __vite_glob_0_9, a as __vite_glob_0_8, b as __vite_glob_0_7, c as __vite_glob_0_6, d as __vite_glob_0_5, e as __vite_glob_0_4, f as __vite_glob_0_3, g as __vite_glob_0_2, h as __vite_glob_0_1, i as __vite_glob_0_0 } from './study-schedule_4VZKFFIQ.mjs';
import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const postImports = /* #__PURE__ */ Object.assign({"../../content/blog/active-recall.mdx": __vite_glob_0_0,"../../content/blog/burnout-prevention.mdx": __vite_glob_0_1,"../../content/blog/exam-revision-system.mdx": __vite_glob_0_2,"../../content/blog/gpa-hacking.mdx": __vite_glob_0_3,"../../content/blog/morning-routine.mdx": __vite_glob_0_4,"../../content/blog/note-taking-methods.mdx": __vite_glob_0_5,"../../content/blog/overcoming-procrastination.mdx": __vite_glob_0_6,"../../content/blog/pomodoro-technique.mdx": __vite_glob_0_7,"../../content/blog/spaced-repetition.mdx": __vite_glob_0_8,"../../content/blog/study-schedule.mdx": __vite_glob_0_9});
  const allPosts = Object.values(postImports);
  const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter?.pubDate || 0).valueOf() - new Date(a.frontmatter?.pubDate || 0).valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "StudyNova Blog - Science-Backed Study Strategies" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> <div class="mb-16"> <h1 class="text-4xl md:text-6xl font-black text-[#0a2351] tracking-tight mb-4">The StudyNova Blog</h1> <p class="text-xl text-gray-500 max-w-2xl">Stop relying on motivation. Learn the science-backed systems and strategies to secure a 4.0 GPA while actually having free time.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sortedPosts.map((post) => renderTemplate`<a${addAttribute(post.url || `/blog/${post.file.split("/").pop()?.split(".")[0]}`, "href")} class="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"> <div class="h-48 bg-[#0a2351]/5 flex items-center justify-center p-6 border-b border-gray-50"> <svg class="w-16 h-16 text-[#0a2351]/20 group-hover:text-blue-500 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path> <circle cx="12" cy="12" r="3" fill="white"></circle> </svg> </div> <div class="p-8 flex-grow flex flex-col"> <div class="flex gap-2 mb-4 flex-wrap"> ${post.frontmatter.tags?.map((tag) => renderTemplate`<span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">${tag}</span>`)} </div> <h2 class="text-2xl font-bold text-[#0a2351] mb-3 leading-tight group-hover:text-blue-600 transition-colors">${post.frontmatter.title}</h2> <p class="text-gray-500 mb-6 flex-grow leading-relaxed line-clamp-3">${post.frontmatter.description}</p> <div class="text-sm font-bold text-gray-400 uppercase tracking-widest mt-auto border-t border-gray-50 pt-6"> ${new Date(post.frontmatter.pubDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} </div> </div> </a>`)} </div> </div> ` })}`;
}, "D:/Github/studynova/src/pages/blog/index.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
