import {
  FeaturedProject,
  FictionalConcept,
  ServiceItem,
  ProcessStage,
  BudgetTier,
  GalleryCategory,
} from "@/types/portfolio";

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "project-1",
    name: "Lannie's Bar-B-Q Spot",
    category: "Restaurant & Online Ordering Platform",
    type: "Client Project",
    description:
      "A warm, high-converting digital platform engineered for an authentic Southern BBQ landmark. Features a mouth-watering visual menu showcase, integrated online food ordering, instant click-to-call functionality, and real-time location and operating hours for local diners.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Online Ordering", "Responsive Design", "Local SEO Schema"],
    features: [
      "Dynamic visual menu showcasing authentic pit-cooked BBQ specialties and family combos",
      "Seamless online takeout ordering integration engineered for fast mobile checkout",
      "One-tap smartphone navigation with instant GPS directions and operating hours",
      "Sub-second page load speeds optimized to capture and convert hungry local traffic",
    ],
    videoSrc: "https://res.cloudinary.com/usntbruj/video/upload/v1792020051/CLIENT_1.mp4",
    videoType: "hosted",
    posterSrc: "/images/restaurant-poster.jpg",
    liveUrl: "", // Available for live link
    githubUrl: "", // Available for repository link
    hostingNote:
      "High-speed video delivery streamed via Cloudinary Global CDN. Optimized for instant buffering and smooth playback across all mobile and desktop devices.",
  },
  {
    id: "project-2",
    name: "Cutting Loose Salon",
    category: "Salon & Online Appointment Booking",
    type: "Client Project",
    description:
      "A modern, welcoming digital flagship for a premier hair and beauty salon in Selma, Alabama. Designed with an elegant visual hierarchy, transparent service & pricing guide, stylist introductions, and 24/7 direct online appointment booking.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Appointment Engine", "Mobile-First UX", "Lucide React"],
    features: [
      "Interactive service directory with transparent category pricing and styling options",
      "Direct 24/7 online appointment booking integration for effortless client scheduling",
      "Editorial styling gallery and welcoming salon atmosphere showcase",
      "Touch-first mobile design ensuring frictionless navigation on all smartphones",
    ],
    videoSrc: "https://res.cloudinary.com/usntbruj/video/upload/v1792019415/salon1.mp4",
    videoType: "hosted",
    posterSrc: "/images/salon-poster.jpg",
    liveUrl: "",
    githubUrl: "",
    hostingNote:
      "High-speed video delivery streamed via Cloudinary Global CDN. Pre-buffered for instant playback without taxing server resources.",
  },
];

