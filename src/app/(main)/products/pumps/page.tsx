"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 12;

const categories = [
  { name: "Pumps & Dispensers", count: 11 },
  { name: "Submersible Pumps", count: 4 },
  { name: "Flow Meters", count: 3 },
  { name: "Nozzles & Hoses", count: 8 },
  { name: "Underground Tanks", count: 2 },
  { name: "Automation Systems", count: 4 },
  { name: "Piping & Fittings", count: 6 },
  { name: "Spares & Accessories", count: 12 },
];


export const products = [
  { id: 1, slug: "fuel-core-ts1-frontier-h3519", name: "Frontier H3519", category: "Pumps & Dispensers", brand: "Fuel-Core-TS1", description: "The Fuel Core TS1 Frontier H3519 is a high-performance fuel dispenser designed for retail fuel stations. Features advanced metering technology, user-friendly interface, and robust construction for long-lasting reliability." },
  { id: 2, slug: "fuel-core-ts1-frontier-h3519-compact", name: "Frontier H3519 Compact", category: "Pumps & Dispensers", brand: "Fuel-Core-TS1", description: "Compact and efficient fuel dispenser ideal for medium-traffic stations. Offers precise fuel delivery, easy maintenance, and modern design aesthetics." },
  { id: 3, slug: "fuel-core-ts1-latitude-ls100", name: "Latitude LS100", category: "Pumps & Dispensers", brand: "Fuel-Core-TS1", description: "Entry-level dispenser with premium features. The LS100 provides reliable performance with lower initial investment, perfect for new station owners." },
  { id: 4, slug: "fuel-core-ts1-latitude-ls200", name: "Latitude LS200", category: "Pumps & Dispensers", brand: "Fuel-Core-TS1", description: "Advanced dispenser with enhanced display and multi-product capabilities. Ideal for high-volume stations requiring versatility and speed." },
  { id: 5, slug: "wayne-helix-6000", name: "Wayne Helix 6000", category: "Pumps & Dispensers", brand: "Wayne", description: "Premium fuel dispenser featuring Wayne's innovative Helix technology. Offers superior accuracy, durability, and a sleek modern design." },
  { id: 6, slug: "tokheim-quantium", name: "Quantium", category: "Pumps & Dispensers", brand: "Tokheim", description: "World-class fuel dispenser known for reliability and precision. Features advanced electronics and modular design for easy servicing." },
  { id: 7, slug: "tatsuno-sunny-series", name: "Tatsuno Sunny Series", category: "Pumps & Dispensers", brand: "Tatsuno", description: "Japanese-engineered dispensers renowned for accuracy and longevity. The Sunny Series offers excellent value with proven performance." },
  { id: 8, slug: "red-jacket-submersible-pump", name: "Red Jacket Submersible Pump", category: "Submersible Pumps", brand: "Franklin Fueling", description: "Industry-leading submersible pump for underground fuel storage. Provides consistent flow rates and exceptional durability in harsh conditions." },
  { id: 9, slug: "piusi-flow-meter-k33", name: "PIUSI Flow Meter K33", category: "Flow Meters", brand: "Other", description: "Precision flow meter for accurate fuel measurement. Features digital display, pulse output, and compatibility with various fuel types." },
  { id: 10, slug: "opw-11a-nozzle", name: "OPW 11A Nozzle", category: "Nozzles & Hoses", brand: "OPW", description: "Industry-standard automatic shut-off nozzle. Features vapor recovery compatibility, durability, and ergonomic design for operator comfort." },
  { id: 11, slug: "fuel-delivery-hose", name: "Fuel Delivery Hose", category: "Nozzles & Hoses", brand: "OPW", description: "High-quality fuel delivery hoses designed for retail dispensing. Resistant to fuel, abrasion, and weather conditions." },
  { id: 12, slug: "ac-dc-mini-diesel-pump", name: "AC/DC Mini Diesel Transfer Pump", category: "Pumps & Dispensers", brand: "Other", description: "The electric diesel fuel transfer pump uses a copper motor, high efficiency and energy saving, stable and reliable, good electrical conductivity, strong stability and corrosion resistance, and can provide powerful power. The impeller is made of alloy steel, durable, not easy to deform, plum-shaped design, not easy to get stuck." },
  { id: 13, slug: "blackmer-pump", name: "Blackmer Pump", category: "Pumps & Dispensers", brand: "Other", description: "Heavy-duty positive displacement pump for bulk fuel transfer. Known for self-priming capability and handling of viscous fuels." },
  { id: 14, slug: "calibration-cans", name: "Calibration Cans", category: "Spares & Accessories", brand: "Other", description: "Precision calibration vessels for fuel dispenser accuracy testing. UNBS-approved and essential for regulatory compliance." },
  { id: 15, slug: "composite-manhole-covers", name: "Composite Manhole Covers", category: "Underground Tanks", brand: "Other", description: "Durable composite covers for underground tank access. Lightweight, corrosion-resistant, and designed for heavy vehicle traffic." },
  { id: 16, slug: "doms-pss5000", name: "DOMS PSS5000", category: "Automation Systems", brand: "Other", description: "Advanced point-of-sale system for fuel station automation. Integrates with dispensers, payment systems, and inventory management." },
  { id: 17, slug: "finder-centrifugal-pumps", name: "Finder Centrifugal Pumps", category: "Submersible Pumps", brand: "Other", description: "High-flow centrifugal pumps for fuel transfer applications. Efficient design with minimal maintenance requirements." },
  { id: 18, slug: "galvanized-piping-fittings", name: "Galvanized Piping & Fittings", category: "Piping & Fittings", brand: "Other", description: "Corrosion-resistant piping solutions for fuel systems. Available in various sizes with complete fitting accessories." },
  { id: 19, slug: "hose-quick-coupling", name: "Hose Quick Coupling", category: "Nozzles & Hoses", brand: "OPW", description: "Quick-connect couplings for fast, secure hose connections. Designed for repeated use with leak-free performance." },
  { id: 20, slug: "loading-arms", name: "Loading Arms", category: "Spares & Accessories", brand: "Other", description: "Articulated loading arms for safe and efficient fuel transfer. Features counterbalanced design and swivel joints for ease of operation." },
  { id: 21, slug: "mini-fuel-dispenser-ac-dc", name: "Mini Fuel Dispenser AC/DC", category: "Pumps & Dispensers", brand: "Other", description: "Compact fuel dispenser for small-scale operations. Operates on AC or DC power, perfect for farms, construction sites, and fleet fueling." },
  { id: 22, slug: "ms-series-displacement-meters", name: "MS-Series Displacement Meters", category: "Flow Meters", brand: "Other", description: "Positive displacement meters for high-accuracy fuel measurement. Suitable for custody transfer and inventory control applications." },
  { id: 23, slug: "nozzles", name: "Nozzles", category: "Nozzles & Hoses", brand: "OPW", description: "Range of fuel dispensing nozzles for various applications. From automatic shut-off to manual designs, all built for durability." },
  { id: 24, slug: "pcl-sumo-compressor-air-gauge", name: "PCL-SUMO Compressor & Air Gauge", category: "Spares & Accessories", brand: "Other", description: "Professional tire inflation equipment for fuel stations. Features accurate gauge and durable compressor for high-volume use." },
];

