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
      {children}
    </>
  );
}
