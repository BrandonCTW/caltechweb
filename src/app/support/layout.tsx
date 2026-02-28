import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Support | CalTech Web",
  description:
    "Need a website update? Submit a support request and we'll handle it — 93% of requests completed in under 1 hour. Email, call, or use the form.",
  alternates: { canonical: "https://caltechweb.com/support/" },
  openGraph: {
    title: "Client Support | CalTech Web",
    description:
      "Need a website update? Submit a support request and we'll handle it — 93% of requests completed in under 1 hour.",
    url: "https://caltechweb.com/support/",
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
    title: "Client Support | CalTech Web",
    description:
      "Need a website update? Submit a support request and we'll handle it — 93% of requests completed in under 1 hour.",
    images: ["/brandon-hopkins.jpg"],
  },
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kinds of updates can I request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anything on your website. Text changes, new photos, adding or removing pages, layout tweaks, new blog posts, menu updates, hours changes, staff bios — you name it. If it's on your site, we can update it.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will my update be completed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most requests are completed within 1 hour during business hours (Mon–Fri, 8am–5pm PT). Larger requests like new pages or design changes may take 1–2 business days. We'll let you know the timeline when we receive your request.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a limit to how many updates I can request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your plan includes unlimited updates — there's no cap and no extra charge. Send as many requests as you need, as often as you need them.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide exact wording or images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. You can send us rough notes, bullet points, or just describe what you want changed. We'll write the copy and source or resize images as needed. Of course, if you have specific text or photos ready, just attach them to your request.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request a full redesign of my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — free redesigns are included in your plan. If you want a fresh look, a new color scheme, or a completely different layout, just let us know. We'll design a new version for your approval before making it live.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best way to send files or images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can attach files directly to the support form, email them to support@caltechweb.com, or share a Google Drive / Dropbox link. We accept all common image and document formats.",
      },
    },
    {
      "@type": "Question",
      name: "My website is down. What should I do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call us immediately at (559) 282-3075 or use the live chat in the bottom-right corner. We treat outages as top priority and will begin working on it right away, even outside normal business hours.",
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
      name: "Support",
      item: "https://caltechweb.com/support/",
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
