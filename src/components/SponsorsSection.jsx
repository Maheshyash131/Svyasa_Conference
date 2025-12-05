// src/components/SponsorsSection.jsx
import React, { useState } from "react";
import { conferenceData } from "../mockData";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SponsorsSection() {
  const sponsors = conferenceData.sponsors;

  const CARD_WIDTH = 380; // wider card
  const VISIBLE = 3;

  // Infinite loop trick
  const extended = [...sponsors, ...sponsors, ...sponsors];

  const [pos, setPos] = useState(sponsors.length);
  const [animDirection, setAnimDirection] = useState(0);

  const move = (direction) => {
    setAnimDirection(direction);

    setTimeout(() => {
      setPos((prev) => prev + direction);

      setTimeout(() => {
        if (pos + direction <= 0) {
          setPos(sponsors.length);
        }
        if (pos + direction >= sponsors.length * 2) {
          setPos(sponsors.length);
        }
      }, 250);
    }, 10);
  };

  // CLICK DOT → GO TO THAT SLIDE
  const goToSlide = (targetIndex) => {
    const currentIndex = pos % sponsors.length;
    const diff = targetIndex - currentIndex;
    move(diff);
  };

  return (
    <motion.section
      id="sponsors"
      className="bg-[#FFE9D6] py-16 md:py-20 text-[#4A2C00]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* TITLE */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#FF7A00]"
        >
          Sponsors & Partners
        </motion.h2>
      </div>

      {/* SLIDER WITH BUTTONS */}
      <div className="relative flex items-center justify-center w-full px-6 md:px-12">

        {/* LEFT BUTTON */}
        <button
          onClick={() => move(-1)}
          className="absolute left-0 md:left-4 p-3 rounded-full bg-[#FFE3CC] hover:bg-[#FFD1B0] shadow-md z-20 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-[#FF7A00]" />
        </button>

        {/* VIEW WINDOW */}
        <div className="overflow-hidden w-full max-w-7xl">
          <motion.div
            animate={{ x: -(pos * CARD_WIDTH) }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex gap-6"
            style={{ width: extended.length * CARD_WIDTH }}
          >
            {extended.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="
                  w-[300px] sm:w-[340px] md:w-[380px]
                  bg-gradient-to-br from-[#FFF2E6] to-[#FFE1CC]
                  border border-[#FF7A00]/40
                  rounded-2xl p-6 shadow-md cursor-pointer
                  hover:shadow-xl transition-all
                "
              >
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FF7A00]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.p>

                <motion.p
                  className="text-xs sm:text-sm md:text-base text-[#4A2C00]/70 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.role}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => move(1)}
          className="absolute right-0 md:right-4 p-3 rounded-full bg-[#FFE3CC] hover:bg-[#FFD1B0] shadow-md z-20 transition-all"
        >
          <ChevronRight className="h-6 w-6 text-[#FF7A00]" />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-2">
        {sponsors.map((_, i) => {
          const active = (pos % sponsors.length) === i;

          return (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
                h-2 w-2 rounded-full cursor-pointer transition-all duration-300
                ${active ? "bg-[#FF7A00] scale-125" : "bg-[#FFC9A0]"}
              `}
            ></div>
          );
        })}
      </div>
    </motion.section>
  );
}
