"use client";

import { CTA } from "../components/CTA";
import ProfileCard from "@/components/ProfileCard";
import Script from "next/script";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FeatureSteps } from "@/app/components/blocks/feature-section";

// Add type declaration for UnicornStudio
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const UnicornStudioEmbed = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const initializationAttempted = useRef(false);

  // Check WebGL support
  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setIsWebGLSupported(false);
      setHasError(true);
      setIsLoading(false);
    }
  }, []);

  // Enhanced initialization with better timing and error handling
  useEffect(() => {
    if (!isScriptLoaded || !isWebGLSupported || initializationAttempted.current) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let attempts = 0;
    const maxAttempts = 30;

    const initializeUnicornStudio = () => {
      if (initializationAttempted.current) return;
      
      try {
        if (window.UnicornStudio) {
          initializationAttempted.current = true;
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
          setIsLoading(false);
          
          // Additional attribution cleanup after initialization
          setTimeout(() => {
            cleanupAttribution();
          }, 1000);
          
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        }
      } catch (error) {
        console.error('Error initializing Unicorn Studio:', error);
        setHasError(true);
        setIsLoading(false);
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      }
    };

    // Wait a bit for the script to fully load and DOM to be ready
    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        attempts++;
        if (window.UnicornStudio && !initializationAttempted.current) {
          initializeUnicornStudio();
        } else if (attempts >= maxAttempts) {
          console.warn('Unicorn Studio not initialized after multiple attempts');
          setHasError(true);
          setIsLoading(false);
          clearInterval(intervalId);
        }
      }, 200);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isScriptLoaded, isWebGLSupported]);

  // Comprehensive attribution cleanup function
  const cleanupAttribution = () => {
    if (!containerRef.current) return;

    const removeAttributionElements = () => {
      // Remove all possible attribution selectors
      const selectors = [
        '[data-us-attribution]',
        '[data-unicorn-attribution]',
        '.unicorn-attribution',
        '.us-attribution',
        'a[href*="unicornstudio"]',
        'div[style*="position: absolute"][style*="bottom"]',
        'div[style*="position: fixed"][style*="bottom"]'
      ];

      selectors.forEach(selector => {
        const elements = containerRef.current?.querySelectorAll(selector);
        elements?.forEach(el => {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).style.visibility = 'hidden';
          (el as HTMLElement).style.opacity = '0';
          (el as HTMLElement).style.pointerEvents = 'none';
          (el as HTMLElement).remove();
        });
      });
    };

    // Run cleanup multiple times to catch dynamically added elements
    removeAttributionElements();
    setTimeout(removeAttributionElements, 500);
    setTimeout(removeAttributionElements, 1500);
    setTimeout(removeAttributionElements, 3000);

    // Set up a mutation observer to catch dynamically added attribution
    const observer = new MutationObserver(() => {
      removeAttributionElements();
    });

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
      attributes: true
    });

    // Clean up observer after 10 seconds
    setTimeout(() => observer.disconnect(), 10000);
  };

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-gradient-to-br from-[#246A6B] to-[#1a5152] rounded-lg text-white">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 opacity-60">
            <svg viewBox="0 0 24 24\" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Interactive Experience</h3>
          <p className="text-sm opacity-80">Your browser doesn't support WebGL. Please use a modern browser for the best experience.</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-gradient-to-br from-[#246A6B] to-[#1a5152] rounded-lg text-white">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 opacity-60">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Experience Lanchi Benefits</h3>
          <p className="text-sm opacity-80">Comprehensive healthcare and support for every stage of your family's journey.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="unicorn-studio-container relative w-full h-full" ref={containerRef}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#246A6B] to-[#1a5152] rounded-lg text-white z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm opacity-80">Loading interactive experience...</p>
          </div>
        </div>
      )}
      
      <div 
        data-us-project="YsH8JvOk7pZ19KUAlYaV" 
        style={{
          width: '100%', 
          height: '100%',
          minHeight: '500px'
        }}
        suppressHydrationWarning
      />
      
      <Script
        id="unicorn-studio-script"
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          setIsScriptLoaded(true);
        }}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
      
      {/* Enhanced attribution blocking with multiple layers */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white z-[10001] rounded-b-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-[10000] rounded-b-3xl pointer-events-none" />
      
      <style jsx global>{`
        .unicorn-studio-container {
          position: relative;
          overflow: hidden;
        }
        
        .unicorn-studio-container :global([data-us-attribution]),
        .unicorn-studio-container :global([data-unicorn-attribution]),
        .unicorn-studio-container :global(.unicorn-attribution),
        .unicorn-studio-container :global(.us-attribution),
        .unicorn-studio-container :global(a[href*="unicornstudio"]) {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          position: absolute !important;
          left: -9999px !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
          z-index: -1 !important;
        }
        
        .unicorn-studio-container :global([data-us-attribution] *),
        .unicorn-studio-container :global([data-us-attribution]::before),
        .unicorn-studio-container :global([data-us-attribution]::after),
        .unicorn-studio-container :global([data-unicorn-attribution] *),
        .unicorn-studio-container :global([data-unicorn-attribution]::before),
        .unicorn-studio-container :global([data-unicorn-attribution]::after) {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          position: absolute !important;
          left: -9999px !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
          z-index: -1 !important;
        }
        
        /* Additional selectors for dynamic content */
        .unicorn-studio-container :global(div[style*="position: absolute"][style*="bottom"]),
        .unicorn-studio-container :global(div[style*="position: fixed"][style*="bottom"]) {
          display: none !important;
        }
        
        /* Hide any text that might contain attribution */
        .unicorn-studio-container :global(*:contains("unicorn")),
        .unicorn-studio-container :global(*:contains("Unicorn")) {
          color: transparent !important;
          background: transparent !important;
        }
      `}</style>
    </div>
  );
};

