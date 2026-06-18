import { i as __vite_glob_0_0, h as __vite_glob_0_1, g as __vite_glob_0_2, f as __vite_glob_0_3, e as __vite_glob_0_4, d as __vite_glob_0_5, c as __vite_glob_0_6, b as __vite_glob_0_7, a as __vite_glob_0_8, _ as __vite_glob_0_9 } from './study-schedule_4VZKFFIQ.mjs';
import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate } from './entrypoint_Bx6xXgL3.mjs';

async function getStaticPaths() {
  const posts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6,__vite_glob_0_7,__vite_glob_0_8,__vite_glob_0_9]);
  return posts.map((post) => {
    return {
      params: { slug: post.file.split("/").pop()?.replace(".mdx", "") },
      props: { post }
    };
  });
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "post.default", post.default, {})}`;
}, "D:/Github/studynova/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/Github/studynova/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
