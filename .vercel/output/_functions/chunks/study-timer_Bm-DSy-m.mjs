import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$StudyTimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Study Timer", "description": "Boost your focus with StudyNova's Pomodoro-style study timer." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-12"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-extrabold text-navy mb-4">Study Timer</h1> <p class="text-xl text-gray-600">Master your time using the Pomodoro technique.</p> </div> ${renderComponent($$result2, "StudyTimer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Github/studynova/src/components/tools/StudyTimer.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Github/studynova/src/pages/tools/study-timer.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/tools/study-timer.astro";
const $$url = "/tools/study-timer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StudyTimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
