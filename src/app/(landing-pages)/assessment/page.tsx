import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Free Fuel Assessment | Fuel Core Solutions",
  description: "Get a free assessment of your fuel needs and discover optimization opportunities.",
};

export default function AssessmentLandingPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-[#3EA6DE] font-medium mb-4">Free Assessment</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#272A6B] leading-tight">
          Discover Your Fuel Savings Potential
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Get a comprehensive assessment of your fuel needs and discover optimization opportunities.
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
