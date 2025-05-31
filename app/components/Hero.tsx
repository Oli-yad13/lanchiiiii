"use client";
import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  "/mf/pexels-shvetsa-11369178.jpg",
  "/mf/pexels-shvetsa-11369364.jpg",
  "/mf/pexels-shvetsa-11369475.jpg"
];

export const Hero = () => (
  <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
    <style jsx>{`
      .lanchi-gradient {
        background-image: linear-gradient(to right, #7DCED0, #A7D169);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @keyframes slideLoop {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }

      .sliding-text-container {
        overflow: hidden;
        display: flex;
        align-items: center;
        /* Adjust width based on expected visible text length */
        width: 150px; /* Reduced width */
      }

      .sliding-text {
        white-space: nowrap;
        animation: slideLoop 15s linear infinite;
        /* Duplicate text for seamless loop */
        min-width: fit-content;
        font-size: 1.25rem; /* Increased font size (text-xl equivalent) */
      }

       .sliding-text::after {
        content: " Discover lanchi for your workforce "; /* Repeat text */
        padding-left: 20px; /* Space between repeats */
      }

       /* Ensure text in the second button does not wrap */
      .no-wrap-text {
        white-space: nowrap;
      }

    `}</style>
    {/* Large, soft color block behind collage */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-[70%] bg-[#0D9488]/10 rounded-l-[5rem] z-0" style={{boxShadow: '0 8px 32px 0 rgba(44,62,54,0.06)'}} />
    {/* Subtle dot pattern for depth */}
    <div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{backgroundImage: 'radial-gradient(#A7C7A3 1px, transparent 1.5px)', backgroundSize: '18px 18px'}} />
    {/* Main content layout */}
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-24 md:py-32 gap-12 md:gap-0">
      {/* Left: Text and glassy cards */}
      <div className="flex-1 flex flex-col items-start justify-center gap-8 md:pr-12">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight font-sans animate-fade-in-up mb-4 lanchi-gradient">
          Lanchi
        </h1>
        <p className="text-4xl md:text-6xl text-[#0B615E]/80 font-semibold max-w-2xl animate-fade-in-up delay-100 mb-2">
          Prioritizing the health and well-being of women and their families,with one
          <br />
          <span className="inline-flex items-center gap-4 mt-4">
            <Link
              href="#partnering"
              className="inline-block rounded-full bg-[#0B615E] text-white px-8 py-3 text-3xl font-bold shadow-xl hover:bg-[#A7FFEB] hover:text-[#0B615E] transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40"
            >
              click
            </Link>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.21 122.88" className="w-12 h-12 text-[#089688] animate-click">
              <title>mouse-click</title>
              <path d="M86,122.31a5.57,5.57,0,0,1-.9.35,5.09,5.09,0,0,1-1,.18,5.46,5.46,0,0,1-1,0,6.77,6.77,0,0,1-1-.15,6,6,0,0,1-1-.36l0,0a5.51,5.51,0,0,1-.92-.53l0,0a6.41,6.41,0,0,1-.78-.69,5.19,5.19,0,0,1-.65-.87l-9.08-14.88-7.69,9a15.49,15.49,0,0,1-1.1,1.18c-.39.37-.78.71-1.18,1l-.08.06a12.19,12.19,0,0,1-1.2.82,9.66,9.66,0,0,1-1.24.63,6.91,6.91,0,0,1-1,.37,6.21,6.21,0,0,1-1,.22,7.55,7.55,0,0,1-1.06.07,7.19,7.19,0,0,1-1-.11,6.14,6.14,0,0,1-1.18-.35,5.42,5.42,0,0,1-1.06-.57,6.22,6.22,0,0,1-.92-.78l0,0a7.31,7.31,0,0,1-.75-1l-.11-.2-.09-.21L47.72,112l0-.17L40.91,43.26a4.52,4.52,0,0,1,0-1.33,4.3,4.3,0,0,1,.43-1.25,4.31,4.31,0,0,1,1.39-1.55l0,0a3.82,3.82,0,0,1,.9-.46,4.25,4.25,0,0,1,1-.24h0a4.31,4.31,0,0,1,1.29.05,4.67,4.67,0,0,1,1.25.44l.3.16c13.51,8.84,26.1,17.06,38.64,25.25l19,12.39a11.72,11.72,0,0,1,1,.72l0,0a8.78,8.78,0,0,1,.82.73l.06.07a7.41,7.41,0,0,1,.71.82,5.91,5.91,0,0,1,.57.87,6.42,6.42,0,0,1,.51,1.14,5.6,5.6,0,0,1,.26,1.17,5.44,5.44,0,0,1,0,1.21h0a6.59,6.59,0,0,1-.23,1.19,6.54,6.54,0,0,1-.94,1.88,6.41,6.41,0,0,1-.67.83,7.45,7.45,0,0,1-.82.76,10.42,10.42,0,0,1-1.16.83,12.92,12.92,0,0,1-1.34.7c-.47.21-1,.41-1.46.58a14.27,14.27,0,0,1-1.55.43h0c-2.77.54-5.53,1.21-8.27,1.87l-3.25.77,9,14.94a5.84,5.84,0,0,1,.46,1,5.59,5.59,0,0,1,.15,3.21l0,.1a5.53,5.53,0,0,1-.33.94,6.43,6.43,0,0,1-.51.89,5.62,5.62,0,0,1-.68.81,6,6,0,0,1-.82.67l-2,1.29A83,83,0,0,1,86,122.31ZM37.63,19.46a4,4,0,0,1-6.92,4l-8-14a4,4,0,0,1,6.91-4l8.06,14Zm-15,46.77a4,4,0,0,1,4,6.91l-14,8.06a4,4,0,0,1-4-6.91l14-8.06ZM20.56,39.84a4,4,0,0,1-2.07,7.72L3,43.36A4,4,0,0,1,5,35.64l15.53,4.2ZM82,41.17a4,4,0,0,1-4-6.91L92,26.2a4,4,0,0,1,4,6.91L82,41.17ZM63.46,20.57a4,4,0,1,1-7.71-2.06L59.87,3A4,4,0,0,1,67.59,5L63.46,20.57Zm20.17,96.36,9.67-5.86c-3.38-5.62-8.85-13.55-11.51-19.17a2.17,2.17,0,0,1-.12-.36,2.4,2.4,0,0,1,1.81-2.87c5.38-1.23,10.88-2.39,16.22-3.73a10.28,10.28,0,0,0,1.8-.58,6.11,6.11,0,0,0,1.3-.77,3.38,3.38,0,0,0,.38-.38.9.9,0,0,0,.14-.24l-.06-.18a2.15,2.15,0,0,0-.44-.53,5.75,5.75,0,0,0-.83-.63L47.06,45.75c2.11,21.36,5.2,44.1,6.45,65.31a6.28,6.28,0,0,0,.18,1,2.89,2.89,0,0,0,.26.62l.13.14a1,1,0,0,0,.29,0,2.76,2.76,0,0,0,.51-.17,5.71,5.71,0,0,0,1.28-.79,11.22,11.22,0,0,0,1.35-1.33c1.93-2.27,9.6-12.14,11.4-13.18a2.4,2.4,0,0,1,3.28.82l11.44,18.75Z" fill="currentColor"/>
            </svg>
          </span>
          .
        </p>
        <p className="text-lg md:text-2xl text-[#7A8C7A] font-normal max-w-2xl animate-fade-in-up delay-200 mb-10">
        A comprehensive employee benefit addressing the clinical, financial, and well-being needs of women and families through key life transitions.
        </p>
        {/* Glassy stat cards */}
        {/* No stat cards or testimonial here for now */}
        <div className="flex gap-4">
          <Link
            href="#partnering"
            className="inline-flex items-center rounded-full bg-[#0B615E] text-white px-12 py-5 text-2xl font-bold shadow-xl hover:bg-[#A7FFEB] hover:text-[#0B615E] transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40 animate-bounce-slow mt-4 group"
          >
            {/* Circular arrow icon with circle */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white mr-2 group-hover:border-[#0B615E] transition-colors duration-200 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-right h-4 w-4 text-white group-hover:text-[#0B615E] transition-colors duration-200"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>

            <div className="sliding-text-container">
                <span className="sliding-text">
                   Discover lanchi for your workforce
                </span>
              </div>
          </Link>
          <Link
            href="#options"
            className="inline-flex items-center rounded-full border-2 border-[#0B615E] text-[#0B615E] px-12 py-5 text-xl font-bold shadow-xl hover:bg-[#0B615E] hover:text-white transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40 mt-4 group"
          >
            {/* Circular arrow icon with circle */}
             <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#0B615E] mr-2 group-hover:border-white transition-colors duration-200 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-right h-4 w-4 text-[#0B615E] group-hover:text-white transition-colors duration-200"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            <span className="no-wrap-text">Explore our options</span>
          </Link>
        </div>
      </div>
      {/* Right: Editorial image collage with accent shape */}
      <div className="flex-1 flex items-center justify-center relative min-h-[520px] md:min-h-[700px]">
        {/* Large masked image (circle) */}
        <div className="relative w-[380px] h-[380px] md:w-[540px] md:h-[540px] rounded-full overflow-hidden shadow-2xl border-8 border-white z-20 animate-fade-in-up">
          <Image
            src={galleryImages[0]}
            alt="Family moment"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Overlapping image card (wavy mask) */}
        <div className="absolute -right-28 bottom-0 w-52 h-52 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-30 animate-fade-in-up delay-200">
          <Image
            src={galleryImages[1]}
            alt="Care moment"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        {/* Bold accent shape */}
        <svg className="absolute right-0 -top-8 w-32 h-32 opacity-20 z-0" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#A7FFEB" />
        </svg>
      </div>
    </div>
  </section>
);

export default Hero;

