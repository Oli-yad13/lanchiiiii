"use client";
import React from 'react';
import { AnimatedButton } from '../components/AnimatedButton';
import Image from 'next/image';

export default function IndividualsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 py-12 md:py-24 px-4 md:px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content (Left) */}
          <div className="w-full md:w-[55%] text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
              Care that's always there, for you and your family in Ethiopia
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
              Gain peace of mind with Lanchi. Access affordable, comprehensive health support for your gynecological well-being, pregnancy journey, childbirth, postpartum recovery, and care for your children under five. We're your partner in building a healthier, more financially secure future for you and your family in Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2">
                <AnimatedButton
                  href="/contact"
                  text="Sign up for Lanchi"
                  variant="primary"
                />
              </div>
            </div>
          </div>
          {/* Image (Right) */}
          <div className="w-full md:w-[45%] md:ml-auto">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src="/mf/pexels-shvetsa-11369364.jpg"
                alt="Family looking at a laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Whether you're planning or raising a family... */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            Whether you're planning or raising a family, we're here for you.
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image on the right for desktop, top for mobile */}
            <div className="w-full md:w-1/2 md:order-2">
              <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/couple-with-baby.jpg"
                  alt="Couple with baby"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Text content on the left for desktop, bottom for mobile */}
            <div className="w-full md:w-1/2 md:order-1 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className="mb-4 md:mb-6">
                For the couple who's been trying for over 14 months, to the 35 year-old who wants to freeze her eggs, and the couple exploring non-traditional paths to parenthood.
              </p>
              <p className="mb-4 md:mb-6">
                For the woman worried that pregnancy will limit her career, to the parents whose two-year-old is throwing tantrums, and the single mom seeking childcare support.
              </p>
              <p className="mb-4 md:mb-6">
                For the couple devastated by a miscarriage, to the first-time mom struggling with postpartum depression, the parents planning for their second child, and the dad who can't sleep at night because his baby is crying.
              </p>
              <p className="font-bold text-[#246A6B]">
                Lanchi is for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Lanchi completes your care team */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image on the left for desktop, top for mobile */}
          <div className="w-full md:w-1/2 md:order-1">
            <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/mom-teaching-kid.jpg"
                alt="Mom teaching kid"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Text content on the right for desktop, bottom for mobile */}
          <div className="w-full md:w-1/2 md:order-2 text-gray-700 text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Lanchi completes your care team
            </h2>
            <p className="mb-4 md:mb-6">
              Everything you need between visits to get peace of mind.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 md:mb-6">
              <li>Care Advocates available any time to answer all of your questions</li>
              <li>On-demand providers across 30+ specialties</li>
              <li>Community support and Q&A with peers and medical providers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#246A6B] to-[#089688] text-white py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8">
            Get free access through your employer <br className="hidden md:block" />
            or join as an individual.
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Sign up for your employer-sponsored account, with personalized programs from planning to parenting — or book appointments on your own for less than most copays.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="inline-block bg-white text-[#246A6B] rounded-full px-8 md:px-10 py-3 md:py-4 text-lg font-bold shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              Sign up for Lanchi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}