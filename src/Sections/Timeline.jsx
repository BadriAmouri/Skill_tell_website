import React, { useState } from 'react';
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';

const Timeline = () => {
  const [focusElement, setFocusElement] = useState(0);

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752",
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

    // Add more objects as needed
  ];
  

  return (
    <div className="w-full  mt-[200px] overflow-hidden h-[200vh] bg-black relative">
      <div className='  w-full flex sm:flex-row flex-col items-center justify-between absolute top-0 left-[-380px] '>
        <FancyCarousel 
          images={images} 
          setFocusElement={setFocusElement}
          carouselRadius={500} // Increased radius for a larger carousel
          peripheralImageRadius={200} // Increased size of peripheral images
          centralImageRadius={150} // Increased size of the central image
          focusElementStyling={{border: '2px solid #ba4949'}}
          autoRotateTime={2}
          borderWidth={4}
          borderHexColor={'#1c364f'}
        />
        <main className="flex flex-col max-w-[400px]">
        <h1 className="text-7xl font-bold leading-[80px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              {info[focusElement].title}
              </h1>
      <section className="flex flex-col  mt-6 w-full">
        <article className="flex flex-col  justify-center w-full">
        <p className="self-stretch mt-4 text-xl tracking-wider leading-6 text-white max-md:max-w-full">
        {info[focusElement].text}
         </p>
         
        </article>
        
      </section>
    </main>
      </div>
    </div>
  );
}

export default Timeline;

