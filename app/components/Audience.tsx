"use client";
import { motion } from "framer-motion";

const audience = [
  { icon: "", label: "Women of reproductive age" },
  { icon: "", label: "Expectant mothers" },
  { icon: "", label: "Iddir groups and families committed to gender equity" },
];

export const Audience = () => (
  <section id="audience" className="bg-white py-20 px-6 md:px-12 lg:px-24">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">🎯 Who Is Lanchi For?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
      {audience.map((a, i) => (
        <motion.div
          key={a.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-gray-50 rounded-xl p-8 shadow-sm text-left"
        >
          <div className="text-5xl mb-4">{a.icon}</div>
          <p className="text-gray-700 text-lg font-medium leading-relaxed">{a.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Audience; 