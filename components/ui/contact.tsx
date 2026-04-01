"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { sendEmail } from "@/components/ui/provider/actions/sendemail";

export function ContactSection() {
   const [isPending, setIsPending] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);

   async function handleSubmit(formData: FormData) {
      setIsPending(true);
      const result = await sendEmail(formData);
      setIsPending(false);

      if (result.success) {
         setIsSuccess(true);
         setTimeout(() => setIsSuccess(false), 5000); 
      }
   }

   return (
      <section
         id="contact"
         className="py-24 px-4 sm:px-10 max-w-6xl mx-auto w-full">
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-2xl sm:text-4xl font-black tracking-[0.3em] mb-16">
            Let&apos;s Talk It Out!
         </motion.h2>

         <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row border border-black/5 rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-white/40 backdrop-blur-xl shadow-2xl">
            <div className="w-full md:w-1/2 bg-[#1A1A1A] p-12 flex flex-col justify-between text-white relative overflow-hidden">
               <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
               <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                        Active for Work
                     </span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-black leading-none uppercase tracking-tighter mb-4">
                     Have a <br />{" "}
                     <span className="text-white/40">Great Idea?</span>
                  </h3>
               </div>
               <p className="relative z-10 text-white/60 text-sm font-medium max-w-[250px]">
                  Send me a message and let&apos;s turn your vision into
                  reality.
               </p>
            </div>

            <div className="w-full md:w-1/2 p-10 sm:p-16 bg-white/10 border-t md:border-t-0 md:border-l border-black/5 relative">
               <AnimatePresence>
                  {isSuccess ? (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-10 text-center">
                        <CheckCircle2
                           size={64}
                           className="text-green-500 mb-4"
                        />
                        <h4 className="text-2xl font-black uppercase tracking-tighter">
                           Message Sent!
                        </h4>
                        <p className="text-sm font-medium text-black/50 mt-2">
                           Thanks, John Carl will get back to you soon.
                        </p>
                     </motion.div>
                  ) : null}
               </AnimatePresence>

               <form action={handleSubmit} className="space-y-6">
                  <div>
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-2 block">
                        Your Email
                     </label>
                     <input
                        name="senderEmail"
                        type="email"
                        required
                        placeholder="hello@example.com"
                        className="w-full bg-black/5 border border-black/5 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                     />
                  </div>

                  <div>
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-2 block">
                        Your Message
                     </label>
                     <textarea
                        name="message"
                        required
                        placeholder="Tell me about your project..."
                        className="w-full bg-black/5 border border-black/5 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-black/10 transition-all h-32 resize-none"
                     />
                  </div>

                  <Button
                     disabled={isPending}
                     className="group w-full bg-[#1A1A1A] text-white h-16 rounded-2xl font-black tracking-[0.2em] transition-all hover:bg-black flex items-center justify-center gap-3 overflow-hidden relative shadow-xl">
                     <span className="relative z-10 flex items-center gap-2">
                        {isPending ? "SENDING..." : "SAY HELLO"}
                        {!isPending && (
                           <Send
                              size={16}
                              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                           />
                        )}
                     </span>
                     <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
               </form>
            </div>
         </motion.div>
      </section>
   );
}
