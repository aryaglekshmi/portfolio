import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialIcons = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/arya_g_g/profilecard/?igsh=MTFsdjVlcmY2dnBibQ==",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/aryalekshmi-g-developer",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    path: "https://wa.me/971556057887",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    path: "https://github.com/aryaglekshmi",
  },
];

interface SocialsProps {
  column?: boolean;
}

const textVariant = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Socials({ column }: SocialsProps) {
  return (
    // <div className="fixed right-0 bottom-32 flex flex-col justify-between items-center px-5">
    //   <div className="flex-1 flex items-end">
    <motion.div
      className={`flex items-center gap-4 mx-2 ${column ? "flex-col" : ""}`}
    >
      {socialIcons.map((social, ind) => {
        return (
          <motion.a
          target="_blank"
          rel="noopener noreferrer"
            key={ind}
            href={social.path}
            variants={textVariant}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-10 h-10 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {social.icon}
          </motion.a>
        );
      })}
    </motion.div>
    //   </div>
    // </div>
  );
}

export default Socials;
