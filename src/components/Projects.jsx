import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Core carousel styles
import "slick-carousel/slick/slick-theme.css"; // Default theme styles

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import projectSample from "../assets/project1.png";

const Projects = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 projects on desktop
    slidesToScroll: 1, // Minimum scroll by one slide
    arrows: false, // Remove arrows
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true, // Allow sliding freely based on the user's drag
    customPaging: i => (
      <div className="dot w-3 h-3 bg-gray-500 rounded-full transition-transform transform hover:scale-125 duration-300"></div>
    ),
    dotsClass: "slick-dots bottom-[-30px] flex justify-center space-x-2", // Adjust dots position and style
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const projectData = [
    {
      img: project1,
      title: "Sample Coffee Shop Site",
      link: "#",
    },
    {
      img: project2,
      title: "Sample School Site",
      link: "#",
    },
    {
      img: project3,
      title: "Sample Focus on Today Site",
      link: "#",
    },
    {
      img: projectSample,
      title: "Sample Project",
      link: "#",
    },
  ];

  return (
    <section className="bg-black py-16" id="projects">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-4xl cursor-default font-bold text-[#FA9114] mb-6 hover:text-[#FA9114] hover:scale-105 hover:shadow-lg transition-all duration-300">
          My Projects
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Explore some of my work below.
        </p>

        {/* Carousel */}
        <div className="relative flex justify-center">
          <div className="max-w-[100%] w-full">
            <Slider {...settings}>
              {projectData.map((project, index) => (
                <div key={index} className="p-4">
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-200">
                          {project.title}
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
