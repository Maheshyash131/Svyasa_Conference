// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { conferenceData } from "../mockData";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="
        bg-[#FFE9D6]/20 border-t-2 text-[#4A2C00] pt-12 pb-8 
        overflow-hidden min-h-[30dvh]
      "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* GRID — Desktop 3 columns / Mobile 1 column */}
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3 text-center md:text-left">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-[#FF7A00] mb-3">About SITCES 2025</h3>
          <p className="text-sm text-[#4A2C00]/80 leading-relaxed">
            SITCES-2025 is an international conference focused on sustainable
            innovation, communication technologies, and energy systems — hosted by SVYASA University.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-[#FF7A00] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Tracks", href: "#tracks" },
              { label: "Timeline", href: "#timeline" },
              { label: "Committee", href: "#committee" },
              { label: "Registration", href: "#registration" },
              { label: "Contact", href: "#contact" },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <a
                  href={item.href}
                  className="hover:text-[#FF7A00] transition-all duration-200 font-medium"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-[#FF7A00] mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex md:items-center justify-center md:justify-start gap-2">
              <motion.div whileTap={{ scale: 1.2 }}>
                <Mail className="h-5 w-5 text-[#FF7A00]" />
              </motion.div>
              <a
                href={`mailto:${conferenceData.email}`}
                className="hover:text-[#FF7A00] transition font-medium"
              >
                {conferenceData.email}
              </a>
            </li>

            <li className="flex md:items-center justify-center md:justify-start gap-2">
              <motion.div whileTap={{ scale: 1.2 }}>
                <Phone className="h-5 w-5 text-[#FF7A00]" />
              </motion.div>
              <span className="font-medium">{conferenceData.phone}</span>
            </li>

            <li className="flex items-start justify-center md:justify-start gap-2">
              <motion.div whileTap={{ scale: 1.2 }}>
                <MapPin className="h-5 w-5 text-[#FF7A00] mt-1" />
              </motion.div>
              <span className="text-sm font-medium">{conferenceData.contact.address}</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <motion.div
        className="mt-10 text-center border-t border-[#FF7A00]/40 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-medium tracking-wide text-[#FF7A00]">
          © {year} SITCES-2025. All rights reserved.
        </span>
      </motion.div>
    </motion.footer>
  );
}
