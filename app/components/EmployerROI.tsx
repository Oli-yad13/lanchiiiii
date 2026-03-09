"use client";

import { motion } from "framer-motion";

const roiItems = [
    {
        stat: "70%",
        label: "reduction in treatment costs",
        title: "Early Detection Saves Lives",
        description:
            "Annual screenings catch breast and cervical cancer early — when treatment is most effective and costs up to 70% less.",
    },
    {
        stat: "ETB 175",
        label: "per month, per member",
        title: "Radical Affordability",
        description:
            "At just ETB 2,100 per year — ETB 175 per month — comprehensive cancer protection is accessible to every woman, in every group.",
    },
    {
        stat: "ETB 50K",
        label: "maximum cancer payout",
        title: "Real Financial Protection",
        description:
            "ETB 30,000 for breast cancer and ETB 20,000 for cervical cancer — paid on first diagnosis, no reimbursement delays.",
    },
    {
        stat: "NCCP",
        label: "aligned program",
        title: "Nationally Recognised",
        description:
            "Aligned with Ethiopia's National Cancer Control Plan and supported by FSD Ethiopia, FSD Africa, and MSI — proven, credible, and built to scale.",
    },
];

const EmployerROI = () => {
    return (
        <section className="relative bg-[#FAFBFC] py-28 md:py-36 px-6 md:px-12 overflow-hidden">
            {/* Subtle diagonal lines */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(0,0,0,0.15) 60px, rgba(0,0,0,0.15) 61px)",
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
                            Employer Value
                        </span>
                        <div className="h-[1px] w-10 bg-gray-300" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-gray-900 leading-[1.1] tracking-[-0.02em]"
                    >
                        Why it works for everyone
                    </motion.h2>
                </div>

                {/* ROI Items — 2x2 grid with borders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
                    {roiItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`py-10 md:py-12 ${i % 2 === 0 ? "md:border-r border-gray-200 md:pr-12" : "md:pl-12"
                                } border-b border-gray-200`}
                        >
                            <div className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[#246A6B] leading-none tracking-tight mb-1">
                                {item.stat}
                            </div>
                            <div className="text-[13px] uppercase tracking-[0.15em] text-gray-400 mb-6">
                                {item.label}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[15px] text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployerROI;
