import { BLOG_POSTS } from "@/constants/blog";
import { BlogCategoryContent } from "@/components/features/blog/BlogCategoryContent";

type Props = { params: Promise<{ slug: string[] }> };

export default async function BlogCategoryPage({ params }: Props) {
   const { slug } = await params;
   const activeCategories = slug || [];
   const mainCategory = activeCategories[activeCategories.length - 1];
   console.log(slug);

   const filteredPosts = BLOG_POSTS.filter((post) =>
      post.category.some(
         (cat) => cat.toLowerCase() === mainCategory.toLowerCase(),
      ),
   );

   return (
      <BlogCategoryContent
         activeCategories={activeCategories}
         filteredPosts={filteredPosts}
         mainCategory={mainCategory}
      />
   );
}
