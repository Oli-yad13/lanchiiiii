"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0 bg-[#0F1923]">
        {/*
          TO USE YOUR OWN VIDEO: Uncomment the <video> below and
          place your video file in public/cta-video.mp4

          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/cta-video.mp4" type="video/mp4" />
          </video>
        */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 70% 60%, rgba(36,106,107,0.4) 0%, transparent 70%)",
            animation: "float 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 20% 30%, rgba(8,150,136,0.2) 0%, transparent 60%)",
            animation: "float 7s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
              Protect the women
              <br />
              in your community
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-4">
              Join the 150,000 lives we aim to protect by 2030. Whether you
              lead an iddir, a cooperative, or a workplace — Lanchi Covered
              is built for your group.
            </p>
            <p className="text-[13px] text-white/35 mb-10">
              ETB 2,100 per year · ETB 175/month · Day-One screening · 72-hour claims
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-[#0F1923] px-8 py-3.5 rounded-sm text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-white/90 transition-all duration-300"
              >
                Get in Touch
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
                href="mailto:hello@lanchi.et"
                className="text-sm font-medium uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors duration-300 border-b border-white/20 pb-0.5"
              >
                hello@lanchi.et
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="border-l border-white/15 pl-8 space-y-6">
              {[
                { value: "150K", label: "Target lives by 2030" },
                { value: "$10M", label: "Insurance claims capacity" },
                { value: "Day 1", label: "Immediate screening access" },
              ].map((item) => (
                <div key={item.label} className="py-3">
                  <div className="text-3xl font-bold text-white tracking-tight mb-1">
                    {item.value}
                  </div>
                  <div className="text-[13px] uppercase tracking-[0.2em] text-white/35">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;