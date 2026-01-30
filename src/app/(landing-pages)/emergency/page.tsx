import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Emergency Fuel Services | Fuel Core Solutions",
  description: "24/7 emergency fuel delivery services when you need them most.",
};

export default function EmergencyLandingPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-red-500 font-medium mb-4">24/7 Emergency Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#272A6B] leading-tight">
          Emergency Fuel Delivery
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          When you need fuel fast, we&apos;re here. 24/7 emergency delivery services.
        </p>
        <div className="mt-10">
          <Link href="/contact">
            <Button size="lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
