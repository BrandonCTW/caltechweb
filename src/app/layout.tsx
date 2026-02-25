import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const siteUrl = "https://caltechweb.com";
const siteTitle = "CalTech Web - Affordable Website Design at $99/month";
const siteDescription =
  "Get a professional website for just $99/month - unlimited updates, free redesigns, hosting, and fast support all included. Serving 800+ small businesses, churches, and non-profits nationwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "affordable web design",
    "small business website",
    "$99 website",
    "web design California",
    "church website design",
    "non-profit web design",
    "website design monthly",
    "unlimited website updates",
    "Brandon Hopkins CalTech Web",
  ],
  authors: [{ name: "Brandon Hopkins", url: siteUrl }],
  creator: "CalTech Web",
  publisher: "CalTech Web",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CalTech Web",
    title: "Professional Websites for Small Businesses - $99/month",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for Small Businesses - $99/month",
    description: siteDescription,
    creator: "@caltechweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${geist.className} antialiased bg-background text-foreground min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
