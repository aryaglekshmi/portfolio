"use client";
import React, { useState } from "react";
import Skills from "@/app/components/skills";
import Education from "@/app/components/education";
import Experience from "@/app/components/experience";
import AboutMe from "@/app/components/aboutMe";


const tabs = [
  { text: "Career Tales", value: "experience" },
  { text: "Learning Path", value: "education" },
  { text: "My Toolkit", value: "skills" },
  { text: "Get to Know Me", value: "about" },
];

function About() {
  const [selected, setSelected] = useState(tabs[0].value);

  return (
    <div
      className={`flex pt-10 gap-8 container mx-auto h-full md:flex-row flex-col`}
    >
      <div className={`py-10 w-full md:w-[40%]`}>
        {tabs.map((tab, ind) => {
          return (
            <div
              key={ind}
              onClick={() => setSelected(tab.value)}
              className={`${
                selected === tab.value
                  ? "bg-accent text-black font-medium"
                  : "bg-slate-600 text-white"
              } 
                cursor-pointer text-base rounded text-center p-2 hover:bg-accent-hover hover:text-black my-2`}
            >
              {tab.text}
            </div>
          );
        })}
      </div>

      <div className={`py-10 w-full md:w-[60%]`}>
        {selected === "experience" ? (
          <Experience />
        ) : selected === "education" ? (
          <Education />
        ) : selected === "skills" ? (
          <Skills/>
        ) : selected === "about" ? (
          <AboutMe/>
        ):''}
      </div>
    </div>
  );
}

export default About;
