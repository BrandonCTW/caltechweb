import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  ArrowLeft,
  Clock,
  Tag,
  TrendingUp,
  Zap,
  CheckCircle,
  Lightbulb,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type ContentSection = {
  heading: string;
  body: string[];
  list?: string[];
  tip?: string;
  included?: string;
  quote?: { text: string; author: string; role?: string; photo?: string };
};

type BlogPost = {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  readTime: string;
  date: string;
  intro: string;
  sections: ContentSection[];
  conclusion: string;
  related: string[];
};

// ─── Blog Post Data ───────────────────────────────────────────────────────────

const blogPosts: BlogPost[] = [
  {
    slug: "medical-practice-website-design",
    category: "Case Study",
    categoryColor: "bg-green-100 text-green-700",
    title:
      "Medical Practice Website Design: How Dr. Kanuri Got 40% More Traffic and 2× More Patients",
    metaTitle:
      "Medical Practice Website Design Case Study | CalTech Web",
    metaDescription:
      "Dr. Kanuri's medical site redesign: +40% organic traffic, 2× appointment conversions, 12+ new patients/month. See exactly what we changed in 5 days.",
    excerpt:
      "A plastic surgery practice with an outdated site was losing new patients to a slow, untrustworthy website. Here is exactly what we built and what changed in 90 days.",
    readTime: "6 min read",
    date: "January 28, 2026",
    intro:
      "Most medical practices have the same problem: the doctor is excellent, referrals keep the calendar full, but the website is silently costing them new patients.\n\nThat was Dr. Arjun Kanuri's situation. His plastic surgery practice in the DC/MD/VA area was thriving on word-of-mouth, but people were finding him on Google, landing on a slow, outdated site, and leaving before they ever booked.\n\n\"I had patients tell me they almost didn't come in because the website looked old,\" he told me. \"That's when I knew something had to change.\"\n\nMedical practice website design is different from a standard business site. Patients are making high-stakes decisions about their health. Trust, clarity, and speed aren't nice-to-haves, they're the entire game. Here is exactly what we built and what happened over the next 90 days.",
    sections: [
      {
        heading: "What Was Wrong With the Old Site",
        body: [
          "Dr. Kanuri's previous website was built in 2019. By 2025, it was a liability.",
          "The site loaded in 7.2 seconds on mobile, nearly 5× slower than the 1.5-second threshold where Google starts penalizing rankings. It wasn't mobile-responsive, so elements overflowed on smaller screens. The \"Book Appointment\" button was buried three clicks deep.",
          "There was no clear information about specialties, insurance acceptance, or what patients could expect at their first visit. Most critically, there were no trust signals, no patient reviews, no professional photo, no credentials front and center.",
          "For any business, that's a problem. For a medical practice, it's a patient-repelling liability. People choosing a surgeon need to feel confident before they even pick up the phone.",
        ],
        tip: "Pages that load slower than 3 seconds see a 53% abandonment rate on mobile, according to Google. A medical practice website that loads slowly isn't just annoying, it's handing patients to competitors.",
      },
      {
        heading: "What We Built and Why Every Decision Mattered",
        body: [
          "We launched the redesigned site in 5 days. Every element of the new medical practice website design was driven by a specific conversion or SEO goal.",
        ],
        list: [
          "Load time: Dropped from 7.2 seconds to 1.8 seconds on mobile. Optimized images, modern hosting infrastructure, and clean Next.js code.",
          "Mobile-first: 68% of Dr. Kanuri's traffic came from phones. We designed the mobile experience first, then scaled up, not the other way around.",
          "Above-the-fold CTA: 'Book an Appointment' appears on every page without scrolling. One tap from anywhere on the site.",
          "Trust-first homepage: Professional headshot, board certifications, patient review highlights, and insurance information visible without scrolling.",
          "Local SEO structure: Medical practice schema markup, optimized title tags for his specialty and location, and a fully configured Google Business Profile integration.",
          "Simplified navigation: Went from 11 menu items to 4. Patients could find what they needed in seconds instead of getting lost.",
          "HIPAA-conscious contact forms: Secure inquiry forms that ask the right questions upfront without collecting protected health information.",
        ],
      },
      {
        heading: "The Results at 90 Days",
        body: [
          "We track the same core metrics for every client: organic traffic, conversion rate, bounce rate, and session duration. Here is what Dr. Kanuri's analytics showed 90 days after launch, compared to the same period the prior year.",
        ],
        list: [
          "+40% organic traffic, more prospective patients finding the practice through Google.",
          "2× appointment conversion rate, the same number of visitors was booking at twice the rate.",
          "Bounce rate: 74% → 38%, visitors were reading the site instead of immediately leaving.",
          "Session duration: 0:48 → 2:12, people were exploring services, reading credentials, reviewing patient stories.",
          "Mobile conversions: Near zero before launch. Now the primary source of new appointment requests.",
          "12+ additional new patient inquiries per month, directly attributed to the website.",
        ],
        tip: "The 40% traffic increase came from better technical SEO and site structure. The 2× conversion increase came from better design and clearer calls to action. Both mattered, but the conversion improvement had the bigger immediate impact on new patient revenue.",
      },
      {
        heading: "In Dr. Kanuri's Words",
        body: [],
        quote: {
          text: "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
          author: "Dr. Arjun Kanuri, MD, MBA",
          role: "Plastic & Reconstructive Surgery, DC/MD/VA",
        },
      },
      {
        heading: "What This Cost and What It Returns",
        body: [
          "The redesign, hosting, ongoing updates, and support are all included in CalTech Web's $99/month plan. Over 90 days, that is $297 in total investment.",
          "At 12 additional patient inquiries per month, even converting a fraction of those into consultations pays for years of the website in a single month. That is the math medical practices need to be running. Not 'how much does a website cost?' but 'how much is a non-performing website costing me?'",
          "Good medical practice website design is not about looking impressive. It is about getting found, building trust in 8 seconds, and making it easy to book. That is the entire brief. We built to that spec.",
        ],
      },
    ],
    conclusion:
      "If your medical practice has a slow, outdated, or low-converting website, the fix does not have to be complicated or expensive. Dr. Kanuri's new site launched in 5 days and costs $99/month. The results were measurable within 90 days.\n\nIf you'd like a free, honest review of your current site, what it's doing well, what it's costing you, and what's realistically possible, reach out. No sales pitch, no obligation.",
    related: [
      "affordable-web-design-company",
      "affordable-web-design-for-small-businesses",
      "website-maintenance-requirements",
    ],
  },
  {
    slug: "affordable-web-design-company",
    category: "Web Design",
    categoryColor: "bg-blue-100 text-blue-700",
    title:
      "Affordable Web Design Company: Custom Websites for $99/Month, No Templates, No Contracts",
    metaTitle:
      "Affordable Web Design Company | Custom Sites $99/Mo | CalTech Web",
    metaDescription:
      "Affordable web design services starting at $99/month. Custom design, hosting, SEO, and unlimited updates included. No contracts. 800+ websites built for small businesses.",
    excerpt:
      "Most affordable web design companies sell you a template and disappear. We build custom websites for $99/month with hosting, SEO, unlimited updates, and same-day support included.",
    readTime: "7 min read",
    date: "February 18, 2026",
    intro:
      "Every small business owner reaches the same frustrating crossroads: you need a professional website, but the quotes are $5,000 to $10,000. So you look for a more affordable web design company, and the options get worse. Freelancers who ghost after launch. Template mills that give you the same site as your competitor. DIY builders that eat 80 hours of your time.\n\nI built CalTech Web to solve this problem. After building over 800 custom websites for small businesses, I can tell you that affordable web design does not require compromise. It requires a better business model.\n\nHere is exactly how we deliver custom web design services for $99/month, what that includes, and why thousands of dollars in upfront costs are completely unnecessary for most small businesses.",
    sections: [
      {
        heading: "What 'Affordable Web Design' Actually Costs at Most Companies",
        body: [
          "Search for \"cheap web design\" or \"low cost web design company\" and you will find three types of businesses. The first buys a $59 template, drops your logo on it, and charges $1,500 for \"custom\" work. The second uses Wix or Squarespace, charges a premium for what is essentially a DIY tool, and walks away. The third outsources everything overseas, where time zones and language barriers mean your site technically works but sounds nothing like your business.",
          "The hidden cost is what happens next. The template site looks generic, so customers do not trust it. The DIY builder site loads slowly because nobody optimized it. The outsourced site has content that reads like it was written by someone who has never set foot in your city. Six months later, when you need changes, the designer has moved on. You are stuck paying someone new to fix what should have been done right the first time.",
          "I have rebuilt hundreds of websites from exactly these situations. The business owner spent $1,500 to $3,000, never felt confident about the result, and eventually started over. That is not affordable web design. That is paying twice.",
        ],
      },
      {
        heading: "Custom Web Design Services for $99/Month, Everything Included",
        body: [
          "Our affordable web design model works differently. You pay $99/month. That single payment covers your entire web presence: custom design, professional hosting, SSL security, unlimited updates, and ongoing support. No setup fees. No contracts. Cancel anytime.",
          "People ask how we keep costs this low without cutting corners. The answer is simple: we have built over 800 websites. That volume created systems and processes that let us deliver high quality work efficiently. We do not pay for a downtown office, a sales team, or layers of project management. Every dollar we save on overhead goes directly into keeping your costs down.",
          "Here is exactly what your $99/month includes:",
        ],
        list: [
          "Custom website design built around your business, your industry, and your customers",
          "Professional hosting on fast, modern infrastructure with SSL certificates",
          "Unlimited content updates: new pages, text changes, photos, menus, team bios, anything you need",
          "Free complete redesigns whenever you want a fresh look, at no extra charge",
          "Same-day support with 93% of requests completed in under 1 hour",
          "SEO fundamentals built in: title tags, meta descriptions, schema markup, image optimization, and fast load times",
          "Mobile-first responsive design tested on every screen size",
          "Contact forms, maps, click-to-call buttons, and lead capture built into every site",
        ],
        tip: "The typical web design agency charges $3,000 to $10,000 upfront, $50 to $150/month for hosting, and $75 to $150/hour for updates. Over two years, that adds up to $5,000 to $15,000 or more. Our two-year total: $2,376. You save thousands and get more included services.",
      },
      {
        heading: "Affordable Web Design and SEO That Actually Drives Traffic",
        body: [
          "A beautiful website that nobody finds is a waste of money. That is why every site we build includes SEO fundamentals from day one. Most affordable web design companies treat search engine optimization as an upsell. We treat it as a requirement.",
          "Every CalTech Web site launches with proper title tags and meta descriptions written for your target keywords. We add structured data markup so Google understands your business type, location, hours, and services. We optimize images so your pages load fast on any connection. We build mobile-first because Google uses mobile performance as a ranking factor.",
          "This is not a full SEO campaign with monthly link building and content strategy. It is the technical foundation that gives your site the best possible chance of ranking in local search results. For many small businesses, these fundamentals alone are enough to start appearing on page one for their core services, especially in local markets where competitors have outdated or poorly built websites.",
          "If you need more aggressive SEO, we offer that too. But the point is this: you should not have to pay extra just to have a website that Google can properly read and index. That should be standard, and with us, it is.",
        ],
      },
      {
        heading: "Affordable Web Design Services for Small Business Owners Who Value Their Time",
        body: [
          "The real cost of a website is not just the price tag. It is the time you spend managing it. With a DIY builder, every small change falls on you. With a traditional agency, every update comes with a billable hour. With a cheap freelancer, you spend time chasing someone who may not respond for days.",
          "Our affordable website development services are designed for business owners who would rather run their business than manage a website. Need to update your hours for the holidays? Send a text. Adding a new service? Shoot us an email. Want to swap out photos or rewrite your about page? Just ask. We handle it, usually the same day.",
          "This is not a call center. You reach Brandon directly. There is no ticket queue, no automated response, and no waiting three business days for a simple text change. That direct access is what makes this a true web design service for small business owners, not just a product you are left to figure out on your own.",
        ],
        quote: {
          text: "I was skeptical that $99/month could get me a real website. Three years later, I've referred six other businesses to CalTech Web. The site looks professional, loads fast, and Brandon updates it the same day I ask.",
          author: "Mike R.",
          role: "General Contractor, Sacramento",
        },
      },
      {
        heading: "800+ Custom Websites Built for Every Industry",
        body: [
          "We have built custom websites for doctors, lawyers, contractors, restaurants, churches, nonprofits, real estate agents, accountants, fitness studios, auto shops, and dozens of other industries. Every one is designed from scratch. Every one includes ongoing support.",
          "That experience is part of what makes us an affordable web design company that does not sacrifice quality. When you have built 800+ sites, you have already solved virtually every challenge a small business website can present. Booking integrations, online menus, patient portals, service galleries, review widgets, we have built them all multiple times. That efficiency means we deliver faster and charge less than a company figuring it out for the first time.",
          "But efficiency does not mean cookie-cutter work. Every project starts with a conversation about your business, your customers, and what you need the website to accomplish. A local web design company that actually listens is rare. We make it the standard.",
        ],
      },
      {
        heading: "The Guarantee: Full Refund, You Keep the Website",
        body: [
          "If you are not satisfied with your website, you get a full refund. And you keep the site. No fine print, no arguing, no cancellation fee. That is the entire policy.",
          "We can make this guarantee because it almost never gets used. When you build a custom site based on an actual conversation with the business owner, use proven design principles, and deliver it in 5 to 7 days with ongoing support afterward, people are happy with the result. Our retention rate across 800+ clients speaks louder than any promise.",
          "This is what separates a genuinely affordable web design service from a cheap one. Cheap means low price and low quality. Affordable means professional results at a price that makes sense for a small business. We figured out how to deliver the second option by eliminating the overhead that most agencies pass along to you.",
        ],
      },
    ],
    conclusion:
      "You have options when looking for an affordable web design company. You can gamble on a freelancer, spend 80 hours wrestling with a DIY builder, or hand an agency $5,000 and hope for the best. Or you can get a custom, professional website for $99/month with hosting, SEO, unlimited updates, and a guarantee that you will be satisfied.\n\nCall or email us. We will review your current site for free and tell you exactly what we would do differently. No pressure, no pitch, just a straightforward conversation about what your business needs.",
    related: [
      "affordable-web-design-for-small-businesses",
      "website-maintenance-requirements",
    ],
  },
  {
    slug: "affordable-web-design-for-small-businesses",
    category: "Small Business",
    categoryColor: "bg-green-100 text-green-700",
    title:
      "Affordable Web Design for Small Businesses: What $99/Month Actually Gets You",
    metaTitle:
      "Affordable Web Design for Small Businesses | CalTech Web",
    metaDescription:
      "Affordable web design for small businesses doesn't mean cheap. Here is exactly what $99/month gets you: custom design, hosting, updates, and support included.",
    excerpt:
      "Small businesses need websites that work without breaking the budget. Here's a transparent breakdown of what $99/month actually includes and how it compares to doing it yourself.",
    readTime: "5 min read",
    date: "February 12, 2026",
    intro:
      "Every small business owner I talk to has the same concern: they know they need a good website, but they're not sure they can afford one. And I get it. When agencies are quoting $5,000-$15,000 and freelancers are a gamble, it feels like professional web design is out of reach.\n\nBut here's what most people don't realize: affordable web design for small businesses doesn't mean settling for less. It means finding the right model. And the right model, in my experience building 800+ small business websites, is $99/month with everything included.\n\nLet me break down exactly what that means.",
    sections: [
      {
        heading: "The Full Breakdown: What $99/Month Includes",
        body: [
          "I'm going to be completely transparent here because the number one question I get is \"what's the catch?\" There is no catch. Here's the complete list:",
        ],
        list: [
          "Custom website design: built from scratch around your business, your industry, and your customers. Not a template.",
          "Professional hosting: fast, reliable, with SSL security certificates included. No separate hosting bill.",
          "Unlimited updates: need to change your hours? Add a new service? Update your team photo? Just ask. It's included.",
          "Free redesigns: want a completely new look in a year? Two years? We'll rebuild it at no extra charge.",
          "Fast support: 93% of requests completed in under 1 hour. You contact Brandon directly, not a ticket system.",
          "SEO fundamentals: proper title tags, meta descriptions, mobile-responsive design, fast load times, and schema markup.",
          "5-7 day launch time: most sites are live within a week of our initial conversation.",
        ],
        tip: "There's no setup fee, no contract, and no cancellation penalty. If you decide to leave, you can cancel anytime. And if you're not satisfied, you get a full refund and keep the website.",
      },
      {
        heading: "How This Compares to DIY Website Builders",
        body: [
          "The appeal of Wix, Squarespace, and GoDaddy is obvious: they're cheap upfront and you can do it yourself. But let's look at the real numbers.",
          "A Squarespace Business plan runs $33/month. But that doesn't include your time. First-time users typically spend 40-80 hours building a site. If your time is worth $50/hour, that's $2,000-$4,000 in labor before the site even launches. Then there's the ongoing time: every update, every change, every troubleshooting session is on you.",
          "With CalTech Web, you spend zero hours on your website. You tell us what you need, and we handle it. Over the course of a year, that easily saves you 50+ hours, time you can spend actually running your business.",
          "And there's the quality gap. A professionally designed site converts better than a DIY site. Even a small improvement in conversion rate, from 1% to 2%, can mean dozens of additional leads per year. That's real revenue that more than pays for the $99/month.",
        ],
      },
      {
        heading: "How This Compares to Hiring an Agency",
        body: [
          "Traditional web design agencies charge $3,000-$10,000 for a small business website. Then they charge $50-$150/month for hosting. Then they charge $75-$150/hour for any updates or changes you need.",
          "Over two years, a basic agency relationship easily costs $7,000-$15,000. The CalTech Web equivalent over two years: $2,376. And you get more updates, faster support, and free redesigns, things agencies charge extra for.",
          "The reason agencies charge so much isn't necessarily because their work is better. It's because they have overhead: an office, a sales team, project managers, account executives. All of that gets billed to you. We don't have those costs, and we don't pass them on.",
        ],
        quote: {
          text: "I spent $4,500 on a website from a local agency. Two years later, it looked dated and they wanted another $3,000 for a redesign. Switched to CalTech Web: better site, $99/month, and I get redesigns included whenever I want.",
          author: "Sarah T.",
          role: "Small Business Owner, Fresno",
        },
      },
      {
        heading: "Who This Is For (And Who It's Not For)",
        body: [
          "The $99/month model works best for small businesses that need a professional web presence but don't have the budget or desire to manage a website themselves. That includes local service businesses, medical practices, law firms, restaurants, churches, non-profits, contractors, real estate agents, and really any small business that relies on local customers.",
          "Who is it not for? If you need a complex web application, an e-commerce store with thousands of products, or a site with custom software integrations, you'll likely need a more specialized solution. For 90% of small businesses, though, a well-designed informational and lead-generation website is exactly what they need, and that's what we build.",
          "The goal is simple: give you a website that looks professional, loads fast, ranks well in search engines, and converts visitors into customers. For $99/month. Everything included.",
        ],
      },
    ],
    conclusion:
      "Affordable web design for small businesses is not about finding the cheapest option. It's about finding the option that delivers the most value for the least cost and hassle. That's what $99/month is designed to do.\n\nIf your current website isn't pulling its weight, or if you don't have one yet, let's talk. I'll give you an honest assessment of what you need and what it would look like. No pressure, no obligation.",
    related: [
      "affordable-web-design-company",
      "website-maintenance-requirements",
    ],
  },
  {
    slug: "website-maintenance-requirements",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title:
      "Website Maintenance Requirements: What Every Business Owner Needs to Know",
    metaTitle:
      "Website Maintenance Requirements | CalTech Web",
    metaDescription:
      "Website maintenance requirements include hosting, SSL, security updates, backups, and content updates. Learn what your business needs.",
    excerpt:
      "Your website doesn't stop needing attention after it launches. Here is what ongoing maintenance actually involves and why ignoring it can cost your business.",
    readTime: "5 min read",
    date: "January 30, 2026",
    intro:
      "Most business owners think about their website like a sign in front of their building: put it up once and it's done. But a website is more like a car; it needs regular maintenance to keep running safely and effectively.\n\nThe problem is that nobody tells you this upfront. Your web designer builds the site, launches it, and moves on. Six months later, something breaks, and you're scrambling to figure out who to call and what went wrong.\n\nHere's what website maintenance actually involves, what happens when you skip it, and how to handle it without adding another job to your plate.",
    sections: [
      {
        heading: "Hosting and Uptime: The Foundation You Can't See",
        body: [
          "Your website lives on a server somewhere. That server needs to be fast, reliable, and secure. Hosting is the single most important piece of website infrastructure, and it's the one most business owners know the least about.",
          "Cheap shared hosting (the $3-$5/month plans from companies like GoDaddy or Bluehost) puts your site on a server with hundreds or thousands of other websites. When those other sites get traffic spikes or security issues, your site slows down or goes offline too. You're sharing resources with strangers.",
          "Good hosting means your site loads fast, stays online reliably, and has the server resources to handle traffic without choking. It also means having proper backup systems so your site can be restored quickly if anything goes wrong.",
        ],
        tip: "A good hosting environment should deliver 99.9% uptime and page load times under 2 seconds. If your site goes down regularly or loads slowly, the hosting is the first place to look.",
      },
      {
        heading: "SSL Certificates and Security Updates",
        body: [
          "An SSL certificate is what puts the padlock icon next to your URL and changes your address from http:// to https://. It encrypts data between your visitor's browser and your server. Without it, Google Chrome literally labels your site as \"Not Secure,\" which is an instant trust killer for any business.",
          "SSL certificates need to be renewed regularly. If they expire, your site shows a full-screen security warning that scares away every visitor. This is one of the most common website problems I see: an expired SSL that nobody noticed until a customer called to say the site looks broken.",
          "Beyond SSL, there are software security updates. If your site runs on WordPress or any content management system, the core software, themes, and plugins all need regular updates. Outdated software is the number one way websites get hacked. And when a small business site gets hacked, it's not just an inconvenience. Google may flag your site as dangerous, which can take weeks to resolve.",
        ],
      },
      {
        heading: "Backups, Content Updates, and Performance Monitoring",
        body: [
          "Regular backups are your insurance policy. If your site gets hacked, breaks during an update, or the server has a catastrophic failure, a recent backup means you can restore everything quickly instead of rebuilding from scratch.",
          "Content updates are the maintenance task most business owners think about. Hours change, services evolve, team members come and go, prices adjust. Every time something changes in your business, the website should reflect it. Outdated information doesn't just confuse customers; it actively damages your credibility.",
          "Performance monitoring means regularly checking that your site loads quickly, all links work, forms submit properly, and nothing is broken. It's the kind of thing no one thinks about until a customer mentions that your contact form hasn't been working for three weeks.",
        ],
        list: [
          "Daily automated backups with at least 30-day retention",
          "SSL certificate monitoring and automatic renewal",
          "Software and security patch updates applied promptly",
          "Monthly performance checks for speed, broken links, and form functionality",
          "Content updates as your business evolves",
          "Domain name renewal tracking so your site doesn't go dark unexpectedly",
        ],
      },
      {
        heading: "How CalTech Web Handles All of This for $99/Month",
        body: [
          "This is the part where everything clicks. All of the maintenance I just described (hosting, SSL, security updates, backups, content updates, performance monitoring) is included in CalTech Web's $99/month plan.",
          "You don't have to think about hosting. You don't have to remember to renew your SSL certificate. You don't have to worry about whether your WordPress plugins have a vulnerability. You don't have to learn how to make a backup. All of it is handled.",
          "When you need a content update, you email or call us and 93% of the time it's done in under an hour. When something needs a security patch, it's applied proactively. You never even know about it because you don't have to.",
          "That's the difference between having a website and having a website that's actually maintained. One is an asset. The other is a liability waiting to become a problem.",
        ],
      },
    ],
    conclusion:
      "Website maintenance isn't optional; it's the difference between a site that works for your business and one that quietly becomes a liability. Hosting, security, backups, updates, and monitoring all need to happen consistently.\n\nIf you're currently responsible for your own website maintenance and you'd rather not be, CalTech Web's $99/month plan covers all of it. No surprises, no extra charges, no forgotten renewals.",
    related: [
      "affordable-web-design-company",
      "affordable-web-design-for-small-businesses",
    ],
  },
  {
    slug: "best-church-website-builder",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title:
      "Best Church Website Builder in 2026: Honest Comparison for Small and Mid-Size Churches",
    metaTitle:
      "Best Church Website Builder (2026) | Honest Comparison | CalTech Web",
    metaDescription:
      "Top church website builders (2026): Squarespace, Wix, Faithlife, Ministry Designs, Ekklesia360, CalTech Web. Pricing, features, and who each one is right for.",
    excerpt:
      "There are dozens of church website builders on the market, but most aren't built for how churches actually work. Here is an honest comparison of the top options, what each gets right, what it gets wrong, and who each one is best for.",
    readTime: "9 min read",
    date: "February 25, 2026",
    intro:
      "Every church needs a website. But choosing the right platform to build it on, or the right partner to build it for you, is one of the most consequential decisions a church communications team makes.\n\nGet it wrong and you're stuck with a slow, template-locked site that your staff dreads updating. Get it right and your website becomes a genuinely powerful tool for welcoming first-time visitors, keeping your congregation engaged, and extending your ministry's reach all week long.\n\nI've built church websites for over 15 years and have worked with churches ranging from 40-member congregations to multi-campus ministries. Here is my honest comparison of the best church website builders available in 2026, what each one actually delivers, what it gets wrong, and which situations each one is best suited for.",
    sections: [
      {
        heading: "What Makes a Church Website Builder Worth Using",
        body: [
          "Before comparing platforms, it's worth establishing what a church website actually needs to do well. A generic website builder checklist doesn't apply here.",
          "First-time visitor experience matters more than almost anything else. Someone searching for a church in your city will spend 15-30 seconds deciding whether your church looks right for them. Service times, address, and a sense of your congregation's personality need to be immediately apparent.",
          "Online giving integration has to be seamless and mobile-friendly. A significant portion of church revenue now comes through online giving. Complicated or broken giving flows cost churches real money.",
          "Sermon archives need to work as a genuine content library, searchable, organized by series, and easy to keep current. The sermon archive is often the most visited section of a church website by regular members.",
          "Event management needs to stay current without requiring significant technical effort. An outdated events calendar signals neglect and erodes trust.",
          "Finally, most churches don't have a full-time web developer. The platform and support model need to match the actual capacity of your staff or volunteers.",
        ],
        list: [
          "First-time visitor clarity: service times, location, and congregation culture visible in seconds",
          "Mobile-first design: more than 60% of church website traffic comes from phones",
          "Online giving integration with trusted processors (Pushpay, Tithely, Stripe)",
          "Usable sermon archive: searchable, organized by series, easy to maintain",
          "Events calendar that stays current without technical expertise",
          "Ongoing support that matches your staff's actual technical capacity",
        ],
      },
      {
        heading: "Squarespace: Beautiful Templates, Limited Church Features",
        body: [
          "Squarespace is the most polished general-purpose website builder on the market. Its templates are genuinely beautiful and its drag-and-drop editor is more intuitive than most. For churches with a strong visual identity and a staff member willing to invest time in learning the platform, it can produce excellent results.",
          "But Squarespace was built for portfolios, restaurants, and e-commerce, not churches. There is no built-in sermon archive structure, no native event registration for ministry-specific needs, and online giving requires a third-party embed that often breaks on mobile updates.",
          "Pricing runs $23-$65/month depending on the plan, but that doesn't include a developer to build the site, a designer to make it look right, or ongoing support when something breaks. For a church with no dedicated web staff, Squarespace is a significant time investment that rarely produces the result you're imagining when you sign up.",
        ],
        tip: "Squarespace is best for: churches with a staff member who enjoys design and has 10-20 hours to invest in building and maintaining the site. Not recommended for: congregations without dedicated web staff who need the site to 'just work.'",
      },
      {
        heading: "Wix: Flexible but Requires Real Time Investment",
        body: [
          "Wix offers more flexibility than Squarespace through its App Market and its ADI (Artificial Design Intelligence) builder. You can add a wide variety of third-party apps for giving, event management, and sermon hosting.",
          "The challenge is that all of this flexibility comes at the cost of time and complexity. Building a genuinely good church website on Wix, one that has all the features a church needs, works well on mobile, and loads quickly, typically takes 40-80 hours for a first-time user. And ongoing management requires someone comfortable navigating the platform.",
          "Wix plans start at $17/month for basic sites, but church-appropriate plans run $29-$36/month. Add third-party apps for giving and sermon management, and the monthly cost grows. More importantly, every hour your church volunteer spends managing the website is an hour not spent on ministry.",
          "SEO is also a known weakness. Wix has improved significantly, but it still produces heavier code than purpose-built or developer-built sites, which can affect load speed and rankings, both of which Google cares about.",
        ],
      },
      {
        heading: "Faithlife Sites: Purpose-Built for Churches, but Ecosystem-Dependent",
        body: [
          "Faithlife (the company behind Logos Bible Software) offers a church website platform specifically designed for ministry organizations. It integrates natively with Faithlife's church management tools, giving platform, and small group software.",
          "If your church is already invested in the Faithlife ecosystem, using Proclaim for worship slides, Faithlife Giving, or their church management system, then Faithlife Sites makes sense. The tight integration is genuinely useful, and the platform understands church-specific needs better than any general builder.",
          "If you're not in the Faithlife ecosystem, the platform is less compelling. Pricing ranges from free (very limited) to $99-$199/month for plans with the features most churches need. Setup is not trivial, and the design aesthetic leans utilitarian compared to what Squarespace or a custom-designed site can produce.",
          "Faithlife Sites is best for: churches already using Faithlife tools who want seamless integration. Not ideal for: churches looking for design flexibility or those outside the Faithlife ecosystem.",
        ],
      },
      {
        heading: "Ekklesia360 and Ministry Designs: Dedicated Church Platforms",
        body: [
          "Ekklesia360 and Ministry Designs are purpose-built for churches and have been serving congregations for over a decade. Both include native sermon archives, event management, online giving integration, and ministry-specific design templates.",
          "These platforms understand the operational reality of a church office. Templates are designed around church content models, not restaurant menus or portfolio pages. Support teams understand ministry terminology. The workflow matches how a communications director actually thinks about managing church content.",
          "The trade-off is cost and flexibility. Ekklesia360 plans start at around $100-$200/month, with setup fees that can run $500-$2,500 depending on the build level. Ministry Designs is similarly priced. For a smaller congregation, these costs can feel significant.",
          "Design flexibility is also limited. Both platforms use template systems that are church-optimized but not custom. If your church wants a website that truly reflects your unique identity, not a modified version of a template twenty other churches are using, you'll hit a ceiling.",
        ],
        tip: "If budget is not a constraint and your church needs a fully managed, church-specific platform with deep integration for giving and member management, these platforms deserve serious consideration. For smaller churches, the monthly cost may not be justified by the features you'll actually use.",
      },
      {
        heading: "CalTech Web: Custom Design with Full Ongoing Support",
        body: [
          "Full disclosure: I'm the founder of CalTech Web. But I'm including us here because we fill a genuine gap that the other options don't address: a fully custom, professionally designed church website with complete ongoing support, at a price that works for smaller and mid-size congregations.",
          "At $99/month with everything included, CalTech Web is priced below most dedicated church platforms. But unlike DIY builders, you don't build the site yourself, we build it for you. And unlike most agencies, support doesn't end at launch. Unlimited content updates, free redesigns, hosting, SSL, and priority support are all included in the monthly fee.",
          "For churches that want their website to reflect their specific visual identity and congregational character, not a template, this matters. Every CalTech Web church site is built from scratch around the church's brand, photography, and ministry priorities.",
          "Online giving integration, sermon archive setup, event calendars, ministry page structures, staff bios, all of it is handled and maintained. When your sermon archive needs a new series added, you email or call us directly. Ninety-three percent of updates are completed in under one hour.",
          "The model works especially well for churches of 100-1,500 members that take their online presence seriously but don't have the budget for a $500/month platform or the staff capacity to manage a DIY builder.",
        ],
        quote: {
          text: "We'd been struggling with our Wix site for two years. It never looked right on phones and our giving button kept breaking. CalTech Web built us a beautiful site in a week and has handled every update since. Our online giving tripled in the first three months.",
          author: "Pastor James R.",
          role: "Community Church, Central California",
        },
      },
      {
        heading: "Choosing the Right Option for Your Church",
        body: [
          "There is no single best church website builder for every congregation. The right choice depends on your church's size, technical capacity, design priorities, and budget.",
          "Here is a straightforward decision framework based on the options reviewed:",
        ],
        list: [
          "If you have a tech-savvy staff member with time to invest: Squarespace or Wix can produce good results at low monthly cost, but budget 40-80 hours for setup and ongoing management time.",
          "If you're already in the Faithlife ecosystem: Faithlife Sites provides the best integration with your existing tools.",
          "If you want a purpose-built church platform and have budget: Ekklesia360 or Ministry Designs are solid choices with deep church-specific functionality.",
          "If you want a fully custom design with no DIY time investment: CalTech Web handles everything for $99/month, including ongoing updates, and works well for churches that don't want to manage their own website.",
          "Whatever platform you choose: prioritize mobile-first design, fast load times, and a clear path to keep your content current. These factors matter more to Google, and to first-time visitors, than the platform you're on.",
        ],
      },
    ],
    conclusion:
      "The best church website builder is the one that matches your church's actual capacity and priorities. A beautiful DIY site that never gets updated is worse than a simpler managed site that's always current. A powerful platform your staff doesn't know how to use is worse than a straightforward one they do.\n\nIf you're not sure what your church needs, I'm happy to take a look at your current site and give you an honest recommendation, even if that recommendation is a platform other than ours. Reach out for a free conversation.",
    related: [
      "affordable-web-design-company",
      "affordable-web-design-for-small-businesses",
    ],
  },
];

