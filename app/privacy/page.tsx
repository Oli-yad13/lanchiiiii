"use client";

import PageHero from "../components/PageHero";
import Link from "next/link";

const sections = [
    {
        title: "1. Who We Are",
        content: `Lanchi Covered is a product of ID-NET, a digital health infrastructure company based in Addis Ababa, Ethiopia. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform, website, or services.

For the purposes of this policy, "we", "us", or "our" refers to ID-NET. Our insurance products are underwritten by Nib Insurance Company S.C., who processes relevant data as a separate data controller in accordance with their own policies.`,
    },
    {
        title: "2. Information We Collect",
        content: `We collect the following categories of personal information:

Identity Data
• Full name, date of birth, gender
• National ID number and biometric verification data (via e-KYC)
• Photograph (where required for enrollment)

Contact Data
• Phone number, email address, physical address

Employment & Group Data
• Employer or group organization name
• Job title, employment status
• Payroll and premium payment details

Health Data
• Screening results from Clinical Breast Exams (CBE) and Visual Inspection with Acetic Acid (VIA)
• Cancer diagnosis documentation submitted for claims
• Medical records required for claims adjudication

Financial Data
• Savings and microcredit account balances
• Transaction and payment history

Usage Data
• Platform access logs, device type, and interaction data`,
    },
    {
        title: "3. How We Use Your Information",
        content: `We use your personal information for the following purposes:

• Enrollment & Verification: To verify your identity through e-KYC and enroll you in Lanchi Covered
• Premium Collection: To process payroll deductions or mobile wallet debits
• Service Delivery: To provide access to screenings, savings accounts, and microcredit facilities
• Claims Processing: To review, validate, and facilitate insurance claim payouts in coordination with Nib Insurance Company S.C.
• Regulatory Compliance: To meet obligations under National Bank of Ethiopia (NBE) regulations and other applicable Ethiopian law
• Communication: To send enrollment confirmations, screening reminders, and claims updates
• Platform Improvement: To analyse usage patterns and improve our services`,
    },
    {
        title: "4. Legal Basis for Processing",
        content: `We process your personal data on the following legal grounds:

• Contractual Necessity: Processing required to deliver the services you have enrolled in
• Legal Obligation: Processing required to comply with NBE regulations and Ethiopian law
• Legitimate Interests: Processing for fraud prevention, platform security, and service improvement
• Consent: Where you have explicitly provided consent, such as for marketing communications

Health data is processed under explicit consent provided at enrollment and as necessary for the performance of insurance services regulated by the NBE.`,
    },
    {
        title: "5. Sharing Your Information",
        content: `We do not sell your personal data. We share your information only in the following circumstances:

Nib Insurance Company S.C.
As the underwriter of all insurance products, Nib Insurance receives member data necessary for policy administration, claims adjudication, and regulatory reporting.

FSD Ethiopia & FSD Africa
Our development partners may receive anonymised, aggregated data for programme evaluation and impact reporting. No personally identifiable information is shared.

Regulatory Authorities
We may disclose your data to the National Bank of Ethiopia or other regulatory bodies where required by law.

Technology Service Providers
We work with trusted third-party providers for cloud hosting, payment processing, and data security. All providers are bound by data processing agreements.

We do not transfer your data outside of Ethiopia except where required for regulatory purposes or with your explicit consent.`,
    },
    {
        title: "6. Health Data",
        content: `Health data — including screening results and diagnosis documentation — is treated with the highest level of protection. Access is strictly limited to:

• ID-NET technical staff involved in claims validation
• Nib Insurance Company S.C. claims adjudication team
• Authorised medical partners providing screening services

Health data is never shared for marketing, research, or commercial purposes without your explicit written consent.`,
    },
    {
        title: "7. Data Retention",
        content: `We retain your personal data for as long as you remain an active member and for a period following membership termination as required by law or for legitimate business purposes:

• Enrollment and identity data: 7 years from last activity
• Claims and health data: 10 years from claims settlement (as required by NBE)
• Financial transaction data: 7 years (as required by Ethiopian financial regulations)
• Usage and platform data: 2 years

After retention periods expire, data is securely deleted or anonymised.`,
    },
    {
        title: "8. Your Rights",
        content: `You have the following rights regarding your personal data:

• Access: Request a copy of the personal data we hold about you
• Correction: Request correction of inaccurate or incomplete data
• Deletion: Request deletion of your data, subject to legal retention requirements
• Restriction: Request that we limit how we process your data in certain circumstances
• Objection: Object to processing based on legitimate interests
• Withdrawal of Consent: Withdraw consent for processing where consent is the legal basis

To exercise any of these rights, contact us at hello@lanchi.et. We will respond within 30 days.`,
    },
    {
        title: "9. Security",
        content: `We implement appropriate technical and organisational security measures to protect your data against unauthorised access, loss, or disclosure. These include:

• Encryption of data in transit (TLS) and at rest
• Access controls and role-based permissions
• Regular security audits and vulnerability assessments
• Incident response procedures

No method of transmission or storage is completely secure. In the event of a data breach that affects your rights, we will notify you and the relevant authorities as required by law.`,
    },
    {
        title: "10. Cookies & Analytics",
        content: `Our website uses essential cookies to ensure basic functionality. We may also use analytics tools to understand how visitors interact with our site. These analytics are aggregated and do not identify individual users.

You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features.`,
    },
    {
        title: "11. Children's Privacy",
        content: `Our services are intended for adults aged 18 and over. We do not knowingly collect personal data from persons under 18. If we become aware that we have inadvertently collected data from a minor, we will delete it promptly.`,
    },
    {
        title: "12. Changes to This Policy",
        content: `We may update this Privacy Policy periodically. Material changes will be communicated via email or through the platform. The date of the most recent revision is shown at the top of this page. Continued use of our services constitutes acceptance of the updated policy.`,
    },
    {
        title: "13. Contact & Complaints",
        content: `For privacy-related enquiries, requests, or complaints, please contact us at:\n\nhello@lanchi.et\nNoah Real Estate, 6th Floor, Hayahulet Mazoriya, Addis Ababa, Ethiopia\n\nIf you are not satisfied with our response, you have the right to lodge a complaint with the relevant Ethiopian regulatory authority.`,
    },
];

export default function PrivacyPage() {
    return (
        <main>
            <PageHero
                tag="Legal"
                headline="Privacy Policy"
                subtitle="We are committed to protecting your personal and health data with the highest standards of care."
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
                                    Your health data is never sold or shared for commercial purposes without your explicit consent.
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
