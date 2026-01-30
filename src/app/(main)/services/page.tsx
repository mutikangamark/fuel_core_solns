"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const accordionServices = [
  {
    id: "products",
    icon: "⛽",
    title: "Fuel Station Products",
    description: "We offer a wide range of premium fuel station equipment including pumps, tanks, automation systems, and accessories from quality manufacturers.",
    details: "Get quality equipment at competitive prices with 2-year warranty coverage and dedicated after-sales support.",
    href: "/products",
  },
  {
    id: "maintenance",
    icon: "🔧",
    title: "Fuel Station Maintenance",
    description: "Keep your station running at peak performance with our comprehensive maintenance programs. We offer 1.5-hour guaranteed response times and 99.9% uptime guarantee.",
    details: "Our certified technicians provide monthly inspections, emergency repairs, and proactive maintenance to prevent costly downtime.",
    href: "/services/maintenance",
  },
  {
    id: "setup",
    icon: "🏗️",
    title: "Fuel Station Setup",
    description: "Complete installation and setup services for new fuel stations. From site assessment to final commissioning, we handle the entire process.",
    details: "Professional installation with UNBS certification, staff training, and full documentation included.",
    href: "/services/setup",
  },
];

export default function ServicesPage() {
  const [openItem, setOpenItem] = useState<string | null>("products");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] sm:h-[350px] overflow-hidden">
        <Image
          src="/images/fuel_station.jpg"
          alt="Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#272A6B]/70" />
        
        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Services</h1>
          <nav className="text-white/80 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">•</span>
            <span className="text-white">Services</span>
          </nav>
        </motion.div>
      </div>

      {/* Two Column Intro Section */}
      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
            {/* Left Column - Headline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#272A6B] leading-tight">
                We position our clients at the forefront of advance technology in petroleum industry
              </h2>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInRight}
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="text-4xl font-serif text-[#272A6B] float-left mr-2 leading-none">A</span>
                t Fuel Core, we specialize in delivering comprehensive solutions for fuel station operations. 
                Our equipment and services are designed to perform optimally in your environment. Not only do 
                our solutions work properly out-of-the-box, but they give you the best long term reliability 
                and reduce service calls.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We also offer a complete listing of equipment, kits and upgrades for a wide range of 
                dispenser options across multiple manufacturers.
              </p>
              <p className="text-gray-600">
                Looking for specific equipment? Check out our{" "}
                <Link href="/products" className="text-[#3EA6DE] hover:underline font-medium">
                  Online Catalog!
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Accordion Services Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            {accordionServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="mb-4"
                variants={fadeInUp}
              >
                <div
                  className={`bg-white rounded-xl border transition-all duration-300 ${
                    openItem === service.id 
                      ? "border-l-4 border-l-[#3EA6DE] border-gray-200 shadow-lg" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(service.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{service.icon}</span>
                      <span className={`font-semibold text-lg ${
                        openItem === service.id ? "text-[#272A6B]" : "text-gray-800"
                      }`}>
                        {service.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openItem === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        openItem === service.id ? "bg-[#3EA6DE] text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.details}
                          </p>
                          <Link href={service.href}>
                            <Button variant="outline" className="border-[#3EA6DE] text-[#3EA6DE] hover:bg-[#3EA6DE] hover:text-white">
                              Learn More
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="py-16 bg-[#272A6B]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Need help choosing the right service?
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Book a free assessment and we&apos;ll recommend the best solution for your station.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
                Book Free Assessment
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
