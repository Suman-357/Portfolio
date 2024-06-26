import React from 'react';
import profile from '../assets/photo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className="flex flex-col items-center gap-6 p-5 md:p-12">
      <img src={profile} alt="profile" className='mt-12 w-40 h-40 md:w-56 md:h-56 rounded-full' />
      <h1 className='text-center w-4/5 md:w-4/6 text-4xl md:text-6xl font-semibold'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>I'm Suman J,</span> Full Stack Web Developer from India
      </h1>
      <p className='w-4/5 md:w-1/2 text-center text-lg md:text-xl leading-7 md:leading-10'>
        I am a Computer Science Engineer from Karnataka, India
      </p>
      <div className="flex flex-col md:flex-row items-center gap-5 font-semibold mb-5">
        <div className="cursor-pointer px-7 py-3 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-2 ease-in-out">
          <AnchorLink offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="cursor-pointer rounded-3xl border-2 px-7 py-3 hover:border-purple-700">
          <a href="https://drive.google.com/file/d/14dY-EYTz3tWt90iW8bYDxKuxC4dPd8A_/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
