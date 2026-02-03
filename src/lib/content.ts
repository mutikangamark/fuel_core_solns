// Fuel Core Website Content Configuration
// Single source of truth for all website copy

export const siteConfig = {
  name: "Fuel Core",
  company: "Fuel Core Uganda Ltd.",
  tagline: "Uganda's Premier Fuel Pump & Equipment Supplier",
  copyright: "©2026 All Rights Reserved | Fuel Core Uganda",
};

export const contact = {
  emergencyHotline: "+256 700 000 000",
  salesPhone: "+256 700 000 001",
  email: "info@fuelcore.co.ug",
  supportEmail: "support@fuelcore.co.ug",
  address: {
    line1: "Fuel Core Uganda Ltd.",
    line2: "Kampala, Uganda",
  },
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Emergency Service Only",
  },
};

export const hero = {
  preHeadline: "UNBS Licensed | 24+ Products | Full Support",
  headline: "Premium Fuel Station Equipment & Services",
  subHeadline: "Our premium equipment with professional installation, full warranty, and after-sales support across Uganda.",
  cta: {
    primary: "Browse Our Catalog",
    secondary: "Request a Quote",
  },
};

export const trustBadges = [
  { label: "Quality Equipment", checked: true },
  { label: "UNBS Certified", checked: true },
  { label: "Full Warranty", checked: true },
  { label: "Professional Installation", checked: true },
];

export const trustBar = [
  "UNBS Licensed Dealer",
  "24+ Premium Products",
  "Nationwide Delivery",
  "Full Warranty Coverage",
];

export const videoSection = {
  headline: "Learn how we've eliminated over UGX 2 billion in lost revenue for Uganda fuel stations with our proprietary Rapid Response System™.",
  videoTitle: "Watch to learn more about the fastest-growing fuel station solutions provider in East Africa.",
  bulletPoints: [
    { text: "The fastest way to eliminate station downtime", highlight: "fastest" },
    { text: "How we respond in 1.5 hours vs industry standard 1-3 days", highlight: "1.5 hours" },
    { text: "How to get UNBS compliance guaranteed", highlight: "guaranteed" },
    { text: "How we ensure top-quality across all installations", highlight: "top-quality" },
    { text: "How we manage 60+ stations simultaneously with zero downtime", highlight: "60+ stations" },
  ],
  cta: {
    primary: "Book Now To See If You Qualify",
    secondary: "Custom Guarantees Given Per Station",
  },
};

export const clientLogos = {
  headline: "(Just some) stations we've served.",
  logos: ["Stabex", "Texco", "Rubies", "Oryx", "Total", "Shell"],
};

export const problem = {
  headline: "Why Choose Us",
  subtext: "Products • Maintenance • Setup",
  description: "World-class equipment at competitive prices with professional support.",
  callout: "Your station deserves the best equipment.",
  cta: {
    primary: "Browse Our Catalog",
    secondary: "Request a Quote",
  },
};

