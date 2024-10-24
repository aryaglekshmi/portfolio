"use client";
import React, { useContext } from "react";
import Socials from "./socials";
import { MobileContext } from "../utils/useIsMobile";

function RightSideBar() {
  const isMobile = useContext(MobileContext);

  return (
    <div className="fixed right-1 flex flex-col justify-between items-center h-full p-2">
      {/* {isMobile && (
        <motion.ul
          variants={{
            hide: {
              y: "25%",
              opacity: 0,
            },
            show: {
              y: "0%",
              opacity: 1,
            },
          }}
          className="list-none space-y-6 flex flex-col gap-y-8 items-center"
        >
          {routes.map((route) => (
            <li
              key={route.href}
              style={{ transform: "rotate(-90deg)" }}
              className={`  ${
                (!path && route.href === "home") || path === "#" + route.href
                  ? "border-accent border-b text-accent"
                  : ""
              }`}
            >
              <motion.a
                href={`#${route.href}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.02 }}
                className="block"
              >
                {route.label}
              </motion.a>
            </li>
          ))}
        </motion.ul>
      )} */}
      {/* {isMobile && ( */}
        <div className="flex-1 flex items-end pb-20">
          <Socials column={true} />
        </div>
      {/* )} */}
    </div>
  );
}

export default RightSideBar;
