"use client";
import { createContext, useEffect, useState } from "react";

export function urlPath(): string {
  const [path, setPath] = useState("");

  useEffect(() => {
    // Function to update the path state
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    // Check if window is defined
    if (typeof window !== "undefined") {
      setPath(window.location.hash); // Set initial path
      window.addEventListener("hashchange", handleHashChange);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);

  return path;
}

export const PathContext = createContext<string>('');
