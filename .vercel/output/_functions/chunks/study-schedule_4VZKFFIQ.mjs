import { m as maybeRenderHead, h as addAttribute, k as renderTemplate, p as renderHead, o as renderComponent, q as renderSlot, v as createVNode, w as Fragment, _ as __astro_tag_component__ } from './entrypoint_Bx6xXgL3.mjs';
import 'clsx';
import { c as createComponent } from './astro-component_CHcEx1uS.mjs';
import 'piccolore';
/* empty css                 */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/blog", label: "Blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-50 bg-clean-white/80 backdrop-blur-md border-b border-gray-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <div class="flex items-center"> <a href="/" class="flex items-center gap-2"> <!-- We would use the nova-icon.svg here --> <div class="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white font-sora font-bold text-lg">
✧
</div> <span class="font-sora font-bold text-xl text-navy">StudyNova</span> </a> </div> <nav class="hidden md:flex space-x-8"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-charcoal hover:text-nova-blue font-medium transition-colors"> ${link.label} </a>`)} </nav> <div class="flex items-center"> <a href="/tools" class="bg-nova-blue text-white px-4 py-2 rounded-full font-medium hover:bg-navy transition-colors">
Get Started
</a> </div> </div> </div> </header>`;
}, "D:/Github/studynova/src/components/ui/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-navy text-white mt-auto py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div class="flex items-center gap-2 mb-4"> <span class="font-sora font-bold text-2xl text-white">StudyNova</span> </div> <p class="text-gray-300 max-w-xs">
Transform student chaos into structured academic success using systems.
</p> </div> <div> <h4 class="font-sora font-bold text-lg mb-4 text-mint">Explore</h4> <ul class="space-y-2 text-gray-300"> <li><a href="/tools" class="hover:text-white transition-colors">Student Tools</a></li> <li><a href="/blog" class="hover:text-white transition-colors">Blog</a></li> <li><a href="/about" class="hover:text-white transition-colors">About</a></li> </ul> </div> <div> <h4 class="font-sora font-bold text-lg mb-4 text-mint">Connect</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#" class="hover:text-white transition-colors">Pinterest</a></li> <li><a href="#" class="hover:text-white transition-colors">Newsletter</a></li> <li><a href="#" class="hover:text-white transition-colors">Contact</a></li> </ul> </div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
&copy; ${currentYear} StudyNova. All rights reserved.
</div> </footer>`;
}, "D:/Github/studynova/src/components/ui/Footer.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image = "/images/og-default.jpg" } = Astro2.props;
  const siteUrl = "https://getstudynova.online";
  const canonicalUrl = new URL(Astro2.url.pathname, siteUrl);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ? `${title} | StudyNova` : "StudyNova | Systems for Students"}</title><meta name="description"${addAttribute(description || "Transform student chaos into structured academic success using systems.", "content")}><!-- Pinterest / Open Graph --><meta property="og:title"${addAttribute(title || "StudyNova", "content")}><meta property="og:description"${addAttribute(description || "Transform student chaos into structured academic success using systems.", "content")}><meta property="og:image"${addAttribute(new URL(image, siteUrl), "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:type" content="website"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet"><!-- Pinterest Verification --><meta name="p:domain_verify" content="e88f8329208f4d7651a04a37f5f41b78">${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Github/studynova/src/components/layout/BaseLayout.astro", void 0);

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description, "image": frontmatter.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-3xl mx-auto py-8"> <header class="mb-8 text-center"> <div class="flex items-center justify-center gap-2 mb-4"> ${frontmatter.tags && frontmatter.tags.map((tag) => renderTemplate`<span class="bg-violet/10 text-violet px-3 py-1 rounded-full text-sm font-medium"> ${tag} </span>`)} </div> <h1 class="text-4xl md:text-5xl font-extrabold text-navy mb-4 leading-tight">${frontmatter.title}</h1> <p class="text-xl text-gray-600 mb-6">${frontmatter.description}</p> <div class="flex items-center justify-center gap-4 text-gray-500 text-sm"> <span class="font-medium">By ${frontmatter.author || "StudyNova Team"}</span> <span>&bull;</span> <time${addAttribute(frontmatter.pubDate, "datetime")}>${new Date(frontmatter.pubDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time> </div> </header> ${frontmatter.image && renderTemplate`<img${addAttribute(frontmatter.image, "src")}${addAttribute(frontmatter.title, "alt")} class="w-full h-auto rounded-2xl mb-12 shadow-md object-cover max-h-[400px]">`} <div class="prose prose-lg prose-indigo mx-auto prose-headings:font-sora prose-a:text-nova-blue hover:prose-a:text-navy prose-img:rounded-xl"> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })}`;
}, "D:/Github/studynova/src/layouts/BlogPost.astro", void 0);

const MDXLayout$9 = function ({children}) {
  const {layout, ...content} = frontmatter$9;
  content.file = file$9;
  content.url = url$9;
  return createVNode($$BlogPost, {
    file: file$9,
    url: url$9,
    content,
    frontmatter: content,
    headings: getHeadings$9(),
    'server:root': true,
    children
  });
};
const frontmatter$9 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Active Recall: The Most Effective Study Technique Supported by Science",
  "description": "Highlighting notes doesn't work. Learn why active recall is the single most powerful strategy to improve your exam scores.",
  "pubDate": "2026-06-22T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/01-study-schedule.png",
  "tags": ["active-recall", "science", "exam-prep"]
};
function getHeadings$9() {
  return [{
    "depth": 1,
    "slug": "the-great-highlight-illusion",
    "text": "The Great Highlight Illusion"
  }, {
    "depth": 2,
    "slug": "what-is-active-recall",
    "text": "What is Active Recall?"
  }, {
    "depth": 2,
    "slug": "how-to-implement-active-recall",
    "text": "How to Implement Active Recall"
  }, {
    "depth": 3,
    "slug": "1-flashcards-the-classic-method",
    "text": "1. Flashcards (The Classic Method)"
  }, {
    "depth": 3,
    "slug": "2-the-blurting-method",
    "text": "2. The Blurting Method"
  }, {
    "depth": 3,
    "slug": "3-practice-questions",
    "text": "3. Practice Questions"
  }, {
    "depth": 2,
    "slug": "the-ultimate-active-recall-system",
    "text": "The Ultimate Active Recall System"
  }];
}
function _createMdxContent$9(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "the-great-highlight-illusion",
      children: "The Great Highlight Illusion"
    }), "\n", createVNode(_components.p, {
      children: "Walk into any college library during midterms, and you will see hundreds of students engaged in the exact same activity: hunched over a textbook, dragging a neon yellow highlighter across the page."
    }), "\n", createVNode(_components.p, {
      children: ["It feels productive. It looks productive. But cognitive science has repeatedly proven that ", createVNode(_components.strong, {
        children: "highlighting and rereading are two of the most ineffective ways to study"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Why? Because they are forms of ", createVNode(_components.em, {
        children: "passive learning"
      }), ". Your brain isn’t actually working hard; it’s just coasting along, recognizing words it has seen before."]
    }), "\n", createVNode(_components.p, {
      children: ["If you want to actually memorize information, you need to ditch the highlighter and start using ", createVNode(_components.strong, {
        children: "Active Recall"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-is-active-recall",
      children: "What is Active Recall?"
    }), "\n", createVNode(_components.p, {
      children: "Active recall is the process of actively stimulating your memory to retrieve a piece of information from your brain, rather than passively reading it from a page."
    }), "\n", createVNode(_components.p, {
      children: ["Think of your brain like a muscle. Rereading a textbook is like watching someone else lift weights. You might understand ", createVNode(_components.em, {
        children: "how"
      }), " they are lifting the weights, but your muscles aren’t getting any stronger. Active recall is when you step up to the bar and lift the weight yourself."]
    }), "\n", createVNode(_components.p, {
      children: "Every time you force your brain to struggle to remember an answer, you strengthen the neural pathway to that information."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-to-implement-active-recall",
      children: "How to Implement Active Recall"
    }), "\n", createVNode(_components.h3, {
      id: "1-flashcards-the-classic-method",
      children: "1. Flashcards (The Classic Method)"
    }), "\n", createVNode(_components.p, {
      children: "Flashcards are the purest form of active recall. You look at a prompt, and you must retrieve the answer from your brain before you flip the card."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Warning:"
      }), " Do not flip the card immediately if you don’t know the answer! Force yourself to struggle for at least 10-15 seconds. That struggle is the exact mechanism that builds the memory."]
    }), "\n", createVNode(_components.h3, {
      id: "2-the-blurting-method",
      children: "2. The Blurting Method"
    }), "\n", createVNode(_components.p, {
      children: "This is a highly effective active recall technique for subjects with a lot of interconnected concepts (like History or Biology)."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Read a chapter or watch a lecture."
      }), "\n", createVNode(_components.li, {
        children: "Close your book and put away your notes."
      }), "\n", createVNode(_components.li, {
        children: ["Take a blank sheet of paper and ", createVNode(_components.strong, {
          children: "blurt"
        }), " (write down) absolutely everything you can remember about the topic."]
      }), "\n", createVNode(_components.li, {
        children: "Open your notes and use a red pen to fill in the gaps of what you missed."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-practice-questions",
      children: "3. Practice Questions"
    }), "\n", createVNode(_components.p, {
      children: "Taking practice exams forces you to recall information under the same conditions you will face on test day. If your professor provides past papers, treat them like gold."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-ultimate-active-recall-system",
      children: "The Ultimate Active Recall System"
    }), "\n", createVNode(_components.p, {
      children: "Active recall is hard. It is mentally exhausting. That’s why so many students default to rereading—rereading is easy."
    }), "\n", createVNode(_components.p, {
      children: ["To prevent mental fatigue, you should pair active recall sessions with the Pomodoro technique. Use our ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/study-timer",
          children: "Free Study Timer"
        })
      }), " to do 25 minutes of intense flashcard active recall, followed by a 5-minute break to let your brain recover."]
    }), "\n", createVNode(_components.p, {
      children: "Stop reading. Start retrieving."
    })]
  });
}
function MDXContent$9(props = {}) {
  return createVNode(MDXLayout$9, {
    ...props,
    children: createVNode(_createMdxContent$9, {
      ...props
    })
  });
}

