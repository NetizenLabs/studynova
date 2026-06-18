import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$ExamCountdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Exam Countdown", "description": "Stay motivated and track the time left until your upcoming exams." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-extrabold text-navy mb-4">Exam Countdown</h1> <p class="text-xl text-gray-600">Know exactly how much time you have left to prepare.</p> </div> ${renderComponent($$result2, "ExamCountdown", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Github/studynova/src/components/tools/ExamCountdown.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Github/studynova/src/pages/tools/exam-countdown.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/tools/exam-countdown.astro";
const $$url = "/tools/exam-countdown";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ExamCountdown,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
