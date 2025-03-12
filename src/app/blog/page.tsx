import { Suspense } from "react";
import BlogList from "./_components/BlogList";

import { Metadata } from "next";
import Loading from "@/components/Loading";

const AboutMetadata: Metadata = {
  title: "About StarbLogIndo - Popular Flower Blog",
  description: "Discover the latest updates and articles",
  keywords: ["Indo", "popular blogs", "sport", "Ai", "health"],
};
const Blogs = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
    </main>
  );
};

export default Blogs;
