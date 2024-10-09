import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// Import your section components
import Hero from "../Sections/Hero";
import AboutUs from "../Sections/About_us";
import Discover_team from "../Sections/Discover_team";
import Timeline from "../Sections/Timeline";
import Footer from "../Sections/Footer";
import { Example } from "../Sections/Skill&tell";

export const Navbar = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const eventsRef = useRef(null);
  const sponsorsRef = useRef(null);

  // Function to scroll to the section based on the ref passed
  const scrollToSection = (ref) => {
    if (!ref.current) return;

    const sectionPosition = ref.current.offsetTop;
    
    // Custom smooth scroll with a slower speed
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black relative py-5 ">
      <SlideTabs
        scrollToSection={scrollToSection}
        sections={{ heroRef, aboutRef, teamRef, eventsRef, sponsorsRef }}
      />

      {/* Render your imported sections with refs */}
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={teamRef}>
        <Discover_team />
      </div>
      <div ref={eventsRef}>
        <Timeline />
      </div>
      <div ref={sponsorsRef}>
       <Example/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

const SlideTabs = ({ scrollToSection, sections }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className=" absolute md:right-16 top-11 md:top-12 mx-auto  flex gap-2 md:gap-9 w-fit rounded-full border-2 border-black bg-white "
    >
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.heroRef)}>
        Home
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.aboutRef)}>
        About
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.teamRef)}>
        The team
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.eventsRef)}>
        Events
      </Tab>
      <Tab setPosition={setPosition} onClick={() => scrollToSection(sections.sponsorsRef)}>
        Sponsors
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick} // Call onClick function when the tab is clicked
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-[19px]"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
