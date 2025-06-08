"use client";
import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  "/mf/pexels-shvetsa-11369178.jpg",
  "/mf/pexels-shvetsa-11369364.jpg",
  "/mf/pexels-shvetsa-11369475.jpg"
];

const Hero = () => (
  <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white">
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
        width: 150px;
      }

      .sliding-text {
        white-space: nowrap;
        animation: slideLoop 15s linear infinite;
        min-width: fit-content;
        font-size: 1.25rem;
      }

      .sliding-text::after {
        content: " Discover lanchi for your workforce ";
        padding-left: 20px;
      }

      .no-wrap-text {
        white-space: nowrap;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.02); }
      }

      .background-icon {
        animation: float 8s ease-in-out infinite;
      }

      @media (max-width: 768px) {
        .sliding-text-container {
          width: 120px;
        }
        
        .sliding-text {
          font-size: 1rem;
        }
      }
    `}</style>

    {/* Background SVG Icon */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 md:translate-x-1/4 z-5 opacity-3 md:opacity-10 background-icon">
      <Image
        src="/LANCHI ICON.svg"
        alt=""
        width={600}
        height={600}
        className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
        priority={false}
      />
    </div>

    {/* Main content layout */}
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-16 md:py-32 gap-8 md:gap-0">
      {/* Left: Text and buttons */}
      <div className="flex-1 flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 md:pr-12">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-tight tracking-tight font-sans animate-fade-in-up mb-1 sm:mb-2 md:mb-4 lanchi-gradient">
          Lanchi
        </h1>
        <p className="text-lg sm:text-xl md:text-6xl text-[#246A6B]/80 font-semibold max-w-2xl animate-fade-in-up delay-100 mb-1 sm:mb-2">
          Prioritizing the health and well-being of women and their families,with one
          <br className="hidden sm:block" />
          <span className="inline-flex items-center gap-2 md:gap-4 mt-1 sm:mt-2 md:mt-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#246A6B] text-white px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 text-lg sm:text-xl md:text-3xl font-bold shadow-xl transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40 hover-fill-button hover-fill-teal"
            >
              click
            </Link>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.21 122.88" className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-[#246A6B] animate-click">
              <title>mouse-click</title>
              <path d="M86,122.31a5.57,5.57,0,0,1-.9.35,5.09,5.09,0,0,1-1,.18,5.46,5.46,0,0,1-1,0,6.77,6.77,0,0,1-1-.15,6,6,0,0,1-1-.36l0,0a5.51,5.51,0,0,1-.92-.53l0,0a6.41,6.41,0,0,1-.78-.69,5.19,5.19,0,0,1-.65-.87l-9.08-14.88-7.69,9a15.49,15.49,0,0,1-1.1,1.18c-.39.37-.78.71-1.18,1l-.08.06a12.19,12.19,0,0,1-1.2.82,9.66,9.66,0,0,1-1.24.63,6.91,6.91,0,0,1-1,.37,6.21,6.21,0,0,1-1,.22,7.55,7.55,0,0,1-1.06.07,7.19,7.19,0,0,1-1-.11,6.14,6.14,0,0,1-1.18-.35,5.42,5.42,0,0,1-1.06-.57,6.22,6.22,0,0,1-.92-.78l0,0a7.31,7.31,0,0,1-.75-1l-.11-.2-.09-.21L47.72,112l0-.17L40.91,43.26a4.52,4.52,0,0,1,0-1.33,4.3,4.3,0,0,1,.43-1.25,4.31,4.31,0,0,1,1.39-1.55l0,0a3.82,3.82,0,0,1,.9-.46,4.25,4.25,0,0,1,1-.24h0a4.31,4.31,0,0,1,1.29.05,4.67,4.67,0,0,1,1.25.44l.3.16c13.51,8.84,26.1,17.06,38.64,25.25l19,12.39a11.72,11.72,0,0,1,1,.72l0,0a8.78,8.78,0,0,1,.82.73l.06.07a7.41,7.41,0,0,1,.71.82,5.91,5.91,0,0,1,.57.87,6.42,6.42,0,0,1,.51,1.14,5.6,5.6,0,0,1,.26,1.17,5.44,5.44,0,0,1,0,1.21h0a6.59,6.59,0,0,1-.23,1.19,6.54,6.54,0,0,1-.94,1.88,6.41,6.41,0,0,1-.67.83,7.45,7.45,0,0,1-.82.76,10.42,10.42,0,0,1-1.16.83,12.92,12.92,0,0,1-1.34.7c-.47.21-1,.41-1.46.58a14.27,14.27,0,0,1-1.55.43h0c-2.77.54-5.53,1.21-8.27,1.87l-3.25.77,9,14.94a5.84,5.84,0,0,1,.46,1,5.59,5.59,0,0,1,.15,3.21l0,.1a5.53,5.53,0,0,1-.33.94,6.43,6.43,0,0,1-.51.89,5.62,5.62,0,0,1-.68.81,6,6,0,0,1-.82.67l-2,1.29A83,83,0,0,1,86,122.31ZM37.63,19.46a4,4,0,0,1-6.92,4l-8-14a4,4,0,0,1,6.91-4l8.06,14Zm-15,46.77a4,4,0,0,1,4,6.91l-14,8.06a4,4,0,0,1-4-6.91l14-8.06ZM20.56,39.84a4,4,0,0,1-2.07,7.72L3,43.36A4,4,0,0,1,5,35.64l15.53,4.2ZM82,41.17a4,4,0,0,1-4-6.91L92,26.2a4,4,0,0,1,4,6.91L82,41.17ZM63.46,20.57a4,4,0,1,1-7.71-2.06L59.87,3A4,4,0,0,1,67.59,5L63.46,20.57Zm20.17,96.36,9.67-5.86c-3.38-5.62-8.85-13.55-11.51-19.17a2.17,2.17,0,0,1-.12-.36,2.4,2.4,0,0,1,1.81-2.87c5.38-1.23,10.88-2.39,16.22-3.73a10.28,10.28,0,0,0,1.8-.58,6.11,6.11,0,0,0,1.3-.77,3.38,3.38,0,0,0,.38-.38.9.9,0,0,0,.14-.24l-.06-.18a2.15,2.15,0,0,0-.44-.53,5.75,5.75,0,0,0-.83-.63L47.06,45.75c2.11,21.36,5.2,44.1,6.45,65.31a6.28,6.28,0,0,0,.18,1,2.89,2.89,0,0,0,.26.62l.13.14a1,1,0,0,0,.29,0,2.76,2.76,0,0,0,.51-.17,5.71,5.71,0,0,0,1.28-.79,11.22,11.22,0,0,0,1.35-1.33c1.93-2.27,9.6-12.14,11.4-13.18a2.4,2.4,0,0,1,3.28.82l11.44,18.75Z" fill="currentColor"/>
            </svg>
          </span>
          .
        </p>
        <p className="text-sm sm:text-base md:text-2xl text-[#7A8C7A] font-normal max-w-2xl animate-fade-in-up delay-200 mb-4 sm:mb-6 md:mb-10">
          A comprehensive employee benefit addressing the clinical, financial, and well-being needs of women and families through key life transitions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#246A6B] text-white px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-2xl font-bold shadow-xl transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40 animate-bounce-slow group hover-fill-button hover-fill-teal"
          >
            <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white mr-2 transition-colors duration-200 flex-shrink-0 group-hover:border-[#246A6B]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-right h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-white group-hover:text-[#246A6B] transition-colors duration-200"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            <div className="sliding-text-container">
              <span className="sliding-text">
                Discover lanchi for your workforce
              </span>
            </div>
          </Link>
          <Link
            href="#big-picture-care"
            scroll={true}
            className="inline-flex items-center justify-center rounded-full border-2 border-[#246A6B] text-[#246A6B] px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-xl font-bold shadow-xl transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40 group hover-fill-button hover-fill-white"
          >
            <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-[#246A6B] mr-2 transition-colors duration-200 flex-shrink-0 group-hover:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-right h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-[#246A6B] group-hover:text-white transition-colors duration-200"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            <span className="no-wrap-text">Explore our options</span>
          </Link>
        </div>
      </div>
      
      {/* Right: Editorial image collage with accent shape */}
      <div className="flex-1 flex items-center justify-center relative mt-6 sm:mt-8 md:mt-0 max-w-sm sm:max-w-md md:max-w-none">
        {/* Large masked image (circle) */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 md:border-8 border-white z-20 animate-fade-in-up mx-auto md:mx-0">
          <Image
            src={galleryImages[0]}
            alt="Family moment"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlapping image card (wavy mask) */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-0 md:right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white z-30 animate-fade-in-up delay-200">
          <Image
            src={galleryImages[1]}
            alt="Care moment"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return <Hero />;
}