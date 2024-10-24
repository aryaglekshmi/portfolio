"use client";
import React from 'react';
import CountUp from 'react-countup';

const startYear = 2019;
const presentYear = new Date().getFullYear();
const yrsOfExp = presentYear - startYear;
const statistics = [
  {
    start: 0,
    num: yrsOfExp,
    text: "Years of Experience"
  },
  {
    start: 0,
    num: 10,
    text: "Projects Completed"
  },
  {
    start: 0,
    num: 5,
    text: "Certifications"
  },
  // {
  //   start: startYear - yrsOfExp,
  //   num: startYear,
  //   text: "Career Start"
  // },
  // {
  //   start: 0,
  //   num: 8,
  //   text: "Technologies"
  // },
];

function Status() {
  return (
   <section>
    <div className='flex flex-wrap gap-6 w-full p-4 flex-col md:flex-row items-center'>
      {
        statistics.map((stats,ind)=> {
           return <div key={ind} className='flex-1 mx-4 flex gap-6 items-center md:justify-start'>
            <CountUp
            start={stats.start}
            end={stats.num}
            duration={5}
            delay={2}
            className='text-4xl lg:text-5xl xl:text-6xl font-extrabold whitespace-nowrap
            leading-snug text-white/80'
            />
            <p className='md:text-base '>{stats.text}</p>
            </div>
        })
      }
    </div>
   </section>
  )
}

export default Status
