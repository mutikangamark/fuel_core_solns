import Link from "next/link";
import Image from "next/image";
import { footer, contact, siteConfig, trustBar } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[#272A6B]/10 bg-[#272A6B]">
      {/* Trust Bar */}
      <div className="border-b border-[#FEFFFD]/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#FEFFFD]">
            {trustBar.map((item, index) => (
              <span key={index} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#3EA6DE]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Fuel Core Solutions" 
                width={180} 
                height={45}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-[#3EA6DE]/80 max-w-md text-sm leading-relaxed mb-4">
              {footer.mission}
            </p>
            <div className="text-[#FEFFFD] text-sm space-y-1">
              <p>Emergency: {contact.emergencyHotline}</p>
              <p>Email: {contact.email}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#FEFFFD]">Navigation</h4>
            <ul className="space-y-2">
              {footer.navigation.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#3EA6DE] hover:text-[#FEFFFD] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#FEFFFD]">Company</h4>
            <ul className="space-y-2">
              {footer.navigation.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#3EA6DE] hover:text-[#FEFFFD] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#FEFFFD]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#3EA6DE]">
          <p>{siteConfig.copyright}</p>
          <div className="flex gap-4">
            {footer.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#FEFFFD] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
