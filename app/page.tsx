import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";

export default function HomePage() {
   return (
      <div className="min-h-screen bg-[#dedcdc] font-sans text-black overflow-hidden relative selection:bg-black selection:text-white">
          <Navbar></Navbar>

         {/* Main Content Wrapper */}
         <main className="relative flex items-center justify-center min-h-screen px-4 sm:px-10">
            {/* Background Large Text */}
            <h1 className="absolute top-[15%] sm:top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] m:text-[8vw] font-black tracking-tighter text-black select-none pointer-events-none z-0 whitespace-nowrap">
               JOHN CARL AVISO
            </h1>

            {/* The Model Image (Centered) */}
            <div className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none">
               <img
                  src="/3d.png"
                  alt="Apex Vision Model"
                  className="h-[60%] sm:h-[75%] lg:h-[75%] object-contain drop-shadow-2xl"
               />
            </div>

            {/* Info Card (Left Side on desktop, bottom on mobile) */}
            <div className="relative z-20 w-full sm:w-auto sm:mr-auto max-w-sm mt-auto sm:mt-20 mb-8 sm:mb-0">
               <div className="bg-[#E5E5E5]/60 backdrop-blur-sm p-6 sm:p-10 rounded-[20px] border border-white/20 shadow-2xl mx-4 sm:mx-0">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
                     Get to
                     <br />
                     Know Me
                  </h2>
                  <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium">
                     A 3rd Year College Student from Cordova Public College.
                  </p>
                  {/* <button className="bg-[#3D3D3D] text-[#E5E5E5] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-md w-full sm:w-auto">
                     Contact Me
                  </button> */}
                  <Button className="bg-[#3D3D3D] text-[#E5E5E5] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-md w-full sm:w-auto">
                     {" "}
                     Contact Me{" "}
                  </Button>
               </div>
            </div>
         </main>

         {/* Subtle Bottom Vignette/Shadow */}
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
      </div>
   );
}
