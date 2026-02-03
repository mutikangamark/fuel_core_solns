"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
    transition: { duration: 0.7, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const }
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
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

export default function MaintenancePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        className="py-16 sm:py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span
              className="inline-block bg-[#3EA6DE]/10 text-[#3EA6DE] text-sm font-medium px-4 py-1.5 rounded-full mb-4"
              variants={fadeInUp}
            >
              99.9% Uptime Guaranteed
            </motion.span>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-6"
              variants={fadeInUp}
            >
              Maintenance Services
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Preventive and emergency maintenance backed by our Rapid Response System™.
              We guarantee 1.5-hour response times and 99.9% uptime—or we work for free.
            </motion.p>
          </div>

          {/* Response Time Visual */}
          <motion.div
            className="mb-20 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scaleIn}
          >
            <div className="bg-[#272A6B] rounded-2xl p-8 sm:p-12 text-center">
              <motion.div
                className="grid sm:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">1.5hr</div>
                  <p className="text-white/80 text-sm">Urban Response Time</p>
                  <p className="text-white/60 text-xs mt-1">Kampala, Entebbe, Wakiso</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">4hr</div>
                  <p className="text-white/80 text-sm">Regional Response Time</p>
                  <p className="text-white/60 text-xs mt-1">Jinja, Mbarara, Gulu</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">24/7</div>
                  <p className="text-white/80 text-sm">Emergency Hotline</p>
                  <p className="text-white/60 text-xs mt-1">Always available</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Tracing Beam Content */}
      <div className="container mx-auto px-4 pb-16 sm:pb-20">
        <TracingBeam className="pl-10 pr-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Preventive Care - From Left */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInLeft}
            >
              <motion.span
                className="inline-block bg-[#3EA6DE]/10 text-[#3EA6DE] text-xs font-medium px-3 py-1 rounded-full mb-4"
                variants={fadeInUp}
              >
                Service 01
              </motion.span>
              <motion.h2
                className="text-2xl font-bold text-[#272A6B] mb-4"
                variants={fadeInUp}
              >
                Preventive Care
              </motion.h2>
              <motion.p
                className="mb-8 text-sm text-neutral-600"
                variants={fadeInUp}
              >
                Our preventive maintenance program keeps your equipment running at peak efficiency.
                Regular inspections catch issues before they become costly breakdowns.
              </motion.p>
              <motion.div
                className="mb-8 space-y-2"
                variants={staggerItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monthly equipment inspections
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  47-point diagnostic checks
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Filter and seal replacements
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Calibration verification
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance optimization
                </motion.div>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <ImagePlaceholder alt="Pump inspection" />
                <ImagePlaceholder alt="Diagnostic check" />
                <ImagePlaceholder alt="Filter replacement" />
                <ImagePlaceholder alt="Calibration" />
              </motion.div>
            </motion.div>

            {/* Emergency Response - From Right */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInRight}
            >
              <motion.span
                className="inline-block bg-[#3EA6DE]/10 text-[#3EA6DE] text-xs font-medium px-3 py-1 rounded-full mb-4"
                variants={fadeInUp}
              >
                Service 02
              </motion.span>
              <motion.h2
                className="text-2xl font-bold text-[#272A6B] mb-4"
                variants={fadeInUp}
              >
                Emergency Response
              </motion.h2>
              <motion.p
                className="mb-8 text-sm text-neutral-600"
                variants={fadeInUp}
              >
                When breakdowns happen, our Rapid Response System™ gets you back up and running fast.
                Pre-stocked parts and strategically positioned teams mean minimal downtime.
              </motion.p>
              <motion.div
                className="mb-8 space-y-2"
                variants={staggerItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1.5-hour response in Kampala
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  4-hour response regional
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 emergency hotline
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pre-stocked spare parts
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  On-site repairs
                </motion.div>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <ImagePlaceholder alt="Emergency dispatch" />
                <ImagePlaceholder alt="On-site repair" />
                <ImagePlaceholder alt="Parts inventory" />
                <ImagePlaceholder alt="Technician team" />
              </motion.div>
            </motion.div>

            {/* UNBS Compliance - From Left */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInLeft}
            >
              <motion.span
                className="inline-block bg-[#3EA6DE]/10 text-[#3EA6DE] text-xs font-medium px-3 py-1 rounded-full mb-4"
                variants={fadeInUp}
              >
                Service 03
              </motion.span>
              <motion.h2
                className="text-2xl font-bold text-[#272A6B] mb-4"
                variants={fadeInUp}
              >
                UNBS Compliance
              </motion.h2>
              <motion.p
                className="mb-8 text-sm text-neutral-600"
                variants={fadeInUp}
              >
                Stay compliant with all regulatory requirements. We manage your certifications,
                prepare for audits, and ensure your station meets every standard.
              </motion.p>
              <motion.div
                className="mb-8 space-y-2"
                variants={staggerItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  6-month verifications
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  3-month surveillance
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Documentation management
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Audit preparation
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm text-neutral-700" variants={listItem}>
                  <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Certification renewals
                </motion.div>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <ImagePlaceholder alt="UNBS certification" />
                <ImagePlaceholder alt="Compliance audit" />
                <ImagePlaceholder alt="Documentation" />
                <ImagePlaceholder alt="Verification process" />
              </motion.div>
            </motion.div>
          </div>
        </TracingBeam>

        {/* CTA */}
        <motion.div
          className="text-center bg-[#272A6B] rounded-2xl p-12 max-w-4xl mx-auto mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={scaleIn}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Stop losing money to downtime
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Book a free assessment and get a custom maintenance plan with guaranteed uptime for your station.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
                Book Free Assessment
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
