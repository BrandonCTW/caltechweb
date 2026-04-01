import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], display: "optional" });

const siteUrl = "https://caltechweb.com/";
const siteTitle = "CalTech Web | Affordable Website Design at $99/month";
const siteDescription =
  "Professional website for $99/month, unlimited updates, hosting, SSL, and fast support included. 800+ sites for small businesses, churches, and non-profits.";

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
    title: "Professional Websites for Small Businesses | $99/month",
    description: siteDescription,
    locale: "en_US",
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
    title: "Professional Websites for Small Businesses | $99/month",
    description: siteDescription,
    creator: "@caltechweb",
    images: ["/brandon-hopkins.jpg"],
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
        <Script
          id="recaptcha-v3"
          src="https://www.google.com/recaptcha/api.js?render=6LcE5l0mAAAAADc3vZerPMYboBxlnmlG7u1zeQtg"
          strategy="lazyOnload"
        />
        <Script id="ga-lazy" strategy="lazyOnload">
          {`(function(){var d=false;function l(){if(d)return;d=true;var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=G-16KYJVW780';s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function g(){dataLayer.push(arguments);}g('js',new Date());g('config','G-16KYJVW780');}['click','scroll','touchstart','mouseover'].forEach(function(e){window.addEventListener(e,l,{once:true,passive:true});});setTimeout(l,12000);})();`}
        </Script>
        <Script id="ze-lazy" strategy="lazyOnload">
          {`(function(){var d=false;function l(){if(d)return;d=true;var s=document.createElement('script');s.id='ze-snippet';s.src='https://static.zdassets.com/ekr/snippet.js?key=20e06cbb-5338-45fc-93ba-6e1621dc8d52';document.body.appendChild(s);}['click','scroll','touchstart','mouseover'].forEach(function(e){window.addEventListener(e,l,{once:true,passive:true});});setTimeout(l,12000);})();`}
        </Script>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
