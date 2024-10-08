import { useState } from "react";
import SwipeCards from "./Animated_cards";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    url:"/photo_5906584608126910973_y.jpg"

  },
  {
    id: 2,
    url: "/photo_5904430956905875765_y.jpg",
   
  },
  {
    id: 3,
    url:"/photo_5911534961662477008_y.jpg"
  },
];

const textData = [
  {
    title: "Events Department Manager",
    subtitle: "Nour El Yakine Guendouz",
    description:"oversee the entire events department, coordinate team efforts, and ensure our club events are unforgettable and successful."
  },
  {
    title: "Planning Events Manager",
    subtitle: "Maissa Alioua",
    description: "design and plan exciting events, manage schedules, and collaborate with various teams to bring creative ideas to life."
  },
  {
    title: "Logistics Manager",
    subtitle: "Rosa Aouiguer",
    description: " handle all logistical aspects of events, including venue setup, equipment, and supplies, ensuring everything runs smoothly and efficiently."
  },
];

const Discover_team_event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedCards, setClickedCards] = useState([]); // Track clicked cards
  

  const handleCardClick = (newIndex) => {
    if (newIndex >= 0 && newIndex < textData.length) {
      setCurrentIndex(newIndex);

      // Add the card to the clickedCards array if it's not already there
      if (!clickedCards.includes(newIndex)) {
        setClickedCards([...clickedCards, newIndex]);
      }
    }
  };

  // Check if all cards have been clicked

  const currentText = textData[currentIndex] || {};

 
  
  return (
    <section className="w-full h-auto md:h-[110vh] mt-[300px]  px-20 py-12 flex flex-col md:flex-row justify-around items-center mx-auto">
      <div className="relative w-full max-w-lg">
     <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob z-10"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000 z-10"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000 z-10"></div>
      <div className="m-8 relative space-y-4">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-white font-medium">
          The Skill&Tell Team
        </span>
        <h3 className="text-4xl text-white md:text-6xl font-semibold">
          {currentText.title || "Default Title"}
        </h3>
        <h4 className="text-lg text-purple-800 md:text-xl font-semibold">
          {currentText.subtitle || "Default Subtitle"}
        </h4>
        <p className="text-base md:text-lg text-white my-4 md:my-6">
          {currentText.description || "Default description content."}
        </p>
        <div className="flex mt-1 gap-5">
          <FaFacebook size={30} color="white" />
          <FaInstagram size={30} color="white" />
          <FaLinkedin size={30} color="white" />
        </div>
        <button
          type="button"
          className="text-white bg-purple-700 mt-8 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
         Join our  Team 
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
        </div>
        </div>
     
      <SwipeCards onCardClick={handleCardClick} cardData={cardData} />
    </section>
  );
};

export default Discover_team_event;