const url$9 = "src/content/blog/active-recall.mdx";
const file$9 = "D:/Github/studynova/src/content/blog/active-recall.mdx";
const Content$9 = (props = {}) => MDXContent$9({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$9[Symbol.for('mdx-component')] = true;
Content$9[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$9.layout);
Content$9.moduleId = "D:/Github/studynova/src/content/blog/active-recall.mdx";
__astro_tag_component__(Content$9, 'astro:jsx');

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$9,
  default: Content$9,
  file: file$9,
  frontmatter: frontmatter$9,
  getHeadings: getHeadings$9,
  url: url$9
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$8 = function ({children}) {
  const {layout, ...content} = frontmatter$8;
  content.file = file$8;
  content.url = url$8;
  return createVNode($$BlogPost, {
    file: file$8,
    url: url$8,
    content,
    frontmatter: content,
    headings: getHeadings$8(),
    'server:root': true,
    children
  });
};
const frontmatter$8 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "How to Prevent Academic Burnout (Without Dropping Your GPA)",
  "description": "Hustle culture is a lie. Learn how to structure your semester to prevent burnout, get 8 hours of sleep, and still maintain straight A's.",
  "pubDate": "2026-06-23T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/02-motivation-vs-system.png",
  "tags": ["mental-health", "burnout", "balance"]
};
function getHeadings$8() {
  return [{
    "depth": 1,
    "slug": "the-lie-of-the-grind",
    "text": "The Lie of the “Grind”"
  }, {
    "depth": 2,
    "slug": "the-warning-signs-of-burnout",
    "text": "The Warning Signs of Burnout"
  }, {
    "depth": 2,
    "slug": "3-systems-to-prevent-burnout",
    "text": "3 Systems to Prevent Burnout"
  }, {
    "depth": 3,
    "slug": "1-treat-school-like-a-9-to-5-job",
    "text": "1. Treat School Like a 9-to-5 Job"
  }, {
    "depth": 3,
    "slug": "2-the-2-hour-rule",
    "text": "2. The 2-Hour Rule"
  }, {
    "depth": 3,
    "slug": "3-track-your-effort-not-your-results",
    "text": "3. Track Your Effort, Not Your Results"
  }, {
    "depth": 2,
    "slug": "rest-is-not-a-reward",
    "text": "Rest is Not a Reward"
  }];
}
function _createMdxContent$8(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "the-lie-of-the-grind",
      children: "The Lie of the “Grind”"
    }), "\n", createVNode(_components.p, {
      children: "“Sleep is for the weak.”\n“Rise and grind.”\n“I pulled three all-nighters this week.”"
    }), "\n", createVNode(_components.p, {
      children: "In modern academic culture, we wear sleep deprivation and exhaustion like a badge of honor. We have been conditioned to believe that if we aren’t suffering, we aren’t working hard enough."
    }), "\n", createVNode(_components.p, {
      children: ["This mindset isn’t just toxic—it’s scientifically counterproductive. Hustle culture leads directly to ", createVNode(_components.strong, {
        children: "academic burnout"
      }), ", a state of emotional, physical, and mental exhaustion caused by prolonged stress. When you are burnt out, your cognitive function plummets. You can stare at a textbook for five hours and retain absolutely nothing."]
    }), "\n", createVNode(_components.p, {
      children: "You don’t need to suffer to get a 4.0. You need a system."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-warning-signs-of-burnout",
      children: "The Warning Signs of Burnout"
    }), "\n", createVNode(_components.p, {
      children: "Burnout doesn’t happen overnight. It creeps up on you. Watch out for these symptoms:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cynicism:"
        }), " Feeling detached from your classes and wondering, ", createVNode(_components.em, {
          children: "“What’s the point of this?”"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Chronic Exhaustion:"
        }), " Waking up tired even after 8 hours of sleep."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Brain Fog:"
        }), " An inability to concentrate on simple tasks or read a single page without losing focus."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Apathy:"
        }), " Dropping hobbies and withdrawing from friends to “study more,” even though your study sessions are unproductive."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If you are experiencing these, you cannot push through them. You have to pivot."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "3-systems-to-prevent-burnout",
      children: "3 Systems to Prevent Burnout"
    }), "\n", createVNode(_components.h3, {
      id: "1-treat-school-like-a-9-to-5-job",
      children: "1. Treat School Like a 9-to-5 Job"
    }), "\n", createVNode(_components.p, {
      children: "The biggest mistake students make is letting school bleed into every hour of their day. If you don’t have hard boundaries, you will feel guilty whenever you aren’t studying."
    }), "\n", createVNode(_components.p, {
      children: ["Set a hard stop time. Tell yourself, ", createVNode(_components.em, {
        children: "“I do not open my laptop after 7:00 PM.”"
      }), " This forces you to be hyper-productive during the day because you know you have a strict deadline. When 7:00 PM hits, you are officially off the clock."]
    }), "\n", createVNode(_components.h3, {
      id: "2-the-2-hour-rule",
      children: "2. The 2-Hour Rule"
    }), "\n", createVNode(_components.p, {
      children: "Never study for more than two hours without taking a massive break."
    }), "\n", createVNode(_components.p, {
      children: ["If you plan to study all Saturday afternoon, you cannot sit at a desk from 12 PM to 6 PM. Use a tool like the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/study-timer",
          children: "StudyNova Pomodoro Timer"
        })
      }), " to work in 25-minute bursts, and after four bursts (two hours), step away completely. Go for a walk. Make food. Leave the building."]
    }), "\n", createVNode(_components.h3, {
      id: "3-track-your-effort-not-your-results",
      children: "3. Track Your Effort, Not Your Results"
    }), "\n", createVNode(_components.p, {
      children: "When you only measure your success by the letter grade on an exam, you tie your self-worth to an outcome you can’t entirely control (professors can make exams unreasonably hard)."
    }), "\n", createVNode(_components.p, {
      children: ["Instead, track your effort. Use the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/study-tracker",
          children: "Study Hours Tracker"
        })
      }), " to log your deep work sessions. If you put in 15 solid hours of deep work for a midterm, you succeeded—regardless of what the curve looks like. Tracking your inputs gives you a sense of control and significantly reduces anxiety."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "rest-is-not-a-reward",
      children: "Rest is Not a Reward"
    }), "\n", createVNode(_components.p, {
      children: "Stop treating rest as a reward you have to earn by studying. Rest is a biological necessity. It is the period where your brain actually consolidates the memories you studied that day."
    }), "\n", createVNode(_components.p, {
      children: "If you don’t schedule your breaks, your body will schedule them for you in the form of a breakdown. Build your schedule around your rest, not the other way around."
    })]
  });
}
function MDXContent$8(props = {}) {
  return createVNode(MDXLayout$8, {
    ...props,
    children: createVNode(_createMdxContent$8, {
      ...props
    })
  });
}

