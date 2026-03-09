"use client";

import PageHero from "../components/PageHero";
import Link from "next/link";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing or using the Lanchi Covered platform, website, or any related services operated by ID-NET ("Lanchi", "we", "our", or "us"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, members, employer partners, and any other persons who access or use our services.`,
    },
    {
        title: "2. Description of Services",
        content: `Lanchi Covered is a group-based microinsurance and financial wellness platform designed to protect Ethiopian women against the financial impact of breast and cervical cancer. Our services include:

• Cancer Care Shield microinsurance (underwritten by Nib Insurance Company S.C.)
• Annual preventative screenings (Clinical Breast Exam and Visual Inspection with Acetic Acid)
• Digital enrollment and claims processing via the ID-NET platform
• Microsaving and microcredit facilities for reproductive health needs

Lanchi acts as the distribution and technology partner. All insurance products are underwritten, priced, and adjudicated exclusively by Nib Insurance Company S.C., regulated by the National Bank of Ethiopia (NBE).`,
    },
    {
        title: "3. Eligibility",
        content: `Lanchi Covered is available to organized groups of 20 or more members, including iddirs, cooperatives, women's associations, and employer-sponsored workplaces operating within Ethiopia.

Individual members must be enrolled through an eligible group administrator or employer. Enrollment is subject to verification through our e-KYC process using national identification systems.`,
    },
    {
        title: "4. Insurance Coverage",
        content: `All insurance benefits, coverage terms, exclusions, and claims procedures are governed by the policy agreement issued by Nib Insurance Company S.C. These Terms of Use do not constitute an insurance contract.

Coverage is effective from the date of enrollment confirmation. Lump-sum payouts are triggered upon the first definitive diagnosis of invasive breast cancer (ETB 30,000) or invasive cervical cancer (ETB 20,000), subject to the terms of the underlying policy.

Lanchi makes no representations or warranties regarding insurance outcomes. Claims adjudication is the sole responsibility of Nib Insurance Company S.C.`,
    },
    {
        title: "5. Premium Payments",
        content: `The annual premium for Lanchi Covered is ETB 2,100 per member (ETB 175/month). Premiums are collected via payroll deduction or mobile wallet debits as arranged with the group administrator or employer.

Failure to maintain premium payments may result in suspension or termination of coverage. Members are responsible for ensuring premiums are paid through their group or employer as agreed.`,
    },
    {
        title: "6. User Responsibilities",
        content: `You agree to:

• Provide accurate, complete, and current information during enrollment and claims submission
• Notify us promptly of any changes to your employment status, contact information, or group membership
• Use the platform only for lawful purposes and in accordance with these terms
• Not attempt to submit fraudulent claims or misrepresent medical conditions
• Keep your account credentials confidential and notify us immediately of any unauthorized access`,
    },
    {
        title: "7. Digital Platform & Data",
        content: `By using our digital platform, you consent to the collection and processing of your personal and health-related data as described in our Privacy Policy. Data is used for enrollment verification, premium processing, claims management, and regulatory compliance.

We use integrated e-KYC protocols and may access national identification databases to verify member identities. All data handling complies with applicable Ethiopian data protection requirements.`,
    },
    {
        title: "8. Intellectual Property",
        content: `All content on the Lanchi website and platform — including text, graphics, logos, product names, and software — is the property of ID-NET or its licensors and is protected under applicable intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.`,
    },
    {
        title: "9. Limitation of Liability",
        content: `To the fullest extent permitted by law, Lanchi and ID-NET shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to denied insurance claims, service interruptions, or data loss.

Our total liability for any claim arising from these terms or use of our services shall not exceed the premiums paid by the relevant member in the 12 months preceding the claim.`,
    },
    {
        title: "10. Dispute Resolution",
        content: `Any disputes relating to insurance coverage, claims decisions, or policy terms shall be resolved through Nib Insurance Company S.C.'s standard NBE-regulated dispute resolution process.

Disputes relating to our platform services shall be resolved through good-faith negotiation. If unresolved, disputes will be subject to the jurisdiction of the courts of Addis Ababa, Ethiopia, under Ethiopian law.`,
    },
    {
        title: "11. Changes to These Terms",
        content: `We reserve the right to update these Terms of Use at any time. Material changes will be communicated via email or through the platform. Continued use of our services after changes take effect constitutes your acceptance of the revised terms.`,
    },
    {
        title: "12. Contact",
        content: `For questions about these Terms of Use, please contact us at:\n\nhello@lanchi.et\nNoah Real Estate, 6th Floor, Hayahulet Mazoriya, Addis Ababa, Ethiopia`,
    },
];

export default function TermsPage() {
    return (
        <main>
            <PageHero
                tag="Legal"
                headline="Terms of Use"
                subtitle="Please read these terms carefully before using Lanchi Covered services."
            />

            <section className="bg-white py-28 md:py-36 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sidebar */}
                        <div className="lg:col-span-3">
                            <div className="sticky top-28">
                                <p className="text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                                    Last updated
                                </p>
                                <p className="text-[15px] text-gray-900 font-medium mb-8">
                                    March 2026
                                </p>
                                <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
                                    All insurance products are underwritten by Nib Insurance Company S.C., regulated by the National Bank of Ethiopia.
                                </p>
                                <Link
                                    href="/contact"
                                    className="text-[13px] font-medium text-[#246A6B] hover:underline"
                                >
                                    Questions? Contact us →
                                </Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-9 lg:border-l border-gray-200 lg:pl-16">
                            <div className="space-y-12">
                                {sections.map((section) => (
                                    <div key={section.title} className="border-b border-gray-100 pb-12 last:border-b-0">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4">
                                            {section.title}
                                        </h2>
                                        <div className="text-[15px] text-gray-500 leading-relaxed whitespace-pre-line">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
