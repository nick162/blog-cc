import { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import { BlogHeader } from "./_components/BlogHeader";
import Loading from "@/components/Loading";
import { getBlog } from "../_api/getBlog";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const blog = await getBlog(slug);
  return {
    title: blog[0].title,
    description: blog[0].description,
    openGraph: {
      images: blog[0].image,
    },
  };
};

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <BlogHeader slug={slug} />
        <BlogBody slug={slug} />
      </Suspense>
    </main>
  );
};

export default BlogDetail;
