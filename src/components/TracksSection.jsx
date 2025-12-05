// src/components/TracksSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { conferenceData } from "../mockData";
import { X } from "lucide-react";

export default function TracksSection() {
  const [activeTrack, setActiveTrack] = useState(null);

  return (
    <>
      <motion.section
        id="tracks"
        style={{ scrollMarginTop: "90px" }}
        className="bg-[#FFE9D6] text-[#4A2C00] pt-20 pb-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* TITLE */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#FF7A00] drop-shadow-md text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Conference Tracks
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {conferenceData.tracks.slice(0, 2).map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.04,
                  y: -10,
                  boxShadow: "0 22px 40px rgba(255,122,0,0.35)",
                }}
              className="
  relative rounded-2xl p-8 shadow-md border border-[#FF7A00]/30
  bg-gradient-to-br from-[#FFF5EB] via-[#FFE4C6] to-[#FFD4A6]
  max-w-md mx-auto
"

              >
                {/* HEADER */}
                <div>
                  <span className="inline-block bg-[#FF7A00] text-white px-4 py-1 text-xs font-bold rounded-full shadow-md">
                    Track {track.id}
                  </span>

                  <h3 className="text-2xl font-bold text-[#FF7A00] mt-4">
                    {track.title}
                  </h3>

                  <p className="text-[#6A5848] text-sm mt-3 leading-relaxed font-medium">
                    {track.description}
                  </p>
                </div>

                {/* OPEN MODAL BUTTON */}
                <div className="mt-6 flex justify-center">
                  <motion.button
                    onClick={() => setActiveTrack(track)}
                    className="
                      bg-[#FF7A00] text-white px-5 py-2 rounded-full 
                      font-semibold text-sm shadow-md
                    "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====================== MODAL POPUP ======================= */}
      <AnimatePresence>
        {activeTrack && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                bg-gradient-to-b from-[#FFF2E2] to-[#FFE2C4]
                rounded-3xl p-10 max-w-2xl w-[92%]
                shadow-2xl relative overflow-y-auto max-h-[85vh]
                border border-[#FF7A00]/40
              "
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveTrack(null)}
                className="absolute top-4 right-4 text-[#FF7A00] hover:text-black transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* MODAL CONTENT */}
              <h2 className="text-3xl font-extrabold text-[#FF7A00] leading-tight mb-3">
                {activeTrack.title}
              </h2>

              <p className="text-sm text-gray-800 leading-relaxed mb-6 font-semibold">
                {activeTrack.description}
              </p>

              <h3 className="text-xl font-bold text-[#FF7A00] mb-4">
                Topics Covered
              </h3>

              <ul className="space-y-3">
                {activeTrack.topics.map((topic, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-[15px] text-gray-900 font-semibold"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <span className="text-[#FF7A00] mr-2 text-lg leading-none">•</span>
                    {topic}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex justify-end">
                <motion.button
                  onClick={() => setActiveTrack(null)}
                  className="
                    bg-[#FF7A00] text-white px-6 py-2 rounded-full
                    text-sm font-bold shadow-md
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Close
                </motion.button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
