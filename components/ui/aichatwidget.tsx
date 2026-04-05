"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
   from: "user" | "ai";
   text: string;
}

function formatInline(text: string): string {
   const urlRegex = /(https?:\/\/[^\s]+)/g;
   const withLinks = text.replace(
      urlRegex,
      (url) =>
         `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;text-underline-offset:2px;word-break:break-all;overflow-wrap:anywhere;">${url}</a>`,
   );

   return withLinks
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(
         /`(.+?)`/g,
         "<code style='background:rgba(0,0,0,0.08);padding:1px 4px;border-radius:3px;font-size:0.85em'>$1</code>",
      );
}

const AIMessageContent = ({ text }: { text: string }) => {
   const lines = text.split("\n");

   return (
      <div
         className="space-y-1"
         style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>
         {lines.map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={i} className="h-2" />;

            if (
               trimmed.startsWith("• ") ||
               trimmed.startsWith("- ") ||
               trimmed.startsWith("* ")
            ) {
               const content = trimmed.slice(2);
               return (
                  <div key={i} className="flex gap-2 items-start">
                     <span
                        className="w-1 h-1 rounded-full bg-current shrink-0 opacity-60"
                        style={{ marginTop: "6px" }}
                     />
                     <span
                        style={{
                           overflowWrap: "anywhere",
                           wordBreak: "break-word",
                        }}
                        dangerouslySetInnerHTML={{
                           __html: formatInline(content),
                        }}
                     />
                  </div>
               );
            }

            return (
               <p
                  key={i}
                  style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
                  dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
               />
            );
         })}
      </div>
   );
};

const TypingIndicator = () => (
   <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
         <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
            style={{
               animationDelay: `${i * 0.15}s`,
               animationDuration: "0.8s",
            }}
         />
      ))}
   </div>
);

