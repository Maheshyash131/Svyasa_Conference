// src/components/AboutSection.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { conferenceData } from "../mockData";

// Images
import SvyasaImg from "../assets/svasya.png";
import ScsaImg from "../assets/scsa.png";

export default function AboutSection() {
  const [activeModal, setActiveModal] = useState(null);
  const imageMap = [SvyasaImg, ScsaImg]; // Only two cards

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeModal]);

  return (
    <section
      id="about"
      className="bg-[#FFE9D6] text-[#4A2C00] py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A00]">
            About the Conference
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          className="max-w-3xl mx-auto text-sm md:text-base font-semibold text-[#6A5848] text-center px-2 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {conferenceData.about.description}
        </motion.p>
      <br />
         <motion.p
          className="max-w-3xl mx-auto text-sm md:text-base font-bold text-[#6A5848] text-center px-2 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {conferenceData.about.highlight}
        </motion.p>



        {/* CENTERED TWO CARD LAYOUT */}
        <div className="flex justify-center gap-10 mt-12 flex-wrap">

          {conferenceData.about.sections.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              onClick={() =>
                setActiveModal({ ...item, img: imageMap[index] })
              }
              className="
                cursor-pointer rounded-3xl overflow-hidden border border-[#FF7A00]/40
                shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
                bg-gradient-to-br from-[#FFF5EC] to-[#FFD9B3]
                w-[320px] flex flex-col
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* IMAGE */}
              <div className="w-full flex justify-center bg-white py-6">
                <img
                  src={imageMap[index]}
                  alt={item.title}
                  className="h-48 object-contain"
                />
              </div>

              {/* FIXED HEIGHT TITLE AREA FOR PERFECT ALIGNMENT */}
              {/* <div className="h-20 flex items-center justify-center px-4 text-center">
                <span className="text-base font-semibold text-[#800000]">
                  {item.title}
                </span>
              </div> */}

              {/* BUTTON INSIDE CONTAINER — CENTERED */}
              <div className="pb-4 flex justify-center mt-4">
                <button
                  onClick={() =>
                    setActiveModal({ ...item, img: imageMap[index] })
                  }
                  className="
                    px-4 py-2 
                    bg-[#FF7A00] text-white font-medium rounded-full 
                    hover:bg-[#E76E00] transition-all shadow
                  "
                >
                  Click to know more
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="
                bg-gradient-to-br from-[#FFD9B3] via-[#FFF0E2] to-[#FFD9B3]
                text-[#4A2C00] rounded-3xl shadow-2xl border border-[#FF7A00]/50
                w-full max-w-md md:max-w-xl
                p-6 md:p-8 relative max-h-[80vh] overflow-hidden
              "
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-[#FF7A00] hover:text-[#E76E00] p-1 rounded-full bg-[#FFF0E2]"
              >
                ✕
              </button>

              <img
                src={activeModal.img}
                alt={activeModal.title}
                className="w-full h-48 md:h-56 object-cover rounded-xl mb-4"
              />

              <h2 className="text-xl md:text-2xl font-bold text-[#FF7A00] text-center mb-4">
                {activeModal.title}
              </h2>

              <div className="max-h-[40vh] overflow-y-auto pr-2">
                <ul className="list-disc pl-4 space-y-2 text-sm md:text-base leading-relaxed">
                  {activeModal.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
