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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
