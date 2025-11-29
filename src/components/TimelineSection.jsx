// src/components/TimelineSection.jsx
import React from "react";
import { conferenceData } from "../mockData";
import { motion } from "framer-motion";

export default function TimelineSection() {
  return (
    <>
      {/* 🔒 Hide scrollbar only inside table wrapper */}
      <style>
        {`
          #timeline .timeline-wrapper::-webkit-scrollbar { display: none; }
          #timeline .timeline-wrapper { scrollbar-width: none; }
        `}
      </style>

      <motion.section
        id="timeline"
        className="
          bg-[#FFE9D6] text-[#4A2C00]
          py-16 sm:py-20 md:py-24        /* 🔥 Desktop unchanged, mobile reduced */
        "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-[430px] md:max-w-6xl mx-auto px-4">

          {/* 🔶 TITLE */}
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00]">
              Conference Timeline
            </h2>
          </motion.div>

          {/* 🔶 TIMELINE TABLE (Mobile visible - Desktop same) */}
          <motion.div
            className="
              timeline-wrapper shadow-md rounded-2xl
              border border-[#FF7A00]/40 overflow-hidden

              /* 🔥 MOBILE: FULL HEIGHT VISIBLE */
              max-h-none

              /* 🔥 DESKTOP: KEEP LIMITED HEIGHT */
              md:max-h-[60vh]
            "
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <table className="w-full text-xs sm:text-sm md:text-base table-auto">
              <thead className="bg-gradient-to-r from-[#FF7A00] to-[#E76E00] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold text-left">Sr.</th>
                  <th className="px-4 py-3 font-semibold text-left">Timeline Event</th>
                  <th className="px-4 py-3 font-semibold text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {conferenceData.timeline.map((item, index) => (
                  <motion.tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#FFF5EC]" : "bg-[#FFECD9]"
                    } ${
                      index === conferenceData.timeline.length - 1
                        ? "border-none"
                        : "border-b border-[#FF7A00]/20"
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <td className="px-4 py-3 font-semibold text-[#FF7A00]">{index + 1}</td>
                    <td className="px-4 py-3">{item.label}</td>
                    <td className="px-4 py-3 font-semibold text-[#FF7A00]">{item.date}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
