import type { Metadata } from "next";
import { Phone, Mail, Shield } from "lucide-react";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CalTech Web",
  description:
    "CalTech Web privacy policy. Learn how we collect, use, and protect your personal information when you use our website and web design services.",
  alternates: { canonical: "https://caltechweb.com/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | CalTech Web",
    description:
      "CalTech Web privacy policy. Learn how we collect, use, and protect your personal information.",
    url: "https://caltechweb.com/privacy-policy/",
  },
};

// --- Nav ---

function Nav() {
  const links = [
    { label: "Portfolio", href: "/web-design-portfolio/" },
    { label: "Pricing", href: "/web-design-pricing/" },
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/brandon-hopkins/" },
    { label: "Church Websites", href: "/affordable-church-websites/" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="CalTech Web" width={1520} height={512} className="h-7 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5592823075"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
          </a>
          <a
            href="https://buy.stripe.com/eVa3eAfJRf6KfRe144"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Schedule a Call
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

// --- Footer ---

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="CalTech Web" width={1520} height={512} className="h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Affordable website design for small businesses, churches, and
              non-profits. $99/month all-inclusive.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="tel:5592823075"
                className="hover:text-white transition-colors"
              >
                (559) 282-3075
              </a>
              <a
                href="mailto:Brandon@CalTechWeb.com"
                className="hover:text-white transition-colors"
              >
                Brandon@CalTechWeb.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Design",
                "Website Hosting",
                "Monthly Updates",
                "Free Redesigns",
                "SEO Basics",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/web-design-pricing/"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Small Businesses",
                "Church Websites",
                "Non-Profits",
                "Healthcare",
                "Real Estate",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/web-design-portfolio/"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Brandon", href: "/brandon-hopkins/" },
                { label: "Portfolio", href: "/web-design-portfolio/" },
                { label: "Blog", href: "/blog/" },
                { label: "Get My Website", href: "/get-a-free-instant-quote/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>
            &copy; {new Date().getFullYear()} CalTech Web. All rights reserved.
            California-based, serving clients nationwide.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions/"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Page ---

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
              <Shield className="w-4 h-4 text-blue-200" />
              Your privacy matters
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              CalTech Web is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              <p className="text-sm text-gray-400 mb-8">
                Last updated: February 25, 2026
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information you voluntarily provide when you contact
                us, fill out forms on our website, or sign up for our web design
                service. This may include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Your name, email address, and phone number",
                  "Your business name and website URL",
                  "Billing information for your monthly subscription",
                  "Content you provide for your website (text, images, logos)",
                  "Communications between you and CalTech Web",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Design, build, and maintain your website",
                  "Process your monthly subscription payments",
                  "Communicate with you about your website and account",
                  "Respond to your inquiries and support requests",
                  "Improve our services and website",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                3. Cookies and Tracking
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience and analyze site traffic. These
                include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Essential cookies required for basic site functionality",
                  "Analytics cookies (such as Google Analytics) to understand how visitors use our site",
                  "Third-party cookies from embedded content or services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control cookie preferences through your browser
                settings. Disabling cookies may affect some site functionality.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party services to operate our business and
                provide our web design service. These may include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Stripe for payment processing",
                  "Google Analytics for website traffic analysis",
                  "Hosting providers for website delivery",
                  "Email services for communication",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                These third-party services have their own privacy policies and
                handle data according to their respective terms. We do not sell
                your personal information to third parties.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take reasonable measures to protect your personal information
                from unauthorized access, disclosure, alteration, or
                destruction. These measures include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "SSL encryption on all pages of our website",
                  "Secure payment processing through Stripe",
                  "Regular backups of all client website data",
                  "Restricted access to personal information on a need-to-know basis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we strive to protect your information, no method of
                electronic transmission or storage is 100% secure. We cannot
                guarantee absolute security.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Request access to the personal information we hold about you",
                  "Request correction of inaccurate information",
                  "Request deletion of your personal data",
                  "Opt out of marketing communications at any time",
                  "Cancel your subscription and receive your website files",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 13.
                We do not knowingly collect personal information from children. If
                you believe a child has provided us with personal information,
                please contact us and we will delete it promptly.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this privacy policy from time to time. Changes will
                be posted on this page with an updated revision date. Your
                continued use of our website or services after any changes
                constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this privacy policy or how we
                handle your data, please contact us:
              </p>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">
                        Email
                      </div>
                      <a
                        href="mailto:Brandon@CalTechWeb.com"
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        Brandon@CalTechWeb.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">
                        Phone
                      </div>
                      <a
                        href="tel:5592823075"
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        (559) 282-3075
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
