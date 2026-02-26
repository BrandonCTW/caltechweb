import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design RFP & RFQ — $99/Month Proposals | CalTech Web",
  description:
    "Submit your website design RFP or RFQ to CalTech Web. Flat $99/month pricing simplifies procurement for government, non-profit, and business projects. 800+ sites delivered.",
  alternates: {
    canonical: "https://caltechweb.com/website-design-rfp-rfq/",
  },
  openGraph: {
    title: "Website Design RFP & RFQ — Flat $99/Month | CalTech Web",
    description:
      "Simple, transparent website design proposals. $99/month all-inclusive. No large upfront costs. 800+ websites delivered for government, non-profit, and business clients.",
    url: "https://caltechweb.com/website-design-rfp-rfq/",
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
    title: "Website Design RFP & RFQ — Flat $99/Month | CalTech Web",
    description:
      "Simple, transparent website design proposals. $99/month all-inclusive. No large upfront costs. 800+ websites delivered.",
    images: ["/brandon-hopkins.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design RFP & RFQ — CalTech Web",
  description:
    "Flat $99/month website design service accepting RFPs and RFQs from government agencies, non-profits, churches, and businesses. 800+ websites delivered with no large upfront costs.",
  url: "https://caltechweb.com/website-design-rfp-rfq/",
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
    price: "99",
    priceCurrency: "USD",
    description: "Flat $99/month — custom website design, hosting, unlimited updates, and support all included",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "99",
      priceCurrency: "USD",
      billingDuration: "P1M",
    },
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
      name: "Website Design RFP & RFQ",
      item: "https://caltechweb.com/website-design-rfp-rfq/",
    },
  ],
};

export default function WebsiteDesignRFPLayout({
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
