import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Maintenance Services | Fuel Core Solutions",
  description: "Preventive and emergency maintenance with 1.5-hour guaranteed response times. Keep your station running at 99.9% uptime.",
};

const maintenanceServices = [
  {
    title: "Preventive Maintenance",
    description: "Scheduled inspections and servicing to prevent breakdowns before they happen.",
    features: [
      "Monthly equipment inspections",
      "47-point diagnostic checks",
      "Filter and seal replacements",
      "Calibration verification",
      "Performance optimization",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Emergency Repairs",
    description: "Rapid response to breakdowns with guaranteed arrival times.",
    features: [
      "1.5-hour response in Kampala",
      "4-hour response regional",
      "24/7 emergency hotline",
      "Pre-stocked spare parts",
      "On-site repairs",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "UNBS Compliance",
    description: "Full regulatory compliance management and certification support.",
    features: [
      "6-month verifications",
      "3-month surveillance",
      "Documentation management",
      "Audit preparation",
      "Certification renewals",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: 1,
    title: "ASSESS",
    description: "We conduct a comprehensive 47-point inspection of your equipment in under 2 hours to identify issues and optimization opportunities.",
  },
  {
    step: 2,
    title: "ENGINEER",
    description: "We create a custom maintenance plan using proven systems that guarantee UNBS compliance and optimal performance.",
  },
  {
    step: 3,
    title: "IMPLEMENT",
    description: "We execute repairs and upgrades in 2.5 weeks, training your staff and establishing 24/7 emergency protocols.",
  },
  {
    step: 4,
    title: "MAINTAIN",
    description: "We provide ongoing monitoring, monthly visits, and immediate emergency response for continuous peak performance.",
  },
];

export default function MaintenancePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-[#3EA6DE]/10 text-[#3EA6DE] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            99.9% Uptime Guaranteed
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-6">
            Maintenance Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preventive and emergency maintenance backed by our Rapid Response System™. 
            We guarantee 1.5-hour response times and 99.9% uptime—or we work for free.
          </p>
        </div>

        {/* Response Time Visual */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-[#272A6B] rounded-2xl p-8 sm:p-12 text-center">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">1.5hr</div>
                <p className="text-white/80 text-sm">Urban Response Time</p>
                <p className="text-white/60 text-xs mt-1">Kampala, Entebbe, Wakiso</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">4hr</div>
                <p className="text-white/80 text-sm">Regional Response Time</p>
                <p className="text-white/60 text-xs mt-1">Jinja, Mbarara, Gulu</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">24/7</div>
                <p className="text-white/80 text-sm">Emergency Hotline</p>
                <p className="text-white/60 text-xs mt-1">Always available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272A6B] text-center mb-12">
            Our Maintenance Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-[#3EA6DE] mb-4">{service.icon}</div>
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

        {/* Process Steps */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272A6B] text-center mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#3EA6DE] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#272A6B] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272A6B] text-center mb-8">
            Why Outsource to Fuel Core?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-500 mb-4">In-House Maintenance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  UGX 5-10M/month per station
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Procurement delays for parts
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  1-3 day response times
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  No uptime guarantees
                </li>
              </ul>
            </div>
            <div className="bg-[#272A6B] rounded-xl p-6 text-white">
              <h3 className="font-bold text-[#3EA6DE] mb-4">Fuel Core Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#3EA6DE] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  UGX 500K-2M/month per station
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#3EA6DE] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pre-stocked genuine parts
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#3EA6DE] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  1.5-hour guaranteed response
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#3EA6DE] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  99.9% uptime guaranteed
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#272A6B] rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Stop losing money to downtime
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book a free assessment and get a custom maintenance plan with guaranteed uptime for your station.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
              Book Free Assessment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
