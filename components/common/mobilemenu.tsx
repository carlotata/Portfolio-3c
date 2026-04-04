"use client";

import { useState } from "react";
import { ModeToggle } from "../ui/theme-toggle";
import Link from "next/link";

export default function MobileMenu() {
   const [open, setOpen] = useState(false);

   const closeMenu = () => setOpen(false);

   return (
      <div className="sm:hidden w-full relative flex justify-center">
         <div className="relative w-full max-w-md px-2 py-1">
            <button
               onClick={() => setOpen(!open)}
               className="w-full bg-[#8A8A8A] py-3 shadow-lg flex items-center justify-center gap-3 rounded-full transition-all duration-300 hover:bg-[#7a7a7a] active:scale-95"
               aria-label="Toggle menu"
               aria-expanded={open}>
               <div className="space-y-1.5 transition-transform duration-300">
                  <span
                     className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                        open ? "rotate-45 translate-y-2" : ""
                     }`}
                  />
                  <span
                     className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                        open ? "opacity-0" : ""
                     }`}
                  />
                  <span
                     className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                        open ? "-rotate-45 -translate-y-2" : ""
                     }`}
                  />
               </div>
            </button>

            <div
               className={`absolute left-3 right-3 top-full mt-1 bg-[#acacac] shadow-xl rounded-2xl overflow-hidden transition-all duration-300 origin-top ${
                  open
                     ? "opacity-100 scale-y-100 translate-y-0"
                     : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
               }`}>
               <nav className="flex flex-col divide-y divide-black/10">
                  <Link
                     href="/"
                     onClick={closeMenu}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors duration-200">
                     Home
                  </Link>
                  <Link
                     href="/blog"
                     onClick={closeMenu}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors duration-200">
                     Blogs
                  </Link>
                  <Link
                     href="/projects"
                     onClick={closeMenu}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors duration-200">
                     Projects
                  </Link>
                  <Link
                     href="/about"
                     onClick={closeMenu}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors duration-200">
                     About Me
                  </Link>

                  <div className="flex gap-3 p-4">
                     <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="flex-1">
                        <button className="w-full bg-black text-white text-xs font-bold py-3 rounded-sm hover:bg-white hover:text-black uppercase tracking-wider transition-colors duration-200">
                           Contact
                        </button>
                     </Link>

                     <ModeToggle onToggle={closeMenu} />
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
}
