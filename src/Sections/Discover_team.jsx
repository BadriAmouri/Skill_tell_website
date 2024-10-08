import * as React from "react";
import { useState } from "react";
import Discover_team2 from "../Components/Discover_team_Pr";
import { motion } from "framer-motion";

function ImageCard({ src, alt, classNames }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain w-full ${classNames}`}
    />
  );
}

function Discover_team() {
  const [showDiscoverTeam2, setShowDiscoverTeam2] = useState(false);

  const handleButtonClick = () => {
    setShowDiscoverTeam2(true); // Show Discover_team2 when the button is clicked
  };

  if (showDiscoverTeam2) {
    return <Discover_team2 />; // Render Discover_team2 component after the button is clicked
  }
  const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0
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
    <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
        >
    <main className="flex min-h-screen md:h-[110vh] mt-[300px] overflow-hidden flex-col items-center px-16 pt-28 pb-9 bg-black max-md:px-5 max-md:pt-24">
      
      <section className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col items-center mr-0 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[355px]">
                <ImageCard
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
                  alt=""
                  classNames="aspect-[19.61]"
                />
                <ImageCard
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
                  alt=""
                  classNames="mt-8 aspect-[19.61]"
                />
              </div>
            </div>
          </aside>

          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-center text-white max-md:max-w-full">
              <h1 className="text-7xl font-bold leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                Meet our <br /> team
              </h1>
              <p className="mt-6 text-2xl leading-8 w-[433px] max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus
              </p>
            </div>
          </section>

          <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[355px]">
                <ImageCard
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
                  alt=""
                  classNames="aspect-[19.61]"
                />
                <ImageCard
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a30832551c41fa7cf44c87f5d18d799e57edd442ca966cccd4971c1f514d193?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
                  alt=""
                  classNames="mt-8 aspect-[19.61]"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ImageCard
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5ffe782e10402d47655ccd42a5f8b5a508a3127dac22a6c95baf35596188844?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
        alt=""
        classNames="mt-8 ml-6 rounded-none aspect-[2.16] max-w-[1261px] max-md:max-w-full"
      />

      <button
        onClick={handleButtonClick}
        className="flex overflow-hidden flex-col justify-center mt-7 max-w-full text-sm font-medium tracking-normal leading-5 text-center text-orange-100 border border-solid border-zinc-500 min-h-[58px] rounded-[100px]"
      >
        <div className="flex flex-1 gap-2 justify-center items-center py-2.5 pr-6 pl-4 size-full max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35c1c58400ed88bfc53f031e31b61c4e06d23988e6cff130e07816ae74fdf33f?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
          <span className="self-stretch my-auto">Discover our Team</span>
        </div>
      </button>
    </main>
    </motion.div>
  );
}

export default Discover_team;