export const FICTIONAL_CONCEPTS: FictionalConcept[] = [
  {
    id: "nordic-brew",
    name: "Nordic Brew",
    category: "Restaurant & Hospitality",
    conceptNumber: "01",
    tagline: "Artisanal Coffee & Slow Living in Oslo",
    description:
      "A warm, tactile digital experience for an Oslo specialty coffee bar. Combines morning sunlight photography, artisanal pour-over menus, real-time opening hours, and table reservations.",
    visualIdentity: "Warm cream, coffee brown, natural textures, and editorial typography.",
    palette: [
      { name: "Warm Cream", hex: "#F5F0E8" },
      { name: "Coffee Brown", hex: "#4A3326" },
      { name: "Light Oak", hex: "#D6B896" },
      { name: "Espresso Onyx", hex: "#1C140E" },
    ],
    heroImage: "/images/nordic-brew.jpg",
    features: [
      "Large atmospheric hero photography capturing Scandinavian morning ambiance",
      "Curated coffee & pastry menu preview with origins and flavor notes",
      "Interactive table reservation request and direct location directions",
      "Clean responsive navigation with warm Scandinavian palette",
    ],
    menuItems: [
      { name: "Single Origin Geisha Pour-Over", description: "Jasmine, bergamot, peach sweetness. Hand-poured on V60.", price: "kr 85" },
      { name: "Norrsken Oat Flat White", description: "Double shot espresso with steamed organic oat milk.", price: "kr 62" },
      { name: "Cardamom Bun (Kardemommebolle)", description: "Freshly baked sourdough bun infused with freshly crushed cardamom.", price: "kr 54" },
      { name: "Cold Brew Tonic", description: "24-hour steep Ethiopian cold brew with artisanal tonic and citrus.", price: "kr 68" },
    ],
    hours: [
      "Monday – Friday: 07:30 – 17:00",
      "Saturday: 08:30 – 17:30",
      "Sunday: 09:00 – 16:00",
    ],
    location: "Torggata 18, 0181 Oslo, Norway",
  },
  {
    id: "form-studio",
    name: "Form Studio",
    category: "Fashion & E-Commerce",
    conceptNumber: "02",
    tagline: "Architectural Silhouette & Mindful Wardrobe",
    description:
      "A premium fictional Scandinavian fashion brand website featuring architectural coats, curated seasonal collections, dynamic product filtering, and a functional demo shopping cart.",
    visualIdentity: "Neutral colors, fashion-editorial layouts, refined product photography, and sophisticated typography.",
    palette: [
      { name: "Cashmere Sand", hex: "#DDD6CA" },
      { name: "Raw Ecru", hex: "#EFECE6" },
      { name: "Studio Charcoal", hex: "#191919" },
      { name: "Warm Grey", hex: "#8A8780" },
    ],
    heroImage: "/images/form-studio.jpg",
    features: [
      "Editorial campaign hero banner with architectural tailoring photography",
      "Interactive product collection filtering across Coats, Knitwear, and Objects",
      "Functional interactive demo shopping cart with real-time subtotal calculation",
      "Minimalist responsive product grid with tactile hover interactions",
    ],
    products: [
      { id: "fs-1", name: "Architectural Belted Wool Overcoat", category: "Outerwear", price: 640, tag: "Essential" },
      { id: "fs-2", name: "Ribbed Cashmere Turtleneck in Sand", category: "Knitwear", price: 320, tag: "New Season" },
      { id: "fs-3", name: "Relaxed Pleated Wool Trousers", category: "Tailoring", price: 280, tag: "Collection 04" },
      { id: "fs-4", name: "Hand-Molded Leather Studio Tote", category: "Objects", price: 410, tag: "Handmade" },
    ],
  },
  {
    id: "northline",
    name: "Northline",
    category: "Professional Services",
    conceptNumber: "03",
    tagline: "Sustainable Architecture & Structural Advisory",
    description:
      "A modern fictional advisory website for a Scandinavian architecture and urban design studio. Features structural headlines, service matrices, methodology breakdowns, and consultation CTAs.",
    visualIdentity: "Deep charcoal, warm white, strong typography, and structured layouts.",
    palette: [
      { name: "Deep Charcoal", hex: "#141517" },
      { name: "Oslo Steel", hex: "#4B5663" },
      { name: "Warm White", hex: "#F8F8F5" },
      { name: "Line Silver", hex: "#D6DBDF" },
    ],
    heroImage: "/images/northline.jpg",
    features: [
      "Strong typographical hierarchy with confident architectural layout structure",
      "Comprehensive services overview covering architecture, engineering, and retrofit",
      "Four-stage strategic project process timeline",
      "Clear consultation CTA with direct booking and project inquiry flow",
    ],
    services: [
      { name: "Architectural Masterplanning", description: "Holistic site analysis, volumetric modeling, and sustainable municipal masterplans." },
      { name: "Timber Construction & Structural Engineering", description: "Mass timber design, zero-emission lifecycle calculation, and engineering integrity." },
      { name: "Adaptive Reuse & Modernization", description: "Revitalizing heritage Scandinavian structures for contemporary commercial occupancy." },
      { name: "BREEAM & Environmental Certification", description: "Navigating Nordic climate standards and net-positive energy accreditation." },
    ],
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    label: "Atmospheric & Sensory",
    conceptName: "Nordic Brew & Dining",
    image: "/images/nordic-brew.jpg",
    description:
      "Immersive culinary websites focused on evocative photography, tactile color palettes, live menus, table booking integrations, and effortless mobile accessibility.",
    characteristics: [
      "Warm, sensory editorial photography",
      "Dynamic opening-hours status indicator",
      "Direct reservation and inquiry modals",
      "Effortless touch-friendly mobile menu navigation",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Semantic HTML5", "Time-zone API"],
  },
  {
    id: "fashion",
    name: "Fashion & E-commerce",
    label: "Editorial & Conversion-Focused",
    conceptName: "Form Studio Flagship",
    image: "/images/form-studio.jpg",
    description:
      "Refined fashion storefronts combining runway lookbooks, responsive product grids, instant client-side cart orchestration, and friction-free customer checkout flows.",
    characteristics: [
      "High-fashion typography with generous whitespace",
      "Interactive category filters and instant search",
      "Tactile slide-over demo cart drawer",
      "Preloaded assets preventing layout shift",
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Cart State Store"],
  },
  {
    id: "services",
    name: "Professional Services",
    label: "Authoritative & Trust-Building",
    conceptName: "Northline Architectural Advisory",
    image: "/images/northline.jpg",
    description:
      "Clean, corporate yet character-rich digital homes for consultancies, studios, and B2B firms. Designed to clearly articulate value propositions and convert qualified leads.",
    characteristics: [
      "Rigorous structural grid alignment",
      "Clear service scope matrices",
      "Trust-building process timelines",
      "High-converting inquiry touchpoints",
    ],
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "SEO Schema"],
  },
  {
    id: "lifestyle",
    name: "Lifestyle & Boutique Brands",
    label: "Curated & Tactile",
    conceptName: "Nordic Habit Living",
    image: "/images/form-studio.jpg",
    description:
      "Character-driven digital presences for bespoke craft studios, interior designers, and boutique makers that value authenticity, craft, and understated luxury.",
    characteristics: [
      "Warm ivory backgrounds with deep charcoal text",
      "Artisanal product storytelling modules",
      "Micro-animations on hover and scroll",
      "Minimalist social proof and studio backstory",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "CSS Grid"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    tagline: "Communicate value, establish credibility, and win clients.",
    description:
      "Custom-built websites designed to articulate your company's core strengths, establish immediate market trust, and convert inbound visitors into high-intent business inquiries.",
    highlights: [
      "Custom responsive design tailored to your brand identity",
      "Clear, persuasive content architecture and service positioning",
      "Lightning-fast load times and rock-solid search engine optimization",
      "Easy-to-maintain structure that grows alongside your business",
    ],
  },
  {
    id: "ecommerce-websites",
    number: "02",
    title: "E-Commerce Websites",
    tagline: "Thoughtful product presentation with smooth checkout flows.",
    description:
      "Online stores engineered for discerning brands that value visual elegance as much as conversion. Focuses on frictionless cart experiences, mobile usability, and intuitive product discovery.",
    highlights: [
      "Editorial product showcase grids and high-fidelity zoom views",
      "Tactile slide-out cart and streamlined purchasing steps",
      "Custom inventory, collection filtering, and variant selectors",
      "Safe, standard-compliant integration with Shopify, Stripe, or headless platforms",
    ],
  },
  {
    id: "landing-pages",
    number: "03",
    title: "Landing Pages",
    tagline: "Focused campaigns that drive action without distractions.",
    description:
      "High-impact, single-focus pages created specifically for new product launches, special offers, lead acquisition, or seasonal marketing campaigns.",
    highlights: [
      "Laser-focused visual hierarchy guiding visitors directly to the call-to-action",
      "A/B test ready structure with rapid iteration capability",
      "Zero page bloat for lightning-fast mobile click-through rates",
      "Precise analytics and conversion tracking integration",
    ],
  },
  {
    id: "website-redesign",
    number: "04",
    title: "Website Redesign",
    tagline: "Modernize legacy websites into high-performing assets.",
    description:
      "Transform outdated, sluggish, or cluttered websites into modern, sophisticated digital experiences that reflect the true caliber of your current business.",
    highlights: [
      "Full UX audit identifying user friction and drop-off points",
      "Complete visual elevation to contemporary Scandinavian standards",
      "Modern code rebuild with Next.js, responsive layouts, and accessibility",
      "Seamless URL preservation and SEO migration protection",
    ],
  },
  {
    id: "website-support",
    number: "05",
    title: "Website Support & Maintenance",
    tagline: "Ongoing security, performance enhancements, and content updates.",
    description:
      "Reliable ongoing partnership ensuring your website remains secure, blazing fast, and always up to date as your business evolves.",
    highlights: [
      "Regular dependency, security, and performance audits",
      "Fast turnaround on new content, pages, and seasonal banners",
      "Continuous mobile and cross-browser quality assurance",
      "Direct communication with Noah — no account managers or ticket queues",
    ],
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understanding your business, audience, and goals.",
    description:
      "We begin with a thorough conversation about your company: who your ideal customers are, what sets your offering apart, and what specific outcomes this website must achieve.",
    deliverables: [
      "Project brief & objective alignment",
      "Audience persona & user journey review",
      "Competitor and aesthetic landscape analysis",
      "Core feature specification",
    ],
  },
  {
    number: "02",
    title: "PLAN",
    subtitle: "Structuring content, visual direction, and architecture.",
    description:
      "Before writing code, we map out the complete structure: page layouts, content hierarchy, typography, and visual language, ensuring every element serves a defined purpose.",
    deliverables: [
      "Information architecture & site map",
      "Editorial wireframe compositions",
      "Scandinavian typography & color palette selection",
      "Project milestone schedule",
    ],
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Developing clean, responsive, and high-performance code.",
    description:
      "I turn designs into production code using modern technologies like Next.js, TypeScript, and Tailwind CSS. Every component is built for speed, responsiveness, and accessibility.",
    deliverables: [
      "Custom responsive component development",
      "Accessible keyboard navigation and focus states",
      "High-speed image optimization and lazy video embeds",
      "Private interactive staging preview for your review",
    ],
  },
  {
    number: "04",
    title: "LAUNCH",
    subtitle: "Rigorous testing, fine-tuning, and deployment.",
    description:
      "We thoroughly test the website across devices, browsers, and screen sizes, verify forms, optimize SEO metadata, and deploy your site to reliable cloud hosting.",
    deliverables: [
      "Cross-browser and mobile device verification",
      "Search engine optimization (SEO) & Open Graph setup",
      "Domain connection & SSL configuration",
      "Handover guide and direct support",
    ],
  },
];

export const BUDGET_TIERS: BudgetTier[] = [
  {
    id: "starter",
    name: "Starter Website",
    target: "For emerging businesses seeking a refined, credible online presence.",
    description:
      "A focused, high-impact website designed to clearly articulate what your business does and make it effortless for prospective clients to get in touch.",
    scope: [
      "1 to 3 custom-designed responsive pages (e.g., Home, About, Contact)",
      "Clean Scandinavian typography and color system",
      "High-converting contact form with field validation",
      "Full mobile optimization and fast load times",
      "Foundational SEO configuration and domain connection",
    ],
    timeline: "Typically 1–2 weeks",
    ctaText: "Inquire About Starter",
  },
  {
    id: "business",
    name: "Business Website",
    target: "For growing companies requiring comprehensive pages and service details.",
    description:
      "A complete multi-page digital platform that showcases your services in depth, answers common client questions, and drives qualified inbound leads.",
    scope: [
      "Up to 5–8 tailored responsive pages (Services, Case Studies, Team, FAQ)",
      "Interactive components (filters, FAQ toggles, embedded project media)",
      "Dedicated case study and project showcase layouts",
      "Advanced on-page SEO schema and performance optimization",
      "In-depth consultation and revisions before launch",
    ],
    timeline: "Typically 3–4 weeks",
    ctaText: "Inquire About Business",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    target: "For brands requiring thoughtful product presentation and online purchasing.",
    description:
      "A bespoke digital storefront built around your brand identity. Combines high-end editorial product presentation with an intuitive shopping experience.",
    scope: [
      "Custom online store architecture (Shopify, Stripe, or Headless)",
      "Curated product catalog, collection filtering, and variant management",
      "Tactile slide-out shopping cart and frictionless checkout",
      "Customer transactional emails and order confirmation flow",
      "Training on managing products, inventory, and orders",
    ],
    timeline: "Typically 4–6 weeks",
    ctaText: "Inquire About E-Commerce",
  },
];
