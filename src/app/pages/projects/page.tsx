import { ISkill, techStacks } from "@/app/utils/contants";
import { motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";
import { A11y, Autoplay, EffectFlip, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


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
      "javascript",
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
      className="lg:min-h-[80vh] min-h-[70vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:flex-wrap xl:gap-[30px] relative">
          <div className="w-full flex flex-col corner-borderg">
            <Swiper
              loop={true}
              slidesPerView={1}
              modules={[Navigation, Pagination, Mousewheel]} // Add Pagination module
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // navigation
              mousewheel={true}
              pagination={{
                el: ".swiper-pagination", // Specify the pagination element
                clickable: true, // Make pagination clickable
                renderBullet: (index, className) => {
                  return `<span class="${className} swiper-custom-bullet">${
                    index + 1
                  }</span>`;
                },
              }}
              style={{ height: "100%", width: "100%" }} // Ensure proper sizing
            >
              {projects.map((project, pInd) => (
                <SwiperSlide
                  key={pInd}
                  className="shadow-lg bg-dark rounded-lg  transition-all duration-400 cursor-pointer"
                >
                  <div className="flex justify-between items-center flex-col lg:flex-row w-full gap-4">
                    <div className="w-full lg:w-1/2">
                      {/* Project ID */}
                      <div className="text-5xl lg:text-7xl text-stroke text-transparent leading-none font-extrabold text-outline">
                        {project.id}
                      </div>

                      {/* Project Title */}
                      <h2 className="font-bold text-xl lg:text-2xl leading-snug text-accent/90 transition-all duration-500 capitalize py-3">
                        {project.title}
                      </h2>

                      {/* Project Duration */}
                      <p className="text-white/50 py-2 text-sm italic">
                        {project.duration}
                      </p>

                      {/* Project Description */}
                      <p className="text-white/70 py-3 text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stack (e.g., Vue, HTML, JavaScript) */}
                      <ul className="flex gap-6 pt-6 flex-wrap">
                        {project.stack.map((item, iInd) => (
                          <li
                            key={iInd}
                            className="text-xl text-accent transition-transform duration-300 hover:scale-110"
                          >
                            <img
                              src={getTechSkill(item).icon}
                              alt={getTechSkill(item).name}
                              className="h-12 w-12 object-contain"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-dashed lg:h-96 border-accent/60 lg:mx-4 w-full lg:w-0"></div>

                    {/* Key Responsibilities */}
                    <ul className="text-white/70 text-base leading-relaxed space-y-2 w-full lg:w-1/2">
                      {project.keyResponsibilities.map(
                        (responsibility, rInd) => (
                          <li key={rInd} className="w-full">* {responsibility}</li>
                        )
                      )}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination flex justify-center items-center gap-2"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


export default Projects;