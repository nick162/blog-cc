import { User } from "@/types/user";
import axios from "axios";
import Image from "next/image";
import { cache } from "react";

const AboutAuthorDetail = async ({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) => {
  const objectId = (await params).objectId;

  try {
    const response = await axios.get(
      `https://popularflower-us.backendless.app/api/data/Users/${objectId}`
    );
    const author: User = response.data;

    if (!author) {
      return (
        <main className="flex justify-center items-center min-h-screen text-red-500">
          Author not found
        </main>
      );
    }

    return (
      <main className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
            <Image
              src={author.profile || "/default-avatar.png"}
              alt={`${author.firstName} ${author.lastName}`}
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          {/* Nama */}
          <h3 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
            {author.firstName} {author.lastName}
          </h3>

          {/* Deskripsi */}
          <p className="text-lg md:text-xl text-gray-600 mt-3 px-4 md:px-12">
            {author.description || "No description available."}
          </p>

          {/* Info Lainnya */}
          <div className="mt-6 text-lg md:text-xl text-gray-700 space-y-2">
            <p className="font-semibold">
              📧 Email:{" "}
              <span className="font-normal text-gray-600">{author.email}</span>
            </p>
            <p className="font-semibold">
              📝 Published Articles:{" "}
              <span className="font-normal text-gray-600">
                {author.publish_article}
              </span>
            </p>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching author details:", error);
    return (
      <main className="flex justify-center items-center min-h-screen text-red-500">
        Error loading author details
      </main>
    );
  }
};
export default AboutAuthorDetail;
