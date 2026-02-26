import Image from "next/image";
import Link from "next/link";

export default function FooterSimple() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="CalTech Web" width={166} height={56} sizes="166px" className="h-7 w-auto" />
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} CalTech Web. Affordable website design at $99/month.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:Brandon@CalTechWeb.com" className="hover:text-white transition-colors">
              Brandon@CalTechWeb.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
