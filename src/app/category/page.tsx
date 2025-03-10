"use client";

import { useState } from "react";

import { useDebounceValue } from "usehooks-ts";

import PaginationSection from "@/components/PaginationSection";
import BlogListHeader from "../blog/list/_components/BlogListHeader";
import BlogListBody from "../blog/list/_components/BlogListBody";
import useGetBLogs from "@/hooks/api/blog/useGetBLogs";
import PopularCategory from "./popularCategory/page";

// Data dummy untuk tes

const LIMIT = 4;
const BlogList = () => {
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const [debounceValue] = useDebounceValue(search, 700);
  const { data: blogs, isPending } = useGetBLogs({
    title: debounceValue,
    category,
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
  });

  // console.log(debounceValue);
  // console.log(category);
  console.log(page);

  return (
    <main className="mx-auto container p-4">
      {/* BlogListHeader */}

      <BlogListHeader
        category={category}
        setCategory={setCategory}
        setSearch={setSearch}
      />

      {/* BlogListBody */}
      <BlogListBody isPending={isPending} blogs={blogs?.data} />

      {/* Pagination */}
      <PaginationSection
        page={page}
        count={blogs?.count || 0}
        limit={LIMIT}
        setPage={setPage}
      />

      <div>
        <PopularCategory />
      </div>
    </main>
  );
};

export default BlogList;
