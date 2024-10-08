import { useState } from "react";
import SwipeCards from "./Animated_cards";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Discover_team_Communication from "./Discover_team_Communication";

const cardData = [
  { id: 1, url: "/photo_5908831838095393989_y.jpg" },
  { id: 2, url: "/IMG_0891.JPG" },
  { id: 3, url: "/photo_5918014156051695378_y.jpg" },
  { id: 4, url: "/IMG_2191.jpg" },
];

const textData = [
  {
    title: "President",
    subtitle: "ABDELHAK CHALAL",
    description: "The visionary leader who oversees club operations and represents our club with pride.",
  },
  {
    title: "SG",
    subtitle: "Chahinez Khaled",
    description: "The organized communicator, maintaining records and ensuring effective correspondence.",
  },
  {
    title: "HR",
    subtitle: "Soumia Bouaouina",
    description: "Recruit talented individuals, foster a positive and inclusive work environment, and manage all HR operations to ensure our team thrives.",
  },
  {
    title: "Vice President",
    subtitle: "AMEL FEDAG",
    description: "The supportive second-in-command, ensuring projects run smoothly and ensuring dynamic growth within the club.",
  },
];

const Discover_team2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedCards, setClickedCards] = useState([]); // Track clicked cards
  const [showCommunicationSection, setShowCommunicationSection] = useState(false); // Control section visibility

  const handleCardClick = (newIndex) => {
    if (newIndex >= 0 && newIndex < textData.length) {
      setCurrentIndex(newIndex);

      if (!clickedCards.includes(newIndex)) {
        const updatedClickedCards = [...clickedCards, newIndex];
        setClickedCards(updatedClickedCards);

        if (updatedClickedCards.length === cardData.length) {
          setShowCommunicationSection(true);
        }
      }
    }
  };
  const handleButtonClick = () =>{
  setShowCommunicationSection(true);
  }

  const currentText = textData[currentIndex] || {};

  if (showCommunicationSection) {
    return <Discover_team_Communication />; 
  }

  return (
    
    <section className="w-full relative h-[110vh] mt-[300px]  px-20 py-12 flex flex-col md:flex-row  justify-around items-center mx-auto">
      <div class="bg-black min-h-screen flex items-center justify-center px-16">
  <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob z-10"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000 z-10"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000 z-10"></div>
    <div class="m-8 relative space-y-4">
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
        <button onClick={handleButtonClick}
         type="button" class="text-white bg-purple-700 mt-8 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
 Discover Communication Team 
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
      </div>
    </div>
  </div>
</div>

     

      <SwipeCards onCardClick={handleCardClick} cardData={cardData} />
      <div className="absolute flex justify-center gap-10 top-40 ">
        <h1 className="text-4xl md:text-4xl font-semibold">Click here</h1>
        <img
          src="/curved-arrow-svgrepo-com.svg"
          alt="Curved Arrow"
          className="w-20 h-20"
        />
      </div>
    </section>
  );
};

export default Discover_team2;
