"use client";
import Image from "next/image";

interface CTAProps {
  buttonClassName?: string;
}

export const CTA = ({ buttonClassName }: CTAProps) => {
  return (
    <section id="cta" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-screen-xl mx-auto relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Join?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
            Whether you're planning a family or seeking better maternal care, Lanchi is here for you—with dignity, affordability, and care you can trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#get-started"
              className={buttonClassName || "inline-block bg-white text-[#246A6B] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-bold shadow-lg hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"}
            >
              Get Started Today
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-80 lg:h-[450px] rounded-lg overflow-hidden">
           <Image
             src="/Waiting-Room_1_.jpg"
             alt="Waiting room scene"
             fill
             className="object-cover"
           />
        </div>

      </div>
    </section>
  );
};

export default CTA;