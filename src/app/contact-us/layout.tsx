import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CalTech Web - Talk to Brandon | (559) 282-3075",
  description:
    "Reach Brandon Hopkins at CalTech Web. Call (559) 282-3075 or send a message. Most inquiries answered within hours. No sales pitch.",
  alternates: { canonical: "https://caltechweb.com/contact-us/" },
  openGraph: {
    title: "Contact CalTech Web - Talk to Brandon | (559) 282-3075",
    description:
      "Reach Brandon Hopkins directly. Call, email, or fill out the form - most inquiries answered within a few hours. Affordable websites for small businesses, churches, and non-profits.",
    url: "https://caltechweb.com/contact-us/",
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
    title: "Contact CalTech Web - Talk to Brandon | (559) 282-3075",
    description:
      "Reach Brandon Hopkins at CalTech Web. Call (559) 282-3075 or send a message. Most inquiries answered within hours. No sales pitch.",
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
      name: "Contact Us",
      item: "https://caltechweb.com/contact-us/",
    },
  ],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly will I hear back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brandon personally responds to every inquiry, usually within a few hours on business days. If your need is urgent, the fastest way to reach us is by phone: (559) 282-3075.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a setup fee or contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No setup fee, ever - and no contracts. Everything is month-to-month. You can cancel anytime with no penalty.",
      },
    },
    {
      "@type": "Question",
      name: "What does the $99/month include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Everything: custom website design, unlimited content updates, hosting, SSL certificate, backups, security monitoring, free redesigns whenever you want a fresh look, and priority support. The only extra is your domain name (typically $15–20/year).",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to launch a new site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most new websites are live within 5–7 business days. You'll review and approve the design before anything goes public.",
      },
    },
    {
      "@type": "Question",
      name: "I already have a website. Can you take it over?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We can migrate your existing site, redesign it completely, or make incremental improvements - whatever fits your goals. Your domain always stays yours.",
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
    {
      "@type": "Question",
      name: "What if I'm not happy with the design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brandon personally guarantees your satisfaction. If you're not happy, you get a full refund and keep your website. No questions asked.",
      },
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CalTech Web",
  url: "https://caltechweb.com/contact-us/",
  description:
    "Contact page for CalTech Web - affordable website design for small businesses, churches, and non-profits.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "CalTech Web",
    url: "https://caltechweb.com",
    telephone: "+15592823075",
    email: "Brandon@CalTechWeb.com",
    founder: {
      "@type": "Person",
      name: "Brandon Hopkins",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "26766 Greentree Ave.",
      addressLocality: "Madera",
      addressRegion: "CA",
      postalCode: "93638",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+15592823075",
      email: "Brandon@CalTechWeb.com",
      contactType: "customer support",
      availableLanguage: "English",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      {children}
    </>
  );
}
