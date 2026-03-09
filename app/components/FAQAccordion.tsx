"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    category: string;
    items: FAQItem[];
}

interface FAQAccordionProps {
    categories: FAQCategory[];
}

const FAQAccordion = ({ categories }: FAQAccordionProps) => {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggle = (key: string) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-12">
            {categories.map((cat) => (
                <div key={cat.category}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[1px] w-8 bg-gray-300" />
                        <h3 className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                            {cat.category}
                        </h3>
                    </div>

                    <div className="border-t border-gray-200">
                        {cat.items.map((item, i) => {
                            const key = `${cat.category}-${i}`;
                            const isOpen = openItems[key];

                            return (
                                <div key={key} className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggle(key)}
                                        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                                    >
                                        <span className="flex items-center gap-4">
                                            <span className="text-[13px] font-mono text-gray-300 hidden sm:inline">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-base md:text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                                                {item.question}
                                            </span>
                                        </span>
                                        <span
                                            className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                                }`}
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 pl-0 sm:pl-10 pr-8">
                                                    <p className="text-[15px] md:text-[15px] text-gray-500 leading-relaxed max-w-3xl">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
