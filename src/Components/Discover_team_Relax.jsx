import { useState } from "react";
import SwipeCards from "./Animated_cards";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Discover_team_Itdesign from "./Discover_team_Itdesign"; // Import the IT Design component

const cardData = [
  {
    id: 1,
    url: "/photo_5809771157602288802_y.jpg",
  },
  
  {
    id: 3,
    url: "/photo_5913313761022822400_y.jpg",
  },
];

const textData = [
  {
    title: "External Relations (Relex) Leader",
    subtitle: "Moussa Boussekine",
    description:
      "Managing the two relex subdepartments to build and maintain strong partnerships with external organizations and stakeholders, enhancing our club's outreach and influence.",
  },
  {
    title: "RELEX _coordination  Leader",
    subtitle: "Fatima-Zohra Lilia  Amieur",
    description:
      "Is responsible for coordinating between the club and external partners (clubs, institutes, events...) assuring a great contact list for the club.",
  },
];

const Discover_team_Relax = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedCards, setClickedCards] = useState([]); // State to track clicked cards

  const handleCardClick = (newIndex) => {
    if (newIndex >= 0 && newIndex < textData.length) {
      setCurrentIndex(newIndex);

      // Check if the clicked card is already tracked, if not, add it to the clickedCards state
      if (!clickedCards.includes(newIndex)) {
        setClickedCards((prev) => [...prev, newIndex]);
      }
    }
  };

  const currentText = textData[currentIndex] || {};

  // Check if all cards are clicked by comparing the length of clickedCards and cardData
  const allCardsClicked = clickedCards.length === cardData.length;

  if (allCardsClicked) {
    // Render Discover_team_Itdesign only if all cards are clicked
    return <Discover_team_Itdesign />;
  }

  return (
    <section className="w-full  h-auto overflow-hidden md:h-[110vh] mt-[300px] gap-5   py-12 flex flex-col md:flex-row justify-around items-center mx-auto">
      <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob z-10"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000 z-10"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-[#5A189A] rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000 z-10"></div>
    <div class="m-8 relative space-y-4">
    <div>
    <div>
        <span className="block mb-4 text-xs md:text-sm text-white font-medium">
          the Skill&Tell Team
        </span>
        <h3 className="text-4xl text-white md:text-6xl font-semibold">
          {currentText.title || "Default Title"}
        </h3>
        <h4 className="text-lg  text-purple-800 md:text-xl font-semibold">
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
          Discover Dev & Design  Team
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>

    </div>
  </div>
  </div>
     
      <SwipeCards onCardClick={handleCardClick} cardData={cardData} />
    </section>
  );
};

export default Discover_team_Relax;
