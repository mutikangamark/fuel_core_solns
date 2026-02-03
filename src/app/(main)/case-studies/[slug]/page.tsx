"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "../page";
import { notFound } from "next/navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
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
      delayChildren: 0.1
    }
  }
};

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. Maintenance contracts show results within 2-4 weeks. New installations take 2-6 weeks. Full station builds can be completed in 60-90 days."
  },
  {
    question: "What areas do you service?",
    answer: "We serve all of Uganda including Kampala, Entebbe, Jinja, Mbarara, Gulu, Mbale, and surrounding regions. Our rapid response teams are strategically located for quick service delivery."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, all our projects include comprehensive maintenance support. We offer 24/7 emergency response, scheduled preventive maintenance, and dedicated account management."
  },
  {
    question: "What certifications do you hold?",
    answer: "We are UNBS certified, ISO 9001 compliant, and approved by the Uganda Petroleum Authority. All our installations meet or exceed regulatory requirements."
  },
  {
    question: "How do you guarantee results?",
    answer: "We stand behind our work with a results guarantee. If we don't deliver the promised uptime and performance improvements, we continue working at no additional cost until targets are met."
  }
];

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const study = caseStudies.find(s => s.slug === slug);
  
  if (!study) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#272A6B] via-[#1a1d4a] to-[#272A6B]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            {/* Back Link */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Link 
                href="/case-studies" 
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className={`text-sm px-4 py-1.5 rounded-full border ${
                    i === 0 
                      ? "bg-white/10 text-white border-white/20" 
                      : "bg-[#3EA6DE]/20 text-[#3EA6DE] border-[#3EA6DE]/30"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {study.title}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-3xl"
            >
              {study.description}
            </motion.p>

            {/* Meta Info */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-6 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{study.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{study.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{study.client}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Image */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="relative bg-gray-50 border border-gray-200 rounded-2xl aspect-video overflow-hidden">
              <Image
                src="/images/fuel_station_1.jpg"
                alt={study.title}
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANF6f1qG+0u3uZLK7t3kQMyTIAykj0eQDx8qrV/RKUqJZY9iitT/2Q=="
              />
            </div>
          </motion.div>

          {/* Project Overview Section */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3EA6DE]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#272A6B]">Project Overview</h2>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                {study.description} This project showcases our commitment to delivering exceptional results for fuel station operators across Uganda.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Client</p>
                  <p className="font-semibold text-[#272A6B]">{study.client}</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-semibold text-[#272A6B]">{study.location}</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Timeline</p>
                  <p className="font-semibold text-[#272A6B]">{study.timeline}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Challenge Section */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#272A6B]">The Challenge</h2>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <p className="text-gray-700 mb-6">{study.before.description}</p>
              <h4 className="font-semibold text-red-700 mb-4">Key Issues Identified:</h4>
              <ul className="space-y-3">
                {study.before.metrics.map((metric, i) => (
                  <li key={i} className="flex items-center gap-3 text-red-600">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* The Solutions Section */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3EA6DE]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#272A6B]">The Solutions</h2>
            </div>
            <div className="bg-[#3EA6DE]/5 border border-[#3EA6DE]/20 rounded-2xl p-8">
              <p className="text-gray-700 mb-6">
                Our team conducted a comprehensive assessment and implemented a tailored solution to address each challenge. Here&apos;s what we delivered:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-8 h-8 bg-[#3EA6DE]/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#272A6B] mb-2">Comprehensive Assessment</h4>
                  <p className="text-gray-600 text-sm">Full diagnostic of all equipment and operational processes</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-8 h-8 bg-[#3EA6DE]/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#272A6B] mb-2">Equipment Optimization</h4>
                  <p className="text-gray-600 text-sm">Repairs, upgrades, and preventive maintenance protocols</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-8 h-8 bg-[#3EA6DE]/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#272A6B] mb-2">Rapid Response System</h4>
                  <p className="text-gray-600 text-sm">24/7 support with guaranteed response times</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-8 h-8 bg-[#3EA6DE]/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#272A6B] mb-2">Compliance & Certification</h4>
                  <p className="text-gray-600 text-sm">Full UNBS certification and regulatory compliance</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client Success / Results Section */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#272A6B]">Client Success</h2>
            </div>
            
            {/* Results Grid */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 mb-6">{study.after.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(study.results).map(([key, value], i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-green-100 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#3EA6DE] mb-2">
                      {value}
                    </div>
                    <p className="text-gray-600 text-sm capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Quote */}
            <div className="bg-gradient-to-r from-[#272A6B] to-[#1a1d4a] rounded-2xl p-8 md:p-12">
              <svg className="w-12 h-12 text-[#3EA6DE] mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                {study.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3EA6DE]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">{study.client}</p>
                  <p className="text-gray-300 text-sm">{study.clientTitle}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Gallery */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3EA6DE]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#272A6B]">Project Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="relative bg-gray-50 border border-gray-200 rounded-xl aspect-square overflow-hidden hover:border-[#3EA6DE] transition-colors"
                >
                  <Image
                    src="/images/fuel_station_1.jpg"
                    alt={`${study.title} gallery image ${i}`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANF6f1qG+0u3uZLK7t3kQMyTIAykj0eQDx8qrV/RKUqJZY9iitT/2Q=="
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQs Section */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#3EA6DE]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#272A6B]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                  initial={false}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-[#272A6B]">{faq.question}</span>
                    <motion.svg 
                      className="w-5 h-5 text-[#3EA6DE] flex-shrink-0"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-white">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center bg-gradient-to-r from-[#272A6B] to-[#1a1d4a] rounded-2xl p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want results like this for your station?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Book a free assessment and see how we can transform your station&apos;s performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
                  Book Free Assessment
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
