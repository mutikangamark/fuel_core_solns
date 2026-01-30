"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials, testimonialsSection } from "@/lib/content";

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

const formattedTestimonials = testimonials.map((t) => ({
  quote: t.quote,
  name: t.name,
  title: t.title,
}));

export default function TestimonialSection() {
  return (
    <section className="py-12 sm:py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p 
            className="text-base sm:text-lg text-[#3EA6DE] mb-2"
            variants={fadeInUp}
          >
            {testimonialsSection.preHeadline}
          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#272A6B]"
            variants={fadeInUp}
          >
            {testimonialsSection.headline}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600"
            variants={fadeInUp}
          >
            {testimonialsSection.subHeadline}
          </motion.p>
        </motion.div>
      </div>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <InfiniteMovingCards
          items={formattedTestimonials}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </motion.div>
    </section>
  );
}
