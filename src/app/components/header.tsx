"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  const path = usePathname();
  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="sticky top-0 py-5 text-base flex justify-between items-center px-20">
      <div>
        <Image src="/logo.svg" alt="Logo" width={90} height={90} />
      </div>
      <div className="flex-grow justify-end flex items-center">
        <ul className="flex">
          {routes.map((route, ind) => (
            <li
              key={ind}
              className={`${ind === 0 ? "mr-4" : "mx-4"} ${
                path === route.href ? "border-gradient" : ""
              }`}
            >
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded mx-4"
        />
        <button onClick={toggleTheme} className="p-2">
          {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </div>
  );
}

export default Header;