const url$8 = "src/content/blog/burnout-prevention.mdx";
const file$8 = "D:/Github/studynova/src/content/blog/burnout-prevention.mdx";
const Content$8 = (props = {}) => MDXContent$8({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$8[Symbol.for('mdx-component')] = true;
Content$8[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$8.layout);
Content$8.moduleId = "D:/Github/studynova/src/content/blog/burnout-prevention.mdx";
__astro_tag_component__(Content$8, 'astro:jsx');

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$8,
  default: Content$8,
  file: file$8,
  frontmatter: frontmatter$8,
  getHeadings: getHeadings$8,
  url: url$8
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$7 = function ({children}) {
  const {layout, ...content} = frontmatter$7;
  content.file = file$7;
  content.url = url$7;
  return createVNode($$BlogPost, {
    file: file$7,
    url: url$7,
    content,
    frontmatter: content,
    headings: getHeadings$7(),
    'server:root': true,
    children
  });
};
const frontmatter$7 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "The Ultimate 7-Day Exam Revision System",
  "description": "Winging the final is a recipe for disaster. Learn the exact 7-day study schedule used by top-tier students to ace midterms without cramming.",
  "pubDate": "2026-06-24T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/03-study-timer.png",
  "tags": ["exams", "planning", "system"]
};
function getHeadings$7() {
  return [{
    "depth": 1,
    "slug": "stop-winging-your-finals",
    "text": "Stop Winging Your Finals"
  }, {
    "depth": 2,
    "slug": "the-7-day-revision-protocol",
    "text": "The 7-Day Revision Protocol"
  }, {
    "depth": 3,
    "slug": "days-1-2-syllabus-mapping--triage",
    "text": "Days 1-2: Syllabus Mapping & Triage"
  }, {
    "depth": 3,
    "slug": "days-3-4-the-blurting-method",
    "text": "Days 3-4: The Blurting Method"
  }, {
    "depth": 3,
    "slug": "day-5-practice-exams-the-simulator",
    "text": "Day 5: Practice Exams (The Simulator)"
  }, {
    "depth": 3,
    "slug": "day-6-targeted-weakness-review",
    "text": "Day 6: Targeted Weakness Review"
  }, {
    "depth": 3,
    "slug": "day-7-the-wind-down",
    "text": "Day 7: The Wind Down"
  }, {
    "depth": 2,
    "slug": "keep-track-of-your-timeline",
    "text": "Keep Track of Your Timeline"
  }];
}
function _createMdxContent$7(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "stop-winging-your-finals",
      children: "Stop Winging Your Finals"
    }), "\n", createVNode(_components.p, {
      children: "The most common strategy for midterms and finals is a strategy of pure chaos: wait until three days before the exam, open the textbook to page 1, and start reading until your eyes bleed."
    }), "\n", createVNode(_components.p, {
      children: "This is the fastest way to trigger a panic attack. When you don’t have a plan, the sheer volume of information you need to learn feels insurmountable."
    }), "\n", createVNode(_components.p, {
      children: ["You need a systematic approach that breaks the syllabus down into manageable daily chunks. You need the ", createVNode(_components.strong, {
        children: "7-Day Revision System"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-7-day-revision-protocol",
      children: "The 7-Day Revision Protocol"
    }), "\n", createVNode(_components.p, {
      children: "This system assumes you have one week until your exam. It prevents cramming by spreading out the cognitive load."
    }), "\n", createVNode(_components.h3, {
      id: "days-1-2-syllabus-mapping--triage",
      children: "Days 1-2: Syllabus Mapping & Triage"
    }), "\n", createVNode(_components.p, {
      children: "You cannot study everything. Triage is the medical process of prioritizing patients based on the severity of their condition. You must triage your syllabus."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Go through the syllabus and rate every topic on a scale of 1 (I know nothing) to 5 (I could teach this)."
      }), "\n", createVNode(_components.li, {
        children: "Cross out the 5s. You don’t need to study what you already know."
      }), "\n", createVNode(_components.li, {
        children: ["Spend these two days aggressively reviewing the 1s and 2s using the ", createVNode(_components.strong, {
          children: "Feynman Technique"
        }), " (explaining the concept out loud like you’re teaching a 5-year-old)."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "days-3-4-the-blurting-method",
      children: "Days 3-4: The Blurting Method"
    }), "\n", createVNode(_components.p, {
      children: "Now that you have a baseline understanding of your weak spots, it’s time to connect the dots."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Take a blank piece of paper and write down the main topic in the center."
      }), "\n", createVNode(_components.li, {
        children: "“Blurt” everything you know about the topic from memory."
      }), "\n", createVNode(_components.li, {
        children: "Open your notes and use a red pen to correct your mistakes and fill in the gaps. This forces active recall."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "day-5-practice-exams-the-simulator",
      children: "Day 5: Practice Exams (The Simulator)"
    }), "\n", createVNode(_components.p, {
      children: "If you want to run a marathon, you don’t just read books about running—you run. If you want to ace an exam, you have to take exams."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Do every past paper, practice question, and textbook problem you can find."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Crucial:"
        }), " Do them under exam conditions. No notes, no music, use a timer."]
      }), "\n", createVNode(_components.li, {
        children: "Grade yourself ruthlessly."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "day-6-targeted-weakness-review",
      children: "Day 6: Targeted Weakness Review"
    }), "\n", createVNode(_components.p, {
      children: "Look at the practice exams you took yesterday. What did you get wrong?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Spend Day 6 doing targeted, surgical strikes on the exact formulas, definitions, or concepts you messed up on the practice test. Do not review the whole syllabus again."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "day-7-the-wind-down",
      children: "Day 7: The Wind Down"
    }), "\n", createVNode(_components.p, {
      children: "The day before the exam is not for learning new information. It is for consolidation."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Do a light review of your flashcards."
      }), "\n", createVNode(_components.li, {
        children: "Pack your bag."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Stop studying at 8:00 PM."
        }), " Watch a movie, take a bath, and get 8 hours of sleep. If you don’t sleep, your brain cannot process the information you’ve spent 6 days studying."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "keep-track-of-your-timeline",
      children: "Keep Track of Your Timeline"
    }), "\n", createVNode(_components.p, {
      children: "If you have five finals in the same week, running a 7-day revision system for all of them requires military-level organization."
    }), "\n", createVNode(_components.p, {
      children: ["Use the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/exam-countdown",
          children: "StudyNova Exam Countdown Tool"
        })
      }), " to build a visual dashboard of exactly how many days you have until each test. By seeing your deadlines mapped out, you can trigger your 7-Day Revision System at the exact right moment for every single class."]
    })]
  });
}
function MDXContent$7(props = {}) {
  return createVNode(MDXLayout$7, {
    ...props,
    children: createVNode(_createMdxContent$7, {
      ...props
    })
  });
}

const url$7 = "src/content/blog/exam-revision-system.mdx";
const file$7 = "D:/Github/studynova/src/content/blog/exam-revision-system.mdx";
const Content$7 = (props = {}) => MDXContent$7({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$7[Symbol.for('mdx-component')] = true;
Content$7[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$7.layout);
Content$7.moduleId = "D:/Github/studynova/src/content/blog/exam-revision-system.mdx";
__astro_tag_component__(Content$7, 'astro:jsx');

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$7,
  default: Content$7,
  file: file$7,
  frontmatter: frontmatter$7,
  getHeadings: getHeadings$7,
  url: url$7
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$6 = function ({children}) {
  const {layout, ...content} = frontmatter$6;
  content.file = file$6;
  content.url = url$6;
  return createVNode($$BlogPost, {
    file: file$6,
    url: url$6,
    content,
    frontmatter: content,
    headings: getHeadings$6(),
    'server:root': true,
    children
  });
};
const frontmatter$6 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "The Math Behind a 4.0: How to Reverse-Engineer Your Semester GPA",
  "description": "Stop guessing what you need on the final exam. Learn how to calculate your grades mathematically so you can study smarter, not harder.",
  "pubDate": "2026-06-21T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/04-stop-random-studying.png",
  "tags": ["gpa", "planning", "strategy"]
};
function getHeadings$6() {
  return [{
    "depth": 1,
    "slug": "hope-is-not-a-study-strategy",
    "text": "Hope is Not a Study Strategy"
  }, {
    "depth": 2,
    "slug": "why-you-need-to-track-your-grades-manually",
    "text": "Why You Need to Track Your Grades Manually"
  }, {
    "depth": 2,
    "slug": "the-3-step-gpa-hacking-framework",
    "text": "The 3-Step GPA Hacking Framework"
  }, {
    "depth": 3,
    "slug": "step-1-syllabus-extraction",
    "text": "Step 1: Syllabus Extraction"
  }, {
    "depth": 3,
    "slug": "step-2-the-safety-net",
    "text": "Step 2: The Safety Net"
  }, {
    "depth": 3,
    "slug": "step-3-the-final-exam-calculation",
    "text": "Step 3: The Final Exam Calculation"
  }, {
    "depth": 2,
    "slug": "the-easiest-way-to-do-the-math",
    "text": "The Easiest Way to Do the Math"
  }];
}
function _createMdxContent$6(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "hope-is-not-a-study-strategy",
      children: "Hope is Not a Study Strategy"
    }), "\n", createVNode(_components.p, {
      children: "“I just hope I get an A on the final so I can pass the class.”"
    }), "\n", createVNode(_components.p, {
      children: "If you have ever uttered this sentence, you are playing academic roulette. High-achieving students don’t hope they get good grades. They calculate exactly what they need, down to the decimal point, and then execute a plan to get it."
    }), "\n", createVNode(_components.p, {
      children: ["This is the concept of ", createVNode(_components.strong, {
        children: "Reverse-Engineering Your GPA"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "why-you-need-to-track-your-grades-manually",
      children: "Why You Need to Track Your Grades Manually"
    }), "\n", createVNode(_components.p, {
      children: "Most students rely entirely on their university’s online portal (like Canvas or Blackboard) to tell them their current grade. The problem? Professors notoriously forget to input weights correctly, or they leave assignments ungraded until the last week of the semester."
    }), "\n", createVNode(_components.p, {
      children: "If you wait until Week 14 to realize that your midterm is actually worth 40% of your grade instead of 20%, it’s too late to fix it."
    }), "\n", createVNode(_components.p, {
      children: "You must take ownership of your grades on Day 1."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-3-step-gpa-hacking-framework",
      children: "The 3-Step GPA Hacking Framework"
    }), "\n", createVNode(_components.h3, {
      id: "step-1-syllabus-extraction",
      children: "Step 1: Syllabus Extraction"
    }), "\n", createVNode(_components.p, {
      children: ["During the first week of classes, pull up the syllabus for every single course. You are looking for one thing: ", createVNode(_components.strong, {
        children: "The Grading Rubric"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Write down exactly how the class is weighted:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Midterms: 30%"
      }), "\n", createVNode(_components.li, {
        children: "Final Exam: 40%"
      }), "\n", createVNode(_components.li, {
        children: "Assignments: 20%"
      }), "\n", createVNode(_components.li, {
        children: "Participation: 10%"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-2-the-safety-net",
      children: "Step 2: The Safety Net"
    }), "\n", createVNode(_components.p, {
      children: "Your goal should be to max out the “easy” categories so you have a massive safety net for the hard categories."
    }), "\n", createVNode(_components.p, {
      children: "If assignments and participation make up 30% of your grade, you need to secure a 100% in those categories. If you lock in that 30%, you only need to average an 85% on your brutally hard exams to secure an A- in the course."
    }), "\n", createVNode(_components.p, {
      children: ["To make sure you never miss an easy participation point or a pop quiz, use our ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/attendance-calculator",
          children: "Free Attendance Calculator"
        })
      }), " to monitor exactly how many classes you can strategically miss without losing marks."]
    }), "\n", createVNode(_components.h3, {
      id: "step-3-the-final-exam-calculation",
      children: "Step 3: The Final Exam Calculation"
    }), "\n", createVNode(_components.p, {
      children: ["When you get to the last month of the semester, you should never be guessing what you need on the final. You should be able to say: ", createVNode(_components.em, {
        children: "“I need exactly a 78.5% on the final to keep my A in this class.”"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Knowing this number reduces exam anxiety drastically. If you realize you only need a 60% on the Calculus final to keep your B+, you can stop stressing about Calculus and spend more time studying for Chemistry, where you need a 92% to get an A."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-easiest-way-to-do-the-math",
      children: "The Easiest Way to Do the Math"
    }), "\n", createVNode(_components.p, {
      children: ["You don’t need a spreadsheet to do this. We built a custom ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/gpa-calculator",
          children: "Free Semester GPA Calculator"
        })
      }), " specifically for this purpose."]
    }), "\n", createVNode(_components.p, {
      children: "Here is how you use it:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Input your current classes and their credit hours."
      }), "\n", createVNode(_components.li, {
        children: "Input your current grades."
      }), "\n", createVNode(_components.li, {
        children: "The tool will instantly project your final GPA for the semester."
      }), "\n", createVNode(_components.li, {
        children: "Play around with the numbers! See what happens to your GPA if you get a B in Biology instead of an A."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "By running these simulations early in the semester, you know exactly which classes need your attention, allowing you to study strategically rather than randomly."
    })]
  });
}
function MDXContent$6(props = {}) {
  return createVNode(MDXLayout$6, {
    ...props,
    children: createVNode(_createMdxContent$6, {
      ...props
    })
  });
}

