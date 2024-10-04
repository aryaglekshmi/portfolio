import { motion } from "framer-motion";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { cardVariants } from "../utils/contants";

const education = {
  title: "Education",
  icon: <FaGraduationCap color="#00ff99" />,
  description:
    "From the lecture halls to the coding labs, my academic journey has been a blend of theory and hands-on experience. Here's a glimpse into my educational adventures:",
  items: [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution:
        "University College of Engineering, Kariavattom, Kerala, India",
      duration: "2014 - 2018",
    },
  ],
};
function Education() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-2 text-left"
    >
      <div className="text-4xl font-bold flex justify-betdween">
        {education.icon} <span className="pl-3 pb-3">{education.title}</span>
      </div>
      <p className="text-base">{education.description}</p>

      <div className="overflow-y-auto pt-10">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {education.items.map((exp, ind) => {
            return (
              <motion.li
                key={ind}
                variants={cardVariants}
                className="relative border border-accent/10 p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <div className="relative z-10 font-bold">
                  <span className="text-accent">{exp.duration}</span>
                  <h3 className="text-xl text-left text-white">{exp.degree}</h3>
                  <span className="text-white">
                    <span className="h-[6px] w-[6px] inline-block bg-accent rounded-full pr-2"></span>{" "}
                    {exp.institution}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default Education;
