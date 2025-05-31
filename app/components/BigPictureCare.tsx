"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const tabs = [
  {
    name: "Community-First Approach",
    title: "Community-First Approach",
    description: "Built on Ethiopia's trusted Iddir system, we bring healthcare closer to your community through local partnerships and mobile health units.",
    image: "/placeholder-community-background.jpg", // Replace with a relevant background image
    link: "/individuals#community",
    phoneContent: "/placeholder-phone-community.png", // Placeholder for specific phone screen content
  },
  {
    name: "Personalized Care Journey",
    title: "Personalized Care Journey",
    description: "From enrollment to ongoing support, our trained field agents guide you through every step, ensuring you get the care you need when you need it.",
    image: "/placeholder-personalized.jpg", // Replace with a relevant background image
    link: "/individuals#care",
    phoneContent: "/placeholder-phone-personalized.png", // Placeholder for specific phone screen content
  },
  {
    name: "Quality Through Partnership",
    title: "Quality Through Partnership",
    description: "Working with leading maternal health organizations to bring you the highest standard of care, backed by evidence-based practices and local expertise.",
    image: "/placeholder-partnership.jpg", // Replace with a relevant background image
    link: "/individuals#partners",
    phoneContent: "/placeholder-phone-partnership.png", // Placeholder for specific phone screen content
  },
  {
    name: "Financial Empowerment",
    title: "Financial Empowerment",
    description: "Access integrated micro-savings, loans, and micro-insurance solutions designed to make healthcare affordable and accessible for every woman and family.",
    image: "/placeholder-financial.jpg", // Replace with a relevant background image
    link: "/individuals#financial", // Assuming there's a financial section on the individuals page
    phoneContent: "/placeholder-phone-financial.png", // Placeholder for specific phone screen content
  },
];

const BigPictureCare = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % tabs.length);
    }, 8000); // Increased duration to 8 seconds
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleTabClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setActiveIndex(index);
    // Restart interval after a short delay to allow manual transition
    setTimeout(startInterval, 1000); // Wait 1 second before restarting auto-slide
  };

  const activeTab = tabs[activeIndex];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How Lanchi Delivers Better Care
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            One place to provide the clinical, emotional, and financial support employees need.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center border-b border-gray-200 mb-12 overflow-x-auto scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              className={`px-6 py-3 text-lg font-semibold -mb-px border-b-2 ${activeIndex === index
                  ? "border-[#0B615E] text-[#0B615E]"
                  : "border-transparent text-gray-600 hover:text-gray-800"}
              transition-colors duration-300 whitespace-nowrap`}
              onClick={() => handleTabClick(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content with Image and Phone Mockup */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }} // Reduced vertical movement
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} // Reduced vertical movement
            transition={{ duration: 0.5 }} // Slightly adjusted duration for subtlety
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24 py-8"
          >
            {/* Text Content (Left) */}
            <div className="md:w-1/2 w-full md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{activeTab.title}</h3>
              <p className="text-lg text-gray-700 mb-6">{activeTab.description}</p>
              <Link
                href={activeTab.link}
                className="inline-flex items-center text-[#0B615E] font-semibold hover:text-[#089688] transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Image and Phone Mockup (Right) */}
            <div className="md:w-1/2 w-full relative h-96 md:h-[440px] md:order-2">
              {/* Main Background Image */}
              <div className="absolute inset-0 overflow-hidden shadow-lg">
                <Image
                  src={activeTab.image}
                  alt={activeTab.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BigPictureCare; 