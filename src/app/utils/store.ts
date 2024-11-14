// utils/routes.js
"use client"
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { FaBlogger } from "react-icons/fa6";


export const routes = [
  { href: "home", label: "Home", icon: FaHome  },
  { href: "about", label: "About", icon: FaInfoCircle  },
  { href: "projects", label: "Projects",  icon: FaProjectDiagram  },
  { href: "contact", label: "Contact",  icon: FaEnvelope  },
  { href: "blogs", label: "Blogs",  icon: FaBlogger  },
];

  