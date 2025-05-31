"use client";
import { motion } from "framer-motion";
import { HealthInsuranceBanner } from "./HealthInsuranceBanner";
import Image from 'next/image';

export const TargetAudience = () => {
  const testimonials = [
    {
      quote: "As a physician myself, I can say with complete confidence that Lanchi provides compassionate, patient-centered, evidence-based care. A traditional OB practice probably would have pushed me to get a c-section, but the team went above and beyond to support a safe vaginal delivery. 10/10 would choose again.",
      author: "Margot H.",
      role: "Physician"
    },
    {
      quote: "Finding Lanchi was such a blessing because I didn't have to choose between the emotional support of midwives and the piece of mind from OBGYNs. Lanchi bridged the gap and made me feel like I could have it all.",
      author: "Abby M.",
      role: "Patient"
    },
    {
      quote: "I recently switched care to Lanchi from a traditional OB practice and I am so glad I did! I feel incredibly heard, respected, and informed regarding every question I have and decision I have made thus far in this pregnancy.",
      author: "Alexandra Y.",
      role: "Patient"
    }
  ];

  return (
    <section id="target-audience" className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto relative">
        <HealthInsuranceBanner bannerText="Who Is Lanchi For?" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Who Is Lanchi For?
          </motion.h2>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-6 text-lg text-gray-700 font-medium bg-white rounded-xl shadow p-8">
            <li>Women of reproductive age</li>
            <li>Expectant mothers</li>
            <li>Iddir groups and families committed to gender equity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;