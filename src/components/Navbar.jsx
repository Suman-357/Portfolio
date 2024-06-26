import React, { useState } from 'react';
import underline from '../assets/nav_underline.svg';
import theme_pattern from '../assets/theme_pattern.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between m-5 mx-5 md:my-5 md:mx-12">
      <div className="relative">
        <h1 className="px-[0px] py-[20px] text-4xl font-bold font-sans">Suman</h1>
        <img src={theme_pattern} alt="" className="absolute bottom-4 right-0 -z-10 w-24" />
      </div>
      
      <div className="md:hidden">
        <img
          src={isMobileMenuOpen ? menu_close : menu_open}
          alt="menu icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      <ul className={`flex-col items-center list-none gap-6 cursor-pointer absolute top-20 left-0 right-0 bg-white md:bg-transparent md:flex md:flex-row md:relative md:top-0 md:gap-16 md:m-0 transition-transform transform md:transform-none ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
        <li><AnchorLink className='' href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} alt='' className='flex m-auto' /> : <></>}</li>
        <li><AnchorLink className='' offset={50} href='#about'><p onClick={() => setMenu('about')}>About</p></AnchorLink>{menu === 'about' ? <img src={underline} alt='' className='flex m-auto' /> : <></>}</li>
        <li><AnchorLink className='' offset={50} href='#project'><p onClick={() => setMenu('project')}>Projects</p></AnchorLink>{menu === 'project' ? <img src={underline} alt='' className='flex m-auto' /> : <></>}</li>
        <li><AnchorLink offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt='' className='flex m-auto' /> : <></>}</li>
      </ul>

      <div className="hidden md:flex px-7 py-3 items-center rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer transition ease-in-out delay-140 hover:scale-110">
        <AnchorLink offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
