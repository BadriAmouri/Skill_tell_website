import React from 'react';
import './App.css';

import { Navbar } from './Components/Navbar';
import Registration from './Views/Registration.jsx';

import { Routes, Route } from 'react-router-dom';


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
       <Routes>
          <Route path="/" element={
             <div className="w-full  h-screen font-abc">   
             <Navbar/>
               </div>
          } />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      
    </>
  );
}

export default App;
