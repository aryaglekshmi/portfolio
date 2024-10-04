// utils/routes.js
"use client"
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Projects from "../pages/projects/page";
import Contact from "../pages/contact/page";


export const routes =  [
  { href: "home", label: "Home", component: Home },
  { href: "about", label: "About", component: About },
  { href: "projects", label: "Projects", component: Projects },
  { href: "contact", label: "Contact", component: Contact },
];

  