import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons'


const socialIcons = [
  {
    name: "Instagram",
    icon: "/instagram.svg",
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
  },
  {
    name: "WhatsApp",
    icon: "/whatsapp.svg",
  },
  {
    name: "Github",
    icon: "/github.svg",
  },
];

function Socials() {
  return (
    <div className="fixed left-0 bottom-32 flex flex-col h-full justify-between items-center px-5">
        <div className="flex-1 flex items-end">
         
       
    <div className="flex items-center flex-col space-y-4">
      <SocialIcon network="github" />
      <SocialIcon network="instagram" />
      <SocialIcon network="linkedin" />
      <SocialIcon network="whatsapp" />

      {/* {socialIcons.map((social, i) => (
        <motion.div
          key={i}
          className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 p-2 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={32}
            height={32}
            className="text-white"
          />
        </motion.div>
      ))} */}
    </div>
    </div>
    </div>
  );
}

export default Socials;
