import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { contactPage, contact, serviceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | Fuel Core Solutions",
  description: "Get in touch with Fuel Core Solutions for all your fuel service needs.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#272A6B]">
              {contactPage.headline}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {contactPage.subHeadline}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-[#272A6B] mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p><span className="font-medium">Emergency Hotline:</span> {contact.emergencyHotline}</p>
                  <p><span className="font-medium">Sales:</span> {contact.salesPhone}</p>
                  <p><span className="font-medium">Email:</span> {contact.email}</p>
                  <p><span className="font-medium">Support:</span> {contact.supportEmail}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#272A6B] mb-4">Office Hours</h3>
                <div className="space-y-1 text-gray-600 text-sm">
                  <p>{contact.hours.weekdays}</p>
                  <p>{contact.hours.saturday}</p>
                  <p>{contact.hours.sunday}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#272A6B] mb-4">{serviceAreas.primary.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.primary.areas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-[#3EA6DE]/10 text-[#272A6B] rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#272A6B] mb-4">{serviceAreas.secondary.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.secondary.areas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-500 italic">
                {serviceAreas.expanding}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
