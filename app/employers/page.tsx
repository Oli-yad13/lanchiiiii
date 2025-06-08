"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style jsx>{`
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

        .hover-fill-button {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .hover-fill-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          transition: transform 0.3s ease-in-out;
          transform: translateX(-100%);
        }

        .hover-fill-teal::before {
          background-color: #246A6B;
        }

        .hover-fill-button:hover::before {
          transform: translateX(0);
        }

        .hover-fill-teal:hover {
          color: white;
          border-color: #246A6B;
        }

        .cta-button-initial {
          border-color: #246A6B;
          color: #246A6B;
          background-color: white;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 py-12 md:py-24 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content (Left) */}
          <div className="w-full md:w-[45%] text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Partner with Lanchi: Empower Your Workforce
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              Discover how Lanchi's integrated health and financial solutions can enhance employee well-being, productivity, and retention within your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="inline-flex items-center rounded-full px-8 md:px-16 py-4 md:py-6 text-xl md:text-3xl font-bold shadow-xl transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40 animate-bounce-slow mt-4 group hover-fill-button hover-fill-teal border-2 border-[#246A6B] text-[#246A6B] bg-white">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#246A6B] mr-3 transition-colors duration-200 flex-shrink-0 group-hover:border-white">
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-[#246A6B] group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="sliding-text-container">
                  <span className="sliding-text">
                    Discover lanchi for your workforce
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Image (Right) */}
          <div className="w-full md:w-[55%] md:ml-auto">
            <div className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
              <Image
                src="/mf/pexels-shvetsa-11369178.jpg"
                alt="Fertility & Family Building"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#246A6B] text-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
            Better care can't wait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">70.2%</div>
              <p className="text-sm opacity-80">of women face at least one barrier to accessing health services</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">40%</div>
              <p className="text-sm opacity-80">of women receive the recommended four or more antenatal care visits</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">267</div>
              <p className="text-sm opacity-80">maternal deaths per 100,000 live births (2020)</p>
            </div>
          </div>
          <p className="text-sm opacity-80 mt-6 md:mt-8 text-center">Sources: Ethiopian Health Data (Various), UNFPA, DHS Program</p>
        </div>
      </section>

      {/* Benefits Section with Mobile-Optimized Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-16 text-center">
            Key Benefits of Partnering with Lanchi in Ethiopia
          </h2>
          
          {/* Card Grid Layout */}
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {/* Card 1 - Health & Productivity */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full md:w-3/5">
                <div className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
                  <Image
                    src="/mf/pexels-shvetsa-11369178.jpg"
                    alt="Fertility & Family Building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <div className="bg-[#246A6B] p-6 md:p-8 rounded-lg shadow-lg text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Enhance Employee Well-being & Productivity</h3>
                  <p className="text-sm md:text-base mb-4">
                    By uniquely integrating accessible micro-savings, loans, and micro-insurance with comprehensive maternal and child healthcare, Lanchi directly tackles the financial and health stressors faced by your Ethiopian employees.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Employer of Choice */}
            <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center">
              <div className="w-full md:w-3/5">
                <div className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
                  <Image
                    src="/mf/pexels-shvetsa-11369188.jpg"
                    alt="Maternity & Newborn Care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <div className="bg-[#246A6B] p-6 md:p-8 rounded-lg shadow-lg text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Become an Employer of Choice & Retain Valuable Talent</h3>
                  <p className="text-sm md:text-base mb-4">
                    Offer a truly impactful and differentiated employee benefit that demonstrates a deep commitment to the well-being of your team and their families.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Financial Resilience */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full md:w-3/5">
                <div className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
                  <Image
                    src="/mf/pexels-shvetsa-11369364.jpg"
                    alt="Parenting & Pediatrics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <div className="bg-[#246A6B] p-6 md:p-8 rounded-lg shadow-lg text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Foster Financial Resilience & Reduce Employee Stress</h3>
                  <p className="text-sm md:text-base mb-4">
                    Our financial empowerment tools provide a crucial safety net and pathway to financial stability for your employees, reducing the burden of unexpected health costs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 4 - Inclusive Workplace */}
            <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center">
              <div className="w-full md:w-3/5">
                <div className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
                  <Image
                    src="/mf/pexels-shvetsa-11369378.jpg"
                    alt="Inclusive Workplace Culture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <div className="bg-[#246A6B] p-6 md:p-8 rounded-lg shadow-lg text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Build an Inclusive & Supportive Workplace Culture</h3>
                  <p className="text-sm md:text-base mb-4">
                    Lanchi is designed with a deep understanding of the local Ethiopian context and the specific challenges faced by women and families.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 5 - Address Critical Health Gaps */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full md:w-3/5">
                <div className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
                  <Image
                    src="/mf/pexels-shvetsa-11369395.jpg"
                    alt="Address Critical Health Gaps"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <div className="bg-[#246A6B] p-6 md:p-8 rounded-lg shadow-lg text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Address Critical Health Gaps for Working Women</h3>
                  <p className="text-sm md:text-base mb-4">
                    With 70.2% of Ethiopian women facing barriers to healthcare and only 40% receiving adequate antenatal care, Lanchi provides essential services where they're needed most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#246A6B] text-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
            Ready to transform your workforce?
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            Join leading companies in Ethiopia who are already partnering with Lanchi to support their employees' health and financial well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center rounded-full px-8 md:px-16 py-4 md:py-6 text-xl md:text-3xl font-bold shadow-xl transition-all duration-200 focus:ring-4 focus:ring-[#A7FFEB]/40 mt-4 group hover-fill-button hover-fill-teal cta-button-initial border-2">
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#246A6B] mr-3 transition-colors duration-200 flex-shrink-0 group-hover:border-white">
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-[#246A6B] group-hover:text-white transition-colors duration-200" />
              </div>
              <div className="sliding-text-container">
                <span className="sliding-text">
                  Discover lanchi for your workforce
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
