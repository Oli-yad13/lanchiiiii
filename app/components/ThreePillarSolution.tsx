"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
    {
        number: "01",
        title: "Microsaving",
        subtitle: "Lanchi Health Security Fund",
        description:
            "Proactive digital savings for routine reproductive health needs and wellness expenses. Build a financial safety net, one small deposit at a time.",
    },
    {
        number: "02",
        title: "Microcredit",
        subtitle: "Maternal Health Advance",
        description:
            "Immediate liquidity — up to 3× your savings — for predictable life events like institutional delivery. Get the funds you need, when you need them.",
    },
    {
        number: "03",
        title: "Microinsurance",
        subtitle: "Cancer Care Shield",
        description:
            "A group-based risk product providing a lump-sum payout upon the first definitive diagnosis of invasive cancer. Financial protection when it matters most.",
    },
];

const ThreePillarSolution = () => {
    return (
        <section id="solution" className="relative bg-white py-28 md:py-36 px-6 md:px-12 overflow-hidden">
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
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
                            Our Solution
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
                        A three-pillar approach
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Lanchi is more than insurance — it is a holistic financial ecosystem
                        for women, built around three interconnected pillars.
                    </motion.p>
                </div>

                {/* Pillar Cards — editorial, no icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className={`py-10 md:py-12 ${i < 2 ? "md:border-r border-gray-200 md:pr-10" : ""
                                } ${i > 0 ? "md:pl-10" : ""} border-t md:border-t-0 border-gray-200 first:border-t-0`}
                        >
                            <span className="text-[40px] md:text-[48px] font-bold text-gray-100 leading-none block mb-5">
                                {pillar.number}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {pillar.title}
                            </h3>
                            <p className="text-[13px] uppercase tracking-[0.15em] text-[#246A6B] mb-5">
                                {pillar.subtitle}
                            </p>
                            <p className="text-[15px] text-gray-500 leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14 pt-10 border-t border-gray-200"
                >
                    <Link
                        href="/solution"
                        className="group inline-flex items-center gap-2 text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        Explore our full solution
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ThreePillarSolution;
