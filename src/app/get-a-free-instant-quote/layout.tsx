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
