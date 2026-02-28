import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "./ContactHero";
import ContactMain from "./ContactMain";
import ContactFAQ from "./ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Consultation | CalTech Web",
  description:
    "Get in touch with Brandon Hopkins at CalTech Web. Affordable website design starting at $99/month for small businesses, churches, and non-profits. Call (559) 282-3075.",
  alternates: { canonical: "https://caltechweb.com/contact-us/" },
  openGraph: {
    type: "website",
    url: "https://caltechweb.com/contact-us/",
    siteName: "CalTech Web",
    title: "Contact Us - Get a Free Consultation | CalTech Web",
    description:
      "Reach out to Brandon Hopkins at CalTech Web for affordable website design at $99/month. Professional sites for small businesses, churches, and non-profits.",
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
    title: "Contact Us - Get a Free Consultation | CalTech Web",
    description:
      "Reach out to Brandon Hopkins at CalTech Web for affordable website design at $99/month.",
    images: ["/brandon-hopkins.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactMain />
      <ContactFAQ />
      <Footer />
    </>
  );
}
