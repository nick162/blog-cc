"use client";

import { useEffect, useState } from "react";
import Blog from "@/types/blog";
import Link from "next/link";
import Image from "next/image";

const API_URL = "https://popularflower-us.backendless.app/api/data/blog";

const PopularCategory = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const size = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${API_URL}?pageSize=${size}&sortBy=%60views%60%20desc`
        );
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [size]);

  if (loading) {
    return (
      <p className="text-center text-gray-500">Loading popular blogs...</p>
    );
  }

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Popular Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
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
              <Link href={`/blog/${blog.slug}`}>
                <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {blog.description}
              </p>
              <p className="text-sm text-gray-700 mt-2">{blog.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
