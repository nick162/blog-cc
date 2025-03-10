import { FC } from "react";
import { getBlog } from "../../_api/getBlog";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BlogHeaderProps {
  slug: string;
}
export const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  return (
    <section className="container mx-auto p-4">
      <Badge className="capitalize">{blogs[0].category}</Badge>
      <h1 className="text-4xl font-bold">{blogs[0].title}</h1>
      <p className="font-light text-sm">
        {format(new Date(blogs[0].created), "dd MMM yyyy")} -
        <Link href={`/authors/${blogs[0].user.objectId}`}>
          {blogs[0].user.firstName} {blogs[0].user.lastName}
        </Link>
      </p>
      <div className="relative h-[300px] w-[400px]">
        <Image
          src={blogs[0].image}
          alt=""
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};
