import React, { FC, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationSectionProps {
  page: number;
  count: number;
  limit: number;
  setPage: (page: number) => void;
}

const PaginationSection: FC<PaginationSectionProps> = ({
  page,
  count,
  limit,
  setPage,
}) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    const totalPage = Math.ceil(count / limit);

    if (page < totalPage) {
      setPage(page + 1);
    }
  };
  return (
    <section className="mt-4">
      <Pagination>
        <PaginationContent>
          {/* Button Prev */}
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrev}
              className="hover:cursor-pointer"
            />
          </PaginationItem>

          {/* Page */}
          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className="hover:cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default PaginationSection;
