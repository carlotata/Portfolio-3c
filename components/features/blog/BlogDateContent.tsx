"use client";

import Link from "next/link";
import { BlogPost, BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogDateContentProps {
   segments: string[];
   filteredPosts: BlogPost[];
   year?: string;
   month?: string;
}

export function BlogDateContent({
   segments,
   filteredPosts,
   year,
   month,
}: BlogDateContentProps) {

   const availableYears = Array.from(
      new Set(BLOG_POSTS.map((post) => post.date.split("-")[0])),
   ).sort((a, b) => Number(b) - Number(a));

   const availableMonths = year
      ? Array.from(
           new Set(
              BLOG_POSTS.filter((p) => p.date.startsWith(year)).map(
                 (p) => p.date.split("-")[1],
              ),
           ),
        ).sort()
      : [];

   const getMonthName = (m: string) => {
      return new Date(2000, parseInt(m) - 1).toLocaleString("default", {
         month: "long",
      });
   };

   return (
      <div className="mx-auto px-8 py-24 max-w-6xl">
         <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors w-fit group">
            <ArrowLeft
               size={16}
               className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Blog Hub
         </Link>

         <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-4 text-purple-500">
               <div className="p-3 rounded-2xl bg-primary/10">
                  <Calendar size={32} />
               </div>
               <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl capitalize text-foreground">
                  {year
                     ? `${getMonthName(month || "1")} ${year}`
                     : "Time Archive"}
               </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
               Technical logs, projects, and insights specifically from{" "}
               <span className=" font-semibold underline decoration-primary decoration-2 underline-offset-4 text-purple-500">
                  {segments.length > 0 ? segments.join(" / ") : "all dates"}
               </span>
               .
            </p>
         </div>

         <div className="mb-12 space-y-6">
            <div className="space-y-4">
               <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  <Clock size={14} className=" text-purple-500" />
                  <span>Select Year</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {availableYears.map((y) => {
                     const active = year === y;
                     return (
                        <Link key={y} href={`/blog/date/${y}`} scroll={false}>
                           <Button
                              variant={active ? "default" : "outline"}
                              size="sm"
                              className={`hover:cursor-pointer rounded-xl capitalize transition-all ${
                                 active
                                    ? "bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90"
                                    : "hover:border-primary/50 hover:bg-primary/5"
                              }`}>
                              {y}
                           </Button>
                        </Link>
                     );
                  })}
               </div>
            </div>

            {year && (
               <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                     <ArrowRight size={14} className=" text-purple-500" />
                     <span>Filter by Month</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                     {availableMonths.map((m) => {
                        const active = month === m;
                        return (
                           <Link
                              key={m}
                              href={`/blog/date/${year}/${m}`}
                              scroll={false}>
                              <Button
                                 variant={active ? "default" : "outline"}
                                 size="sm"
                                 className={`hover:cursor-pointer rounded-xl capitalize transition-all ${
                                    active
                                       ? "bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90"
                                       : "hover:border-primary/50 hover:bg-primary/5"
                                 }`}>
                                 {getMonthName(m)}
                              </Button>
                           </Link>
                        );
                     })}
                     <Link href={`/blog/date/${year}`} scroll={false}>
                        <Button
                           variant="ghost"
                           size="sm"
                           className="hover:cursor-pointer text-muted-foreground hover:text-primary rounded-xl">
                           Clear Month
                        </Button>
                     </Link>
                  </div>
               </div>
            )}
         </div>

         <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.length > 0 ? (
               filteredPosts.map((post) => (
                  <Link
                     key={post.id}
                     href={`/blog/${post.slug}`}
                     className="group">
                     <article className="h-full p-6 border-2 border-muted bg-muted/20 group-hover:bg-card group-hover:border-primary/50 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 rounded-3xl flex flex-col justify-between">
                        <div>
                           <div className="flex justify-between items-start mb-4">
                              <time
                                 className={`text-xs font-bold px-3 py-1 rounded-lg border transition-colors ${
                                    post.date.startsWith(year || "")
                                       ? "bg-primary text-primary-foreground border-primary"
                                       : "bg-background text-muted-foreground"
                                 }`}>
                                 {post.date}
                              </time>
                           </div>

                           <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-3 leading-tight">
                              {post.title}
                           </h3>

                           <p className="text-muted-foreground line-clamp-2 mb-6 text-base leading-relaxed">
                              {post.excerpt}
                           </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                           {post.category.map((cat) => (
                              <Badge
                                 key={cat}
                                 variant="secondary"
                                 className="capitalize px-3 py-1 transition-colors bg-secondary/50 group-hover:bg-primary/10 group-hover:text-primary">
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
                     <Calendar size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                     No matches found
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                     We couldn't find any posts for this date selection.
                  </p>
                  <Link href="/blog/date" scroll={false}>
                     <Button className="rounded-full px-8 font-bold">
                        Reset Filters
                     </Button>
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
}
