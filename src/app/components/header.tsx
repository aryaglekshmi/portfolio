"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { routes } from "../utils/store"; // Adjust the path as needed

function Header() {
  const [path, setPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="fixed w-full top-0 py-4 text-base px-20 flex-none shadow-sm">
      <div className="flex justify-between items-center mx-auto max-w-[80%] ">
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ARYA_GG
          </motion.span>
        </div>
        <div className="flex-grow justify-end flex items-center">
          <ul className="flex">
            {routes.map((route) => (
              <li
                key={route.href}
                className={`mx-4 ${
                  path === "#" + route.href ? "border-gradient" : ""
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
      </div>
    </div>
  );
}

export default Header;
