import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MobileContext } from "../utils/useIsMobile";

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
        {
          icon: `${iconUrl}javascript/javascript-plain.svg`,
          name: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: `${iconUrl}angularjs/angularjs-original.svg`,
          name: "Angular",
          href: "https://angular.io/",
        },
        {
          icon: `${iconUrl}vuejs/vuejs-original-wordmark.svg`,
          name: "Vue.js",
          href: "https://vuejs.org/",
        },
        {
          icon: `${iconUrl}react/react-original-wordmark.svg`,
          name: "React",
          href: "https://reactjs.org/",
        },
        {
          icon: `${iconUrl}typescript/typescript-plain.svg`,
          name: "TypeScript",
          href: "https://www.typescriptlang.org/",
        },
        {
          icon: `${iconUrl}html5/html5-plain-wordmark.svg`,
          name: "HTML",
          href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          icon: `${iconUrl}css3/css3-plain-wordmark.svg`,
          name: "CSS",
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          icon: `${iconUrl}tailwindcss/tailwindcss-original-wordmark.svg`,
          name: "Tailwind CSS",
          href: "https://tailwindcss.com/",
        },
        {
          icon: `${iconUrl}bootstrap/bootstrap-original-wordmark.svg`,
          name: "Bootstrap",
          href: "https://getbootstrap.com/",
        }
      ],
    },
    {
      category: "Backend",
      items: [
        {
          icon: `${iconUrl}nodejs/nodejs-plain-wordmark.svg`,
          name: "Node.js",
          href: "https://nodejs.org/",
        },
        {
          icon: `${iconUrl}mongodb/mongodb-plain-wordmark.svg`,
          name: "MongoDB",
          href: "https://www.mongodb.com/",
        },
        {
          icon: `${iconUrl}postgresql/postgresql-plain-wordmark.svg`,
          name: "PostgreSQL",
          href: "https://www.postgresql.org/",
        },
        {
            icon: `${iconUrl}microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg`,
            name: "MSSQL",
            href: "https://www.microsoft.com/en-us/sql-server",
          },
        {
          icon: `${iconUrl}java/java-plain-wordmark.svg`,
          name: "Java",
          href: "https://www.java.com/",
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          icon: `${iconUrl}git/git-plain-wordmark.svg`,
          name: "Git",
          href: "https://git-scm.com/",
        },
        {
          icon: `${iconUrl}jira/jira-original-wordmark.svg`,
          name: "Jira",
          href: "https://www.atlassian.com/software/jira",
        },
        {
          icon: `${iconUrl}webpack/webpack-plain-wordmark.svg`,
          name: "Webpack",
          href: "https://webpack.js.org/",
        },
        {
          icon: `${iconUrl}vitejs/vitejs-original.svg`,
          name: "Vite",
          href: "https://vitejs.dev/",
        },
        {
          icon: `${iconUrl}docker/docker-plain-wordmark.svg`,
          name: "Docker",
          href: "https://www.docker.com/",
        },
      ],
    },
  ],
};

export const skillCardVariants = {
  hidden: { opacity: 0, x: 500 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
function Skills() {
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

      <div className="overflow-y-auto pt-10 flex flex-col gap-20 justify-between">
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
                }}
                speed={5000}
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
                      style={{ backgroundImage: `url(${item.icon})` }}
                      onClick={()=>window.open(item.href)}
                      title={item.href}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute top-0 z-[-1] flex justify-center items-center font-semibold text-accent pb-4 text-5xl h-full w-full opacity-20 tracking-[1rem]">
              {category.category}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
