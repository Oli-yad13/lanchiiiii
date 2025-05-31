"use client";

import { Hero } from "./components/Hero";
// import { Coverage } from "./components/Coverage"; // Removed Coverage import
import HowItWorks from "./components/HowItWorks";
// import { WhyStandOut } from "./components/WhyStandOut"; // WhyStandOut was previously removed
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer"; 
import { BackgroundPattern } from "./components/BackgroundPattern";
import TailoredSolutions from "./components/TailoredSolutions";
import Partnering from "./components/Partnering";
import WhyLanchi from "./components/WhyLanchi";
import BigPictureCare from "./components/BigPictureCare";
import GoalVision from "./components/GoalVision";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 relative">
      <Hero />
      {/* Remove BackgroundPattern for a plain background */}
      <div className="relative z-10 overflow-hidden">
        {/* <BackgroundPattern /> */}
        <TailoredSolutions />
        <Partnering />
        <div id="features">
          <HowItWorks />
        </div>
        <BigPictureCare />
        <div id="why-stand-out">
          <WhyLanchi />
        </div>
        <GoalVision />
        {/* <Coverage /> */}{/* Removed Coverage component */}
        <div id="contact">
          <CTA />
        </div>
      </div>
      <Footer />
    </main>
  );
}
