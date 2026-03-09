"use client";

import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ThreePillarSolution from "./components/ThreePillarSolution";
import EmployeeBenefits from "./components/EmployeeBenefits";
import EmployerROI from "./components/EmployerROI";
import HowItWorks from "./components/HowItWorks";
import TrustedPartners from "./components/TrustedPartners";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ThreePillarSolution />
      <EmployeeBenefits />
      <EmployerROI />
      <HowItWorks />
      <TrustedPartners />
      <CTA />
    </main>
  );
}
