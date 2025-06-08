"use client";

import React from "react";
import Hero from "./components/Hero";
import TailoredSolutions from "./components/TailoredSolutions";
import Partnering from "./components/Partnering";
import BigPictureCare from "./components/BigPictureCare";
import GoalVision from "./components/GoalVision";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <TailoredSolutions />
      <Partnering />
      <BigPictureCare />
      <GoalVision />
      <div id="contact">
        <CTA />
      </div>
    </main>
  );
}
