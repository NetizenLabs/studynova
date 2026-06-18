import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$StudyTracker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Study Hours Tracker", "description": "Log your study sessions and track your progress over time." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-extrabold text-navy mb-4">Study Hours Tracker</h1> <p class="text-xl text-gray-600">Consistency is key. Log your hours and watch your effort compound.</p> </div> ${renderComponent($$result2, "StudyTracker", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Github/studynova/src/components/tools/StudyTracker.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Github/studynova/src/pages/tools/study-tracker.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/tools/study-tracker.astro";
const $$url = "/tools/study-tracker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StudyTracker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
