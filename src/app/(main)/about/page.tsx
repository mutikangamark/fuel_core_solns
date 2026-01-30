"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
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
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
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
      staggerChildren: 0.15,
      delayChildren: 0.1
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

const staggerItems = {
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
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

const ImagePlaceholder = ({ alt }: { alt: string }) => (
  <motion.div
    className="h-20 w-full rounded-lg bg-gray-100 flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    }}
  >
    <div className="text-center p-4">
      <svg className="w-8 h-8 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-xs text-gray-400">{alt}</p>
    </div>
  </motion.div>
);

const timelineData = [
  {
    title: "2026",
    content: (
      <div>
        <motion.p
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Expanding across Uganda with plans to grow throughout East Africa—Kenya, Tanzania, and Rwanda.
          Positioning to become the region&apos;s leading fuel equipment supplier with 24+ premium products.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ImagePlaceholder alt="Regional expansion" />
          <ImagePlaceholder alt="New service offerings" />
          <ImagePlaceholder alt="Team growth" />
          <ImagePlaceholder alt="Training center" />
        </motion.div>

      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <motion.p
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Rapid growth to 60+ stations equipped across Uganda. Became the trusted equipment supplier for major fuel networks.
        </motion.p>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
            ✅ 60+ fuel stations equipped
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
            ✅ 24+ premium products in catalog
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
            ✅ Complete maintenance services
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
            ✅ UNBS certification for all equipment
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
            ✅ Nationwide delivery network established
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ImagePlaceholder alt="Equipment showroom" />
          <ImagePlaceholder alt="Pump installation" />
          <ImagePlaceholder alt="Team at work" />
          <ImagePlaceholder alt="Client handover" />
        </motion.div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <motion.p
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Fuel Core Solutions founded with a mission to bring world-class fuel equipment to Uganda.
          Started with partnerships with leading manufacturers and equipped our first 10 stations in Kampala.
        </motion.p>
        <motion.p
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Our founders&apos;s decade of experience in petroleum engineering helped us identify the
          critical need for quality fuel equipment and reliable after-sales support in Uganda.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ImagePlaceholder alt="Company founding" />
          <ImagePlaceholder alt="First equipment delivery" />
          <ImagePlaceholder alt="Team formation" />
          <ImagePlaceholder alt="Service expansion" />
        </motion.div>
      </div>
    ),
  },
];

const coreValues = [
  {
    title: "Quality",
    description: "We only supply equipment from world-class brands. No compromises on quality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Every product is UNBS-certified. Every installation meets the highest standards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "Transparent pricing, honest recommendations, and no hidden costs. Ever.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Support",
    description: "Full after-sales support, warranty coverage, and spare parts availability nationwide.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];


export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center -mt-20 pt-20"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fuel_station.jpg"
            alt="Fuel Core Solutions"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Uganda&apos;s Premier Supplier of World-Class Fuel Equipment.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            We believe every fuel station deserves access to premium equipment.
            That&apos;s why we partner with world-class brands to deliver quality you can trust.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20">

        {/* Story Section - From Left */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#272A6B] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fuel Core was born from a vision. Our founders spent over a decade in petroleum
                  engineering watching station owners struggle to find quality fuel equipment and
                  reliable suppliers in Uganda.
                </p>
                <p>
                  The market was filled with substandard equipment and suppliers who disappeared
                  after the sale. UNBS compliance was a challenge. Station owners deserved better
                  access to world-class fuel equipment.
                </p>
                <p>
                  In 2024, we launched Fuel Core as Uganda&apos;s premier fuel equipment supplier.
                  Today, we&apos;ve equipped 60+ stations with premium equipment and provide full after-sales support.
                </p>
              </div>
            </div>
            <motion.div
              className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center"
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-gray-500 text-sm">Team photo coming soon</p>
                <p className="text-gray-400 text-xs mt-1">Professional shoot scheduled</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Metrics - Scale In */}
        <motion.div
          className="bg-[#272A6B] rounded-2xl p-8 sm:p-12 mb-20 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={scaleIn}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8"
            variants={fadeInUp}
          >
            Our Impact
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {resultsMetrics.metrics.slice(0, 4).map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#3EA6DE] mb-2">
                  {metric.value}
                </div>
                <p className="text-sm text-white/70">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
              {/* Get in Touch CTA Button */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Link href="/contact">
            <Button size="lg" className="px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
        {/* Core Values - From Right */}
        <motion.div
          className="mb-20 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInRight}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#272A6B] text-center mb-12"
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerItems}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                variants={cardItem}
              >
                <motion.div
                  className="text-[#3EA6DE] mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-bold text-[#272A6B] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          className="mb-20 -mx-4 sm:-mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInUp}
        >
          <Timeline data={timelineData} />
        </motion.div>

        {/* Get in Touch CTA Button */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Link href="/contact">
            <Button size="lg" className="px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </Link>
        </motion.div>

        {/* Mission Statement - From Left */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-20 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#272A6B] mb-6"
            variants={fadeInUp}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            To be East Africa&apos;s most trusted supplier of premium fuel equipment, delivering
            world-class dispensers and station solutions that empower operators to build
            reliable, profitable businesses for generations to come.
          </motion.p>
        </motion.div>

        {/* CTA - Scale In */}
        <motion.div
          className="text-center bg-[#272A6B] rounded-2xl p-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={scaleIn}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Ready to upgrade your station?
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Join 60+ station owners who trust Fuel Core for premium equipment.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
