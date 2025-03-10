import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface BlogListHeaderProps {
  category: string;
  setCategory: (value: string) => void;
  setSearch: (value: string) => void;
}
const BlogListHeader: FC<BlogListHeaderProps> = ({
  category,
  setCategory,
  setSearch,
}) => {
  return (
    <section className="md:max-w-[40%] w-[100%] mt-16 flex gap-6">
      <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="technology">Technology</SelectItem>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="politic">Politic</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default BlogListHeader;
