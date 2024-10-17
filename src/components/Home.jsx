import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Hero from "../assets/bond.png";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import './Home.css'
import {motion} from 'framer-motion'
import {FadeLeft, FadeRight, FadeUp} from '../../src/utility/animation'
import { Link } from "react-scroll";



const Home = () => {
  return (
    <motion.section 
    initial={{opacity:0, scale:0.5}}
    whileInView={{opacity:1, scale:1}}
    transition={{type:"spring", stiffness:100, delay:0.2}}
    name='home' className="relative">
      <div
        className="absolute right-0 top-[-20%] w-60 h-60 bg-primaryColorLight mix-blend-screen
      rounded-full blur-[150px] opacity-50"
      ></div>

      <div className="container">
        {/* bg image */}
       

        {/* Hero Content */}
        <div className="flex items-center gap-5">
          <div className="space-y-2 md:w-1/2">
            <motion.h3 
             variants={FadeRight(0.6)}
             initial="hidden"
             animate="visible"
            className="home text-2xl md:text-3xl lg:text-4xl sm:pt-5 font-bold">I am Durotimi</motion.h3>

            <motion.h1 
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
            className="title">FrontEnd Developer</motion.h1>

       

            <motion.p 
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
            className="max-w-xl text-xl pb-5">
              I disscet intricate user experience issues to craft solutions
              focused on integrity, linking billions of individual.
            </motion.p>

            <div className="flex items-center flex-wrap gap-5">
              <motion.button 
                variants={FadeRight(0.6)}
                initial="hidden"
                animate="visible"
              className="text-primaryColor group border-2 px-6 py-3 my-2 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-full">
                <Link to="portfolio"
                spy={true}
                smooth={true}
                duration={500}>
                View My Work
                </Link> 
                <span className="group-hover:rotate-90 duration-300 ml-2">
                  <HiArrowNarrowRight />
                </span>
              </motion.button>

              <motion.div 
                variants={FadeLeft(0.6)}
                initial="hidden"
                animate="visible"
              className="flex items-center gap-5">
                <div className="social-icon">
                  <a href="https://x.com/Oluwasamibond">
                  <FaTwitter />
                  </a>
                </div>

                <div className="social-icon">
                  <a href="https://www.instagram.com/___oluwasamibond/">
                  <FaInstagram />
                  </a>
                </div>

                <div className="social-icon">
                  <a href='https://github.com/Oluwasamibond'>
                  <FaGithub/>
                  </a>
                </div>

                <div className="social-icon">
                  <FaLinkedin />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative flex  md:w-1/2  justify-center">
              {/* blob */}
              <div
                className="absolute left-0 bottom-[-20%] w-70 h-70 bg-primaryColorLight mix-blend-screen
                rounded-full blur-[150px] opacity-50"
              ></div>

              <motion.img
              initial={{opacity:0, scale:0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{type:"spring", stiffness:100, delay:0.2}}
              src={Hero} alt="person" className="my-10 md:w-full lg:max-w-[50%] duration-300 
              origin-center rotate-[4.5deg] border-2 border-primaryColor rounded-[38px]
              hover:rotate-0 hover:border-primaryColorLight" />
            </div>
        </div>

        {/* Hero Footer */}
        <motion.div 
          variants={FadeUp(0.6)}
          initial="hidden"
          animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          <div className="flex items-center gap-3">
            <p className="text-5xl lg:text-6xl font-bold">2</p>
            <p>
              Years of <br /> Experience
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-5xl lg:text-6xl  font-bold">20+</p>
            <p>
              Project <br /> Completed
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-5xl lg:text-6xl  font-bold">100k</p>
            <p>
              Happy <br /> Clients
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-5xl lg:text-6xl  font-bold">2</p>
            <p>
              Years of <br /> Experience
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
