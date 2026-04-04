"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/theme-toggle";
import MobileMenu from "@/components/common/mobilemenu";
import { useEffect, useState } from "react";

export default function Navbar() {
   const pathname = usePathname();
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 1);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const linkClass = (href: string) =>
      `text-sm font-medium transition-all duration-300 ease-in-out hover:opacity-70 ${
         pathname === href
            ? "border-b-2 border-black dark:border-white pb-1"
            : "border-b-2 border-transparent"
      }`;

   return (
      <header className="sticky top-0 z-50 w-full">
         <div
            className={`flex transition-all duration-500 ease-in-out ${
               isScrolled
                  ? "justify-end px-0"
                  : "justify-end pr-0 pt-4 sm:pr-6 sm:pt-6"
            }`}>
            {/* Desktop Navbar */}
            <div
               className={`hidden sm:flex bg-[#8A8A8A] px-8 py-3 items-center gap-6 shadow-lg transition-all duration-500 ease-in-out rounded-bl-[40px]`}>
               <nav className="flex gap-6 items-center">
                  <Link href="/" className={linkClass("/")}>
                     Home
                  </Link>
                  <Link href="/blog" className={linkClass("/blog")}>
                     Blogs
                  </Link>
                  <Link href="/projects" className={linkClass("/projects")}>
                     Projects
                  </Link>
                  <Link href="/about" className={linkClass("/about")}>
                     About Me
                  </Link>

                  <Link href="/contact">
                     <button className="rounded-sm px-5 py-2 text-xs font-bold uppercase tracking-widest bg-black text-white hover:bg-white hover:cursor-pointer hover:text-black border-2 border-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition-all duration-200">
                        Contact
                     </button>
                  </Link>
               </nav>
               <ModeToggle />
            </div>
            <MobileMenu />
         </div>
      </header>
   );
}
