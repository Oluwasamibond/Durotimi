import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'


const Navbar = ({ theme, setTheme }) => {
  const [nav, setNav] = useState(false);

  const toogleBar = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed w-full z-10 py-4 bg-sectionColor dark:bg-darkBodySectionColor  shadow-md">
      <div className="container flex flex-row justify-between items-center">
        <div>
          <h1 className="font-signature text-4xl text-primaryColorLight font-semibold">
            Oluwadurotimi
          </h1>
        </div>

        <ul className="flex max-md:hidden gap-8">

        <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer font-semibold hover:border-b-2 hover:text-primaryColor
            hover:border-primaryColorLight transition-colors duration-500"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer font-semibold hover:border-b-2 hover:text-primaryColor
            hover:border-primaryColorLight transition-colors duration-500"
          >
            About
          </Link>
          <Link 
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer font-semibold hover:border-b-2 hover:text-primaryColor
            hover:border-primaryColorLight transition-colors duration-500"
          >
            Experience
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer font-semibold hover:border-b-2 hover:text-primaryColor
            hover:border-primaryColorLight transition-colors duration-500"
          >
           Portfolio
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer font-semibold hover:border-b-2 hover:text-primaryColor
            hover:border-primaryColorLight transition-colors duration-500"
          >
            Contact
          </Link>
          <div className="flex justify-center items-center">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-xl cursor-pointer"
              />
            )}
          </div>
        </ul>

        <div className="md:hidden flex items-center z-10 gap-5">
          <div className="">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-xl cursor-pointer"
              />
            )}
          </div>
          <div onClick={toogleBar} className="cursor-pointer z-10">
            {nav ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </div>
        </div>
        {nav && (
          <ul 
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full py-24
            bg-sectionColor dark:bg-darkBodySectionColor text-textColor"
          >
             <Link
             onClick={()=> setNav(false)}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="px-4 cursor-pointer py-6 text-3xl hover:border-b-2 hover:text-primaryColor
                hover:border-primaryColorLight transition-colors duration-500"
          >
            Home
          </Link>
          <Link  onClick={()=> setNav(false)}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="px-4 cursor-pointer py-6 text-3xl hover:border-b-2 hover:text-primaryColor
                hover:border-primaryColorLight transition-colors duration-500"
          >
            About
          </Link>
          <Link  onClick={()=> setNav(false)}
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="px-4 cursor-pointer py-6 text-3xl hover:border-b-2 hover:text-primaryColor
                hover:border-primaryColorLight transition-colors duration-500"
          >
            Experience
          </Link>
          <Link  onClick={()=> setNav(false)}
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="px-4 cursor-pointer py-6 text-3xl hover:border-b-2 hover:text-primaryColor
                hover:border-primaryColorLight transition-colors duration-500 "
          >
           Portfolio
          </Link>
          <Link  onClick={()=> setNav(false)}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="px-4 cursor-pointer py-6 text-3xl hover:border-b-2 hover:text-primaryColor
                hover:border-primaryColorLight transition-colors duration-500"
          >
            Contact
          </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
