import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import profile_img from '../assets/photo.jpg';
import { DiHtml5, DiCss3, DiReact, DiNodejs, DiMongodb, DiJsBadge } from 'react-icons/di';
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div id='about' className='flex flex-col items-center justify-center gap-14 mx-5 md:mx-[80px] my-[110px]'>
      <div className="relative">
        <h1 className='px-[0px] py-[20px] text-4xl md:text-6xl font-semibold'>About me</h1>
        <img src={theme_pattern} alt="" className='absolute bottom-0 right-0 -z-10 w-24 md:w-auto' />
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div>
          <img src={profile_img} alt="Profile" className='w-48 md:w-64 lg:w-96' />
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-2 text-lg md:text-xl font-medium text-center md:text-left">
            <p>I am a dedicated and adaptable Computer Science & Engineering student with a passion for problem-solving and software development, proficient in Java, Python, and web technologies.</p>
            <p>I seek opportunities to contribute innovative solutions and drive technical excellence in a collaborative environment.</p>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-12 items-center hover:transform hover:scale-105 ease-in-out duration-500">
              <p className='w-24 md:w-36 text-lg md:text-xl font-medium'>HTML & CSS</p>
              <hr className='outline-none border-none w-1/2 h-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' style={{ width: "40%" }} />
            </div>
            <div className="flex gap-12 items-center hover:transform hover:scale-105 ease-in-out duration-500">
              <p className='w-24 md:w-36 text-lg md:text-xl font-medium'>JavaScript</p>
              <hr className='outline-none border-none w-1/2 h-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' style={{ width: "55%" }} />
            </div>
            <div className="flex gap-12 items-center hover:transform hover:scale-105 ease-in-out duration-500">
              <p className='w-24 md:w-36 text-lg md:text-xl font-medium'>React Js</p>
              <hr className='outline-none border-none w-1/2 h-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' style={{ width: "60%" }} />
            </div>
            <div className="flex gap-12 items-center hover:transform hover:scale-105 ease-in-out duration-500">
              <p className='w-24 md:w-36 text-lg md:text-xl font-medium'>MERN Stack</p>
              <hr className='outline-none border-none w-1/2 h-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full inline-flex flex-nowrap gap-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] bg-gradient-to-br from-white/30 to-white/10 backdrop-filter backdrop-blur-lg border border-white/30 h-20 md:h-40 group rounded-xl shadow-[0_8px_100px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_100px_0_rgba(31,38,135,0.55)] transition-shadow duration-300">      
       <div className="flex items-center gap-10 justify-center animate-loop-scroll group-hover:paused">
          <DiHtml5 size={100} alt="html" />
          <DiCss3 size={100} alt="css" />
          <DiJsBadge size={100} alt="node js" />
          <RiTailwindCssFill size={100} alt="node js" />
          <DiReact size={100} alt="react js" />
          <DiMongodb size={100} alt="mongo db" />
          <DiNodejs size={100} alt="node js" />
        </div>
        <div className="flex items-center gap-10 justify-center animate-loop-scroll group-hover:paused" aria-hidden='true'>
          <DiHtml5 size={100} alt="html" />
          <DiCss3 size={100} alt="css" />
          <DiJsBadge size={100} alt="css" />
          <RiTailwindCssFill size={100} alt="css" />
          <DiReact size={100} alt="react js" />
          <DiMongodb size={100} alt="mongo db" />
          <DiNodejs size={100} alt="node js" />
        </div>
        <div className="flex items-center gap-10 justify-center animate-loop-scroll group-hover:paused" aria-hidden='true'>
          <DiHtml5 size={100} alt="html" />
          <DiCss3 size={100} alt="css" />
          <DiJsBadge size={100} alt="css" />
          <RiTailwindCssFill size={100} alt="css" />
          <DiReact size={100} alt="react js" />
          <DiMongodb size={100} alt="mongo db" />
          <DiNodejs size={100} alt="node js" />
        </div>
      </div>
    </div>
  )
}

export default About;
