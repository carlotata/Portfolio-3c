"use client";

import { motion } from "framer-motion";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/provider/carousel";

export function ProjectShowcase() {
   const projects = [
      {
         id: 1,
         title: "Robo Sole",
         category: "UI/UX Design",
         description:
            "A futuristic design mock-up using Figma by a client request.",
         image: "/1.png",
         tech: ["Figma"],
         link: "https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=123-30&p=f&t=SKKKzRFQffgkoAaZ-0",
      },
      {
         id: 2,
         title: "FitLife",
         category: "UI/UX Design",
         description: "A simple Fitness UI/UX Design.",
         image: "/2.png",
         tech: ["Figma"],
         link: "https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=61-30&p=f&t=SKKKzRFQffgkoAaZ-0",
      },
      {
         id: 3,
         title: "Apex Vision",
         category: "UI/UX Design",
         description: "A minimalistic Sports Glass UI/UX Design.",
         image: "/3.png",
         tech: ["Figma"],
         link: "https://www.figma.com/design/U4W0ZE9jRWKjl9HSaZPv3T/DESIGN-SAMPLES?node-id=178-30&p=f&t=SKKKzRFQffgkoAaZ-0",
      },
      {
         id: 4,
         title: "1st Year Projects",
         category: "Web Application",
         description: "A compilation of my 1st Year Projects.",
         image: "/5.png",
         tech: ["HTML", "CSS", "JavaScript"],
         link: "https://github.com/carlotata/1st-Year",
      },
      {
         id: 5,
         title: "2nd Year Projects",
         category: "Web Application",
         description: "A compilation of my 2nd Year Projects.",
         image: "/4.png",
         tech: ["HTML", "CSS", "JavaScript"],
         link: "https://github.com/carlotata/2nd-Year",
      },
   ];

   return (
      <section className="py-20 px-4 sm:px-10 max-w-8xl mx-auto w-full overflow-hidden">

         <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-2xl sm:text-3xl font-black tracking-[0.3em] mb-12">
            Project Showcase
         </motion.h2>

         <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative border border-black/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 bg-white/40 backdrop-blur-md shadow-sm">
            <p className="text-center text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-10 opacity-40">
               Featured Projects
            </p>

            <Carousel
               opts={{
                  align: "start",
                  loop: true,
               }}
               className="w-full">
               <CarouselContent className="-ml-4">
                  {projects.map((project) => (
                     <CarouselItem
                        key={project.id}
                        className="pl-4 md:basis-1/3 lg:basis-1/3">
                        <a
                           href={project.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block">
                           <div className="group relative aspect-[4/5] sm:aspect-square bg-[#D9D9D9] rounded-2xl overflow-hidden cursor-pointer border border-black/5">
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                 />
                              </div>

                              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
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
                                          className="text-[8px] bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-md border border-white/10 uppercase font-medium">
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

               <div className="flex justify-center mt-8 gap-4 sm:block">
                  <CarouselPrevious className="sm:absolute sm:-left-4 sm:top-1/2 sm:-translate-y-1/2 h-12 w-12 border-black/10 bg-white hover:bg-black hover:text-white transition-all shadow-md" />
                  <CarouselNext className="sm:absolute sm:-right-4 sm:top-1/2 sm:-translate-y-1/2 h-12 w-12 border-black/10 bg-white hover:bg-black hover:text-white transition-all shadow-md" />
               </div>
            </Carousel>
         </motion.div>
      </section>
   );
}
