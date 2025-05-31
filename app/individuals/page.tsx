"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { AnimatedButton } from "../components/AnimatedButton";

// FAQItem Component for the interactive accordion
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-900 focus:outline-none py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 pt-2' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default function IndividualsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 py-24 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content (Left) */}
          <div className="md:w-[55%] text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Care that's always there, for you and your family in Ethiopia
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Gain peace of mind with Lanchi. Access affordable, comprehensive health support for your gynecological well-being, pregnancy journey, childbirth, postpartum recovery, and care for your children under five. We're your partner in building a healthier, more financially secure future for you and your family in Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2">
                <AnimatedButton
                  href="#signup"
                  text="Sign up for Lanchi today"
                  variant="primary"
                />
              </div>
            </div>
          </div>
          {/* Image Placeholder (Right) */}
          <div className="md:w-[45%] md:ml-auto">
            <div className="relative w-full h-80 md:h-[40rem] rounded-lg overflow-hidden">
              <Image
                src="/placeholder-family.jpg"
                alt="Family image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Whether you're planning or raising a family... */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Whether you're planning or raising a family, we're here for you.
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image on the right for desktop, top for mobile */}
            <div className="md:w-1/2 md:order-2">
               <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
                <Image
                  src="/couple-with-baby.jpg"
                  alt="Couple with baby"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            {/* Text content on the left for desktop, bottom for mobile */}
            <div className="md:w-1/2 md:order-1 text-gray-700 text-lg leading-relaxed">
              <p className="mb-6">
                For the couple who's been trying for over 14 months, to the 35 year-old who wants to freeze her eggs, and the couple exploring non-traditional paths to parenthood.
              </p>
              <p className="mb-6">
                For the woman worried that pregnancy will limit her career, to the parents whose two-year-old is throwing tantrums, and the single mom seeking childcare support.
              </p>
              <p>
                For the couple devastated by a miscarriage, to the first-time mom struggling with postpartum depression, the parents planning for their second child, and the dad who can't sleep at night because his baby is crying.
              </p>
              <p className="mt-6 font-bold">
                Lanchi is for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Care that fits into your world */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Care that fits into your world
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
             Talk to a provider in minutes, including OB-GYNs, midwives, pediatricians, sleep coaches, lactation consultants, career coaches, and more.
          </p>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Video chat and message */}
            <div className="flex items-start text-left gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mb-6 shadow-sm">
                {/* Icon Placeholder */}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Video chat and message</h3>
                <p className="text-gray-700 mb-4">with family care providers</p>
                <p className="text-sm font-medium text-[#0B615E] bg-[#E0F2F7] inline-block py-1 px-3 rounded-full">Available to everyone</p>
              </div>
            </div>
            
            {/* Feature 2: A dedicated Care Advocate */}
            <div className="flex items-start text-left gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mb-6 shadow-sm">
                {/* Icon Placeholder */}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">A dedicated Care Advocate</h3>
                <p className="text-gray-700 mb-4">for every member</p>
                <p className="text-sm font-medium text-[#0B615E] bg-[#E0F2F7] inline-block py-1 px-3 rounded-full">Employer sponsored</p>
              </div>
            </div>
            
            {/* Feature 3: Personalized content */}
            <div className="flex items-start text-left gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mb-6 shadow-sm">
                {/* Icon Placeholder */}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized content</h3>
                <p className="text-gray-700 mb-4">for your family journey</p>
                <p className="text-sm font-medium text-[#0B615E] bg-[#E0F2F7] inline-block py-1 px-3 rounded-full">Employer sponsored</p>
              </div>
            </div>
            
            {/* Feature 4: Virtual classes */}
            <div className="flex items-start text-left gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mb-6 shadow-sm">
                {/* Icon Placeholder */}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Virtual classes</h3>
                <p className="text-gray-700 mb-4">to learn from the experts</p>
                <p className="text-sm font-medium text-[#0B615E] bg-[#E0F2F7] inline-block py-1 px-3 rounded-full">Employer sponsored</p>
              </div>
            </div>
            
            {/* Feature 5: Care Navigation */}
            <div className="flex items-start text-left gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mb-6 shadow-sm">
                {/* Icon Placeholder */}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Care Navigation</h3>
                <p className="text-gray-700 mb-4">Guidance to find the right care</p>
                <p className="text-sm font-medium text-[#0B615E] bg-[#E0F2F7] inline-block py-1 px-3 rounded-full">Employer sponsored</p>
              </div>
            </div>
            
            {/* Feature 6: Community Support */}
            <div className="flex items-start text-left gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mb-6 shadow-sm">
                {/* Icon Placeholder */}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                <p className="text-gray-700 mb-4">Connect with peers</p>
                <p className="text-sm font-medium text-[#0B615E] bg-[#E0F2F7] inline-block py-1 px-3 rounded-full">Employer sponsored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Section: Maven completes your care team */}
       <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image on the left for desktop, top for mobile */}
          <div className="md:w-1/2 md:order-1">
             <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/mom-teaching-kid.jpg"
                alt="Mom teaching kid"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* Text content on the right for desktop, bottom for mobile */}
          <div className="md:w-1/2 md:order-2 text-gray-700 text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lanchi completes your care team</h2>
            <p className="mb-6">
              Everything you need between visits to get peace of mind.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Care Advocates available any time to answer all of your questions</li>
                <li>On-demand providers across 30+ specialties</li>
                <li>Community support and Q&A with peers and medical providers</li>
            </ul>
            <Link href="#learn-more" className="text-[#0B615E] font-semibold hover:underline flex items-center gap-1">
                Learn more <span className="transform rotate-90">➔</span>
            </Link>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Lanchi members experience life changing moments
          </h2>
          
          {/* Horizontally Scrollable Testimonials Cards */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
              {/* Testimonial 1 */}
              <div className="snap-start flex-shrink-0 w-full md:w-[400px] bg-gray-50 p-8 rounded-xl shadow-md">
                <div className="h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-4 italic">
                    "When I had a problem at 2am and knew my doctor's office wasn't going to call me back, Lanchi responded to me within the hour."
                  </p>
                  <p className="font-bold text-[#0B615E]">- Lanchi Member</p>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="snap-start flex-shrink-0 w-full md:w-[400px] bg-gray-50 p-8 rounded-xl shadow-md">
                <div className="h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-4 italic">
                    "My baby was born early and had a 3.5 week stay in the NICU. My Care Advocate helped me at every possible point and was always kind and compassionate."
                  </p>
                  <p className="font-bold text-[#0B615E]">- Lanchi Member</p>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="snap-start flex-shrink-0 w-full md:w-[400px] bg-gray-50 p-8 rounded-xl shadow-md">
                <div className="h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-4 italic">
                    "I spoke with an OB-GYN, a doula, a career coach, a mental health therapist, a physical therapist... Every small question I had, every worry, was always met with great answers and amazing, friendly energy."
                  </p>
                  <p className="font-bold text-[#0B615E]">- Lanchi Member</p>
                </div>
              </div>
            </div>
            
            {/* Custom Scrollbar Style - Add this to global CSS or as a style tag */}
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Ask us anything</h2>
          <p className="text-center text-lg text-gray-700 mb-12">We're always here to answer your questions—and that starts now.</p>
          
          {/* Interactive FAQ Accordion */}
          <div className="space-y-4">
            <FAQItem 
              question="How much does Lanchi cost, and how does it work with my health insurance?" 
              answer="If you're on an employer-sponsored plan, you don't need to worry about insurance coverage or out-of-pocket costs for Lanchi. Your employer fully pays for your enrollment in Lanchi, so you and your partner can use it for free. Otherwise, you can pay per video appointment for less than most copays."
            />
            
            <FAQItem 
              question="What types of specialists can I connect with through Lanchi?" 
              answer="You can video chat and message with fertility, pregnancy and postpartum specialists, mental health providers, OB-GYNs, nurse practitioners, midwives, doulas, prenatal nutritionists, physical therapists, developmental psychologists, pediatricians, lactation consultants, sleep coaches, parenting experts, and career coaches anytime."
            />
            
            <FAQItem 
              question="What if I already have an in-person OB-GYN or pediatrician?" 
              answer="You can continue to see your chosen providers but video chat with Lanchi providers for guidance and second opinions. Our providers include a range of specialists you might not have access to—from midwives and doulas to diabetes coaches and career coaches. Your Care Advocate can also help you find in-person providers within your health plan if you'd like."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#0B615E] to-[#089688] text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Get free access through your employer <br className="hidden md:block" />
            or join as an individual.
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Sign up for your employer-sponsored account, with personalized programs from planning to parenting — or book appointments on your own for less than most copays.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="#signup"
              className="inline-block bg-white text-[#0B615E] rounded-full px-10 py-4 text-lg font-bold shadow-xl hover:bg-gray-100 transition-all hover:shadow-2xl transform hover:-translate-y-1"
            >
              Sign up for Lanchi
            </Link>
          </div>
        </div>
        
        <style jsx>{`
          .bg-pattern-dots {
            background-image: radial-gradient(circle, white 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}</style>
      </section>

    </div>
  );
} 