"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination, EffectCoverflow, Parallax } from "swiper/modules";
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Parallax]);

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
      <div className="container swiper-container  mx-auto h-full">
        <Swiper
          className="swiper-wrapper"
          loop
          slidesPerView={4}
          centeredSlides
          effect="coverflow"
          grabCursor
          parallax
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          speed={2500}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            769: {
              slidesPerView: 4,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide
              key={blog.id}
              className="swiper-slide w-full md:w-[60%] md:max-w-[60%] border-[#27272c] border flex-grow !h-[60%]"
            >
              <div className="rounded-lg shadow-md relative h-full flex">
                <div
                  style={{ backgroundImage: `url(${blog.cover_image})` }}
                  className="bg-contain bg-no-repeat bg-center h-full w-1/2 hidden md:block"
                ></div>
                <div className="py-5 flex flex-col px-4 justify-between">
                  <h3 className="text-2xl text-accent/70 font-semibold">
                    {blog.title}
                  </h3>
                  <div className="flex flex-col justify-between flex-auto h-full">
                    <p className="pt-2 flex-auto text-truncate">{blog.description}</p>
                    <div className="flex justify-between items-end text-accent/60 pt-2">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default Projects;
