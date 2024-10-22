// utils/routes.js
"use client"
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Projects from "../pages/projects/page";
import Contact from "../pages/contact/page";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';


export const routes = [
  { href: "home", label: "Home", component: Home, icon: FaHome  },
  { href: "about", label: "About", component: About, icon: FaInfoCircle  },
  { href: "projects", label: "Projects", component: Projects, icon: FaProjectDiagram  },
  { href: "contact", label: "Contact", component: Contact, icon: FaEnvelope  },
];

  