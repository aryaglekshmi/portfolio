"use client";
import { createContext, useEffect, useState } from "react";

export function urlPath(): string {
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

  return path;
}

export const PathContext = createContext<string>('');
