import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = ({ onCardClick, cardData }) => {
  const [cards, setCards] = useState(cardData);
  const [clickedCardId, setClickedCardId] = useState(null);

  const handleClick = (id, index) => {
    setClickedCardId(id);
    setTimeout(() => {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      setClickedCardId(null); 
    }, 500); // Duration of the slide-out animation

    onCardClick(index); // Call the function to change text
  };

  return (
    <div className="relative grid h-[500px] w-full place-items-center">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          handleClick={() => handleClick(card.id, index)}
          isClicked={clickedCardId === card.id}
          index={index}
          cardData={cardData}
        />
      ))}
    </div>
  );
};

const Card = ({ card, handleClick, isClicked, index, cardData }) => {
  const { id, url } = card;
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cardData[cardData.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : index % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="absolute h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-pointer"
      style={{
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
        transform: isClicked
          ? `translateX(-100vw) rotate(${index * 2}deg)`
          : `rotate(${index * 2}deg)`,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
        opacity: isClicked ? 0 : 1,
      }}
      onClick={handleClick}
    />
  );
};

export default SwipeCards;
