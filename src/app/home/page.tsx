"use client";
import { useEffect, useState } from "react";
import { bgSnow } from "../utils/three";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import About from "../about/page";
import Projects from "../projects/page";
import CodeSnippet from "../components/code";
import TypingEffect from "react-typing-effect";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import "swiper/css/effect-flip";
import Socials from "../components/socials";

export default function Home() {
  useEffect(() => {
    bgSnow();
  }, []);
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({
      scale: [0.4, 0.5, 0.6, 0.8, 1],
      // rotate: [0, 180, 0, 180, 0],
      borderRadius: ["50%", "50%", "50%", "50%"],
      transition: {
        duration: 2,
        ease: "circIn",
        times: [0.2, 0.5, 0.8, 1],
        repeat: 0,
        repeatDelay: 3,
      },
    });

    const interval = setInterval(() => {
      setCount((prev) => (prev === 5 ? prev : prev + 1)); // Increment up to 100
    }, 500); // Adjust speed if necessary

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <main className="w-full h-full flex flex-col md:flex-row justify-between">
      <motion.div className="h-65 w-96 transition-transform duration-300 ease-in-out absolute bottom-0 left-8 z-20 flex">
        {/* <img
          src="/arya.png"
          alt="Background"
          className="object-contain filter contrast-100 brightness-75 transition duration-300 hover:brightness-100"
        /> */}
      </motion.div>
      <div className="absolute right-0 bottom-32 flex flex-col h-full justify-between items-center px-5">
        <div className="flex-1 flex items-end">
          <Socials />
        </div>
        {/* <div className="h-1/2">
          <span className="border-r-2 block h-full"></span>
        </div> */}
      </div>
      <section className="flex justify-center items-center w-full mx-auto">
        <div className="flex flex-col p-4 h-full w-full items-center">
          <h1 className="text-4xl md:text-5xl font-bold py-2 animate__animated animate__fadeIn">
            Hi, I'm <span className="text-primary">Aryalekshmi</span>
            {/* <TypingEffect
              text={["Aryalekshmi"]}
              cursorRenderer={(cursor: string) => <span>{cursor}</span>}
              displayTextRenderer={(text: string) => (
                <span className="text-primary">{text}</span>
              )}
              speed={100}
              eraseSpeed={100}
              typingDelay={500}
              eraseDelay={1500}
              cursor="|"
            /> */}
          </h1>
          <br />
          <p className="text-lg md:text-xl mt-2">
            Full-Stack Developer | Frontend Wizard | Backend Learner
          </p>
          <br />
          {/* <p>Code with a Smile 😄</p> */}
          <TypingEffect
            text={["Code with a Smile 😄"]}
            cursorRenderer={(cursor: string) => <span>{cursor}</span>}
            displayTextRenderer={(text: string) => (
              <span className="text-primary">{text}</span>
            )}
            speed={100}
            eraseSpeed={100}
            typingDelay={500}
            eraseDelay={1500}
            cursor="|"
          />
          {/* <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          effect="flip"
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <CodeSnippet />
          </SwiperSlide>
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
        </Swiper> */}
        </div>
                <div className="h-full flex w-1/2">
          <motion.div
            className="flex justify-center items-center  text-white font-bold w-24 h-24 rounded-r-lg"
            animate={controls}
            // style={{
            //   borderRadius: "50%",
            // }}
          >
            <div className="bg-blue-400 w-20 rounded-full p-2">
              <div className="bg-blue-300 rounded-full p-2">
                <div className="bg-blue-200 text-center text-xl  font-medium rounded-full p-2">
                  {" "}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-2xl text-blue-500"
                  >
                    {count}
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </section>
    </main>
  );
}
