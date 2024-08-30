"use client";
import { useEffect } from "react";
import { bgSnow } from "./utils/three";
import Image from "next/image";
import Socials from "./components/socials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  useEffect(() => {
    bgSnow();
  });
  return (
    <main className="relative w-full h-full flex justify-between">
      <div id="bgSnow" className="h-full absolute w-full overflow-hidden top-0"></div>

      <section className="z-10 w-full flex items-center justify-between h-full">
        <div className="p-3 relative h-full w-1/2">
          <Image src="/man.jpg" alt="Profile" width={200} height={800} />
        {/* <div id="bgSnow" className="h-full absolute w-full overflow-hidden top-0"></div>  */}
        </div>
        <div className="w-1/2 h-full">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            autoplay={true}
            className="mySwiper"
          >
            <SwiperSlide><About/></SwiperSlide>
            <SwiperSlide><Projects/></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
