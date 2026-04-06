"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/constants/project";
import { ExternalLink, Github, Globe, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
   project: Project | null;
   onClose: () => void;
}

const isGithubLink = (url: string) => url.toLowerCase().includes("github.com");
const isFigmaLink = (url: string) => url.toLowerCase().includes("figma.com");

function getPrimaryIcon(url: string) {
   if (isGithubLink(url)) return <Github className="h-4 w-4" />;
   if (isFigmaLink(url)) return <ExternalLink className="h-4 w-4" />;
   return <Globe className="h-4 w-4" />;
}

function getPrimaryLabel(url: string) {
   if (isGithubLink(url)) return "View on GitHub";
   if (isFigmaLink(url)) return "Open in Figma";
   return "Visit Site";
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
   return (
      <AnimatePresence>
         {project && (
            <motion.div
               className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={onClose}>
               <motion.div
                  className="bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.92, opacity: 0, y: 24 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.92, opacity: 0, y: 24 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}>

                  <div className="relative w-full aspect-video bg-muted overflow-hidden">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                     <div className="absolute top-4 left-4">
                        <Badge className="bg-white/20 text-white border-white/20 backdrop-blur-md uppercase text-[10px] tracking-widest font-bold">
                           {project.category}
                        </Badge>
                     </div>

                     <button
                        onClick={onClose}
                        className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors">
                        <X className="h-4 w-4" />
                     </button>

                     <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-white text-2xl font-black tracking-tight uppercase leading-tight">
                           {project.title}
                        </h2>
                     </div>
                  </div>

                  <div className="p-6 flex flex-col gap-5">
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                     </p>

                     <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                           Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                           {project.tech.map((tech) => (
                              <Badge
                                 key={tech}
                                 variant="secondary"
                                 className="text-xs px-3 py-1">
                                 {tech}
                              </Badge>
                           ))}
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-3 pt-1">
                        <Button
                           asChild
                           size="sm"
                           className="gap-2 flex-1 sm:flex-none">
                           <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer">
                              {getPrimaryIcon(project.link)}
                              {getPrimaryLabel(project.link)}
                           </a>
                        </Button>

                        {project.liveLink && (
                           <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="gap-2 flex-1 sm:flex-none">
                              <a
                                 href={project.liveLink}
                                 target="_blank"
                                 rel="noopener noreferrer">
                                 <Globe className="h-4 w-4" />
                                 View Live
                              </a>
                           </Button>
                        )}
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
