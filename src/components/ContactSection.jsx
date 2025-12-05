// src/components/ContactSection.jsx
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Globe,
  X,
  CheckCircle,
} from "lucide-react";
import { conferenceData } from "../mockData";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill both fields before submitting.");
      return;
    }
    setShowMessage(true);
  };

  const openGmail = (email) => {
    const subject = `Conference Query from ${formData.name}`;
    const body = `Name: ${formData.name}%0A%0A${formData.message}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
    setShowMessage(false);
    setFormData({ name: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      style={{ scrollMarginTop: "110px" }} // ⭐ Fix navigation from header
      className="bg-[#FDEADA] text-[#4A2C00] py-20 md:py-28"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-[#FF7A00] mb-12 drop-shadow-md text-center"
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2">

        {/* LEFT SIDE – INFO CARDS */}
        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* EMAIL CARD */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0px 10px 25px rgba(255,99,0,0.3)" }}
            className="w-full max-w-sm bg-gradient-to-br from-[#FDE4C9] to-[#FFEFD9]
                       border border-[#FF7A00]/60 rounded-2xl p-6 shadow-md transition-all"
          >
            <h4 className="text-[#FF7A00] text-sm font-bold mb-3">Email Contacts</h4>

            {conferenceData.contact.emails.map((email, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5 text-[#FF7A00]" />
                <span className="text-xs">{email}</span>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => openGmail(email)}
                  className="ml-auto text-xs rounded-full bg-[#FF7A00] text-white px-3 py-1 
                             hover:bg-[#E76E00] transition"
                >
                  Email
                </motion.button>
              </div>
            ))}
          </motion.div>

          {/* ADDRESS CARD */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0px 10px 25px rgba(255,99,0,0.3)" }}
            className="w-full max-w-sm bg-gradient-to-br from-[#FDE4C9] to-[#FFEFD9]
                       border border-[#FF7A00]/60 rounded-2xl p-6 shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-6 w-6 text-[#FF7A00]" />
              <p className="text-sm font-medium">{conferenceData.contact.address}</p>
            </div>
           <a
  href={conferenceData.contact.mapLink}
  target="_blank"
  className="text-xs text-[#FF7A00] flex items-center gap-1 hover:underline pointer-events-auto"
  onClick={(e) => {
    e.stopPropagation(); // prevent card from capturing the click
  }}
>
  View on Map <ExternalLink className="h-3 w-3" />
</a>

          </motion.div>

          {/* WEBSITE CARD */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0px 10px 25px rgba(255,99,0,0.3)" }}
            className="w-full max-w-sm bg-gradient-to-br from-[#FDE4C9] to-[#FFEFD9]
                       border border-[#FF7A00]/60 rounded-2xl p-6 shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-[#FF7A00]" />
              <a
                href={conferenceData.contact.website}
                target="_blank"
                className="text-xs font-semibold hover:text-[#FF7A00]"
              >
                Official College Website
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl bg-[#FFF8EF] border border-[#FF7A00]/50 p-8 shadow-xl"
        >
          <h3 className="text-base font-semibold text-[#FF7A00] mb-4">
            Send Your Query
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 text-sm">
            {/* Name */}
            <div>
              <label className="block text-[#4A2C00] mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2 border-[#FF7A00]/40 
                           focus:ring-[#FF7A00] focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#4A2C00] mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2 min-h-[90px] border-[#FF7A00]/40 
                           focus:ring-[#FF7A00] focus:outline-none"
                placeholder="Write your message..."
              />
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full bg-gradient-to-r from-[#FF7A00] to-[#E76E00] 
                         rounded-full py-3 font-semibold text-white shadow-md"
            >
              <Send className="h-4 w-4 inline mr-1" /> Send Now
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMessage(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-[350px] border border-[#FF7A00]
                         relative max-h-[75vh] overflow-y-auto"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-2 right-2 p-1" onClick={() => setShowMessage(false)}>
                <X className="h-5 w-5 text-gray-700" />
              </button>

              <CheckCircle className="mx-auto text-green-600 h-10 w-10" />
              <h3 className="mt-3 font-bold text-[#FF7A00]">Message Ready!</h3>
              <p className="text-sm mt-1">Choose an email to send your query.</p>

              <div className="mt-4 space-y-2">
                {conferenceData.contact.emails.map((email, idx) => (
                  <button
                    key={idx}
                    onClick={() => openGmail(email)}
                    className="w-full px-3 py-2 bg-[#FF7A00] text-white rounded-full hover:bg-[#E76E00] transition"
                  >
                    Send via {email}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
