"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { resultsMetrics } from "@/lib/content";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const businessServices = [
  {
    id: "products",
    icon: "⛽",
    title: "Fuel Station Products",
    description: "Premium fuel station equipment including pumps, tanks, and accessories. Quality products with 2-year warranty and competitive pricing."
  },
  {
    id: "maintenance",
    icon: "🔧",
    title: "Fuel Station Maintenance",
    description: "24/7 emergency support, preventive maintenance programs, and certified technicians to keep your station running at peak performance."
  },
  {
    id: "setup",
    icon: "🏗️",
    title: "Fuel Station Setup",
    description: "Professional installation services with UNBS certification. From site assessment to final commissioning, we handle the entire process."
  }
];

export default function ResultsMetricsSection() {
  const [openItem, setOpenItem] = useState<string | null>("products");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-20 bg-[#272A6B]">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {resultsMetrics.headline}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {resultsMetrics.metrics.map((metric, index) => (
            <motion.div key={index} variants={scaleIn}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#3EA6DE] mb-2">
                  {metric.value}
                </div>
                <p className="text-white/80 text-sm">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="text-lg text-white mb-8">
            {resultsMetrics.callout}
          </p>
          <motion.div 
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#272A6B] hover:bg-gray-100">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Industries & Business Model Section */}
        <div className="border-t border-white/20 pt-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Left Column - Industries We Serve */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#3EA6DE]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Industries We Serve</h3>
              </div>
              <p className="text-[#3EA6DE] text-sm mb-4">Serving Businesses of All Sizes</p>
              <p className="text-white/80 mb-8 leading-relaxed">
                We work with a wide range of clients, from independent fuel retailers to large oil companies. 
                Whether you operate a single station or manage a network of petrol stations, our solutions are 
                designed to meet your unique requirements.
              </p>
              <Link href="/services">
                <Button className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </motion.div>

            {/* Right Column - Business Model Accordion */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#272A6B] border border-white/50"></span>
                  <span className="w-2 h-2 rounded-full bg-[#272A6B] border border-white/50"></span>
                  <span className="w-2 h-2 rounded-full bg-[#3EA6DE]"></span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Business Model</h3>
              </div>

              <div className="space-y-3">
                {businessServices.map((service) => (
                  <div key={service.id} className="border-b border-white/20">
                    <button
                      onClick={() => toggleItem(service.id)}
                      className="w-full flex items-center justify-between py-4 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-white font-medium group-hover:text-[#3EA6DE] transition-colors">
                          {service.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openItem === service.id ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-6 h-6 rounded flex items-center justify-center ${
                          openItem === service.id ? "bg-[#3EA6DE]" : "bg-white/10"
                        }`}
                      >
                        <svg 
                          className={`w-4 h-4 ${openItem === service.id ? "text-white" : "text-white/70"}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openItem === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/70 text-sm pb-4 pl-9 leading-relaxed">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
