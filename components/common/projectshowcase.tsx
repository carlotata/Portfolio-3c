"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants/project";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectShowcase() {
   const [featuredProjects, setFeaturedProjects] = useState<typeof projects>(
      [],
   );
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      const shuffled = [...projects].sort(() => 0.5 - Math.random());
      setFeaturedProjects(shuffled.slice(0, 3));
      setIsMounted(true);
   }, []);

   return (
      <section className="py-20 px-4 sm:px-10 max-w-8xl mx-auto w-full overflow-hidden">
         {/* Title */}
         <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-2xl sm:text-4xl font-black tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            PROJECT SHOWCASE
         </motion.h1>

         <p className="text-center text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8 opacity-40 dark:opacity-60 text-black/60 dark:text-white/60">
            A curated selection of projects demonstrating my skills
         </p>

         {/* Card Container */}
         <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-12 
            bg-white/50 dark:bg-[#0f0f0f]/80 backdrop-blur-md shadow-xl">
            <p className="text-center text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-10 opacity-40 dark:opacity-60 text-black/60 dark:text-white/60">
               Featured Projects Today
            </p>

            <Carousel
               opts={{
                  align: "start",
                  loop: true,
               }}
               className="w-full">
               <CarouselContent className="-ml-4">
                  {isMounted &&
                     featuredProjects.map((project) => (
                        <CarouselItem
                           key={project.id}
                           className="pl-4 md:basis-1/3 lg:basis-1/3">
                           <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block">
                              <div
                                 className="group relative aspect-4/5 sm:aspect-square 
                              bg-[#D9D9D9] dark:bg-[#1a1a1a] 
                              rounded-2xl overflow-hidden cursor-pointer 
                              border border-black/5 dark:border-white/10">
                                 {/* Image */}
                                 <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                       src={project.image}
                                       alt={project.title}
                                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                 </div>

                                 {/* Hover Overlay */}
                                 <div
                                    className="absolute inset-0 
                                 bg-linear-to-t from-black/90 via-black/30 to-transparent 
                                 opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300 z-10 
                                 flex flex-col justify-end p-6">
                                    <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-bold mb-1">
                                       {project.category}
                                    </span>

                                    <h3 className="text-white text-xl font-black tracking-tighter uppercase leading-tight mb-3">
                                       {project.title}
                                    </h3>

                                    <div className="flex gap-1.5 flex-wrap">
                                       {project.tech.map((tag) => (
                                          <span
                                             key={tag}
                                             className="text-[8px] 
                                             bg-white/20 text-white 
                                             px-2 py-0.5 rounded 
                                             backdrop-blur-md 
                                             border border-white/10 
                                             uppercase font-medium">
                                             {tag}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </a>
                        </CarouselItem>
                     ))}
               </CarouselContent>

               {/* Mobile Controls */}
               {isMounted && (
                  <div className="flex justify-center mt-8 gap-4 sm:hidden">
                     <CarouselPrevious
                        className="static h-12 w-12 border-black/10 dark:border-white/10 
                     bg-white dark:bg-[#1a1a1a] 
                     hover:bg-black hover:text-white 
                     dark:hover:bg-white dark:hover:text-black 
                     transition-all shadow-md translate-y-0"
                     />

                     <CarouselNext
                        className="static h-12 w-12 border-black/10 dark:border-white/10 
                     bg-white dark:bg-[#1a1a1a] 
                     hover:bg-black hover:text-white 
                     dark:hover:bg-white dark:hover:text-black 
                     transition-all shadow-md translate-y-0"
                     />
                  </div>
               )}
            </Carousel>
         </motion.div>
      </section>
   );
}
