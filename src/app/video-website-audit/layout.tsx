import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Video Website Audit | CalTech Web",
  description:
    "Get a free, personalized video audit of your website. Brandon Hopkins reviews your speed, mobile responsiveness, SEO, and design — delivered within 48 hours.",
  alternates: { canonical: "https://caltechweb.com/video-website-audit/" },
  openGraph: {
    title: "Free Video Website Audit | CalTech Web",
    description:
      "Get a free, personalized video review of your website covering speed, mobile, SEO, and design. Delivered in 48 hours by Brandon Hopkins.",
    url: "https://caltechweb.com/video-website-audit/",
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
    title: "Free Video Website Audit | CalTech Web",
    description:
      "Get a free, personalized video review of your website covering speed, mobile, SEO, and design. Delivered in 48 hours by Brandon Hopkins.",
    images: ["/brandon-hopkins.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Free Video Website Audit",
  description:
    "A free, personalized video audit of your website covering speed, mobile responsiveness, SEO basics, and design usability — delivered within 48 hours.",
  url: "https://caltechweb.com/video-website-audit/",
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
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free, no-obligation video website audit",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
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
      name: "Free Video Website Audit",
      item: "https://caltechweb.com/video-website-audit/",
    },
  ],
};

export default function VideoWebsiteAuditLayout({
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
