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

const faqStructuredData = [
  {
    question: "How quickly will I hear back?",
    answer:
      "Brandon personally responds to every inquiry, usually within a few hours on business days. If your need is urgent, the fastest way to reach us is by phone: (559) 282-3075.",
  },
  {
    question: "Is there a setup fee or contract?",
    answer:
      "No setup fee, ever - and no contracts. Everything is month-to-month. You can cancel anytime with no penalty.",
  },
  {
    question: "What does the $99/month include?",
    answer:
      "Everything: custom website design, unlimited content updates, hosting, SSL certificate, backups, security monitoring, free redesigns whenever you want a fresh look, and priority support. The only extra is your domain name (typically $15–20/year).",
  },
  {
    question: "How long does it take to launch a new site?",
    answer:
      "Most new websites are live within 5–7 business days. You'll review and approve the design before anything goes public.",
  },
  {
    question: "I already have a website. Can you take it over?",
    answer:
      "Absolutely. We can migrate your existing site, redesign it completely, or make incremental improvements - whatever fits your goals. Your domain always stays yours.",
  },
  {
    question: "Do you work with businesses outside California?",
    answer:
      "Yes - CalTech Web serves clients nationwide. Everything is handled remotely, so location is never a barrier.",
  },
  {
    question: "What if I'm not happy with the design?",
    answer:
      "Brandon personally guarantees your satisfaction. If you're not happy, you get a full refund and keep your website. No questions asked.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact CalTech Web",
            url: "https://caltechweb.com/contact-us/",
            description:
              "Get in touch with Brandon Hopkins at CalTech Web. Affordable website design starting at $99/month for small businesses, churches, and non-profits.",
            mainEntity: {
              "@type": "Organization",
              name: "CalTech Web",
              telephone: "+15592823075",
              email: "Brandon@CalTechWeb.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+15592823075",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqStructuredData.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }),
        }}
      />

      <Header />
      <ContactHero />
      <ContactMain />
      <ContactFAQ />
      <Footer />
    </>
  );
}
