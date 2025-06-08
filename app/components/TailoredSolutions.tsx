"use client";
import { FeatureSteps } from "@/app/components/blocks/feature-section";

const tailoredFeatures = [
  {
    step: '1',
    title: 'Unparalleled Access',
    content: "On-demand care from local clinics, midwives, and women's health specialists—wherever you are in Ethiopia.",
    image: '/lanchi-tailored-01.jpg'
  },
  {
    step: '2',
    title: 'Community-Based Enrollment',
    content: "Seamless sign-up through trusted Iddir groups and local partners, making coverage accessible for all.",
    image: '/lanchi-tailored-02.jpg'
  },
  {
    step: '3',
    title: 'Culturally Competent Care',
    content: "Services designed for Ethiopian women, with support in Amharic and local languages.",
    image: '/lanchi-tailored-03.jpg'
  },
  {
    step: '4',
    title: 'Affordable, Full-Spectrum Coverage',
    content: "From fertility to safe delivery and postpartum, Lanchi covers every stage at a price families can afford.",
    image: '/lanchi-tailored-04.jpg'
  }
];

const TailoredSolutions = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-32 px-4 sm:px-8 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#246A6B]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#089688]/5 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#246A6B] tracking-tight">
              Healthcare, Tailored for Ethiopia
            </h2>
            <p className="text-2xl md:text-3xl text-[#089688] font-light max-w-3xl mx-auto">
              Comprehensive solutions addressing the unique health needs of families and individuals 
            </p>
          </div>

          <FeatureSteps 
            features={tailoredFeatures}
            title=""
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions; 