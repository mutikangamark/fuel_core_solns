"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
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
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
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

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

const highlights = [
  "Premium fuel station equipment",
  "Complete maintenance and setup services",
  "Professional installation with UNBS certification",
  "Dedicated after-sales support",
];

export function ProcessBentoGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-6 leading-tight">
            About Us
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#272A6B] mb-6">
              At Fuel Core, 
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in delivering innovative solutions designed to optimize operations, enhance efficiency, and ensure the seamless performance of your fuel station. From precision-engineered fuel dispensers to advanced automation and monitoring systems, our products and services are tailored to meet your unique needs.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-[#3EA6DE] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link href="/contact">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/fuel_station.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
              {/* Decorative Label */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-[#3EA6DE] text-white px-4 py-8 rounded-lg shadow-lg transform rotate-90 origin-center">
                <span className="text-sm font-bold tracking-wider whitespace-nowrap">The Team</span>
              </div>
            </div>
            {/* Decorative dots pattern */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#272A6B]" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#3EA6DE]" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
