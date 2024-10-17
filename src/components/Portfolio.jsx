import React from "react";
import Food from "../assets/foodApp.png";
import Shop from '../assets/shopeasy.png'
import Photo from '../assets/photography.png'
import Car from '../assets/carRental.png'
import ReactS from '../assets/react-site.png'
import Netflix from '../assets/netflix-clone.png'
import Crypto from '../assets/crypto.png'
import Fruit from '../assets/fresh-fruit.png'
import { motion } from "framer-motion";
import {transition1} from '../transitions'
import { FadeLeft, FadeRight } from "../utility/animation";


const Portfolio = () => {
   
  return (
    <section 
    name='portfolio' className="container ">
      <motion.div 
      initial={{opacity:0, scale:0.5}}
      whileInView={{opacity:1, scale:1}}
      transition={{type:"spring", stiffness:100, delay:0.2}}
      className="flex flex-col items-center gap-5 mb-5 text-center">
        <h2 className="subtitle">My Recent Works</h2>
        <p className="max-w-2xl mb-5">
          I transform your ideas and desires into distinctive web project that
          inspires both you and your customers.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
        <motion.div 
         variants={FadeRight(0.6)}
         initial="hidden"
         animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={Food} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">Food App</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://foodapp-kappa-rouge.vercel.app" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={Shop} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">ShopEazy</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://shopeazy-ruby.vercel.app/#" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={Photo} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">Photography</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://samiphotography.vercel.app" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={FadeLeft(0.6)}
          initial="hidden"
          animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={Netflix} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">Netflix Clone</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://netflixclone1-sand.vercel.app" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>

        <motion.div 
         variants={FadeLeft(0.6)}
         initial="hidden"
         animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={Car} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">Car Rental</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://bondcar.vercel.app/#" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>

        <motion.div 
         variants={FadeLeft(0.6)}
         initial="hidden"
         animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={Fruit} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">Fresh Fruits</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://fresh-fruits-ten.vercel.app" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>

        <motion.div 
         variants={FadeLeft(0.6)}
         initial="hidden"
         animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={ReactS} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">React</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://react-chi-red.vercel.app" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>

        <motion.div 
         variants={FadeLeft(0.6)}
         initial="hidden"
         animate="visible"
        className="shadow-md shadow-primaryColorLight rounded-lg">
          <img src={Crypto} alt="" className="duration-200 hover:scale-105" />
          <h2 className="flex justify-center items-center pt-2 text-xl">Crypto Market</h2>
          <div className="mt-2 mb-2 flex justify-center items-center">
              <button className="text-primaryColor border-2 px-6 py-2 my-1 flex items-center
              hover:bg-primaryColorLight border-primaryColor rounded-lg
              ">
              <a  href="https://crypto-mauve-kappa.vercel.app" target="blank">Visit</a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
