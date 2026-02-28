import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Instant Website Quote | CalTech Web",
  description:
    "Get an instant, no-obligation quote for your custom website. See exactly what you'll pay — $99/month, all-inclusive. Takes 60 seconds.",
  alternates: { canonical: "https://caltechweb.com/get-a-free-instant-quote/" },
  openGraph: {
    title: "Get a Free Instant Website Quote | CalTech Web",
    description:
      "Instant, no-obligation website quote. Custom web design, hosting, and unlimited updates for $99/month. See your price in 60 seconds.",
    url: "https://caltechweb.com/get-a-free-instant-quote/",
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
    title: "Get a Free Instant Website Quote | CalTech Web",
    description:
      "Instant, no-obligation website quote. Custom web design, hosting, and unlimited updates for $99/month. See your price in 60 seconds.",
    images: ["/brandon-hopkins.jpg"],
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
      name: "Get a Free Instant Quote",
      item: "https://caltechweb.com/get-a-free-instant-quote/",
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CalTech Web LLC",
  url: "https://caltechweb.com/",
  logo: "https://caltechweb.com/caltechweb-logo.png",
  image: "https://caltechweb.com/brandon-hopkins.jpg",
  description:
    "Affordable California web design company serving over 800 websites. Custom web design, hosting, and unlimited updates for $99/month — no setup fees, no contracts.",
  telephone: "+15592823075",
  email: "Brandon@CalTechWeb.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "26766 Greentree Ave.",
    addressLocality: "Madera",
    addressRegion: "CA",
    postalCode: "93638",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.9613,
    longitude: -120.0607,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$99/month",
  foundingDate: "2004",
  founder: {
    "@type": "Person",
    name: "Brandon Hopkins",
    jobTitle: "CEO and Founder",
    url: "https://caltechweb.com/brandon-hopkins/",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design",
          description:
            "Custom website design with unlimited pages, mobile-responsive layout, hosting, SSL, and on-site SEO setup.",
        },
        price: "99.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99.00",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Church Website Design",
          description:
            "Church website design including online giving tools, weekly sermon uploads, and event calendar updates.",
        },
        price: "149.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "149.00",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/caltech-web",
    "https://www.instagram.com/caltechweb/",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there really no setup fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Correct - there is no setup fee, no hidden charges, and no contracts. You pay $99/month and that covers everything: design, hosting, SSL, unlimited updates, and priority support.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem. We can migrate your existing site, redesign it from scratch, or start fresh - whatever works best for your goals. Your domain always stays yours.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get my site live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most websites are designed and launched within 5-7 business days. You will review and approve the design before anything goes public.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. There are no contracts or cancellation fees. If you decide to leave, you can cancel at any time with no penalty.",
      },
    },
    {
      "@type": "Question",
      name: "What if I am not happy with the design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brandon personally guarantees your satisfaction. Revisions are unlimited during the design process. If you are not happy after launch, you get a full refund and keep your website.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - CalTech Web serves clients nationwide. Everything is handled remotely, so location is never a barrier.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
