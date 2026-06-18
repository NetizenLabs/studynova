import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_Bx6xXgL3.mjs';
import { $ as $$Layout } from './Layout_BqvE9BNM.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About StudyNova - Our Story" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> <div class="text-center mb-16"> <div class="w-24 h-24 bg-[#0a2351] rounded-full mx-auto mb-8 flex items-center justify-center"> <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path> <circle cx="12" cy="12" r="3" fill="#0a2351"></circle> </svg> </div> <h1 class="text-4xl md:text-6xl font-black text-[#0a2351] tracking-tight mb-6">Our Mission</h1> <p class="text-xl text-gray-500 leading-relaxed">We build systems, tools, and content for students who are tired of burning out.</p> </div> <div class="prose prose-lg prose-blue mx-auto text-gray-600"> <h2 class="text-2xl font-bold text-[#0a2351] mb-4">The Problem with "Hustle Culture"</h2> <p class="mb-8 leading-relaxed">
For years, students have been told that the only way to succeed is to study harder, sleep less, and drink more coffee. We completely reject this premise. Academic success shouldn't require sacrificing your mental health, your social life, or your weekends.
</p> <h2 class="text-2xl font-bold text-[#0a2351] mb-4">Why We Built StudyNova</h2> <p class="mb-8 leading-relaxed">
StudyNova was born out of necessity. We realized that most students fail not because they aren't smart enough, but because they lack a <strong>system</strong>. When you rely purely on motivation, you will eventually fail because motivation is finite.
</p> <p class="mb-8 leading-relaxed">
Systems, on the other hand, are reliable. By utilizing techniques like Time Blocking, Pomodoro sessions, Spaced Repetition, and Active Recall, we've helped thousands of students achieve higher grades while studying <em>fewer</em> hours.
</p> <h2 class="text-2xl font-bold text-[#0a2351] mb-4">Our Promise</h2> <ul class="list-disc pl-6 mb-8 space-y-3"> <li><strong>Free Core Tools:</strong> Our core calculators and timers will always be 100% free.</li> <li><strong>Privacy First:</strong> Our tools run entirely in your browser. We don't track your study habits or sell your data.</li> <li><strong>Evidence-Based:</strong> Everything we write about on our blog is backed by cognitive science, not empty motivation.</li> </ul> <div class="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center"> <h3 class="text-2xl font-bold text-[#0a2351] mb-4">Ready to upgrade your academics?</h3> <p class="text-gray-600 mb-8">Start by exploring our free browser-based tools.</p> <a href="/tools" class="inline-block px-8 py-4 bg-[#0a2351] text-white font-bold rounded-full text-lg hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
View Student Tools
</a> </div> </div> </div> ` })}`;
}, "D:/Github/studynova/src/pages/about.astro", void 0);

const $$file = "D:/Github/studynova/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
