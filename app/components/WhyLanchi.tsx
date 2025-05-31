"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const WhyLanchi = () => (
  <section id="why-lanchi" className="bg-white py-20 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <div className="h-2 w-24 bg-[#0B615E] mb-8" />
      </div>

      {/* Removed image and its container */}
      {/* <div className="md:w-1/2">
        <div className="relative w-full max-w-md h-64 md:h-80 rounded-[50%_30%] overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="/placeholder-impact-image.jpg"
            alt="Lanchi Impact"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div> */}
    </div>
  </section>
);

export default WhyLanchi; 