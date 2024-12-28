import React, { useRef, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";
import { gsap } from "gsap";

const Skills = () => {
  const skillsData = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-red-500", hoverColor: "group-hover:text-red-500", animation: "group-hover:animate-bounce" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", hoverColor: "group-hover:text-blue-500", animation: "group-hover:animate-pulse" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", hoverColor: "group-hover:text-yellow-400", animation: "group-hover:animate-flash" },
    { name: "React", icon: <FaReact />, color: "text-blue-400", hoverColor: "group-hover:text-blue-400", animation: "group-hover:animate-spin-slow" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500", hoverColor: "group-hover:text-teal-500", animation: "group-hover:animate-bounce" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", hoverColor: "group-hover:text-green-500", animation: "group-hover:animate-swing" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-500", hoverColor: "group-hover:text-gray-500", animation: "group-hover:animate-jello" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", hoverColor: "group-hover:text-green-500", animation: "group-hover:animate-flip" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600", hoverColor: "group-hover:text-blue-600", animation: "group-hover:animate-wobble" },
    { name: "GSAP", icon: <FaCode />, color: "text-green-400", hoverColor: "group-hover:text-green-400", animation: "group-hover:animate-rubberBand" },
  ];

  const skillsRef = useRef([]);
  const headingRef = useRef(null);
  const hoverDivRef = useRef(null);

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      gsap.fromTo(
        skill,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: "power3.out" }
      );
    });

    gsap.set(hoverDivRef.current, { scaleX: 0 });

    headingRef.current.addEventListener("mouseenter", () => {
      gsap.to(hoverDivRef.current, {
        scaleX: 1,
        duration: 0.3,
        transformOrigin: "center",
      });
    });

    headingRef.current.addEventListener("mouseleave", () => {
      gsap.to(hoverDivRef.current, {
        scaleX: 0,
        duration: 0.3,
        transformOrigin: "center",
      });
    });
  }, []);

  return (
    <section className="bg-black py-16 cursor-default" id="skills">
      <div className="max-w-screen-xl mx-auto px-8 text-center">
        <div className="relative inline-block">
          <h2
            ref={headingRef}
            className="text-3xl font-bold text-purple-500 mb-6 inline-block relative"
          >
            My Skills
          </h2>
          <div
            ref={hoverDivRef}
            className="absolute bottom-0 left-0 mb-4 right-0 h-1 bg-purple-500"
            style={{ scaleX: 0 }}
          ></div>
        </div>
        <p className="text-gray-400 mb-8">
          Here are the technologies I work with to create robust and dynamic applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center bg-gray-900 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-2xl`}
              ref={(el) => (skillsRef.current[index] = el)}
            >
              <div className={`text-4xl mb-4 ${skill.color} ${skill.animation}`}>
                {React.cloneElement(skill.icon, {
                  className: `transition-all duration-300 ${skill.hoverColor} ${skill.animation}`,
                })}
              </div>
              <p className={`text-lg font-medium text-gray-300 transition-colors duration-300 ${skill.hoverColor}`}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
