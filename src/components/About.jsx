import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { FadeUp } from "../utility/animation";



const About = () => {
  return (
    <section name='about'>
      <motion.div 
      initial={{opacity:0, scale:0.5}}
      whileInView={{opacity:1, scale:1}}
      transition={{type:"spring", stiffness:100, delay:0.2}}
      className="container">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="subtitle">About</h2>
          <p className="max-w-2xl">
            Welcome! I'm Oluwadurotimi,a professional developer with a knack for
            crafting visually stunning and highly functional websites. Combing
            creativity and technical expertise. I transform your vision into
            digital masterpiece that excels in both appearance and performance.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
