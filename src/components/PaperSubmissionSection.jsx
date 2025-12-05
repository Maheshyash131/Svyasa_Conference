// src/components/PaperSubmissionSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { conferenceData } from "../mockData";

export default function PaperSubmissionSection() {
  const guidelines = conferenceData.registration.submissionGuidelines;

  const items = [
    { title: "Length", text: guidelines.length },
    { title: "Copy Editing & Proofreading", text: guidelines.copyEditing },
    { title: "References", text: guidelines.references },
    { title: "Title Page Requirements", text: guidelines.titlePage },
    { title: "Acknowledgements", text: guidelines.acknowledgements },
  ];

  return (
    <motion.section
      id="paper-guidelines"
      style={{ scrollMarginTop: "110px" }}
      className="bg-[#FDEADA] text-[#4A2C00] pt-10 pb-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <FileText className="h-12 w-12 mx-auto text-[#FF7A00]" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF7A00] mt-2 drop-shadow-sm">
            Paper Submission Guidelines
          </h2>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          className="
            rounded-3xl p-8 shadow-xl border border-[#FF7A00]/40
            bg-gradient-to-r from-[#FDE5C9] via-[#FFE4C9] to-[#FFF2DE]
            transition-all duration-300
          "
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Summary */}
        <p className="text-xs md:text-sm font-bold text-center leading-relaxed mb-8 text-[#4A2C00]/90">
         {guidelines.summary.split("\n").map((line, index) => (
             <span key={index}>
            {line}
          <br />
    </span>
  ))}
</p>

          <br />

          {/* FIXED TWO-COLUMN GUIDELINES */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:gap-6">
                
                {/* LEFT — Title */}
                <div className="md:w-1/3 font-bold text-[#FF7A00] text-sm md:text-base">
                  → {item.title}:
                </div>

                {/* RIGHT — Content */}
                <div className="md:w-2/3 text-xs md:text-sm leading-relaxed font-semibold text-[#4A2C00]/90">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <br />

          {/* CTA BUTTON */}
          <div className="text-center mt-10">
            <a
              href={conferenceData.registration.registrationLink}
              target="_blank"
              className="
                inline-block px-8 py-2 rounded-full shadow-md text-sm md:text-base font-semibold text-white
                bg-gradient-to-r from-[#FF7A00] to-[#E76E00]
                hover:scale-105 hover:shadow-xl transition-all duration-300
              "
            >
              link for paper submission {guidelines.onlineSubmissionPlatform}
            </a>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}
