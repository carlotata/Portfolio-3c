import Navbar from "@/components/ui/navbar";

export default function AboutPage() {
   return (
      <div className="min-h-screen bg-[#dedcdc] font-sans text-black overflow-hidden relative selection:bg-black selection:text-white">
         <Navbar></Navbar>
         <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-10">
            About Page
         </div>
      </div>
   );
}
