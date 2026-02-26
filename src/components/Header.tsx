import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import MobileNav from "@/components/MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/web-design-portfolio/" },
  { label: "Pricing", href: "/web-design-pricing/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/brandon-hopkins/" },
  { label: "Support", href: "/support/" },
];

export default function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-blue-600 text-white text-center py-2.5 px-4 text-sm font-medium leading-snug">
        <span className="hidden sm:inline">Professional websites for small businesses - </span>
        <span className="font-extrabold">$99/month</span>
        <span className="opacity-60 mx-1.5">·</span>
        <span>Unlimited updates, hosting &amp; support all included.</span>
        <span className="opacity-60 mx-1.5 hidden sm:inline">·</span>
        <Link
          href="/web-design-pricing/"
          className="hidden sm:inline underline font-semibold hover:text-blue-100 transition-colors ml-0.5"
        >
          Schedule a Call →
        </Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/logo.png"
                alt="CalTech Web"
                width={190}
                height={64}
                sizes="190px"
                className="h-8 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              {navLinks.map(({ label, href }) => (
                <NavLink key={label} href={href} label={label} />
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:5592823075"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (559) 282-3075
              </a>
              <Link
                href="/free-website-report-card/"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Free Site Analysis
              </Link>
              <Link
                href="/web-design-pricing/"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
              >
                Schedule a Call
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
