// src/components/CommitteeSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { conferenceData } from "../mockData";

export default function CommitteeSection() {
  const { committees } = conferenceData;
  const departmentEntries = Object.entries(committees);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedDepartment ? "hidden" : "auto";
  }, [selectedDepartment]);

  const baseLimit = isMobile ? 8 : 9;
  const visibleDepartments =
    !showAll && departmentEntries.length > baseLimit
      ? departmentEntries.slice(0, baseLimit)
      : departmentEntries;

  const shouldShowToggle = departmentEntries.length > baseLimit;

  return (
    <motion.section
      id="committee"
      ref={sectionRef}
      style={{ scrollMarginTop: "110px" }}   // 🔥 FIX 1: Scroll from top
      className="bg-[#FFE9D6] text-[#4A2C00] pt-10 pb-20"  // 🔥 FIX 2: Added bottom spacing
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* TITLE */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00] drop-shadow-md">
            Conference Committees
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDepartments.map(([title, members], idx) => (
            <motion.div
              key={idx}
              onClick={() => setSelectedDepartment({ title, members })}
              className="
                cursor-pointer p-6 rounded-3xl text-center
                bg-[#FFE0C4] shadow-md border border-[#FF8C00]/50 
                hover:shadow-lg hover:scale-[1.03] transition-all duration-300
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-center text-[#FF7A00]">
                {title.replace(/(?!^)([A-Z])/g, " $1").toUpperCase()}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* SEE MORE / SEE LESS */}
        {shouldShowToggle && (
          <div className="text-center mt-6">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-2 rounded-full 
                bg-gradient-to-r from-[#FF7A00] to-[#E76E00] 
                text-white text-sm font-medium transition
              "
            >
              {showAll ? "See Less ↑" : "See More →"}
            </motion.button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedDepartment && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDepartment(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="
                bg-gradient-to-br from-[#FFD9B3] via-[#FFF0E2] to-[#FFD9B3]
                rounded-3xl w-[90%] max-w-[450px] h-[70vh] overflow-y-auto 
                shadow-2xl p-6 border border-[#FF7A00]/60 relative
              "
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedDepartment(null)}
                className="absolute top-4 right-4 text-[#FF7A00] hover:text-[#E76E00] bg-[#FFF7ED] rounded-full p-1"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="text-xl font-bold text-center mb-5 text-[#FF7A00]">
                {selectedDepartment.title.replace(/([A-Z])/g, " $1").toUpperCase()}
              </h2>

              <div className="space-y-4">
                {selectedDepartment.members.map((member, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-[#FFF7ED] p-4 rounded-xl border border-[#FF7A00]/30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-sm font-semibold">{member.name}</p>

                    {/* PROFESSION (optional) */}
                    {member.profession && (
                      <p className="text-xs text-[#6A3A00]  font-medium">{member.profession}</p>
                    )}

                    {/* COLLEGE SPLIT INTO MULTIPLE LINES */}
                    {member.college && (
                      <div className="mt-1">
                        {member.college.split(",").map((line, i) => (
                          <p
                            key={i}
                            className="text-xs font-semibold text-[#FF7A00]"
                          >
                            {line.trim()}
                          </p>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
