"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

export interface Project {
   id: number;
   title: string;
   category: string;
   description: string;
   image: string;
   tech: string[];
   link: string;
}

interface ProjectCardProps {
   project: Project;
   onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
   return (
      <Card
         className="group relative flex flex-col w-full h-full overflow-hidden shadow-xl cursor-pointer"
         onClick={onClick}>
         <div className="relative w-full aspect-4/3 overflow-hidden bg-muted">
            <div className="absolute py-2 left-2 z-12">
               <Badge
                  variant="secondary"
                  className="bg-background hover:bg-background/90 shadow-xl">
                  {project.category}
               </Badge>
            </div>

            <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-300 group-hover:bg-transparent" />
            <img
               src={project.image}
               alt={`Screenshot of ${project.title}`}
               className="w-full h-full object-cover transition-all duration-500 brightness-75 group-hover:brightness-100"
            />
         </div>

         <CardHeader className="pb-3">
            <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2 min-h-10">
               {project.description}
            </CardDescription>
         </CardHeader>

         {project.tech && project.tech.length > 0 && (
            <CardContent className="mt-auto pb-5">
               <div className="flex flex-wrap gap-3">
                  {project.tech.slice(0, 3).map((tech, i) => (
                     <Badge
                        key={i}
                        variant="outline"
                        className="text-xs px-3 py-1 font-normal">
                        {tech}
                     </Badge>
                  ))}
                  {project.tech.length > 3 && (
                     <Badge
                        variant="outline"
                        className="text-xs px-3 py-0 font-normal text-muted-foreground">
                        +{project.tech.length - 3}
                     </Badge>
                  )}
               </div>
            </CardContent>
         )}

         <CardFooter className="pt-0">
            <Button className="w-full group/btn pointer-events-none" size="sm">
               View Details
               <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Button>
         </CardFooter>
      </Card>
   );
}
