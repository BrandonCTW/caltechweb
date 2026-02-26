import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      // Old portfolio pages → /web-design-portfolio
      ...[
        "revival-grace-ministry",
        "blacke-house-co",
        "luana-wellness",
        "modolith",
        "nutrinae",
        "meritus-solutions-group",
        "shepherds-voice-evangelism",
        "provident-payments",
        "res-comm-madera",
        "shake-and-stir-bar-trucks",
        "sutoer",
        "mid-valley-southern-baptist-association",
        "north-star-content-solutions",
        "valuelegacy-advisors",
        "davids-plumbing",
        "the-heavenly-views",
        "doors-of-hope",
        "dynamic-tech-designs-inc",
        "dr-kari-bishop-kuhn",
        "regional-water-management-group",
        "madera-men-of-integrity",
        "madera-chowchilla-rcd",
        "madera-911-memorial",
        "james-ross-insurance",
        "john-jesensky",
        "oxygen-wellness-llc",
        "dr-duffys-cbd",
        "surfrider-pool-service",
        "smart-writing",
        "geekey-multi-tool",
        "elevated-thread",
        "mallards-at-the-wharf",
        "integrity-verifications",
        "trailwest-nashville",
        "words-of-encouragement",
        "5-dogs-range",
        "cen-cal-pumps",
        "alpharetta-sda",
      ].flatMap((slug) => [
        { source: `/portfolio/${slug}`, destination: "/web-design-portfolio/", permanent: true },
        { source: `/portfolio/${slug}/`, destination: "/web-design-portfolio/", permanent: true },
      ]),

      // Portfolio pages with different slugs
      { source: "/portfolio/chrissy-weems", destination: "/portfolio/origami-owl-chrissy-weems/", permanent: true },
      { source: "/portfolio/chrissy-weems/", destination: "/portfolio/origami-owl-chrissy-weems/", permanent: true },
      { source: "/portfolio/arjun-kanuri", destination: "/portfolio/dr-arjun-kanuri/", permanent: true },
      { source: "/portfolio/arjun-kanuri/", destination: "/portfolio/dr-arjun-kanuri/", permanent: true },
      { source: "/portfolio/fuentes-concrete-inc", destination: "/portfolio/fuentes-concrete/", permanent: true },
      { source: "/portfolio/fuentes-concrete-inc/", destination: "/portfolio/fuentes-concrete/", permanent: true },

      // WordPress artifact pages
      { source: "/category/affordable-websites", destination: "/blog/", permanent: true },
      { source: "/category/affordable-websites/", destination: "/blog/", permanent: true },
      { source: "/category/blog", destination: "/blog/", permanent: true },
      { source: "/category/blog/", destination: "/blog/", permanent: true },
      { source: "/author/ctwadmin", destination: "/brandon-hopkins/", permanent: true },
      { source: "/author/ctwadmin/", destination: "/brandon-hopkins/", permanent: true },
      { source: "/tag/web-design", destination: "/blog/", permanent: true },
      { source: "/tag/web-design/", destination: "/blog/", permanent: true },
      { source: "/tag/web-design-vs-web-hosting", destination: "/web-design-vs-web-hosting/", permanent: true },
      { source: "/tag/web-design-vs-web-hosting/", destination: "/web-design-vs-web-hosting/", permanent: true },
      { source: "/tag/web-hosting", destination: "/blog/", permanent: true },
      { source: "/tag/web-hosting/", destination: "/blog/", permanent: true },
      { source: "/fulfillment", destination: "/terms-and-conditions/", permanent: true },
      { source: "/fulfillment/", destination: "/terms-and-conditions/", permanent: true },
    ];
  },
};

export default nextConfig;