export const testimonials = [
  {
    quote: "The equipment we purchased from Fuel Core has been running flawlessly for 18 months. The installation was professional, and their after-sales support is exceptional. Best investment we've made.",
    name: "Patrick Okello",
    title: "Operations Manager, Stabex International",
    rating: 5,
    featured: true,
    company: "Stabex",
  },
  {
    quote: "We upgraded all 5 of our stations with pumps from Fuel Core. The quality difference compared to our old equipment is remarkable, and the 2-year warranty gives us complete peace of mind.",
    name: "James Musoke",
    title: "Station Owner, 5 Locations",
    rating: 5,
    featured: false,
    company: null,
  },
  {
    quote: "Best equipment supplier in Uganda. They helped us select the right equipment for our high-volume stations. The consultation was invaluable - they really understand fuel operations.",
    name: "Sarah Nakato",
    title: "Regional Manager, 12 Stations",
    rating: 5,
    featured: false,
    company: null,
  },
  {
    quote: "From consultation to delivery, Fuel Core made purchasing our equipment seamless. The UNBS certification was handled professionally, and the quality is outstanding. Highly recommend.",
    name: "David Kamau",
    title: "CEO, Premium Fuel Network",
    rating: 5,
    featured: false,
    company: null,
  },
  {
    quote: "The pumps we bought are incredibly reliable. Fuel Core's team guided us through the entire selection process and their competitive pricing made the decision easy. Outstanding service.",
    name: "Grace Nalwanga",
    title: "Operations Director",
    rating: 5,
    featured: false,
    company: null,
  },
  {
    quote: "We needed to replace aging equipment across 3 locations. Fuel Core delivered quality products on time, handled all installations, and the after-sales support has been excellent.",
    name: "Michael Ochieng",
    title: "Multi-Station Owner",
    rating: 5,
    featured: false,
    company: null,
  },
  {
    quote: "I've purchased equipment from several suppliers over my career, and Fuel Core stands out. The product quality is top-tier, pricing is competitive, and they actually deliver on their promises. Don't think. Just buy from them.",
    name: "Robert Ssemakula",
    title: "Fleet Operations Manager",
    rating: 5,
    featured: false,
    company: null,
  },
  {
    quote: "Fuel Core equipped our entire new station with pumps, tanks, and automation systems. The complete package approach saved us time and money. Professional team, quality products, and ongoing support. Couldn't recommend them more.",
    name: "Agnes Wanjiru",
    title: "Station Network Owner",
    rating: 5,
    featured: false,
    company: null,
  },
];

// Placeholder testimonials to be updated with real content
// TODO: Request testimonial from Stabex Engineering Department contact
// TODO: Request Chairman testimonial
export const pendingTestimonials = [
  {
    placeholder: true,
    name: "Stabex Engineering Contact",
    title: "Engineering Department, Stabex International",
    status: "Testimonial requested - pending",
  },
  {
    placeholder: true,
    name: "Chairman",
    title: "Chairman, Fuel Core Solutions",
    status: "Testimonial requested - pending",
  },
];

export const testimonialsSection = {
  preHeadline: "Trusted by station owners across Uganda",
  headline: "What our customers say about our equipment.",
  subHeadline: "Quality products backed by exceptional service",
};

export const howItWorks = {
  headline: "How to Order Your Equipment",
  steps: [
    {
      number: 1,
      title: "BROWSE",
      icon: "clipboard",
      description: "Explore our catalog of 24+ premium fuel station products and accessories.",
    },
    {
      number: 2,
      title: "CONSULT",
      icon: "wrench",
      description: "Our equipment specialists help you select the right products for your station size, fuel types, and budget. Get expert recommendations tailored to your needs.",
    },
    {
      number: 3,
      title: "QUOTE",
      icon: "lightning",
      description: "Receive a detailed quotation with competitive pricing, delivery timelines, and flexible payment options including installment plans for qualifying businesses.",
    },
    {
      number: 4,
      title: "DELIVER",
      icon: "chart",
      description: "We handle delivery, professional installation, UNBS certification, and provide comprehensive training plus ongoing after-sales support.",
    },
  ],
  footnote: "All equipment comes with manufacturer warranty and full UNBS compliance certification.",
  cta: {
    primary: "Browse Our Catalog",
    secondary: "Request a Quote",
  },
};

export const resultsMetrics = {
  headline: "Why Station Owners Choose Us",
  metrics: [
    {
      value: "24+",
      description: "Premium products ",
    },

    {
      value: "60+",
      description: "Stations equipped with our products across Uganda",
    },
    {
      value: "100%",
      description: "UNBS-certified equipment with full compliance guarantee",
    },
    {
      value: "2 Years",
      description: "Standard warranty coverage on all major equipment",
    },
  ],
  callout: "Ready to upgrade your station with premium equipment?",
  cta: {
    primary: "View Our Catalog",
    secondary: "Request a Quote",
  },
};

