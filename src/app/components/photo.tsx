import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:0}} animate={{
        opacity:1,
        transition: { delay:1.5,duration:0.4,ease:'easeIn'}
      }}>
        <motion.div className="h-[298px] w-[298px] xl:h-[498px] xl:w-[298px] mix-blend-lighten" animate={{
        opacity:1,
        transition: { delay:2,duration:0.4,ease:'easeInOut'}
      }}>
          {/* <Image
            src="/arya.png"
            priority
            quality={100}
            fill
            alt="Image"
            className="object-contain"
          /> */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photo;
