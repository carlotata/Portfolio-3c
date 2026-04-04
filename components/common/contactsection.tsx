"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2 } from "lucide-react";
import { sendEmail } from "@/components/provider/actions/sendemail";

export function ContactSection() {
   const [isPending, setIsPending] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const [errorMsg, setErrorMsg] = useState("");
   const formRef = useRef<HTMLFormElement>(null);

   async function handleSubmit(formData: FormData) {
      setIsPending(true);
      setErrorMsg("");
      const result = await sendEmail(formData);
      setIsPending(false);

      if (result.success) {
         setIsSuccess(true);
         formRef.current?.reset();
         setTimeout(() => setIsSuccess(false), 5000);
      } else {
         setErrorMsg(result.error || "Failed to send email.");
      }
   }

   return (
      <section className="py-6 px-4 sm:px-10 max-w-6xl mx-auto w-full">
         {/* Title */}
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-2xl sm:text-4xl font-black tracking-[0.3em] mb-6 text-black dark:text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Have some Questions?
         </motion.h2>

         <p className="text-center text-sm sm:text-base text-black/60 dark:text-white/60 max-w-3xl mx-auto mb-6">
            Whether you have a project inquiry, collaboration idea, or just want
            to say hi, feel free to send a message. I typically respond within
            24–48 hours.
         </p>

         <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl">
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

                  <h3
                     className="text-4xl sm:text-5xl font-black leading-none uppercase tracking-tighter mb-4"
                     style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                     Have a <br />
                     <span className="text-white/40">Great Idea?</span>
                  </h3>
               </div>

               <p className="text-white/60 text-sm font-medium mt-6">
                  Send me a message and let&apos;s turn your vision into
                  reality.
               </p>
            </div>

            <div className="w-full md:w-1/2 p-10 sm:p-16 border-t md:border-t-0 md:border-l border-black/10 dark:border-white/10 relative">
               <AnimatePresence>
                  {isSuccess && (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-20 bg-white dark:bg-neutral-900 flex flex-col items-center justify-center p-10 text-center">
                        <CheckCircle2
                           size={64}
                           className="text-green-500 mb-4"
                        />
                        <h4 className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white">
                           Message Sent!
                        </h4>
                        <p className="text-sm text-black/60 dark:text-white/60 mt-2">
                           Thanks, John Carl will get back to you soon.
                        </p>
                     </motion.div>
                  )}
               </AnimatePresence>

               {errorMsg && (
                  <motion.div
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mb-4 text-red-500 text-sm font-bold">
                     {errorMsg}
                  </motion.div>
               )}

               <form ref={formRef} action={handleSubmit} className="space-y-6">
                  <div>
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-white/70 mb-2 block">
                        Your Name
                     </label>
                     <Input
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-white dark:bg-neutral-900 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white text-black dark:text-white"
                     />
                  </div>

                  <div>
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-white/70 mb-2 block">
                        Email
                     </label>
                     <Input
                        name="email"
                        type="email"
                        placeholder="hello@example.com"
                        required
                        className="bg-white dark:bg-neutral-900 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white text-black dark:text-white"
                     />
                  </div>

                  <div>
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-white/70 mb-2 block">
                        Project / Subject
                     </label>
                     <Input
                        name="subject"
                        placeholder="Website / App / Other"
                        required
                        className="bg-white dark:bg-neutral-900 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white text-black dark:text-white"
                     />
                  </div>

                  <div>
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-white/70 mb-2 block">
                        Additional Details
                     </label>
                     <Textarea
                        name="message"
                        placeholder="Tell me more about your project..."
                        required
                        className="h-32 resize-none bg-white dark:bg-neutral-900 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white text-black dark:text-white"
                     />
                  </div>

                  <Button
                     disabled={isPending}
                     className="hover:cursor-pointer group w-full bg-black text-white dark:bg-white dark:text-black h-16 rounded-2xl font-black tracking-[0.2em] hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border-2 border-black dark:border-white transition-all flex items-center justify-center gap-3 relative overflow-hidden shadow-xl">
                     <span className="relative z-10 flex items-center gap-2">
                        {isPending ? "SENDING..." : "SAY HELLO"}
                        {!isPending && (
                           <Send
                              size={16}
                              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                           />
                        )}
                     </span>

                     <div className="absolute inset-0 bg-black/10 dark:bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
               </form>
            </div>
         </motion.div>
      </section>
   );
}
