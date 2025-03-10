import { Suspense } from "react";
import BlogList from "./_components/BlogList";

import BlogSkeleton from "./_components/BlogSkeleton";

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
