"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import React from 'react';

interface HowItWorksStepProps {
  step: {
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    textColor: string;
  };
  index: number;
  totalSteps: number;
  scrollYProgress: any; // Type from framer-motion useScroll
}

export const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  step,
  index,
  totalSteps,
  scrollYProgress,
}) => {
  // Define animation ranges for each step
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  
  // Calculate ranges for more precise control
  const fadeInStart = Math.max(0, start - 0.02);
  const fadeInEnd = start + 0.05;
  const fadeOutStart = end - 0.05;
  const fadeOutEnd = Math.min(1, end + 0.02);
  
  // Control opacity for fading text in and out
  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  );
  
  // Control the text position (absolute positioning)
  const zIndex = totalSteps - index; // Higher index = lower z-index (earlier steps on top)
  
  // Add a very subtle scale effect
  const scale = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0.98, 1, 1, 0.98]
  );

  return (
    <motion.div
      key={step.title}
      className={`absolute inset-0 flex items-center justify-center ${step.bgColor} ${step.textColor}`}
      style={{ 
        opacity,
        scale,
        zIndex: zIndex,
      }}
    >
      <div className="flex flex-col items-center text-center max-w-md px-4">
        {/* Icon/Illustration */}
        <motion.div 
          className="w-24 h-24 mb-6 flex items-center justify-center"
          initial={{ rotate: -5 }}
          animate={{ rotate: 5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={step.icon}
            alt={`${step.title} icon`}
            width={96}
            height={96}
            className="object-contain"
          />
        </motion.div>
        <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
        <p className="text-lg">{step.description}</p>
      </div>
    </motion.div>
  );
}; 