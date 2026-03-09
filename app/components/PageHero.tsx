"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    tag: string;
    headline: string;
    subtitle?: string;
}

const PageHero = ({ tag, headline, subtitle }: PageHeroProps) => {
    return (
        <section className="relative bg-[#0F1923] overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background:
                            "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(36,106,107,0.4) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(8,150,136,0.25) 0%, transparent 70%)",
                        animation: "float 8s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "120px 120px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-36 pb-24 md:pt-48 md:pb-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="h-[1px] w-10 bg-white/30" />
                    <span className="text-[13px] font-semibold uppercase tracking-[0.3em] text-white/50">
                        {tag}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-8"
                >
                    {headline}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default PageHero;
