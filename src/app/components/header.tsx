"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { routes } from "../utils/store"; // Adjust the path as needed
import { MobileContext } from "../utils/useIsMobile";
import { PathContext } from "../utils/PathContext";

function Header() {

  const isMobile = useContext(MobileContext);
  const path = useContext(PathContext);

  return (
    <div className="fixed w-full top-0 py-4 text-base px-20 flex-none shadow-sm z-10 bg-primary">
      
      <div className="flex justify-between items-center mx-auto container ">
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-xl"
          >
            ARYA<span className="text-accent">_</span>GG
          </motion.span>
        </div>
        {
        !isMobile &&  
        <div className="flex-grow justify-end flex items-center">
          <ul className="flex">
            {routes.map((route) => (
              <li
                key={route.href}
                className={`mx-4 ${
                  ((!path && route.href === 'home') || path === "#" + route.href) ? "border-accent border-b text-accent" : ""
                }`}
              >
                <motion.a
                  href={`#${route.href}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {route.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
}
      </div>
    </div>
  );
}

export default Header;