const benefits = [
  {
    icon: "📍",
    title: "Accessible Care, Anywhere",
    description: "Connect with doctors, midwives, and specialists virtually or find trusted local support. Overcome distance and get timely advice when you need it most.",
    imageSrc: "/benefit-accessible.jpg"
  },
  {
    icon: "🛡️",
    title: "Affordable Health, Secured",
    description: "Our integrated financial tools—like micro-savings and insurance options—help you manage costs, so you can access quality care without financial stress.",
    imageSrc: "/benefit-affordable.jpg"
  },
  {
    icon: "🧭",
    title: "Personalized Guidance, Every Step",
    description: "Your dedicated Lanchi Care Advocate and community agents help you navigate your health journey, answer questions, and connect you to the right resources.",
    imageSrc: "/benefit-guidance.jpg"
  },
  {
    icon: "❤️",
    title: "Comprehensive Family Support",
    description: "From family planning and gynecology to pregnancy, childbirth, postpartum, and pediatric care for your children under five – all in one place.",
    imageSrc: "/benefit-family.jpg"
  }
];

const lanchiFeatures = [
  {
    step: '1',
    title: 'Empowered Health Decisions',
    content: "Gain knowledge, access trusted information, and make informed choices about your health and your family's well-being.",
    image: '/benefit-accessible2.jpg'
  },
  {
    step: '2',
    title: 'Peace of Mind, Guaranteed',
    content: "Know that quality, affordable care and support are always within reach, reducing anxiety and helping you focus on what matters most.",
    image: '/benefit-affordable2.jpg'
  },
  {
    step: '3',
    title: 'Culturally Sensitive & Local',
    content: "Care designed with a deep understanding of Ethiopian needs and realities, delivered respectfully by local professionals and community agents.",
    image: '/benefit-guidance2.jpg'
  },
  {
    step: '4',
    title: 'Integrated Health & Finance',
    content: "A unique approach in Ethiopia, combining vital healthcare with financial tools to ensure you're supported holistically.",
    image: '/benefit-family2.jpg'
  },
];

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-[#246A6B] mb-8 leading-tight">
            Benefits of <span className="font-bold">Lanchi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            Empowering your health journey with comprehensive care and support designed for modern families
          </p>
        </div>
        
        {/* Wide Hero Interactive Bar with Rounded Corners and Reduced Width */}
        <div className="w-full flex justify-center items-center mb-2 relative">
          <div className="relative w-full max-w-6xl h-[750px] md:h-[850px] overflow-hidden flex items-center justify-center rounded-3xl">
            <div className="w-full h-full flex items-center justify-center">
              <UnicornStudioEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <ProfileCard
              key={index}
              name={benefit.title}
              description={benefit.description}
              imageSrc={benefit.imageSrc}
            />
          ))}
        </div>
      </section>

      {/* Additional Benefits Section */}
      <FeatureSteps 
        features={lanchiFeatures}
        title="Why Choose Lanchi?"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />

      {/* CTA Section */}
      <section id="cta" className="py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gray-50">
        <div className="max-w-screen-xl mx-auto relative flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Join?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0">
              Whether you're planning a family or seeking better maternal care, Lanchi is here for you—with dignity, affordability, and care you can trust.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="/contact"
                className="inline-block rounded-full px-8 py-3 text-lg font-bold shadow-lg hover-fill-button hover-fill-white"
              >
                Get Started Today
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative h-80 md:h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/Waiting-Room_1_.jpg"
              alt="Waiting room scene"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}