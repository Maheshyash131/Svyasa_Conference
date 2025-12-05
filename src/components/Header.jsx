// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Paper Submission", href: "#paper-guidelines" },
  { label: "Important Dates", href: "#timeline" },
  { label: "Committee", href: "#committee" },
  { label: "Registration", href: "#registration" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // ⭐ Smooth scroll for both desktop & mobile
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <div className="w-full">
      <header
        className="
          fixed top-0 left-0 right-[2px] md:right-[12px] z-50
          bg-[#FFE9D6]/30 backdrop-blur-md 
          border-b border-[#FF7A00]/50 shadow-md
        "
      >
        {/* MAIN HEADER */}
        <div
          className="
            w-full max-w-[430px] mx-auto
            md:max-w-6xl
            px-4 py-2 flex items-center justify-between
          "
        >
          {/* LOGO */}
          <img
            src={logo}
            alt="Conference Logo"
            className="h-12 w-auto object-contain rounded-lg shadow-lg shadow-[#FF7A00]/40"
          />

          {/* CENTERED TITLE (Mobile centered, desktop left) */}
          <div
           className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none text-center"

          >
            <span className="font-semibold text-base md:text-lg  text-[#FF7A00]">
              ICCSI-2026
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 ml-auto text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="
                  text-[#4A2C00] font-medium 
                  px-3 py-1 rounded-full
                  transition-all duration-200
                  hover:bg-[#FFA733]/30 hover:text-[#FF7A00]
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="
              md:hidden ml-auto flex items-center justify-center h-9 w-9 rounded-full 
              bg-[#FF7A00]/20 border border-[#FF7A00]/50 hover:bg-[#FFA733]/30 transition
            "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="text-[#FF7A00]" />
            ) : (
              <Menu className="text-[#FF7A00]" />
            )}
          </button>
        </div>
      </header>

      {/* PUSH CONTENT DOWN */}
      <div className="mt-20 w-full max-w-[430px] mx-auto md:max-w-6xl"></div>

      {/* MOBILE HORIZONTAL SCROLL MENU (same as your old design) */}
      {open && (
        <nav
          className="
            fixed top-16 left-0 w-full z-[60]
            bg-[#FFE9D6]/95 border-t border-[#FF7A00] shadow-lg
          "
        >
          <div
            className="
              max-w-[430px] mx-auto md:max-w-6xl
              px-3 py-2 flex gap-3 text-sm overflow-x-auto
            "
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="
                  px-3 py-2 whitespace-nowrap font-medium
                  text-[#4A2C00] hover:bg-[#FFA733]/40 hover:text-[#FF7A00]
                  transition-all duration-200 rounded-md
                "
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
