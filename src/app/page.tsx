"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { MobileContext } from "@/app/utils/useIsMobile";
import { FiDownload } from "react-icons/fi";
import Photo from "@/app/components/photo";
import Status from "@/app/components/status";

const textVariant = {
  initial: {
    x: -500,
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse" as const, // Explicitly type the repeatType
    },
  },
};

export default function Home() {
  const isMobile = useContext(MobileContext);
  return (
    <div className="h-full relative flex flex-col md:flex-row items-center md:items-end">
      <div className="flex justify-end items-end order-1 md:order-none md:w-1/2 md:h-full p-4">
        <Photo />
      </div>
      <div className="h-full flex flex-col mx-auto container order-2 md:order-none justify-center">
        <div
          className={`flex justify-between flex-1 w-full flex-col md:flex-row z-10`}
        >
          <motion.div
            className="mx-auto container flex justify-center flex-col h-full gap-y-6 order-2 md:order-none items-center md:items-start"
            variants={textVariant}
            initial="initial"
            animate="animate"
          >
            <motion.h3
              className={`tracking-[.2em] ${
                isMobile ? "text-xl" : "text-3xl"
              } text-white`}
              variants={textVariant}
            >
              Software Developer
            </motion.h3>
            <motion.h1
              className={`font-bold text-3xl tracking-[.15em] lg:text-5xl md:text-4xl md:tracking-[.25em] text-accent `}
              variants={textVariant}
            >
              ARYALEKSHMI G
            </motion.h1>
            <motion.p
              className={` ${isMobile ? "text-lg" : "text-3xl"} italic`}
              variants={textVariant}
            >
              Always learning and evolving.
            </motion.p>
            <div className="flex">
              <motion.a
                download
                href="/Resume.pdf"
                variants={textVariant}
                type="button"
                className="text-black text-base max-w-[200px] bg-accent/80 focus:outline-none font-medium rounded-full py-3 px-5 text-center flex justify-between mr-4 cursor-pointer"
              >
                Download CV
                <FiDownload size={20} className="ml-2" />
              </motion.a>
            </div>
            {/* <motion.img src="/scroll.png" alt="Scroll" className="h-10 w-10" variants={textVariant} animate="scrollButton" /> */}
          </motion.div>
        </div>
        <div className="pt-4 pb-8">
          <Status />
        </div>
      </div>
      <motion.div
        className={`absolute bottom-0 whitespace-nowrap text-purple-50 opacity-5 font-bold w-screen ${
          isMobile ? "text-[20vh]" : "text-[30vh]"
        }`}
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        Code with a Smile
      </motion.div>
    </div>
  );
}
