import { useQuery } from "@tanstack/react-query";
import Blog from "@/types/blog";
import { axiosInstance } from "@/lib/axios";

interface GetBlogQuery {
  title: string;
  limit?: number;
  offset?: number;
  category?: string;
}

const useGetBLogs = (queries: GetBlogQuery) => {
  return useQuery({
    queryKey: ["blogs", queries],
    queryFn: async () => {
      const { title, category, limit, offset } = queries;

      let baseUrl = `/data/blog?sortBy=%60created%60%20desc&pageSize=${limit}&offset=${offset}&where=%60title%60%20LIKE%20'%25${title}%25'`;
      let baseUrlCount = `/data/blog/count?where=%60title%60%20LIKE%20'%25${title}%25'`;

      if (category && category !== "all") {
        baseUrl = `${baseUrl}%20AND%20%60category%60%20%3D%20'${category}'`;
        baseUrlCount = `${baseUrlCount}%20AND%20%60category%60%20%3D%20'${category}'`;
      }

      const { data: blogs } = await axiosInstance.get<Blog[]>(baseUrl);
      const { data: count } = await axiosInstance.get<number>(baseUrlCount);
      return {
        data: blogs,
        count,
      };
    },
  });
};

export default useGetBLogs;
