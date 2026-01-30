"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { products } from "../page";
import { notFound } from "next/navigation";

const tabs = [
  { id: "details", label: "Product Details" },
  { id: "info", label: "Additional Information" },
  { id: "contact", label: "Contact Us" },
  { id: "reviews", label: "Customer Reviews" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "What warranty is included?",
    answer: "All our products come with a manufacturer's warranty. Warranty periods vary by product - typically 1-2 years for parts and labor. Extended warranty options are available upon request."
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we offer professional installation services for all our equipment. Our certified technicians ensure proper setup, calibration, and compliance with local regulations."
  },
  {
    question: "What maintenance is required?",
    answer: "Regular preventive maintenance is recommended to ensure optimal performance. We offer maintenance contracts that include scheduled inspections, cleaning, and calibration services."
  },
  {
    question: "Can you source spare parts?",
    answer: "Yes, we maintain a comprehensive inventory of spare parts for all products we sell. We can also source parts for other brands and older equipment models."
  },
  {
    question: "What are the payment terms?",
    answer: "We offer flexible payment options including upfront payment, installment plans, and lease-to-own arrangements for qualifying businesses. Contact us to discuss the best option for your needs."
  }
];

// Product images array - in production, this would come from the product data
const productImages = [
  "/pumps/pump.jpg",
  "/pumps/pump_2.jpg",
  "/pumps/pump_3.jpg",
  "/pumps/pump.jpg",
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    notFound();
  }
  
  // Use same image for all thumbnails if only one exists, or use array
  const images = productImages;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/products/pumps" className="text-[#3EA6DE] hover:underline">
              Back to Catalog
            </Link>
            <span className="mx-2 text-gray-400">»</span>
            <Link href="/products/pumps" className="text-[#3EA6DE] hover:underline">
              {product.category}
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Product Images */}
          <div>
            {/* Main Image */}
            <motion.div 
              key={selectedImage}
              className="relative bg-gray-100 rounded-2xl aspect-square mb-4 border border-gray-200 overflow-hidden"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[selectedImage] || images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Brand Logo Placeholder */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-xs text-gray-400 text-center">{product.brand.split(' ')[0]}</span>
              </div>
              <span className="text-sm text-gray-500">{product.brand}</span>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 flex-wrap">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === index 
                      ? "border-[#3EA6DE] ring-2 ring-[#3EA6DE]/30" 
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="overflow-hidden">
            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E63946] mb-4 sm:mb-6 uppercase break-words">
              {product.name}
            </h1>

            {/* Social Share Buttons */}
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              <button className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-xs sm:text-sm">Facebook</span>
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-xs sm:text-sm">Twitter</span>
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs sm:text-sm">Email</span>
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex overflow-x-auto scrollbar-hide gap-1 pb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.id
                        ? "text-[#272A6B] border-b-2 border-[#272A6B]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The fuel transfer pump can be widely used in oil drum pumping, car refueling, excavator refueling, agricultural equipment refueling, tractor refueling, and ship refueling. But it should be noted that the electric fuel transfer pump is only suitable for diesel, biodiesel and kerosene, and cannot be used for gasoline, liquefied petroleum gas, alcohol and other low flammability fuel.
                    </p>
                  </motion.div>
                )}

                {activeTab === "info" && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 text-gray-500 w-1/3">Brand</td>
                          <td className="py-3 text-gray-900">{product.brand}</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 text-gray-500">Category</td>
                          <td className="py-3 text-gray-900">{product.category}</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 text-gray-500">SKU</td>
                          <td className="py-3 text-gray-900">{product.slug.toUpperCase()}</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 text-gray-500">Availability</td>
                          <td className="py-3 text-green-600">In Stock</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 text-gray-500">Warranty</td>
                          <td className="py-3 text-gray-900">1 Year Manufacturer Warranty</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-500">Certifications</td>
                          <td className="py-3 text-gray-900">UNBS Approved, ISO Certified</td>
                        </tr>
                      </tbody>
                    </table>
                  </motion.div>
                )}

                {activeTab === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-[#272A6B] mb-4">Interested in this product?</h3>
                      <p className="text-gray-600 mb-6">
                        Contact our sales team for pricing, availability, and technical specifications.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-700">+256 700 123 456</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[#3EA6DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-700">sales@fuelcore.ug</span>
                        </div>
                      </div>
                      <Link href="/contact">
                        <Button className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white w-full">
                          Request a Quote
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}

                {activeTab === "reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center py-12">
                      <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <p className="text-gray-500 mb-2">No reviews yet</p>
                      <p className="text-sm text-gray-400">Be the first to review this product</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "faqs" && (
                  <motion.div
                    key="faqs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-3">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <span className="font-medium text-[#272A6B] text-sm">{faq.question}</span>
                            <motion.svg 
                              className="w-5 h-5 text-[#3EA6DE] flex-shrink-0"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              animate={{ rotate: openFaq === index ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </button>
                          <AnimatePresence>
                            {openFaq === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 py-3 bg-white">
                                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/contact">
                <Button size="lg" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white w-full md:w-auto">
                  Request Quote for {product.name}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#272A6B] mb-8">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/pumps/${relatedProduct.slug}`}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#3EA6DE] transition-all group"
                >
                  <div className="bg-gray-100 aspect-square flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#3EA6DE] mb-1">{relatedProduct.brand}</p>
                    <h3 className="font-medium text-[#272A6B] text-sm group-hover:text-[#3EA6DE] transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
