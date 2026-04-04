"use client";

export function EducationExperience() {
   return (
      <section className="py-14 px-4 sm:px-10 max-w-5xl mx-auto">
         {/* Section Header */}
         <div className="flex items-center gap-3 mb-7">
            <span className="text-[20px] font-medium uppercase tracking-[0.22em] text-foreground">
               Education
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[20px] font-medium text-muted-foreground tabular-nums">
               01
            </span>
         </div>

         {/* Education Card */}
         <div className="flex flex-col md:flex-row items-stretch border border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Year Column */}
            <div className="shrink-0 w-full md:w-36 bg-muted/50 flex flex-col items-center justify-center py-6 md:py-10 px-4 border-b md:border-b-0 md:border-r border-border">
               <p
                  className="text-4xl sm:text-[3rem] font-semibold leading-none text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  2027
               </p>
               <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                  Expected
               </p>
            </div>

            {/* Details Column */}
            <div className="flex-1 px-6 sm:px-8 py-6 sm:py-7">
               <p className="font-semibold text-[18px] text-foreground mb-1.5">
                  Cordova Public College
               </p>
               <p className="text-[13px] text-muted-foreground mb-5 tracking-wide">
                  Bachelor of Science in Information Technology
               </p>
               <p className="text-[14px] leading-[1.6] text-muted-foreground mb-5">
                  Currently in 3rd year. Background in ICT (Junior High) and
                  STEM (Senior High). Building real-world projects throughout
                  the program.
               </p>

               <div className="h-px bg-border mb-5" />

               <div className="flex flex-wrap gap-2.5">
                  <span className="rounded-sm inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-400 dark:border-emerald-600 px-4 py-1.5 text-[12px] font-semibold text-emerald-800 dark:text-emerald-300">
                     <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                     </svg>
                     TESDA NC II — Creative Web Design
                  </span>
                  <span className="rounded-sm inline-flex items-center bg-muted border border-border px-4 py-1.5 text-[12px] font-medium text-foreground">
                     3rd Year
                  </span>
                  <span className="rounded-sm inline-flex items-center bg-muted border border-border px-4 py-1.5 text-[12px] font-medium text-foreground">
                     BSIT
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
}
