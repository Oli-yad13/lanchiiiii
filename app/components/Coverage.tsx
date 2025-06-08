"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

export const Coverage = () => {
  const services = [
    {
      title: "Proactive Gynecological Wellness",
      description: "Regular check-ups and early detection services for women's health concerns.",
      link: "/individuals#services",
      image: "/placeholder-gynecology.jpg",
      tag: "Wellness",
    },
    {
      title: "Pre-Pregnancy & Family Planning",
      description: "Personalized counseling and health assessments for family planning.",
      link: "/individuals#services",
      image: "/placeholder-planning.jpg",
      tag: "Planning",
    },
    {
      title: "Comprehensive Antenatal Care",
      description: "WHO-aligned care including checkups, tests, and nutrition counseling.",
      link: "/individuals#services",
      image: "/placeholder-antenatal.jpg",
      tag: "Antenatal",
    },
    {
      title: "Safe Delivery & Postnatal Support",
      description: "Skilled birth attendants and essential post-birth care for mother and child.",
      link: "/individuals#services",
      image: "/placeholder-delivery.jpg",
      tag: "Postnatal",
    },
    {
      title: "Financial Empowerment",
      description: "Integrated financial solutions making healthcare accessible to all.",
      link: "/individuals#services",
      image: "/placeholder-financial.jpg",
      tag: "Financial",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 overflow-hidden relative bg-[#246A6B] text-white">
      <div className="max-w-screen-xl mx-auto w-full relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 rounded-xl shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            End-to-End Support for Your Employees
          </motion.h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Lanchi provides a seamless continuum of care, supporting your employees through crucial life stages with integrated financial and health services.
          </p>
          <Link
            href="/individuals#services"
            className="inline-block bg-white text-[#246A6B] rounded-full px-8 py-3 text-lg font-bold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Explore our services in detail
          </Link>
        </motion.div>

        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-[500px] flex-shrink-0 w-80">
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-gray-100">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 w-fit">
                  {service.tag}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                
                <p className="text-gray-700 text-base leading-relaxed mb-4 flex-grow">{service.description}</p>
                
                <Link href={service.link} className="text-[#246A6B] text-sm font-semibold hover:underline flex items-center gap-1 mt-auto">
                  Learn more <span className="transform rotate-0 group-hover:rotate-90 transition-transform duration-200">➔</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;