"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HeroImage } from "@/components/ui/heroimage";
import { Button } from "@/components/ui/button";
import { Sparkles, GraduationCap, MapPin } from "lucide-react";

export default function Mainlayout() {
   const { scrollY } = useScroll();

   const y1 = useTransform(scrollY, [0, 500], [0, -150]);
   const opacityScroll = useTransform(scrollY, [0, 300], [1, 0]);

   return (
      <main className="relative flex items-center justify-center min-h-screen px-4 sm:px-10 overflow-hidden transition-colors duration-500">
         <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            style={{ y: y1, opacity: opacityScroll }}
            className="absolute top-[12%] sm:top-[20%] left-1/2 -translate-x-1/2 text-[11vw] sm:text-[8vw] font-black tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap text-black/3 dark:text-white/3 uppercase">
            JOHN CARL AVISO
         </motion.h1>

         <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            style={{ y: y1 }}
            className="absolute top-[10%] sm:top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11vw] sm:text-[8vw] tracking-tighter select-none pointer-events-none z-0 font-black whitespace-nowrap uppercase">
            JOHN CARL AVISO
         </motion.h1>

         <motion.div
            initial={{ y: 200, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
               type: "spring",
               damping: 20,
               stiffness: 40,
               delay: 0.6,
            }}

            className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none transform -translate-y-20 scale-110 sm:translate-y-0 sm:scale-100">
            <HeroImage />
         </motion.div>

         <div className="relative z-20 w-full sm:w-auto sm:mr-auto max-w-sm mt-[45vh] sm:mt-20 mb-10 sm:mb-0">
            <motion.div
               initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
               animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
               transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  delay: 0.8,
               }}
               className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl p-5 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-white/10 mx-2 sm:mx-0">

               <div className="absolute -top-2 -right-2 sm:-top-5 sm:-right-5 w-10 h-10 sm:w-12 sm:h-12 bg-[#3D3D3D] dark:bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                  <Sparkles className="text-white dark:text-black w-5 h-5 sm:w-6 sm:h-6" />
               </div>

               <h2 className="text-xl sm:text-3xl font-black mb-2 sm:mb-6 leading-[0.9] uppercase tracking-tighter text-black dark:text-white">
                  Get to
                  <br />
                  <span className="italic text-black/40 dark:text-white/40">
                     Know Me
                  </span>
               </h2>

               <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p className="text-[#333333] dark:text-zinc-400 text-xs sm:text-base leading-relaxed font-medium">
                     A 3rd Year College Student from Cordova Public College.
                  </p>

                  <div className="flex flex-wrap gap-2">
                     <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider text-black/60 dark:text-white/70 border border-black/5 dark:border-white/5">
                        <GraduationCap size={12} /> Student
                     </span>
                     <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider text-black/60 dark:text-white/70 border border-black/5 dark:border-white/5">
                        <MapPin size={12} /> Cebu, PH
                     </span>
                  </div>
               </div>

               <Button
                  onClick={() => {
                     document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                     });
                  }}
                  className="group relative overflow-hidden bg-[#1A1A1A] dark:bg-white text-white dark:text-black w-full sm:w-auto px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-black dark:hover:bg-neutral-200 transition-all shadow-xl">
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               </Button>
            </motion.div>
         </div>
      </main>
   );
}
