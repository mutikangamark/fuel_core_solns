"use client";

import { FadeInView } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function DemoSection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <FadeInView className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272A6B] mb-4">
            See Our Platform in Action
          </h2>
          <p className="text-base sm:text-lg text-[#272A6B]/70 max-w-2xl mx-auto">
            Experience the intuitive dashboard that gives you complete control over your fuel station operations
          </p>
        </FadeInView>

        <FadeInView delay={0.2} className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-[#272A6B]/10 shadow-2xl bg-white">
            <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-50">
              <Image
                src="/demo.png"
                alt="Fuel Core Solutions Platform Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Card>
        </FadeInView>

        <FadeInView delay={0.4} className="text-center mt-8">
          <p className="text-sm text-[#272A6B]/60">
            Real-time monitoring • Deployment tracking • Performance analytics
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
