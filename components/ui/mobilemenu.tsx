"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
   const [open, setOpen] = useState(false);

   return (
      <div className="sm:hidden w-full relative">
         {/* Full-width top bar */}
         <button
            onClick={() => setOpen(!open)}
            className="w-full bg-[#8A8A8A] px-4 py-3 shadow-lg flex items-center justify-between"
            aria-label="Open menu">
            <span className="text-sm font-semibold uppercase tracking-wide">
               Menu
            </span>

            {/* Burger icon */}
            <div className="space-y-1.5">
               <span className="block w-5 h-0.5 bg-black" />
               <span className="block w-5 h-0.5 bg-black" />
               <span className="block w-5 h-0.5 bg-black" />
            </div>
         </button>

         {/* Full-width dropdown */}
         {open && (
            <div className="absolute left-0 top-full w-full bg-[#acacac] shadow-xl rounded-b-2xl overflow-hidden">
               <nav className="flex flex-col divide-y divide-black/10">
                  <Link
                     href="/blogs"
                     onClick={() => setOpen(false)}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5">
                     Blogs
                  </Link>
                  <Link
                     href="/about"
                     onClick={() => setOpen(false)}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5">
                     About Me
                  </Link>
                  <Link
                     href="/projects"
                     onClick={() => setOpen(false)}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5">
                     Projects
                  </Link>

                  <div className="p-4">
                     <Button
                        className="w-full bg-[#444444] text-white text-xs font-bold py-3 rounded-full hover:bg-black uppercase tracking-wider"
                        onClick={() => setOpen(false)}>
                        Log-in
                     </Button>
                  </div>
               </nav>
            </div>
         )}
      </div>
   );
}
