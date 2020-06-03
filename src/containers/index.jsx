import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

const index = () => {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default index;
