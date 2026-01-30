"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Fuel Dispensers",
    subtitle: "Premium units",
    image: "/slides/dispenser.jpg",
    category: "Dispensing Equipment",
  },
  {
    id: 2,
    title: "Submersible Pumps",
    subtitle: "High-performance underground pumping systems",
    image: "/slides/submersible.jpg",
    category: "Pumping Systems",
  },
  {
    id: 3,
    title: "Flow Meters",
    subtitle: "UNBS-certified precision measurement",
    image: "/slides/flowmeter.jpg",
    category: "Measurement",
  },
  {
    id: 4,
    title: "Station Setup",
    subtitle: "Complete turnkey installations",
    image: "/slides/station.jpg",
    category: "Full Service",
  },
  {
    id: 5,
    title: "Maintenance",
    subtitle: "24/7 emergency response",
    image: "/slides/maintenance.jpg",
    category: "Support",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#272A6B] to-[#1a1d4a] shadow-2xl">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Placeholder gradient background - replace with actual images */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#272A6B]/90 to-[#1a1d4a]">
            {/* Image placeholder - uncomment when images are available */}
            {/* <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#3EA6DE] text-sm font-medium tracking-wider uppercase mb-3"
            >
              {slides[currentSlide].category}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
            >
              {slides[currentSlide].title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            {/* Photo Placeholder Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <p className="text-white/60 text-xs">
                Professional equipment photos coming soon
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => { prevSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => { nextSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#3EA6DE] w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-[#3EA6DE]"
        />
      </div>
    </div>
  );
}
