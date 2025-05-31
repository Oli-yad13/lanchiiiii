"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Lanchi gave me access to affordable care and financial support during my pregnancy.",
    author: "Amsale",
    role: "Mother"
  },
  {
    quote: "Our employees are healthier and happier with Lanchi's tailored solutions.",
    author: "Bethlehem",
    role: "HR Manager"
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <p className="text-lg text-gray-700 mb-6 italic">"{t.quote}"</p>
            <div> 
              <p className="font-semibold text-gray-900">{t.author}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 