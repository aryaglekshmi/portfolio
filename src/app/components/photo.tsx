"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


function Photo() {

  return (
    <div className="w-full h-full relative mb-5 lg:mb-0 bottom-0 z-20">
      <motion.div
        initial={{ opacity: 0 }}
        className="h-full"
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          className="mix-blend-lighten h-full flex items-end w-full"
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <Image
            src="/arya.png"
            priority
            quality={100}
            fill
            height={global?.window ? window.innerHeight/2 : 500}
            width={global?.window ? window.innerWidth/2 : 500}
            alt="Image"
            className="object-contain filter brightness-75 hover:brightness-100"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photo;
