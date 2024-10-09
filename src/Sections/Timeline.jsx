import React, { useState, useEffect } from 'react';
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';

const Timeline = () => {
  const [focusElement, setFocusElement] = useState(0);
  const [carouselRadius, setCarouselRadius] = useState(500);
  const [peripheralImageRadius, setPeripheralImageRadius] = useState(200);
  const [centralImageRadius, setCentralImageRadius] = useState(150);

  const images = [
    "/IMG_2716.jpg",
    "/IMG_2715.jpg",
    "/IMG_2713.jpg"
  ];

  const info = [
    {
      title: "Arcade",
      text: "Arcade is the inaugural event of Skill&Tell, featuring a full day packed with fun and challenging activities! Teams compete in various challenges, including math puzzles, programming tasks, the famous scavenger hunt, and other exciting games."
    },
    {
      title: "ElectroHub",
      text: "Electro Hub is an exciting electronics day designed for beginners to dive into the world of Arduino. During this event, participants get hands-on experience learning how to use Arduino and its applications."
    },
    {
      title: "MobAi",
      text: " MobAI is a 3-day hackathon that brings together mobile development, AI, and UI/UX in one exciting event. Participants engage in hands-on workshops to learn the skills they need to tackle the challenges"
    },
    {
      title: "Arcade",
      text: "Lorem ipsum dolor sit amet consectetur. Faucibus suspendisse vulputatmontes eget maecenas facilisis varius volutpat. Magna vel libero elit qua pulvinar aenean libero posuere."
    },
  ];

  useEffect(() => {
    const updateSizes = () => {
      if (window.innerWidth < 768) {
        // Mobile view
        setCarouselRadius(300);
        setPeripheralImageRadius(100);
        setCentralImageRadius(80);
      } else {
        // Web view
        setCarouselRadius(500);
        setPeripheralImageRadius(200);
        setCentralImageRadius(150);
      }
    };

    // Update sizes on component mount and when window is resized
    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
    <div className="w-full mt-[200px] overflow-hidden min-h-screen bg-black relative">
     <div className='w-full flex sm:flex-row flex-col items-center justify-between md:relative'>
  {/* First div - absolute positioning only on larger screens */}
  <div className='absolute top-0 left-[-380px] hidden sm:block'>
    <FancyCarousel 
      images={images}
      setFocusElement={setFocusElement}
      carouselRadius={carouselRadius} // Dynamic value for carousel radius
      peripheralImageRadius={peripheralImageRadius} // Dynamic value for peripheral images
      centralImageRadius={centralImageRadius} // Dynamic value for central image
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={2}
      borderWidth={4}
      borderHexColor={'#1c364f'}
    />
  </div>

  {/* Second div - absolute positioning on small screens */}
  <div className='absolute top-0 left-[-380px] sm:hidden'>
    <FancyCarousel 
      images={images}
      setFocusElement={setFocusElement}
      carouselRadius={carouselRadius} // Dynamic value for carousel radius
      peripheralImageRadius={peripheralImageRadius} // Dynamic value for peripheral images
      centralImageRadius={centralImageRadius} // Dynamic value for central image
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={2}
      borderWidth={4}
      borderHexColor={'#1c364f'}
    />
  </div>

  <div className="min-h-screen  md:w-full mt-[400px] md:mt-[1px] relative flex items-center md:justify-end justify-center md:px-10 md:mr-20">
    <div className="relative w-full max-w-lg">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob z-10"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000 z-10"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#5A189A] rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000 z-10"></div>
      <div className="m-8 relative space-y-4">
        <main className="flex flex-col max-w-[400px]">
          <h1 className="text-7xl font-bold leading-[80px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            {info[focusElement].title}
          </h1>
          <section className="flex flex-col mt-6 w-full">
            <article className="flex flex-col justify-center w-full">
              <p className="self-stretch mt-4 text-xl tracking-wider leading-6 text-white max-md:max-w-full">
                {info[focusElement].text}
              </p>
            </article>
          </section>
        </main>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Timeline;
