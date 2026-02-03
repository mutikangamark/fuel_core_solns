"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/ui/motion";
import { problem } from "@/lib/content";

export default function ProblemSection() {
  return (
    <section className="py-12 sm:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#272A6B]">
              {problem.headline}
            </h2>
            <p className="text-base sm:text-lg text-gray-500 italic mb-4">
              {problem.subtext}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              {problem.description}
            </p>
            <p className="text-lg sm:text-xl font-semibold text-[#272A6B] mb-8">
              {problem.callout}
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
