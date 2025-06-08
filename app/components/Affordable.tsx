"use client";
import { motion } from "framer-motion";

export const Affordable = () => {
  return (
    <section id="why-stand-out" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Affordable & Accessible
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve designed Lanchi to be accessible to all Ethiopian women, regardless of income or location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-teal-50 rounded-xl p-8 border border-teal-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexible Payment Plans</h3>
            <p className="text-gray-600 mb-6">
              Our partnership with VisionFund makes Lanchi financially accessible through low-cost, subsidized premiums.
            </p>
            <div className="bg-white p-4 rounded-lg border border-teal-100">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Monthly payment options</span>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Subsidized rates for low-income families</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Group enrollment discounts</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-teal-50 rounded-xl p-8 border border-teal-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community-Based Access</h3>
            <p className="text-gray-600 mb-6">
              Healthcare services are delivered through local clinics and mobile health units, reducing barriers for rural women.
            </p>
            <div className="bg-white p-4 rounded-lg border border-teal-100">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Local clinic partnerships</span>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Mobile health units for remote areas</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Community health worker support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Affordable;