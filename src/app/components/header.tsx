"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { routes } from "../utils/store"; // Adjust the path as needed
import { MobileContext } from "../utils/useIsMobile";
import { usePathname } from "next/navigation";

function Header() {

  const isMobile = useContext(MobileContext);
  const path = usePathname();
 
  return (
    <div className="fixed w-full top-0 md:py-6 py-4 text-base px-10 md:px-20 flex-none bg-[#0c0c1d] shadow-lg z-30">
      
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

        <div className="flex-grow justify-end flex items-center">
          <ul className="flex">
            {routes.map((route) => (
              <li
                key={route.href}
                className={`mx-4 pb-2 ${
                  ((!path && route.href === 'home') || path === "/" + route.href) ? "border-accent border-b text-accent" : ""
                }`}
              >
                <motion.a
                  href={`${route.href}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-between items-center"
                >
                  <route.icon size={20} title={route.label}/> 
               {
                !isMobile && <span className="pl-2"> {route.label}</span>
               }
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Header;
