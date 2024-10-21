import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MobileContext } from "../utils/useIsMobile";
import { ISkill, techStacks } from "../utils/contants";

const iconUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const skills = {
  title: "Skills",
  icon: <FaTools color="#00ff99" />,
  description:
    "From crafting pixel-perfect designs to building robust backend systems, my skill set is as diverse as it is dynamic. Here's a snapshot of the tools and technologies I wield with finesse:",
  categories: [
    {
      category: "Frontend",
      items: [
        "javascript",
        "angular",
        "vue.js",
        "react",
        "typescript",
        "html",
        "css",
        "tailwind css",
        "bootstrap"
      ],
    },
    {
      category: "Backend",
      items: [
        "node.js",
        "mongodb",
        "postgresql",
        "mssql",
        "java"
      ],
    },
    {
      category: "Tools",
      items: [
        "git",
        "jira",
        "webpack",
        "vite",
        "docker"
      ],
    },
  ],
};

export const skillCardVariants = {
  hidden: { opacity: 0, x: 500 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
function Skills() {

  function getTechSkill(skill: string) {
    return techStacks.find((stack) => stack.id === skill) ?? {} as ISkill;
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-2 text-left justify-between"
    >
      <div className="text-4xl font-bold flex">
        {skills.icon} <span className="pl-3 pb-3">{skills.title}</span>
      </div>
      <p className="text-base">{skills.description}</p>

      <div className="overflow-y-auto pt-10 flex flex-col gap-10 md:gap-20 justify-between">
        {skills.categories.map((category, index) => (
          <div key={index} className="relative">
            <div>
              <Swiper
                className="flex flex-wrap"
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                speed={3000}
                modules={[Autoplay]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  769: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView:
                      category.items.length > 4 ? 4 : category.items.length - 1,
                  },
                }}
              >
                {category.items.map((item, ind) => (
                  <SwiperSlide
                    key={ind}
                    className="relative flex flex-col justify-center items-center lg:items-start gap-5"
                  >
                    <motion.div
                      variants={skillCardVariants}
                      className="w-24 p-4 h-24 bg-cover bg-center cursor-pointer"
                      style={{ backgroundImage: `url(${getTechSkill(item).icon})` }}
                      onClick={()=>window.open(getTechSkill(item).href)}
                      title={getTechSkill(item).href}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute top-0 z-[-1] flex justify-center items-center font-semibold text-accent pb-4 text-5xl h-full w-full opacity-10 tracking-[1rem]">
              {category.category}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
