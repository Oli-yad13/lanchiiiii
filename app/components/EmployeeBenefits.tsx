"use client";

import { motion } from "framer-motion";

const benefits = [
    {
        number: "01",
        title: "Preventative Screening",
        detail: "Free annual Clinical Breast Exams (CBE) and Visual Inspection with Acetic Acid (VIA)",
        impact: "Early detection reduces treatment costs by over 70%",
    },
    {
        number: "02",
        title: "Breast Cancer Payout",
        detail: "ETB 30,000 lump-sum cash benefit upon first diagnosis",
        impact: "Covers immediate costs of diagnosis and initiation of treatment",
    },
    {
        number: "03",
        title: "Cervical Cancer Payout",
        detail: "ETB 20,000 lump-sum cash benefit upon first diagnosis",
        impact: "Prevents the liquidation of family assets to cover medical shocks",
    },
    {
        number: "04",
        title: "Integrated Credit",
        detail: "Short-term loans for maternity and postnatal check-ups",
        impact: "Ensures continuity of care from pregnancy to recovery",
    },
];

const EmployeeBenefits = () => {
    return (
        <section id="benefits" className="relative bg-[#0F1923] py-28 md:py-36 px-6 md:px-12 overflow-hidden">
            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(36,106,107,0.2) 0%, transparent 70%)",
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
                        <div className="h-[1px] w-10 bg-white/20" />
                        <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-white/40">
                            Employee Benefits
                        </span>
                        <div className="h-[1px] w-10 bg-white/20" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5"
                    >
                        Lanchi Covered
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
                    >
                        Day-One value for every member. No waiting periods — every woman
                        gets immediate access to screening and financial protection from
                        the moment she joins.
                    </motion.p>
                </div>

                {/* Benefits — 2x2 grid, clean editorial */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.number}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`py-10 md:py-12 ${i % 2 === 0 ? "md:border-r border-white/[0.06] md:pr-12" : "md:pl-12"
                                } ${i < 2 ? "border-b border-white/[0.06]" : ""}`}
                        >
                            <span className="text-[40px] md:text-[48px] font-bold text-white/[0.05] leading-none block mb-4">
                                {b.number}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {b.title}
                            </h3>
                            <p className="text-[15px] text-white/50 leading-relaxed mb-4">
                                {b.detail}
                            </p>
                            <p className="text-[14px] text-[#7DCED0] font-medium">
                                {b.impact}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployeeBenefits;
