import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
import { x as createRenderInstruction, m as maybeRenderHead, h as addAttribute, k as renderTemplate, p as renderHead, o as renderComponent, q as renderSlot } from './entrypoint_Bx6xXgL3.mjs';
/* empty css                 */
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/tools", label: "Tools" },
    { path: "/printables", label: "Printables" },
    { path: "/about", label: "About" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-white border-b border-gray-100 sticky top-0 z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16 items-center"> <!-- Logo --> <div class="flex-shrink-0 flex items-center"> <a href="/" class="flex items-center gap-2 group"> <svg class="w-8 h-8 text-[#0a2351] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path> <circle cx="12" cy="12" r="3" fill="white"></circle> </svg> <span class="font-black text-2xl tracking-tighter text-[#0a2351]">StudyNova</span> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex space-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold tracking-wide uppercase transition-colors ${currentPath === item.path || item.path !== "/" && currentPath.startsWith(item.path) ? "border-[#0a2351] text-[#0a2351]" : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"}`, "class")}> ${item.label} </a>`)} </nav> <!-- CTA Button --> <div class="hidden md:flex items-center"> <a href="/tools" class="px-5 py-2.5 bg-[#0a2351] text-white font-bold rounded-full text-sm hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
Try Tools Free
</a> </div> <!-- Mobile menu button --> <div class="flex items-center md:hidden"> <button type="button" class="text-gray-500 hover:text-gray-900 focus:outline-none p-2" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Mobile menu --> <div class="md:hidden hidden bg-white border-b border-gray-100" id="mobile-menu"> <div class="pt-2 pb-3 space-y-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`block pl-3 pr-4 py-3 border-l-4 text-base font-bold uppercase tracking-wide ${currentPath === item.path || item.path !== "/" && currentPath.startsWith(item.path) ? "bg-blue-50 border-[#0a2351] text-[#0a2351]" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900"}`, "class")}> ${item.label} </a>`)} </div> </div> </header> ${renderScript($$result, "D:/Github/studynova/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Github/studynova/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#0a2351] text-white pt-16 pb-8 mt-20 border-t border-blue-900/50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> <div class="col-span-1 md:col-span-2"> <div class="flex items-center gap-2 mb-4"> <svg class="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path> </svg> <span class="text-2xl font-black tracking-tight">StudyNova</span> </div> <p class="text-blue-200/70 max-w-sm mb-6 leading-relaxed">
The ultimate productivity ecosystem for students. We build tools, systems, and guides to help you get a 4.0 GPA without sacrificing your weekends.
</p> </div> <div> <h4 class="text-lg font-bold mb-4 text-white">Resources</h4> <ul class="space-y-3"> <li><a href="/tools" class="text-blue-200/70 hover:text-white transition-colors">Free Student Tools</a></li> <li><a href="/printables" class="text-blue-200/70 hover:text-white transition-colors">Printable Planners</a></li> <li><a href="/blog" class="text-blue-200/70 hover:text-white transition-colors">Study Guides</a></li> <li><a href="/about" class="text-blue-200/70 hover:text-white transition-colors">Our Mission</a></li> </ul> </div> <div> <h4 class="text-lg font-bold mb-4 text-white">Legal</h4> <ul class="space-y-3"> <li><a href="/privacy" class="text-blue-200/70 hover:text-white transition-colors">Privacy Policy</a></li> <li><a href="/terms" class="text-blue-200/70 hover:text-white transition-colors">Terms of Service</a></li> <li><a href="mailto:hello@getstudynova.online" class="text-blue-200/70 hover:text-white transition-colors">Contact Us</a></li> </ul> </div> </div> <div class="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-blue-200/50 text-sm">
&copy; ${currentYear} StudyNova. All rights reserved.
</p> </div> </div> </footer>`;
}, "D:/Github/studynova/src/components/Footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "StudyNova - The Ultimate Student Productivity System" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col antialiased"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Github/studynova/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
