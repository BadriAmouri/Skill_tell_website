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
      title: "Workshops",
      text: "Lorem ipsum dolor sit amet consectetur. Faucibus suspendisse vulputatmontes eget maecenas facilisis varius volutpat. Magna vel libero elit qua pulvinar aenean libero posuere."
    },
    {
      title: "ElectroHub",
      text: "Lorem ipsum dolor sit amet consectetur. Faucibus suspendisse vulputatmontes eget maecenas facilisis varius volutpat. Magna vel libero elit qua pulvinar aenean libero posuere."
    },
    {
      title: "MobAi",
      text: "Lorem ipsum dolor sit amet consectetur. Faucibus suspendisse vulputatmontes eget maecenas facilisis varius volutpat. Magna vel libero elit qua pulvinar aenean libero posuere."
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
