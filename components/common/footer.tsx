import Link from "next/link";

const navLinks = [
   { label: "Home", href: "/#top" },
   { label: "Blogs", href: "/blog" },
   { label: "About Me", href: "/about" },
   { label: "Projects", href: "/projects" },
];

const socialLinks = [
   {
      label: "Facebook",
      icon: "fb",
      href: "https://www.facebook.com/jc.aviso.9/",
   },
   { label: "GitHub", icon: "gh", href: "https://github.com/carlotata" },
   { label: "Instagram", icon: "ig", href: "https://instagram.com/jcarl_012" },
];

export default function Footer() {
   return (
      <footer className="w-full bg-[#E5E5E5]/60 dark:bg-white/5 backdrop-blur-sm border-t border-black/5 dark:border-white/5 font-sans">
         <div className="max-w-360 mx-auto px-8 sm:px-12 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-black/10 dark:border-white/10">
               <div>
                  <p className="text-xl font-black tracking-tighter uppercase text-[#3D3D3D] dark:text-white mb-4">
                     John Carl Aviso
                  </p>
                  <p className="text-sm leading-loose text-[#333333]/70 dark:text-white/40 max-w-xs mb-4 font-medium">
                     Designer & developer crafting thoughtful digital
                     experiences. Based in Cebu City, open to remote work
                     worldwide.
                  </p>
                  <p className="text-xs text-[#333333]/40 dark:text-white/25 leading-loose">
                     avisojohn040@gmail.com
                     <br />
                     +63 912 345 6789
                  </p>
               </div>

               <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#3D3D3D]/40 dark:text-white/30 font-bold mb-5">
                     Navigate
                  </p>
                  <ul className="flex flex-col gap-3">
                     {navLinks.map(({ label, href }) => (
                        <li key={label}>
                           <Link
                              href={href}
                              scroll={true}
                              className="text-sm font-bold uppercase tracking-widest text-[#3D3D3D]/70 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out">
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#3D3D3D]/40 dark:text-white/30 font-bold mb-5">
                     Connect
                  </p>
                  <ul className="flex flex-col gap-4">
                     {socialLinks.map(({ label, icon, href }) => (
                        <li
                           key={label}
                           className="flex items-center gap-3 group">
                           <span className="w-7 h-7 rounded-lg bg-[#3D3D3D]/10 dark:bg-white/10 flex items-center justify-center text-[9px] font-bold uppercase tracking-wider text-[#3D3D3D]/50 dark:text-white/30 shrink-0 group-hover:bg-[#3D3D3D] group-hover:text-[#E5E5E5] dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                              {icon}
                           </span>
                           <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-bold uppercase tracking-widest text-[#3D3D3D]/70 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out">
                              {label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="flex justify-between items-center pt-6 text-[11px] font-bold uppercase tracking-widest text-[#3D3D3D]/30 dark:text-white/25">
               <span>© 2026 CPC. All rights reserved.</span>
               <span>Designed & built with care.</span>
            </div>
         </div>
      </footer>
   );
}
