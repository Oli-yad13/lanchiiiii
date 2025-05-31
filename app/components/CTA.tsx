"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";
import Image from "next/image";

export const CTA = () => {
  return (
    <section id="cta" className="py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-screen-xl mx-auto relative flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0">
            Whether you're planning a family or seeking better maternal care, Lanchi is here for you—with dignity, affordability, and care you can trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#get-started"
              className="inline-block bg-[#0B615E] text-white rounded-md px-8 py-4 text-lg font-semibold shadow hover:bg-[#0e7c74] transition mb-4"
            >
              Get Started Today
            </a>
            <div className="text-gray-500 text-base mt-4">
              Or talk to a Lanchi Agent in your community.
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative h-80 md:h-[450px] rounded-lg overflow-hidden">
           <Image
             src="/Waiting-Room_1_.jpg"
             alt="Waiting room scene"
             layout="fill"
             objectFit="cover"
           />
        </div>

      </div>
    </section>
  );
};

export default CTA;