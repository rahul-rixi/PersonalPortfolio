import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import RahulImage from "../assets/rahul.jpeg";

const HeroCenteredLayout = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer",
        "Frontend Enthusiast",
        "Backend Specialist",
        "Tech Innovator",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#000101] text-white">
      <div className="text-center">
        {/* Profile Image with Glow Effect */}
        <motion.div
          className="relative mb-8 inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={RahulImage}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
          <span className="absolute inset-0 rounded-full border-4 border-[#FF0000] animate-pulse"></span>
        </motion.div>

        {/* Name and Role */}
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Rahul Kumar
        </motion.h1>
        <motion.div
          ref={typedRef}
          className="block text-xl text-[#FF0000] font-medium my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
        <motion.p
          className="text-lightGray text-lg mt-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          I craft impactful web solutions to turn your ideas into reality.
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
        >
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF0000] hover:text-white transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF0000] hover:text-white transition duration-300 text-2xl"
          >
            <FaGithub />
          </a>
         
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF0000] hover:text-white transition duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCenteredLayout;
