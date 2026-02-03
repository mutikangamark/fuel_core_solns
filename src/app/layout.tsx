import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
<<<<<<< /Users/markryanmutikanga/Documents/fuel-core/fuel_core_solns-main/src/app/layout.tsx
import CookieConsent from "@/components/shared/CookieConsent";
=======
import CookieConsent from "@/components/ui/cookie-consent";
>>>>>>> /Users/markryanmutikanga/.windsurf/worktrees/fuel_core_solns-main/fuel_core_solns-main-bf02fefa/src/app/layout.tsx
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuel Core Solutions | 99.9% Uptime Guaranteed",
  description: "Leading fuel station solutions provider in Uganda. 99.9% uptime guarantee, 1.5hr response time, UNBS certified. 60+ successful installations across East Africa.",
  keywords: ["fuel station solutions", "Uganda", "UNBS certified", "fuel maintenance", "uptime guarantee", "Kampala"],
  authors: [{ name: "Fuel Core Uganda Ltd." }],
  openGraph: {
    title: "Fuel Core Solutions | 99.9% Uptime Guaranteed",
    description: "Leading fuel station solutions provider in Uganda with 60+ successful installations.",
    type: "website",
    locale: "en_UG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
        <Toaster position="top-center" richColors />
        <CookieConsent />
      </body>
    </html>
  );
}
