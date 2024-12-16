import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section id="about" className="flex justify-center items-center min-h-screen bg-black text-white p-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-500">About Me</h2>
        <div className="text-xl font-medium mb-6">
          <span className="mr-2 text-gray-400">I'm Rahul, and I'm a </span>
          <span className="text-cyan-500">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "React.js Developer",
                  "Coder",
                  "Problem Solver",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </div>
        <p className="text-lg text-gray-300">
          I am a self-taught React.js developer currently pursuing my B.TECH degree from Government Engineering College Arwal, specializing in the creation of fast, flexible, and mobile-first websites that prioritize seamless user experiences. With a solid foundation in web development and advanced proficiency in React.js, I am passionate about incorporating the latest industry trends into my work to deliver visually appealing and responsive interfaces.
        </p>
        <div className="w-20 h-1 mt-8 mx-auto bg-cyan-500 rounded-full"></div>
      </div>
    </section>   
  );
};

export default About;
