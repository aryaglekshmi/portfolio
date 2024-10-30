"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = {
  title: "Experience",
  icon: <FaBriefcase color="#00ff99" />,
  description:
    "From coding in pajamas to debugging in suits, my journey has been a rollercoaster of epic projects and caffeine-fueled nights. Here's a peek into my professional escapades:",
  items: [
    {
      role: "Software Developer",
      company: "Pinnacle Infotech Technologies FZ-LLC",
      duration: "Jun 2024 - Present",
      logo: "/pinnacle.png",
      duties: [
        "Built web apps with Vue.js and Node.js.",
        "Improved UX with responsive designs.",
        "Integrated third-party APIs.",
        "Performed testing and debugging.",
        "Enhanced security measures.",
        "Kept up with tech trends.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Nathan Digital, Dubai, UAE",
      duration: "Jul 2023 - Jun 2024",
      logo: "/nathan.jfif",
      duties: [
        "Developed full-stack web applications.",
        "Created responsive user interfaces.",
        "Connected external APIs.",
        "Executed thorough testing.",
        "Implemented robust security protocols.",
        "Explored new technologies.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Belong Interactive, Dubai, UAE (Freelance)",
      logo: "/belong-interactive.png",
      duration: "Jun 2023 - Jul 2023",
      duties: [
        "Converted designs into web interfaces.",
        "Optimized frontend performance.",
        "Worked with UI/UX designers.",
        "Ensured accessibility standards.",
        "Maintained cross-browser compatibility.",
      ],
    },
    {
      role: "Software Developer",
      company: "Tata Consultancy Services, Kerala, India",
      logo: "/tcs.png",
      duration: "Nov 2021 - Mar 2023",
      duties: [
        "Managed enterprise systems.",
        "Automated routine tasks.",
        "Upgraded infrastructure.",
        "Provided technical support.",
        "Led system migrations.",
      ],
    },
    {
      role: "Software Developer",
      company: "ShellSquare Softwares LLP, Kerala, India",
      logo: "/shellsquare.jfif",
      duration: "Feb 2019 - Oct 2021",
      duties: [
        "Developed reusable code with Angular and Vue.js.",
        "Conducted unit testing and debugging.",
        "Integrated RESTful APIs.",
        "Ensured cross-device functionality.",
        "Participated in code reviews.",
      ],
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adjust the delay between each child animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Experience() {
  return (
    <motion.div
      className="flex flex-col gap-2 text-left h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-4xl font-bold flex">
        {experience.icon} <span className="pl-3 pb-3">{experience.title}</span>
      </div>
      <p className="text-base">{experience.description}</p>

      <div className="overflow-y-xauto my-8 flex-auto relative flex justify-center items-center">
        <motion.ul
          className="flex flex-col gap-8 justify-center items-center timeline w-full"
        >
          {experience.items.map((exp, ind) => (
            <motion.li
              key={ind}
              variants={cardVariants}
              className="relative w-full rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 shadow-lg p-4 text-white"
            >
              <div
                className={`flex w-full gap-y-2 gap-x-10 ${
                  ind % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex flex-col w-1/2 ${
                    ind % 2 === 0 ? "items-end" : "items-start"
                  }`}
                >
                  <span className="">{exp.duration}</span>
                  <span className="text-accent font-bold text-base">{exp.role}</span>
                  <span className="">{exp.company}</span>
                </div>
                <div
                  className={`flex w-1/2 ${
                    ind % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <ul className="list-disc ml-3">
                    {exp.duties.map((duty, dInd) => (
                      <li key={dInd}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Experience;
