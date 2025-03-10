import Blog from "@/types/blog";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getBlog = cache(async (slug: string) => {
  const response = await fetch(
    `https://popularflower-us.backendless.app/api/data/blog?where=%60slug%60%20%3D%20'${slug}'&loadRelations=user`
  );
  const blogs: Blog[] = await response.json();

  if (!blogs.length) {
    return notFound();
  }
  return blogs;
});
