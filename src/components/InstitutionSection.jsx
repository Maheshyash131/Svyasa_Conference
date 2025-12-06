// src/components/InstitutionSection.jsx
import React, { useState, useCallback } from "react";
import { MapPin, Navigation, Building2 } from "lucide-react";
import { conferenceData } from "../mockData";
import CollegeImage from "../assets/college.jpg";
import { motion } from "framer-motion";

export default function InstitutionSection() {
  const [activeTab, setActiveTab] = useState("campus");

  const mapLink =
    conferenceData?.contact?.mapLink ||
    conferenceData?.contact?.googleMapsUrl ||
    "#contact";

  const scrollToContact = useCallback(() => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <motion.section
      id="institution"
      className="bg-[#FFE9D6] text-[#4A2C00] py-14 sm:py-16 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[430px] md:max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">

        {/* TITLE */}
        <motion.div
          className="md:col-span-2 text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00] drop-shadow-md">
            SVYASA - INSTITUTION
          </h2>
        </motion.div>

        {/* LEFT COLUMN — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="
              rounded-3xl overflow-hidden shadow-md shadow-[#FF7A00]/30 w-full
              h-auto               /* 🔥 MOBILE BIG — NO CONGESTION */
              md:aspect-[4/3] md:h-full   /* 🔥 DESKTOP UNCHANGED */
              hover:-translate-y-1 transition-all duration-300
            "
          >
            <img src={CollegeImage} alt="College Campus" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN — CONTENT BOX */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* BACKGROUND EFFECT */}
          <div className="absolute -inset-2 bg-gradient-to-br from-[#FF7A00]/10 via-[#FF7A00]/30 to-[#FFF5E6] blur-xl opacity-70 pointer-events-none" />

          <div
            className="
              relative rounded-3xl border border-[#FF7A00]
              bg-gradient-to-br from-[#FFF0DB] via-[#FFD9B8] to-[#FFF5E6]
              shadow-xl overflow-hidden transition-all duration-300
              h-auto                    /* 🔥 SPACIOUS MOBILE */
              md:aspect-[4/3] md:h-full   /* 🔥 DESKTOP SAME */
              hover:-translate-y-1 hover:shadow-[#FF7A00]/40
            "
          >
            <div className="h-auto flex flex-col justify-between p-6">

              {/* HEADING */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFF0DB] border border-[#FF7A00]/50">
                    <Building2 className="h-4 w-4 text-[#FF7A00]" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#FF7A00]">Campus Overview</p>
                    <p className="text-sm font-semibold text-[#4A2C00]">School of Advanced Studies, S-VYASA (Deemed to be University)</p>
                  </div>
                </div>

                {/* TABS */}
                <div className="inline-flex rounded-full bg-[#FFE7CC] border border-[#FF7A00]/50 p-1 text-[0.7rem]">
                  {["campus", "Highlights", "yoga"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-full transition-all ${
                        activeTab === tab
                          ? "bg-[#FF7A00] text-white shadow-md"
                          : "text-[#FF7A00] hover:bg-[#FFD4AA]"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* TAB CONTENT */}
                <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {activeTab === "campus" && (
                    <ul className="space-y-3 text-[11px] sm:text-sm">
                   <li>• Discover the transformative power of education at S-VYASA.</li> 
                   <li>• Explore diverse programs, from undergraduate to Ph.D., that blend tradition with modern advancements.</li>
                   <li>• At S-VYASA University, we prepare you to launch your career by providing a supportive, creative, and professional environment.</li>
                   <li>• Learn practical skills, build a network of industry contacts, and gain real-world experience.</li>
                    </ul>
                  )}
                  {activeTab === "Highlights" && (
                    <ul className="space-y-3 text-[11px] sm:text-sm">
                      <li>• Programs for Every Passion – From AI to Clinical Psychology, discover programs tailored to industry demands.</li>
                      <li>• Campus Advantage – Located in Sattva Global City IT Park for unparalleled industry exposure.</li>
                      <li>• Holistic Approach – Integration of yoga, wellness, and academic excellence for balanced learning.</li>
                      <li>• Global Opportunities – Industry partnerships ensuring top placements and internships.</li>

                    </ul>
                  )}
                  {activeTab === "yoga" && (
                    <ul className="space-y-3 text-[11px] sm:text-sm">
                     <li>• S-VYASA University is committed to promoting Yoga and Wellness as a core part of academic and campus life.</li>
                     <li>• The university blends ancient yogic traditions with modern scientific research to provide a structured approach to holistic health.</li>
                     <li>• Students are encouraged to embrace yoga not just as a practice but as a way of life.</li>
                     <li>• This approach fosters physical, mental, and spiritual well-being.</li>

                    </ul>
                  )}
                </motion.div>
              </div>

              {/* FOOTER BUTTONS */}
              <div className="flex gap-3 text-xs mt-3">
                <a href={mapLink} target="_blank" className="bg-[#FF7A00] hover:bg-[#E76E00] text-white px-4 py-2 rounded-full font-semibold shadow-md shadow-[#FF7A00]/40 transition">
                  View on Map
                </a>
                <button onClick={scrollToContact} className="border border-[#FF7A00] text-[#4A2C00] hover:bg-[#FFD4AA] px-4 py-2 rounded-full transition">
                  Contact Details
                </button>
              </div>
            </div>
          </div>

          {/* OUTLINE BORDER */}
          <div className="absolute inset-4 rounded-3xl border border-dashed border-[#FF7A00] pointer-events-none" />
        </motion.div>
      </div>
    </motion.section>
  );
}
