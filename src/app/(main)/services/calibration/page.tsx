import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Calibration & Compliance | Fuel Core Solutions",
  description: "UNBS certification, calibration services, and regulatory compliance management for fuel stations across Uganda.",
};

const calibrationServices = [
  {
    title: "UNBS Calibration",
    description: "Precision calibration of all fuel dispensing equipment to meet UNBS standards.",
    features: [
      "Meter calibration",
      "Flow rate verification",
      "Temperature compensation",
      "Accuracy certification",
      "Official documentation",
    ],
  },
  {
    title: "Compliance Management",
    description: "Complete regulatory compliance tracking and management.",
    features: [
      "6-month verification scheduling",
      "3-month surveillance checks",
      "Compliance calendar",
      "Renewal reminders",
      "Audit preparation",
    ],
  },
  {
    title: "Documentation",
    description: "Complete paperwork and certification documentation.",
    features: [
      "Calibration certificates",
      "Compliance records",
      "Inspection reports",
      "Maintenance logs",
      "Regulatory submissions",
    ],
  },
];

export default function CalibrationPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-[#3EA6DE]/10 text-[#3EA6DE] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            UNBS Certified
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-6">
            Calibration & Compliance
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay compliant with all Ugandan regulations. We handle UNBS calibration, 
            certifications, and ongoing compliance management for your station.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-[#272A6B] rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Certifications We Handle</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-[#3EA6DE] text-3xl font-bold mb-2">UNBS</div>
                <p className="text-white/80 text-sm">Uganda National Bureau of Standards</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-[#3EA6DE] text-3xl font-bold mb-2">UPA</div>
                <p className="text-white/80 text-sm">Uganda Petroleum Authority</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-[#3EA6DE] text-3xl font-bold mb-2">NEMA</div>
                <p className="text-white/80 text-sm">Environmental Compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272A6B] text-center mb-12">
            Our Calibration Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {calibrationServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#272A6B] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#3EA6DE] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#272A6B] rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need calibration or compliance help?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            We&apos;ll assess your current compliance status and create a plan to get you fully certified.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
              Book Compliance Assessment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
