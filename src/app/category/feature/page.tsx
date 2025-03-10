"use client";

import { useState, useEffect, Suspense } from "react";
import Blog from "@/types/blog";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const API_URL =
  "https://popularflower-us.backendless.app/api/data/blog?where=%60category%60%20%3D%20'";

// Categories
const categories = ["Health", "Politic", "Technology", "Sport"];

const Category = () => {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") || "Health"; // Default category is "Health"
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}${selectedCategory}'`);
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      {/* Sidebar (Categories) */}
      <aside className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition md:mb-12 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Blog List */}
      <main className="w-full md:w-3/4">
        <h2 className="text-2xl font-semibold mb-4">
          Category: {selectedCategory}
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div
                  key={blog.objectId}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-700 mt-2">
                      {blog.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {blog.views} views
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No blogs found.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default function CategoryFeature() {
  return (
    <Suspense
      fallback={<p className="text-center text-gray-500">Loading...</p>}
    >
      <Category />
    </Suspense>
  );
}
