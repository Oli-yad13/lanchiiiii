"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Annual Cost", value: "ETB 2,100", suffix: "/member" },
  { label: "Claims Settlement", value: "72", suffix: "hrs" },
  { label: "Cancer Payouts", value: "50K", suffix: "ETB" },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-start overflow-hidden" style={{ background: 'linear-gradient(135deg, #83cec1 0%, #a4d16f 100%)' }}>
      {/* Right half — image constrained to right 50%, with soft left edge */}
      <div
        className="absolute top-0 right-0 bottom-0 w-full lg:w-[50%] z-0 overflow-hidden"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)', maskImage: 'linear-gradient(to right, transparent 0%, black 25%)' }}
      >
        {/* The Women photo */}
        <Image
          src="/ChatGPT Image Mar 8, 2026, 01_14_12 PM.png"
          alt="Ethiopian professional women"
          fill
          className="object-cover object-center lg:object-[60%_top]"
          priority
          quality={90}
        />

        {/* Gradient for mobile text readability */}
        <div className="absolute inset-0 lg:hidden z-10" style={{ background: 'linear-gradient(to bottom, rgba(131,206,193,0.7) 0%, rgba(145,203,160,0.45) 30%, rgba(164,209,111,0.2) 55%, transparent 100%)' }} />

      </div>

      {/* Layer 3 — Text content (upper portion, above the panel) */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-28 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Headline + CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-[1px] w-10 bg-white/40" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#0F1923]/60 lg:text-white/80">
                Affordable protection for Ethiopian women
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0F1923] lg:text-white mb-8 hero-text-shadow"
            >
              Empowering Ethiopia&apos;s
              <br />
              workforce through
              <br />
              health resilience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base md:text-lg text-[#0F1923]/80 lg:text-white/80 max-w-xl leading-relaxed mb-10 hero-text-shadow-sm"
            >
              The only integrated microsaving, microcredit and microinsurance
              platform protecting female employees against the financial shocks of
              breast and cervical cancer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-6"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-[#0F1923] px-8 py-4 rounded-sm text-[15px] font-semibold uppercase tracking-[0.1em] hover:bg-white/90 transition-all duration-300"
              >
                Get a Corporate Quote
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#problem"
                className="text-sm font-medium uppercase tracking-[0.1em] text-[#0F1923]/60 lg:text-white/50 hover:text-[#0F1923] lg:hover:text-white transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right: Stats Sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
            className="lg:col-span-5 hidden lg:block relative z-20"
          >
            <div className="border-l border-white/15 pl-8 space-y-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="py-5 border-b border-white/[0.07] last:border-b-0 group"
                >
                  <div className="text-[13px] uppercase tracking-[0.2em] text-white/60 mb-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                    {stat.label}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[3rem] font-bold text-white leading-none tracking-tight" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/70 font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
                      {stat.suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;