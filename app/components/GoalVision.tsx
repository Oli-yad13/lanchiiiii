"use client";
import { motion } from "framer-motion";

const GoalVision = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0B615E] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          The Reality: How Health Gaps Impact Your Ethiopian Workforce
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto"
        >
          Understanding the numbers shows the direct impact on your employees and business:
        </motion.p>

        {/* New Content based on user provided text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the element is visible
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-left text-base sm:text-lg max-w-3xl mx-auto space-y-6"
        >
          {/* Maternal Care Gaps & Business Impact */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Maternal Care Gaps & Business Impact:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Only 40% of pregnant women get the recommended 4+ antenatal care visits (and just 12% receive effective quality ANC).</li>
              <li>A mere 6.9% of mothers access vital postnatal care after birth.</li>
            </ul>
            <p className="font-semibold mt-4">
              This means for your business: Higher health risks for employees, longer recovery periods, leading to more absences and potential loss of skilled team members.
            </p>
          </div>

          {/* Family Planning & Child Health Challenges & Business Impact */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">Family Planning & Child Health Challenges & Business Impact:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>22% of women have an unmet need for family planning services.</li>
              <li>Modern contraceptive use is only 35%.</li>
              <li>The average fertility rate is 4.6 children per woman, leading to repeated health system demands.</li>
              <li>For child healthcare, 51% of women face distance as a barrier, and 55% face cost barriers.</li>
            </ul>
             <p className="font-semibold mt-4">
              This means for your business: Increased employee stress (financial and emotional), more days off for child-related care, and reduced focus at work.
            </p>
          </div>

          {/* Lanchi's Solution */}
          <div className="mt-12 pt-8 border-t border-white/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Lanchi's Solution:</h3>
            <p>
              These aren't just statistics; they represent daily realities for many of your employees in Ethiopia, directly impacting their well-being and your company's productivity. Lanchi offers tangible solutions to mitigate these challenges by providing integrated financial and healthcare support right where it's needed most.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoalVision; 