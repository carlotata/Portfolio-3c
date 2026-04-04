"use client";

import { useState, useEffect } from "react";

export function HeroImage() {
   const [scrollOpacity, setScrollOpacity] = useState(0);
   const [isToggled, setIsToggled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const threshold = 100;
         const currentScroll = window.scrollY;
         const opacity = Math.min(currentScroll / threshold, 1);
         setScrollOpacity(opacity);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const showReal = isToggled || scrollOpacity > 0.5;

   return (
      <div
         className="relative h-[99%] sm:h-[80%] lg:h-[80%] pointer-events-auto group cursor-pointer"
         onClick={() => setIsToggled(!isToggled)}>
         <img
            src="/additionals/3d.png"
            alt="Mockup"
            style={{ opacity: isToggled ? 0 : 1 - scrollOpacity }}
            className="h-full object-contain drop-shadow-2xl transition-opacity duration-300 ease-out group-hover:opacity-0"
         />

         <img
            src="/additionals/profilenormal.png"
            alt="Real Me"
            style={{ opacity: showReal ? 1 : scrollOpacity }}
            className="absolute inset-0 h-full object-contain drop-shadow-2xl transition-opacity duration-300 ease-out dark:hidden"
         />
         <img
            src="/additionals/profileabnormal.png"
            alt="Real Me Dark"
            style={{ opacity: showReal ? 1 : scrollOpacity }}
            className="absolute inset-0 h-full object-contain drop-shadow-2xl transition-opacity duration-300 ease-out hidden dark:block"
         />
      </div>
   );
}
