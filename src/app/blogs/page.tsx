"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Blog {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  published_at: string;
  tag_list: string[];
}

function Projects() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogDetails();
  }, []);

  async function getBlogDetails() {
    const url = "https://dev.to/api/articles?username=aryaglekshmi";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const blogs = await response.json();
      setBlogs(blogs);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }

  function formatDate(date: string) {
    return new Date(date).toISOString().slice(0, 10);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-full flex flex-col justify-center py-12 px-c10 xl:px-0"
    >
      <div className="container mx-auto h-full">
        <ul className="flex flex-wrap justify-center items-stretch gap-4">
          {blogs.map((blog) => (
            <li key={blog.id} className="w-full md:w-[45%] md:max-w-[45%] bg-[#27272c] flex-grow">
              <div className="rounded-lg shadow-md relative h-full flex">
                <div
                  style={{ backgroundImage: `url(${blog.cover_image})` }}
                  className="bg-contain bg-no-repeat bg-center h-full w-1/2 hidden md:block"
                ></div>
                <div className="py-5 flex flex-col px-4 justify-between">
                  <h2 className="text-2xl text-accent font-semibold">
                    {blog.title}
                  </h2>
                  <p className="pt-2">{blog.description}</p>
                  <div className="flex justify-between items-end mt-auto text-accent/60 pt-2">
                    {formatDate(blog.published_at)}
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block underline cursor-pointer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Projects;
