"use client"

import { motion } from "framer-motion";
import React from "react";
import { FaUser } from "react-icons/fa";
import { cardVariants } from "../utils/contants";
const about = {
  title: "About me",
  icon: <FaUser color="#00ff99" />,
  description:
    "Curious to know more? You're in the right place! Let's dive into the details and get to know each other better!",
  items: [
    {
      key: "Name",
      value: "Aryalekshmi G",
    },
    {
      key: "Phone(India)",
      value: "(+91)8086924467",
    },
    {
      key: "Phone(UAE)",
      value: "(+971)556057887",
    },
    {
      key: "Experience",
      value: "5+ Years",
    },
    {
      key: "Nationality",
      value: "Indian",
    },
    {
      key: "Email",
      value: "aryaglekshmi@gmail.com",
    },
    {
      key: "Address",
      value: "Kollam, Kerala, India",
    },
    {
      key: "Current Location",
      value: "Dubai, UAE",
    },
    {
      key: "Languages",
      value: "English, Malayalam, Hindi",
    },
  ],
};

function AboutMe() {
    return (
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 text-left"
        >
          <div className="text-4xl font-bold flex">
            {about.icon} <span className="pl-3 pb-3">{about.title}</span>
          </div>
          <p className="text-base">{about.description}</p>
    
          <div className="overflow-y-auto pt-10">
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-2">
              {about.items.map((exp, ind) => {
                return (
                  <motion.li
                    key={ind}
                    variants={cardVariants}
                    className="flex items-centedr justify-cdenter lg:justify-start gap-4"
                  >
                    <span className="text-white/60">{exp.key}</span>
                    <span className="text-lg text-white">{exp.value}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      );
}

export default AboutMe;