export default function PumpsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when filters change
  const handleFilterChange = (type: "category" | "brand" | "search", value: string | null) => {
    setCurrentPage(1);
    if (type === "category") setSelectedCategory(value);
    if (type === "brand") setSelectedBrand(value);
    if (type === "search") setSearchTerm(value || "");
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/products.jpg"
          alt="Product Catalogue"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Catalogue</h1>
          <nav className="text-white/80 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Catalogue</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <h3 className="font-bold text-[#272A6B] mb-3">Product Search</h3>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3EA6DE] focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-bold text-[#272A6B] mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`text-sm hover:text-[#3EA6DE] ${!selectedCategory ? 'text-[#3EA6DE] font-medium' : 'text-gray-600'}`}
                    >
                      All Categories
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`flex items-center justify-between w-full text-sm hover:text-[#3EA6DE] ${selectedCategory === cat.name ? 'text-[#3EA6DE] font-medium' : 'text-gray-600'}`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-gray-400">({cat.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Contact CTA */}
              <div className="bg-[#272A6B] rounded-xl p-6 text-center">
                <p className="text-white text-sm mb-4">Need help choosing the right equipment?</p>
                <Link href="/contact">
                  <Button size="sm" className="bg-[#3EA6DE] hover:bg-[#3EA6DE]/90 text-white w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#272A6B]">Catalogue</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Showing {filteredProducts.length} products
                  {selectedCategory && ` in ${selectedCategory}`}
                  {selectedBrand && ` by ${selectedBrand}`}
                </p>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-[#3EA6DE] text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-[#3EA6DE] text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === "grid" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" : "space-y-4"}>
              {paginatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/pumps/${product.slug}`}
                  className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#3EA6DE] transition-all group cursor-pointer block ${
                    viewMode === "list" ? "flex items-center gap-4 p-4" : ""
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative bg-gray-100 overflow-hidden ${viewMode === "grid" ? "aspect-square" : "w-24 h-24 flex-shrink-0 rounded-lg"}`}>
                    <Image
                      src="/pumps/pump.jpg"
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className={viewMode === "grid" ? "p-4" : "flex-1"}>
                    <p className="text-xs text-[#3EA6DE] mb-1">{product.brand}</p>
                    <h3 className="font-medium text-[#272A6B] text-sm group-hover:text-[#3EA6DE] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    {viewMode === "list" && (
                      <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                    )}
                  </div>
                  
                  {viewMode === "list" && (
                    <Button size="sm" variant="outline" className="border-[#3EA6DE] text-[#3EA6DE] hover:bg-[#3EA6DE] hover:text-white">
                      View Details
                    </Button>
                  )}
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">No products found matching your criteria.</p>
                <button
                  onClick={() => { setSelectedCategory(null); setSelectedBrand(null); setSearchTerm(""); setCurrentPage(1); }}
                  className="mt-4 text-[#3EA6DE] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                          className={`cursor-pointer min-w-[40px] h-10 flex items-center justify-center font-medium ${
                            currentPage === page 
                              ? "bg-[#3EA6DE] text-white border-[#3EA6DE] hover:bg-[#3EA6DE]/90" 
                              : "text-[#272A6B] border-gray-300 hover:border-[#3EA6DE] hover:text-[#3EA6DE]"
                          }`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
