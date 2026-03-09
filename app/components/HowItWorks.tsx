"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Seamless Digital Onboarding",
    description:
      "Using integrated e-KYC protocols, we pull data from national ID systems to enroll your entire workforce instantly — no physical forms required.",
  },
  {
    number: "02",
    title: "Sachet Payment Model",
    description:
      "Premiums are structured for \"sachet\" consumption via payroll deduction or daily mobile wallet debits — just ETB 5.75 per day, ensuring radical affordability.",
  },
  {
    number: "03",
    title: "72-Hour Claims Settlement",
    description:
      "Claims are initiated by uploading digital medical reports. ID-NET validates within 48 hours, Nib Insurance completes adjudication within 24 hours.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-white py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-10 bg-gray-300" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              How It Works
            </span>
            <div className="h-[1px] w-10 bg-gray-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] mb-5"
          >
            The digital rail
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Powered by ID-NET for mass-market scale. From enrollment to claims
            settlement, everything is digital.
          </motion.p>
        </div>

        {/* Steps — three columns with borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`py-10 md:py-12 ${i < 2 ? "md:border-r border-gray-200 md:pr-10" : ""
                } ${i > 0 ? "md:pl-10" : ""} border-t md:border-t-0 border-gray-200 first:border-t-0`}
            >
              <span className="text-[40px] md:text-[48px] font-bold text-gray-100 leading-none block mb-5">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;