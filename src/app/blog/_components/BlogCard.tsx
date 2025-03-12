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
      <div
        key={blog.objectId}
        className="bg-gray-white rounded-lg shadow-md overflow-hidden"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
          width={100}
          height={48}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
            {blog.title}
          </h3>

          <p className="text-sm text-gray-700 mt-2 line-clamp-3">
            {blog.description}
          </p>
          <p className="text-sm text-gray-700 mt-2">{blog.views} views</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
