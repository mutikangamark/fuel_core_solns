import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Station Setup | Fuel Core Solutions",
  description: "Complete new fuel station installations from ground up. Turnkey solutions delivered in 2.5 weeks with full UNBS certification.",
};

const setupPhases = [
  {
    phase: "Planning & Design",
    duration: "Week 1",
    tasks: [
      "Site assessment and survey",
      "Equipment specification",
      "Compliance requirements review",
      "Project timeline creation",
      "Budget finalization",
    ],
  },
  {
    phase: "Procurement",
    duration: "Week 1-2",
    tasks: [
      "Equipment ordering",
      "Vendor coordination",
      "Delivery scheduling",
      "Parts verification",
      "Quality inspection",
    ],
  },
  {
    phase: "Installation",
    duration: "Week 2",
    tasks: [
      "Tank installation",
      "Pump mounting",
      "Electrical connections",
      "POS integration",
      "Safety systems",
    ],
  },
  {
    phase: "Certification",
    duration: "Week 2-3",
    tasks: [
      "UNBS calibration",
      "Safety inspection",
      "Documentation",
      "Staff training",
      "Handover",
    ],
  },
];

const includedServices = [
  {
    title: "Equipment Supply",
    items: ["Fuel dispensers", "Submersible pumps", "Flow meters", "Nozzles & hoses", "Underground tanks"],
  },
  {
    title: "Installation",
    items: ["Civil works coordination", "Electrical systems", "Piping & connections", "Safety installations", "POS integration"],
  },
  {
    title: "Compliance",
    items: ["UNBS certification", "URSB registration", "Ministry of Energy approval", "Environmental clearance", "Fire safety certification"],
  },
  {
    title: "Training & Support",
    items: ["Staff operations training", "Safety procedures", "Maintenance basics", "24/7 support setup", "Ongoing consultation"],
  },
];

export default function SetupPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-[#3EA6DE]/10 text-[#3EA6DE] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Turnkey Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272A6B] mb-6">
            Complete Station Setup
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From empty land to operational fuel station in 2.5 weeks. We handle everything—equipment, 
            installation, certification, and training—so you can focus on growing your business.
          </p>
        </div>

        {/* Key Stats */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-[#272A6B] rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">2.5</div>
                <p className="text-white/80 text-sm">Weeks to Completion</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">60+</div>
                <p className="text-white/80 text-sm">Stations Built</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">100%</div>
                <p className="text-white/80 text-sm">UNBS Certified</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#3EA6DE] mb-2">0</div>
                <p className="text-white/80 text-sm">Failed Inspections</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272A6B] text-center mb-12">
            Our Setup Timeline
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {setupPhases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 bg-[#3EA6DE] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-xs text-[#3EA6DE] font-medium">{phase.duration}</span>
                    </div>
                    <h3 className="font-bold text-[#272A6B] mb-3">{phase.phase}</h3>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < setupPhases.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272A6B] text-center mb-12">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {includedServices.map((service, index) => (
              <div key={index}>
                <h3 className="font-bold text-[#272A6B] mb-4 pb-2 border-b border-[#3EA6DE]">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#3EA6DE] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Preview */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#3EA6DE]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#3EA6DE]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 italic mb-4">
                  &quot;Samuel went from 0 stations to 3 locations with Fuel Core&apos;s complete setup in just 90 days, 
                  generating 15.4M monthly revenue with zero major downtime.&quot;
                </p>
                <p className="font-semibold text-[#272A6B]">Samuel Odongo</p>
                <p className="text-sm text-gray-500">New Station Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#272A6B] rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to build your station?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Get a complete project proposal with timeline, equipment specifications, and pricing. 
            We&apos;ll guide you through every step of the process.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
