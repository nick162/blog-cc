"use client";

import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-900 text-white flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/jb-bg.avif"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
        priority
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to STARBLOGINDO
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the latest news and insights on technology, health, food, and
          sports.
        </p>
        <a
          href="/blog"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