const url$6 = "src/content/blog/gpa-hacking.mdx";
const file$6 = "D:/Github/studynova/src/content/blog/gpa-hacking.mdx";
const Content$6 = (props = {}) => MDXContent$6({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$6[Symbol.for('mdx-component')] = true;
Content$6[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$6.layout);
Content$6.moduleId = "D:/Github/studynova/src/content/blog/gpa-hacking.mdx";
__astro_tag_component__(Content$6, 'astro:jsx');

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$6,
  default: Content$6,
  file: file$6,
  frontmatter: frontmatter$6,
  getHeadings: getHeadings$6,
  url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$5 = function ({children}) {
  const {layout, ...content} = frontmatter$5;
  content.file = file$5;
  content.url = url$5;
  return createVNode($$BlogPost, {
    file: file$5,
    url: url$5,
    content,
    frontmatter: content,
    headings: getHeadings$5(),
    'server:root': true,
    children
  });
};
const frontmatter$5 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "The Perfect Morning Routine for College Students",
  "description": "Stop hitting snooze. Learn how a simple 30-minute morning routine can prime your brain for deep work and destroy procrastination.",
  "pubDate": "2026-06-26T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/05-free-planner.png",
  "tags": ["routine", "habits", "productivity"]
};
function getHeadings$5() {
  return [{
    "depth": 1,
    "slug": "win-the-morning-win-the-day",
    "text": "Win the Morning, Win the Day"
  }, {
    "depth": 2,
    "slug": "the-3-step-prime-the-brain-routine",
    "text": "The 3-Step “Prime the Brain” Routine"
  }, {
    "depth": 3,
    "slug": "1-hydrate-before-you-caffeinate-5-mins",
    "text": "1. Hydrate Before You Caffeinate (5 mins)"
  }, {
    "depth": 3,
    "slug": "2-physical-momentum-10-mins",
    "text": "2. Physical Momentum (10 mins)"
  }, {
    "depth": 3,
    "slug": "3-eat-the-frog-15-mins",
    "text": "3. Eat the Frog (15 mins)"
  }, {
    "depth": 2,
    "slug": "the-one-rule-no-phones-in-bed",
    "text": "The One Rule: No Phones in Bed"
  }, {
    "depth": 2,
    "slug": "track-your-consistency",
    "text": "Track Your Consistency"
  }];
}
function _createMdxContent$5(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "win-the-morning-win-the-day",
      children: "Win the Morning, Win the Day"
    }), "\n", createVNode(_components.p, {
      children: "If you wake up at 8:45 AM for a 9:00 AM class, throw on a hoodie, skip breakfast, and sprint across campus, your brain is starting the day in a state of high-stress reactivity."
    }), "\n", createVNode(_components.p, {
      children: "You are immediately playing catch-up."
    }), "\n", createVNode(_components.p, {
      children: ["High-performing students don’t rely on motivation; they rely on systems. And the most important system you can build is a ", createVNode(_components.strong, {
        children: "Morning Routine"
      }), ". A consistent morning routine shifts your brain from reactive mode to proactive mode."]
    }), "\n", createVNode(_components.p, {
      children: "You don’t need a crazy 5:00 AM ice-bath routine like a Silicon Valley CEO. You just need 30 minutes."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-3-step-prime-the-brain-routine",
      children: "The 3-Step “Prime the Brain” Routine"
    }), "\n", createVNode(_components.h3, {
      id: "1-hydrate-before-you-caffeinate-5-mins",
      children: "1. Hydrate Before You Caffeinate (5 mins)"
    }), "\n", createVNode(_components.p, {
      children: "When you wake up, your body is severely dehydrated from 8 hours of sleep. Dehydration causes brain fog and lethargy. Before you touch a coffee maker, drink a large glass of water. It kickstarts your metabolism and tells your brain it’s time to wake up."
    }), "\n", createVNode(_components.h3, {
      id: "2-physical-momentum-10-mins",
      children: "2. Physical Momentum (10 mins)"
    }), "\n", createVNode(_components.p, {
      children: "You don’t need to run a 5k, but you do need to move blood to your brain. Do 10 minutes of stretching, yoga, or a quick bodyweight workout in your dorm room. Physical momentum translates into mental momentum."
    }), "\n", createVNode(_components.h3, {
      id: "3-eat-the-frog-15-mins",
      children: "3. Eat the Frog (15 mins)"
    }), "\n", createVNode(_components.p, {
      children: ["Mark Twain famously said, ", createVNode(_components.em, {
        children: "“If it’s your job to eat a frog, it’s best to do it first thing in the morning.”"
      }), " The “frog” is your hardest, most anxiety-inducing task of the day."]
    }), "\n", createVNode(_components.p, {
      children: "Before you check your phone, before you open TikTok, sit at your desk for 15 minutes and tackle the frog. Review one set of flashcards. Write one paragraph of your essay. Outline your lab report."
    }), "\n", createVNode(_components.p, {
      children: "By getting a quick win within 30 minutes of waking up, you trigger a dopamine release that makes you feel unstoppable for the rest of the day."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-one-rule-no-phones-in-bed",
      children: "The One Rule: No Phones in Bed"
    }), "\n", createVNode(_components.p, {
      children: "The entire routine is destroyed if the first thing you do when you open your eyes is check your phone. Scrolling social media instantly floods your brain with cheap dopamine and hijacks your attention span."
    }), "\n", createVNode(_components.p, {
      children: "Buy a cheap digital alarm clock and charge your phone across the room. Force yourself to physically stand up to turn off the alarm."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "track-your-consistency",
      children: "Track Your Consistency"
    }), "\n", createVNode(_components.p, {
      children: "Building a morning routine is hard. The easiest way to stick with it is to visually track your progress."
    }), "\n", createVNode(_components.p, {
      children: ["Use the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/study-tracker",
          children: "StudyNova Study Tracker"
        })
      }), " to log your early morning study sessions. Seeing a streak of “frogs eaten” at 8:00 AM every day is the ultimate motivation to keep going."]
    })]
  });
}
function MDXContent$5(props = {}) {
  return createVNode(MDXLayout$5, {
    ...props,
    children: createVNode(_createMdxContent$5, {
      ...props
    })
  });
}

