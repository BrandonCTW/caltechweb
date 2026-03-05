import type { Metadata } from "next";
import { Package, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fulfillment Policy | CalTech Web",
  description:
    "CalTech Web fulfillment policy. Learn how we deliver our $99/month web design service, including website launch timelines, update turnaround, and cancellation terms.",
  alternates: { canonical: "https://caltechweb.com/fulfillment/" },
  openGraph: {
    title: "Fulfillment Policy | CalTech Web",
    description:
      "How CalTech Web delivers its $99/month web design service, website launch, updates, hosting, and cancellation.",
    url: "https://caltechweb.com/fulfillment/",
  },
};

// --- Page ---

export default function FulfillmentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
              <Package className="w-4 h-4 text-blue-200" />
              Service delivery
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Fulfillment Policy
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              How CalTech Web delivers its $99/month web design service,
              timelines, updates, hosting, and what happens if you cancel.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              <p className="text-sm text-gray-400 mb-8">
                Last updated: March 4, 2026
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                1. Service Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CalTech Web provides professional website design, hosting, and
                ongoing maintenance as a subscription service for $99 per month.
                The subscription includes:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Custom website design tailored to your business",
                  "Managed hosting and SSL certificate",
                  "Unlimited content updates (text, images, pages)",
                  "Free redesigns at any time",
                  "Technical support via email",
                  "Domain setup assistance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                2. Website Launch Timeline
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                After you sign up and provide your content (logo, photos,
                business information, and any preferences), we begin building
                your website immediately. Most new websites are designed, built,
                and ready for your review within <strong>5–7 business days</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your website is not published publicly until you review and
                approve it. Once you approve, we launch it live, typically the
                same day.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Timelines may vary if content is not provided promptly. We will
                contact you within <strong>24 hours</strong> of your sign-up to
                begin the onboarding process.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                3. Ongoing Updates &amp; Support
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlimited website updates are included in your $99/month
                subscription. To request an update, email{" "}
                <a
                  href="mailto:support@caltechweb.com"
                  className="text-blue-600 hover:underline"
                >
                  support@caltechweb.com
                </a>{" "}
                with your request.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our target turnaround for update requests is <strong>under 1 hour</strong>{" "}
                during normal business hours. 93% of all support requests are
                completed within this timeframe. Complex requests (new page
                builds, major redesigns) may take longer and we will communicate
                an estimated timeframe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Support is available Monday through Friday. We aim to respond to
                all requests the same business day.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                4. Hosting &amp; Uptime
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your website is hosted on CalTech Web&apos;s managed servers.
                Hosting, SSL, and infrastructure maintenance are included in your
                monthly subscription at no additional charge. We target 99.9%
                uptime. In the event of unplanned downtime, we will work to
                restore service as quickly as possible.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                5. Billing &amp; Payment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your subscription is billed monthly. Your first payment is due at
                sign-up. Subsequent payments are automatically charged on the same
                date each month. Payments are processed securely through our
                payment provider.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If a payment fails, we will notify you via email. Service
                continues during a 7-day grace period while you update your
                payment method. After 7 days without successful payment, your
                website may be temporarily suspended until the balance is resolved.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                6. Cancellation Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may cancel your subscription at any time by emailing{" "}
                <a
                  href="mailto:support@caltechweb.com"
                  className="text-blue-600 hover:underline"
                >
                  support@caltechweb.com
                </a>{" "}
                or calling{" "}
                <a href="tel:5592823075" className="text-blue-600 hover:underline">
                  (559) 282-3075
                </a>
                . There are no cancellation fees and no long-term contracts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon cancellation, your website will remain live through the end
                of your current billing period. After that period ends, your
                website will be taken offline. <strong>You keep your website files.</strong>{" "}
                We will provide an export of your website upon request so you can
                host it elsewhere.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                7. Refund Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are not satisfied with your website after launch, contact
                us and we will make it right. Brandon personally guarantees that
                if you are unhappy with the service, we will refund your most
                recent monthly payment and provide you with all of your website
                files to keep, no questions asked.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Refund requests must be submitted within 30 days of your website
                launch or the most recent billing date. Refunds are processed
                within 5–10 business days to your original payment method.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Setup fees, if any, are non-refundable after your website has
                entered active development (typically within 24 hours of sign-up).
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                8. Content Ownership
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You retain full ownership of all content you provide to us
                (logos, photos, text, brand assets). The website design created
                by CalTech Web for you is licensed to you for as long as your
                subscription is active. Upon cancellation, you receive your
                website files and may use them freely.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Questions about this fulfillment policy or your service? Reach
                out any time:
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="mailto:support@caltechweb.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
                >
                  <Mail className="w-4 h-4" />
                  support@caltechweb.com
                </a>
                <a
                  href="tel:5592823075"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
                >
                  <Phone className="w-4 h-4" />
                  (559) 282-3075
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
