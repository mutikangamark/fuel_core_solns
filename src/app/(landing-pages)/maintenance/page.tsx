import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fuel System Maintenance | Fuel Core Solutions",
  description: "Professional fuel system maintenance services to keep your operations running smoothly.",
};

export default function MaintenanceLandingPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-[#3EA6DE] font-medium mb-4">Professional Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#272A6B] leading-tight">
          Fuel System Maintenance
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Keep your fuel systems running at peak efficiency with our professional maintenance services.
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
