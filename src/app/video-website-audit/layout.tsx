import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Video Website Audit | CalTech Web",
  description:
    "Get a free personalized video audit of your website from Brandon Hopkins. See exactly what's holding your site back — design, speed, SEO, and conversions. No obligation.",
  alternates: { canonical: "https://caltechweb.com/video-website-audit/" },
  openGraph: {
    title: "Free Video Website Audit | CalTech Web",
    description:
      "Brandon personally reviews your website on video — design, mobile, SEO, speed, and conversion issues. Free, no strings attached.",
    url: "https://caltechweb.com/video-website-audit/",
    type: "website",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins, Founder of CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Website Audit | CalTech Web",
    description:
      "Brandon personally reviews your website on video — design, mobile, SEO, speed, and conversion issues. Free, no strings attached.",
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
      name: "Video Website Audit",
      item: "https://caltechweb.com/video-website-audit/",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Free Video Website Audit",
  url: "https://caltechweb.com/video-website-audit/",
  provider: {
    "@type": "Organization",
    name: "CalTech Web",
    url: "https://caltechweb.com",
  },
  description:
    "Brandon Hopkins personally records a video reviewing your website — covering design, mobile-responsiveness, page speed, SEO, and conversion rate issues — at no charge.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free, no obligation video website audit",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the video website audit really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free. Brandon personally reviews your website on video and sends you the recording with no obligation to buy anything. There is no sales pitch, no hidden fees, and no pressure.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the video audit take to receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most audits are recorded and sent within 1-2 business days of your request.",
      },
    },
    {
      "@type": "Question",
      name: "What does the video audit cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brandon reviews your site's design and first impression, mobile-responsiveness, page load speed, SEO fundamentals (title tags, meta descriptions, headings), calls-to-action, trust signals, and overall conversion potential.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to have an existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the video audit is for businesses that already have a website and want an expert review of what could be improved. If you don't have a website yet, visit the pricing page to get started.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
