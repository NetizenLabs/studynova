import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy - StudyNova" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-24"> <h1 class="text-4xl font-black text-[#0a2351] mb-8">Privacy Policy</h1> <div class="prose prose-lg text-gray-600"> <p>Last updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">1. Information We Collect</h2> <p>We believe in minimal data collection. The only personal information we collect is your email address, and only if you explicitly choose to subscribe to our newsletter or request a free printable planner.</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">2. How We Use Your Information</h2> <p>Your email address is used strictly to send you the resources you requested. We do not sell, rent, or share your personal information with third parties.</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">3. Local Storage & Tools</h2> <p>Our productivity tools (GPA Calculator, Pomodoro Timer, etc.) run entirely in your local browser. We do not transmit or store your grades, study hours, or personal schedules on our servers.</p> <h2 class="text-2xl font-bold text-[#0a2351] mt-8 mb-4">4. Contact Us</h2> <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@getstudynova.online" class="text-blue-600 hover:underline">hello@getstudynova.online</a>.</p> </div> </div> ` })}`;
}, "D:/Github/studynova/src/pages/privacy.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
