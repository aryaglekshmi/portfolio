"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import About from "../about/page";
import Projects from "../../projects/page";
import CodeSnippet from "../code";
import TypingEffect from "react-typing-effect";
import { motion, AnimatePresence, useAnimation, animate } from "framer-motion";
import Socials from "../socials";

// export default function Home() {
//   useEffect(() => {
//   }, []);
//   const controls = useAnimation();
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     controls.start({
//       scale: [0.4, 0.5, 0.6, 0.8, 1],
//       // rotate: [0, 180, 0, 180, 0],
//       borderRadius: ["50%", "50%", "50%", "50%"],
//       transition: {
//         duration: 2,
//         ease: "circIn",
//         times: [0.2, 0.5, 0.8, 1],
//         repeat: 0,
//         repeatDelay: 3,
//       },
//     });

//     const interval = setInterval(() => {
//       setCount((prev) => (prev === 5 ? prev : prev + 1)); // Increment up to 100
//     }, 500); // Adjust speed if necessary

//     return () => clearInterval(interval);
//   }, [controls]);

//   return (
//     <main className="w-full h-full flex flex-col md:flex-row justify-between">
//       <motion.div className="h-65 w-96 transition-transform duration-300 ease-in-out absolute bottom-0 left-8 z-20 flex">
//         {/* <img
//           src="/arya.png"
//           alt="Background"
//           className="object-contain filter contrast-100 brightness-75 transition duration-300 hover:brightness-100"
//         /> */}
//       </motion.div>
//       <div className="absolute right-0 bottom-32 flex flex-col h-full justify-between items-center px-5">
//         <div className="flex-1 flex items-end">
//           <Socials />
//         </div>
//         {/* <div className="h-1/2">
//           <span className="border-r-2 block h-full"></span>
//         </div> */}
//       </div>
//       <section className="flex justify-center items-center w-full mx-auto">
//         <div className="flex flex-col p-4 h-full w-full items-center">
//           <h1 className="text-4xl md:text-5xl font-bold py-2 animate__animated animate__fadeIn">
//             Hi, I'm <span className="text-primary"></span>
//             <TypingEffect
//               text={["Aryalekshmi"]}
//               cursorRenderer={(cursor: string) => <span>{cursor}</span>}
//               displayTextRenderer={(text: string) => (
//                 <span className="text-primary">{text}</span>
//               )}
//               speed={100}
//               eraseSpeed={100}
//               typingDelay={500}
//               eraseDelay={1500}
//               cursor="|"
//             />
//           </h1>
//           <br />
//           <p className="text-lg md:text-xl mt-2">
//             Full-Stack Developer | Frontend Wizard | Backend Learner
//           </p>
//           <br />
//           <p>Code with a Smile 😄</p>
//           {/* <TypingEffect
//             text={["Code with a Smile 😄"]}
//             cursorRenderer={(cursor: string) => <span>{cursor}</span>}
//             displayTextRenderer={(text: string) => (
//               <span className="text-primary">{text}</span>
//             )}
//             speed={100}
//             eraseSpeed={100}
//             typingDelay={500}
//             eraseDelay={1500}
//             cursor="|"
//           /> */}
//           {/* <Swiper
//           direction={"vertical"}
//           slidesPerView={1}
//           spaceBetween={30}
//           mousewheel={true}
//           effect="flip"
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Mousewheel, Pagination]}
//           autoplay={true}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <CodeSnippet />
//           </SwiperSlide>
//           <SwiperSlide>
//             <About />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Projects />
//           </SwiperSlide>
//         </Swiper> */}
//         </div>
//                 <div className="h-full flex w-1/2">
//           <motion.div
//             className="flex justify-center items-center  text-white font-bold w-24 h-24 rounded-r-lg"
//             animate={controls}
//             // style={{
//             //   borderRadius: "50%",
//             // }}
//           >
//             <div className="bg-blue-400 w-20 rounded-full p-2">
//               <div className="bg-blue-300 rounded-full p-2">
//                 <div className="bg-blue-200 text-center text-xl  font-medium rounded-full p-2">
//                   {" "}
//                   <motion.span
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className="text-2xl text-blue-500"
//                   >
//                     {count}
//                   </motion.span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>


//       </section>
//     </main>
//   );
// }

const textVariant = {
    initial: {
        x: -500,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y:10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariant = {
    initial: {
        x: 0,
    },
    animate: {
        x:"-220%",
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        }
    }
}

export default function Home() {

  return(
    <div className="h-full relative overflow-X-hidden">
        <motion.div className="mx-auto max-w-[80%] flex justify-center flex-col h-full gap-y-6" variants={textVariant} initial="initial" animate="animate">
            <motion.h2 className="font-bold text-4xl text-purple-800 tracking-[.25em]" variants={textVariant}>
                ARYALEKSHMI G
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
            </motion.h2>
            <motion.h1 className="font-bold text-5xl" variants={textVariant}>Software Developer</motion.h1>
            <motion.button className="max-w-[100px] border p-2 rounded text-sm" variants={textVariant}>Contact Me</motion.button>
            <motion.img src="/scroll.png" alt="Scroll" className="h-10 w-10" variants={textVariant} animate="scrollButton"/>
        </motion.div>
        <motion.div className="absolute bottom-0 text-[40vh] whitespace-nowrap text-purple-50 opacity-5 font-bold w-[100vw]" variants={sliderVariant} initial="initial" animate="animate">
        Code with a Smile 
        </motion.div>
         
        {/* <img src="/arya.png" alt="Image" className="h-[80%] overflow-hidden absolute right-0 bottom-0" /> */}
    </div>
  )
}