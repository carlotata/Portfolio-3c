import Navbar from "@/components/common/header-nav";
import Footer from "@/components/common/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export default function GuestLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
         <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#dedcdc] dark:bg-[#181818] transition-colors duration-300`}>
            <Navbar />
            {children}
            <Footer />
         </div>

   );
}
