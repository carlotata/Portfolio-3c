"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/ui/mobilemenu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
   const pathname = usePathname();

   const linkClass = (href: string) =>
      `text-sm font-medium transition-opacity hover:opacity-70 ${
         pathname === href
            ? "border-b-2 border-black pb-1"
            : "border-b-2 border-transparent"
      }`;

   return (
      <header className="absolute top-0 left-0 w-full z-50">
         <div className="flex justify-end p-4 sm:p-6">
            {/* Desktop Navbar */}
            <div className="hidden sm:flex bg-[#8A8A8A] px-8 py-3 rounded-bl-[40px] items-center gap-10 shadow-lg">
               <nav className="flex gap-8">
                  <Link href="/" className={linkClass("/")}>
                     Home
                  </Link>
                  <Link href="/blogs" className={linkClass("/blogs")}>
                     Blogs
                  </Link>
                  <Link href="/about" className={linkClass("/about")}>
                     About Me
                  </Link>
                  <Link href="/projects" className={linkClass("/projects")}>
                     Projects
                  </Link>
               </nav>

               <Button className="bg-[#444444] text-[#E5E5E5] text-xs font-bold px-6 py-2 rounded-full hover:bg-black uppercase tracking-wider">
                  Log-in
               </Button>
            </div>

            {/* Mobile */}
            <MobileMenu />
         </div>
      </header>
   );
}
