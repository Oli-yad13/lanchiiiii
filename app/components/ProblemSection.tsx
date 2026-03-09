"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

const ProblemSection = () => {
    return (
        <section id="problem" className="relative overflow-hidden">
            {/* Top: Clean white editorial section */}
            <div className="bg-white py-28 md:py-40 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                                    The Challenge
                                </span>
                            </div>
                            <h2 className="text-[13px] uppercase tracking-[0.2em] text-gray-400 leading-relaxed">
                                Understanding the crisis facing Ethiopian women in the workforce
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:col-span-9"
                        >
                            <h3 className="text-[clamp(2rem,4.5vw,4rem)] font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] mb-8">
                                Ethiopia&apos;s diagnosis crisis
                            </h3>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mb-14">
                                The majority of breast and cervical cancer cases are identified
                                only at advanced stages — driven by high screening costs and a
                                lack of early detection infrastructure, leading to catastrophic
                                out-of-pocket expenses that trap families in poverty.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-gray-200">
                                {[
                                    { value: 71, suffix: "%", label: "Breast cancer cases diagnosed at advanced stages" },
                                    { value: 84, suffix: "%", label: "Cervical cancer cases identified too late for effective treatment" },
                                    { value: 70, suffix: "%", label: "Reduction in treatment costs through early detection" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                        className={`py-8 pr-8 ${i < 2 ? "sm:border-r border-b sm:border-b-0 border-gray-200" : ""} ${i > 0 ? "sm:pl-8" : ""}`}
                                    >
                                        <div className="text-[3.5rem] md:text-[4rem] font-bold text-gray-900 leading-none tracking-tight mb-3">
                                            <Counter target={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <p className="text-[15px] text-gray-400 leading-relaxed">
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom: Accent band with healthcare imagery */}
            <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
                <Image
                    src="/accent_band_1772695436784.png"
                    alt="Ethiopian women healthcare screening"
                    fill
                    className="object-cover"
                    quality={85}
                />
                {/* Teal overlay for brand consistency */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#246A6B]/80 to-[#089688]/70" />
                <div className="relative z-10 h-full flex items-center px-6 md:px-12">
                    <div className="max-w-[1600px] mx-auto w-full">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold text-white leading-[1.2] max-w-3xl"
                        >
                            Lanchi shifts the paradigm from late-stage crisis management to
                            early detection and financial security.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
