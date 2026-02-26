import { Home, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-8xl sm:text-9xl font-extrabold text-white/20 mb-4 select-none">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              href="/support/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors"
            >
              <Search className="w-4 h-4" />
              Contact Support
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              {
                label: "View Our Work",
                href: "/web-design-portfolio/",
                desc: "See 800+ websites we've designed",
              },
              {
                label: "See Pricing",
                href: "/web-design-pricing/",
                desc: "$99/month — everything included",
              },
              {
                label: "Read the Blog",
                href: "/blog/",
                desc: "Tips for growing your business online",
              },
            ].map(({ label, href, desc }) => (
              <Link
                key={label}
                href={href}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                  {label}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </p>
                <p className="text-sm text-blue-200">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
