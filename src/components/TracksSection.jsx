// src/components/TracksSection.jsx
import React, { useState, useEffect } from "react";
import { conferenceData } from "../mockData";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  // Disable scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = selectedTrack ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedTrack]);

  return (
    <motion.section
      id="tracks"
      className="bg-[#FFE9D6] text-[#4A2C00] pt-8 pb-6 sm:pt-10 sm:pb-10 md:pt-12 md:pb-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[430px] md:max-w-6xl mx-auto px-4">
        
        {/* TITLE */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00]">
            Conference Tracks
          </h2>
        </motion.div>

        {/* TRACK CARDS */}
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {conferenceData.tracks.map((track, index) => (
            <motion.div
              key={track.id}
              onClick={() => setSelectedTrack(track)}
              className="
                cursor-pointer flex flex-col justify-between
                bg-gradient-to-br from-[#FFF5EC] to-[#FFD9B3]
                rounded-3xl border border-[#FF7A00]/50 shadow-lg hover:shadow-xl transition-all duration-300
                w-[90%] mx-auto sm:w-full   /* 🔥 FIXED WIDTH ONLY FOR MOBILE */
                p-4 sm:p-5 md:p-7
                md:min-h-[250px]      /* 🔥 HEIGHT SAME AS BEFORE */
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <span className="inline-block bg-[#FF7A00] px-3 py-[2px] text-[11px] sm:text-xs text-white rounded-full font-semibold">
                  Track {track.id}
                </span>

                <h3 className="text-sm sm:text-lg mt-3 sm:mt-4 font-semibold text-[#FF7A00] leading-snug">
                  {track.title}
                </h3>
              </div>

              <p className="text-[11px] sm:text-sm mt-3 text-[#6A5848]">
                Tap to view more details →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedTrack && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTrack(null)}
          >
            <motion.div
              className="
                bg-gradient-to-br from-[#FFD9B3] via-[#FFF0E2] to-[#FFD9B3]
                text-[#4A2C00] rounded-3xl shadow-2xl border border-[#FF7A00]/50
                w-[85%] max-w-[430px]
                max-h-[75vh] overflow-y-auto
                p-4 md:p-6 relative
              "
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedTrack(null)}
                className="absolute top-3 right-3 text-[#FF7A00] hover:text-[#E76E00]"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>

              <h2 className="text-base sm:text-lg font-bold mb-2 text-[#FF7A00]">
                {selectedTrack.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#6A5848] mb-4 leading-relaxed">
                {selectedTrack.description}
              </p>

              <ul className="space-y-1 text-xs sm:text-sm">
                {selectedTrack.topics.map((topic, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-start"
                  >
                    <span className="text-[#FF7A00] mr-2">•</span>
                    {topic}
                  </motion.li>
                ))}
              </ul>

              <div className="flex justify-center mt-4">
                <motion.a
                  href="#registration"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E76E00] px-4 py-2 text-xs sm:text-sm font-semibold text-white"
                  whileHover={{ scale: 1.07 }}
                >
                  Proceed to Registration
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
