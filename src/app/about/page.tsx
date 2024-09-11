"use client";
import React from "react";
import { motion } from 'framer-motion';

function About() {
  return (
    <div>
    <motion.div 
      className="h-full p-4 bg-gradient-to-r flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-4xl font-bold pb-6 text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        About Me
      </motion.h1>
      <motion.p 
        className="text-base mb-6 text-center max-w-[70%] text-primary"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Hey there! I’m <span className="font-bold">Aryalekshmi G</span>, a passionate <span className="font-bold">Software Developer</span> with over <span className="font-bold">5 years of experience</span> in delivering tech solutions across various industries.
        <br/>
       I specialize in <span className="font-bold">Front End Development</span>, with <span className="font-bold">Angular</span>, <span className="font-bold">Vue JS</span>, <span className="font-bold">Java</span>, and <span className="font-bold">TypeScript</span> being my superpowers. 💪
        <br />
        While Front End is my strong suit, I’ve recently started diving into the world of <span className="font-bold">Backend development</span>. 
         I’m always eager to adapt to new technologies and love exploring.
        <br />   <br />
        My long-term goal? To become a <span className="font-bold">Full Stack Developer</span> extraordinaire! 🌟
      </motion.p>

      <button className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
    Resume
</button>
    </motion.div>
    </div>
  );
}

export default About;
