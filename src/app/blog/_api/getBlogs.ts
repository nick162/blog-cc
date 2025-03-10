import Blog from "@/types/blog";

export const getBlogs = async (size: number = 3) => {
  const response = await fetch(
    `https://popularflower-us.backendless.app/api/data/blog?pageSize=${size}&sortBy=%60views%60%20desc`
  );
  const blogs: Blog[] = await response.json();
  return blogs;
};
