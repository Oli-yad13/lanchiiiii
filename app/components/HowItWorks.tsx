"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import { HowItWorksStep } from "./HowItWorksStep";

const howItWorksSteps = [
  {
    title: "Sign Up/Get Access",
    description: "Easily enroll through your employer or sign up as an individual.",
    icon: "/placeholder-icon-1.svg", // Replace with actual icon path
    bgColor: "bg-blue-50",
    textColor: "text-gray-900",
  },
  {
    title: "Connect with Your Guide",
    description: "Get paired with a dedicated guide for personalized support.",
    icon: "/placeholder-icon-2.svg", // Replace with actual icon path
    bgColor: "bg-green-50",
    textColor: "text-gray-900",
  },
  {
    title: "Access Care & Resources",
    description: "Utilize integrated health and financial tools when you need them.",
    icon: "/placeholder-icon-3.svg", // Replace with actual icon path
    bgColor: "bg-yellow-50",
    textColor: "text-gray-900",
  },
  {
    title: "Achieve Well-being",
    description: "Benefit from comprehensive support for better health and financial stability.",
    icon: "/placeholder-icon-4.svg", // Replace with actual icon path
    bgColor: "bg-purple-50",
    textColor: "text-gray-900",
  },
];

const HowItWorks = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="relative w-full min-h-[200vh]">
      {/* Fixed Header that doesn't scroll */}
      <div className="sticky top-0 py-16 sm:py-20 md:py-24 px-4 text-center bg-white z-50">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
          How It Works
        </h2>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
          We've designed a simple process to help you get the care you need, when you need it.
        </p>
      </div>

      {/* Fixed position container for overlapping text */}
      <div className="sticky top-[50%] left-0 right-0 h-[50vh] flex items-center justify-center overflow-visible z-20">
        <div className="relative w-full max-w-4xl mx-auto h-full">
          {howItWorksSteps.map((step, index) => (
            <HowItWorksStep
              key={step.title}
              step={step}
              index={index}
              totalSteps={howItWorksSteps.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default HowItWorks;