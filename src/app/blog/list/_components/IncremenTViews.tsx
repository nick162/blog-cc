import { axiosInstance } from "@/lib/axios";
import { FC, useEffect } from "react";

interface IncremenViewsProps {
  objectId: string;
  views: number;
}
const IncremenTViews: FC<IncremenViewsProps> = ({ objectId, views }) => {
  const incrementView = async () => {
    try {
      axiosInstance.put(`/data/blogs/${objectId}`, {
        views: views + 1,
      });
    } catch (error) {
      console.error("eror:", error);
    }
  };
  useEffect(() => {
    incrementView();
  }, []);
  return <div />;
};

export default IncremenTViews;
