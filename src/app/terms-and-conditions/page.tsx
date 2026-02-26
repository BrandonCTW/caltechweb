import type { Metadata } from "next";
import { Phone, Mail, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | CalTech Web",
  description:
    "Terms and conditions for CalTech Web's $99/month web design service. Covers service description, billing, cancellation policy, intellectual property, and more.",
  alternates: { canonical: "https://caltechweb.com/terms-and-conditions/" },
  openGraph: {
    title: "Terms and Conditions | CalTech Web",
    description:
      "Terms and conditions for CalTech Web's $99/month web design service.",
    url: "https://caltechweb.com/terms-and-conditions/",
  },
};

// --- Page ---

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
              <FileText className="w-4 h-4 text-blue-200" />
              Service agreement
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              The terms governing CalTech Web&apos;s $99/month web design
              service. We keep things simple, fair, and transparent.
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

              <p className="text-gray-600 leading-relaxed mb-6">
                These Terms and Conditions (&quot;Terms&quot;) govern your use of
                the web design and hosting services provided by CalTech Web
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
                subscribing to or using our services, you agree to these Terms.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                1. Service Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CalTech Web provides an all-inclusive monthly web design and
                hosting service for $99 per month. The service includes:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Custom website design tailored to your business or organization",
                  "Website hosting on our managed infrastructure",
                  "SSL certificate (HTTPS security)",
                  "Unlimited content updates (text, images, pages)",
                  "Free website redesigns at your request",
                  "Daily backups and uptime monitoring",
                  "Mobile-responsive design for all devices",
                  "Basic on-page SEO setup",
                  "Google Analytics integration",
                  "Contact forms and click-to-call functionality",
                  "Priority support with a target response time of under 1 hour",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Domain name registration is not included and must be purchased
                separately (typically $12-15/year). You retain full ownership of
                your domain name at all times.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                2. Monthly Billing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The service is billed at $99 per month. There is no setup fee, no
                onboarding fee, and no hidden charges. Payment is processed
                automatically each month through our payment processor (Stripe).
                You are responsible for keeping your payment method current and
                valid.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If a payment fails, we will attempt to notify you and retry the
                charge. If payment is not received within 15 days of the due
                date, we reserve the right to suspend your website until the
                balance is resolved.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                3. Cancellation Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may cancel your subscription at any time. There are no
                cancellation fees, early termination penalties, or long-term
                contracts. This is a month-to-month service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon cancellation:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Your website will remain active through the end of your current billing period",
                  "You will receive your website files (HTML, CSS, images, and content) so you are never left with nothing",
                  "Hosting and SSL services will be discontinued at the end of the billing period",
                  "We will assist with migrating your domain to another provider if needed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                4. Money-Back Guarantee
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are not satisfied with your website, we will refund your
                most recent monthly payment. You also keep the website files. This
                guarantee is offered in good faith and applies to your most recent
                billing cycle.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                5. Content and Updates
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                &quot;Unlimited updates&quot; refers to content changes including
                but not limited to text edits, image swaps, new pages, menu
                updates, staff photos, contact information changes, and event
                listings. Updates are submitted via email or phone and are
                typically completed within 1 business hour.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You are responsible for providing the content (text, images,
                logos, etc.) for your website. You represent that you have the
                right to use all content you provide to us.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The content you provide (your text, images, logos, branding) remains your property.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The website design, code, and structure created by CalTech Web are
                our intellectual property during the active subscription period.
                Upon cancellation, you receive the website files for your
                continued use. We reserve the right to use your website in our
                portfolio and marketing materials unless you request otherwise in
                writing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party themes, frameworks, libraries, and tools in
                the construction of your website. These are subject to their
                respective licenses.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                7. Acceptable Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use our services for any illegal, harmful, or
                objectionable purposes. We reserve the right to refuse service or
                terminate accounts that host content that is:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Illegal under federal or state law",
                  "Defamatory, fraudulent, or deceptive",
                  "Infringing on the intellectual property rights of others",
                  "Containing malware, phishing, or other malicious content",
                  "Excessively consuming server resources to the detriment of other clients",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CalTech Web provides web design and hosting services on an
                &quot;as is&quot; basis. While we strive for excellent uptime and
                service quality, we do not guarantee that services will be
                uninterrupted, error-free, or free from vulnerabilities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, CalTech Web shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of our services. Our total
                liability for any claim arising from these Terms or our services
                shall not exceed the amount you paid us in the three (3) months
                preceding the event giving rise to the claim.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                9. Service Availability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We aim for 99.9% uptime for all hosted websites. Scheduled
                maintenance windows will be communicated in advance when possible.
                We are not liable for downtime caused by circumstances beyond our
                reasonable control, including natural disasters, third-party
                service outages, or internet infrastructure failures.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                10. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with
                the laws of the State of California. Any disputes arising under
                these Terms shall be resolved in the courts of Fresno County,
                California.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                11. Changes to These Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update these Terms from time to time. Changes will be
                posted on this page with an updated revision date. Continued use
                of our services after changes are posted constitutes acceptance of
                the revised Terms. Material changes will be communicated via email
                to active subscribers.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about these Terms or our services, please
                reach out:
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
