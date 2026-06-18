import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$GpaCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "GPA Calculator", "description": "Calculate your semester GPA easily with StudyNova's free GPA Calculator." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-extrabold text-navy mb-4">GPA Calculator</h1> <p class="text-xl text-gray-600">Track your academic progress and aim higher.</p> </div> ${renderComponent($$result2, "GpaCalculator", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Github/studynova/src/components/tools/GpaCalculator.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Github/studynova/src/pages/tools/gpa-calculator.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/tools/gpa-calculator.astro";
const $$url = "/tools/gpa-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GpaCalculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
