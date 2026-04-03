import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
   return (
      <div className="py-8">
         <div className="border rounded-lg p-8 text-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-2">Post not found</h1>
            <p className="text-muted-foreground mb-6">
               The blog post you&apos;re looking for doesn&apos;t exist or has
               been removed.
            </p>
            <Link href="/blog">
               <Button>Back to Blog</Button>
            </Link>
         </div>
      </div>
   );
}