const ChatWidget = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [messages, setMessages] = useState<Message[]>([]);
   const [input, setInput] = useState("");
   const [loading, setLoading] = useState(false);
   const bottomRef = useRef<HTMLDivElement>(null);
   const inputRef = useRef<HTMLInputElement>(null);
   const abortControllerRef = useRef<AbortController | null>(null);

   const messageCount = messages.length;

   useEffect(() => {
      if (isOpen) {
         setTimeout(() => inputRef.current?.focus(), 100);
         if (messageCount === 0) {
            setMessages([
               {
                  from: "ai",
                  text: "Hi! I'm **John Carl's** portfolio assistant.\n\nI can help you explore his work in **frontend development** and **UI/UX design** — including projects, tech stack, and more.\n\nWhat would you like to know?",
               },
            ]);
         }
         setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "instant" });
         }, 50);
      }
   }, [isOpen, messageCount]); 

   useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages, loading]);

   useEffect(() => {
      return () => {
         abortControllerRef.current?.abort();
      };
   }, []);

   const sendMessage = useCallback(async () => {
      if (!input.trim() || loading) return;

      const userMessage = input.trim();
      setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
      setInput("");
      setLoading(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
         const res = await fetch("/api/openrouter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage }),
            signal: controller.signal, 
         });

         const data = await res.json();
         setMessages((prev) => [...prev, { from: "ai", text: data.answer }]);
      } catch (err) {

         if (err instanceof Error && err.name === "AbortError") return;
         setMessages((prev) => [
            ...prev,
            { from: "ai", text: "Something went wrong. Please try again." },
         ]);
      } finally {
         setLoading(false);
         abortControllerRef.current = null;
      }
   }, [input, loading]);

   return (
      <>
         <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

            .chat-widget * {
               font-family: 'DM Sans', sans-serif;
               box-sizing: border-box;
            }
            .chat-panel {
               animation: slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            }
            @keyframes slideUp {
               from { opacity: 0; transform: translateY(12px) scale(0.97); }
               to   { opacity: 1; transform: translateY(0) scale(1); }
            }
            .chat-toggle {
               transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .chat-toggle:hover {
               transform: scale(1.06);
               box-shadow: 0 8px 24px rgba(0,0,0,0.25);
            }
            .msg-user { animation: fadeSlideRight 0.18s ease; }
            .msg-ai   { animation: fadeSlideLeft  0.18s ease; }
            @keyframes fadeSlideRight {
               from { opacity: 0; transform: translateX(6px); }
               to   { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeSlideLeft {
               from { opacity: 0; transform: translateX(-6px); }
               to   { opacity: 1; transform: translateX(0); }
            }
            .send-btn { transition: background 0.15s ease; }
            .send-btn:hover:not(:disabled) { background: #333; }
            .dark .send-btn:hover:not(:disabled) { background: #e5e5e5; color: #111; }

            .ai-bubble {
               overflow-wrap: anywhere;
               word-break: break-word;
               min-width: 0;
            }
            .ai-bubble a {
               text-decoration: underline;
               text-underline-offset: 2px;
               word-break: break-all;
               overflow-wrap: anywhere;
               opacity: 0.85;
            }
            .ai-bubble a:hover { opacity: 0.6; }

            /* Mobile full-screen panel */
            @media (max-width: 639px) {
               .chat-panel {
                  position: fixed !important;
                  inset: 0 !important;
                  width: 100vw !important;
                  height: 100dvh !important;
                  border-radius: 0 !important;
                  border: none !important;
                  animation: slideMobileUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
               }
               @keyframes slideMobileUp {
                  from { opacity: 0; transform: translateY(100%); }
                  to   { opacity: 1; transform: translateY(0); }
               }
            }
         `}</style>

         <div className="chat-widget fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
            {isOpen && (
               <div className="chat-panel bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden sm:w-85 sm:h-120">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-400" />
                        <div>
                           <p className="text-[13px] font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                              Portfolio Assistant
                           </p>
                           <p className="text-[11px] text-gray-400 dark:text-gray-500">
                              Ask me about John Carl
                           </p>
                        </div>
                     </div>
                     <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-lg leading-none"
                        aria-label="Close chat">
                        x
                     </button>
                  </div>

                  <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
                     {messages.map((msg, idx) => (
                        <div
                           key={idx}
                           className={`flex ${msg.from === "user" ? "justify-end msg-user" : "justify-start msg-ai"}`}>
                           {msg.from === "ai" && (
                              <div className="w-6 h-6 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                                 <span className="text-[9px] font-bold text-white dark:text-gray-900">
                                    JC
                                 </span>
                              </div>
                           )}
                           <div
                              className={`max-w-[76%] text-[13px] leading-relaxed ${
                                 msg.from === "user"
                                    ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-2xl rounded-tr-sm"
                                    : "ai-bubble text-gray-800 dark:text-gray-200 px-3 py-2 bg-gray-50 dark:bg-gray-800/60 rounded-2xl rounded-tl-sm border border-gray-100 dark:border-gray-700/50"
                              }`}>
                              {msg.from === "ai" ? (
                                 <AIMessageContent text={msg.text} />
                              ) : (
                                 msg.text
                              )}
                           </div>
                        </div>
                     ))}

                     {loading && (
                        <div className="flex justify-start msg-ai">
                           <div className="w-6 h-6 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                              <span className="text-[9px] font-bold text-white dark:text-gray-900">
                                 JC
                              </span>
                           </div>
                           <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl rounded-tl-sm">
                              <TypingIndicator />
                           </div>
                        </div>
                     )}
                     <div ref={bottomRef} />
                  </div>

                  {/* Input */}
                  <div className="px-3 pb-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                     <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-1.5 transition-colors focus-within:border-gray-900 dark:focus-within:border-gray-400">
                        <input
                           ref={inputRef}
                           type="text"
                           value={input}
                           onChange={(e) => setInput(e.target.value)}
                           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                           placeholder="Ask a question..."
                           className="flex-1 bg-transparent text-[13px] text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none py-1"
                        />
                        <button
                           onClick={sendMessage}
                           disabled={loading || !input.trim()}
                           className="send-btn bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[12px] font-medium px-3 py-1.5 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                           Send
                        </button>
                     </div>
                     <p className="text-center text-[10px] text-gray-300 dark:text-gray-600 mt-2 tracking-wide">
                        Powered by AI · John Carl Aviso
                     </p>
                  </div>
               </div>
            )}

            <button
               onClick={() => setIsOpen(!isOpen)}
               aria-label="Toggle chat"
               className={`chat-toggle w-12 h-12 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full shadow-lg flex items-center justify-center ${isOpen ? "sm:flex hidden" : "flex"}`}>
               {isOpen ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M3 3L13 13M13 3L3 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                     />
                  </svg>
               ) : (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                     <path
                        d="M15 11.5C15 11.9 14.8 12.3 14.5 12.6C14.2 12.9 13.8 13.1 13.4 13.2L4 15L5.8 5.6C5.9 5.2 6.1 4.8 6.4 4.5C6.7 4.2 7.1 4 7.5 4H13.5C13.9 4 14.3 4.2 14.6 4.4C14.9 4.7 15 5.1 15 5.5V11.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               )}
            </button>
         </div>
      </>
   );
};

export default ChatWidget;
