import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blog";
import { BlogPostContent } from "@/components/features/blog/BlogPostContent";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
   const { slug } = await params;
   const post = BLOG_POSTS.find((p) => p.slug === slug);

   if (!post) notFound();

   return (
      <>
         <BlogPostContent post={post} />
      </>
   );
}
