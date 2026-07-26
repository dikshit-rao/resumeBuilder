"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

const fakeData = [
  { 
    "id": 1, 
    "name": "Toshi Chauhan", 
    "designation": "SDE 2", 
    "color":"text-green-500",
    "content": "This resume builder is a game-changer! It helped me create a professional resume in minutes with stunning templates." 
  },
  { 
    "id": 2, 
    "name": "Vivek Pandey", 
    "designation": "Software Developer",
    "color":"text-blue-500", 
    "content": "A fantastic tool for job seekers! The ATS-friendly templates ensure my resume stands out in applications." 
  },
  { 
    "id": 3, 
    "name": "Natasha", 
    "designation": "Marketing Specialist",
    "color":" text-pink-500 ",
    "content": "I love how easy and intuitive this platform is. The customization options make it perfect for any profession." 
  }
];

export const CardStack = ({ offset, scaleFactor }) => {
  const colors = ["text-blue-500", "text-green-500", "text-red-500"];
  const CARD_OFFSET = offset || 5;
  const SCALE_FACTOR = scaleFactor || 0.1;
  const [cards, setCards] = useState(fakeData);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-[#eff2fa] h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-400 shadow-black/[0.1] flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-[#46464e]">{card.content}</div>
          <div>
            <p className={`${card.color} font-medium`}>{card.name}</p>
            <p className="text-neutral-400 font-normal">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

