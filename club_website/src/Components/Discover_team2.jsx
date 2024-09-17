import { useState } from "react";
import SwipeCards from "./Animated_cards";

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const textData = [
  {
    title: "Let's change it up a bit",
    subtitle: "Subtitle for the first card",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in error repellat voluptatibus ad.",
  },
  {
    title: "Change starts with a click",
    subtitle: "Subtitle for the second card",
    description:
      "Discover new perspectives with our courses. Each class brings something unique.",
  },
  {
    title: "Find your path",
    subtitle: "Subtitle for the third card",
    description:
      "Explore limitless possibilities and make today a starting point for tomorrow.",
  },
];

const Discover_team2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (newIndex) => {
    if (newIndex >= 0 && newIndex < textData.length) {
      setCurrentIndex(newIndex);
    }
  };

  const currentText = textData[currentIndex] || {};

  return (
    <section className="w-full h-[110vh] mt-[300px] bg-black px-20 py-12 flex flex-col md:flex-row justify-around items-center mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-white font-medium">
          Better every day
        </span>
        <h3 className="text-4xl text-white md:text-6xl font-semibold">
          {currentText.title || "Default Title"}
        </h3>
        <h4 className="text-lg text-white md:text-xl font-semibold">
          {currentText.subtitle || "Default Subtitle"}
        </h4>
        <p className="text-base md:text-lg text-white my-4 md:my-6">
          {currentText.description || "Default description content."}
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <SwipeCards onCardClick={handleCardClick} cardData={cardData} />
    </section>
  );
};

export default Discover_team2;
