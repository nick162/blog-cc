// "use client";

// import { Input } from "@/components/ui/input";
// import BlogCard from "../_components/BlogCard";
// import Blog from "@/types/blog";
// import { useState } from "react";
// import useGetBLogs from "@/hooks/api/blog/useGetBLogs";
// import { useDebounceValue } from "usehooks-ts";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// // Data dummy untuk tes

// const LIMIT = 4;
// const BlogList = () => {
//   const [page, setPage] = useState<number>(1);
//   const [category, setCategory] = useState<string>("all");
//   const [search, setSearch] = useState<string>("");

//   const [debounceValue] = useDebounceValue(search, 700);
//   const { data: blogs, isPending } = useGetBLogs({
//     title: debounceValue,
//     category,
//     limit: LIMIT,
//     offset: (page - 1) * LIMIT,
//   });

//   const handlePrev = () => {
//     if (page > 1) setPage(page - 1);
//   };
//   const handleNext = () => {
//     const totalPage = Math.ceil(blogs?.count || 0 / LIMIT);

//     if (page < totalPage) {
//       setPage(page + 1);
//     }
//   };

//   return (
//     <main className="mx-auto container p-4">
//       {/* BlogListHeader */}
//       <section className="max-w-[40%] mt-16 flex">
//         <Input
//           placeholder="Search"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <Select value={category} onValueChange={setCategory}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All</SelectItem>
//             <SelectItem value="food">Food</SelectItem>
//             <SelectItem value="technology">Technology</SelectItem>
//             <SelectItem value="health">Health</SelectItem>
//             <SelectItem value="politic">Politic</SelectItem>
//           </SelectContent>
//         </Select>
//       </section>

//       {/* BlogListBody */}
//       <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
//         {isPending && (
//           <div className="flex justify-center items-center h-[50vh] col-span-4">
//             <p className="animate-spin">Loading ....</p>
//           </div>
//         )}
//         {blogs?.data.map((blog) => (
//           <BlogCard key={blog.objectId} blog={blog} />
//         ))}
//       </section>

//       <section className="mt-4">
//         <Pagination>
//           <PaginationContent>
//             {/* Button Prev */}
//             <PaginationItem>
//               <PaginationPrevious onClick={handlePrev} />
//             </PaginationItem>

//             {/* Page */}
//             <PaginationItem>
//               <PaginationLink>{page}</PaginationLink>
//             </PaginationItem>

//             {/* Next */}
//             <PaginationItem>
//               <PaginationNext onClick={handleNext} />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </section>
//     </main>
//   );
// };

// export default BlogList;
