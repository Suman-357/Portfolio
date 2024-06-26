import React, { useRef } from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import my_projects from '../assets/mywork_data';

const Projects = () => {
  const ref = useRef(null);

  return (
    <div id='project' className='flex flex-col items-center justify-between gap-16 my-10 mx-5 md:mx-20'>
      <div className="relative">
        <h1 className='px-[0px] py-[16px] text-4xl md:text-5xl font-semibold'>My Projects</h1>
        <img src={theme_pattern} alt="" className='absolute bottom-0 right-0 -z-10 w-24 md:w-auto' />
      </div>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {my_projects.map((project, index) => {
          return (
            <div key={index} className='bg-slate-900 shadow-md rounded-lg sm:w-full md:w-[calc(33.333% - 1rem)] hover:shadow-lg transition-shadow overflow-hidden'>
              <img src={project.w_img} alt="" className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-110 transition-scale duration-500' />
              <div className="p-3 flex flex-col gap-2">
                <p className='text-lg font-semibold truncate text-white'>{project.w_name}</p>
                <p className='text-sm line-clamp-2 text-white'>{project.w_no}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 items-center w-full rounded-lg uppercase hover:opacity-80 text-center'>Source Code</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
