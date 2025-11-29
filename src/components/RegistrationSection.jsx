// src/components/RegistrationSection.jsx
import React, { useState } from "react";
import { conferenceData } from "../mockData";
import { ArrowRightCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegistrationSection() {
  const {
    indiaAuthorCategories,
    includes,
    indexing,
    submissionGuidelines,
    registrationLink,
  } = conferenceData.registration;

  const [showGuidelines, setShowGuidelines] = useState(false);

  return (
    <motion.section
      id="registration"
      className="bg-[#FFE9D6] text-[#4A2C00] pb-8"   // 🚀 FIXED – removed min-h + reduced space
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00] drop-shadow-md">
            Registration
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-[2fr,1.3fr] items-start">
          {/* LEFT CARD */}
          <motion.div
            className="rounded-2xl border border-[#FF7A00]/50 bg-gradient-to-br 
                       from-[#FFF2E6] via-[#FFE1C7] to-[#FFF8EF] shadow-lg p-6
                       transition-all duration-300 hover:shadow-[#FF7A00]/40 hover:-translate-y-1"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-[#FF7A00] mb-4">
              Registration Fees (India)
            </h3>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#FF7A00] text-[#FF7A00]">
                  <th className="py-3 text-left">Category</th>
                  <th className="py-3 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                {indiaAuthorCategories.map((cat, idx) => (
                  <motion.tr
                    key={idx}
                    className="border-b border-[#FFD4AA] hover:bg-[#FFE8D4] transition"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <td className="py-3">{cat.label}</td>
                    <td className="py-3 font-semibold">{cat.fee}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="rounded-2xl border border-[#FF7A00]/50 bg-gradient-to-br 
                       from-[#FFE8D4] via-[#FFF2E6] to-[#FFF8EF] shadow-lg p-6"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-[#FF7A00] mb-4">
              What’s Included?
            </h3>

            <ul className="space-y-2 text-sm mb-6 text-[#4A2C00]">
              {includes.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <ArrowRightCircle className="h-4 w-4 text-[#FF7A00] mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF7A00] 
                           hover:bg-[#E76E00] px-5 py-2 text-xs font-semibold text-white shadow-md"
              >
                Register on EasyChair
              </a>
            </div>
          </motion.div>
        </div>

        {/* BUTTON FIXED (NO EMPTY SPACE BELOW) */}
        <motion.div
          className="text-center mt-6 mb-2"   // 🔥 final spacing
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowGuidelines(true)}
            className="rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E76E00] 
                       px-6 py-2 text-sm font-semibold text-white shadow-md hover:scale-105"
          >
            View Submission Guidelines
          </button>
        </motion.div>
      </div>

      {/* MODAL (UNCHANGED) */}
      <AnimatePresence>
        {showGuidelines && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGuidelines(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-[#FFE4CC] via-[#FFF5EA] to-[#FFE4CC] rounded-3xl 
                         w-[90%] max-w-[600px] h-[75vh] overflow-y-auto shadow-2xl p-6 
                         border border-[#FF7A00]/50 relative"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowGuidelines(false)}
                className="absolute top-4 right-4 text-[#FF7A00]"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="text-2xl font-bold text-center text-[#FF7A00] mb-4">
                Submission Guidelines
              </h2>

              <ul className="text-sm list-disc pl-5 space-y-1">
                {indexing.services.map((service, i) => <li key={i}>{service}</li>)}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
