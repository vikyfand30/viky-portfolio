export const profile = {
  name: "Viky Fandreano",
  role: "Mobile Developer",
  headline: "Flutter-focused mobile developer building smooth, scalable, business-ready apps.",
  email: "vikyfandreano30@gmail.com",
  linkedin: "https://linkedin.com/in/vikyfand",
  social: "@vikyfand",
  phone: "+6281932097214",
  location: "Indonesia",
  years: "7+",
  about:
    "Mobile developer with 7+ years of experience building high-performance mobile apps for iOS and Android. Experienced in Flutter development, product strategy, startup leadership, team management, and transforming ideas into production-ready digital products.",
};

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "12+", label: "Product Projects" },
  { value: "iOS & Android", label: "Platforms" },
  { value: "Flutter", label: "Core Stack" },
];

export const skills = [
  "Flutter",
  "Dart",
  "Android",
  "iOS",
  "Provider State Management",
  "REST API Integration",
  "Firebase",
  "Payment Flow",
  "Deep Linking",
  "Clean Architecture",
  "Next.js",
  "Tailwind CSS",
  "Product Strategy",
  "Team Leadership",
];

export const experiences = [
  { year: "2022 - Now", company: "PrimaKu", role: "Flutter Mobile Developer" },
  { year: "2020 - 2023", company: "Gameplace", role: "Founder • Chief Marketing Officer • Flutter Mobile Developer" },
  { year: "2021 - 2022", company: "Aladin Bank Syariah", role: "Mobile Developer" },
  { year: "2019 - 2021", company: "PT Multi Digital Bisnis", role: "Mobile Developer" },
  { year: "2019", company: "Clapping Ape", role: "Mobile Developer" },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  impact: string;
  role: string;
  stack: string[];
  year?: string;
  featured?: boolean;
  liveUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "primaku",
    name: "PrimaKu",
    category: "Health Tech",
    description:
      "Child development and parenting community app supported by IDAI, helping parents monitor children’s growth and development continuously.",
    impact: "Digital health app for Indonesian parents",
    role: "Flutter Mobile Developer",
    stack: ["Flutter", "Dart", "Provider", "REST API", "Firebase", "Deep Link"],
    year: "2022 - Now",
    featured: true,
    overview:
      "PrimaKu is a mobile health product focused on parenting, child growth monitoring, and child development support. The product requires reliable UX, stable data flow, and clean mobile architecture because users depend on it for recurring health-related activities.",
    challenge:
      "The main challenge is keeping complex parenting and medical-service flows simple for parents while maintaining performance across iOS and Android.",
    solution:
      "Built and improved Flutter features with structured state management, reusable UI components, API integration, payment flows, sharing, bookmarks, and product/service navigation patterns.",
    results: ["Improved mobile feature delivery", "Supported scalable health-tech flows", "Built reusable Flutter UI and provider patterns"],
  },
  {
    slug: "primapro",
    name: "PrimaPro",
    category: "Doctor App",
    description:
      "Application for pediatricians in PrimaKu’s online consultation system, supporting online consultation workflows with PrimaKu users.",
    impact: "Doctor-facing consultation platform",
    role: "Flutter Mobile Developer",
    stack: ["Flutter", "Dart", "API Integration", "Realtime Workflow"],
    overview:
      "PrimaPro is built for pediatricians who handle online consultation flows from PrimaKu users.",
    challenge:
      "Doctor-facing products need fast, clear, and reliable interaction because every delay affects consultation productivity.",
    solution:
      "Implemented mobile screens and consultation-related workflows with a clean, focused interface.",
    results: ["Supported online consultation operations", "Improved doctor-side usability", "Delivered production mobile features"],
  },
  {
    slug: "aladin-bank-syariah",
    name: "Aladin Bank Syariah",
    category: "Digital Banking",
    description:
      "Sharia-compliant digital banking app for managing financial needs through a simple, convenient, and fully digital experience.",
    impact: "Finance and banking mobile experience",
    role: "Mobile Developer",
    stack: ["Mobile App", "Secure Flow", "API Integration", "Banking UX"],
    year: "2021 - 2022",
    featured: true,
    overview:
      "Aladin Bank Syariah is a digital banking product focused on making Islamic banking accessible through a mobile-first experience.",
    challenge:
      "Banking apps demand smooth UX, strong reliability, and clear transaction flows because users expect trust and speed at the same time.",
    solution:
      "Contributed to mobile development implementation for a financial product with attention to user flow, stability, and maintainability.",
    results: ["Delivered banking mobile features", "Worked in high-standard product environment", "Strengthened finance-app development experience"],
  },
  {
    slug: "davirjie-indo-para",
    name: "Davirjie Indo Para Website",
    category: "Corporate Website",
    description:
      "Company profile website for PT. Davirjie Indo Para, showcasing business sectors including trading, contractor, gas & oil, IT services, and more.",
    impact: "Live corporate web presence",
    role: "Web Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "SEO"],
    liveUrl: "https://www.davirjieindopara.com/",
    featured: true,
    overview:
      "A production company-profile website designed to present PT. Davirjie Indo Para professionally with clear business-sector storytelling and responsive layout.",
    challenge:
      "The site needed to communicate many business lines without feeling messy, while keeping the brand credible and easy to explore.",
    solution:
      "Designed and implemented a modern corporate website with structured sections, responsive layout, service cards, visual hierarchy, and deployment-ready architecture.",
    results: ["Live production website", "Improved company digital presence", "Created scalable structure for future content updates"],
  },
  {
    slug: "cooplace",
    name: "cooPlace",
    category: "Marketplace",
    description:
      "Marketplace app empowering MSMEs with retail, food vendor, service provider, and nearby seller discovery features.",
    impact: "MSME marketplace ecosystem",
    role: "Mobile Developer",
    stack: ["Mobile App", "Marketplace", "Location Feature", "Payment"],
    overview:
      "cooPlace is a marketplace platform designed for MSMEs across retail, food, and service categories.",
    challenge:
      "The app had to support multiple seller types and location-aware discovery without making the user journey confusing.",
    solution:
      "Implemented marketplace flows, seller/product discovery, and mobile interfaces with clear navigation.",
    results: ["Supported MSME product discovery", "Built multi-category marketplace flow", "Improved mobile commerce usability"],
  },
  {
    slug: "gameplace",
    name: "Gameplace",
    category: "Gaming Marketplace",
    description:
      "Online marketplace for gamers covering game items, accounts, vouchers, top-ups, data packages, and secure payment methods.",
    impact: "Founder-led gaming commerce product",
    role: "Founder • CMO • Flutter Mobile Developer",
    stack: ["Flutter", "Marketplace", "Payment", "Product Strategy"],
    year: "2020 - 2023",
    featured: true,
    overview:
      "Gameplace is a gamer-focused commerce platform built around digital products, top-ups, vouchers, accounts, and secure transactions.",
    challenge:
      "Gaming commerce needs trust, speed, clear product categorization, and flexible payment methods.",
    solution:
      "Led the product from both business and technical sides: product direction, marketplace flow, mobile implementation, and transaction experience.",
    results: ["Founded and led the product", "Built commerce features for gamers", "Combined product, marketing, and engineering execution"],
  },
  {
    slug: "coop-rasi",
    name: "coopRASI",
    category: "Cooperative Finance",
    description:
      "Mobile app for cooperative members to manage savings, loans, information access, and transactions directly from the app.",
    impact: "Cooperative financial management",
    role: "Mobile Developer",
    stack: ["Mobile App", "Finance Flow", "Member Dashboard", "Transactions"],
    overview:
      "coopRASI helps cooperative members access savings, loans, and transaction-related information from mobile.",
    challenge:
      "Financial information needs to be presented simply while keeping the workflow clear for members.",
    solution:
      "Built member-facing screens and transaction-related flows with practical navigation and readable information hierarchy.",
    results: ["Simplified cooperative member access", "Supported mobile financial workflows", "Improved transaction visibility"],
  },
  {
    slug: "elevenia-mart-pos",
    name: "Elevenia Mart POS",
    category: "POS System",
    description:
      "Feature updates and mockup implementation for improving user experience, existing functionality, and app performance.",
    impact: "Retail POS improvement",
    role: "Mobile Developer",
    stack: ["Android", "POS", "UI Implementation", "Feature Update"],
    overview:
      "Elevenia Mart POS focused on improving retail point-of-sale workflows through feature updates and UI implementation.",
    challenge:
      "The task required translating mockups into functional screens while improving existing app behavior.",
    solution:
      "Implemented UI updates and enhanced functional modules to improve POS usability and performance.",
    results: ["Converted mockups into app features", "Improved POS interaction", "Enhanced existing mobile functionality"],
  },
  {
    slug: "otto-cash",
    name: "Otto Cash",
    category: "Payment App",
    description:
      "Android payment application featuring QR code scanning and balance top-up using SDK-based architecture.",
    impact: "Payment and QR transaction flow",
    role: "Android Developer",
    stack: ["Android", "QR Scanner", "SDK Architecture", "Top Up"],
    overview:
      "Otto Cash is an Android payment application with QR scanning and balance top-up functionality.",
    challenge:
      "Payment products need secure integration and dependable transaction flows.",
    solution:
      "Developed SDK-based payment features to support flexible integration with other systems.",
    results: ["Implemented QR payment flow", "Supported balance top-up", "Built SDK-based integration structure"],
  },
  {
    slug: "sikupu",
    name: "siKUPU",
    category: "Government App",
    description:
      "Android-based application for Lampung government to record and check detail data of underprivileged residents.",
    impact: "Public-sector data collection",
    role: "Android Developer",
    stack: ["Android", "Data Collection", "Government System"],
    overview:
      "siKUPU is a government-focused Android application for recording and checking resident data.",
    challenge:
      "Public-sector apps must prioritize clarity and accuracy because data entry mistakes can affect real administrative outcomes.",
    solution:
      "Built simple data collection and detail-checking interfaces for field or administrative use.",
    results: ["Supported resident data recording", "Built government app workflow", "Improved access to resident details"],
  },
  {
    slug: "coopos",
    name: "cooPOS",
    category: "Retail POS",
    description:
      "Sales application for retail business owners, shops, minimarkets, and food vendors with front-end and back-end systems.",
    impact: "Enterprise-grade POS solution",
    role: "Mobile Developer",
    stack: ["POS", "Retail", "Barcode", "Transaction Flow"],
    overview:
      "cooPOS is a sales application built for retail businesses, minimarkets, and food vendors.",
    challenge:
      "Small and medium businesses need POS tools that are affordable, easy to use, and still professional-grade.",
    solution:
      "Implemented POS workflows with a clean interface for sales, item handling, and business operations.",
    results: ["Supported retail transaction flows", "Built scalable POS concept", "Improved business operation tooling"],
  },
  {
    slug: "cooplace-table",
    name: "cooPlace Table",
    category: "Interactive Dining",
    description:
      "Interactive dining table system for restaurants and food courts with menu browsing, staff interaction, payments, and reports.",
    impact: "Restaurant tech innovation",
    role: "Product & Mobile Developer",
    stack: ["Restaurant Tech", "Interactive UI", "Ordering", "Payment", "Reporting"],
    featured: true,
    overview:
      "cooPlace Table is an interactive dining-table product designed for restaurants and food courts.",
    challenge:
      "Dining technology needs to feel intuitive for customers while giving business owners operational control.",
    solution:
      "Designed product flows for menu browsing, ordering, staff interaction, payment, and companion business management.",
    results: ["Created restaurant-tech innovation", "Connected customer and owner workflows", "Supported productivity and reporting needs"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
