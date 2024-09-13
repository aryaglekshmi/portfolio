"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { routes } from "../utils/store"; // Adjust the path as needed

function Header() {
  const [path,setPath] = useState(location.hash);

  useEffect(()=>{
      setPath(location.hash)
  },[location])

  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="fixed w-full top-0 py-2 text-base flex justify-between items-center px-20 flex-none shadow-sm">
      <div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          ARYA_GG
        </motion.span>
      </div>
      <div className="flex-grow justify-end flex items-center">
        <ul className="flex">
          {routes.map((route) => (
            <li
              key={route.href}
              className={`mx-4 ${path === '#'+route.href ? "border-gradient" : ""}`}
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
  );
}

export default Header;
