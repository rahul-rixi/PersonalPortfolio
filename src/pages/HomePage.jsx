import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FutureGoals from "../components/FutureGoal";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <FutureGoals/>
      <Contact/>
      <Footer/>

    </>
  );
};

export default HomePage;
