// src/App.jsx
import React from "react";
import "./index.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TracksSection from "./components/TracksSection";
import InstitutionSection from "./components/InstitutionSection";
import TimelineSection from "./components/TimelineSection";
import CommitteeSection from "./components/CommitteeSection";
// import SponsorsSection from "./components/SponsorsSection";
import RegistrationSection from "./components/RegistrationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PaperSubmission from "./components/PaperSubmissionSection";

export default function App() {
  return (
    <div>
      <Header />

      {/* 🚀 NO mt-20 HERE — FIXED */}
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <InstitutionSection />
        <TracksSection />
        <PaperSubmission />
        <TimelineSection />
        <CommitteeSection />
        {/* <SponsorsSection /> */}
        <RegistrationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
