"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { awards } from "@/lib/content";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const certifications = [
  { name: "UNBS Licensed", logo: "/unbslogo.png", description: "Uganda National Bureau of Standards", verified: true },
  { name: "URSB Registered", logo: "/ursblogo.png", description: "Uganda Registration Services Bureau", verified: true },
  { name: "Ministry of Energy", logo: "/moelogo.png", description: "Energy Sector Certification", verified: true },
];

export default function AwardsSection() {
  return (
    <section className="py-12 sm:py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272A6B]">
            {awards.headline}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Fully certified and compliant with all Ugandan regulatory requirements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 hover:border-[#3EA6DE]/30 hover:shadow-md transition-all w-[200px] sm:w-[220px]"
              variants={cardItem}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {cert.logo ? (
                <div className="relative h-16 sm:h-20 w-16 sm:w-20 mb-3">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="h-16 sm:h-20 w-16 sm:w-20 bg-[#272A6B]/10 rounded-lg flex items-center justify-center">
                            <svg class="w-8 h-8 text-[#272A6B]" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="h-16 sm:h-20 w-16 sm:w-20 bg-[#272A6B]/10 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-[#272A6B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <span className="text-sm font-semibold text-[#272A6B]">{cert.name}</span>
              <span className="text-xs text-gray-500 mt-1">{cert.description}</span>
              {cert.verified && (
                <motion.span
                  className="mt-2 inline-flex items-center text-xs text-[#3EA6DE]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
