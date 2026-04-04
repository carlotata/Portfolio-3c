"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost, BLOG_POSTS } from "@/constants/blog";
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, History } from "lucide-react";

export function BlogLandingContent() {
   const [lastReadPost, setLastReadPost] = useState<BlogPost | null>(null);
   const [isMounted, setIsMounted] = useState(false);

   const featuredPost = BLOG_POSTS[0] || null;

   useEffect(() => {
      setIsMounted(true);
      const savedSlug = localStorage.getItem("last-read-post-slug");
      if (savedSlug) {
         const post = BLOG_POSTS.find((p) => p.slug === savedSlug);
         if (post) setLastReadPost(post);
      }
   }, []);

   const displayPost = lastReadPost || featuredPost;
   const isHistory = !!lastReadPost;

   const allCategories = Array.from(
      new Set(BLOG_POSTS.flatMap((post) => post.category)),
   );
   const dynamicCategory = allCategories[0] || "tech";
   const allYears = Array.from(
      new Set(
         BLOG_POSTS.map((post) => {
            const match = post.date.match(/\d{4}/);
            return match ? match[0] : new Date().getFullYear().toString();
         }),
      ),
   ).sort((a, b) => Number(b) - Number(a));
   const latestYear = allYears[0] || "2025";

   const [randomPosts, setRandomPosts] = useState<BlogPost[]>([]);
   useEffect(() => {
      const shuffled = [...BLOG_POSTS].sort(() => 0.5 - Math.random());
      setRandomPosts(shuffled.slice(0, 3));
   }, []);

   return (
      <div className="mx-auto py-12 px-4">
         <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
               MY BLOG JOURNEY
            </h1>
            <p className="text-xl text-muted-foreground">
               Documentation of my growth, mistakes, and technical milestones.
            </p>
         </div>

         <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Continue the Story</h2>
            <div className="grid gap-8 md:grid-cols-3">
               <Card className="border-primary/20 bg-primary/5 transition-all hover:shadow-lg flex flex-col group">
                  <CardHeader>
                     <div className="flex items-center justify-between mb-4">
                        <Badge
                           className={`${isHistory ? "bg-orange-500/20 text-orange-600" : "bg-primary/20 text-primary"} border-none shadow-none flex gap-1 items-center`}>
                           {isHistory ? <History size={12} /> : null}
                           {isHistory
                              ? "Resume Reading"
                              : "Fresh Off The Press"}
                        </Badge>
                        <span className="p-1 px-2 rounded-md bg-background text-primary text-xs font-mono border italic">
                           {isHistory ? "memory" : "current"}
                        </span>
                     </div>
                     <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {!isMounted ? "Loading..." : displayPost?.title}
                     </CardTitle>
                     <CardDescription className="line-clamp-2 mt-2">
                        {isHistory
                           ? "Pick up exactly where you left off in your last session."
                           : "The latest chapter in my ongoing technical evolution."}
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-4 border-t border-primary/10">
                     {isMounted && displayPost && (
                        <Link
                           href={`/blog/${displayPost.slug}`}
                           className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                           {isHistory ? "Return to story" : "See what's new"} →
                        </Link>
                     )}
                  </CardContent>
               </Card>

               <Card className="border-blue-500/20 bg-blue-500/5 transition-all hover:shadow-lg flex flex-col group">
                  <CardHeader>
                     <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 border-none shadow-none">
                           Focused Thread
                        </Badge>
                        <span className="p-1 px-2 rounded-md bg-background text-blue-500 text-xs font-mono border italic">
                           topic
                        </span>
                     </div>
                     <CardTitle className="group-hover:text-blue-500 transition-colors capitalize">
                        {dynamicCategory} Archives
                     </CardTitle>
                     <CardDescription className="line-clamp-2 mt-2">
                        A curated collection of deep dives into{" "}
                        {dynamicCategory}.
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-4 border-t border-blue-500/10">
                     <Link
                        href={`/blog/category/${dynamicCategory}`}
                        className="text-blue-500 hover:underline text-sm font-medium flex items-center gap-1">
                        Explore this thread →
                     </Link>
                  </CardContent>
               </Card>

               <Card className="border-purple-500/20 bg-purple-500/5 transition-all hover:shadow-lg flex flex-col group">
                  <CardHeader>
                     <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/30 border-none shadow-none">
                           Historical Record
                        </Badge>
                        <span className="p-1 px-2 rounded-md bg-background text-purple-500 text-xs font-mono border italic">
                           legacy
                        </span>
                     </div>
                     <CardTitle className="group-hover:text-purple-500 transition-colors">
                        Year {latestYear} Chronicle
                     </CardTitle>
                     <CardDescription className="line-clamp-2 mt-2">
                        Reflecting on the milestones and breakthroughs of{" "}
                        {latestYear}.
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-4 border-t border-purple-500/10">
                     <Link
                        href={`/blog/date/${latestYear}`}
                        className="text-purple-500 hover:underline text-sm font-medium flex items-center gap-1">
                        View the timeline →
                     </Link>
                  </CardContent>
               </Card>
            </div>
         </div>

         <div className="space-y-8">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl font-bold">Wander through the posts</h2>
               <span className="text-sm text-muted-foreground hidden sm:block">
                  A few hand-picked memories
               </span>
            </div>

            <div className="grid gap-6">
               {isMounted ? (
                  randomPosts.map((post) => (
                     <Link key={post.id} href={`/blog/${post.slug}`}>
                        <article className="group p-6 border-2 border-muted bg-muted/20 hover:bg-background hover:border-primary/50 hover:shadow-lg transition-all rounded-2xl">
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
                           <div className="flex flex-wrap gap-2">
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
                  <div className="h-40 bg-muted/20 animate-pulse rounded-2xl border" />
               )}
            </div>

            <div className="flex justify-center pt-8">
               <Link href="/blog/posts">
                  <Button
                     size="lg"
                     className="hover:cursor-pointer group rounded-full px-8 shadow-md">
                     See the Full Journey
                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
}
