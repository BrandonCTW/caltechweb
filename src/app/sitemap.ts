import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://caltechweb.com";

  const staticPages = [
    "/",
    "/brandon-hopkins/",
    "/web-design-pricing/",
    "/web-design-portfolio/",
    "/blog/",
    "/contact-us/",
    "/affordable-church-websites/",
    "/web-design-competitor-comparison/",
    "/get-a-free-instant-quote/",
    "/video-website-audit/",
    "/website-design-rfp-rfq/",
  ];

  // Blog posts with actual publication dates so Google can trust lastmod
  // and prioritize recrawling newer content
  const blogPosts: { slug: string; date: string }[] = [
    { slug: "affordable-web-design-company", date: "2026-02-18" },
    { slug: "small-business-website-redesign-signs", date: "2026-02-12" },
    { slug: "affordable-web-design-for-small-businesses", date: "2026-02-12" },
    { slug: "web-design-vs-web-hosting", date: "2026-02-05" },
    { slug: "99-month-vs-diy-website-builders", date: "2026-02-03" },
    { slug: "website-maintenance-requirements", date: "2026-01-30" },
    { slug: "dr-kanuri-40-percent-traffic-increase", date: "2026-01-28" },
    { slug: "church-website-support", date: "2026-01-22" },
    { slug: "church-website-design-essentials", date: "2026-01-20" },
    { slug: "who-updates-a-website-after-the-web-designer-finishes", date: "2026-01-15" },
    { slug: "website-speed-local-seo", date: "2026-01-12" },
    { slug: "post-sermons-online", date: "2026-01-05" },
    { slug: "nonprofit-website-design-tips", date: "2025-12-30" },
    { slug: "affordable-construction-company-website", date: "2025-12-28" },
    { slug: "affordable-real-estate-company-website", date: "2025-12-20" },
    { slug: "ultimate-guide-christian-ministry-websites", date: "2025-12-15" },
    { slug: "1-hour-support-why-it-matters", date: "2025-12-18" },
    { slug: "mobile-first-website-design", date: "2025-12-05" },
    { slug: "contact-page-converts", date: "2025-11-22" },
    { slug: "google-business-profile-website", date: "2025-11-10" },
  ];

  const portfolioSlugs = [
    "dr-arjun-kanuri",
    "calvary-chapel-los-alamitos",
    "fuentes-concrete",
    "origami-owl-chrissy-weems",
    "madera-county-farm-bureau",
    "alv-floors",
    "kingdom-international",
    "turbothao-nails",
    "specialized-plastic-surgery",
    "california-women-for-agriculture",
    "longhorn-fire-alarm-design",
    "central-baptist-church",
    "custom-cabling-solutions",
  ];

  const siteLaunchDate = new Date("2026-02-01");

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: siteLaunchDate,
    })),
    ...blogPosts.map(({ slug, date }) => ({
      url: `${baseUrl}/${slug}/`,
      lastModified: new Date(date),
    })),
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}/`,
      lastModified: siteLaunchDate,
    })),
  ];
}
