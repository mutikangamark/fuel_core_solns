# Fuel Core Solutions

> **99.9% uptime guaranteed, or we work for free.**

A modern, high-performance B2B website for Fuel Core Uganda Ltd., the leading fuel station solutions provider in East Africa. Built with Next.js 16, TypeScript, and Tailwind CSS.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-19.2.3-61dafb)

## 🚀 Features

### **Business Features**
- **Performance-Based Guarantee**: 99.9% uptime guarantee with money-back commitment
- **Rapid Response System™**: 1.5-hour response time vs industry standard 1-3 days
- **60+ Successful Installations**: Proven track record across Uganda
- **UNBS Licensed & Certified**: Fully compliant with national standards
- **Real Results**: Over UGX 2 billion in prevented revenue losses

### **Technical Features**
- ⚡ **Next.js 16 App Router**: Server-side rendering and optimal performance
- 🎨 **Modern UI/UX**: Tailwind CSS 4 with custom brand styling
- ✨ **Smooth Animations**: Framer Motion for engaging user experience
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎯 **B2B Optimized**: Single unified contact flow for lead generation
- 🔔 **Toast Notifications**: Sonner for elegant user feedback
- ✅ **Form Validation**: Zod schema validation with user-friendly error messages
- 🎭 **Custom Components**: Bento Grid, animated sections, and reusable UI components

## 🛠️ Tech Stack

### **Core**
- **Framework**: [Next.js 16.1.4](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/)
- **UI Library**: [React 19.2.3](https://react.dev/)

### **Styling & UI**
- **CSS Framework**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Tabler Icons React](https://tabler.io/icons)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Class Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

### **Form & Validation**
- **Schema Validation**: [Zod 4.3.6](https://zod.dev/)
- **Form Handling**: Custom React forms with server-side validation

### **Effects & Visuals**
- **Noise Generation**: [Simplex Noise](https://github.com/jwagner/simplex-noise.js)
- **Custom Animations**: Motion components with stagger effects

## 📦 Installation

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Clone the Repository
```bash
git clone https://github.com/mutikangamark/fuel_core_solns.git
cd fuel_core_solns
```

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Environment Setup
Create a `.env.local` file in the root directory (if needed for API integrations):
```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
```

## 🚀 Getting Started

### Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
fuel-core-solns/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (main)/                   # Main site pages
│   │   │   ├── about/
│   │   │   ├── case-studies/
│   │   │   ├── contact/
│   │   │   └── services/
│   │   ├── (landing-pages)/          # Landing pages
│   │   │   ├── assessment/
│   │   │   ├── emergency/
│   │   │   └── maintenance/
│   │   ├── api/                      # API routes
│   │   │   └── contact/
│   │   ├── layout.tsx                # Root layout with Sonner
│   │   ├── page.tsx                  # Homepage
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   ├── forms/                    # Form components
│   │   │   └── ContactForm.tsx
│   │   ├── sections/                 # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProcessBentoGrid.tsx
│   │   │   ├── ResultsMetricsSection.tsx
│   │   │   └── ...
│   │   ├── shared/                   # Shared components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                       # Reusable UI components
│   │       ├── button.tsx
│   │       ├── bento-grid.tsx
│   │       ├── card.tsx
│   │       └── ...
│   └── lib/
│       ├── content.ts                # Content configuration
│       ├── validations.ts            # Zod schemas
│       └── utils.ts                  # Utility functions
├── public/                           # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Brand Colors

```css
--color-dark-blue: #272A6B    /* Primary brand color */
--color-cyan: #3EA6DE          /* Accent/highlight color */
--color-white: #FEFFFD         /* Background color */
```

## 🔧 Key Components

### **Bento Grid**
Modern card-based layout showcasing key features:
- Dedicated 24/7 Team
- 1.5hr Response Time
- 99.9% Uptime Guarantee
- UNBS Compliance
- Proactive Maintenance

### **Contact Form**
Unified B2B contact flow with:
- Client-side and server-side validation
- Sonner toast notifications
- Auto-clear on success
- User-friendly error messages

### **CTA Strategy**
All call-to-action buttons lead to the contact form with consistent "Get In Touch" messaging for optimal lead generation.

## 🚢 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mutikangamark/fuel_core_solns)

### Manual Deployment
```bash
npm run build
# Deploy the .next folder to your hosting provider
```

## 📝 Content Management

All website content is centralized in `src/lib/content.ts` for easy updates:
- Site configuration
- Contact information
- Section headlines and copy
- Testimonials
- Service descriptions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Fuel Core Uganda Ltd.**
- Website: [fuelcore.co.ug](https://fuelcore.co.ug)
- Email: info@fuelcore.co.ug
- Emergency Hotline: +256 700 000 000
- Sales: +256 700 000 001

**Developer**
- GitHub: [@mutikangamark](https://github.com/mutikangamark)

---

**Built with ❤️ for the fuel station industry in Uganda**

*Eliminating downtime, maximizing uptime, delivering results.*
