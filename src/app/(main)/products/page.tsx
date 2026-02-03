import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products & Services | Fuel Core Solutions",
  description: "Premium fuel pumps, dispensers, maintenance services, and complete station setup solutions.",
};

const products = [
  {
    title: "Fuel Pumps & Dispensers",
    description: "Premium fuel dispensing equipment from world-renowned brands. All equipment comes with installation, calibration, and UNBS certification.",
    href: "/products/pumps",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    features: ["UNBS Certified", "1-Year Warranty", "Professional Installation", "24/7 Support"],
  },
  {
    title: "Maintenance Services",
    description: "Preventive and emergency maintenance with 1.5-hour guaranteed response times. Our certified technicians keep your station running at 99.9% uptime.",
    href: "/products/maintenance",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ["1.5hr Response Time", "Monthly Inspections", "Emergency Repairs", "UNBS Compliance"],
  },
  {
    title: "Station Setup",
    description: "Complete new station installations from ground up. We handle everything from equipment sourcing to UNBS certification, delivered in 2.5 weeks.",
    href: "/products/setup",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ["Turnkey Solutions", "2.5 Week Delivery", "Staff Training", "Full Certification"],
  },
];

export default function ProductsPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-6">
            Products & Services
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to build, maintain, and scale your fuel station operations. 
            All backed by our 99.9% uptime guarantee.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Link 
              key={index} 
              href={product.href}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#3EA6DE] hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[#3EA6DE] mb-6 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h2 className="text-xl font-bold text-[#272A6B] mb-3 group-hover:text-[#3EA6DE] transition-colors">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#3EA6DE] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center text-[#3EA6DE] font-medium text-sm group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-[#272A6B] rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book a free 5-minute assessment call and we&apos;ll recommend the right solution for your station.
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