export const awards = {
  headline: "Trusted by fuel stations across Uganda.",
  items: [
    "60+ Fuel Stations Equipped",
    "Complete Maintenance Services",
    "Professional Station Setup",
    "UNBS Licensed Equipment Provider",
    "2-Year Warranty Coverage",
    "Nationwide Delivery Network",
  ],
  cta: {
    primary: "Browse Our Catalog",
    secondary: "Request a Quote",
  },
};

export const caseStudies = {
  headline: "Real Stations. Real Results. Real Impact.",
  filterTabs: [
    "All Case Studies",
    "Single Station Owners",
    "Multi-Location Operators",
    "New Station Builds",
    "Rural Stations",
    "Urban Networks",
  ],
  featured: [
    {
      client: "James Mukasa",
      title: "Station Owner, Kampala",
      before: "1 station with chronic downtime",
      after: "99.5% uptime and saved UGX 42M in the first 6 months",
    },
    {
      client: "Dr. Peter Nsubuga",
      title: "Medical Professional & Station Owner",
      before: "176K monthly revenue with frequent equipment failures",
      after: "4.7M monthly revenue with 99.9% uptime in the second month",
    },
    {
      client: "Samuel Odongo",
      title: "New Station Entrepreneur",
      before: "0 stations",
      after: "3 locations with Fuel Core's complete setup in 90 days, generating 15.4M monthly revenue with zero major downtime",
    },
    {
      client: "Rose Akinyi",
      title: "Rural Station Operator",
      before: "75% uptime",
      after: "99% uptime in 3 months, with 11M UGX in prevented losses",
    },
  ],
};

export const whoWeWorkWith = {
  headline: "Who we work with.",
  services: [
    {
      title: "Done-For-You Service",
      description: "Fuel stations & operators who meet the following criteria:",
      criteria: [
        "More than 2 operational pumps",
        "Committed to maintaining equipment properly",
      ],
    },
    {
      title: "Consulting Service",
      description: "Fuel stations & new entrepreneurs who meet the following criteria:",
      criteria: [
        "Actively operating or planning to build a station",
        "Minimum UGX 50M in projected annual revenue",
      ],
    },
  ],
  callout: "Are you a good fit?",
  cta: {
    primary: "Apply To See If You Qualify",
    secondary: "Get A Custom Guarantee",
  },
};

export const equipment = {
  headline: "Become the most reliable station in your region.",
  brands: [
    "Custom Fuel Core Solutions",
  ],
};

export const newsletter = {
  headline: "Stay Ahead of Fuel Industry Trends in Just 5 Minutes a Week",
  subHeadline: "Be the smartest station operator in the room.",
  description: "Get the latest news and trends that shape Uganda's fuel industry delivered to your inbox every week in 5-minutes or less.",
  bonusText: "By adding your phone, we will text you our exclusive training guide: '3 Steps To Achieve 99.9% Station Uptime'.",
  cta: "Subscribe For Free",
  socialProof: "Join one of the fastest growing fuel industry newsletters with 2,000+ station operators, owners, and petroleum professionals.",
};

