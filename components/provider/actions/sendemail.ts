"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
   const name = formData.get("name") as string;
   const email = formData.get("email") as string;
   const subject = formData.get("subject") as string;
   const message = formData.get("message") as string;

   if (!name || !email || !subject || !message) {
      return { error: "Please fill out all fields." };
   }

   try {
      await resend.emails.send({
         from: "Portfolio Contact <onboarding@resend.dev>",
         to: "avisojohn040@gmail.com",
         subject: `New Message from Portfolio: ${subject}`,
         replyTo: email,
         text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      });

      return { success: true };
   } catch (error) {
      console.error("Email send error:", error);
      return { error: "Failed to send email." };
   }
}
