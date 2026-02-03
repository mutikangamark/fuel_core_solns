"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { href: "/services/maintenance", label: "Maintenance Services", description: "Preventive & emergency maintenance" },
  { href: "/services/setup", label: "Station Setup", description: "Complete new station installations" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products/pumps", label: "Products" },
  { href: "/services", label: "Services", hasDropdown: "services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDropdownLinks = (type: string) => {
    return serviceLinks;
  };

  const isDropdownOpen = (type: string) => {
    return type === "products" ? productsOpen : servicesOpen;
  };

  const toggleDropdown = (type: string) => {
    if (type === "products") {
      setProductsOpen(!productsOpen);
      setServicesOpen(false);
    } else {
      setServicesOpen(!servicesOpen);
      setProductsOpen(false);
    }
  };

  const closeDropdown = (type: string) => {
    if (type === "products") {
      setProductsOpen(false);
    } else {
      setServicesOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#272A6B]/10 bg-white">
      <div className="container mx-auto flex h-18 sm:h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Fuel Core Solutions" 
            width={200} 
            height={50}
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div 
                key={link.href} 
                className="relative" 
                ref={link.hasDropdown === "products" ? productsRef : servicesRef}
              >
                <button
                  onClick={() => toggleDropdown(link.hasDropdown)}
                  className="flex items-center gap-1 text-sm font-medium text-[#272A6B] transition-colors hover:text-[#3EA6DE]"
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen(link.hasDropdown) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen(link.hasDropdown) && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    {getDropdownLinks(link.hasDropdown).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => closeDropdown(link.hasDropdown)}
                      >
                        <div className="text-sm font-medium text-[#272A6B]">{item.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#272A6B] transition-colors hover:text-[#3EA6DE]"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center">
          <Link href="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#272A6B]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#272A6B]/10 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => {
                      if (link.hasDropdown === "products") {
                        setMobileProductsOpen(!mobileProductsOpen);
                        setMobileServicesOpen(false);
                      } else {
                        setMobileServicesOpen(!mobileServicesOpen);
                        setMobileProductsOpen(false);
                      }
                    }}
                    className="flex items-center justify-between w-full text-base font-medium text-[#272A6B] py-2 hover:text-[#3EA6DE]"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${
                      link.hasDropdown === "products" ? (mobileProductsOpen ? 'rotate-180' : '') : (mobileServicesOpen ? 'rotate-180' : '')
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {((link.hasDropdown === "products" && mobileProductsOpen) || (link.hasDropdown === "services" && mobileServicesOpen)) && (
                    <div className="pl-4 space-y-2 mt-2 border-l-2 border-[#3EA6DE]/30">
                      {getDropdownLinks(link.hasDropdown).map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2"
                          onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); setMobileServicesOpen(false); }}
                        >
                          <div className="text-sm font-medium text-[#272A6B]">{item.label}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-[#272A6B] py-2 hover:text-[#3EA6DE]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link href="/contact" className="w-full">
              <Button className="w-full mt-4">Get In Touch</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}