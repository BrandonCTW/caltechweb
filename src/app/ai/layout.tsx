import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services | Consulting & Automation Builds | CalTech Web",
  description:
    "CalTech Web offers two AI service tracks: done-for-you automation builds that replace manual workflows, and embedded AI strategy consulting for small and mid-size businesses.",
  alternates: { canonical: "https://caltechweb.com/ai/" },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/ai/",
    siteName: "CalTech Web",
    title: "AI Services | Consulting & Automation Builds | CalTech Web",
    description:
      "Done-for-you AI automation builds and embedded AI strategy consulting for small and mid-size businesses. CalTech Web.",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "CalTech Web AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services | Consulting & Automation Builds | CalTech Web",
    description:
      "Done-for-you AI automation builds and embedded AI strategy consulting. CalTech Web.",
    images: ["/brandon-hopkins.jpg"],
  },
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
