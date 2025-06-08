"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export const BackgroundPattern = () => {
  const [dots, setDots] = useState<{
    x: number;
    y: number;
    size: number;
    opacity: number;
  }[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Generate random positions for dots in a more organic pattern
    const generateDots = () => {
      const generated = [];
      const numDots = 60; // Increased number of dots slightly

      for (let i = 0; i < numDots; i++) {
        // Create clusters of dots
        const clusterX = Math.random() * 100;
        const clusterY = Math.random() * 100;

        // Add 1-3 dots per cluster
        const dotsInCluster = Math.floor(Math.random() * 3) + 1;

        for (let j = 0; j < dotsInCluster; j++) {
          // Vary the size of dots
          const size = Math.random() * 3 + 1; // Random size between 1-4px

          // Add some randomness to position within cluster
          const x = clusterX + (Math.random() - 0.5) * 10;
          const y = clusterY + (Math.random() - 0.5) * 10;

          // Vary the opacity
          const opacity = Math.random() * 0.4 + 0.05; // Random opacity between 0.05-0.45

          generated.push({ x, y, size, opacity });
        }
      }
      return generated;
    };

    setDots(generateDots());
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Render nothing on the server or before mounting
  }

  // Generate multiple smaller bubbles
  const generateBubbles = (numBubbles: number) => {
    const bubbles = [];
    for (let i = 0; i < numBubbles; i++) {
      const size = Math.random() * 15 + 10; // Smaller random size between 10-25px
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 6 + Math.random() * 6;
      // Reduced scaling values
      const initialScale = 0.9 + Math.random() * 0.1; // Changed from 0.4 + Math.random() * 0.4
      const midScale = 1.0 + Math.random() * 0.1; // Changed from 0.8 + Math.random() * 0.5
      const finalScale = initialScale;
      const opacity = 0.2 + Math.random() * 0.4;

      bubbles.push({
        id: i,
        x,
        y,
        size,
        delay,
        duration,
        initialScale,
        midScale,
        finalScale,
        opacity,
        colorStop1: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        colorStop2: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      });
    }
    return bubbles;
  };

  const bubbles = generateBubbles(80); // Increased number of bubbles to 80

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(teal 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Flowing dots */}
      <div className="absolute inset-0">
        {dots.map((dot, index) => (
          <motion.div
            key={`dot-${index}`}
            className="absolute rounded-full bg-teal-500/20 dark:bg-teal-400/20"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: dot.opacity,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [dot.opacity, dot.opacity * 1.5, dot.opacity],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3D-like Bubble Elements */}
      <div className="absolute inset-0">
        {bubbles.map(bubble => (
           <motion.svg
            key={`bubble-${bubble.id}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              opacity: bubble.opacity,
            }}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
             initial={{ scale: bubble.initialScale, opacity: bubble.opacity * 0.8 }}
            animate={{ scale: [bubble.initialScale, bubble.midScale, bubble.finalScale], opacity: [bubble.opacity * 0.8, bubble.opacity, bubble.opacity * 0.8] , y: [0, (Math.random() - 0.5) * 15, 0] }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
              times: [0, 0.5, 1] // Specify timing for the animation stages (initial, mid, final)
            }}
          >
            <circle cx="50" cy="50" r="45" stroke={`url(#bubble-gradient-${bubble.id})`} strokeWidth="5"/>
            <defs>
              <linearGradient id={`bubble-gradient-${bubble.id}`} x1="5" y1="5" x2="95" y2="95" gradientUnits="userSpaceOnUse">
                <stop stopColor={bubble.colorStop1}/>
                <stop offset="1" stopColor={bubble.colorStop2}/>
              </linearGradient>
            </defs>
          </motion.svg>
        ))}
      </div>

    </div>
  );
};

export default BackgroundPattern; 