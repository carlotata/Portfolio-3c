"use client";
import { Mail, Phone, Instagram, Github } from "lucide-react";

export function SocialSection() {
   return (
      <section className="py-14 px-4 sm:px-10 max-w-5xl mx-auto">
         <div className="flex items-center gap-3 mb-7">
            <span className="text-[20px] font-medium uppercase tracking-[0.22em] text-foreground">
               Contact Me
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[20px] font-medium text-muted-foreground tabular-nums">
               03
            </span>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 bg-white/10 border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
               <Mail className="w-6 h-6 text-foreground" />
               <div>
                  <p className="text-sm font-bold text-foreground">Email</p>
                  <a
                     href="mailto:avisojohn040@gmail.com"
                     className="text-xs text-muted-foreground hover:underline">
                     avisojohn040@gmail.com
                  </a>
               </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
               <Phone className="w-6 h-6 text-foreground" />
               <div>
                  <p className="text-sm font-bold text-foreground">Phone</p>
                  <a
                     href="tel:+639XXXXXXXXX"
                     className="text-xs text-muted-foreground hover:underline">
                     +63 9762642154
                  </a>
               </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
               <Instagram className="w-6 h-6 text-foreground" />
               <div>
                  <p className="text-sm font-bold text-foreground">Instagram</p>
                  <a
                     href="https://instagram.com/jcarl_012"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xs text-muted-foreground hover:underline">
                     instagram.com/jcarl_012
                  </a>
               </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
               <Github className="w-6 h-6 text-foreground" />
               <div>
                  <p className="text-sm font-bold text-foreground">GitHub</p>
                  <a
                     href="https://github.com/carlotata"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xs text-muted-foreground hover:underline">
                     github.com/carlotata
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
