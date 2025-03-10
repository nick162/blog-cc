import React from "react";
import { getBlogs } from "../_api/getBlogs";

import BlogCard from "./BlogCard";

const BlogList = async () => {
  const blogs = await getBlogs();
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Popular BlogPost</h2>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => {
          return <BlogCard key={blog.objectId} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default BlogList;
