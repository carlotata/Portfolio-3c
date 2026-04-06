export interface Project {
   id: number;
   title: string;
   category: string;
   description: string;
   image: string;
   tech: string[];
   link: string;
   liveLink?: string;
}

export const projects: Project[] = [
   {
      id: 1,
      title: "Robo Sole",
      category: "UI/UX Design",
      description:
         "A futuristic design mock-up using Figma by a client request.",
      image: "/projectscreenshot/1.png",
      tech: ["Figma"],
      link: "https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=123-30&p=f&t=SKKKzRFQffgkoAaZ-0",
   },
   {
      id: 2,
      title: "FitLife",
      category: "UI/UX Design",
      description: "A simple Fitness UI/UX Design.",
      image: "/projectscreenshot/2.png",
      tech: ["Figma"],
      link: "https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=61-30&p=f&t=SKKKzRFQffgkoAaZ-0",
   },
   {
      id: 3,
      title: "Apex Vision",
      category: "UI/UX Design",
      description: "A minimalistic Sports Glass UI/UX Design.",
      image: "/projectscreenshot/3.png",
      tech: ["Figma"],
      link: "https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=178-30&p=f&t=SKKKzRFQffgkoAaZ-0",
   },
   {
      id: 4,
      title: "1st Year Projects",
      category: "Web Application",
      description: "A compilation of my 1st Year Projects.",
      image: "/projectscreenshot/5.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/carlotata/1st-Year",
   },
   {
      id: 5,
      title: "2nd Year Projects",
      category: "Web Application",
      description: "A compilation of my 2nd Year Projects.",
      image: "/projectscreenshot/4.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/carlotata/2nd-Year",
   },
   {
      id: 6,
      title: "Duck Game TikTok Live",
      category: "Interactive Game",
      description:
         "An interactive duck-themed game for TikTok Live streams, powered by real-time viewer interaction.",
      image: "/projectscreenshot/6.png",
      tech: ["HTML", "CSS", "JS", "TikTokLiveConnector"],
      link: "https://github.com/carlotata/DuckRaceGame-TikTokLive",
      liveLink: "https://carlotata.github.io/DuckRaceGame-TikTokLive/",
   },
   {
      id: 7,
      title: "Girls vs Boys",
      category: "Interactive Game",
      description:
         "A competitive Girls vs Boys where viewers participate via TikTok Live.",
      image: "/projectscreenshot/7.png",
      tech: ["HTML", "CSS", "JS", "TikTokLiveConnector"],
      link: "https://github.com/carlotata/GirlsvsBoys-TikTokLive",
      liveLink: "https://carlotata.github.io/GirlsvsBoys-TikTokLive/",
   },
   {
      id: 8,
      title: "BedrockLive Plugin",
      category: "Plugin Development",
      description:
         "A custom-made plugin for BedrockLive integration, enabling advanced live-stream features.",
      image: "/projectscreenshot/9.png",
      tech: ["JS", "Node.js", "TikTokLiveConnector"],
      link: "https://github.com/carlotata/Underwaterlive",
   },
   {
      id: 9,
      title: "Excrate",
      category: "Web Application",
      description:
         "An API practice project featuring a Progressive Web App (PWA) with full installation support.",
      image: "/projectscreenshot/8.png",
      tech: ["HTML", "CSS", "JS", "API", "PWA"],
      link: "https://github.com/carlotata/ExcRate",
      liveLink: "https://carlotata.github.io/ExcRate/",
   },
];
