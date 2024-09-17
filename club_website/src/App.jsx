import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AboutUs from './Sections/About_us';
import { motion } from "framer-motion";
import SwipeCards from './Components/Animated_cards';
import Discover_team from './Sections/Discover_team';
import Discover_team2 from './Components/Discover_team2';
import { Navbar } from './Components/Navbar';
import Timeline from './Sections/Timeline';
import Hero from './Sections/Hero';

function App() {
  const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  return (
    <>
      <div className="w-full  h-screen  font-abc">
        
         
          
        
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className=''
        >
           <Navbar/>
        
           
          {/* Content or children of the animated div */}
        </motion.div>
        
        


      </div>
    </>
  );
}

export default App;
