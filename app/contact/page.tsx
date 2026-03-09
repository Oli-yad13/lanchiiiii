"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

// Dynamically import Supabase client
const supabasePromise = import("../lib/supabase").then((mod) => mod.supabase);

const ContactPage = () => {
  interface FormData {
    firstName: string;
    lastName: string;
    jobTitle: string;
    phoneNumber: string;
    workEmail: string;
    companyName: string;
    city: string;
    companySize: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    workEmail: "",
    companyName: "",
    city: "",
    companySize: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
      valid = false;
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
      valid = false;
    }
    if (!formData.companySize) {
      newErrors.companySize = "Company size is required";
      valid = false;
    }
    if (!formData.city) {
      newErrors.city = "City is required";
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
      valid = false;
    } else if (!emailRegex.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const supabase = await supabasePromise;

      const contactData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        job_title: formData.jobTitle,
        phone_number: formData.phoneNumber,
        work_email: formData.workEmail,
        company_name: formData.companyName,
        city: formData.city,
        company_size: formData.companySize,
        created_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([contactData])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message || "Failed to submit form");
      }

      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        phoneNumber: "",
        workEmail: "",
        companyName: "",
        city: "",
        companySize: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setSubmitError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const companySizeOptions = [
    "1-100",
    "101-500",
    "501-1,000",
    "1,001-2,500",
    "2,501-5,000",
    "5,001-10,000",
    "10,001-20,000",
    "20,000+",
  ];

  const inputClassName = (fieldName: keyof FormData) =>
    `w-full border-b ${errors[fieldName] ? "border-red-400" : "border-gray-200"
    } bg-transparent px-0 py-3 text-[15px] text-gray-900 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400`;

  return (
    <main>
      <PageHero
        tag="Contact"
        headline="Get in touch"
        subtitle="Schedule a consultation with our partnerships team and discover how Lanchi can protect your workforce."
      />

      <section className="bg-white py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 bg-gray-300" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Reach Us
                </span>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:hello@lanchi.et"
                    className="text-[15px] text-gray-900 hover:text-[#246A6B] transition-colors"
                  >
                    hello@lanchi.et
                  </a>
                </div>

                <div>
                  <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                    Phone
                  </span>
                  <a
                    href="tel:+251944131837"
                    className="text-[15px] text-gray-900"
                  >
                    +251 944 131 837
                  </a>
                </div>

                <div>
                  <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-2">
                    Address
                  </span>
                  <p className="text-[15px] text-gray-500">
                    Noah Real Estate, 6th Floor
                    <br />
                    Hayahulet Mazoriya
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-[13px] uppercase tracking-[0.2em] text-gray-400 block mb-3">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-gray-200">|</span>
                    <a
                      href="#"
                      className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8 lg:pl-8 lg:border-l border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request a corporate quote
              </h2>
              <p className="text-[15px] text-gray-500 mb-10">
                Complete the form below and we&apos;ll connect you with a member
                of our team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClassName("firstName")}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClassName("lastName")}
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="jobTitle"
                      className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                    >
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={inputClassName("jobTitle")}
                      required
                    />
                    {errors.jobTitle && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.jobTitle}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={inputClassName("phoneNumber")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={inputClassName("workEmail")}
                    required
                  />
                  {errors.workEmail && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.workEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={inputClassName("companyName")}
                    required
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={inputClassName("city")}
                      required
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-[13px] uppercase tracking-[0.2em] text-gray-400 mb-2"
                    >
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={`w-full border-b ${errors.companySize
                          ? "border-red-400"
                          : "border-gray-200"
                        } bg-transparent px-0 py-3 text-[15px] text-gray-900 focus:outline-none focus:border-gray-900 transition-colors`}
                      required
                    >
                      <option value="">Please Select</option>
                      {companySizeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.companySize && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companySize}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gray-900 text-white px-10 py-3.5 rounded-sm text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>

                <p className="text-[13px] text-gray-400">
                  By submitting this form, you consent to our{" "}
                  <a
                    href="/terms"
                    className="text-gray-500 hover:text-gray-900 underline"
                  >
                    Terms and Conditions
                  </a>
                  .
                </p>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-sm text-[15px]"
                  >
                    Thank you! We&apos;ll be in touch soon.
                  </motion.div>
                )}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-sm text-[15px]">
                    {submitError}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;