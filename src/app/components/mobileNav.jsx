import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { routes } from "../utils/store";

export default function Navbar({ path }) {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header
      className={`fixed top-0 right-0 p-6 bg-black/30 h-full ${
        mobileNav ? "w-[30%]" : ""
      }`}
    >
      <nav className="container mx-auto h-full">
        <div class="w-full flex justify-end">
          <motion.button
            initial="hide"
            animate={mobileNav ? "show" : "hide"}
            onClick={toggleMobileNav}
            className="flex flex-col space-y-1 relative z-10"
          >
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: 45,
                  y: 5,
                },
              }}
              className="w-6 bg-accent h-px block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  opacity: 1,
                },
                show: {
                  opacity: 0,
                },
              }}
              className="w-6 bg-accent h-px block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: -45,
                  y: -5,
                },
              }}
              className="w-6 bg-accent h-px block"
            ></motion.span>
          </motion.button>
        </div>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.01,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "100%",
                    transition: {
                      type: "spring",
                      bounce: 0.01,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.01,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="inset-0 bg-primary p-6 flex flex-col h-full justify-between space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6"
                >
                  {routes.map((route) => (
                    <li
                      key={route.href}
                      className={`mx-4 ${
                        (!path && route.href === "home") ||
                        path === "#" + route.href
                          ? "border-accent border-b text-accent"
                          : ""
                      }`}
                    >
                      <motion.a
                        href={`#${route.href}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.02 }}
                        className="block"
                      >
                        {route.label}
                      </motion.a>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
