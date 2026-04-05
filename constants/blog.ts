export type BlogPost = {
   id: string;
   slug: string;
   title: string;
   excerpt: string;
   content: string;
   category: string[];
   date: string;
   author: string;
};

export type BlogCategory = {
   slug: string;
   name: string;
   parent?: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
   { slug: "tech", name: "Technology" },
   { slug: "design", name: "Design" },
   { slug: "academic", name: "Academic" },
   { slug: "roadmap", name: "Roadmap" },
   { slug: "nextjs", name: "Next.js", parent: "tech" },
   { slug: "framer", name: "Framer Motion", parent: "tech" },
   { slug: "figma", name: "Figma", parent: "design" },
];

export const BLOG_POSTS: BlogPost[] = [
   {
      id: "1",
      slug: "june-2023-to-present",
      title: "My 3rd Year Roadmap",
      excerpt:
         "A retrospective on my progress from Cordova Public College to building full-stack design systems.",
      content:
         "Entering CPC in June 2023 was the catalyst. Now in my 3rd year, I've mastered the balance between Figma's aesthetics and Next.js performance. This blog serves as my technical log — a place to document everything I've learned, built, and broken along the way.",
      category: ["academic", "roadmap"],
      date: "2025-02-15",
      author: "John Carl Aviso",
   },
   {
      id: "2",
      slug: "framer-motion-for-designers",
      title: "Motion as a Design Language",
      excerpt:
         "How I use Framer Motion to make my Next.js projects feel tactile and alive.",
      content:
         "Static interfaces are a thing of the past. As a designer-developer, I use motion to guide user intent. By using spring physics instead of linear durations, we create a more human feel. Framer Motion's useScroll and useTransform hooks let you tie animation directly to the user's scroll position — something I use heavily in this very portfolio.",
      category: ["design", "framer"],
      date: "2025-03-01",
      author: "John Carl Aviso",
   },
   {
      id: "3",
      slug: "figma-pixel-perfection",
      title: "Figma to Tailwind Workflow",
      excerpt:
         "My 1:1 workflow for translating high-fidelity prototypes into production code.",
      content:
         "Pixel perfection isn't a myth. Using Tailwind's arbitrary values and specific tracking, I ensure that my Figma visions match my Vercel deployments exactly. The key is treating design tokens in Figma as CSS variables in Tailwind — one source of truth for spacing, color, and type.",
      category: ["tech", "figma"],
      date: "2024-11-10",
      author: "John Carl Aviso",
   },
   {
      id: "4",
      slug: "building-with-nextjs-app-router",
      title: "Why I Switched to the App Router",
      excerpt:
         "File-based routing, server components, and layouts — and why it changed how I build.",
      content:
         "The Next.js App Router replaced my entire mental model of routing. Nested layouts mean I stopped copy-pasting Navbar and Footer across every page. Server Components let me fetch data closer to where it's rendered. This portfolio itself is built entirely on the App Router with a (guest) route group to share the layout across all public pages.",
      category: ["tech", "nextjs"],
      date: "2025-01-20",
      author: "John Carl Aviso",
   },
   {
      id: "5",
      slug: "designing-robo-sole",
      title: "Designing Robo Sole",
      excerpt:
         "A breakdown of the futuristic sneaker UI/UX I built for a client in Figma.",
      content:
         "Robo Sole was a client request that pushed me to think beyond flat design. The brief was 'futuristic but wearable' — so I explored holographic overlays, neon accents on deep blacks, and motion-implied shapes. Every component was built as a reusable Figma frame so the client could swap colorways without breaking the layout.",
      category: ["design", "figma"],
      date: "2025-03-10",
      author: "John Carl Aviso",
   },

   // Projects added as blog posts
   {
      id: "6",
      slug: "robo-sole-project",
      title: "Robo Sole",
      excerpt: "A futuristic design mock-up using Figma by a client request.",
      content:
         "Tech used: Figma. See the design here: https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=123-30&p=f&t=SKKKzRFQffgkoAaZ-0",
      category: ["design", "figma"],
      date: "2025-03-12",
      author: "John Carl Aviso",
   },
   {
      id: "7",
      slug: "fitlife",
      title: "FitLife",
      excerpt: "A simple Fitness UI/UX Design.",
      content:
         "Tech used: Figma. See the design here: https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=61-30&p=f&t=SKKKzRFQffgkoAaZ-0",
      category: ["design", "figma"],
      date: "2025-03-13",
      author: "John Carl Aviso",
   },
   {
      id: "8",
      slug: "apex-vision",
      title: "Apex Vision",
      excerpt: "A minimalistic Sports Glass UI/UX Design.",
      content:
         "Tech used: Figma. See the design here: https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=178-30&p=f&t=SKKKzRFQffgkoAaZ-0",
      category: ["design", "figma"],
      date: "2025-03-14",
      author: "John Carl Aviso",
   },
   {
      id: "9",
      slug: "1st-year-projects",
      title: "1st Year Projects",
      excerpt: "A compilation of my 1st Year Projects.",
      content:
         "Tech used: HTML, CSS, JavaScript. See the code here: https://github.com/carlotata/1st-Year",
      category: ["tech", "web-application"],
      date: "2025-03-15",
      author: "John Carl Aviso",
   },
   {
      id: "10",
      slug: "2nd-year-projects",
      title: "2nd Year Projects",
      excerpt: "A compilation of my 2nd Year Projects.",
      content:
         "Tech used: HTML, CSS, JavaScript. See the code here: https://github.com/carlotata/2nd-Year",
      category: ["tech", "web-application"],
      date: "2025-03-16",
      author: "John Carl Aviso",
   },

   {
      id: "11",
      slug: "hello-world-cpc",
      title: "First Day at CPC",
      excerpt: "Documenting the start of my journey at Cordova Public College.",
      content: "August 2023 marked the beginning. My first 'Hello World' in a college lab. This was where I realized that coding wasn't just about syntax, but about solving problems for my community.",
      category: ["academic"],
      date: "2023-08-15",
      author: "John Carl Aviso",
   },
   {
      id: "12",
      slug: "html-css-mastery",
      title: "Semantic HTML & CSS Layouts",
      excerpt: "Moving beyond basic tags to building structured, accessible web foundations.",
      content: "In late 2023, I obsessed over the difference between a <div> and a <section>. Learning CSS Flexbox was a 'eureka' moment that changed everything about how I viewed the browser.",
      category: ["tech", "web-application"],
      date: "2023-10-10",
      author: "John Carl Aviso",
   },
   {
      id: "13",
      slug: "c-plus-plus-logic",
      title: "Logic Building with C++",
      excerpt: "Understanding pointers, loops, and the gritty details of computer science.",
      content: "My 1st year wasn't all web design. C++ taught me how memory works. It was frustrating but necessary to understand the 'why' behind the high-level code I write now.",
      category: ["academic", "tech"],
      date: "2023-11-20",
      author: "John Carl Aviso",
   },

   {
      id: "14",
      slug: "intro-to-ui-ux",
      title: "Introduction to UI/UX Design",
      excerpt: "The moment I realized code is nothing without a good user experience.",
      content: "In early 2024, I downloaded Figma. My first designs were messy, but I learned about visual hierarchy, typography, and the importance of user-centered design.",
      category: ["design", "figma"],
      date: "2024-02-05",
      author: "John Carl Aviso",
   },
   {
      id: "15",
      slug: "database-management-101",
      title: "SQL & Database Design",
      excerpt: "Structuring data for scalability and performance.",
      content: "2nd year at CPC introduced me to relational databases. Learning how to normalize data and write efficient queries became a backbone for my full-stack aspirations.",
      category: ["academic", "tech"],
      date: "2024-04-12",
      author: "John Carl Aviso",
   },
   {
      id: "16",
      slug: "javascript-dom-manipulation",
      title: "Vanilla JS Magic",
      excerpt: "Making the web interactive without frameworks.",
      content: "Before jumping into React, I spent mid-2024 mastering the DOM. Building carousels and modal windows from scratch gave me a deep appreciation for the web's native capabilities.",
      category: ["tech", "web-application"],
      date: "2024-07-22",
      author: "John Carl Aviso",
   },
   {
      id: "17",
      slug: "responsive-design-strategies",
      title: "Responsive Design Strategies",
      excerpt: "How I approach 'Mobile First' development in my projects.",
      content: "By late 2024, I stopped designing for desktop first. Everything is a mobile screen now. I share my workflow for using media queries and fluid layouts.",
      category: ["tech", "design"],
      date: "2024-09-30",
      author: "John Carl Aviso",
   },

   {
      id: "18",
      slug: "advanced-figma-components",
      title: "Design Systems in Figma",
      excerpt: "Using auto-layout and variables to build enterprise-grade systems.",
      content: "Now in my 3rd year, my Figma files are structured like code. This log covers how I use component properties to create flexible, reusable UI kits.",
      category: ["design", "figma"],
      date: "2024-12-15",
      author: "John Carl Aviso",
   },
   {
      id: "19",
      slug: "state-management-evolution",
      title: "The Evolution of State",
      excerpt: "From Props to Context to Server-side state.",
      content: "As I build more complex apps in 2025, managing state is the biggest challenge. I'm exploring how Next.js handles data fetching and how it differs from traditional SPAs.",
      category: ["tech", "nextjs"],
      date: "2025-01-05",
      author: "John Carl Aviso",
   },
   {
      id: "20",
      slug: "future-of-personal-branding",
      title: "The Tech Portfolio of 2025",
      excerpt: "Reflecting on why I built this archive and where I'm going next.",
      content: "This is more than a list of links. It's a living document of my growth as a developer at CPC. The future is about blending AI tools with human-centered design.",
      category: ["roadmap", "academic"],
      date: "2025-03-20",
      author: "John Carl Aviso",
   },
];

