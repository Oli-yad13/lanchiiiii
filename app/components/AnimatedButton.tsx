"use client";

import { useState } from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary';
}

export const AnimatedButton = ({ href, text, variant = 'primary' }: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `inline-flex items-center gap-2 rounded-full font-bold shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${variant === 'primary' ? 'px-8 py-3 text-lg' : 'px-8 py-3 text-lg'}`;
  const primaryClasses = "bg-[#246A6B] text-white hover:bg-[#A7FFEB] hover:text-[#246A6B]";
  const secondaryClasses = "border-2 border-[#246A6B] text-[#246A6B] hover:bg-[#246A6B] hover:text-white";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center overflow-hidden transition-colors duration-200
        ${variant === 'primary' ? (isHovered ? 'border-[#246A6B]' : 'border-white') : (isHovered ? 'border-white' : 'border-[#246A6B]')}
      `}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           className={`feather feather-arrow-up-right w-4 h-4 transition-all duration-300
             ${variant === 'primary' ? (isHovered ? 'text-[#246A6B]' : 'text-white') : (isHovered ? 'text-white' : 'text-[#246A6B]')}
             ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : 'translate-x-0 translate-y-0'}
           `}
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
      {variant === 'primary' ? (
        <span className="sliding-text-container">
          <span className="sliding-text" data-text={text}>
            {text}
          </span>
        </span>
      ) : (
        <span className="no-wrap-text">{text}</span>
      )}
    </Link>
  );
}; 