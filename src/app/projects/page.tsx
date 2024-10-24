"use client"

import { techStacks } from "@/app/utils/contants";
import { motion } from "framer-motion";
import React from "react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { ISkill } from "../utils/interfaces";


const projects = [
  {
    id: "01",
    title: "BATM - Bifrost API Gateway TLM Migration",
    description:
      "Migrated 80% of Broadcom API Gateway to a custom implementation, enhancing performance and scalability.",
    duration: "Nov 2021 - Mar 2023",
    stack: ["react", "node.js", "java", "javascript", "html", "jira"],
    keyResponsibilities: [
      "Coordinated with teams to gather requirements and deliver solutions.",
      "Analyzed traffic with Looker and Grafana; troubleshot issues.",
      "Managed a remote team of 5 members for effective collaboration.",
      "Used Jira to track project timelines and tasks.",
      "Resolved performance bottlenecks to improve system efficiency.",
    ],
  },
  {
    id: "02",
    title: "Kongsberg - Discovery Viewer & Chat Application",
    description:
      "Maintained a real-time drilling monitoring app and integrated a chat application to enhance communication.",
    duration: "Jul 2020 - Oct 2021",
    stack: [
      "vue.js",
      "angular",
      "typescript",
      "html",
      "css",
      "mssql"
    ],    
    keyResponsibilities: [
      "Maintained the real-time Discovery Viewer app.",
      "Created reusable UI components with Angular.",
      "Resolved 90% of SonarQube bugs for improved code quality.",
      "Maintained chat functionality for communication between wellbores.",
      "Wrote clean code using HTML, CSS, Angular, and TypeScript.",
    ],
  },
  {
    id: "03",
    title: "Data Synchronizer & Data Editor",
    description:
      "Designed a data sync app to transfer data from one source to multiple targets, optimized the user experience.",
    duration: "Feb 2020 - Jun 2020",
    stack: ["node.js", "typescript", "javascript", "html", "css", "mssql"],
    keyResponsibilities: [
      "Developed a data synchronizer for multiple targets.",
      "Created user interfaces with HTML and TypeScript.",
      "Enhanced user experience with target selection pages.",
      "Collaborated with teams to gather requirements.",
      "Ensured data accuracy with unit tests.",
    ],
  },
  {
    id: "04",
    title: "Project IV - DOP Operations Simulator",
    description:
      "Developed a planning and simulation tool for DOP operations, reducing production bugs by 40%.",
    duration: "Feb 2019 - Feb 2020",
    stack: ["vue.js", "typescript", "javascript", "html", "css", "mssql"],
    keyResponsibilities: [
      "Developed an app for planning DOP operations.",
      "Built user interfaces with Vue and integrated functionality.",
      "Performed unit testing and code reviews.",
      "Collaborated with backend teams for integration.",
      "Optimized code to improve system performance.",
    ],
  },
];


function Projects() {
  function getTechSkill(skill: string): ISkill {
    return techStacks.find((stack) => stack.id === skill) ?? ({} as ISkill);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lg:min-h-[80vh] min-h-[70vh] flex flex-col justify-center py-12 px-c10 xl:px-0"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row xl:flex-wrap xl:gap-[30px] relative">
          <div className="w-full h-full flex flex-col corner-borderg relative">
            <Swiper
              loop={true}
              spaceBetween={30}
              modules={[Navigation, Pagination, Mousewheel]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              mousewheel={true}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              style={{ width: "100%" }}
              className="overflow-auto flex items-stretch"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                769: {
                  slidesPerView: 2,
                },
                // 1440: {
                //   slidesPerView: 3, 
                // },
              }}
            >
              {projects.map((project, pInd) => (
                <SwiperSlide
                  key={pInd}
                  className="shadow-lg bg-dark rounded-lg transition-all duration-400 cursor-pointer w-full h-full flex-grow"
                >
                  {/* <div className="flex justify-between items-center flex-col lg:flex-row w-full gap-4"> */}
                    <div className="w-full p-4 h-full">
                      <div className="text-5xl lg:text-7xl text-stroke text-transparent leading-none font-extrabold text-outline">
                        {project.id}
                      </div>
                      <h2 className="font-bold text-xl lg:text-2xl leading-snug text-accent/90 transition-all duration-500 capitalize py-3">
                        {project.title}
                      </h2>
                      <p className="text-white/50 py-2 text-sm italic">
                        {project.duration}
                      </p>
                      <p className="text-white/70 py-3 text-base leading-relaxed">
                        {project.description}
                      </p>
                      <ul className="flex gap-6 py-6 flex-wrap">
                        {project.stack.map((item, iInd) => (
                          <li
                            key={iInd}
                            className="text-xl text-accent transition-transform duration-300 hover:scale-110"
                          >
                            <Image
                              src={getTechSkill(item).icon}
                              alt={getTechSkill(item).name}
                              width={20}
                              height={20}
                              className="h-12 w-12 object-contain"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination flex justify-center items-center gap-2 flex-none !bottom-2 xl:mb-[-8rem] lg-[-6rem] mb-[-2rem]"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}



export default Projects;