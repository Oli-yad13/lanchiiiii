"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";
import { useEffect, useState, useRef } from 'react';

export const HowItWorks = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Programmatic loop fallback
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-0 sm:px-0 md:px-0 lg:px-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative px-4 sm:px-6 md:px-8 lg:px-12 mb-12 sm:mb-14 md:mb-16">
        <HealthInsuranceBanner bannerText="How It Works" className="text-xl sm:text-2xl md:text-3xl" />
        <motion.div
          initial={hasMounted ? { opacity: 0, y: 20 } : {}}
          whileInView={hasMounted ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
            We've designed a simple process to help you get the care you need, when you need it.
          </p>
        </motion.div>
      </div>

      {/* Video Mockup - Moved outside the max-width div */}
      <motion.div
        ref={containerRef}
        className="mt-0 mb-12 sm:mb-14 md:mb-16 w-full px-4 sm:px-6 md:px-8 lg:px-12"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{
          scale: isVideoInView ? 1 : 0.8,
          opacity: isVideoInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
      >
        {hasMounted && (
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
            controls
            loop
            muted
            autoPlay
            playsInline
            onEnded={handleVideoEnded}
          >
            <source src="/Video upscale - Topaz Labs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative px-4 sm:px-6 md:px-8 lg:px-12">
      </div>
    </section>
  );
};

export default HowItWorks;