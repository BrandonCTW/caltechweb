import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Builds | Done-for-You Workflow Automation | CalTech Web",
  description:
    "CalTech Web builds custom AI automation systems that replace your most expensive manual workflows. AP automation, SEO content pipelines, email triage, and more. You own everything.",
  alternates: { canonical: "https://caltechweb.com/ai/automation/" },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/ai/automation/",
    siteName: "CalTech Web",
    title: "AI Automation Builds | Done-for-You Workflow Automation | CalTech Web",
    description:
      "Done-for-you AI automation builds. We identify your highest-cost manual process and build a system to replace it. You own all the code and infrastructure.",
    images: [
      {
        url: "/brandon-hopkins.jpg",
        width: 2400,
        height: 1600,
        alt: "CalTech Web AI Automation Builds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Builds | Done-for-You | CalTech Web",
    description:
      "Done-for-you AI automation. We build the system, you own it. AP automation, SEO workflows, email triage, and more.",
    images: ["/brandon-hopkins.jpg"],
  },
};

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
