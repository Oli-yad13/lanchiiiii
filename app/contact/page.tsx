"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

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
    firstName: '',
    lastName: '',
    jobTitle: '',
    phoneNumber: '',
    workEmail: '',
    companyName: '',
    city: '',
    companySize: '',
  });
  
  // Add validation state
  const [errors, setErrors] = useState<Partial<FormData>>({
    firstName: '',
    lastName: '',
    jobTitle: '',
    phoneNumber: '',
    workEmail: '',
    companyName: '',
    city: '',
    companySize: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form data
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      phoneNumber: '',
      workEmail: '',
      companyName: '',
      city: '',
      companySize: '',
    };
    
    // Required fields validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
      valid = false;
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      valid = false;
    }
    
    if (!formData.companySize) {
      newErrors.companySize = 'Company size is required';
      valid = false;
    }
    
    if (!formData.city) {
      newErrors.city = 'City is required';
      valid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
      valid = false;
    } else if (!emailRegex.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare the data for Supabase
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

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([contactData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message || 'Failed to submit form');
      }

      // On success
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        jobTitle: '',
        phoneNumber: '',
        workEmail: '',
        companyName: '',
        city: '',
        companySize: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitError(err.message || 'An unexpected error occurred. Please try again.');
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
    "20,000+"
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 bg-[#E8F4F8] flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-26 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl ml-0 lg:ml-8"
        >
          {/* Logo */}
          <div className="space-y-6">
            {/* Placeholder for Maven Logo */}
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/lanchi-logo.png" 
                  alt="lanchi Logo"
                  width={100}
                  height={30}
                />
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-[#246A6B] text-left leading-tight">
              Partner with Lanchi: Empower Your Workforce
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12">
            Fill out the form below to schedule a consultation with our team.
          </p>

          {/* Contact Information */}
          <div className="space-y-4 mb-8 lg:mb-12">
            <div className="text-gray-700 text-base sm:text-lg">
              hello@lanchi.com
            </div>
            <div className="text-gray-700 text-base sm:text-lg">
              Addis, Ababa, Ethiopia
            </div>
          </div>

          {/* Group of People Image */}
          <div className="mt-8 lg:block">
            <Image
              src="/group-of-people.png"
              alt="Group of people collaborating"
              width={400}
              height={300}
              className="w-full max-w-md h-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <h2 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
            Ready to start working with Lanchi?
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8">
            Complete the form below and we'll connect you with a member of our team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B]`}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B]`}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Job Title and Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm text-gray-700 mb-2">
                  Job title*
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className={`w-full border ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B]`}
                  required
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>
                )}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B]`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-sm text-gray-700 mb-2">
                Work email*
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className={`w-full border ${errors.workEmail ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B]`}
                required
              />
              {errors.workEmail && (
                <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm text-gray-700 mb-2">
                Company name*
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B]`}
                required
              />
              {errors.companyName && (
                <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label htmlFor="city" className="block text-sm text-gray-700 mb-2">
                City*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B]`}
                required
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>

            {/* Company Size */}
            <div>
              <label htmlFor="companySize" className="block text-sm text-gray-700 mb-2">
                Company size*
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className={`w-full border ${errors.companySize ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#246A6B] focus:border-[#246A6B] bg-white`}
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
                <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#246A6B] text-white py-3 px-6 rounded font-medium hover:bg-[#1a5051] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="text-xs text-gray-500 text-center">
              By submitting this form, you consent to our{' '}
              <a href="#" className="text-[#246A6B] hover:underline">
                Terms and Conditions
              </a>
              .
            </div>

            {/* Success/Error Messages */}
            {submitSuccess && (
              <div className="bg-green-100 text-green-700 p-4 rounded text-center text-sm">
                Thank you! We'll be in touch soon.
              </div>
            )}
            {submitError && (
              <div className="bg-red-100 text-red-700 p-4 rounded text-center text-sm">
                {submitError}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;