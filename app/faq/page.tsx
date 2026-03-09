"use client";

import Link from "next/link";
import PageHero from "../components/PageHero";
import FAQAccordion from "../components/FAQAccordion";

const faqData = [
    {
        category: "Coverage & Benefits",
        items: [
            {
                question: "What does the Lanchi Cancer Care Shield cover?",
                answer:
                    "The Cancer Care Shield provides lump-sum cash payouts upon the first definitive diagnosis of invasive breast cancer (ETB 30,000) or invasive cervical cancer (ETB 20,000). These are not reimbursement-based — the full amount is paid directly to the member regardless of actual treatment costs.",
            },
            {
                question: "What preventative screenings are included?",
                answer:
                    "Every enrolled member receives free annual screenings from day one: a Clinical Breast Exam (CBE) for breast cancer detection and Visual Inspection with Acetic Acid (VIA) for cervical cancer detection. These are provided at no additional cost through our network of partner clinics.",
            },
            {
                question: "Is there a waiting period for coverage?",
                answer:
                    "No. Unlike standard health insurance products that enforce 30–90 day waiting periods, Lanchi provides Day-One value. Preventative screenings are available immediately upon enrollment, and cancer payouts are triggered by the first definitive diagnosis with no waiting period.",
            },
            {
                question: "What is the microsaving component?",
                answer:
                    "The Lanchi Health Security Fund is a digital savings account dedicated to routine reproductive health needs. Members make daily micro-deposits starting from ETB 5.75, building a financial cushion for wellness expenses over time.",
            },
            {
                question: "How does the microcredit facility work?",
                answer:
                    "The Maternal Health Advance provides immediate liquidity of up to 3× the member's savings balance for predictable life events like institutional delivery, postnatal check-ups, and other maternity-related expenses. Repayment is structured through flexible payroll deduction.",
            },
        ],
    },
    {
        category: "Enrollment & Payments",
        items: [
            {
                question: "How does enrollment work for employers?",
                answer:
                    "Enrollment is fully digital using our integrated e-KYC protocols. We pull data from national ID systems to enroll your entire workforce instantly — no physical forms, no manual data entry. The process typically takes minutes per employee.",
            },
            {
                question: "How much does it cost per member?",
                answer:
                    "The total annual premium is ETB 2,100 per member — approximately ETB 175 per month, or less than ETB 6 per day. This covers the Cancer Care Shield insurance, annual preventative screenings, and access to the microsaving and microcredit facilities.",
            },
            {
                question: "How are premiums collected?",
                answer:
                    "Premiums are structured using our 'sachet payment model' — daily or weekly increments collected via payroll deduction or mobile wallet debits. This overcomes liquidity barriers for low-wage workers while maintaining consistent premium flow for the insurer.",
            },
            {
                question: "What is the minimum group size?",
                answer:
                    "Lanchi Covered is designed for organized groups of 20 or more members — including iddirs, cooperatives, workplace groups, and women's associations. For smaller groups, we can discuss custom arrangements. Contact our partnerships team for details.",
            },
        ],
    },
    {
        category: "Claims & Process",
        items: [
            {
                question: "How do I file a claim?",
                answer:
                    "Claims are initiated by uploading digital medical reports and a definitive diagnosis certificate via the Lanchi app. Our system guides you through each step of the submission process.",
            },
            {
                question: "How long does claims settlement take?",
                answer:
                    "We guarantee 72-hour claims settlement. ID-NET performs technical pre-validation and documentation review within 48 hours. Nib Insurance Company then completes final adjudication and payment authorization within 24 hours.",
            },
            {
                question: "Who underwrites the insurance?",
                answer:
                    "All insurance products are underwritten by Nib Insurance Company S.C., one of Ethiopia's most established insurers with a paid-up capital of ETB 1.21 billion. NIC retains exclusive authority over underwriting, pricing, and claims adjudication, maintaining all technical reserves and solvency margins required by the National Bank of Ethiopia.",
            },
            {
                question: "What happens if my claim is denied?",
                answer:
                    "Claims adjudication follows transparent, pre-defined criteria set by Nib Insurance. If a claim is denied, members receive a detailed explanation and have the right to appeal through the standard NBE-regulated dispute resolution process. Our team assists members throughout the entire process.",
            },
        ],
    },
];

export default function FAQPage() {
    return (
        <main>
            <PageHero
                tag="Frequently Asked Questions"
                headline="Answers that help you decide with confidence"
                subtitle="Everything you need to know about Lanchi's coverage, enrollment, pricing, and claims process."
            />

            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto">
                    <FAQAccordion categories={faqData} />
                </div>
            </section>

            {/* Still have questions CTA */}
            <section className="bg-[#F7F7F7] py-20 md:py-24 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                            Still have questions?
                        </h3>
                        <p className="text-[15px] text-gray-500">
                            Our partnerships team is here to help you make the right decision for your workforce.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-3.5 rounded-sm text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-gray-800 transition-all duration-300 flex-shrink-0"
                    >
                        Contact Us
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
