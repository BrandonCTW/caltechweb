import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AP Invoice Automation Case Study | CalTech Web",
  description:
    "How CalTech Web automated 700+ weekly invoices for a West Coast manufacturing company, replacing 5-6 manual touchpoints with a cloud-hosted AI pipeline that posts directly to their ERP.",
  alternates: { canonical: "https://caltechweb.com/ai/ap-automation/" },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/ai/ap-automation/",
    siteName: "CalTech Web",
    title: "AP Invoice Automation Case Study | CalTech Web",
    description:
      "700+ weekly invoices automated in 12 weeks. OCR, AI coding, PO matching, and direct ERP integration. Full case study.",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "AP Automation Case Study by CalTech Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AP Invoice Automation Case Study | CalTech Web",
    description:
      "700+ weekly invoices automated in 12 weeks. Full case study from CalTech Web.",
    images: ["/brandon-hopkins.jpg"],
  },
};

export default function APAutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
