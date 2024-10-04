import { motion } from "framer-motion";
import React from "react";

function Stairs() {
  const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  const reverseInd = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };

  return (
    <div className="relative h-full w-full">
      {[...Array(6)].map((_, ind) => (
        <motion.div
          key={ind}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseInd(ind) * 0.1,
          }}
          className="h-full w-full bg-white absolute"
        />
      ))}
    </div>
  );
}

export default Stairs;
