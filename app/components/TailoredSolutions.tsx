"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const valueProps = [
  {
    title: "Unparalleled Access",
    desc: "On-demand care from local clinics, midwives, and women's health specialists—wherever you are in Ethiopia.",
    image: "/lanchi-tailored-01.jpg"
  },
  {
    title: "Community-Based Enrollment",
    desc: "Seamless sign-up through trusted Iddir groups and local partners, making coverage accessible for all.",
    image: "/lanchi-tailored-02.jpg"
  },
  {
    title: "Culturally Competent Care",
    desc: "Services designed for Ethiopian women, with support in Amharic and local languages.",
    image: "/lanchi-tailored-03.jpg"
  },
  {
    title: "Affordable, Full-Spectrum Coverage",
    desc: "From fertility to safe delivery and postpartum, Lanchi covers every stage at a price families can afford.",
    image: "/lanchi-tailored-04.jpg"
  }
];

const TailoredSolutions = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    setHeights(
      valueProps.map((_, i) =>
        contentRefs.current[i]?.scrollHeight || 0
      )
    );
  }, [activeIdx]);

  return (
    <section className="w-full bg-[#F5F5F5] py-32 px-4 sm:px-8 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0B615E]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#089688]/5 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#0B615E] tracking-tight">
              Tailored Healthcare
            </h2>
            <p className="text-2xl md:text-3xl text-[#089688] font-light max-w-3xl mx-auto">
              Solutions designed for Ethiopian women, by Ethiopian women
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Image section */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                {valueProps.map((item, i) => (
                  <div
                    key={item.image}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      activeIdx === i 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority={activeIdx === i}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Content section */}
            <div className="lg:col-span-5">
              <div className="space-y-6">
                {valueProps.map((item, i) => (
                  <div 
                    key={item.title} 
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeIdx === i ? 'bg-white shadow-lg' : 'hover:bg-white/50'
                    } rounded-lg p-6`}
                    onClick={() => setActiveIdx(i)}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-4xl font-bold transition-colors duration-300 ${
                        activeIdx === i ? 'text-[#0B615E]' : 'text-[#089688]/50'
                      }`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          activeIdx === i ? 'text-[#0B615E]' : 'text-[#089688]'
                        }`}>
                          {item.title}
                        </h3>
                        <div
                          ref={(el) => {
                            contentRefs.current[i] = el;
                          }}
                          style={{
                            maxHeight: activeIdx === i ? heights[i] : 0,
                            overflow: 'hidden',
                            transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                          className="text-gray-600"
                        >
                          {activeIdx === i && item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions; 