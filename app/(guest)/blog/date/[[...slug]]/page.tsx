import { BLOG_POSTS } from "@/constants/blog";
import { BlogDateContent } from "@/components/features/blog/BlogDateContent";

type Props = { params: Promise<{ slug?: string[] }> };

export default async function BlogDatePage({ params }: Props) {
   const { slug } = await params;
   const segments = slug || [];
   const year = segments[0];
   const month = segments[1];
   const day = segments[2];

   console.log(segments);

   const filteredPosts = BLOG_POSTS.filter((post) => {
      if (!year) return true;
      const postDate = new Date(post.date);
      const postYear = postDate.getFullYear().toString();
      const postMonth = (postDate.getMonth() + 1).toString().padStart(2, "0");
      const postDay = postDate.getDate().toString().padStart(2, "0");

      if (day)
         return postYear === year && postMonth === month && postDay === day;
      if (month) return postYear === year && postMonth === month;
      return postYear === year;
   });

   return (
      <BlogDateContent
         segments={segments}
         filteredPosts={filteredPosts}
         year={year}
         month={month}
      />
   );
}
