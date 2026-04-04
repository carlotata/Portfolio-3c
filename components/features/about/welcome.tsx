"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Welcome() {
   const statsRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(statsRef, { once: true });
   const [projectsCount, setProjectsCount] = useState(0);

   useEffect(() => {
      if (isInView) {
         let start = 0;
         const end = 20; 
         const duration = 1200; 
         const stepTime = Math.abs(Math.floor(duration / end));
         const timer = setInterval(() => {
            start += 1;
            setProjectsCount(start);
            if (start === end) clearInterval(timer);
         }, stepTime);
      }
   }, [isInView]);

   return (
      <section className="py-20 px-4 sm:px-10 max-w-6xl mx-auto overflow-hidden">
         <div className="flex flex-col md:flex-row items-center justify-between gap-32 md:gap-40">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative w-75 h-95 md:w-105 md:h-125 shrink-0">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-75 md:w-105 md:h-105 bg-muted rounded-full z-0" />
               <div className="absolute inset-0 z-10">
                  <Image
                     src="/aboutme.png"
                     alt="Profile photo"
                     fill
                     className="object-contain object-bottom drop-shadow-md"
                     priority
                     sizes="(max-width: 768px) 300px, 420px"
                  />
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10 w-full">
               <p className="text-[10.5px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  ABOUT
               </p>

               <h1
                  className="text-6xl md:text-7xl lg:text-[7.5rem] font-semibold leading-[1.05] tracking-tight text-foreground mb-3 uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Carl <br />
                  <em className="font-normal italic">Aviso</em>
               </h1>

               <p className="text-sm md:text-base font-light tracking-[0.18em] uppercase text-muted-foreground mb-4">
                  Full Stack Developer&nbsp;&middot;&nbsp;Cebu City, PH
               </p>

               <div className="w-55 h-px bg-foreground rounded-sm mb-5 mx-auto md:mx-0" />

               <p className="text-[14.5px] leading-[1.8] text-muted-foreground max-w-100 mb-8 mx-auto md:mx-0">
                  I build{" "}
                  <strong className="text-foreground font-medium">
                     clean, performant web applications
                  </strong>{" "}
                  with a sharp eye for design. Combining technical depth with
                  product thinking to deliver work that&apos;s not just
                  functional — but genuinely great to use.
               </p>

               <div className="w-fit rounded-sm flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-700 px-4 py-2 text-[12px] font-medium text-emerald-700 dark:text-emerald-400 mb-8 mx-auto md:mx-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Open to opportunities
               </div>

               <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center md:justify-start">
                  <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="/resume.pdf"
                     download="Carl_Aviso_Resume.pdf"
                     className="flex items-center justify-center gap-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-none shadow-none w-40 h-12 uppercase text-xs tracking-widest font-semibold transition-all duration-150">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                     </svg>
                     Download CV
                  </motion.a>

                  <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="/contact"
                     className="flex items-center justify-center gap-2 bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background rounded-none shadow-none w-40 h-12 uppercase text-xs tracking-widest font-semibold transition-all duration-150">
                     Get in Touch
                  </motion.a>
               </div>

               <div
                  ref={statsRef}
                  className="flex flex-row gap-8 mt-10 pt-8 border-t border-border/30 w-full max-w-100 mx-auto md:mx-0 justify-center md:justify-start">
                  <div className="border-r border-border/30 pr-8">
                     <p
                        className="text-3xl font-semibold leading-none text-foreground mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        <motion.span
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.2, duration: 0.5 }}>
                           3rd Year
                        </motion.span>
                     </p>
                     <p className="text-[10.5px] tracking-widest uppercase text-muted-foreground">
                        College.
                     </p>
                  </div>

                  <div>
                     <p
                        className="text-3xl font-semibold leading-none text-foreground mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        <motion.span
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.4, duration: 0.5 }}>
                           {projectsCount}+
                        </motion.span>
                     </p>
                     <p className="text-[10.5px] tracking-widest uppercase text-muted-foreground">
                        Projects
                     </p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}