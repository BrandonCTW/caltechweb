import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Report Card | CalTech Web",
  description:
    "Get a free website report card. See how your site scores on first impression, mobile experience, trust signals, lead capture, and SEO.",
  alternates: { canonical: "https://caltechweb.com/free-website-report-card/" },
  openGraph: {
    title: "Free Website Report Card | CalTech Web",
    description:
      "Enter your URL and instantly see what is wrong with your website. Before-and-after comparison shows exactly what CalTech Web fixes for $99/month.",
    url: "https://caltechweb.com/free-website-report-card/",
    type: "website",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins - Founder of CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Report Card | CalTech Web",
    description:
      "Enter your URL and instantly see what is wrong with your website. Before-and-after comparison shows exactly what CalTech Web fixes for $99/month.",
    images: ["/brandon-hopkins.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Website Report Card",
  description:
    "An instant website grading tool that analyzes first impression, mobile experience, trust signals, lead capture, and SEO basics — then shows what CalTech Web would fix.",
  url: "https://caltechweb.com/free-website-report-card/",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free website report card — no signup required",
  },
  provider: {
    "@type": "ProfessionalService",
    name: "CalTech Web",
    url: "https://caltechweb.com/",
    telephone: "+15592823075",
    founder: {
      "@type": "Person",
      name: "Brandon Hopkins",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the website report card really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free. No credit card, no signup, no email required. Just enter your URL and get your results instantly.",
      },
    },
    {
      "@type": "Question",
      name: "What does the report card analyze?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We grade your site across five categories: First Impression (design, layout, branding), Mobile Experience (responsive design, tap targets, speed), Trust & Credibility (SSL, reviews, contact info), Lead Capture (CTAs, forms, phone number visibility), and SEO Basics (meta tags, headings, page speed). Over 35 individual checks in total.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the AI analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tool fetches your live website and evaluates it using the same criteria Google and real visitors use. While no automated tool replaces a full manual audit, our report card identifies the most impactful issues that cost you visitors and customers.",
      },
    },
    {
      "@type": "Question",
      name: "What does the 'With CalTech Web' view show?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It shows your projected score after CalTech Web builds you a new, professionally designed website. Every failing check is resolved — from mobile optimization to page speed to proper SEO markup — all included in the $99/month plan.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the scan take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most scans complete in under 30 seconds. The tool fetches your website, runs it through our analysis engine, and generates a full report with actionable recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I scan any website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can scan any publicly accessible website. Sites behind login walls, staging environments, or localhost addresses cannot be analyzed.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://caltechweb.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free Website Report Card",
      item: "https://caltechweb.com/free-website-report-card/",
    },
  ],
};

export default function FreeWebsiteReportCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
