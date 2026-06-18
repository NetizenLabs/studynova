import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of Service - StudyNova" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-24"> <h1 class="text-4xl font-black text-[#0a2351] mb-8">Terms of Service</h1> <div class="prose prose-lg text-gray-600"> <p>Last updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">1. Acceptance of Terms</h2> <p>By accessing and using StudyNova, you accept and agree to be bound by the terms and provision of this agreement.</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">2. Use of Free Tools</h2> <p>All calculators, timers, and trackers provided on StudyNova are for educational and personal use only. We make no guarantees regarding the mathematical accuracy of the GPA or attendance calculators, and they should not be used as official academic records.</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">3. Intellectual Property</h2> <p>The content, organization, graphics, design, compilation, and other matters related to StudyNova are protected under applicable copyrights and intellectual property rights. The copying, redistribution, use or publication by you of any such matters or any part of the site is strictly prohibited.</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">4. Modifications</h2> <p>We reserve the right to modify these terms at any time. Your continued use of the site following any such modification constitutes your agreement to follow and be bound by the terms as modified.</p> </div> </div> ` })}`;
}, "D:/Github/studynova/src/pages/terms.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
