import React, { FC } from "react";
import { getBlog } from "../../_api/getBlog";
import Markdown from "@/components/Markdown";

interface BlogBodyProps {
  slug: string;
}
const BlogBody: FC<BlogBodyProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  return (
    <section className="container mx-auto p-4 flex justify-center items-center">
      <Markdown content={blogs[0].content} />
    </section>
  );
};

export default BlogBody;
