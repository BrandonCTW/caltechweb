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
    "/website-design-rfp-rfq/",
    "/free-website-report-card/",
    "/case-studies/madera-county-farm-bureau/",
    "/video-website-audit/",
  ];

  // Blog posts with actual publication dates so Google can trust lastmod
  // and prioritize recrawling newer content
  const blogPosts: { slug: string; date: string }[] = [
    { slug: "affordable-web-design-company", date: "2026-02-18" },
    { slug: "affordable-web-design-for-small-businesses", date: "2026-02-12" },
    { slug: "website-maintenance-requirements", date: "2026-01-30" },
    { slug: "medical-practice-website-design", date: "2026-01-28" },
    { slug: "best-church-website-builder", date: "2026-02-25" },
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
