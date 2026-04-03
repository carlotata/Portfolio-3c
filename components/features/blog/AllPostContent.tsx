"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import {
   ArrowLeft,
   BookOpen,
   Search,
   Menu,
   Calendar,
   Tag,
   X,
   ChevronDown,
   ChevronLeft,
   ChevronRight,
} from "lucide-react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const POSTS_PER_PAGE = 8;

export function AllPostsContent() {
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedYear, setSelectedYear] = useState("All");
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [currentPage, setCurrentPage] = useState(1); // Pagination State
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   // Reset to page 1 when filters change
   useEffect(() => {
      setCurrentPage(1);
   }, [searchQuery, selectedYear, selectedCategory]);

   const { years, categories } = useMemo(() => {
      const y = [
         ...new Set(
            BLOG_POSTS.map((p) => new Date(p.date).getFullYear().toString()),
         ),
      ];
      const c = [...new Set(BLOG_POSTS.flatMap((p) => p.category))];
      return {
         years: y.sort((a, b) => b.localeCompare(a)),
         categories: c.sort(),
      };
   }, []);

   const filteredPosts = useMemo(() => {
      return [...BLOG_POSTS]
         .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
         )
         .filter((post) => {
            const postYear = new Date(post.date).getFullYear().toString();
            const lowerQuery = searchQuery.toLowerCase();

            const matchesSearch =
               post.title.toLowerCase().includes(lowerQuery) ||
               post.excerpt.toLowerCase().includes(lowerQuery) ||
               post.category.some((cat) =>
                  cat.toLowerCase().includes(lowerQuery),
               );

            const matchesYear =
               selectedYear === "All" || postYear === selectedYear;
            const matchesCategory =
               selectedCategory === "All" ||
               post.category.includes(selectedCategory);

            return matchesSearch && matchesYear && matchesCategory;
         });
   }, [searchQuery, selectedYear, selectedCategory]);

   // Pagination Logic
   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
   const paginatedPosts = useMemo(() => {
      const start = (currentPage - 1) * POSTS_PER_PAGE;
      return filteredPosts.slice(start, start + POSTS_PER_PAGE);
   }, [filteredPosts, currentPage]);

   const resetFilters = () => {
      setSearchQuery("");
      setSelectedYear("All");
      setSelectedCategory("All");
      setCurrentPage(1);
   };

   return (
      <div className="mx-auto px-8 py-16 max-w-7xl pt-6">
         <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-12 transition-colors w-fit group">
            <ArrowLeft
               size={16}
               className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Blog Hub
         </Link>

         <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4 text-primary">
               <div className="p-3 rounded-2xl bg-primary/10">
                  <BookOpen size={32} />
               </div>
               <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
                  All Posts Archive
               </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
               A complete collection of technical logs and academic journeys.
            </p>
         </div>

         <div className="flex flex-row justify-between items-center gap-2 mb-10">
            <div className="flex items-center gap-2 shrink-0">
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        variant="outline"
                        className="h-10 px-3 sm:px-5 rounded-2xl border-2 flex gap-2 sm:gap-3 hover:bg-muted">
                        <Menu size={20} />
                        <span className="font-bold text-sm sm:text-base">
                           Filter
                        </span>
                        <ChevronDown
                           size={16}
                           className="opacity-50 hidden sm:block"
                        />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                     align="start"
                     className="w-64 rounded-2xl p-2">
                     <DropdownMenuLabel className="flex items-center gap-2 opacity-70">
                        <Calendar size={14} /> Years
                     </DropdownMenuLabel>
                     <DropdownMenuItem
                        onClick={() => setSelectedYear("All")}
                        className="rounded-lg">
                        All Years {selectedYear === "All" && "✓"}
                     </DropdownMenuItem>
                     {years.map((year) => (
                        <DropdownMenuItem
                           key={year}
                           onClick={() => setSelectedYear(year)}
                           className="rounded-lg">
                           {year} {selectedYear === year && "✓"}
                        </DropdownMenuItem>
                     ))}
                     <DropdownMenuSeparator />
                     <DropdownMenuLabel className="flex items-center gap-2 opacity-70">
                        <Tag size={14} /> Categories
                     </DropdownMenuLabel>
                     <DropdownMenuItem
                        onClick={() => setSelectedCategory("All")}
                        className="rounded-lg">
                        All Categories {selectedCategory === "All" && "✓"}
                     </DropdownMenuItem>
                     {categories.map((cat) => (
                        <DropdownMenuItem
                           key={cat}
                           onClick={() => setSelectedCategory(cat)}
                           className="capitalize rounded-lg">
                           {cat} {selectedCategory === cat && "✓"}
                        </DropdownMenuItem>
                     ))}
                  </DropdownMenuContent>
               </DropdownMenu>

               {(selectedYear !== "All" || selectedCategory !== "All") && (
                  <Button
                     variant="ghost"
                     onClick={resetFilters}
                     className="text-muted-foreground hover:text-destructive h-10 px-2 sm:px-4">
                     <X size={16} className="sm:mr-2" />{" "}
                     <span className="hidden sm:inline">Clear</span>
                  </Button>
               )}
            </div>

            <div className="relative flex-1 md:w-96 md:flex-none group">
               <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 pl-4 pr-4 py-3 rounded-2xl border-2 border-muted bg-muted/20 focus:bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm sm:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!isMounted ? (
               <div className="h-40 bg-muted/20 animate-pulse rounded-2xl border col-span-2" />
            ) : paginatedPosts.length > 0 ? (
               paginatedPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                     <article className="group p-6 border-2 border-muted bg-muted/20 hover:bg-background hover:border-primary/50 hover:shadow-lg transition-all rounded-2xl h-full flex flex-col">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                           <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {post.title}
                           </h3>
                           <span className="text-sm text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded-md italic">
                              {post.date}
                           </span>
                        </div>
                        <p className="text-muted-foreground line-clamp-2 mb-4">
                           {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                           {post.category.map((cat) => (
                              <Badge
                                 key={cat}
                                 variant="secondary"
                                 className="capitalize opacity-80">
                                 {cat}
                              </Badge>
                           ))}
                        </div>
                     </article>
                  </Link>
               ))
            ) : (
               <div className="col-span-full py-24 text-center border-2 border-dashed rounded-3xl bg-muted/5 border-muted-foreground/20">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6 text-muted-foreground">
                     <Search size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                     No matches found
                  </h3>
                  <p className="text-muted-foreground mb-8">
                     Try adjusting your search or filters.
                  </p>
                  <Button onClick={resetFilters} className="rounded-full px-8">
                     Reset All
                  </Button>
               </div>
            )}
         </div>

         {totalPages > 1 && (
            <div className="py-10 mt-12 flex justify-center items-center gap-2">
               <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  onClick={() =>
                     setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}>
                  <ChevronLeft size={20} />
               </Button>

               <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                     <Button
                        key={i + 1}
                        variant={currentPage === i + 1 ? "default" : "outline"}
                        className="w-10 h-10 rounded-xl"
                        onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                     </Button>
                  ))}
               </div>

               <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  onClick={() =>
                     setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}>
                  <ChevronRight size={20} />
               </Button>
            </div>
         )}
      </div>
   );
}
