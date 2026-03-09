"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "../components/PageHero";

const targetMarkets = [
    {
        number: "01",
        title: "Iddir Unions",
        description: "Ethiopia's most trusted community structures. Iddirs provide the ideal distribution channel — built-in trust, regular contribution habits, and concentrated female membership.",
        stat: "40M+",
        statLabel: "Iddir members nationwide",
    },
    {
        number: "02",
        title: "Women's Cooperatives",
        description: "Reaching women through savings and credit cooperatives, agricultural cooperatives, and other organized women-led groups across urban and rural Ethiopia.",
        stat: "3M+",
        statLabel: "Cooperative members",
    },
    {
        number: "03",
        title: "Textile & Horticulture Workers",
        description: "The garment sector (85% female) and export flower farms offer payroll-based premium collection — making coverage seamless and automatic for workers.",
        stat: "85%",
        statLabel: "Female in textile sector",
    },
    {
        number: "04",
        title: "Employers & Workplaces",
        description: "Corporations and SMEs offering Lanchi Covered as an employee benefit — aligned with Ethiopia's National Cancer Control Plan (NCCP) and Digital Ethiopia 2030.",
        stat: "NCCP",
        statLabel: "Aligned nationally",
    },
];

const pricingBreakdown = [
    { component: "Breast Cancer Risk", assumption: "0.5% incidence rate", payout: "ETB 30,000" },
    { component: "Cervical Cancer Risk", assumption: "1.0% incidence rate", payout: "ETB 20,000" },
    { component: "Preventative Screening", assumption: "ETB 1,000–1,300 annual cost", payout: "Annual CBE + VIA" },
];

const competitors = [
    { name: "APA Insurance (Femina Plus)", focus: "Cash benefits for breast, cervical, and ovarian cancer; HPV vaccinations" },
    { name: "Nabta Health", focus: "Corporate health subscriptions and wellness for female workforces in MEA" },
    { name: "Débbo Africa", focus: "Culturally competent corporate wellness plans for African women" },
    { name: "Jubilee Health (J-Biz)", focus: "Flexible corporate health covers for SMEs and large groups in EA" },
    { name: "Reliance Health", focus: "Tech-enabled health insurance for employers in Nigeria and Egypt" },
    { name: "Sanlam Cancer Protection", focus: "Comprehensive cancer cover with lump-sum payouts" },
];

export default function ImpactPage() {
    return (
        <main>
            <PageHero
                tag="Impact & Market"
                headline="Driving resilient corporate growth"
                subtitle="Lanchi occupies a unique niche by combining preventative diagnostic services with catastrophic payouts — creating a commercially viable blueprint for digital-native health services across Sub-Saharan Africa."
            />

            {/* Target Markets */}
            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Target Market
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-4">
                                The &ldquo;missing middle&rdquo;
                            </h2>
                            <p className="text-lg text-gray-500 max-w-2xl">
                                Economically active women who lack formal safety nets but have rising incomes.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {targetMarkets.map((market, i) => (
                            <motion.div
                                key={market.number}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 md:p-10 border-b border-gray-200 ${i % 2 === 0 ? "md:border-r" : ""
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-[13px] font-mono text-gray-300">
                                        {market.number}
                                    </span>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-gray-900">
                                            {market.stat}
                                        </div>
                                        <div className="text-[13px] uppercase tracking-[0.15em] text-gray-400">
                                            {market.statLabel}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {market.title}
                                </h3>
                                <p className="text-[15px] text-gray-500 leading-relaxed">
                                    {market.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Transparency */}
            <section className="bg-[#F7F7F7] py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Pricing
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-4">
                                Radical affordability
                            </h2>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-[4rem] font-bold text-gray-900 leading-none tracking-tight">
                                    ETB 2,100
                                </span>
                                <span className="text-lg text-gray-400">/member annually</span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-2xl font-semibold text-[#246A6B]">
                                    ETB 175
                                </span>
                                <span className="text-base text-gray-400">/month — less than ETB 6 per day</span>
                            </div>
                            <p className="text-lg text-gray-500 max-w-2xl">
                                Accessible to every woman in every group. Our product targets a
                                conservative loss ratio of 64.3%, delivering significantly higher
                                value than the microinsurance industry median of 23%.
                            </p>
                        </div>
                    </div>

                    {/* Pricing table */}
                    <div className="border-t border-gray-300">
                        <div className="hidden md:grid grid-cols-12 gap-8 py-4 border-b border-gray-200">
                            <div className="col-span-4">
                                <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400">Component</span>
                            </div>
                            <div className="col-span-4">
                                <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400">Assumption</span>
                            </div>
                            <div className="col-span-4">
                                <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400">Benefit / Payout</span>
                            </div>
                        </div>
                        {pricingBreakdown.map((item, i) => (
                            <motion.div
                                key={item.component}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-gray-200"
                            >
                                <div className="md:col-span-4">
                                    <span className="text-[15px] font-semibold text-gray-900">{item.component}</span>
                                </div>
                                <div className="md:col-span-4">
                                    <span className="text-[15px] text-gray-500">{item.assumption}</span>
                                </div>
                                <div className="md:col-span-4">
                                    <span className="text-[15px] font-semibold text-[#246A6B]">{item.payout}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitor Landscape */}
            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    Market Landscape
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.15] tracking-[-0.02em]">
                                Regional peers
                            </h2>
                        </div>
                    </div>

                    <div className="border-t border-gray-200">
                        {competitors.map((c, i) => (
                            <motion.div
                                key={c.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-5 border-b border-gray-200"
                            >
                                <div className="md:col-span-1">
                                    <span className="text-[13px] font-mono text-gray-300">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="md:col-span-4">
                                    <span className="text-[15px] font-semibold text-gray-900">{c.name}</span>
                                </div>
                                <div className="md:col-span-7">
                                    <span className="text-[15px] text-gray-500">{c.focus}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#0F1923] py-24 md:py-28 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto text-center">
                    <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white mb-4">
                        See how Lanchi compares
                    </h2>
                    <p className="text-white/50 mb-8 max-w-lg mx-auto">
                        Get a detailed competitive analysis and pricing proposal for your organization.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-white text-[#0F1923] px-8 py-3.5 rounded-sm text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-white/90 transition-all duration-300"
                    >
                        Request a Proposal
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
