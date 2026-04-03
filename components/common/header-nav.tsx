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
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 1);
      };

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

            <div
               className={`hidden sm:flex bg-[#8A8A8A] px-8 py-3 items-center gap-10 shadow-lg transition-all duration-500 ease-in-out ${
                  isScrolled ? "rounded-bl-[40px]" : "rounded-bl-[40px]"
               }`}>
               <nav className="flex gap-8">
                  <Link href="/" className={linkClass("/")}>
                     Home
                  </Link>
                  <Link href="/blog" className={linkClass("/blog")}>
                     Blogs
                  </Link>
                  <Link href="/about" className={linkClass("/about")}>
                     About Me
                  </Link>
                  <Link href="/projects" className={linkClass("/projects")}>
                     Projects
                  </Link>
               </nav>
               <ModeToggle />
            </div>

            <MobileMenu />
         </div>
      </header>
   );
}
