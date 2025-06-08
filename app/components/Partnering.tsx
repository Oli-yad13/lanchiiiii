"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const partnerOptions = [
  {
    title: "For Employers",
    desc: "Build a healthier, more productive workforce with comprehensive women's health coverage.",
    icon: "/employers.png"
  },
  {
    title: "For Individuals",
    desc: "Get affordable, comprehensive support for yourself and your family at every stage of life.",
    icon: "/employees.png"
  },
];

const Partnering = () => (
  <section id="partnering" className="bg-[#E8F5E9] py-20 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-12 text-gray-900">
        See what partnering with Lanchi can do for you
      </h2>
      <div className="h-2 w-full max-w-5xl mx-auto bg-[#246A6B] mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
        {partnerOptions.map((opt, i) => (
          <Link 
            href={opt.title === "For Employers" ? "/employers" : "/individuals"}
            key={opt.title} 
            className="block w-full h-[800px] transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
          >
            <Image 
              src={opt.title === "For Employers" ? "/employers.png" : "/employees.png"}
              alt={opt.title}
              width={1000}
              height={800}
              className="w-full h-full object-contain"
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Partnering; 