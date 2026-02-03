"use client";

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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Premium fuel equipment and professional services to keep your station running at peak performance.
          </p>
        </motion.div>

        {/* Products & Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Products Card */}
          <motion.div
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            variants={fadeInLeft}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/pumps/pump.jpg"
                alt="Premium Fuel Dispensers"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANF6f1qG+0u3uZLK7t3kQMyTIAykj0eQDx8qrV/RKUqJZY9iitT/2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#3EA6DE] text-white text-xs font-bold px-3 py-1 rounded-full">
                  24+ Products
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-[#272A6B] mb-4">Products</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Premium fuel dispensers and genuine spare parts for your station. Our equipment is designed and built to perform optimally, ensuring reliability and longevity for your operations.
              </p>
              <Link href="/products">
                <Button className="w-full sm:w-auto bg-[#3EA6DE] hover:bg-[#3EA6DE]/90">
                  Browse Products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Services Card */}
          <motion.div
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            variants={fadeInRight}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/fuel_station_1.jpg"
                alt="Professional Services"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANF6f1qG+0u3uZLK7t3kQMyTIAykj0eQDx8qrV/RKUqJZY9iitT/2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#272A6B] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Full Support
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-[#272A6B] mb-4">Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We support fuel station operators with state-of-the-art technology, enabling them to retail fuel to their customers with premium equipment and comprehensive maintenance support.
              </p>
              <Link href="/services">
                <Button className="w-full sm:w-auto bg-[#272A6B] hover:bg-[#272A6B]/90">
                  View Services
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

           {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-[#272A6B] font-medium mb-6">
            All equipment comes with manufacturer warranty and full UNBS compliance certification.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
