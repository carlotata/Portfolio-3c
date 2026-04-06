"use client";

import { useState, useMemo, useEffect } from "react";
import { Menu, X, Tag, ChevronDown } from "lucide-react";
import { projects } from "@/constants/project";
import { ProjectCard } from "./projectcard";
import { ProjectModal } from "@/components/common/modalproject";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";

type Project = (typeof projects)[number];

const getPageNums = (current: number, total: number): (number | string)[] => {
   if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
   const left = current - 1,
      right = current + 1;
   const result: (number | string)[] = [];
   for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= left && i <= right)) {
         result.push(i);
      } else if (result[result.length - 1] !== "...") {
         result.push("...");
      }
   }
   return result;
};

export function ProjectLayout() {
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [currentPage, setCurrentPage] = useState(1);
   const [loading, setLoading] = useState(true);
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

   const itemsPerPage = 8;

   const categories = useMemo(() => {
      const allCategories = projects.map((p) => p.category);
      return Array.from(new Set(allCategories));
   }, []);

   const resetFilters = () => {
      setSearchQuery("");
      setSelectedCategory("All");
      setCurrentPage(1);
   };

   const filteredProjects = useMemo(() => {
      return projects.filter((project) => {
         const matchesCategory =
            selectedCategory === "All" || project.category === selectedCategory;

         const searchLower = searchQuery.toLowerCase();
         const matchesSearch =
            project.title.toLowerCase().includes(searchLower) ||
            project.tech.some((t) => t.toLowerCase().includes(searchLower)) ||
            project.description.toLowerCase().includes(searchLower);

         return matchesCategory && matchesSearch;
      });
   }, [searchQuery, selectedCategory]);

   useEffect(() => {
      setCurrentPage(1);
   }, [searchQuery, selectedCategory]);

   const paginatedProjects = useMemo(() => {
      const start = (currentPage - 1) * itemsPerPage;
      return filteredProjects.slice(start, start + itemsPerPage);
   }, [filteredProjects, currentPage]);

   const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

   useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(timer);
   }, [searchQuery, selectedCategory, currentPage]);

   return (
      <>
         <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
         />

         <section className="py-12 px-4 sm:px-10 max-w-350 xl:max-w-400 w-full mx-auto">
            <div className="flex flex-col gap-4 mb-12">
               <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                  MY COLLECTION
               </h1>
               <p className="text-xl text-muted-foreground">
                  Project made throughout the years.
               </p>
            </div>

            <div className="flex flex-row justify-between items-stretch gap-3 mb-12">
               <div className="flex items-stretch gap-2 shrink-0">
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button className="hover:cursor-pointer h-10 px-4 rounded-2m border-2 flex gap-2">
                           <Menu size={20} />
                           <span className=" sm:inline font-bold">Filter</span>
                           <ChevronDown size={14} />
                        </Button>
                     </DropdownMenuTrigger>

                     <DropdownMenuContent
                        align="start"
                        className="w-56 rounded-2m p-2">
                        <DropdownMenuLabel className="flex gap-2 opacity-70">
                           <Tag size={14} /> Categories
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                           onClick={() => setSelectedCategory("All")}>
                           All {selectedCategory === "All" && "✓"}
                        </DropdownMenuItem>

                        {categories.map((cat) => (
                           <DropdownMenuItem
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className="capitalize">
                              {cat} {selectedCategory === cat && "✓"}
                           </DropdownMenuItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>

                  {(selectedCategory !== "All" || searchQuery !== "") && (
                     <Button variant="ghost" onClick={resetFilters}>
                        <X size={16} />
                     </Button>
                  )}
               </div>

               <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-96 h-10 rounded-2m border-2 border-muted"
               />
            </div>

            {filteredProjects.length > 0 ? (
               <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
                     {loading
                        ? Array.from({ length: itemsPerPage }).map((_, i) => (
                             <div
                                key={i}
                                className="border rounded-lg p-4 flex flex-col gap-2">
                                <Skeleton className="h-40 w-full rounded-md" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                             </div>
                          ))
                        : paginatedProjects.map((project) => (
                             <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                             />
                          ))}
                  </div>

                  <Pagination className="mt-10 py-12">
                     <PaginationContent>
                        <PaginationItem>
                           <PaginationPrevious
                              href="#"
                              onClick={(e) => {
                                 e.preventDefault();
                                 if (currentPage > 1)
                                    setCurrentPage(currentPage - 1);
                              }}
                           />
                        </PaginationItem>

                        {getPageNums(currentPage, totalPages).map((p, i) =>
                           p === "..." ? (
                              <PaginationItem key={`ellipsis-${i}`}>
                                 <span className="px-3 py-2 text-muted-foreground">
                                    ···
                                 </span>
                              </PaginationItem>
                           ) : (
                              <PaginationItem key={p}>
                                 <PaginationLink
                                    href="#"
                                    isActive={currentPage === p}
                                    onClick={(e) => {
                                       e.preventDefault();
                                       setCurrentPage(p as number);
                                    }}>
                                    {p}
                                 </PaginationLink>
                              </PaginationItem>
                           ),
                        )}

                        <PaginationItem>
                           <PaginationNext
                              href="#"
                              onClick={(e) => {
                                 e.preventDefault();
                                 if (currentPage < totalPages)
                                    setCurrentPage(currentPage + 1);
                              }}
                           />
                        </PaginationItem>
                     </PaginationContent>
                  </Pagination>
               </>
            ) : (
               <div className="text-center py-24">
                  <h3 className="text-xl font-bold">No projects found</h3>
               </div>
            )}
         </section>
      </>
   );
}
