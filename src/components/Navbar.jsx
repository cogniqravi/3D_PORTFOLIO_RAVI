import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks, socialLinks, resumeLink } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ravi&nbsp;
            <span className="sm:block hidden"> | Founder @ Cogniq AI</span>
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Social Links & Resume Button */}
        <div className="hidden sm:flex flex-row items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-tertiary hover:bg-secondary transition-all"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
          <a
            href={resumeLink}
            download
            className="bg-tertiary py-2 px-5 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary transition-all text-[14px]"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => { setToggle(!toggle) }}
          />

          <div 
            className={`${
              !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col gap-4`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => 
                      {
                        setToggle(!toggle);
                        setActive(link.title)
                      }
                  }
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-row items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-primary"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
            <a
              href={resumeLink}
              download
              className="bg-primary py-2 px-4 outline-none w-fit text-white font-bold rounded-xl text-[14px] text-center"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
