import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="CalTech Web" width={166} height={56} sizes="166px" className="h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Affordable website design for small businesses, churches, and
              non-profits. $99/month all-inclusive.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="tel:5592823075" className="hover:text-white transition-colors">
                (559) 282-3075
              </a>
              <a href="mailto:Brandon@CalTechWeb.com" className="hover:text-white transition-colors">
                Brandon@CalTechWeb.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Web Design", "Website Hosting", "Monthly Updates", "Free Redesigns", "SEO Basics"].map((s) => (
                <li key={s}>
                  <Link href="/web-design-pricing/" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Small Businesses", href: "/affordable-web-design-company/" },
                { label: "Church Websites", href: "/affordable-church-websites/" },
                { label: "Non-Profits", href: "/nonprofit-website-design-tips/" },
                { label: "Construction", href: "/affordable-construction-company-website/" },
                { label: "Real Estate", href: "/affordable-real-estate-company-website/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", href: "/brandon-hopkins/" },
                { label: "Portfolio", href: "/web-design-portfolio/" },
                { label: "Pricing", href: "/web-design-pricing/" },
                { label: "Blog", href: "/blog/" },
                { label: "Free Report Card", href: "/free-website-report-card/" },
                { label: "Support", href: "/support/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} CalTech Web. All rights reserved. California-based, serving clients nationwide.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
