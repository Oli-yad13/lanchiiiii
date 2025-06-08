"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const GoalVision = () => {
  const heading = "The Reality: How Health Gaps Impact Your Workforce";
  const description = "These are not mere statistics; they are the daily realities for countless employees across Ethiopia, profoundly influencing their well-being and, crucially, your company's productivity. Lanchi is dedicated to addressing these challenges head-on, providing integrated financial and healthcare support rooted directly within our communities for a stronger, more resilient workforce.";

  const stats = [
    { label: "Pregnant women get 4+ antenatal care visits", value: "40%" },
    { label: "Mothers access vital postnatal care after birth", value: "6.9%" },
  ];

  return (
    <section className="bg-[#E8F5E9] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-900"
        >
          <div className="text-sm font-semibold text-gray-600 mb-2">In Ethiopia</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#246A6B] text-white p-6 rounded-lg flex items-center justify-center text-center font-semibold text-lg"
          >
            Health Gaps
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-100 text-gray-900 p-6 rounded-lg flex flex-col items-center justify-center text-center font-bold"
          >
            <h3 className="text-5xl mb-2">{stats[0].value}</h3>
            <p className="text-sm text-gray-700">{stats[0].label}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-100 text-gray-900 p-6 rounded-lg flex flex-col items-center justify-center text-center font-bold"
          >
            <h3 className="text-5xl mb-2">{stats[1].value}</h3>
            <p className="text-sm text-gray-700">{stats[1].label}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full h-40 rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder-image-green.jpg"
              alt="Impact image"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative w-full h-40 rounded-lg overflow-hidden col-span-1 sm:col-span-1 md:col-span-1"
          >
            <Image
              src="/placeholder-image-dark-green.jpg"
              alt="Impact image 2"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default GoalVision; 