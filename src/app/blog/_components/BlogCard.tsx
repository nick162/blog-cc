import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Blog from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  blog: Blog;
}
const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src={blog.image}
              alt="thumbnail"
              fill
              className=""
              unoptimized={true}
            />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="line-clamp-4">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
