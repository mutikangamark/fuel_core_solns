"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "maintenance", label: "Maintenance" },
  { id: "installation", label: "Installation" },
  { id: "multi-location", label: "Multi-Location" },
  { id: "new-build", label: "New Build" },
  { id: "fuel-pumps", label: "Fuel Pumps" },
];

export const caseStudies = [
  {
    id: 1,
    slug: "station-transformation-kampala",
    title: "How We Transformed a Struggling Station to 99.5% Uptime",
    description: "James Mukasa's station was losing UGX 8M monthly due to chronic downtime. We implemented our Rapid Response System and turned his operations around in just 6 months.",
    client: "James Mukasa",
    clientTitle: "Station Owner, Kampala",
    location: "Kampala",
    category: "maintenance",
    tags: ["Maintenance", "Single Station"],
    timeline: "6 months",
    results: {
      uptime: "99.5%",
      saved: "UGX 42M",
      responseTime: "1.5hrs"
    },
    before: {
      description: "1 station with chronic downtime",
      metrics: ["60% uptime", "UGX 8M monthly losses", "3-day response times"],
    },
    after: {
      description: "99.5% uptime and saved UGX 42M in the first 6 months",
      metrics: ["99.5% uptime", "UGX 42M saved", "1.5hr response"],
    },
    quote: "Fuel Core transformed our operations. We went from constant stress to peace of mind.",
  },
  {
    id: 2,
    slug: "doctor-station-entebbe",
    title: "From 176K to 4.7M Monthly Revenue for a Busy Doctor",
    description: "Dr. Peter Nsubuga needed a hands-off solution for his fuel station. We took over complete management and increased his revenue by 2,570% in just 2 months.",
    client: "Dr. Peter Nsubuga",
    clientTitle: "Medical Professional & Station Owner",
    location: "Entebbe",
    category: "maintenance",
    tags: ["Full Management", "New Owner"],
    timeline: "2 months",
    results: {
      uptime: "99.9%",
      revenue: "4.7M/month",
      growth: "2,570%"
    },
    before: {
      description: "176K monthly revenue with frequent equipment failures",
      metrics: ["Low revenue", "Frequent failures", "No technical knowledge"],
    },
    after: {
      description: "4.7M monthly revenue with 99.9% uptime",
      metrics: ["4.7M revenue", "99.9% uptime", "Full compliance"],
    },
    quote: "As a doctor, I didn't have time to manage station issues. Fuel Core handles everything.",
  },
  {
    id: 3,
    slug: "three-stations-90-days",
    title: "Built 3 Fuel Stations from Scratch in 90 Days",
    description: "Samuel Odongo had zero experience in the fuel industry. We designed, built, and launched 3 stations generating 15.4M monthly revenue in record time.",
    client: "Samuel Odongo",
    clientTitle: "New Station Entrepreneur",
    location: "Kampala",
    category: "new-build",
    tags: ["New Build", "Multi-Station"],
    timeline: "90 days",
    results: {
      stations: "3",
      revenue: "15.4M/month",
      downtime: "Zero"
    },
    before: {
      description: "0 stations - starting from scratch",
      metrics: ["No experience", "No equipment", "No certifications"],
    },
    after: {
      description: "3 locations generating 15.4M monthly revenue",
      metrics: ["3 stations", "15.4M monthly", "Zero downtime"],
    },
    quote: "Fuel Core built my entire network from the ground up in just 90 days.",
  },
  {
    id: 4,
    slug: "rural-station-jinja",
    title: "99% Uptime for a Remote Rural Station in Jinja",
    description: "Rose Akinyi's station suffered from long repair wait times due to its remote location. We established a dedicated support channel and achieved 99% uptime.",
    client: "Rose Akinyi",
    clientTitle: "Rural Station Operator",
    location: "Jinja",
    category: "maintenance",
    tags: ["Rural", "Maintenance"],
    timeline: "3 months",
    results: {
      uptime: "99%",
      saved: "11M UGX",
      responseTime: "4hrs"
    },
    before: {
      description: "75% uptime with long repair wait times",
      metrics: ["75% uptime", "Remote location", "Parts delays"],
    },
    after: {
      description: "99% uptime with 11M UGX in prevented losses",
      metrics: ["99% uptime", "11M saved", "4hr response"],
    },
    quote: "Even in Jinja, Fuel Core responds faster than anyone else we've worked with.",
  },
  {
    id: 5,
    slug: "stabex-multi-location",
    title: "UGX 30M Saved for Stabex International's Network",
    description: "Stabex International needed unified maintenance across multiple locations. We implemented our enterprise solution and reduced their downtime by 85%.",
    client: "Patrick Okello",
    clientTitle: "Operations Manager, Stabex International",
    location: "Kampala",
    category: "multi-location",
    tags: ["Enterprise", "Multi-Location"],
    timeline: "12 months",
    results: {
      saved: "UGX 30M",
      uptime: "99.5%",
      reduction: "85%"
    },
    before: {
      description: "Multiple stations with inconsistent maintenance",
      metrics: ["High costs", "85% average uptime", "No unified system"],
    },
    after: {
      description: "UGX 30M saved in first year, 85% downtime reduction",
      metrics: ["30M saved", "99.5% uptime", "Unified support"],
    },
    quote: "Fuel Core helped us save UGX 30M while reducing downtime by 85%.",
  },
  {
    id: 6,
    slug: "regional-network-mbarara",
    title: "20% Cost Reduction for Regional Station Network",
    description: "Grace Nalwanga's regional stations had scattered vendors and inconsistent quality. We consolidated everything under one provider with perfect compliance.",
    client: "Grace Nalwanga",
    clientTitle: "Operations Director",
    location: "Mbarara",
    category: "multi-location",
    tags: ["Regional", "Cost Optimization"],
    timeline: "8 months",
    results: {
      savings: "20%",
      compliance: "100%",
      providers: "Single"
    },
    before: {
      description: "High maintenance costs across regional stations",
      metrics: ["Scattered vendors", "Inconsistent quality", "High costs"],
    },
    after: {
      description: "20% cost reduction with perfect station performance",
      metrics: ["20% savings", "100% compliance", "Single provider"],
    },
    quote: "All our stations are running perfectly and we saved 20% on maintenance costs.",
  },
  {
    id: 7,
    slug: "fuel-pump-installation-gulu",
    title: "Complete Fuel Pump Installation for New Station in Gulu",
    description: "Moses Okwera needed modern fuel dispensers installed at his new station. We sourced, installed, and certified 6 premium fuel pumps with full UNBS compliance in just 3 weeks.",
    client: "Moses Okwera",
    clientTitle: "Station Owner, Gulu",
    location: "Gulu",
    category: "installation",
    tags: ["Installation", "Fuel Pumps"],
    timeline: "3 weeks",
    results: {
      pumps: "6",
      compliance: "100%",
      downtime: "Zero"
    },
    before: {
      description: "Empty station with no dispensing equipment",
      metrics: ["No pumps", "No certifications", "Unable to operate"],
    },
    after: {
      description: "6 fully certified pumps operational with zero issues",
      metrics: ["6 pumps installed", "UNBS certified", "Operational in 3 weeks"],
    },
    quote: "Fuel Core handled everything from sourcing to certification. We were operational faster than expected.",
  },
  {
    id: 8,
    slug: "pump-upgrade-mbale",
    title: "Upgraded Aging Fuel Pumps to Modern Digital Dispensers",
    description: "Sarah Nabwire's station had outdated pumps causing accuracy issues and customer complaints. We replaced all 4 pumps with modern digital dispensers and improved her throughput by 40%.",
    client: "Sarah Nabwire",
    clientTitle: "Station Manager, Mbale",
    location: "Mbale",
    category: "fuel-pumps",
    tags: ["Fuel Pumps", "Upgrade"],
    timeline: "2 weeks",
    results: {
      throughput: "+40%",
      accuracy: "99.9%",
      complaints: "Zero"
    },
    before: {
      description: "4 outdated pumps with accuracy problems",
      metrics: ["Inaccurate metering", "Customer complaints", "Slow dispensing"],
    },
    after: {
      description: "Modern digital dispensers with perfect accuracy",
      metrics: ["40% faster", "99.9% accuracy", "Happy customers"],
    },
    quote: "The new pumps are incredible. Customers love the speed and we've eliminated metering complaints.",
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="py-16 sm:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-6"
            variants={fadeInUp}
          >
            Our Selected Case Studies
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600"
            variants={fadeInUp}
          >
            See how fuel stations across Uganda have transformed their operations with Fuel Core.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-[#3EA6DE] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          key={activeFilter}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredStudies.map((study) => (
            <motion.div 
              key={study.id}
              variants={fadeInUp}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#3EA6DE] hover:shadow-lg transition-all group"
            >
              {/* Tags */}
              <div className="p-6 pb-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-xs px-3 py-1 rounded-full border ${
                        i === 0 
                          ? "bg-gray-100 text-gray-700 border-gray-300" 
                          : "bg-[#3EA6DE]/10 text-[#3EA6DE] border-[#3EA6DE]/30"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#272A6B] mb-3 group-hover:text-[#3EA6DE] transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {study.description}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center text-sm text-gray-500 hover:text-[#3EA6DE] transition-colors mb-6"
                >
                  Read more 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className="px-6 pb-6">
                <div className="relative bg-gray-50 rounded-xl aspect-video border border-gray-200 overflow-hidden">
                  <Image
                    src="/images/fuel_station_1.jpg"
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-[#272A6B] to-[#1a1d4a] rounded-2xl p-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to become our next success story?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Book a free assessment and see how we can transform your station&apos;s performance.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
              Book Free Assessment
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
