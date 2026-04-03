import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogCategoryNotFound() {
   return (
      <div className="py-8">
         <div className="border rounded-lg p-8 text-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-2">Category not found</h1>
            <p className="text-muted-foreground mb-6">
               This category doesn&apos;t exist or the path is invalid.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
               <Link href="/blog">
                  <Button>Back to Blog</Button>
               </Link>
               <Link href="/blog/category/tech">
                  <Button variant="outline">Browse Tech</Button>
               </Link>
            </div>
         </div>
      </div>
   );
}