const url$5 = "src/content/blog/morning-routine.mdx";
const file$5 = "D:/Github/studynova/src/content/blog/morning-routine.mdx";
const Content$5 = (props = {}) => MDXContent$5({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$5[Symbol.for('mdx-component')] = true;
Content$5[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$5.layout);
Content$5.moduleId = "D:/Github/studynova/src/content/blog/morning-routine.mdx";
__astro_tag_component__(Content$5, 'astro:jsx');

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$5,
  default: Content$5,
  file: file$5,
  frontmatter: frontmatter$5,
  getHeadings: getHeadings$5,
  url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$4 = function ({children}) {
  const {layout, ...content} = frontmatter$4;
  content.file = file$4;
  content.url = url$4;
  return createVNode($$BlogPost, {
    file: file$4,
    url: url$4,
    content,
    frontmatter: content,
    headings: getHeadings$4(),
    'server:root': true,
    children
  });
};
const frontmatter$4 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "The Cornell Notes Method: Take Notes That Actually Help You Study",
  "description": "Are your notes just a transcription of the lecture? Learn how to use the Cornell method to turn your notes into an active recall study guide.",
  "pubDate": "2026-06-25T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/06-2-hour-rule.png",
  "tags": ["note-taking", "system", "organization"]
};
function getHeadings$4() {
  return [{
    "depth": 1,
    "slug": "the-problem-with-traditional-notes",
    "text": "The Problem with Traditional Notes"
  }, {
    "depth": 2,
    "slug": "how-to-set-up-cornell-notes",
    "text": "How to Set Up Cornell Notes"
  }, {
    "depth": 3,
    "slug": "1-the-notes-section-right-side",
    "text": "1. The Notes Section (Right Side)"
  }, {
    "depth": 3,
    "slug": "2-the-cue-column-left-side",
    "text": "2. The Cue Column (Left Side)"
  }, {
    "depth": 3,
    "slug": "3-the-summary-box-bottom",
    "text": "3. The Summary Box (Bottom)"
  }, {
    "depth": 2,
    "slug": "how-to-study-with-cornell-notes",
    "text": "How to Study with Cornell Notes"
  }, {
    "depth": 2,
    "slug": "track-your-lecture-hours",
    "text": "Track Your Lecture Hours"
  }];
}
function _createMdxContent$4(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "the-problem-with-traditional-notes",
      children: "The Problem with Traditional Notes"
    }), "\n", createVNode(_components.p, {
      children: "Most students take notes like court stenographers. The professor talks, and the student aggressively types every single word on their laptop, desperately trying to transcribe the lecture."
    }), "\n", createVNode(_components.p, {
      children: "When you transcribe, your brain goes on autopilot. The information travels from your ears directly to your fingers, completely bypassing the critical thinking centers of your brain."
    }), "\n", createVNode(_components.p, {
      children: "Worse, when it’s time to study, you are left with a massive block of dense text that is impossible to review efficiently. Your notes should not be a textbook; they should be a study tool."
    }), "\n", createVNode(_components.p, {
      children: ["Enter the ", createVNode(_components.strong, {
        children: "Cornell Note-Taking Method"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-to-set-up-cornell-notes",
      children: "How to Set Up Cornell Notes"
    }), "\n", createVNode(_components.p, {
      children: "Invented by a Cornell University professor in the 1950s, this method forces you to synthesize information and builds an active recall system directly into your page."
    }), "\n", createVNode(_components.p, {
      children: "Divide your paper (or digital template) into three sections:"
    }), "\n", createVNode(_components.h3, {
      id: "1-the-notes-section-right-side",
      children: "1. The Notes Section (Right Side)"
    }), "\n", createVNode(_components.p, {
      children: "This is the largest section, taking up the right two-thirds of the page. This is where you take notes during the lecture."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Do not write full sentences. Use abbreviations, bullet points, and diagrams."
      }), "\n", createVNode(_components.li, {
        children: "Focus on capturing the main ideas, not every word."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-the-cue-column-left-side",
      children: "2. The Cue Column (Left Side)"
    }), "\n", createVNode(_components.p, {
      children: ["This is a narrow column on the left. ", createVNode(_components.strong, {
        children: "Leave this blank during the lecture."
      }), "\nAfter class, within 24 hours, review your notes and write prompts, questions, or key terms in this column that correspond to the notes on the right."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Example Notes:"
        }), " “Mitochondria generates ATP through cellular respiration.”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Example Cue:"
        }), " “What is the function of the mitochondria?“"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-the-summary-box-bottom",
      children: "3. The Summary Box (Bottom)"
    }), "\n", createVNode(_components.p, {
      children: "At the bottom of the page, write a 1-2 sentence summary of the entire lecture in your own words. This forces you to synthesize the big picture."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-to-study-with-cornell-notes",
      children: "How to Study with Cornell Notes"
    }), "\n", createVNode(_components.p, {
      children: "The magic of the Cornell method isn’t in how you take the notes; it’s in how you use them to study."
    }), "\n", createVNode(_components.p, {
      children: "Because you created the “Cue Column” with questions, your notes have magically transformed into a built-in flashcard system!"
    }), "\n", createVNode(_components.p, {
      children: "When studying for midterms:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Cover the large “Notes Section” on the right with a piece of paper."
      }), "\n", createVNode(_components.li, {
        children: "Look at the question in the “Cue Column” on the left."
      }), "\n", createVNode(_components.li, {
        children: ["Use ", createVNode(_components.strong, {
          children: "Active Recall"
        }), " to answer the question out loud."]
      }), "\n", createVNode(_components.li, {
        children: "Slide the paper down to check if you were right."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You no longer have to waste hours making flashcards on Quizlet before an exam—your notes ", createVNode(_components.em, {
        children: "are"
      }), " the flashcards."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "track-your-lecture-hours",
      children: "Track Your Lecture Hours"
    }), "\n", createVNode(_components.p, {
      children: "If you are going to take the time to build beautiful Cornell notes, you actually have to show up to the lecture."
    }), "\n", createVNode(_components.p, {
      children: ["Use the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/attendance-calculator",
          children: "StudyNova Attendance Calculator"
        })
      }), " to monitor your skips and ensure you are in the room to capture the critical information that isn’t on the slides."]
    })]
  });
}
function MDXContent$4(props = {}) {
  return createVNode(MDXLayout$4, {
    ...props,
    children: createVNode(_createMdxContent$4, {
      ...props
    })
  });
}

const url$4 = "src/content/blog/note-taking-methods.mdx";
const file$4 = "D:/Github/studynova/src/content/blog/note-taking-methods.mdx";
const Content$4 = (props = {}) => MDXContent$4({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$4[Symbol.for('mdx-component')] = true;
Content$4[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$4.layout);
Content$4.moduleId = "D:/Github/studynova/src/content/blog/note-taking-methods.mdx";
__astro_tag_component__(Content$4, 'astro:jsx');

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$4,
  default: Content$4,
  file: file$4,
  frontmatter: frontmatter$4,
  getHeadings: getHeadings$4,
  url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$3 = function ({children}) {
  const {layout, ...content} = frontmatter$3;
  content.file = file$3;
  content.url = url$3;
  return createVNode($$BlogPost, {
    file: file$3,
    url: url$3,
    content,
    frontmatter: content,
    headings: getHeadings$3(),
    'server:root': true,
    children
  });
};
const frontmatter$3 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "How to Stop Procrastinating: The 5-Minute Rule",
  "description": "Procrastination isn't a time management problem; it's an emotion management problem. Learn how to trick your brain into starting hard tasks.",
  "pubDate": "2026-06-27T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/07-todo-vs-timeblock.png",
  "tags": ["procrastination", "psychology", "mindset"]
};
function getHeadings$3() {
  return [{
    "depth": 1,
    "slug": "why-do-we-procrastinate",
    "text": "Why Do We Procrastinate?"
  }, {
    "depth": 2,
    "slug": "the-5-minute-rule",
    "text": "The 5-Minute Rule"
  }, {
    "depth": 3,
    "slug": "the-magic-of-physics",
    "text": "The Magic of Physics"
  }, {
    "depth": 2,
    "slug": "break-the-task-down-the-micro-step-strategy",
    "text": "Break the Task Down (The Micro-Step Strategy)"
  }, {
    "depth": 2,
    "slug": "lock-yourself-in",
    "text": "Lock Yourself In"
  }];
}
function _createMdxContent$3(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "why-do-we-procrastinate",
      children: "Why Do We Procrastinate?"
    }), "\n", createVNode(_components.p, {
      children: "Most people think procrastination is a sign of laziness or poor time management. It’s neither."
    }), "\n", createVNode(_components.p, {
      children: ["Psychologists have proven that procrastination is an ", createVNode(_components.strong, {
        children: "emotion regulation problem"
      }), ". When you look at a massive, 15-page research paper you have to write, your brain perceives it as a threat. It triggers feelings of anxiety, overwhelm, and self-doubt."]
    }), "\n", createVNode(_components.p, {
      children: "To escape those negative emotions, your brain seeks immediate relief. And what provides faster relief than scrolling through TikTok or suddenly deciding your room needs to be aggressively vacuumed?"
    }), "\n", createVNode(_components.p, {
      children: "You procrastinate because your brain is trying to protect you from stress. To beat it, you have to trick your brain into feeling safe."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-5-minute-rule",
      children: "The 5-Minute Rule"
    }), "\n", createVNode(_components.p, {
      children: "If the problem is the fear of the massive task, the solution is to make the task infinitely small."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "The 5-Minute Rule"
      }), " is a psychological trick where you make a deal with yourself: ", createVNode(_components.em, {
        children: "“I am only going to work on this assignment for 5 minutes. If I want to quit after 5 minutes, I am completely allowed to.”"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Your brain doesn’t perceive a 5-minute task as a threat. 5 minutes is nothing. The resistance disappears, and you sit down to start."
    }), "\n", createVNode(_components.h3, {
      id: "the-magic-of-physics",
      children: "The Magic of Physics"
    }), "\n", createVNode(_components.p, {
      children: ["Sir Isaac Newton’s First Law of Motion states: ", createVNode(_components.em, {
        children: "An object at rest stays at rest, and an object in motion stays in motion."
      })]
    }), "\n", createVNode(_components.p, {
      children: "This applies to studying. The hardest part of studying is the transition from “not studying” to “studying.” Once you sit down and work for 5 minutes, you have overcome the friction of starting. 80% of the time, once the 5 minutes are up, you will naturally just keep going because you are already in motion."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "break-the-task-down-the-micro-step-strategy",
      children: "Break the Task Down (The Micro-Step Strategy)"
    }), "\n", createVNode(_components.p, {
      children: "Another way to reduce the “threat” level of an assignment is to break it down into ridiculously small micro-steps."
    }), "\n", createVNode(_components.p, {
      children: "Instead of putting “Write History Essay” on your to-do list (which is terrifying), break it down into:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Open a Google Doc and write the title."
      }), "\n", createVNode(_components.li, {
        children: "Find 3 sources."
      }), "\n", createVNode(_components.li, {
        children: "Write a 1-sentence thesis statement."
      }), "\n", createVNode(_components.li, {
        children: "Write the first sentence of the intro."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Anyone can open a Google Doc. Make the first step so easy that it is impossible to fail."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "lock-yourself-in",
      children: "Lock Yourself In"
    }), "\n", createVNode(_components.p, {
      children: "Sometimes, willpower isn’t enough, and you have to remove the option to escape."
    }), "\n", createVNode(_components.p, {
      children: ["When you trigger the 5-Minute Rule, use the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/study-timer",
          children: "StudyNova Pomodoro Timer"
        })
      }), ". Lock in a short 25-minute focus block, throw your phone across the room, and commit to the timer."]
    }), "\n", createVNode(_components.p, {
      children: "Action cures fear. Start the timer, and the procrastination will fade."
    })]
  });
}
function MDXContent$3(props = {}) {
  return createVNode(MDXLayout$3, {
    ...props,
    children: createVNode(_createMdxContent$3, {
      ...props
    })
  });
}

