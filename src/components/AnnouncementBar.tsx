import Link from "next/link";

export default function AnnouncementBar() {
  return (
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
  );
}
