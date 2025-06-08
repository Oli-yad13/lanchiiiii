import React from "react";
import { FaDribbble, FaPinterest, FaCodepen } from "react-icons/fa";
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  title?: string;
  description: string;
  imageSrc: string;
  socials?: {
    dribbble?: string;
    pinterest?: string;
    codepen?: string;
  };
}

export default function ProfileCard({
  name,
  title,
  description,
  imageSrc,
  socials
}: ProfileCardProps) {
  return (
    <div className="flex items-center w-[75vw] max-w-[650px] p-11 pr-8 bg-white rounded-3xl shadow-lg mx-auto my-12 text-[#246A6B] font-sans relative border border-[#d2e3dd]
      md:p-11 md:pr-8 md:pl-5 md:my-20
      sm:flex-col sm:pl-12 sm:pr-12 sm:pb-16 sm:w-full sm:text-center">
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-[22px] font-extrabold mt-0 mb-2 mr-8 sm:mr-0 sm:text-[26px] uppercase tracking-wide">{name}</h2>
        {title && <h3 className="text-[14px] font-semibold m-0 opacity-80 mb-2">{title}</h3>}
        <p className="text-[15px] font-medium mb-8 opacity-90 max-w-[360px] sm:mx-auto">
          {description}
        </p>
        {socials && (
          <div className="flex items-center gap-2 sm:justify-center mt-4">
            {socials.dribbble && (
              <a href={socials.dribbble} target="_blank" rel="noopener noreferrer" className="relative group">
                <span className="absolute z-0 top-1/2 left-1/2 w-[52px] h-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ff7c7d] to-[#ffda67] transition duration-300 group-hover:scale-105" />
                <FaDribbble className="relative z-10 border-4 border-white bg-[#3f3b39] text-[24px] w-[50px] h-[50px] rounded-full grid place-items-center text-white" />
              </a>
            )}
            {socials.pinterest && (
              <a href={socials.pinterest} target="_blank" rel="noopener noreferrer" className="relative">
                <FaPinterest className="relative z-10 border-4 border-white bg-[#3f3b39] text-[24px] w-[50px] h-[50px] rounded-full grid place-items-center text-white" />
              </a>
            )}
            {socials.codepen && (
              <a href={socials.codepen} target="_blank" rel="noopener noreferrer" className="relative">
                <FaCodepen className="relative z-10 border-4 border-white bg-[#3f3b39] text-[24px] w-[50px] h-[50px] rounded-full grid place-items-center text-white" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 