// utils/routes.js
import Home from "../components/home/page";
import About from "../components/about/page";
import Projects from "../projects/page";


export const routes =  [
  { href: "/home", label: "Home", component: Home },
  { href: "/about", label: "About", component: About },
  { href: "/projects", label: "Projects", component: Projects },
  // { href: "/contact", label: "Contact", component: require('../components/contact/page') },
];
  