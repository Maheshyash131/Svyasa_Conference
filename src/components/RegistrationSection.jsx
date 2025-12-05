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
      style={{ scrollMarginTop: "110px" }}   // ⭐ FIX: show from top on navigate
      className="bg-[#FFE9D6] text-[#4A2C00] pt-20 pb-12"
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

            {/* ❌ REMOVED Register on EasyChair button (AS REQUESTED) */}
          </motion.div>
        </div>

        {/* BUTTON */}
        <motion.div
          className="text-center mt-6 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => {
              // ⭐ Navigate to PaperSubmission
              document.querySelector("#paper-guidelines")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E76E00] 
                       px-6 py-2 text-sm font-semibold text-white shadow-md hover:scale-105"
          >
            View Submission Guidelines
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