const url$3 = "src/content/blog/overcoming-procrastination.mdx";
const file$3 = "D:/Github/studynova/src/content/blog/overcoming-procrastination.mdx";
const Content$3 = (props = {}) => MDXContent$3({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$3[Symbol.for('mdx-component')] = true;
Content$3[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$3.layout);
Content$3.moduleId = "D:/Github/studynova/src/content/blog/overcoming-procrastination.mdx";
__astro_tag_component__(Content$3, 'astro:jsx');

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  default: Content$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$2 = function ({children}) {
  const {layout, ...content} = frontmatter$2;
  content.file = file$2;
  content.url = url$2;
  return createVNode($$BlogPost, {
    file: file$2,
    url: url$2,
    content,
    frontmatter: content,
    headings: getHeadings$2(),
    'server:root': true,
    children
  });
};
const frontmatter$2 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "The Ultimate Guide to the Pomodoro Technique for College Students",
  "description": "Why studying for 4 hours straight is ruining your grades. Learn how to use the 25-minute Pomodoro method to enter deep work and memorize faster.",
  "pubDate": "2026-06-19T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/08-maximize-focus.png",
  "tags": ["focus", "productivity", "time-management"]
};
function getHeadings$2() {
  return [{
    "depth": 1,
    "slug": "why-marathon-studying-is-ruining-your-grades",
    "text": "Why Marathon Studying is Ruining Your Grades"
  }, {
    "depth": 2,
    "slug": "what-is-the-pomodoro-technique",
    "text": "What is the Pomodoro Technique?"
  }, {
    "depth": 2,
    "slug": "the-psychology-of-the-25-minute-sprint",
    "text": "The Psychology of the 25-Minute Sprint"
  }, {
    "depth": 3,
    "slug": "1-it-kills-procrastination",
    "text": "1. It Kills Procrastination"
  }, {
    "depth": 3,
    "slug": "2-it-forces-deep-work",
    "text": "2. It Forces Deep Work"
  }, {
    "depth": 3,
    "slug": "3-it-prevents-burnout",
    "text": "3. It Prevents Burnout"
  }, {
    "depth": 2,
    "slug": "how-to-do-pomodoros-the-right-way",
    "text": "How to Do Pomodoros the Right Way"
  }, {
    "depth": 3,
    "slug": "rule-1-zero-tolerance-for-distractions",
    "text": "Rule 1: Zero Tolerance for Distractions"
  }, {
    "depth": 3,
    "slug": "rule-2-rest-means-rest",
    "text": "Rule 2: Rest Means Rest"
  }, {
    "depth": 3,
    "slug": "rule-3-use-a-dedicated-tool",
    "text": "Rule 3: Use a Dedicated Tool"
  }, {
    "depth": 2,
    "slug": "modifying-the-pomodoro-for-college",
    "text": "Modifying the Pomodoro for College"
  }, {
    "depth": 2,
    "slug": "your-action-plan-for-today",
    "text": "Your Action Plan for Today"
  }];
}
function _createMdxContent$2(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "why-marathon-studying-is-ruining-your-grades",
      children: "Why Marathon Studying is Ruining Your Grades"
    }), "\n", createVNode(_components.p, {
      children: "We’ve all been there. You sit down in the library at 6:00 PM with a venti iced coffee, determined to read three chapters of Biology. By 10:00 PM, you’ve scrolled TikTok for two hours, highlighted three paragraphs, and your brain feels like mush."
    }), "\n", createVNode(_components.p, {
      children: ["This is the fatal flaw of ", createVNode(_components.strong, {
        children: "marathon studying"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "The human brain is not designed to focus intensely for four hours straight. According to cognitive science, our attention span drops significantly after about 30 to 45 minutes of continuous focus. When you try to push past that wall, you enter the “illusion of competence.” You feel like you’re studying because you’re staring at a textbook, but you aren’t actually encoding any new information."
    }), "\n", createVNode(_components.p, {
      children: ["The solution? ", createVNode(_components.strong, {
        children: "The Pomodoro Technique"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-is-the-pomodoro-technique",
      children: "What is the Pomodoro Technique?"
    }), "\n", createVNode(_components.p, {
      children: "Invented in the late 1980s by Francesco Cirillo, the Pomodoro Technique is a time-management method that breaks work into short, highly focused intervals separated by brief breaks."
    }), "\n", createVNode(_components.p, {
      children: "The standard framework is incredibly simple:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Choose a single task"
        }), " (e.g., “Read Chapter 4 and take Cornell notes”)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Set a timer for 25 minutes"
        }), ". This is one “Pomodoro.”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Work with zero distractions"
        }), ". No phone, no tabs, no chatting."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "When the timer rings, take a 5-minute break"
        }), ". Step away from the desk."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "After 4 Pomodoros, take a long break"
        }), " (15-30 minutes)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It sounds too simple to work, but the psychology behind it is bulletproof."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-psychology-of-the-25-minute-sprint",
      children: "The Psychology of the 25-Minute Sprint"
    }), "\n", createVNode(_components.h3, {
      id: "1-it-kills-procrastination",
      children: "1. It Kills Procrastination"
    }), "\n", createVNode(_components.p, {
      children: "The hardest part of studying is starting. When you tell yourself, “I need to study for 5 hours today,” your brain panics and seeks dopamine (hello, Instagram). But when you tell yourself, “I only need to study for 25 minutes,” the resistance disappears."
    }), "\n", createVNode(_components.h3, {
      id: "2-it-forces-deep-work",
      children: "2. It Forces Deep Work"
    }), "\n", createVNode(_components.p, {
      children: "When you only have 25 minutes on the clock, you naturally work faster and with more intensity. You know a break is coming soon, so you don’t feel the need to “pace yourself” by multi-tasking."
    }), "\n", createVNode(_components.h3, {
      id: "3-it-prevents-burnout",
      children: "3. It Prevents Burnout"
    }), "\n", createVNode(_components.p, {
      children: "Those 5-minute breaks allow your brain to process the information you just learned and reset your attention span. By the time you finish a 3-hour study session using Pomodoros, you’ll feel significantly less fatigued than if you tried to cram straight through."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-to-do-pomodoros-the-right-way",
      children: "How to Do Pomodoros the Right Way"
    }), "\n", createVNode(_components.p, {
      children: "A lot of students try the Pomodoro technique and fail because they don’t follow the golden rules. Here is how to execute a flawless Pomodoro session:"
    }), "\n", createVNode(_components.h3, {
      id: "rule-1-zero-tolerance-for-distractions",
      children: "Rule 1: Zero Tolerance for Distractions"
    }), "\n", createVNode(_components.p, {
      children: "A Pomodoro is an indivisible unit of work. If you check your phone at minute 14, the Pomodoro is ruined, and you have to start the timer over. Put your phone in another room or use “Do Not Disturb” mode."
    }), "\n", createVNode(_components.h3, {
      id: "rule-2-rest-means-rest",
      children: "Rule 2: Rest Means Rest"
    }), "\n", createVNode(_components.p, {
      children: ["During your 5-minute break, ", createVNode(_components.strong, {
        children: "do not look at a screen"
      }), ". If you switch from staring at your laptop to staring at your phone, your brain doesn’t register it as a break. Stand up, stretch, get water, or stare out a window. Let your eyes and your mind actually rest."]
    }), "\n", createVNode(_components.h3, {
      id: "rule-3-use-a-dedicated-tool",
      children: "Rule 3: Use a Dedicated Tool"
    }), "\n", createVNode(_components.p, {
      children: "Don’t use the timer on your phone. Touching your phone is a gateway drug to checking notifications."
    }), "\n", createVNode(_components.p, {
      children: ["Instead, use a dedicated web tool. We built the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/study-timer",
          children: "StudyNova Study Timer"
        })
      }), " specifically for this. It’s a minimalist, offline-first Pomodoro timer that lives in your browser. Just click “Start Focus” and get to work."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "modifying-the-pomodoro-for-college",
      children: "Modifying the Pomodoro for College"
    }), "\n", createVNode(_components.p, {
      children: "While the standard 25/5 split is great for tasks like flashcards or reading, it might not be ideal for deep, complex work like writing a research paper or solving advanced calculus problems."
    }), "\n", createVNode(_components.p, {
      children: "If you find that 25 minutes isn’t enough time to hit a state of “flow,” try these variations:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The 50/10 Split"
        }), ": 50 minutes of deep work, 10 minutes of rest. Excellent for essay writing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The 90/20 Split"
        }), ": 90 minutes of intense focus, 20 minutes of rest. This aligns with your body’s natural ", createVNode(_components.em, {
          children: "ultradian rhythms"
        }), " and is perfect for practice exams."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "your-action-plan-for-today",
      children: "Your Action Plan for Today"
    }), "\n", createVNode(_components.p, {
      children: "Stop trying to force yourself to study for hours on end. Try this today:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Open the ", createVNode(_components.a, {
          href: "/tools/study-timer",
          children: "StudyNova Pomodoro Timer"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Pick the hardest task on your to-do list."
      }), "\n", createVNode(_components.li, {
        children: ["Commit to just ", createVNode(_components.strong, {
          children: "one"
        }), " 25-minute Pomodoro."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You’ll be shocked at how much you get done."
    })]
  });
}
function MDXContent$2(props = {}) {
  return createVNode(MDXLayout$2, {
    ...props,
    children: createVNode(_createMdxContent$2, {
      ...props
    })
  });
}

