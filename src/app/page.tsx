"use client";

import React, { useEffect, useState } from "react";
import { routes } from "./utils/store"; // Adjust the path as needed

function AnimatedHome() {
  const [hash, setHash] = useState(""); // Store the hash in state

  useEffect(() => {
    // Function to update the hash state
    const updateHash = () => {
      setHash(window.location.hash);
    };

    // Set the initial hash value
    if (typeof window !== "undefined") {
      setHash(window.location.hash); // Get the hash from the URL
    }

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="h-full">
      {routes.map((section) => {
        // Render the section component only if the hash matches
        return (
          hash === `#${section.href}` && (
            <section
              id={section.href}
              className="h-full pt-[60px]"
              key={section.href}
            >
              <section.component />
            </section>
          )
        );
      })}
    </div>
  );
}

export default AnimatedHome;
