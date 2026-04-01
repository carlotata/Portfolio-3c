"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
   const senderEmail = formData.get("senderEmail") as string;
   const message = formData.get("message") as string;

   if (!senderEmail || !message) {
      return { error: "Please fill out all fields." };
   }

   try {
      await resend.emails.send({
         from: "Portfolio Contact <onboarding@resend.dev>",
         to: "avisojohn040@gmail.com", 
         subject: "New Message from Portfolio",
         replyTo: senderEmail,
         text: `Sender: ${senderEmail}\n\nMessage: ${message}`,
      });

      return { success: true };
   } catch (error) {
      return { error: "Failed to send email." };
   }
}
