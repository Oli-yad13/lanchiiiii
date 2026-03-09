"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

const values = [
    {
        title: "Prevention First",
        description:
            "We believe healthcare should be taught, not treated. By embedding annual cancer screenings into every membership from day one, we shift the paradigm from reactive treatment to proactive prevention.",
    },
    {
        title: "Radical Affordability",
        description:
            "At ETB 5.75 per day — less than the cost of daily consumables — we've engineered comprehensive health protection that's accessible to every working woman in Ethiopia, regardless of income level.",
    },
    {
        title: "Digital-Native Delivery",
        description:
            "From e-KYC enrollment to 72-hour claims settlement, every touchpoint is built on our digital rail. No physical forms, no unnecessary delays, no friction.",
    },
    {
        title: "Women-Centered Design",
        description:
            "Every product decision, every benefit structure, every communication is designed with and for the women we serve. Their health resilience is our mission.",
    },
];

export default function AboutPage() {
    return (
        <main>
            <PageHero
                tag="About Lanchi"
                headline="Redefining health protection for Ethiopia's workforce"
                subtitle="Founded as part of the ID-NET ecosystem, Lanchi is industrializing the distribution of health risk coverage to ensure cancer remains a manageable event — not a source of financial ruin."
            />

            {/* Our Story */}
            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Our Story
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-9"
                        >
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-8">
                                Health should be protected,
                                <br />
                                not just treated
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <p className="text-[15px] text-gray-500 leading-relaxed">
                                    The Ethiopian economic landscape is undergoing a profound paradigm
                                    shift. At the center of this evolution is Lanchi — a holistic
                                    financial and health wellness platform that addresses the
                                    country&apos;s dual burden of maternal health challenges and
                                    non-communicable diseases.
                                </p>
                                <p className="text-[15px] text-gray-500 leading-relaxed">
                                    Developed as a flagship product of ID-NET, Lanchi utilizes a
                                    group-based microinsurance model underwritten by Nib Insurance
                                    Company S.C. to provide high-impact health security for working
                                    women in the garment, horticulture, and industrial sectors.
                                </p>
                            </div>

                            {/* Placeholder image */}
                            <div className="relative aspect-[16/7] bg-[#F0F7F7] rounded-sm overflow-hidden mb-4">
                                <Image
                                    src="/hero-bg.png"
                                    alt="Lanchi team and community"
                                    fill
                                    className="object-cover"
                                    quality={85}
                                />
                                <div className="absolute inset-0 bg-[#246A6B]/10" />
                            </div>
                            <p className="text-[13px] uppercase tracking-[0.2em] text-gray-400">
                                Empowering Ethiopia&apos;s workforce through integrated health and financial solutions
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

{/* Our Values */}
            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Our Philosophy
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em]">
                                What drives us
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 md:p-10 border-b border-gray-200 ${i % 2 === 0 ? "md:border-r" : ""
                                    } ${i < 2 ? "" : ""}`}
                            >
                                <span className="text-[13px] font-mono text-gray-300 block mb-4">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {v.title}
                                </h3>
                                <p className="text-[15px] text-gray-500 leading-relaxed">
                                    {v.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="bg-[#F7F7F7] py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Trusted Partners
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em]">
                                Built on trust
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-300 border-b border-gray-200">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 border-b border-gray-200 md:border-r"
                        >
                            <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                                Underwritten by
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Nib Insurance Company S.C.
                            </h3>
                            <p className="text-[15px] text-gray-500 leading-relaxed">
                                A stabilizing force in the Ethiopian economy with a paid-up capital
                                of ETB 1.21 billion. NIC retains exclusive authority over
                                underwriting, pricing, and claims adjudication, maintaining technical
                                reserves and solvency margins required by the National Bank of Ethiopia.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 md:p-10 border-b border-gray-200"
                        >
                            <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                                Implemented by
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                ID-NET
                            </h3>
                            <p className="text-[15px] text-gray-500 leading-relaxed">
                                The digital infrastructure handling e-KYC onboarding,
                                automated enrollment, sachet premium collection, and real-time
                                claims processing — built to reach women at scale across Ethiopia.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="p-8 md:p-10 border-b border-gray-200 md:border-r"
                        >
                            <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                                Supported by
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                FSD Ethiopia &amp; FSD Africa
                            </h3>
                            <p className="text-[15px] text-gray-500 leading-relaxed">
                                Funded the development of ID-NET and enabled the actuarial
                                review ensuring Lanchi Covered is both financially sustainable
                                and affordable for Ethiopian women.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 md:p-10 border-b border-gray-200"
                        >
                            <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                                Supported by
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                MSI
                            </h3>
                            <p className="text-[15px] text-gray-500 leading-relaxed">
                                Supporting women&apos;s health and financial inclusion, helping
                                extend Lanchi Covered&apos;s reach to iddirs, cooperatives, and
                                women&apos;s groups across Ethiopia.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#0F1923] py-24 md:py-28 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto text-center">
                    <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white mb-4">
                        Empowering Ethiopia&apos;s workforce
                    </h2>
                    <p className="text-white/50 mb-8 max-w-lg mx-auto">
                        Join the companies building health resilience for their employees.
                    </p>
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
                </div>
            </section>
        </main>
    );
}
