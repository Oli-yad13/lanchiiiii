"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "../components/PageHero";

const pillars = [
    {
        number: "01",
        title: "Microsaving",
        subtitle: "Lanchi Health Security Fund",
        description:
            "Proactive digital savings dedicated to routine reproductive health needs and wellness expenses. Members build a personal health fund through daily micro-deposits, creating a financial cushion for preventative care.",
        features: [
            "Daily micro-deposits from ETB 5.75",
            "Dedicated to reproductive health needs",
            "Builds financial resilience over time",
            "Interest-bearing digital savings account",
        ],
    },
    {
        number: "02",
        title: "Microcredit",
        subtitle: "Maternal Health Advance",
        description:
            "Immediate liquidity — up to 3x your savings — for predictable life events like institutional delivery. Ensures continuity of care from pregnancy to postnatal recovery without financial disruption.",
        features: [
            "Up to 3× savings balance available",
            "Short-term loans for maternity care",
            "Postnatal check-up financing",
            "Flexible repayment via payroll deduction",
        ],
    },
    {
        number: "03",
        title: "Microinsurance",
        subtitle: "Cancer Care Shield",
        description:
            "A group-based risk product providing a lump-sum payout upon the first definitive diagnosis of invasive cancer. Underwritten by Nib Insurance Company S.C., it prevents family asset liquidation during medical crises.",
        features: [
            "ETB 30,000 breast cancer payout",
            "ETB 20,000 cervical cancer payout",
            "First-diagnosis trigger — no waiting period",
            "72-hour claims settlement guarantee",
        ],
    },
];

const guaranteedBenefits = [
    {
        benefit: "Breast Cancer Screening",
        detail: "Annual Clinical Breast Exam (CBE)",
        impact: "Early detection reduces treatment costs by 70%",
    },
    {
        benefit: "Cervical Cancer Screening",
        detail: "Annual Visual Inspection with Acetic Acid (VIA)",
        impact: "Shifts paradigm from crisis to prevention",
    },
    {
        benefit: "Cancer Cash Benefit",
        detail: "Lump-sum payout upon first diagnosis",
        impact: "Prevents catastrophic out-of-pocket spending",
    },
    {
        benefit: "Integrated Credit",
        detail: "Short-term loans for maternity & postnatal care",
        impact: "Ensures continuity of care through recovery",
    },
];

const digitalRail = [
    {
        number: "01",
        title: "Seamless Digital Onboarding",
        description:
            "Using integrated e-KYC protocols, we pull data from national ID systems to enroll your entire workforce instantly — no physical forms, no delays.",
    },
    {
        number: "02",
        title: "Sachet Payment Model",
        description:
            "Premiums are structured for daily consumption at ETB 5.75 via payroll deduction or mobile wallet debits. Affordability engineered for low-wage earners.",
    },
    {
        number: "03",
        title: "72-Hour Settlement",
        description:
            "Claims are initiated by uploading digital medical reports via the app. ID-NET validates within 48 hours; Nib Insurance completes final adjudication within 24 hours.",
    },
];

export default function SolutionPage() {
    return (
        <main>
            <PageHero
                tag="Our Solution"
                headline="A holistic financial ecosystem for women"
                subtitle="Lanchi is more than insurance — it is an integrated microsaving, microcredit, and microinsurance platform protecting female employees against the financial shocks of breast and cervical cancer."
            />

            {/* Three Pillars — Detailed */}
            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Three Pillars
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
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em]">
                                The three-pillar approach
                            </h2>
                        </motion.div>
                    </div>

                    <div className="space-y-0">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={pillar.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-t border-gray-200 first:border-t-0"
                            >
                                <div className="lg:col-span-1">
                                    <span className="text-[13px] font-mono text-gray-300">
                                        {pillar.number}
                                    </span>
                                </div>
                                <div className="lg:col-span-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-[13px] uppercase tracking-[0.15em] text-gray-400">
                                        {pillar.subtitle}
                                    </p>
                                </div>
                                <div className="lg:col-span-4">
                                    <p className="text-[15px] text-gray-500 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                                <div className="lg:col-span-3">
                                    <ul className="space-y-2">
                                        {pillar.features.map((f) => (
                                            <li
                                                key={f}
                                                className="flex items-start gap-2 text-[13px] text-gray-500"
                                            >
                                                <span className="text-[#246A6B] mt-1 flex-shrink-0">
                                                    ✓
                                                </span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guaranteed Day-One Benefits */}
            <section className="bg-[#F7F7F7] py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Day-One Value
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-4">
                                Guaranteed preventative services
                            </h2>
                            <p className="text-lg text-gray-500 max-w-2xl">
                                Unlike standard health covers that enforce waiting periods, every
                                Lanchi member receives immediate access to annual screenings from
                                day one.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-300">
                        {/* Table header */}
                        <div className="hidden md:grid grid-cols-12 gap-8 py-4 border-b border-gray-200">
                            <div className="col-span-3">
                                <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400">
                                    Benefit
                                </span>
                            </div>
                            <div className="col-span-5">
                                <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400">
                                    Detail
                                </span>
                            </div>
                            <div className="col-span-4">
                                <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400">
                                    Strategic Impact
                                </span>
                            </div>
                        </div>

                        {guaranteedBenefits.map((item, i) => (
                            <motion.div
                                key={item.benefit}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-gray-200"
                            >
                                <div className="md:col-span-3">
                                    <span className="text-[15px] font-semibold text-gray-900">
                                        {item.benefit}
                                    </span>
                                </div>
                                <div className="md:col-span-5">
                                    <span className="text-[15px] text-gray-500">
                                        {item.detail}
                                    </span>
                                </div>
                                <div className="md:col-span-4">
                                    <span className="text-[13px] text-[#246A6B] font-medium">
                                        {item.impact}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Rail */}
            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    How It Works
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em]">
                                The digital rail
                            </h2>
                            <p className="text-lg text-gray-500 max-w-2xl mt-4">
                                Powered by ID-NET for mass-market scale.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {digitalRail.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`py-8 ${i < 2 ? "md:border-r border-gray-200 md:pr-10" : ""
                                    } ${i > 0 ? "md:pl-10" : ""} border-t md:border-t-0 border-gray-200 first:border-t-0`}
                            >
                                <span className="text-[13px] font-mono text-gray-300 block mb-4">
                                    {step.number}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
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

            {/* Bottom CTA */}
            <section className="bg-[#0F1923] py-24 md:py-28 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto text-center">
                    <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white mb-4">
                        Ready to protect your workforce?
                    </h2>
                    <p className="text-white/50 mb-8 max-w-lg mx-auto">
                        ETB 2,100 per member annually. Day-one screening included.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-white text-[#0F1923] px-8 py-3.5 rounded-sm text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-white/90 transition-all duration-300"
                    >
                        Get a Corporate Quote
                        <svg
                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