const url$2 = "src/content/blog/pomodoro-technique.mdx";
const file$2 = "D:/Github/studynova/src/content/blog/pomodoro-technique.mdx";
const Content$2 = (props = {}) => MDXContent$2({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$2[Symbol.for('mdx-component')] = true;
Content$2[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$2.layout);
Content$2.moduleId = "D:/Github/studynova/src/content/blog/pomodoro-technique.mdx";
__astro_tag_component__(Content$2, 'astro:jsx');

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$1 = function ({children}) {
  const {layout, ...content} = frontmatter$1;
  content.file = file$1;
  content.url = url$1;
  return createVNode($$BlogPost, {
    file: file$1,
    url: url$1,
    content,
    frontmatter: content,
    headings: getHeadings$1(),
    'server:root': true,
    children
  });
};
const frontmatter$1 = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "Spaced Repetition: The Secret to Memorizing Anything (Permanently)",
  "description": "Stop rereading your notes. Learn the science of the Ebbinghaus Forgetting Curve and how spaced repetition can guarantee you never forget an exam answer again.",
  "pubDate": "2026-06-20T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/09-sunday-routine.png",
  "tags": ["memory", "science", "exam-prep"]
};
function getHeadings$1() {
  return [{
    "depth": 1,
    "slug": "the-ebbinghaus-forgetting-curve",
    "text": "The Ebbinghaus Forgetting Curve"
  }, {
    "depth": 2,
    "slug": "what-is-spaced-repetition",
    "text": "What is Spaced Repetition?"
  }, {
    "depth": 2,
    "slug": "why-rereading-notes-is-a-trap",
    "text": "Why Rereading Notes is a Trap"
  }, {
    "depth": 2,
    "slug": "how-to-build-a-spaced-repetition-system",
    "text": "How to Build a Spaced Repetition System"
  }, {
    "depth": 3,
    "slug": "option-1-the-analog-system-the-leitner-system",
    "text": "Option 1: The Analog System (The Leitner System)"
  }, {
    "depth": 3,
    "slug": "option-2-the-digital-system-anki--quizlet",
    "text": "Option 2: The Digital System (Anki / Quizlet)"
  }, {
    "depth": 2,
    "slug": "combining-spaced-repetition-with-active-recall",
    "text": "Combining Spaced Repetition with Active Recall"
  }, {
    "depth": 3,
    "slug": "pro-tip-schedule-your-reviews",
    "text": "Pro-Tip: Schedule Your Reviews"
  }];
}
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "the-ebbinghaus-forgetting-curve",
      children: "The Ebbinghaus Forgetting Curve"
    }), "\n", createVNode(_components.p, {
      children: "Have you ever spent a whole weekend memorizing 100 flashcards, aced your self-test on Sunday night, only to sit down for your exam on Wednesday and completely blank?"
    }), "\n", createVNode(_components.p, {
      children: ["You didn’t fail because you’re bad at studying. You failed because of ", createVNode(_components.strong, {
        children: "The Forgetting Curve"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["In 1885, a German psychologist named Hermann Ebbinghaus discovered a depressing fact about the human brain: ", createVNode(_components.strong, {
        children: "we forget 70% of what we learn within 24 hours"
      }), ". Unless you actively review the information, your brain assumes it’s unimportant and deletes it to save space."]
    }), "\n", createVNode(_components.p, {
      children: ["So, how do you hack the forgetting curve? ", createVNode(_components.strong, {
        children: "Spaced Repetition."
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-is-spaced-repetition",
      children: "What is Spaced Repetition?"
    }), "\n", createVNode(_components.p, {
      children: "Spaced repetition is an evidence-based learning technique where you review information at systematically increasing intervals."
    }), "\n", createVNode(_components.p, {
      children: "Instead of cramming the same flashcard 10 times in one day (which only stores the information in your short-term memory), you review it:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1 day later"
      }), "\n", createVNode(_components.li, {
        children: "3 days later"
      }), "\n", createVNode(_components.li, {
        children: "1 week later"
      }), "\n", createVNode(_components.li, {
        children: "2 weeks later"
      }), "\n", createVNode(_components.li, {
        children: "1 month later"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Every time you review the information right when you are on the verge of forgetting it, the neural pathway in your brain becomes stronger. Eventually, the memory becomes permanent."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "why-rereading-notes-is-a-trap",
      children: "Why Rereading Notes is a Trap"
    }), "\n", createVNode(_components.p, {
      children: ["Most students study by rereading their textbook highlights or their lecture notes over and over again. This creates a dangerous psychological phenomenon called ", createVNode(_components.strong, {
        children: "The Illusion of Fluency"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["When you read a highlighted sentence, your brain says, ", createVNode(_components.em, {
        children: "“Oh yeah, I recognize that!”"
      }), " You mistake ", createVNode(_components.strong, {
        children: "recognition"
      }), " for ", createVNode(_components.strong, {
        children: "recall"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Recognition is easy; the answer is literally right in front of you. Recall is hard; you have to pull the answer out of thin air. Exams test recall, not recognition. Spaced repetition forces you to practice recall."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-to-build-a-spaced-repetition-system",
      children: "How to Build a Spaced Repetition System"
    }), "\n", createVNode(_components.p, {
      children: "You don’t need to do complex math to figure out when to review your notes. You just need a system."
    }), "\n", createVNode(_components.h3, {
      id: "option-1-the-analog-system-the-leitner-system",
      children: "Option 1: The Analog System (The Leitner System)"
    }), "\n", createVNode(_components.p, {
      children: "If you prefer physical flashcards, you can use the Leitner box system."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Get three physical boxes (Box 1, Box 2, Box 3)."
      }), "\n", createVNode(_components.li, {
        children: ["Put all new flashcards in Box 1. You review Box 1 ", createVNode(_components.strong, {
          children: "every day"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["If you get a card right in Box 1, move it to Box 2. You review Box 2 ", createVNode(_components.strong, {
          children: "every 3 days"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["If you get a card right in Box 2, move it to Box 3. You review Box 3 ", createVNode(_components.strong, {
          children: "once a week"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Crucial rule:"
        }), " If you ever get a card wrong, it goes all the way back to Box 1!"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "option-2-the-digital-system-anki--quizlet",
      children: "Option 2: The Digital System (Anki / Quizlet)"
    }), "\n", createVNode(_components.p, {
      children: ["The easiest way to use spaced repetition is to let an algorithm do the math for you. Apps like ", createVNode(_components.strong, {
        children: "Anki"
      }), " use spaced repetition algorithms to automatically schedule your flashcards."]
    }), "\n", createVNode(_components.p, {
      children: "All you do is open the app every day, and it feeds you exactly the cards you are about to forget."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "combining-spaced-repetition-with-active-recall",
      children: "Combining Spaced Repetition with Active Recall"
    }), "\n", createVNode(_components.p, {
      children: ["Spaced repetition tells you ", createVNode(_components.em, {
        children: "when"
      }), " to study. Active recall tells you ", createVNode(_components.em, {
        children: "how"
      }), " to study."]
    }), "\n", createVNode(_components.p, {
      children: "Instead of just looking at a flashcard, you must actively force your brain to retrieve the answer before you flip it over. The mental strain you feel when you’re trying to remember the answer? That strain is literally the feeling of your brain building new neural connections."
    }), "\n", createVNode(_components.h3, {
      id: "pro-tip-schedule-your-reviews",
      children: "Pro-Tip: Schedule Your Reviews"
    }), "\n", createVNode(_components.p, {
      children: "Spaced repetition only works if you actually show up to do your reviews. You can’t skip days."
    }), "\n", createVNode(_components.p, {
      children: ["To make sure you stay on track, use the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/tools/exam-countdown",
          children: "StudyNova Exam Countdown Tool"
        })
      }), " to map out your test dates, and block out 30 minutes every morning specifically for reviewing your spaced repetition flashcards."]
    }), "\n", createVNode(_components.p, {
      children: "Stop cramming. Start spacing. Your GPA will thank you."
    })]
  });
}
function MDXContent$1(props = {}) {
  return createVNode(MDXLayout$1, {
    ...props,
    children: createVNode(_createMdxContent$1, {
      ...props
    })
  });
}

const url$1 = "src/content/blog/spaced-repetition.mdx";
const file$1 = "D:/Github/studynova/src/content/blog/spaced-repetition.mdx";
const Content$1 = (props = {}) => MDXContent$1({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$1[Symbol.for('mdx-component')] = true;
Content$1[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$1.layout);
Content$1.moduleId = "D:/Github/studynova/src/content/blog/spaced-repetition.mdx";
__astro_tag_component__(Content$1, 'astro:jsx');

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BlogPost, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "How to Create a Study Schedule That Actually Works (And Prevents Burnout)",
  "description": "Stop relying on motivation. Learn how to build a foolproof weekly study schedule using time blocking, Pomodoro timers, and strategic review systems.",
  "pubDate": "2026-06-18T00:00:00.000Z",
  "author": "StudyNova Team",
  "image": "/images/blog/10-assignment-tracker.png",
  "tags": ["planning", "productivity", "systems"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "stop-random-studying-why-you-need-a-system",
    "text": "Stop Random Studying: Why You Need a System"
  }, {
    "depth": 2,
    "slug": "the-core-philosophy-time-blocking",
    "text": "The Core Philosophy: Time Blocking"
  }, {
    "depth": 2,
    "slug": "step-1-the-brain-dump-and-prioritization",
    "text": "Step 1: The Brain Dump and Prioritization"
  }, {
    "depth": 3,
    "slug": "get-it-all-out",
    "text": "Get It All Out"
  }, {
    "depth": 3,
    "slug": "the-eisenhower-matrix",
    "text": "The Eisenhower Matrix"
  }, {
    "depth": 2,
    "slug": "step-2-establish-your-non-negotiables",
    "text": "Step 2: Establish Your Non-Negotiables"
  }, {
    "depth": 2,
    "slug": "step-3-plugging-in-the-study-blocks",
    "text": "Step 3: Plugging in the Study Blocks"
  }, {
    "depth": 3,
    "slug": "the-2-hour-rule",
    "text": "The 2-Hour Rule"
  }, {
    "depth": 3,
    "slug": "use-the-pomodoro-technique",
    "text": "Use the Pomodoro Technique"
  }, {
    "depth": 3,
    "slug": "match-energy-to-tasks",
    "text": "Match Energy to Tasks"
  }, {
    "depth": 2,
    "slug": "step-4-build-in-buffer-zones",
    "text": "Step 4: Build in “Buffer Zones”"
  }, {
    "depth": 2,
    "slug": "step-5-the-sunday-weekly-review",
    "text": "Step 5: The Sunday Weekly Review"
  }, {
    "depth": 2,
    "slug": "summary-your-next-steps",
    "text": "Summary: Your Next Steps"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "stop-random-studying-why-you-need-a-system",
      children: "Stop Random Studying: Why You Need a System"
    }), "\n", createVNode(_components.p, {
      children: ["Most students fail to achieve their academic potential not because they lack intelligence, but because they rely entirely on ", createVNode(_components.strong, {
        children: "motivation"
      }), " rather than ", createVNode(_components.strong, {
        children: "systems"
      }), ". When you wake up, look at a massive pile of textbooks, and ask yourself, ", createVNode(_components.em, {
        children: "“What should I study today?”"
      }), ", you have already lost the battle. Decision fatigue sets in before you even open a book."]
    }), "\n", createVNode(_components.p, {
      children: "A study schedule is not a prison designed to restrict your freedom. It is the exact opposite. A well-designed study schedule gives you the freedom to relax without guilt because you know exactly when your work will get done."
    }), "\n", createVNode(_components.p, {
      children: "In this guide, we are going to break down the exact, step-by-step framework to create a study schedule that actually works—one that survives midterms, finals, and those days when you just don’t feel like working."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-core-philosophy-time-blocking",
      children: "The Core Philosophy: Time Blocking"
    }), "\n", createVNode(_components.p, {
      children: ["Before we build the schedule, we need to understand the concept of ", createVNode(_components.strong, {
        children: "Time Blocking"
      }), ". Popularized by productivity experts and CEOs, time blocking involves dedicating specific chunks of time to specific tasks. Instead of keeping a running, anxiety-inducing to-do list, you assign every task a “home” on your calendar."]
    }), "\n", createVNode(_components.p, {
      children: "If a task is not on the calendar, it doesn’t exist. If it is on the calendar, you execute it when the time comes. No debates. No procrastination."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-1-the-brain-dump-and-prioritization",
      children: "Step 1: The Brain Dump and Prioritization"
    }), "\n", createVNode(_components.p, {
      children: "You cannot schedule effectively if your mind is cluttered with a hundred different floating tasks."
    }), "\n", createVNode(_components.h3, {
      id: "get-it-all-out",
      children: "Get It All Out"
    }), "\n", createVNode(_components.p, {
      children: ["Start by taking a blank sheet of paper or opening a digital notepad. Write down ", createVNode(_components.strong, {
        children: "everything"
      }), " you need to do this week. Do not filter yourself."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Read Chapter 4 for Biology"
      }), "\n", createVNode(_components.li, {
        children: "Write history essay draft"
      }), "\n", createVNode(_components.li, {
        children: "Do laundry"
      }), "\n", createVNode(_components.li, {
        children: "Call mom"
      }), "\n", createVNode(_components.li, {
        children: "Review French vocabulary"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "the-eisenhower-matrix",
      children: "The Eisenhower Matrix"
    }), "\n", createVNode(_components.p, {
      children: "Once everything is out of your head, categorize the academic tasks using a simple matrix:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Urgent & Important:"
        }), " (Due tomorrow, heavily weighted) → ", createVNode(_components.em, {
          children: "Schedule these first."
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Important, Not Urgent:"
        }), " (Final paper due in 3 weeks) → ", createVNode(_components.em, {
          children: "Block out small daily chunks."
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Urgent, Not Important:"
        }), " (Busywork, formatting) → ", createVNode(_components.em, {
          children: "Batch these together to do quickly."
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Neither:"
        }), " → ", createVNode(_components.em, {
          children: "Drop it."
        })]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-2-establish-your-non-negotiables",
      children: "Step 2: Establish Your Non-Negotiables"
    }), "\n", createVNode(_components.p, {
      children: ["Open your calendar app (Google Calendar, Apple Calendar, or Notion) or print out our ", createVNode(_components.strong, {
        children: "Free Weekly Study Planner"
      }), " PDF."]
    }), "\n", createVNode(_components.p, {
      children: "You must build your schedule around the immovable objects in your life. Plug in your non-negotiables first:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Classes & Lectures:"
        }), " The times you must physically (or virtually) be present."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Work Shifts:"
        }), " If you have a part-time job."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Commute Time:"
        }), " Do not forget to factor in the time it takes to get from point A to point B."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Sleep:"
        }), " Block out a minimum of 8 hours. ", createVNode(_components.em, {
          children: "Do not skip this. Sleep is when your brain actually encodes the information you studied into long-term memory."
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Meals & Exercise:"
        }), " You cannot run a high-performance academic engine on zero fuel and zero movement."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["What you are left with is your ", createVNode(_components.strong, {
        children: "White Space"
      }), ". This is your actual available study time. Seeing this visually often gives students a reality check—you likely have less time than you think, which means you must use it efficiently."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-3-plugging-in-the-study-blocks",
      children: "Step 3: Plugging in the Study Blocks"
    }), "\n", createVNode(_components.p, {
      children: "Now, take the prioritized tasks from Step 1 and assign them to the white space in Step 2."
    }), "\n", createVNode(_components.h3, {
      id: "the-2-hour-rule",
      children: "The 2-Hour Rule"
    }), "\n", createVNode(_components.p, {
      children: "Never schedule a study block longer than 2 hours without a major break. Cognitive decline is real. After 90-120 minutes, your ability to retain complex information drops significantly."
    }), "\n", createVNode(_components.h3, {
      id: "use-the-pomodoro-technique",
      children: "Use the Pomodoro Technique"
    }), "\n", createVNode(_components.p, {
      children: ["During your scheduled blocks, you need a mechanism to enforce focus. This is where you integrate the ", createVNode(_components.strong, {
        children: "Pomodoro Technique"
      }), " (25 minutes of intense focus followed by a 5-minute break)."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "🔥 Tool Spotlight:"
        }), " Stop using your phone’s timer (where notifications will distract you). Use our free, browser-based ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/tools/study-timer",
            children: "Study Timer"
          })
        }), ". It’s pre-configured for Pomodoro sessions, works completely offline, and tracks your focus hours without selling your data."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "match-energy-to-tasks",
      children: "Match Energy to Tasks"
    }), "\n", createVNode(_components.p, {
      children: "Are you a morning person? Schedule your most difficult, brain-draining tasks (like organic chemistry or complex math problem sets) for 9:00 AM.\nSave low-energy tasks (like organizing notes, formatting citations, or replying to emails) for your afternoon slump."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-4-build-in-buffer-zones",
      children: "Step 4: Build in “Buffer Zones”"
    }), "\n", createVNode(_components.p, {
      children: ["The biggest mistake students make when creating a schedule is planning for a perfect week.\n", createVNode(_components.em, {
        children: "Perfect weeks do not exist."
      }), "\nYou will get sick. An assignment will take twice as long as you thought. A friend will have a crisis."]
    }), "\n", createVNode(_components.p, {
      children: ["To survive the chaos of real life, you must schedule ", createVNode(_components.strong, {
        children: "Buffer Zones"
      }), ".\nLeave a 2-hour block completely empty on Wednesday afternoon, and another on Saturday morning."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "If you fall behind, you use the buffer block to catch up."
      }), "\n", createVNode(_components.li, {
        children: "If you stay on track, the buffer block magically transforms into free time."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Buffer zones prevent the “domino effect” where missing one study session ruins your entire week’s schedule."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-5-the-sunday-weekly-review",
      children: "Step 5: The Sunday Weekly Review"
    }), "\n", createVNode(_components.p, {
      children: "A schedule is a living document. It requires maintenance."
    }), "\n", createVNode(_components.p, {
      children: "Every Sunday evening, take 30 minutes to conduct a Weekly Review. Ask yourself:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.em, {
          children: "What went well this week?"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "What didn’t work?"
        }), " (Did I schedule 8 AM study blocks but sleep through all of them?)"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.em, {
          children: "Did I underestimate how long my readings would take?"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Based on this review, adjust your schedule for the upcoming week. If you consistently fail to study on Friday afternoons, stop scheduling intense work for Friday afternoons. Work ", createVNode(_components.em, {
        children: "with"
      }), " your natural habits, not against them."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "summary-your-next-steps",
      children: "Summary: Your Next Steps"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dump your tasks"
        }), " onto a master list."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Block your non-negotiables"
        }), " (classes, sleep, work) on your calendar."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Assign tasks to the white space"
        }), ", keeping blocks under 2 hours."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Execute using the ", createVNode(_components.a, {
            href: "/tools/study-timer",
            children: "Study Timer"
          })]
        }), " to maintain Pomodoro focus."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Review and adapt"
        }), " every Sunday."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Stop relying on motivation. Build your system today, and watch your grades—and your free time—increase."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/blog/study-schedule.mdx";
const file = "D:/Github/studynova/src/content/blog/study-schedule.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Github/studynova/src/content/blog/study-schedule.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_9 as _, __vite_glob_0_8 as a, __vite_glob_0_7 as b, __vite_glob_0_6 as c, __vite_glob_0_5 as d, __vite_glob_0_4 as e, __vite_glob_0_3 as f, __vite_glob_0_2 as g, __vite_glob_0_1 as h, __vite_glob_0_0 as i };
