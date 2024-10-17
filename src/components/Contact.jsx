import { motion } from "framer-motion";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { transition1 } from "../transitions";
import { FadeLeft, FadeRight } from "../utility/animation";



const Contact = () => {
  return (
    <section name='contact' className="container">
      <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-5 md:items-center">
        <div className="flex-1 space-y-7 md:space-y-10 lg:pl-20 xl:pl-40">
          <motion.div 
           variants={FadeLeft(0.6)}
           initial="hidden"
           animate="visible"
          className="flex items-start gap-4">
            <div
              className="text-whiteColor bg-gradient-to-b from-primaryColor to bg-primaryColorLight
            h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center"
            >
              <FaPhone />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Phone</p>
              <p className="font-bold hover:text-primaryColorLight duration-300 cursor-pointer">
                +234 81 6831 1719
              </p>
            </div>
          </motion.div>

          <motion.div 
          variants={FadeLeft(0.6)}
          initial="hidden"
          animate="visible"
          className="flex items-start gap-4">
            <div
              className="text-whiteColor bg-gradient-to-b from-primaryColor to bg-primaryColorLight
            h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center"
            >
              <FaEnvelope />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Email</p>
              <p className="font-bold hover:text-primaryColorLight duration-300 cursor-pointer">
                afolabioluwadurotimi@gmail.com
              </p>
            </div>
          </motion.div>

          <motion.div 
           variants={FadeLeft(0.6)}
           initial="hidden"
           animate="visible"
          className="flex items-start gap-4">
            <div
              className="text-whiteColor bg-gradient-to-b from-primaryColor to bg-primaryColorLight
            h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center"
            >
              <FaLocationDot />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Location</p>
              <p className="font-bold hover:text-primaryColorLight duration-300 cursor-pointer">
                Lagos, Nigeria
              </p>
            </div>
          </motion.div>
        </div>

        <motion.form 
        variants={FadeRight(0.6)}
        initial="hidden"
        animate="visible"
        action="https://getform.io/f/byvpdoka" method="POST"
          className="flex-1 bg-sectionColor dark:bg-darkBodySectionColor border border-primaryColor
         py-10 px-5 rounded-3xl space-y-3"
        >
          <div className="flex flex-col">
            <h2 className="subtitle">Let's work together</h2>
            <p className="max-w-2xl py-3">
              I create elegantly simple designs and code with passion. It's as
              straightforward as that
            </p>
          </div>

          <div className="space-y-3 mt-7">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                autoComplete="off"
              />

              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <input
                email="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
              />

              <input
                type="phone"
                placeholder="Phone Number"
                name="phone"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="space-y-3">
            <textarea  rows="5" placeholder='Message'></textarea>
            <button className="btn">
              <span className="z-10">Send message</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
