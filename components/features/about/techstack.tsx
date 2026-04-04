"use client";
import Image from "next/image";

const TECH_CORE = [
   {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
   },
   {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
   },
   {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
   },
   {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
   },
   {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
   },
   {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
   },
   {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
   },
   {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
   },
   {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
   },
];

const TECH_TOOLS = [
   {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
   },
   {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
   },
   {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      invert: true,
   },
   {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
   },
   {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
   },
   {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
   },
];

function TechItem({
   name,
   logo,
   invert,
}: {
   name: string;
   logo: string;
   invert?: boolean;
}) {
   return (
      <div className="flex flex-col items-center gap-2.5 group cursor-default">
         <div className="w-16 h-16 rounded-2xl border border-border/60 bg-background flex items-center justify-center p-3 transition-all duration-200 group-hover:scale-110 group-hover:border-border">
            <Image
               src={logo}
               alt={name}
               width={40}
               height={40}
               className={`w-full h-full object-contain ${invert ? "dark:invert" : ""} shadow-2xl`}
               unoptimized
            />
         </div>
         <span className="text-[12px] font-medium text-foreground leading-none">
            {name}
         </span>
      </div>
   );
}

export function TechStack() {
   return (
      <section className="py-14 px-4 sm:px-10 max-w-5xl mx-auto">
         {/* Section header */}
         <div className="flex items-center gap-3 mb-8">
            <span className="text-[20px] font-medium uppercase tracking-[0.22em] text-foreground">
               Tech Stack
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[20px] font-medium text-muted-foreground tabular-nums">
               02
            </span>
         </div>

         <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
            Languages &amp; Frameworks
         </p>
         <div className="flex flex-wrap justify-center gap-7 mb-10">
            {TECH_CORE.map((t) => (
               <TechItem key={t.name} name={t.name} logo={t.logo} />
            ))}
         </div>

         <div className="h-px bg-border mb-10" />

         <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
            Tools &amp; Platforms
         </p>
         <div className="flex flex-wrap justify-center gap-7">
            {TECH_TOOLS.map((t) => (
               <TechItem
                  key={t.name}
                  name={t.name}
                  logo={t.logo}
                  invert={t.invert}
               />
            ))}
         </div>
      </section>
   );
}
