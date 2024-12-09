import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox"; // Import the Checkbox (Hamburger) component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolling, setScrolling] = useState(false); // Track if the page is scrolled

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, section) => {
    e.preventDefault();
    const target = document.getElementById(section);
    target.scrollIntoView({
      behavior: "smooth", // Smooth scroll
      block: "start", // Scroll to the top of the section
    });
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolling(window.scrollY > 100); // Change scrolling state based on scroll position

      // Dynamically set the active link based on section in view
      const sections = ["home", "about", "skills", "projects", "contact"];
      let newActiveLink = "home"; // Default to "home" when at the top of the page

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            newActiveLink = section;
            break;
          }
        }
      }

      setActiveLink(newActiveLink); // Update the active link
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent); // Clean up on unmount
    };
  }, []);

  // Define colors for each section
  const sectionColors = {
    home: "text-red-600",
    about: "text-cyan-500",
    skills: "text-purple-600",
    projects: "text-[#FA9114]",
    contact: "text-[#109FE7]",
  };

  // Define background colors for div at the bottom
  const sectionBackgroundColors = {
    home: "bg-red-600",
    about: "bg-cyan-500",
    skills: "bg-purple-600",
    projects: "bg-[#FA9114]",
    contact: "bg-[#109FE7]",
  };

  return (
    <div id="home" className="max-w-[90%] mx-auto">
      <nav
        className={`h-16 w-full flex justify-between items-center px-8 backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
          scrolling ? "navbar-fill-animation" : ""
        }`}
      >
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider flex items-center">
          <a
            href="#home" // Remove this, as we're handling the scroll manually
            onClick={(e) => {
              e.preventDefault();
              handleScroll(e, "home"); // Manually scroll to the home section
            }}
            className={`${
              scrolling ? sectionColors[activeLink] : "text-red-600"
            } transition-all duration-300`}
          >
            Rahul
          </a>
          <a href="#home"
          
          onClick={(e) => {
            e.preventDefault();
            handleScroll(e, "home");}}
            className={`${
              scrolling ? "text-white" : "text-gray-300"
            } ml-1 transition-all duration-300`}
          >
            Portfolio
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <Checkbox 
            checked={isMenuOpen} 
            onChange={toggleMenu}
            color={sectionColors[activeLink]} // Pass the color to the Checkbox component
          />
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <div key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  handleScroll(e, link.toLowerCase());
                  setActiveLink(link.toLowerCase());
                }}
                className={`block px-4 py-3 font-semibold transition-all duration-300 ${
                  activeLink === link.toLowerCase()
                    ? sectionColors[link.toLowerCase()]
                    : "text-gray-300"
                }`}
              >
                {link}
              </a>
              {/* Hover effect div */}
              <div
                className={`absolute left-0 right-0 h-[3px] mt-[-10px] rounded-md transition-all duration-300 transform scale-x-0 group-hover:scale-x-75 ${
                  sectionBackgroundColors[activeLink]
                }`}
              ></div>
            </div>
          ))}
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-black bg-opacity-90 transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="space-y-6 text-center text-2xl font-medium text-gray-300 pt-16">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  handleScroll(e, link.toLowerCase());
                  setActiveLink(link.toLowerCase());
                  setIsMenuOpen(false); // Close the sidebar
                }}
                className={`block px-4 py-2 ${
                  activeLink === link.toLowerCase()
                    ? sectionColors[link.toLowerCase()]
                    : "text-gray-300"
                }`}
              >
                {link}
              </a>
              {/* Hover effect div */}
              <div
                className={`absolute left-0 right-0 h-[3px] mt-[-10px] rounded-md transition-all duration-300 transform scale-x-0 group-hover:scale-x-75 ${
                  sectionBackgroundColors[activeLink]
                }`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
