import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://caltechweb.com";

  const staticPages = [
    "",
    "/brandon-hopkins",
    "/web-design-pricing",
    "/web-design-portfolio",
    "/blog",
    "/contact-us",
  ];

  const blogSlugs = [
    "dr-kanuri-40-percent-traffic-increase",
    "small-business-website-redesign-signs",
    "99-month-vs-diy-website-builders",
    "church-website-design-essentials",
    "website-speed-local-seo",
    "nonprofit-website-design-tips",
    "1-hour-support-why-it-matters",
    "mobile-first-website-design",
    "contact-page-converts",
    "google-business-profile-website",
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
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
    })),
    ...portfolioSlugs.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