// ─── Lookup ────────────────────────────────────────────────────────────────────

function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs.flatMap((s) => {
    const p = getPost(s);
    return p ? [p] : [];
  });
}

// ─── Static Params ────────────────────────────────────────────────────────────

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toIsoDate(dateStr: string): string {
  return new Date(dateStr).toISOString().split("T")[0];
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://caltechweb.com/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://caltechweb.com/${post.slug}/`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      section: post.category,
      tags: [post.category, "web design", "CalTech Web"],
      authors: ["Brandon Hopkins"],
      images: [
        {
          url: "/brandon-hopkins.jpg",
          width: 2400,
          height: 1600,
          alt: "Brandon Hopkins, CalTech Web Founder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/brandon-hopkins.jpg"],
    },
  };
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({ post }: { post: BlogPost }) {
  const isAffordable = post.slug === "affordable-web-design-company";

  return (
    <aside className="hidden lg:block w-80 shrink-0">
      <div className="sticky top-24 space-y-5">
        {/* CTA Card */}
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-4">
            <Zap className="w-3 h-3" />
            Only $99/month
          </div>
          <h3 className="text-lg font-extrabold text-gray-900 leading-tight mb-2">
            {isAffordable ? "Custom website. No templates. No contracts." : "Ready to put this into practice?"}
          </h3>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Get a professionally designed website with hosting, updates, and
            support all included for $99/month.
          </p>
          <Link
            href="/web-design-pricing/"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            {isAffordable ? "See My $99/Month Plan" : "Get My Website"}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5592823075"
            className="flex items-center justify-center gap-2 w-full py-2.5 mt-3 rounded-full border border-blue-200 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {isAffordable ? "Call for a Free Site Review" : "(559) 282-3075"}
          </a>
        </div>

        {/* Stats */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h4 className="text-sm font-bold text-gray-900 mb-4">
            Why CalTech Web?
          </h4>
          <div className="space-y-3">
            {[
              { stat: "800+", label: "Websites built and managed" },
              { stat: "93%", label: "Updates done in under 1 hour" },
              { stat: "5–7 days", label: "Average time to launch" },
              { stat: "$99/mo", label: "All-inclusive, no surprises" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-sm">
                    {stat}
                  </span>{" "}
                  <span className="text-gray-500 text-sm">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="rounded-2xl border border-green-100 bg-green-50 p-5 text-sm text-green-800">
          <div className="font-bold mb-1">Brandon&apos;s Guarantee</div>
          <p className="leading-relaxed">
            Not satisfied with your website? Get a full refund and keep the
            site. No questions asked.
          </p>
        </div>
      </div>
    </aside>
  );
}

// ─── Article Content ──────────────────────────────────────────────────────────

// Category-mapped contextual links — passes PageRank to key service pages and
// gives Google descriptive anchor text signals per Google's internal linking guidance.
const resourcesByCategory: Record<string, { href: string; label: string }[]> = {
  "Church Websites": [
    { href: "/affordable-church-websites/", label: "Affordable Church Website Design at $99/Month" },
    { href: "/web-design-portfolio/", label: "View Our Church & Non-Profit Portfolio" },
  ],
  "SEO": [
    { href: "/web-design-pricing/", label: "CalTech Web Pricing: $99/Month All-Inclusive" },
    { href: "/web-design-portfolio/", label: "Real Client SEO & Traffic Results" },
  ],
  "Web Design Tips": [
    { href: "/web-design-pricing/", label: "Professional Web Design at $99/Month" },
    { href: "/web-design-portfolio/", label: "Browse Our Web Design Portfolio" },
  ],
  "Pricing & Value": [
    { href: "/web-design-pricing/", label: "See What's Included at $99/Month" },
    { href: "/web-design-competitor-comparison/", label: "How CalTech Web Compares to Other Agencies" },
  ],
  "Case Study": [
    { href: "/web-design-portfolio/", label: "More Client Results: View Our Full Portfolio" },
    { href: "/web-design-pricing/", label: "Start Your Website for $99/Month" },
  ],
  "Non-Profits": [
    { href: "/affordable-church-websites/", label: "Church & Non-Profit Website Design" },
    { href: "/web-design-pricing/", label: "$99/Month, Built for Mission-Driven Organizations" },
  ],
  "Small Business": [
    { href: "/web-design-pricing/", label: "Small Business Web Design at $99/Month" },
    { href: "/web-design-portfolio/", label: "View Our Small Business Portfolio" },
  ],
  "Industry": [
    { href: "/web-design-portfolio/", label: "Industry Website Examples & Case Studies" },
    { href: "/web-design-pricing/", label: "Get a Professional Website for $99/Month" },
  ],
  "Conversion": [
    { href: "/get-a-free-instant-quote/", label: "Get a Free Instant Website Quote" },
    { href: "/web-design-pricing/", label: "Conversion-Optimized Web Design at $99/Month" },
  ],
  "Local SEO": [
    { href: "/web-design-pricing/", label: "SEO-Ready Websites Starting at $99/Month" },
    { href: "/web-design-portfolio/", label: "Local Business Website Portfolio & Results" },
  ],
  "Support & Reliability": [
    { href: "/web-design-pricing/", label: "$99/Month, Includes 1-Hour Support Response" },
    { href: "/brandon-hopkins/", label: "Meet Brandon Hopkins, Founder of CalTech Web" },
  ],
  "Web Design": [
    { href: "/web-design-pricing/", label: "Professional Web Design at $99/Month" },
    { href: "/web-design-portfolio/", label: "Browse Our Web Design Portfolio" },
  ],
};

function ArticleContent({ post }: { post: BlogPost }) {
  return (
    <article className="min-w-0 flex-1">
      {/* Intro */}
      <div className="mb-10">
        {post.intro.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="text-lg text-gray-700 leading-relaxed mb-4 last:mb-0"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Nonprofit pricing callout */}
      {post.slug === "nonprofit-website-design" && (
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-4">
            <Zap className="w-3 h-3" />
            $99/month, everything included
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-2 leading-snug">
            No setup fees. No per-update charges. No surprises.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Every item on this list is built into CalTech Web&apos;s $99/month plan. Not as an add-on. Not as an upgrade. Just included.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { stat: "800+", label: "Organizations served" },
              { stat: "93%", label: "Updates in under 1 hour" },
              { stat: "5–7 days", label: "Average launch time" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center p-3 bg-white rounded-xl border border-blue-100 shadow-sm">
                <div className="text-2xl font-extrabold text-blue-700">{stat}</div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/web-design-pricing/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
            >
              Get Your Nonprofit Website
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:5592823075"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us: (559) 282-3075
            </a>
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-10">
        {post.sections.map((section, si) => (
          <section key={si}>
            {post.slug === "nonprofit-website-design" ? (
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-extrabold shadow-sm">
                  {si + 1}
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug pt-1.5">
                  {section.heading}
                </h2>
              </div>
            ) : (
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4 leading-snug">
                {section.heading}
              </h2>
            )}

            {/* Body paragraphs */}
            {section.body.length > 0 && (
              <div className="space-y-3 mb-4">
                {section.body.map((para, pi) => (
                  <p key={pi} className="text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* List */}
            {section.list && section.list.length > 0 && (
              <ul className="space-y-2.5 mb-4">
                {section.list.map((item, li) => (
                  <li key={li} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Included callout */}
            {section.included && (
              <div className="flex items-center gap-3 mt-4 p-4 rounded-xl bg-green-600 text-white">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-semibold leading-relaxed">
                  {section.included}
                </p>
              </div>
            )}

            {/* Tip callout */}
            {section.tip && (
              <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100 mt-4">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-relaxed">
                  <span className="font-semibold">Quick tip: </span>
                  {section.tip}
                </p>
              </div>
            )}

            {/* Pull quote */}
            {section.quote && (
              <div className="relative p-6 rounded-2xl bg-blue-50 border border-blue-100 mt-4">
                <Quote className="w-8 h-8 text-blue-200 mb-3" />
                <blockquote className="text-gray-800 text-lg leading-relaxed font-medium italic mb-4">
                  &ldquo;{section.quote.text}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3">
                  {section.quote.photo && (
                    <img
                      src={section.quote.photo}
                      alt={section.quote.author}
                      className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0"
                    />
                  )}
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">
                      {section.quote.author}
                    </span>
                    {section.quote.role && <span>, {section.quote.role}</span>}
                  </div>
                </footer>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Conclusion */}
      <div className="mt-10 pt-8 border-t border-gray-100">
        {post.conclusion.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="text-gray-700 leading-relaxed mb-4 last:mb-0"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Author bio */}
      <div className="mt-10 flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
        <Image src="/brandon-hopkins.jpg" alt="Brandon Hopkins" width={112} height={112} sizes="56px" className="w-14 h-14 rounded-full object-cover shrink-0" />
        <div>
          <div className="font-bold text-gray-900">Brandon Hopkins</div>
          <div className="text-sm text-gray-500 mb-2">
            Founder, CalTech Web · California
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Brandon has built and managed 800+ websites for small businesses,
            churches, and non-profits. He personally handles every client
            relationship and responds to support requests within the hour.
          </p>
        </div>
      </div>

      {/* Contextual internal links — descriptive anchor text for Google */}
      {resourcesByCategory[post.category] && (
        <div className="mt-8 p-5 rounded-2xl border border-blue-100 bg-blue-50">
          <h4 className="text-sm font-bold text-blue-900 mb-3">Explore CalTech Web</h4>
          <ul className="space-y-2">
            {resourcesByCategory[post.category].map(({ href, label }) => (
              <li key={href} className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                <Link href={href} className="text-sm text-blue-700 hover:text-blue-900 font-medium hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

// ─── Related Posts ────────────────────────────────────────────────────────────

function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-8">
          Related Articles
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}/`}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all overflow-hidden"
            >
              <div
                className={`h-1.5 w-full ${
                  post.categoryColor.includes("blue")
                    ? "bg-blue-500"
                    : post.categoryColor.includes("orange")
                    ? "bg-orange-500"
                    : post.categoryColor.includes("purple")
                    ? "bg-purple-500"
                    : post.categoryColor.includes("teal")
                    ? "bg-teal-500"
                    : post.categoryColor.includes("pink")
                    ? "bg-pink-500"
                    : post.categoryColor.includes("yellow")
                    ? "bg-yellow-500"
                    : post.categoryColor.includes("red")
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              />
              <div className="flex flex-col flex-1 p-5">
                <span
                  className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${post.categoryColor}`}
                >
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors flex-1">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50 mt-auto">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Strip ────────────────────────────────────────────────────────────────

function CTAStrip({ post }: { post: BlogPost }) {
  const isNonprofit = post.slug === "nonprofit-website-design";
  const isAffordable = post.slug === "affordable-web-design-company";

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Zap className="w-4 h-4 text-yellow-400" />
          {isNonprofit ? "Built for nonprofits. Priced for nonprofits." : isAffordable ? "No setup fee. Cancel anytime." : "Ready to put this into practice?"}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          {isNonprofit ? (
            <>Your nonprofit deserves a professional website{" "}<span className="text-orange-300">for $99/month.</span></>
          ) : isAffordable ? (
            <>Custom website, no templates, no contracts,{" "}<span className="text-orange-300">for $99/month.</span></>
          ) : (
            <>Get a website that already does all of this{" "}<span className="text-orange-300">for $99/month.</span></>
          )}
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {isNonprofit
            ? "Donation integration, volunteer forms, mobile-first design, SEO, and unlimited updates, every item on this list is already built into your $99/month site. No setup fees. No surprises. Launching in 5–7 days."
            : isAffordable
            ? "Custom design, hosting, SEO, unlimited updates, and same-day support, all for $99/month. No setup fees. No contracts. Cancel anytime."
            : "Everything you just read about (speed, mobile-first design, clear CTAs, local SEO) is built into every CalTech Web site. Launching in 5–7 days."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            {isNonprofit ? "Get My Nonprofit Website" : isAffordable ? "See My $99/Month Plan" : "Get My Website"}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {isAffordable ? "Call for a Free Site Review" : "(559) 282-3075"}
          </a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
          {(isAffordable
            ? [
                "800+ websites built",
                "93% updates done in <1 hour",
                "5–7 day launch",
                "Full refund — you keep the site",
              ]
            : [
                "800+ websites built",
                "93% updates done in <1 hour",
                "5–7 day launch",
              ]
          ).map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-blue-300" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sticky Mobile CTA ────────────────────────────────────────────────────────

function StickyMobileCTA({ post }: { post: BlogPost }) {
  const isAffordable = post.slug === "affordable-web-design-company";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div
        className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 pt-3 pb-4"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-3">
          <a
            href="tel:5592823075"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {isAffordable ? "Free Site Review" : "Call Now"}
          </a>
          <Link
            href="/web-design-pricing/"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            {isAffordable ? "See My $99/Month Plan" : "Get My Website"}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.related);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": {
      "@type": "ImageObject",
      "url": "https://caltechweb.com/brandon-hopkins.jpg",
      "width": 2400,
      "height": 1600,
    },
    "datePublished": toIsoDate(post.date),
    "dateModified": toIsoDate(post.date),
    "author": {
      "@type": "Person",
      "name": "Brandon Hopkins",
      "url": "https://caltechweb.com/brandon-hopkins/",
    },
    "publisher": {
      "@type": "Organization",
      "name": "CalTech Web",
      "url": "https://caltechweb.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://caltechweb.com/logo.png",
        "width": 1520,
        "height": 512,
      },
    },
    "url": `https://caltechweb.com/${post.slug}/`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://caltechweb.com/${post.slug}/`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://caltechweb.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://caltechweb.com/blog/",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://caltechweb.com/${post.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="pb-[76px] md:pb-0">
        {/* Article Header */}
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                Blog
              </Link>
              <span>/</span>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${post.categoryColor}`}
              >
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
              <span>by Brandon Hopkins</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex gap-12">
            <ArticleContent post={post} />
            <Sidebar post={post} />
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />

        {/* CTA */}
        <CTAStrip post={post} />
      </main>
      <Footer />
      <StickyMobileCTA post={post} />
    </>
  );
}
