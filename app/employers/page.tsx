"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 py-24 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content (Left) */}
          <div className="md:w-[45%] text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Transform Your Ethiopian Workforce. Empower Your Community.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Enhance productivity and directly address the significant healthcare and financial stability challenges impacting your entire workforce and their families, with dedicated support tailored for your women employees. Lanchi provides a unique, integrated solution: combining vital financial empowerment with accessible, quality care through their journey – from gynecological health to pregnancy, childbirth, postpartum, and early childhood (under-5) support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                href="#contact"
                className="inline-block bg-[#0B615E] text-white rounded-full px-8 py-3 text-lg font-bold shadow-lg hover:bg-[#089688] transition-colors"
              >
                Book a demo
              </Link>
              <Link
                href="#learn-more"
                className="inline-block border-2 border-[#0B615E] text-[#0B615E] rounded-full px-8 py-3 text-lg font-bold hover:bg-[#0B615E] hover:text-white transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
          {/* Image Placeholder (Right) */}
          <div className="md:w-[55%] md:ml-auto">
            <div className="relative w-full h-80 md:h-[40rem] rounded-lg overflow-hidden">
              <Image
                src="/pexels-polina-tankilevitch-3875218.jpg"
                alt="Family looking at a laptop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0B615E] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Better care can't wait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70.2%</div>
              <p className="text-sm opacity-80">of women face at least one barrier to accessing health services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-sm opacity-80">of women receive the recommended four or more antenatal care visits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">267</div>
              <p className="text-sm opacity-80">maternal deaths per 100,000 live births (2020)</p>
            </div>
          </div>
          <p className="text-sm opacity-80 mt-8 text-center">Sources: Ethiopian Health Data (Various), UNFPA, DHS Program</p>
        </div>
      </section>

      {/* Benefits Section with Maven-style Cards */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Key Benefits of Partnering with Lanchi in Ethiopia
          </h2>
          
          {/* Card Grid Layout */}
          <div className="grid grid-cols-1 gap-16">
            {/* Card 1 - Health & Productivity */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 relative">
                  <Image 
                    src="/mf/pexels-shvetsa-11369178.jpg" 
                    alt="Fertility & Family Building" 
                    width={800}
                    height={500}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }} 
                    className="aspect-[16/9]"
                  />
                </div>
                <div className="absolute md:relative top-1/3 left-10 md:top-0 md:left-0 w-[300px] md:w-2/5">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0B615E] p-8 rounded-lg shadow-lg text-white"
                  >
                    <h3 className="text-2xl font-bold mb-3">Enhance Employee Well-being & Productivity</h3>
                    <p className="text-base mb-4">
                      By uniquely integrating accessible micro-savings, loans, and micro-insurance with comprehensive maternal and child healthcare, Lanchi directly tackles the financial and health stressors faced by your Ethiopian employees.
                    </p>
                    <p className="text-base font-semibold mb-4">
                      Your Business Result: Reduced absenteeism, lower presenteeism, and a more focused, engaged, and productive workforce.
                    </p>
                    <Link href="#" className="text-white underline">Learn more</Link>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Employer of Choice */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 relative order-1 md:order-2">
                  <Image 
                    src="/mf/pexels-shvetsa-11369475.jpg" 
                    alt="Maternity & Newborn Care" 
                    width={800}
                    height={500}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }} 
                    className="aspect-[16/9]"
                  />
                </div>
                <div className="absolute md:relative top-1/3 right-10 md:top-0 md:right-0 w-[300px] md:w-2/5 order-2 md:order-1">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-[#0B615E] p-8 rounded-lg shadow-lg text-white"
                  >
                    <h3 className="text-2xl font-bold mb-3">Become an Employer of Choice & Retain Valuable Talent</h3>
                    <p className="text-base mb-4">
                      Offer a truly impactful and differentiated employee benefit that demonstrates a deep commitment to the well-being of your team and their families.
                    </p>
                    <p className="text-base font-semibold mb-4">
                      Your Business Result: Increased employee loyalty, significantly improved retention rates, and a stronger ability to attract top candidates.
                    </p>
                    <Link href="#" className="text-white underline">Learn more</Link>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Financial Resilience */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 relative">
                  <Image 
                    src="/mf/pexels-shvetsa-11369364.jpg" 
                    alt="Parenting & Pediatrics" 
                    width={800}
                    height={500}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }} 
                    className="aspect-[16/9]"
                  />
                </div>
                <div className="absolute md:relative top-1/3 left-10 md:top-0 md:left-0 w-[300px] md:w-2/5">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#0B615E] p-8 rounded-lg shadow-lg text-white"
                  >
                    <h3 className="text-2xl font-bold mb-3">Foster Financial Resilience & Reduce Employee Stress</h3>
                    <p className="text-base mb-4">
                      Our financial empowerment tools provide a crucial safety net and pathway to financial stability for your employees, reducing the burden of unexpected health costs.
                    </p>
                    <p className="text-base font-semibold mb-4">
                      Your Business Result: A workforce less burdened by financial anxieties, leading to improved mental well-being and better decision-making.
                    </p>
                    <Link href="#" className="text-white underline">Learn more</Link>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Card 4 - Inclusive Workplace */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 relative order-1 md:order-2">
                  <Image 
                    src="/mf/pexels-shvetsa-11369400.jpg" 
                    alt="Inclusive Workplace Culture" 
                    width={800}
                    height={500}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }} 
                    className="aspect-[16/9]"
                  />
                </div>
                <div className="absolute md:relative top-1/3 right-10 md:top-0 md:right-0 w-[300px] md:w-2/5 order-2 md:order-1">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-[#0B615E] p-8 rounded-lg shadow-lg text-white"
                  >
                    <h3 className="text-2xl font-bold mb-3">Build an Inclusive & Supportive Workplace Culture</h3>
                    <p className="text-base mb-4">
                      Lanchi is designed with a deep understanding of the local Ethiopian context and the specific challenges faced by women and families.
                    </p>
                    <p className="text-base font-semibold mb-4">
                      Your Business Result: Strengthen your reputation as a caring, equitable, and forward-thinking employer in Ethiopia.
                    </p>
                    <Link href="#" className="text-white underline">Learn more</Link>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Card 5 - Address Critical Health Gaps */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 relative">
                  <Image 
                    src="/mf/pexels-shvetsa-11369188.jpg" 
                    alt="Address Critical Health Gaps" 
                    width={800}
                    height={500}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }} 
                    className="aspect-[16/9]"
                  />
                </div>
                <div className="absolute md:relative top-1/3 left-10 md:top-0 md:left-0 w-[300px] md:w-2/5">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-[#0B615E] p-8 rounded-lg shadow-lg text-white"
                  >
                    <h3 className="text-2xl font-bold mb-3">Address Critical Health Gaps for Working Women</h3>
                    <p className="text-base mb-4">
                      With 70.2% of Ethiopian women facing barriers to healthcare and only 40% receiving adequate antenatal care, Lanchi provides essential services where they're needed most.
                    </p>
                    <p className="text-base font-semibold mb-4">
                      Your Business Result: Healthier pregnancy journeys and fewer child health emergencies mean fewer disruptions and more consistent workforce participation.
                    </p>
                    <Link href="#" className="text-white underline">Learn more</Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B615E] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to transform your workforce?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join leading companies in Ethiopia who are already partnering with Lanchi to support their employees' health and financial well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact"
              className="inline-block bg-white text-[#0B615E] rounded-full px-8 py-3 text-lg font-bold shadow-lg hover:bg-gray-100 transition-colors"
            >
              Book a demo
            </Link>
            <Link
              href="#learn-more"
              className="inline-block border-2 border-white text-white rounded-full px-8 py-3 text-lg font-bold hover:bg-white hover:text-[#0B615E] transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 