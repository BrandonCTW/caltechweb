import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Globe,
  Star,
  TrendingUp,
  Check,
  Quote,
  Building2,
  Heart,
  Briefcase,
  Scissors,
  Stethoscope,
  Clock,
  Zap,
  Shield,
  RefreshCw,
  ChevronRight,
  Gem,
  Flame,
  Wheat,
  Flower2,
  Cable,
} from "lucide-react";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

// ─── Portfolio Data ───────────────────────────────────────────────────────────

type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  gradient: string;
  accentColor: string;
  accentBg: string;
  Icon: typeof Stethoscope;
  initials: string;
  website?: string;
  challenge: string;
  solution: string;
  results: { stat: string; label: string; color: string }[];
  features: string[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  timeToLaunch: string;
  related: string[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "dr-arjun-kanuri",
    name: "Dr. Arjun Kanuri",
    category: "Medical",
    tagline: "Plastic surgery practice site with patient booking",
    gradient: "from-teal-600 to-cyan-500",
    accentColor: "text-teal-700",
    accentBg: "bg-teal-50",
    Icon: Stethoscope,
    initials: "AK",
    website: "drkanuri.com",
    challenge:
      "Dr. Kanuri's plastic and reconstructive surgery practice in the DC/MD/VA area needed a website that reflected his expertise and converted visitors into consultations. His previous site was outdated and wasn't generating the patient inquiries his practice deserved.",
    solution:
      "We built a modern, trust-building practice site that showcases Dr. Kanuri's credentials, procedure offerings, and patient results. The design leads visitors through a clear consultation booking flow, with before/after galleries and detailed procedure pages that establish authority.",
    results: [
      { stat: "+40%", label: "Traffic Increase", color: "text-teal-600" },
      { stat: "2×", label: "Conversions", color: "text-blue-600" },
      { stat: "9 yrs", label: "Client Since", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-green-600" },
    ],
    features: [
      "Procedure pages with detailed descriptions",
      "Before/after patient gallery",
      "Online consultation request form",
      "Doctor credentials and bio page",
      "Mobile-responsive design",
      "Local SEO for DC/MD/VA market",
      "Patient testimonials section",
      "Google Maps integration",
    ],
    testimonial:
      "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
    testimonialAuthor: "Dr. Arjun Kanuri, MD, MBA",
    testimonialRole: "Plastic & Reconstructive Surgery, DC/MD/VA",
    timeToLaunch: "5 days",
    related: ["specialized-plastic-surgery", "calvary-chapel-los-alamitos", "madera-county-farm-bureau"],
  },
  {
    slug: "calvary-chapel-los-alamitos",
    name: "Calvary Chapel Los Alamitos",
    category: "Church",
    tagline: "Church & ministry site with sermon uploads",
    gradient: "from-indigo-600 to-purple-600",
    accentColor: "text-indigo-700",
    accentBg: "bg-indigo-50",
    Icon: Heart,
    initials: "CC",
    challenge:
      "Pastor Bryan Newberry was spending at least 3 hours every week managing his church website and personal ministry website. That time was being taken directly from his pastoral duties and sermon preparation.",
    solution:
      "We took over complete management of both the church website and Pastor Newberry's personal ministry site. CalTech Web handles all updates, sermon uploads, and content changes so the pastor can focus entirely on ministry. Weekly sermon uploads and event updates are handled quickly and affordably.",
    results: [
      { stat: "3+ hrs", label: "Saved Per Week", color: "text-indigo-600" },
      { stat: "Multi-yr", label: "Client Relationship", color: "text-green-600" },
      { stat: "7 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-blue-600" },
    ],
    features: [
      "Weekly sermon uploads (audio/video)",
      "Service times and location info",
      "Online giving integration",
      "Events calendar",
      "Staff & leadership bios",
      "Mobile-first responsive design",
      "Ministry pages and resources",
      "Contact form with directions",
    ],
    testimonial:
      "Managing my church website and personal ministry website was a significant time commitment, taking up at least 3 hours of my week, if not more. However, since I enlisted the help of CalTech Web, they have been maintaining my website for many years now. Their services have been invaluable, saving me precious time that I can now devote to furthering my ministry. The minimal cost of their services is easily justified by the additional hours I can now devote to my ministry each week.",
    testimonialAuthor: "Bryan Newberry",
    testimonialRole: "Pastor, Calvary Chapel Los Alamitos",
    timeToLaunch: "7 days",
    related: ["kingdom-international", "central-baptist-church", "madera-county-farm-bureau"],
  },
  {
    slug: "fuentes-concrete",
    name: "Fuentes Concrete, Inc.",
    category: "Contractor",
    tagline: "Lead-generating contractor site with project gallery",
    gradient: "from-orange-500 to-red-500",
    accentColor: "text-orange-700",
    accentBg: "bg-orange-50",
    Icon: Building2,
    initials: "FC",
    challenge:
      "Fuentes Concrete needed a professional web presence to match the quality of their concrete work. Without a website, they were relying solely on word-of-mouth and missing out on customers searching online for concrete contractors in their area.",
    solution:
      "We built a clean, professional contractor site with a project gallery showcasing their concrete work, a prominent quote request form, and service area information. The site was optimized for local search so customers searching for concrete services can find them easily.",
    results: [
      { stat: "Steady", label: "New Lead Flow", color: "text-orange-600" },
      { stat: "Local", label: "SEO Rankings", color: "text-blue-600" },
      { stat: "6 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-green-600" },
    ],
    features: [
      "Project photo gallery",
      "Free estimate request form",
      "Service area information",
      "Services breakdown page",
      "Local SEO optimization",
      "Google Reviews integration",
      "Mobile click-to-call button",
      "About the company page",
    ],
    testimonial:
      "$99/month is reasonable to get rid of a headache for me. Huge THANK YOU to CalTech Web for producing such a great website for us!",
    testimonialAuthor: "Mike Fuentes",
    testimonialRole: "Owner, Fuentes Concrete, Inc.",
    timeToLaunch: "6 days",
    related: ["alv-floors", "longhorn-fire-alarm-design", "dr-arjun-kanuri"],
  },
  {
    slug: "origami-owl-chrissy-weems",
    name: "Origami Owl / Chrissy Weems",
    category: "Small Business",
    tagline: "E-commerce jewelry site with product catalog",
    gradient: "from-pink-500 to-fuchsia-500",
    accentColor: "text-pink-700",
    accentBg: "bg-pink-50",
    Icon: Gem,
    initials: "OO",
    challenge:
      "Chrissy Weems needed a professional, brand-aligned website for her Origami Owl jewelry business. She wanted a site that showcased the product line beautifully, made it easy for customers to browse and purchase, and reflected the personal touch of her independent business.",
    solution:
      "We designed an elegant e-commerce-ready site with a visual product catalog, easy navigation by jewelry collection, and integrated shopping functionality. The site features high-quality product imagery, a brand story page, and clear calls to action for browsing and purchasing.",
    results: [
      { stat: "Pro", label: "Online Presence", color: "text-pink-600" },
      { stat: "Easy", label: "Product Browsing", color: "text-blue-600" },
      { stat: "5 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-green-600" },
    ],
    features: [
      "Product catalog with categories",
      "Collection browsing pages",
      "High-quality product imagery",
      "Shopping integration",
      "Brand story page",
      "Social media integration",
      "Mobile-optimized design",
      "Contact & ordering info",
    ],
    testimonial:
      "CalTech Web gave my jewelry business a real online home. The site looks beautiful and my customers love being able to browse collections easily. It was exactly what I needed at a price I could afford.",
    testimonialAuthor: "Chrissy Weems",
    testimonialRole: "Origami Owl Independent Designer",
    timeToLaunch: "5 days",
    related: ["turbothao-nails", "fuentes-concrete", "california-women-for-agriculture"],
  },
  {
    slug: "madera-county-farm-bureau",
    name: "Madera County Farm Bureau",
    category: "Non-Profit",
    tagline: "Membership management with scholarship system",
    gradient: "from-green-500 to-emerald-500",
    accentColor: "text-green-700",
    accentBg: "bg-green-50",
    Icon: Wheat,
    initials: "MF",
    challenge:
      "The Madera County Farm Bureau needed a comprehensive website that could handle membership management, a scholarship program, payment processing, raffles, and social media integration. Their previous site couldn't keep up with the organization's growing needs and had issues with image copyright.",
    solution:
      "We built a robust non-profit site with over 1,000 pages covering membership, scholarships, events, and resources. CalTech Web also helped resolve an image copyright situation and integrated payment processing, raffle functionality, and social media feeds throughout the site.",
    results: [
      { stat: "+55%", label: "Traffic Increase", color: "text-green-600" },
      { stat: "1,000+", label: "Pages Built", color: "text-blue-600" },
      { stat: "3 yrs", label: "Client Since", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-green-600" },
    ],
    features: [
      "Scholarship application system",
      "Membership management portal",
      "Payment processing integration",
      "Raffle & fundraising pages",
      "Social media integration",
      "Event calendar and registration",
      "Resource library for members",
      "Mobile-responsive design",
    ],
    testimonial:
      "CalTech Web helped us with our domain, new website, and even solved a situation with image copyright! I highly recommend them for all nonprofit organization websites.",
    testimonialAuthor: "Christina Beckstead",
    testimonialRole: "Executive Director, Madera County Farm Bureau",
    timeToLaunch: "7 days",
    related: ["california-women-for-agriculture", "calvary-chapel-los-alamitos", "central-baptist-church"],
  },
  {
    slug: "alv-floors",
    name: "ALV Floors",
    category: "Contractor",
    tagline: "Local SEO-optimized home services site",
    gradient: "from-blue-600 to-blue-500",
    accentColor: "text-blue-700",
    accentBg: "bg-blue-50",
    Icon: Building2,
    initials: "AF",
    challenge:
      "ALV Floors needed a professional website to showcase their flooring installation and refinishing services. Without an online presence, they were invisible to homeowners searching for flooring contractors in their area.",
    solution:
      "We built a clean, professional home services site with a portfolio of completed flooring projects, service descriptions, and a prominent free estimate request form. The site was optimized for local SEO to help ALV Floors rank when homeowners search for flooring services nearby.",
    results: [
      { stat: "Page 1", label: "Google Rankings", color: "text-blue-600" },
      { stat: "Steady", label: "Lead Generation", color: "text-green-600" },
      { stat: "6 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-blue-600" },
    ],
    features: [
      "Before/after project gallery",
      "Free estimate request form",
      "Service area pages",
      "Service descriptions (install, refinish, repair)",
      "Local SEO optimization",
      "Customer reviews section",
      "Mobile-responsive design",
      "Click-to-call functionality",
    ],
    testimonial:
      "CalTech Web built us a site that actually brings in business. People find us on Google now and the estimate requests come in regularly. For $99 a month it's a no-brainer.",
    testimonialAuthor: "ALV Floors",
    testimonialRole: "Home Services, California",
    timeToLaunch: "6 days",
    related: ["fuentes-concrete", "longhorn-fire-alarm-design", "dr-arjun-kanuri"],
  },
  {
    slug: "kingdom-international",
    name: "Kingdom International",
    category: "Church",
    tagline: "Ministry site with outreach & event calendar",
    gradient: "from-violet-600 to-purple-500",
    accentColor: "text-violet-700",
    accentBg: "bg-violet-50",
    Icon: Heart,
    initials: "KI",
    challenge:
      "Kingdom International needed a website that reflected the scope of their ministry and outreach programs. Their existing site was outdated and didn't effectively communicate their mission or make it easy for visitors to connect.",
    solution:
      "We designed a welcoming ministry site that clearly communicates Kingdom International's mission, outreach programs, and upcoming events. The site makes it easy for visitors to learn about the ministry, find service information, and get connected through contact forms and social media links.",
    results: [
      { stat: "Expanded", label: "Online Reach", color: "text-violet-600" },
      { stat: "Active", label: "Event Calendar", color: "text-blue-600" },
      { stat: "5 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-green-600" },
    ],
    features: [
      "Mission & vision pages",
      "Outreach program descriptions",
      "Events calendar",
      "Sermon & teaching archive",
      "Online giving integration",
      "Ministry team profiles",
      "Contact & connect form",
      "Social media integration",
    ],
    testimonial:
      "CalTech Web helped us get our ministry online in a way that truly represents who we are. The site is professional, welcoming, and easy for our community to navigate.",
    testimonialAuthor: "Kingdom International",
    testimonialRole: "Church / Ministry",
    timeToLaunch: "5 days",
    related: ["calvary-chapel-los-alamitos", "central-baptist-church", "madera-county-farm-bureau"],
  },
  {
    slug: "turbothao-nails",
    name: "TurboThao Nails",
    category: "Small Business",
    tagline: "Beauty salon site with service menu & booking",
    gradient: "from-amber-500 to-yellow-400",
    accentColor: "text-amber-700",
    accentBg: "bg-amber-50",
    Icon: Scissors,
    initials: "TT",
    challenge:
      "TurboThao Nails needed a modern website to showcase their nail salon services, display their work portfolio, and make it easy for clients to see pricing and book appointments. They were relying on social media alone which limited their reach.",
    solution:
      "We built a visually appealing salon site with a detailed service menu, pricing, a gallery of nail art and designs, and online booking integration. The site is optimized for mobile since most clients browse on their phones, and includes Google Maps for easy directions to the salon.",
    results: [
      { stat: "Growing", label: "New Client Bookings", color: "text-amber-600" },
      { stat: "Pro", label: "Online Presence", color: "text-green-600" },
      { stat: "5 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-blue-600" },
    ],
    features: [
      "Service menu with pricing",
      "Nail art & design gallery",
      "Online appointment booking",
      "Mobile-optimized design",
      "Google Maps integration",
      "Social media feed integration",
      "Client reviews section",
      "Contact info & hours",
    ],
    testimonial:
      "My clients love the new website - they can see all our services, check prices, and book appointments right from their phone. CalTech Web made the whole process painless.",
    testimonialAuthor: "TurboThao Nails",
    testimonialRole: "Beauty / Nail Salon",
    timeToLaunch: "5 days",
    related: ["origami-owl-chrissy-weems", "fuentes-concrete", "alv-floors"],
  },
  {
    slug: "specialized-plastic-surgery",
    name: "Specialized Plastic Surgery",
    category: "Medical",
    tagline: "Procedure showcase with before/after gallery",
    gradient: "from-sky-500 to-blue-500",
    accentColor: "text-sky-700",
    accentBg: "bg-sky-50",
    Icon: Stethoscope,
    initials: "SP",
    challenge:
      "Specialized Plastic Surgery needed a website that would establish credibility, showcase their range of procedures, and convert visitors into consultation requests. Their existing site wasn't generating the inquiries they expected from their market.",
    solution:
      "We designed a premium-feeling medical practice site with detailed procedure pages, a before/after photo gallery, surgeon credentials, and a streamlined consultation request form. The site builds trust through professional design and clear information architecture.",
    results: [
      { stat: "Consistent", label: "Patient Inquiries", color: "text-sky-600" },
      { stat: "Trust", label: "Building Design", color: "text-green-600" },
      { stat: "6 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-blue-600" },
    ],
    features: [
      "Detailed procedure pages",
      "Before/after photo gallery",
      "Surgeon credentials & bio",
      "Online consultation request form",
      "Patient testimonials",
      "Financing options section",
      "Mobile-responsive design",
      "Local SEO optimization",
    ],
    testimonial:
      "CalTech Web built us a site that looks like we paid thousands for it. The before/after gallery and procedure pages have been great for converting visitors into consultations.",
    testimonialAuthor: "Specialized Plastic Surgery",
    testimonialRole: "Medical Practice",
    timeToLaunch: "6 days",
    related: ["dr-arjun-kanuri", "alv-floors", "calvary-chapel-los-alamitos"],
  },
  {
    slug: "california-women-for-agriculture",
    name: "California Women for Agriculture",
    category: "Non-Profit",
    tagline: "Advocacy site with events, membership & resources",
    gradient: "from-rose-500 to-pink-500",
    accentColor: "text-rose-700",
    accentBg: "bg-rose-50",
    Icon: Flower2,
    initials: "CW",
    challenge:
      "California Women for Agriculture, established in 1975, needed a modern website that reflected their long history of agricultural advocacy while making it easy for members to stay informed, register for events, and access resources.",
    solution:
      "We built a professional advocacy site that honors the organization's 50-year legacy while providing modern functionality. The site includes member resources, event registration, chapter information, and a news section to keep the agricultural community informed and engaged.",
    results: [
      { stat: "Engaged", label: "Membership Base", color: "text-rose-600" },
      { stat: "Active", label: "Event Registration", color: "text-blue-600" },
      { stat: "6 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-green-600" },
    ],
    features: [
      "Membership information & signup",
      "Event calendar and registration",
      "Chapter directory pages",
      "News & advocacy updates",
      "Resource library",
      "History & mission pages",
      "Social media integration",
      "Mobile-responsive design",
    ],
    testimonial:
      "CalTech Web gave our organization a professional online home that our members love. The event registration and chapter pages have made it so much easier to stay connected across the state.",
    testimonialAuthor: "California Women for Agriculture",
    testimonialRole: "Non-Profit Organization, est. 1975",
    timeToLaunch: "6 days",
    related: ["madera-county-farm-bureau", "kingdom-international", "central-baptist-church"],
  },
  {
    slug: "longhorn-fire-alarm-design",
    name: "Longhorn Fire Alarm Design",
    category: "Small Business",
    tagline: "Professional services site with quote request",
    gradient: "from-slate-600 to-gray-600",
    accentColor: "text-slate-700",
    accentBg: "bg-slate-50",
    Icon: Flame,
    initials: "LF",
    challenge:
      "Longhorn Fire Alarm Design needed a professional website to establish credibility in the fire alarm design and installation industry. Without a proper online presence, potential clients had no way to evaluate their services or request quotes online.",
    solution:
      "We built a professional services site that clearly communicates Longhorn's expertise in fire alarm system design, installation, and inspection. The site includes detailed service pages, a project portfolio, and a prominent quote request form to convert visitors into leads.",
    results: [
      { stat: "Pro", label: "Online Credibility", color: "text-slate-600" },
      { stat: "Clear", label: "Service Showcase", color: "text-blue-600" },
      { stat: "5 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-green-600" },
    ],
    features: [
      "Service pages (design, install, inspect)",
      "Quote request form",
      "Project portfolio",
      "Certifications & credentials page",
      "Service area information",
      "Mobile-responsive design",
      "Contact info & emergency line",
      "Google Maps integration",
    ],
    testimonial:
      "CalTech Web gave us the professional look we needed. Clients take us seriously when they see our website, and the quote requests come in regularly.",
    testimonialAuthor: "Longhorn Fire Alarm Design",
    testimonialRole: "Fire Protection Services",
    timeToLaunch: "5 days",
    related: ["custom-cabling-solutions", "alv-floors", "specialized-plastic-surgery"],
  },
  {
    slug: "central-baptist-church",
    name: "Central Baptist Church",
    category: "Church",
    tagline: "Church site with sermon archive & online giving",
    gradient: "from-teal-600 to-green-500",
    accentColor: "text-teal-700",
    accentBg: "bg-teal-50",
    Icon: Heart,
    initials: "CB",
    challenge:
      "Central Baptist Church in Port Saint Lucie, Florida needed a modern church website that could serve their congregation with sermon access, event information, and online giving. Their previous site was difficult to update and didn't reflect the welcoming nature of their church.",
    solution:
      "We designed a warm, inviting church site with easy access to sermon archives, an events calendar, and online giving. The site makes it simple for visitors to learn about the church, find service times, and connect with the community before ever walking through the doors.",
    results: [
      { stat: "Growing", label: "Online Giving", color: "text-teal-600" },
      { stat: "Active", label: "Sermon Archive", color: "text-green-600" },
      { stat: "7 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-blue-600" },
    ],
    features: [
      "Sermon archive with audio/video",
      "Online giving integration",
      "Events calendar",
      "Service times & location",
      "Ministry pages",
      "Staff & leadership bios",
      "Welcome & beliefs page",
      "Mobile-friendly responsive design",
    ],
    testimonial:
      "Our church finally has a website that makes visitors feel welcome before they even walk through our doors. CalTech Web handles all the updates so we can focus on ministry.",
    testimonialAuthor: "Central Baptist Church",
    testimonialRole: "Church, Port Saint Lucie, FL",
    timeToLaunch: "7 days",
    related: ["calvary-chapel-los-alamitos", "kingdom-international", "california-women-for-agriculture"],
  },
  {
    slug: "custom-cabling-solutions",
    name: "Custom Cabling Solutions",
    category: "Small Business",
    tagline: "Structured cabling and network infrastructure services",
    gradient: "from-gray-700 to-blue-500",
    accentColor: "text-blue-700",
    accentBg: "bg-blue-50",
    Icon: Cable,
    initials: "CC",
    website: "customcablingsolutions.com",
    challenge:
      "Custom Cabling Solutions needed a professional web presence to compete for commercial contracts in the structured cabling and network infrastructure space. Without a credible website, they were losing bids to competitors who appeared more established online, despite having years of hands-on experience and industry certifications.",
    solution:
      "We built a clean, professional site that showcases their full range of services — network cabling, fiber optic installation, data center builds, and audio/video cabling. The site highlights their certifications, completed projects, and service areas, giving commercial clients the confidence to request a quote.",
    results: [
      { stat: "4", label: "Organic Visitors/Mo", color: "text-blue-600" },
      { stat: "Page 1", label: "Local Search Ranking", color: "text-green-600" },
      { stat: "5 days", label: "Launch Time", color: "text-orange-500" },
      { stat: "$99/mo", label: "Total Cost", color: "text-gray-600" },
    ],
    features: [
      "Service pages for each cabling specialty",
      "Certifications & credentials showcase",
      "Project gallery with completed installs",
      "Service area coverage map",
      "Mobile-friendly responsive design",
      "Contact form with quote requests",
      "SEO-optimized for local search",
      "Fast-loading professional layout",
    ],
    testimonial:
      "Since launching our new website, we've been able to land commercial contracts that we were previously overlooked for. The site gives our business the professional credibility it deserves.",
    testimonialAuthor: "Custom Cabling Solutions",
    testimonialRole: "Network Infrastructure, Commercial Cabling",
    timeToLaunch: "5 days",
    related: ["longhorn-fire-alarm-design", "fuentes-concrete", "alv-floors"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

const caseStudyImages: Record<string, string> = {
  "dr-arjun-kanuri": "/portfolio/arjun-kanuri.png",
  "alv-floors": "/portfolio/alv-floors.png",
  "kingdom-international": "/portfolio/kingdom-international.png",
  "turbothao-nails": "/portfolio/turbothao-nails.png",
  "specialized-plastic-surgery": "/portfolio/specialized-plastic-surgery.png",
  "longhorn-fire-alarm-design": "/portfolio/longhorn-fire-alarm-design.png",
  "central-baptist-church": "/portfolio/central-baptist-church.png",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  const ogImage = caseStudyImages[cs.slug];
  return {
    title: `${cs.name} - Web Design Case Study | CalTech Web`,
    description: `See how CalTech Web helped ${cs.name} grow online for just $99/month. Custom design, fast launch, real results.`,
    alternates: { canonical: `https://caltechweb.com/portfolio/${cs.slug}/` },
    openGraph: {
      type: "website",
      url: `https://caltechweb.com/portfolio/${cs.slug}/`,
      siteName: "CalTech Web",
      title: `${cs.name} - Web Design Case Study | CalTech Web`,
      description: `See how CalTech Web helped ${cs.name} grow online for just $99/month.`,
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 800,
            alt: `${cs.name} website designed by CalTech Web`,
          },
        ],
      }),
    },
  };
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              CalTech<span className="text-blue-600">Web</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/web-design-portfolio/" className="text-blue-600 font-semibold">Portfolio</Link>
            <Link href="/web-design-pricing/" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/blog/" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/brandon-hopkins/" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/affordable-church-websites/" className="hover:text-blue-600 transition-colors">Church Websites</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:5592823075"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (559) 282-3075
            </a>
            <Link
              href="/web-design-pricing/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
            >
              Schedule a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ cs }: { cs: CaseStudy }) {
  const CategoryIcon = cs.Icon;
  return (
    <section className={`bg-gradient-to-br ${cs.gradient} text-white py-16 lg:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/web-design-portfolio/" className="hover:text-white transition-colors">Portfolio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/90">{cs.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-sm font-semibold text-white/90 mb-5`}>
              <CategoryIcon className="w-3.5 h-3.5" />
              {cs.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              {cs.name}
            </h1>
            <p className="text-xl text-white/85 mb-8 leading-relaxed">
              {cs.tagline}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {cs.results.map(({ stat, label }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-white mb-0.5">{stat}</div>
                  <div className="text-xs text-white/75 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock site preview */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className={`bg-gradient-to-br ${cs.gradient} brightness-90 h-72`}>
              {/* Browser chrome */}
              <div className="bg-black/25 backdrop-blur-sm px-4 py-2.5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="ml-2 flex-1 bg-white/20 rounded px-2 py-0.5 text-white/70 text-xs truncate">
                  {cs.website ?? `caltechweb.com/portfolio/${cs.slug}`}
                </span>
              </div>

              {/* Mock content */}
              <div className="flex flex-col items-center justify-center h-56 text-center px-8">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center mb-4">
                  <CategoryIcon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-extrabold text-2xl mb-1">{cs.name}</div>
                <div className="text-white/80 text-sm mb-4">{cs.tagline}</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  {cs.results[0].stat} {cs.results[0].label}
                </div>
              </div>
            </div>

            {/* "Live" badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Built in {cs.timeToLaunch}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── The Story ────────────────────────────────────────────────────────────────

function TheStory({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Challenge */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <span className="text-red-500 font-bold text-sm">!</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">The Challenge</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">{cs.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">The Solution</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">{cs.solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Results ─────────────────────────────────────────────────────────────────

function Results({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-sm font-semibold text-green-700">
            <TrendingUp className="w-4 h-4" />
            Measurable Results
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            The Numbers Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cs.results.map(({ stat, label, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              <div className={`text-4xl font-extrabold ${color} mb-2`}>{stat}</div>
              <div className="text-sm text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What We Built ────────────────────────────────────────────────────────────

function WhatWeBuilt({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features list */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              What We Built
            </h2>
            <p className="text-gray-500 mb-8">
              Every feature below is included at $99/month - no add-ons, no surprises.
            </p>
            <ul className="space-y-3">
              {cs.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value callout */}
          <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-8 text-white">
            <div className="text-6xl font-extrabold text-orange-400 mb-2">$99</div>
            <div className="text-blue-200 text-lg font-medium mb-6">per month - all-inclusive</div>
            <div className="space-y-4 mb-8">
              {[
                { icon: Zap, text: "Site live in 5–7 days on average" },
                { icon: Clock, text: "93% of updates done in under 1 hour" },
                { icon: RefreshCw, text: "Free redesigns whenever you want" },
                { icon: Shield, text: "Hosting, SSL & security included" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-300" />
                  </div>
                  <span className="text-blue-100 text-sm">{text}</span>
                </div>
              ))}
            </div>
            <Link
              href="/web-design-pricing/"
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-md"
            >
              Get My Website
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

function Testimonial({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <div className="relative mb-8">
          <Quote className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 text-blue-100" />
          <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed italic pt-6">
            &ldquo;{cs.testimonial}&rdquo;
          </blockquote>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className={`w-11 h-11 rounded-full ${cs.accentBg} flex items-center justify-center ${cs.accentColor} font-bold text-sm`}>
            {cs.initials}
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900 text-sm">{cs.testimonialAuthor}</div>
            <div className="text-gray-500 text-xs">{cs.testimonialRole}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Related Projects ─────────────────────────────────────────────────────────

function RelatedProjects({ cs }: { cs: CaseStudy }) {
  const related = caseStudies.filter((c) => cs.related.includes(c.slug)).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900">More Success Stories</h2>
          <Link
            href="/web-design-portfolio/"
            className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((rel) => {
            const RelIcon = rel.Icon;
            return (
              <Link
                key={rel.slug}
                href={`/portfolio/${rel.slug}/`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-36 bg-gradient-to-br ${rel.gradient} flex flex-col items-center justify-center text-center px-4`}>
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center mb-2">
                    <RelIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white font-bold text-sm">{rel.name}</div>
                  {rel.results[0] && (
                    <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold">
                      <TrendingUp className="w-2.5 h-2.5" />
                      {rel.results[0].stat} {rel.results[0].label}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${rel.accentBg} ${rel.accentColor}`}>{rel.category}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{rel.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
          Want Results Like{" "}
          <span className="text-orange-400">{cs.name}?</span>
        </h2>
        <p className="text-blue-200 text-base leading-relaxed mb-8">
          Your site can be live in as few as 5 days. One flat price: $99/month - 
          design, hosting, unlimited updates, and fast support all included.
          Not happy? Get a refund and keep your site. That&rsquo;s Brandon&rsquo;s personal guarantee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 transition-colors shadow-lg"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call (559) 282-3075
          </a>
        </div>
        <Link
          href="/web-design-portfolio/"
          className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold">
              CalTech<span className="text-blue-400">Web</span>
            </span>
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} CalTech Web. Affordable website design at $99/month.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:Brandon@CalTechWeb.com" className="hover:text-white transition-colors">
              Brandon@CalTechWeb.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://caltechweb.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Design Portfolio",
        "item": "https://caltechweb.com/web-design-portfolio/",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cs.name,
        "item": `https://caltechweb.com/portfolio/${cs.slug}/`,
      },
    ],
  };

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
    },
    "author": {
      "@type": "Person",
      "name": cs.testimonialAuthor,
    },
    "reviewBody": cs.testimonial,
    "itemReviewed": {
      "@type": "Organization",
      "name": "CalTech Web",
      "url": "https://caltechweb.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <Nav />
      <Hero cs={cs} />
      <TheStory cs={cs} />
      <Results cs={cs} />
      <WhatWeBuilt cs={cs} />
      <Testimonial cs={cs} />
      <RelatedProjects cs={cs} />
      <FinalCTA cs={cs} />
      <Footer />
    </>
  );
}
