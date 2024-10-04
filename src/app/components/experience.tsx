import React from "react";
import { cardVariants } from "../utils/contants";
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
        "Developed and maintained web applications using Vue.js and Node.js.",
        "Enhanced user experiences with responsive designs.",
        "Integrated external APIs like a pro.",
        "Conducted thorough testing and debugging (and survived!).",
        "Implemented security measures to keep the bad guys out.",
        "Stayed updated with the latest tech trends (because who doesn't love shiny new tools?).",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Nathan Digital, Dubai, UAE",
      duration: "Jul 2023 - Jun 2024",
      logo: "/nathan.jfif",
      duties: [
        "Developed and maintained web applications using Vue.js and Node.js.",
        "Enhanced user experiences with responsive designs.",
        "Integrated external APIs like a pro.",
        "Conducted thorough testing and debugging (and survived!).",
        "Implemented security measures to keep the bad guys out.",
        "Stayed updated with the latest tech trends (because who doesn't love shiny new tools?).",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Belong Interactive, Dubai, UAE",
      logo: "/belong-interactive.png",
      duration: "Jun 2023 - Jul 2023 (Freelance)",
      duties: [
        "Translated design mockups into interactive web interfaces.",
        "Optimized frontend code for performance (because speed matters!).",
        "Collaborated with UI/UX designers to make things pretty.",
        "Implemented accessibility standards (because everyone deserves a great web experience).",
        "Ensured cross-browser compatibility (even for that one person still using IE).",
      ],
    },
    {
      role: "Software Developer",
      company: "Tata Consultancy Services, Kerala, India",
      logo: "/tcs.png",
      duration: "Nov 2021 - Mar 2023",
      duties: [
        "Administered and maintained enterprise-level systems.",
        "Automated tasks to save time (and sanity).",
        "Collaborated across teams for infrastructure upgrades.",
        "Provided technical support (and lots of it).",
        "Led successful migration projects (like a boss).",
      ],
    },
    {
      role: "Software Developer",
      company: "ShellSquare Softwares LLP, Kerala, India",
      logo: "/shellsquare.jfif",
      duration: "Feb 2019 - Oct 2021",
      duties: [
        "Developed reusable and scalable code using Angular and Vue.js.",
        "Conducted comprehensive unit testing and debugging.",
        "Collaborated with backend developers to integrate RESTful APIs.",
        "Ensured cross-device and cross-browser functionality.",
        "Actively participated in code reviews (and survived the feedback).",
      ],
    },
  ],
};

function Experience() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-2 text-left"
    >
      <div className="text-4xl font-bold flex">
        {experience.icon} <span className="pl-3 pb-3">{experience.title}</span>
      </div>
      <p className="text-base">{experience.description}</p>

      <div className="overflow-y-auto pt-10">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {experience.items.map((exp, ind) => {
            return (
              <motion.li
                key={ind}
                variants={cardVariants}
                className="relative border border-accent/10 p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <div
                  className="absolute top-0 bottom-0 right-0 w-full opacity-10 bg-cover bg-center z-[-1]"
                  style={{ backgroundImage: `url(${exp.logo})` }}
                ></div>
                <div className="relative z-10 font-bold">
                  <span className="text-accent">{exp.duration}</span>
                  <h3 className="text-xl text-left text-white">{exp.role}</h3>
                  <span className="text-white">
                    <span className="h-[6px] w-[6px] inline-block bg-accent rounded-full pr-2"></span>{" "}
                    {exp.company}
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

export default Experience;
