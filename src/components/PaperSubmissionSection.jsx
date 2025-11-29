// src/components/PaperSubmissionSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { conferenceData } from "../mockData";

export default function PaperSubmissionSection() {
  const guidelines = conferenceData.registration.submissionGuidelines;

  return (
    <motion.section
      id="paper-guidelines"
      className="bg-[#FDEADA] text-[#4A2C00] pt-10 pb-10"  // 🔥 Reduced bottom spacing
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 🔶 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FileText className="h-12 w-12 mx-auto text-[#FF7A00]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00] mt-3 drop-shadow-sm">
            Paper Submission Guidelines
          </h2>
        </motion.div>

        {/* 📦 BOX */}
        <motion.div
          className="
            rounded-2xl p-8 shadow-xl border border-[#FF7A00]/40
            bg-gradient-to-r from-[#FDE5C9] via-[#FFE4C9] to-[#FFF2DE]
            hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
          "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base leading-relaxed mb-6">
            {guidelines.summary}
          </p>

          <ul className="space-y-4 text-sm md:text-base">
            <li><span className="font-bold text-[#FF7A00]">→ Length:</span> {guidelines.length}</li>
            <li><span className="font-bold text-[#FF7A00]">→ Copy Editing & Proofreading:</span> {guidelines.copyEditing}</li>
            <li><span className="font-bold text-[#FF7A00]">→ References:</span> {guidelines.references}</li>
            <li><span className="font-bold text-[#FF7A00]">→ Title Page Requirements:</span> {guidelines.titlePage}</li>
          </ul>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href={conferenceData.registration.registrationLink}
              target="_blank"
              className="
                inline-block px-8 py-3 rounded-full shadow-md text-sm font-semibold text-white
                bg-gradient-to-r from-[#FF7A00] to-[#E76E00] hover:scale-105 hover:shadow-xl transition-all duration-300
              "
            >
              Submit via {guidelines.onlineSubmissionPlatform}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
