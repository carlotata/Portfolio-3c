"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
   const { setTheme, resolvedTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return <div className="w-12 h-12" />;

   const isDark = resolvedTheme === "dark";

   return (
      <button
         onClick={() => setTheme(isDark ? "light" : "dark")}
         className={`relative w-9 h-9 flex items-center justify-center rounded-2xl 
                    transition-all duration-300 active:scale-90 shadow-lg border
                    ${
                       isDark
                          ? "bg-zinc-900/70 border-white/10 backdrop-blur-xl"
                          : "bg-white border-black/5 shadow-black/5"
                    }`}
         aria-label="Toggle theme">

         <Sun
            className={`h-5 w-5 transition-all duration-500 absolute
               ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"} 
               text-black`}
         />

         <Moon
            className={`h-5 w-5 transition-all duration-500 absolute
               ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"} 
               text-white`}
         />

         <span className="sr-only">Toggle theme</span>
      </button>
   );
}
