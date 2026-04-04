"use client";

export function Location() {
   return (
      <section className="py-14 px-4 sm:px-10 max-w-5xl mx-auto">
         <div className="flex items-center gap-3 mb-7">
            <span className="text-[20px] font-medium uppercase tracking-[0.22em] text-foreground">
               Location
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[20px] font-medium text-muted-foreground tabular-nums">
               04
            </span>
         </div>
         
         <div className="w-full h-120 sm:h-150 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
               title="General Location"
               width="100%"
               height="100%"
               className="border-0"
               loading="lazy"
               allowFullScreen
               src="https://www.google.com/maps?q=Cebu+City,+Philippines&hl=en&z=12&output=embed"></iframe>
         </div>
      </section>
   );
}
