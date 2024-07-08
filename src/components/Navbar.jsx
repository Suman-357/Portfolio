import React, { useState } from 'react';
import underline from '../assets/nav_underline.svg';
import theme_pattern from '../assets/theme_pattern.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between m-5 mx-5 md:my-5 md:mx-12">
      <div className="relative">
        <h1 className="px-[0px] py-[20px] text-4xl font-bold font-sans">Suman</h1>
        <img src={theme_pattern} alt="" className="absolute bottom-4 right-0 -z-10 w-24" />
      </div>
      
      <div className="md:hidden z-20">
        <img
          src={isMobileMenuOpen ? menu_close : menu_open}
          alt="menu icon"
          onClick={toggleMobileMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <nav className={`md:hidden fixed top-0 right-0 h-full w-[350px] bg-[#1f0016] flex flex-col items-start gap-[30px] pt-20 pl-8 transition-transform duration-500 ease-in-out z-10 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <AnchorLink href='#home' className="text-white" onClick={() => handleMenuItemClick('home')}>
          Home
          {menu === 'home' && <img src={underline} alt='' className='mt-1' />}
        </AnchorLink>
        <AnchorLink href='#about' className="text-white" onClick={() => handleMenuItemClick('about')}>
          About
          {menu === 'about' && <img src={underline} alt='' className='mt-1' />}
        </AnchorLink>
        <AnchorLink href='#project' className="text-white" onClick={() => handleMenuItemClick('project')}>
          Projects
          {menu === 'project' && <img src={underline} alt='' className='mt-1' />}
        </AnchorLink>
        <AnchorLink href='#contact' className="text-white" onClick={() => handleMenuItemClick('contact')}>
          Contact
          {menu === 'contact' && <img src={underline} alt='' className='mt-1' />}
        </AnchorLink>
      </nav>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row items-center list-none gap-16 cursor-pointer">
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