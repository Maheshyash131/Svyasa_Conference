// src/components/HeroSection.jsx
import React, { useCallback, useEffect, useRef } from "react";
import { Calendar, MapPin, Mail, ArrowRight } from "lucide-react";
import { conferenceData } from "../mockData";
import ConferenceImage from "../assets/conference_landscape.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToRegistration = useCallback(() => {
    const el = document.querySelector("#registration");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("animate-hero");
        else el.classList.remove("animate-hero");
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const leftAnim = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      <style>
        {`
          @keyframes heroReveal {
            from { opacity: 0; transform: translateY(40px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-hero { animation: heroReveal 0.8s ease-out forwards; }
        `}
      </style>

      <section
        id="home"
        ref={sectionRef}
        className="bg-[#FFE9D6] text-[#4A2C00] flex items-start"
      >
        <div
          className="
            w-full max-w-7xl mx-auto px-4
            py-2 md:py-7  
            grid gap-6 md:gap-14 grid-cols-1 md:grid-cols-2 items-start
          "
        >
          {/* IMAGE FIRST ON MOBILE */}
          <motion.div
            className="relative flex justify-center md:justify-end order-1 md:order-2"
            variants={rightAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="w-full max-w-[380px] md:max-w-[520px] rounded-2xl overflow-hidden shadow-xl border border-[#FF7A00]/30">
              <motion.img
                src={ConferenceImage}
                alt="Conference Highlights"
                className="
                  w-full 
                  h-[300px]    
                  sm:h-[360px] 
                  md:h-[580px] 
                  object-cover
                "
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </motion.div>

          {/* CONTENT BELOW */}
          <motion.div
            className="space-y-4 md:space-y-6 text-left order-2 md:order-1"
            variants={leftAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full bg-[#FF7A00]/20 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-[#FF7A00] uppercase">
              {conferenceData.code}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-[#FF7A00]">{conferenceData.title.split(" ")[0]}</span>{" "}
              <span>{conferenceData.title.split(" ").slice(1).join(" ")}</span>
            </h1>

            <p className="text-sm sm:text-base text-[#4A2C00]/80 font-semibold leading-relaxed max-w-2xl">
              {conferenceData.about.description}
            </p>

            <p className="text-sm sm:text-base text-[#4A2C00] font-semibold leading-relaxed max-w-2xl">
              {conferenceData.about.highlight}
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-[#FFF5EC] border border-[#FF7A00]/50 rounded-full px-3 py-1">
                <Calendar className="h-4 w-4 text-[#FF7A00]" />
                <span className="font-semibold text-[#FF7A00]">{conferenceData.dates}</span>
              </div>

              <div className="flex items-center gap-2 bg-[#FFF5EC] border border-[#FF7A00]/50 rounded-full px-3 py-1">
                <Mail className="h-4 w-4 text-[#FF7A00]" />
                <a href={`mailto:${conferenceData.email}`} className="underline font-semibold text-[#FF7A00]">
                  {conferenceData.email}
                </a>
              </div>
            </div>

            <div className="inline-flex gap-2 bg-[#FFF5EC] border border-[#FF7A00]/50 rounded-3xl px-3 py-1 items-center w-fit">
                <MapPin className="h-4 w-4 text-[#FF7A00]" />
                   <span className="font-semibold text-[#FF7A00] whitespace-pre-line leading-tight pt-[1px]">
                       {conferenceData.location}
                  </span>
            </div>


            {/* BUTTONS */}
            <div className="flex flex-row gap-3 pt-4 w-full">
              <button
                onClick={scrollToRegistration}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E76E00] px-4 py-3 text-sm text-white hover:from-[#E76E00] hover:to-[#FF5500] transition-all duration-200 shadow-lg"
              >
                Register Now
                <ArrowRight className="h-4 w-4 transition" />
              </button>

              <a
                href="#tracks"
                className="flex-1 inline-flex items-center text-center justify-center gap-2 rounded-full border border-[#FF7A00] px-4 py-3 text-sm text-[#FF7A00] hover:text-[#E76E00] transition-all"
              >
                View Conference Tracks
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
