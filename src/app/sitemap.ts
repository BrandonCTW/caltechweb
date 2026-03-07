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
    "/case-studies/",
    "/case-studies/madera-county-farm-bureau/",
    "/case-studies/medical-practice-website-design/",
    "/case-studies/sutoer-solutions/",
    "/nonprofit-website-design/",
    "/support/",
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
    "turbothao-nails",
    "specialized-plastic-surgery",
    "california-women-for-agriculture",
    "longhorn-fire-alarm-design",
    "central-baptist-church",
    "custom-cabling-solutions",
  ];

  // Priority map for key pages
  const priorityMap: Record<string, number> = {
    "/": 1.0,
    "/web-design-pricing/": 0.9,
    "/contact-us/": 0.9,
    "/get-a-free-instant-quote/": 0.9,
    "/free-website-report-card/": 0.8,
    "/web-design-portfolio/": 0.8,
    "/case-studies/": 0.8,
    "/affordable-church-websites/": 0.8,
    "/nonprofit-website-design/": 0.8,
    "/brandon-hopkins/": 0.7,
    "/blog/": 0.7,
    "/web-design-competitor-comparison/": 0.7,
    "/website-design-rfp-rfq/": 0.7,
  };

  const lastUpdated = new Date("2026-03-07");
  const blogLastUpdated = new Date("2026-02-25");

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: path === "/blog/" ? blogLastUpdated : lastUpdated,
      priority: priorityMap[path] ?? 0.6,
      changeFrequency: (path === "/" || path === "/blog/" ? "weekly" : "monthly") as "weekly" | "monthly",
    })),
    ...blogPosts.map(({ slug, date }) => ({
      url: `${baseUrl}/${slug}/`,
      lastModified: new Date(date),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}/`,
      lastModified: lastUpdated,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];
}
