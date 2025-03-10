import { Suspense } from "react";
import BlogList from "./_components/BlogList";

import BlogSkeleton from "./_components/BlogSkeleton";
import { Metadata } from "next";

const AboutMetadata: Metadata = {
  title: "About StarbLogIndo - Popular Flower Blog",
  description: "Discover the latest updates and articles",
  keywords: ["Indo", "popular blogs", "sport", "Ai", "health"],
};
const Blogs = () => {
  return (
    <main>
      <Suspense fallback={<BlogSkeleton />}>
        <BlogList />
      </Suspense>
    </main>
  );
};

export default Blogs;
