"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const Partners = () => {
  // Array of all partner logos from the public/logos folder
  const partnerLogos = [
    "/logos/Rectangle-2.png",
    "/logos/Rectangle-1.png",
    "/logos/Rectangle.png",
    "/logos/Vector.png",
    "/logos/Group.png",
    "/logos/Group-1.png",
    "/logos/Group-2.png",
    "/logos/Layer 2.png",
    "/logos/layer1.png",
    "/logos/farm-africa-e1602251024644 1.png",
    "/logos/Clip path group.png",
    "/logos/Clip path group-1.png",
    "/logos/Clip path group-2.png",
    "/logos/Clip path group-3.png",
    "/logos/Clip path group-4.png",
    "/logos/Clip path group-5.png",
    "/logos/Clip path group-6.png",
    "/logos/Clip path group-7.png",
    "/logos/Clip path group-8.png",
    "/logos/Clip path group-10.png",
    "/logos/Clip path group-11.png",
    "/logos/Clip path group-12.png",
  ];

  return (
    <section className="py-8 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg md:text-xl text-gray-600 font-medium text-center mb-6">
          Trusted by leading organizations
        </h3>
        
        <div className="relative">
          {/* First slider - moves from right to left */}
          <div className="flex animate-marquee whitespace-nowrap">
            {partnerLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center mx-4 w-[120px] h-[60px] grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image 
                  src={logo} 
                  alt={`Partner logo ${index + 1}`} 
                  width={100} 
                  height={50} 
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate slider for seamless looping */}
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {partnerLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center mx-4 w-[120px] h-[60px] grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image 
                  src={logo} 
                  alt={`Partner logo ${index + 1}`} 
                  width={100} 
                  height={50} 
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;