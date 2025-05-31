"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const partnerOptions = [
  {
    title: "For Employers",
    desc: "Build a healthier, more productive workforce with comprehensive women's health coverage.",
    icon: "/Generated Image May 29, 2025 - 2_02AM.jpeg"
  },
  {
    title: "For Individuals",
    desc: "Get affordable, comprehensive support for yourself and your family at every stage of life.",
    icon: "/Generated Image May 29, 2025 - 2_05AM.jpeg"
  },
];

const Partnering = () => (
  <section id="partnering" className="bg-white py-20 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-12 text-gray-900">
        See what partnering with Lanchi can do for you
      </h2>
      <div className="h-2 w-full max-w-5xl mx-auto bg-[#0B615E] mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {partnerOptions.map((opt, i) => (
          <motion.div
            key={opt.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl shadow-2xl p-14 md:p-16 border-2 border-gray-100 flex flex-col items-center text-center min-h-[200px] md:min-h-[250px]"
          >
            {opt.title === "For Employers" ? (
              <Link href="/employers" className="flex flex-col items-center text-center w-full h-full">
                <div className="mb-4">
                  <img src={opt.icon} alt={`${opt.title} icon`} className="w-72 h-72 object-contain" />
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-[#0B615E] mb-6">{opt.title}</h3>
                <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">{opt.desc}</p>
              </Link>
            ) : (
              <Link href="/individuals" className="flex flex-col items-center text-center w-full h-full">
                <div className="mb-4">
                  <img src={opt.icon} alt={`${opt.title} icon`} className="w-72 h-72 object-contain" />
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-[#0B615E] mb-6">{opt.title}</h3>
                <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">{opt.desc}</p>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Partnering; 