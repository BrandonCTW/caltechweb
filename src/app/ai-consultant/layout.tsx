import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consultant for Small Business | Brandon Hopkins",
  description:
    "Brandon Hopkins is a US-based AI consultant for small business. We help companies implement AI tools, automate workflows, and build a competitive advantage. 6–12 month contracts, 1–2 clients at a time. Starting at $5,500/month.",
  alternates: { canonical: "https://caltechweb.com/ai-consultant/" },
  keywords: [
    "AI consultant for small business",
    "AI implementation consultant",
    "hire AI consultant",
    "small business AI strategy",
    "AI consulting services USA",
    "fractional AI consultant",
    "AI automation consultant",
    "Brandon Hopkins AI consultant",
  ],
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/ai-consultant/",
    siteName: "CalTech Web",
    title: "AI Consultant for Small Business | Brandon Hopkins",
    description:
      "Brandon Hopkins is a practitioner-turned-consultant who helps US small businesses implement AI tools that save time, cut costs, and build competitive advantage. 20 years experience. 800+ businesses served.",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "Brandon Hopkins, AI Consultant for Small Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultant for Small Business | Brandon Hopkins",
    description:
      "Brandon Hopkins helps US small businesses implement AI tools with real ROI. 20 years digital strategy. 800+ businesses served.",
    images: ["/brandon-hopkins.jpg"],
  },
};

export default function AIConsultantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
