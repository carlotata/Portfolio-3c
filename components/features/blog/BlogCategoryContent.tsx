"use client";

import Link from "next/link";
import { BlogPost, BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Layers, Hash } from "lucide-react";

interface BlogCategoryContentProps {
   activeCategories: string[];
   filteredPosts: BlogPost[];
   mainCategory: string;
}

export function BlogCategoryContent({
   activeCategories,
   filteredPosts,
   mainCategory,
}: BlogCategoryContentProps) {
   const allUniqueCategories = Array.from(
      new Set(BLOG_POSTS.flatMap((post) => post.category)),
   ).sort();

   const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

   const isMatch = (catName: string) =>
      slugify(catName) === slugify(mainCategory);

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
            <div className="flex items-center gap-4 text-primary">
               <div className="p-3 rounded-2xl bg-primary/10">
                  <Layers size={32} className=" text-blue-500" />
               </div>
               <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl capitalize text-foreground">
                  {mainCategory.replace(/-/g, " ")}
               </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
               Technical logs, projects, and insights specifically related to{" "}
               <span className="font-semibold underline decoration-primary decoration-2 underline-offset-4 text-blue-500">
                  {mainCategory.replace(/-/g, " ")}
               </span>
               .
            </p>
         </div>
         <div className="mb-12 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
               <Hash size={14} />
               <span>Filter by Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
               {allUniqueCategories.map((cat) => {
                  const active = isMatch(cat);
                  return (
                     <Link key={cat} href={`/blog/category/${slugify(cat)}`}>
                        <Button
                           variant={active ? "default" : "outline"}
                           size="sm"
                           className={`hover:cursor-pointer rounded-xl capitalize transition-all ${
                              active
                                 ? "bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90"
                                 : "hover:border-primary/50 hover:bg-primary/5"
                           }`}>
                           {cat}
                        </Button>
                     </Link>
                  );
               })}
            </div>
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
                              <time className="text-xs font-bold text-muted-foreground bg-background px-3 py-1 rounded-lg border">
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
                                 className={`capitalize px-3 py-1 transition-colors ${
                                    isMatch(cat)
                                       ? "bg-primary text-primary-foreground"
                                       : "bg-secondary/50 group-hover:bg-primary/10 group-hover:text-primary"
                                 }`}>
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
                     <Layers size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                     No matches found
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                     We couldn't find any posts for "
                     {mainCategory.replace(/-/g, " ")}".
                  </p>
                  <Link href="/blog/posts">
                     <Button className="rounded-full px-8 font-bold">
                        Browse All Posts
                     </Button>
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
}
