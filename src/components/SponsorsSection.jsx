// src/components/SponsorsSection.jsx
import React, { useState } from "react";
import { conferenceData } from "../mockData";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SponsorsSection() {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  // Animation variants (clean & professional)
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.15, // stagger effect
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="sponsors"
      className="bg-[#FFE9D6] py-16 md:py-20 text-[#4A2C00] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* TITLE */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00]">Sponsors & Partners</h2>
      </motion.div>

      {/* 🔥 Same Scroll for All Devices — Clean Animations */}
      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar-x gap-6 px-4 py-6">
        {conferenceData.sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              min-w-[300px] md:min-w-[360px] lg:min-w-[400px]
              bg-gradient-to-br from-[#FFF2E6] to-[#FFE1CC]
              border border-[#FF7A00]/40 rounded-2xl shadow-md p-6 text-center 
              cursor-pointer snap-center
              transition-all duration-300
            "
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 25px rgba(255,122,0,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSponsor(sponsor)}
          >
            <p className="text-xl md:text-2xl font-semibold text-[#FF7A00]">
              {sponsor.name}
            </p>
            <p className="text-sm md:text-base text-[#4A2C00]/70 mt-2">
              {sponsor.role}
            </p>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedSponsor && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center p-4 z-50"
            onClick={() => setSelectedSponsor(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-[#FFDAB8] via-[#FFE7CC] to-[#FFF8EF] border border-[#FF7A00]/60 max-h-[75vh] overflow-y-auto"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedSponsor(null)}
                className="absolute top-4 right-4 text-[#FF7A00] hover:text-[#E76E00]"
              >
                <X className="h-6 w-6" />
              </button>

              {/* MODAL CONTENT */}
              <h2 className="text-2xl font-bold text-center text-[#FF7A00] mb-4">
                {selectedSponsor.name}
              </h2>
              <p className="text-sm text-[#4A2C00] text-center mb-4">
                <span className="font-semibold text-[#FF7A00]">Role:</span>{" "}
                {selectedSponsor.role}
              </p>

              {selectedSponsor.website && (
                <div className="flex justify-center">
                  <motion.a
                    href={selectedSponsor.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#FF7A00] hover:bg-[#E76E00] px-6 py-2 rounded-full text-white text-sm shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