export const faq = {
  headline: "FAQ",
  subHeadline: "Your questions, answered.",
  items: [
    {
      question: "How do I know if my station is a good fit?",
      answer: "For our done-for-you service, we work with fuel stations operating minimum 2 pumps with commitment to proper maintenance. For our consulting services, we work with station operators (or those planning to build) with minimum UGX 50M in projected annual revenue.",
    },
    {
      question: "How is the cost less than in-house maintenance?",
      answer: "In-house maintenance typically costs UGX 5-10M per month per station when you factor in salaries, procurement delays, spare parts inventory, and downtime costs. We operate with guaranteed performance rates between UGX 500K-2M per month depending on the station size and equipment. This typically results in 20-30% cost savings while achieving superior uptime.",
    },
    {
      question: "Is this strategy compliant with UNBS regulations?",
      answer: "Yes, all our services are fully UNBS-compliant. We are licensed by UNBS, and all our technicians are certified. We handle all 6-month verifications, 3-month surveillance checks, and maintain complete compliance documentation for every station we serve.",
    },
    {
      question: "How do you ensure top quality?",
      answer: "We have developed world-class recruitment and training systems to only work with UNBS-licensed technicians, followed by our proprietary quality control process that includes pre-stocked genuine parts, standardized installation procedures, and post-installation verification.",
    },
    {
      question: "What types of equipment does this work with?",
      answer: "Our technicians are trained on all equipment types and maintain relationships with all major suppliers.",
    },
    {
      question: "How does this work with multiple station locations?",
      answer: "For best results across multiple stations, we assign a dedicated account manager who coordinates all maintenance, emergency responses, and UNBS compliance across your entire network. We manage stations in Kampala, Entebbe, Jinja, Mbarara, Gulu, and throughout Uganda.",
    },
    {
      question: "Are the response times really guaranteed?",
      answer: "Yes. We guarantee 1.5-hour emergency response times in urban areas (Kampala, Entebbe) and 4-hour response times in regional areas. We have technicians strategically positioned and parts pre-stocked to meet these guarantees. If we fail to meet response times, that service call is free.",
    },
  ],
};

export const finalCta = {
  headline: "Scale at less than 1/3rd the cost of in-house maintenance.",
  points: [
    "We give guaranteed performance at typically less than 1/3rd the cost of in-house teams.",
    "Implementing this now will give you first-mover advantage over competition.",
    "This is the biggest fuel station opportunity in East Africa.",
    "When done correctly, the results are exponential.",
  ],
  callout: "Are you going to miss out?",
  cta: {
    primary: "Become Your Region's Leading Station",
    secondary: "Get A Custom Guarantee",
  },
};

export const footer = {
  mission: "Fuel Core is Uganda's leading supplier of premium fuel station equipment. We deliver reliable, UNBS-certified products with professional installation, comprehensive warranties, and exceptional after-sales support.",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/assessment", label: "Book Assessment" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export const about = {
  headline: "Our mission is to work with East Africa's fuel station operators, keeping their equipment running at peak performance with the core belief this is one of the most effective ways to create lasting economic impact for generations to come.",
  body: [
    "Founded in 2023, Fuel Core has rapidly become Uganda's most trusted fuel station solutions provider. What started as a response to widespread equipment failures and compliance issues has grown into a comprehensive system serving 60+ stations across Uganda.",
    "Our founders brings over a decade of petroleum engineering experience and has personally overseen over 500 equipment installations and repairs. Frustrated by the industry's acceptance of downtime and compliance issues as \"normal,\" he built Fuel Core to prove that 99.9% uptime is not just possible—it's achievable for every station.",
    "Today, we're eliminating over UGX 2 billion annually in preventable downtime losses across our client network. But more importantly, we're helping station owners sleep better at night knowing their operations are in expert hands.",
  ],
};

export const contactPage = {
  headline: "Let's Eliminate Your Downtime",
  subHeadline: "Book your free 5-minute assessment call or reach out directly. We typically respond within 1 hour during business hours.",
  challenges: [
    "Frequent Equipment Failures",
    "UNBS Compliance Issues",
    "High Maintenance Costs",
    "Long Response Times",
    "Looking for Complete Setup",
    "Other",
  ],
  cta: "Book Free Assessment",
};

export const serviceAreas = {
  primary: {
    title: "Primary Coverage (1.5hr Response)",
    areas: ["Kampala", "Entebbe", "Wakiso", "Mukono"],
  },
  secondary: {
    title: "Secondary Coverage (4hr Response)",
    areas: ["Jinja", "Mbarara", "Gulu", "Fort Portal", "Masaka", "Mbale"],
  },
  expanding: "We're expanding throughout Uganda and into Kenya, Tanzania, Rwanda, and DRC. Contact us about service in your area.",
};
