"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const AboutMetadata: Metadata = {
  title: "About StarbLogIndo - Popular Flower Blog",
  description: "Discover the latest updates and articles",
  keywords: ["Indo", "popular blogs", "person", "significancnt"],
};
const About = () => {
  const [authors, setAuthors] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          "https://popularflower-us.backendless.app/api/data/Users"
        );
        setAuthors(response.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-yellow-400">
          About StarbLogIndo
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          StarbLogIndo is committed to delivering engaging content across
          diverse topics like Food, Sport, Health, and Technology. Our mission
          is to provide valuable and insightful articles to our audience.
        </p>
      </div>

      <section className="max-w-5xl mx-auto mt-10">
        <h2 className="text-4xl font-semibold mb-6 text-yellow-300 border-b-2 border-gray-500 pb-2">
          Meet Our Authors
        </h2>
        {loading ? (
          <p className="text-gray-300 text-center">Loading authors...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <Link key={index} href={`/authors/${author.objectId}`}>
                <div
                  key={author.objectId}
                  className="bg-gray-800 p-6 rounded-lg shadow-xl text-center"
                >
                  <Image
                    src={author.profile || "https://via.placeholder.com/150"}
                    alt={`${author.firstName} ${author.lastName}`}
                    className="rounded-full mx-auto mb-4 border-4 border-yellow-400"
                    width={50}
                    height={50}
                  />
                  <h3 className="text-2xl font-bold text-yellow-300">
                    {author.firstName} {author.lastName}
                  </h3>
                  <p className="text-gray-400">{author.title}</p>
                  <p className="text-sm text-gray-300 mt-2">
                    {author.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-4xl font-semibold mb-6 text-yellow-300 border-b-2 border-gray-500 pb-2">
          Our Mission & Vision
        </h2>
        <p className="text-gray-300 text-lg">
          Our vision is to become a leading platform for insightful and diverse
          content, fostering a community of knowledge-sharing and discussion. We
          uphold values such as Integrity, Accuracy, Creativity, and Community
          Engagement.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-4xl font-semibold mb-6 text-yellow-300 border-b-2 border-gray-500 pb-2">
          Contact Us
        </h2>
        <p className="text-gray-300 text-lg">Email: contact@starblogindo.com</p>
        <p className="text-gray-300 text-lg">Phone: +62 812 3456 7890</p>
        <div className="flex gap-6 mt-4 text-lg">
          <a
            href="https://facebook.com/starblogindo"
            className="text-blue-400 hover:text-blue-300"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/starblogindo"
            className="text-blue-400 hover:text-blue-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/starblogindo"
            className="text-blue-400 hover:text-blue-300"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/company/starblogindo"
            className="text-blue-400 hover:text-blue-300"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
