import React from 'react';

function About() {
  return (
    <div className="h-full p-4 bg-transparent flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hello! I'm [Your Name], a passionate full-stack developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the browser.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I have experience working with a variety of technologies including React, Node.js, Express, MongoDB, and more. My goal is to build scalable and efficient applications that provide an excellent user experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. I'm always eager to learn and take on new challenges.
        </p>
        <p className="text-lg text-gray-700">
          Feel free to reach out if you'd like to collaborate on a project or just want to chat about tech!
        </p>
      </div>
  );
}

export default About;
