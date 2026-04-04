"use client";

import { useState } from "react";
import { ModeToggle } from "../ui/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
   const [open, setOpen] = useState(false);
   const pathname = usePathname();

   const closeMenu = () => setOpen(false);

   const handleContact = () => {
      closeMenu();
      if (pathname === "/") {
         document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <div className="sm:hidden w-full relative flex justify-center">
         <div className="relative w-full max-w-md px-2 py-1">
            <button
               onClick={() => setOpen(!open)}
               className="w-full bg-[#8A8A8A] py-3 shadow-lg flex items-center justify-center gap-3 rounded-full transition-all duration-300 hover:bg-[#7a7a7a] active:scale-95"
               aria-label="Toggle menu"
               aria-expanded={open}>
               <span className="text-sm font-semibold uppercase tracking-wide"></span>

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
                     href="/about"
                     onClick={closeMenu}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors duration-200">
                     About Me
                  </Link>
                  <Link
                     href="/projects"
                     onClick={closeMenu}
                     className="px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors duration-200">
                     Projects
                  </Link>

                  <div className="flex gap-3 p-4">
                     <Link
                        href="/#contact"
                        onClick={handleContact}
                        className="flex-1">
                        <Button className="w-full bg-[#444444] text-white text-xs font-bold py-3 rounded-full hover:bg-black uppercase tracking-wider transition-colors duration-200">
                           MESSAGE NOW
                        </Button>
                     </Link>
                     <ModeToggle />
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
}
