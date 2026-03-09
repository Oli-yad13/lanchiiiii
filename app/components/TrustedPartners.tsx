"use client";

import { motion } from "framer-motion";

const TrustedPartners = () => {
    return (
        <section id="partners" className="relative bg-[#FAFBFC] py-28 md:py-36 px-6 md:px-12 overflow-hidden">
            {/* Subtle horizontal lines */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(0,0,0,0.2) 79px, rgba(0,0,0,0.2) 80px)",
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
                            Our Partners
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
                        Trusted partners
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Lanchi Covered is made possible through the collaboration of
                        Ethiopia&apos;s leading institutions in health, finance, and technology.
                    </motion.p>
                </div>

                {/* Partner Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
                    {/* Nib Insurance */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="py-10 md:py-14 md:border-r border-gray-200 md:pr-12 border-b border-gray-200"
                    >
                        <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-3">
                            Underwritten by
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Nib Insurance Company S.C.
                        </h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                            A stabilizing force in the Ethiopian economy with a paid-up capital
                            of ETB 1.21 billion. NIC ensures regulatory compliance and financial
                            security for all policyholders.
                        </p>
                        <span className="text-[13px] font-medium text-[#246A6B] uppercase tracking-[0.1em]">
                            NBE Regulated
                        </span>
                    </motion.div>

                    {/* ID-NET */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="py-10 md:py-14 md:pl-12 border-b border-gray-200"
                    >
                        <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-3">
                            Implemented by
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            ID-NET
                        </h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                            The digital infrastructure enabling e-KYC enrollment, automated
                            premium collection, real-time claims processing, and seamless
                            delivery at scale.
                        </p>
                        <span className="text-[13px] font-medium text-[#089688] uppercase tracking-[0.1em]">
                            Digital-First Platform
                        </span>
                    </motion.div>

                    {/* FSD Ethiopia & FSD Africa */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="py-10 md:py-14 md:border-r border-gray-200 md:pr-12 border-b border-gray-200"
                    >
                        <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-3">
                            Supported by
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            FSD Ethiopia &amp; FSD Africa
                        </h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                            Instrumental in funding the development of ID-NET and enabling the
                            actuarial review that ensures Lanchi Covered is both sustainable
                            and affordable for Ethiopian women.
                        </p>
                        <span className="text-[13px] font-medium text-[#246A6B] uppercase tracking-[0.1em]">
                            Financial Inclusion Partners
                        </span>
                    </motion.div>

                    {/* MSI */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="py-10 md:py-14 md:pl-12 border-b border-gray-200"
                    >
                        <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-3">
                            Supported by
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            MSI
                        </h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                            Supporting women&apos;s health and financial inclusion across
                            Ethiopia, helping extend Lanchi Covered&apos;s reach to underserved
                            women&apos;s groups and communities.
                        </p>
                        <span className="text-[13px] font-medium text-[#089688] uppercase tracking-[0.1em]">
                            Women&apos;s Health Partner
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;
