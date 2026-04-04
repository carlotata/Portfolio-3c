import { NextRequest, NextResponse } from "next/server";
import { OpenRouter } from "@openrouter/sdk";
import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "constants", "portfolio-data.json");
const portfolioData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const openrouter = new OpenRouter({
   apiKey: process.env.OPENROUTER_API_KEY || "",
});

const MAX_REQUESTS = 10; 
const WINDOW_MS = 60_000; 
const MAX_INPUT_LENGTH = 500; 
const TIMEOUT_MS = 15_000;

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
   const now = Date.now();
   const entry = rateLimitMap.get(ip);

   if (!entry || now - entry.windowStart > WINDOW_MS) {
      rateLimitMap.set(ip, { count: 1, windowStart: now });
      return false;
   }

   if (entry.count >= MAX_REQUESTS) return true;

   entry.count += 1;
   return false;
}

setInterval(() => {
   const now = Date.now();
   for (const [ip, entry] of rateLimitMap.entries()) {
      if (now - entry.windowStart > WINDOW_MS) rateLimitMap.delete(ip);
   }
}, WINDOW_MS);

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
   return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
         setTimeout(() => reject(new Error("Request timed out")), ms),
      ),
   ]);
}

export async function POST(req: NextRequest) {

   const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

   if (isRateLimited(ip)) {
      return NextResponse.json(
         {
            answer:
               "You're sending messages too quickly. Please wait a moment and try again.",
         },
         { status: 429 },
      );
   }

   let body: unknown;
   try {
      body = await req.json();
   } catch {
      return NextResponse.json(
         { answer: "Invalid request format." },
         { status: 400 },
      );
   }

   const message =
      body && typeof body === "object" && "message" in body
         ? (body as Record<string, unknown>).message
         : undefined;

   if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
         { answer: "Please enter a message before sending." },
         { status: 400 },
      );
   }

   if (message.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
         {
            answer: `Your message is too long. Please keep it under ${MAX_INPUT_LENGTH} characters.`,
         },
         { status: 400 },
      );
   }

   // 4. Call OpenRouter with a timeout
   try {
      const response = await withTimeout(
         openrouter.chat.send({
            chatRequest: {
               model: "qwen/qwen3.6-plus:free",
               messages: [
                  {
                     role: "system",
                     content: `You are a concise, professional portfolio assistant for John Carl Aviso.
Only answer using the portfolio data provided below.
Never fabricate information that is not in the data.
Keep answers brief and helpful. If something isn't in the data, say so politely.

Portfolio data:
${JSON.stringify(portfolioData)}`,
                  },
                  {
                     role: "user",
                     content: message.trim(),
                  },
               ],
               stream: false,
            },
         }),
         TIMEOUT_MS,
      );

      const answer =
         response?.choices?.[0]?.message?.content?.trim() ||
         "I couldn't generate a response. Please try again.";

      return NextResponse.json({ answer });
   } catch (err: unknown) {
      console.error("OpenRouter Error:", err);

      const message = err instanceof Error ? err.message : "";

      if (message === "Request timed out") {
         return NextResponse.json(
            {
               answer:
                  "The request took too long. Please try again in a moment.",
            },
            { status: 504 },
         );
      }

      if (
         message.includes("429") ||
         message.toLowerCase().includes("rate limit")
      ) {
         return NextResponse.json(
            {
               answer:
                  "The AI service is busy right now. Please wait a moment and try again.",
            },
            { status: 429 },
         );
      }

      return NextResponse.json(
         {
            answer:
               "Something went wrong on our end. Please try again shortly.",
         },
         { status: 500 },
      );
   }
}
