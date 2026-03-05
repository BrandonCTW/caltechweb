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
      "See how we redesigned Dr. Arjun Kanuri's medical practice website in 5 days — and delivered 40% more organic traffic, 2× appointment conversions, and 12+ new patient inquiries per month.",
    excerpt:
      "A plastic surgery practice with an outdated site was losing new patients to a slow, untrustworthy website. Here is exactly what we built and what changed in 90 days.",
    readTime: "6 min read",
    date: "January 28, 2026",
    intro:
      "Most medical practices have the same problem: the doctor is excellent, referrals keep the calendar full, but the website is silently costing them new patients.\n\nThat was Dr. Arjun Kanuri's situation. His plastic surgery practice in the DC/MD/VA area was thriving on word-of-mouth — but people were finding him on Google, landing on a slow, outdated site, and leaving before they ever booked.\n\n\"I had patients tell me they almost didn't come in because the website looked old,\" he told me. \"That's when I knew something had to change.\"\n\nMedical practice website design is different from a standard business site. Patients are making high-stakes decisions about their health. Trust, clarity, and speed aren't nice-to-haves — they're the entire game. Here is exactly what we built and what happened over the next 90 days.",
    sections: [
      {
        heading: "What Was Wrong With the Old Site",
        body: [
          "Dr. Kanuri's previous website was built in 2019. By 2025, it was a liability.",
          "The site loaded in 7.2 seconds on mobile — nearly 5× slower than the 1.5-second threshold where Google starts penalizing rankings. It wasn't mobile-responsive, so elements overflowed on smaller screens. The \"Book Appointment\" button was buried three clicks deep.",
          "There was no clear information about specialties, insurance acceptance, or what patients could expect at their first visit. Most critically, there were no trust signals — no patient reviews, no professional photo, no credentials front and center.",
          "For any business, that's a problem. For a medical practice, it's a patient-repelling liability. People choosing a surgeon need to feel confident before they even pick up the phone.",
        ],
        tip: "Pages that load slower than 3 seconds see a 53% abandonment rate on mobile, according to Google. A medical practice website that loads slowly isn't just annoying — it's handing patients to competitors.",
      },
      {
        heading: "What We Built — and Why Every Decision Mattered",
        body: [
          "We launched the redesigned site in 5 days. Every element of the new medical practice website design was driven by a specific conversion or SEO goal.",
        ],
        list: [
          "Load time: Dropped from 7.2 seconds to 1.8 seconds on mobile. Optimized images, modern hosting infrastructure, and clean Next.js code.",
          "Mobile-first: 68% of Dr. Kanuri's traffic came from phones. We designed the mobile experience first, then scaled up — not the other way around.",
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
          "+40% organic traffic — more prospective patients finding the practice through Google.",
          "2× appointment conversion rate — the same number of visitors was booking at twice the rate.",
          "Bounce rate: 74% → 38% — visitors were reading the site instead of immediately leaving.",
          "Session duration: 0:48 → 2:12 — people were exploring services, reading credentials, reviewing patient stories.",
          "Mobile conversions: Near zero before launch. Now the primary source of new appointment requests.",
          "12+ additional new patient inquiries per month — directly attributed to the website.",
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
        heading: "What This Cost — and What It Returns",
        body: [
          "The redesign, hosting, ongoing updates, and support are all included in CalTech Web's $99/month plan. Over 90 days, that is $297 in total investment.",
          "At 12 additional patient inquiries per month, even converting a fraction of those into consultations pays for years of the website in a single month. That is the math medical practices need to be running — not 'how much does a website cost?' but 'how much is a non-performing website costing me?'",
          "Good medical practice website design is not about looking impressive. It is about getting found, building trust in 8 seconds, and making it easy to book. That is the entire brief. We built to that spec.",
        ],
      },
    ],
    conclusion:
      "If your medical practice has a slow, outdated, or low-converting website, the fix does not have to be complicated or expensive. Dr. Kanuri's new site launched in 5 days and costs $99/month. The results were measurable within 90 days.\n\nIf you'd like a free, honest review of your current site — what it's doing well, what it's costing you, and what's realistically possible — reach out. No sales pitch, no obligation.",
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
      "Why CalTech Web Is the Most Affordable Web Design Company That Doesn't Cut Corners",
    metaTitle:
      "Most Affordable Web Design Company | CalTech Web",
    metaDescription:
      "Looking for an affordable web design company? CalTech Web delivers custom websites at $99/mo. No templates, no contracts, no compromises.",
    excerpt:
      "Budget web designers cut corners. We don't. Here's what makes CalTech Web the most affordable web design company that actually delivers results.",
    readTime: "5 min read",
    date: "February 18, 2026",
    intro:
      "If you search for \"affordable web design company,\" you'll get thousands of results. Freelancers on Fiverr. Template mills in overseas markets. Local agencies quoting $5,000 for a basic site. They're all affordable in different ways, but most of them are affordable because they cut corners.\n\nI started CalTech Web because I saw the same problem over and over: small business owners who couldn't afford a $5,000 website were getting stuck with either cheap garbage or overpriced templates. Neither option actually helped their business grow.\n\nHere is what makes our approach different, and why $99/month gets you more than what most businesses pay thousands for.",
    sections: [
      {
        heading: "What 'Affordable' Usually Means in Web Design",
        body: [
          "Let's be honest about what most affordable web design companies actually deliver. The typical budget web designer does one of three things: they buy a $59 template, slap your logo on it, and call it custom. They use a website builder like Wix or Squarespace and charge you a premium for what is essentially a DIY tool. Or they outsource the work overseas, where communication gaps and time zone differences lead to a site that technically works but doesn't reflect your business.",
          "The result is predictable. You get a website that looks like a thousand other websites. It loads slowly because no one optimized it. The content is generic because no one took the time to understand your business. And six months later, when you need an update, the designer has moved on to the next client and doesn't return your calls.",
          "I've rebuilt more websites from these situations than I can count. The business owner spent $1,500-$3,000, got something they were never quite happy with, and ended up starting over anyway. That's not affordable; that's expensive.",
        ],
      },
      {
        heading: "The CalTech Web Model: Why $99/Month Works",
        body: [
          "Our model is simple: $99/month covers everything. Custom design, hosting, unlimited updates, support, and redesigns whenever you want a fresh look. No contracts. Cancel anytime.",
          "People ask me how this works financially. The answer is straightforward: we've built over 800 websites. We have systems and processes that let us build high-quality sites efficiently without cutting quality. We don't spend money on a fancy office, a sales team, or layers of management. It's lean, and the savings go directly to the client.",
          "Here's what's included in that $99/month:",
        ],
        list: [
          "Custom design built around your business, not a template with your logo dropped in",
          "Professional hosting on modern infrastructure with SSL certificates included",
          "Unlimited content updates: text changes, new photos, additional pages, whatever you need",
          "Free redesigns: when you want a fresh look, we rebuild it at no extra charge",
          "93% of support requests completed in under 1 hour",
          "SEO fundamentals built in: proper title tags, meta descriptions, schema markup, and fast load times",
          "Mobile-first responsive design that works perfectly on every device",
        ],
        tip: "Compare this to the typical web design agency model: $3,000-$10,000 upfront for the build, $50-$150/month for hosting, and $75-$150/hour for any updates or changes. Over two years, that's easily $5,000-$15,000. Our two-year total: $2,376.",
      },
      {
        heading: "800+ Websites and Counting",
        body: [
          "We've built websites for doctors, lawyers, contractors, restaurants, churches, non-profits, real estate agents, and dozens of other industries. Every single one is custom. Every single one includes ongoing support.",
          "The volume is actually part of why we can keep prices low. When you've built 800+ sites, you've solved virtually every problem a small business website can present. We don't spend hours researching how to integrate a booking widget or set up an online menu because we've done it hundreds of times. That efficiency translates directly into lower costs for you.",
          "But volume doesn't mean assembly-line work. Every client gets a conversation about their business, their customers, and what they need the website to accomplish. The design is built around those answers, not around a template we've used for the last 50 clients.",
        ],
        quote: {
          text: "I was skeptical that $99/month could get me a real website. Three years later, I've referred six other businesses to CalTech Web. The site looks professional, loads fast, and Brandon updates it the same day I ask.",
          author: "Mike R.",
          role: "General Contractor, Sacramento",
        },
      },
      {
        heading: "The Guarantee That Proves We Mean It",
        body: [
          "Here's the part that usually convinces people who are still on the fence: if you're not satisfied with your website, you get a full refund and you keep the website. That's it. No fine print, no arguing, no hoops to jump through.",
          "We can offer this because it almost never happens. When you build a site based on an actual conversation with the business owner, using proven design principles, and deliver it in 5-7 days with ongoing support, people are happy. Our retention rate speaks for itself.",
          "The bottom line is this: affordable web design doesn't have to mean cheap web design. It means finding a partner who has figured out how to deliver professional results without the bloated overhead that most agencies pass on to their clients. That's what we do at CalTech Web, and we've been doing it for over 800 businesses.",
        ],
      },
    ],
    conclusion:
      "If you're looking for an affordable web design company, you have options. You can gamble on a freelancer, wrestle with a DIY builder, or pay an agency thousands of dollars. Or you can get a custom, professional website for $99/month with everything included and a guarantee that you'll be satisfied.\n\nCall or email me. I'll review your current site for free and tell you exactly what I'd do differently. No pressure, no pitch.",
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
          "When you need a content update, you email or call me directly and 93% of the time it's done in under an hour. When something needs a security patch, it's applied proactively. You never even know about it because you don't have to.",
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
    slug: "church-website-support",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title:
      "Church Website Support: Why Your Ministry Needs More Than a Template",
    metaTitle:
      "Church Website Support | CalTech Web",
    metaDescription:
      "Church websites have unique needs: online giving, sermon streaming, and event management. See why a template won't cut it and what real church website support looks like.",
    excerpt:
      "A template can give you a website. But church websites have ongoing needs that templates can't handle. Here's what real church website support looks like.",
    readTime: "5 min read",
    date: "January 22, 2026",
    intro:
      "Most churches start in the same place: they find a template, fill in their name and service times, and call it done. And for a while, it works. But then a problem surfaces. The online giving button doesn't work on mobile. The sermon archive is impossible to update. Easter is coming and nobody knows how to add a special event to the home page.\n\nThe honest truth is that church websites have unique needs that standard templates aren't built for. And when those needs go unmet, the church's digital presence starts working against its mission instead of for it.\n\nHere's what real church website support looks like, and why it matters more than most ministry leaders realize.",
    sections: [
      {
        heading: "Where Templates Fall Short for Churches",
        body: [
          "A template is built for a generic audience. A church is not generic. Your site needs to welcome first-time visitors who may be searching from a place of spiritual need, keep regular members connected to your community, and support your ministry's specific programs and events.",
          "Templates don't include integrated online giving that works seamlessly on mobile. They don't have sermon archive systems that are easy to update week after week. They don't make it simple to manage a rotating calendar of small groups, youth events, mission trips, and seasonal services.",
          "Beyond features, templates don't adapt. When your church grows, starts a new ministry, or needs to communicate something urgent to your congregation, you're stuck either paying a developer by the hour or wrestling with a builder that wasn't designed for your needs.",
        ],
        list: [
          "Online giving integrations: many templates either don't include them or use clunky third-party embeds that break on mobile",
          "Sermon archives: uploading weekly messages to a searchable, browsable library requires ongoing management most templates don't support",
          "Event management: rotating seasonal and recurring events need a system, not just a static page",
          "Staff and ministry updates: congregations grow, staff changes, new ministries launch — these need regular updates",
          "Streaming integration: embedding live services and archived video requires technical setup, not just a YouTube link",
        ],
      },
      {
        heading: "What Ongoing Church Website Support Actually Involves",
        body: [
          "Church websites are not set-and-forget. They need regular attention throughout the year, and especially around key moments in the church calendar.",
          "A typical month might include updating the events calendar, adding a new sermon to the archive, swapping out the home page banner for an upcoming series, and updating a staff bio when a new associate pastor joins. None of these are difficult, but all of them require someone with access to the site who knows what they're doing.",
          "Around Easter and Christmas, the workload spikes. Special service schedules, invitation landing pages, volunteer sign-up forms, and promotional images all need to go up quickly and come down after the season ends. That kind of responsive support is hard to get from a freelancer who's juggling dozens of other clients.",
        ],
        tip: "The average church updates its website at least 2-3 times per month outside of busy seasons. At 93% of updates completed in under 1 hour, CalTech Web's support model is built for exactly that kind of ongoing relationship.",
      },
      {
        heading: "The Technical Side That Churches Can't Ignore",
        body: [
          "Beyond content, church websites have technical maintenance needs that most ministry leaders are not equipped to handle: hosting reliability, SSL certificate renewals, security updates, and backup systems.",
          "A church website that goes down on Saturday night before a Sunday service, or that shows a security warning when a visitor tries to make a donation, does real damage to trust. These aren't hypothetical problems — they happen regularly to sites that aren't actively maintained.",
          "Donation security is especially important. When people give online, they need to trust that their financial information is protected. That means proper HTTPS encryption, secure payment processing integration, and a site that doesn't look like it was abandoned in 2018.",
        ],
      },
      {
        heading: "What Church Website Support at CalTech Web Looks Like",
        body: [
          "Our $99/month plan was designed with organizations like churches in mind: ongoing needs, limited budgets, and no internal staff to handle the technical side of a website.",
          "You contact Brandon directly — not a ticket system, not a support queue — and 93% of updates are done in under an hour. Sermon added. Event updated. Banner changed. Giving page adjusted. Done.",
          "We handle hosting, SSL, security, and backups in the background. You never have to think about whether your site is secure or whether the hosting bill was paid. We take care of it so you can focus on ministry.",
          "We've built websites for churches of every size, from small congregations meeting in rented spaces to established multi-campus ministries. The needs are different in scale, but the principle is the same: your website should support your mission, not create more work for your team.",
        ],
      },
    ],
    conclusion:
      "A template can give you a website. But ongoing support, fast updates, and technical reliability are what make a church website an actual ministry tool.\n\nIf your church is struggling with a template that can't keep up, or if you're spending too much time managing your own site, let's talk. I'll review your current site for free and show you what a supported church website looks like.",
    related: [
      "church-website-design-essentials",
      "post-sermons-online",
      "ultimate-guide-christian-ministry-websites",
    ],
  },
  {
    slug: "church-website-design-essentials",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title:
      "Church Website Design: 7 Things Every Church Website Needs",
    metaTitle:
      "Church Website Design: 7 Things Every Church Needs | CalTech Web",
    metaDescription:
      "A church website needs more than a service schedule. Here are 7 essential elements every church website must have to welcome visitors and serve your congregation.",
    excerpt:
      "Your church website is often the first thing a visitor sees before they walk through your doors. Here are 7 things it must have to do its job.",
    readTime: "6 min read",
    date: "January 20, 2026",
    intro:
      "Before a first-time visitor ever walks through your church doors, they've almost certainly visited your website. They looked for service times, checked out the staff page, maybe watched a sermon clip — and made a gut-level decision about whether your church felt right for them.\n\nThat moment matters. A church website that is confusing, outdated, or impersonal can turn away someone who needed exactly what your congregation offers.\n\nHere are the 7 things every church website needs to do its job.",
    sections: [
      {
        heading: "1. A Welcoming First Impression",
        body: [
          "The moment someone lands on your home page, they should feel something. Not confusion, not a wall of text, not a stock photo of empty pews — but a genuine sense of who you are as a community.",
          "That means real photos of your congregation: people worshipping, small groups meeting, kids in ministry. It means a clear, human headline that tells a visitor what to expect. And it means a design that reflects your church's personality — whether you're a traditional congregation or a contemporary one.",
          "First impressions are formed in about 8 seconds. If your home page doesn't communicate \"you belong here\" in that window, the visitor is likely already gone.",
        ],
        tip: "Use actual photos of your congregation, not stock photography. Real people build real trust. A candid shot from last Sunday's service does more for a visitor's decision than any professionally staged image.",
      },
      {
        heading: "2. Service Times and Location — Immediately Visible",
        body: [
          "This sounds obvious, but the number of church websites where I have to hunt for service times is remarkable. It should be on the home page, above the fold, visible without scrolling.",
          "Include all service times, your physical address, and a link to Google Maps directions. If you have multiple campuses, list them all with their own times and locations. If services vary by season, say so clearly.",
          "A visitor who can't find when or where you meet in 10 seconds will not dig deeper to find it. They'll close the tab.",
        ],
      },
      {
        heading: "3. Online Giving with Secure, Mobile-Friendly Processing",
        body: [
          "For most churches, online giving has become a primary channel for tithes and offerings. It needs to work perfectly — especially on mobile, where a growing majority of church website traffic comes from.",
          "The giving experience should be simple: a clear button from the home page, a short form with multiple payment options, and a confirmation that reassures the donor their gift was received. Complicated or broken giving flows cost churches real revenue.",
          "Security matters here more than anywhere else on your site. Donors need to see that your site is encrypted (https://) and that their financial information is handled by a reputable processor, not a sketchy embed.",
        ],
        included: "CalTech Web integrates with trusted giving platforms like Pushpay, Tithely, and Stripe. Your online giving will be mobile-optimized, secure, and easy to use.",
      },
      {
        heading: "4. A Sermon Archive Visitors Can Actually Use",
        body: [
          "Your sermons are often the first content a spiritual seeker engages with before committing to visit. A usable sermon archive — searchable, browsable, and updated weekly — extends your ministry's reach far beyond Sunday morning.",
          "This means more than just a YouTube channel link. It means an on-site archive where sermons are organized by series, topic, or date. Each message should have a title, a brief description, and an easy way to watch or listen.",
          "The sermon archive is also one of the most frequently updated sections of a church website. It needs to be easy to maintain, whether that's your communications team adding messages weekly or your web provider handling it for you.",
        ],
      },
      {
        heading: "5. An Events Calendar That Stays Current",
        body: [
          "Nothing signals a neglected website faster than an events calendar showing a VBS from three years ago. Your events section needs to be actively maintained and genuinely useful to your congregation.",
          "The best church event calendars include all major ministry events, link to registration forms when needed, and are easy to filter by ministry (women's ministry, youth, small groups). They're updated far in advance so members can plan ahead.",
          "For seasonal events like Easter services and Christmas Eve, consider creating dedicated landing pages rather than just a calendar entry. These are often your highest-traffic moments and deserve more than a one-line listing.",
        ],
      },
      {
        heading: "6. Pastor and Staff Bios with Real Photos",
        body: [
          "People connect with people before they connect with institutions. A strong staff page — with professional or high-quality candid photos, real bios that share each person's story, and contact information — does more for trust than almost anything else on your site.",
          "The pastor's bio in particular should feel personal. Where did they grow up? What led them to ministry? What's their family like? These details make your leadership human and approachable to someone who is considering visiting for the first time.",
          "Keep it current. When staff changes, the website needs to reflect it immediately. An outdated staff page with someone who left two years ago is confusing and erodes trust.",
        ],
      },
      {
        heading: "7. Mobile-First Design",
        body: [
          "More than half of church website traffic comes from smartphones. If your site doesn't work well on mobile — if text is too small to read, buttons are hard to tap, or the giving form doesn't load properly on iOS — you are failing the majority of your visitors.",
          "Mobile-first design means the site is designed and tested for small screens first, then scaled up for desktop. Not the other way around. Service times should be readable without zooming. The give button should be easy to tap with a thumb. The sermon player should work without needing a plugin.",
          "Google also uses mobile-friendliness as a ranking factor. A site that isn't optimized for mobile will rank lower in search results, meaning fewer people find your church when they're searching for one.",
        ],
      },
    ],
    conclusion:
      "A church website that checks all seven of these boxes does something powerful: it removes friction between a person in spiritual need and your congregation. It makes it easy to find you, trust you, engage with your content, and walk through your doors for the first time.\n\nIf your current site is missing any of these elements, or if it's been a few years since you've given it a real look, we'd be happy to do a free review and show you what's possible.",
    related: [
      "church-website-support",
      "post-sermons-online",
      "ultimate-guide-christian-ministry-websites",
    ],
  },
  {
    slug: "post-sermons-online",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title:
      "How to Post Sermons Online: A Complete Guide for Churches",
    metaTitle:
      "How to Post Sermons Online: A Church Guide | CalTech Web",
    metaDescription:
      "Learn how to post sermons online for your church: YouTube embeds, podcast RSS feeds, on-site sermon archives, and SEO tips to help people find your messages.",
    excerpt:
      "60% of people engage with faith content online before visiting in person. Here's how to post your sermons where they'll actually be found and watched.",
    readTime: "6 min read",
    date: "January 5, 2026",
    intro:
      "The Sunday sermon doesn't have to end when the service does. For churches that make their messages available online, a single Sunday's content can reach members who were sick at home, families who moved away, people in different time zones, and spiritual seekers who haven't yet set foot in your building.\n\nBut posting sermons online effectively is more than just uploading a video. It involves the right platforms, a usable archive structure, and basic SEO so your content actually gets found.\n\nHere is a complete guide to getting your sermons online in a way that extends your ministry's reach.",
    sections: [
      {
        heading: "Start With YouTube: The Most Powerful Platform for Sermon Distribution",
        body: [
          "YouTube is the second-largest search engine in the world. People actively search for sermons, biblical topics, and messages on specific passages — and YouTube surfaces this content to people who have never heard of your church.",
          "Every sermon should be uploaded to a church YouTube channel with a descriptive title (not just \"Sunday Sermon — Week 14\"), a paragraph description that includes the biblical text and key themes, and appropriate tags. This is the difference between a video that lives only in your playlist and one that gets discovered by someone searching for a message on anxiety or forgiveness.",
          "YouTube is also free, handles all the video hosting and bandwidth, and embeds cleanly on any website. For churches just starting to post sermons online, this is the right first step.",
        ],
        tip: "Sermon titles should be descriptive and searchable. \"Finding Peace in Uncertain Times — Philippians 4:6-7\" will get found. \"Week 14: Part 3 of Our Series\" will not.",
      },
      {
        heading: "Add a Podcast Feed for Audio Listeners",
        body: [
          "A significant portion of sermon listeners prefer audio — driving to work, exercising, or following along on a podcast app. Creating a podcast feed from your sermon audio takes one afternoon to set up and gives you a permanent presence on Spotify, Apple Podcasts, and Google Podcasts.",
          "Services like Buzzsprout, Anchor (now Spotify for Podcasters), or Podbean handle the RSS feed generation and submission to major platforms. Upload the audio file, add a title and description, and the distribution happens automatically.",
          "A podcast feed also creates a searchable archive that listeners can browse by topic or date — something that's harder to replicate on YouTube.",
        ],
      },
      {
        heading: "Build an On-Site Sermon Archive",
        body: [
          "Your church website should have its own sermon archive, even if you're also on YouTube and podcast platforms. An on-site archive serves your congregation directly — they come to your website for information, and the sermon library should be right there alongside service times and ministry pages.",
          "The most useful sermon archives are organized by series, with each series having a cover image, description, and list of individual messages. Each sermon entry should include the title, speaker, date, biblical text, and options to watch (embedded YouTube), listen (embedded or linked podcast), or download the audio.",
          "Make it searchable. A congregation member who remembers a message about marriage or grief from six months ago should be able to find it in 30 seconds, not have to scroll through a chronological list of 200 entries.",
        ],
        list: [
          "Organize by series, not just chronologically — it's easier to browse and matches how people remember messages",
          "Include the biblical text in every entry — members searching for specific passages will find them",
          "Embed YouTube video directly on the page instead of just linking out — keep people on your site",
          "Show the speaker's name for churches with multiple preachers",
          "Add a search bar if you have more than 50 sermons in the archive",
        ],
      },
      {
        heading: "SEO for Sermons: Help People Find Your Messages",
        body: [
          "People search for sermons about specific topics: grief, forgiveness, marriage, fear, purpose. If your sermons match these topics and are properly optimized, they can rank in Google search results and reach people who have never heard of your church.",
          "The basics: give every sermon page a descriptive title tag (the sermon title plus your church name), a meta description that summarizes the content, and header tags that include the topic and biblical reference. These are the same fundamentals that apply to any web page, and they apply just as much to sermon content.",
          "For maximum reach, also include a brief written summary or outline with each sermon. This gives Google text to index and gives visitors a preview of the content before they decide to watch or listen.",
        ],
      },
    ],
    conclusion:
      "Getting sermons online is one of the most impactful things a church can do for both its congregation and its outreach. Members stay connected when they miss a Sunday. Seekers discover your content through search. People who have moved away maintain a connection to the teaching.\n\nIf your church isn't posting sermons online yet, or if your current setup is difficult to maintain week after week, reach out. We've built sermon archive systems for dozens of churches and can make the process simple.",
    related: [
      "church-website-design-essentials",
      "church-website-support",
      "ultimate-guide-christian-ministry-websites",
    ],
  },
  {
    slug: "ultimate-guide-christian-ministry-websites",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title:
      "The Ultimate Guide to Christian Ministry Websites",
    metaTitle:
      "Ultimate Guide to Christian Ministry Websites | CalTech Web",
    metaDescription:
      "Everything a ministry needs from its website: mission clarity, devotional content, online giving, outreach tools, and sermon streaming. A complete guide.",
    excerpt:
      "A ministry website does more than share a schedule. Here's a complete guide to building a site that grows your reach, deepens engagement, and supports your mission.",
    readTime: "8 min read",
    date: "December 15, 2025",
    intro:
      "A ministry website is unlike any other website. It isn't trying to sell a product or generate leads in the conventional sense. It's trying to connect people — people searching for faith, community, support, or answers — with something that can genuinely change their lives.\n\nThat's a significant responsibility. And it means the decisions you make about your website — the content, the structure, the way you communicate your mission — carry real weight.\n\nThis guide covers everything a Christian ministry needs from its website, from the foundational elements to the more advanced features that help your ministry grow its reach and deepen its impact.",
    sections: [
      {
        heading: "Start With Your Mission: Say What You Stand For",
        body: [
          "The most important question a ministry website answers is: what is this place, and is it for me? Visitors make this judgment within seconds of landing on your home page. If your messaging is unclear, institutional, or buried in church jargon, you've lost them.",
          "Your mission statement should be front and center — not the formal version from your bylaws, but a human, plain-language version that tells a first-time visitor what your ministry is about and who it's for. \"We help people find hope, community, and purpose through faith in Jesus Christ\" communicates more than \"Our mission is to fulfill the Great Commission through discipleship, worship, and outreach.\"",
          "Vision matters too. Where is God leading your ministry? What does the future look like? A ministry with a clear, compelling vision attracts both committed members and new visitors who want to be part of something with direction.",
        ],
        tip: "Read your current home page out loud. If it sounds like a corporate mission statement or church committee language, rewrite it. Aim for the words you'd actually use to explain your church to a friend.",
      },
      {
        heading: "Devotional Content: Serving Your Congregation Between Sundays",
        body: [
          "The ministry week doesn't end at Sunday noon. A website with devotional content — written reflections, reading plans, prayer guides, and blog posts on faith topics — serves your congregation throughout the week and gives spiritual seekers a reason to return to your site.",
          "Devotional content also has significant SEO benefits. Articles on prayer, grief, marriage, parenting from a faith perspective, and other spiritually relevant topics attract organic search traffic from people who are seeking answers and may not yet have a church home.",
          "You don't need to publish daily to make this effective. Even two to four well-written articles per month, consistently maintained, builds a library over time that continues working for your ministry long after publication.",
        ],
      },
      {
        heading: "Online Giving: Making Generosity Simple",
        body: [
          "For most ministries, online giving has overtaken the offering plate as the primary channel for financial generosity. Members who give online tend to give more consistently and at higher levels than those who give exclusively in person, because the friction of carrying cash or writing a check is removed.",
          "An effective online giving experience is mobile-first, takes fewer than three minutes to complete, offers recurring giving options, and confirms the gift immediately with a receipt. Donors should be able to designate gifts to specific funds (general, missions, building fund) if your ministry tracks these separately.",
          "The giving platform you choose matters. Pushpay, Tithely, and Stripe are trusted options with proven track records in ministry contexts. Avoid less-recognized processors — donors will notice if the giving page looks unfamiliar or untrustworthy.",
        ],
        included: "CalTech Web integrates online giving from Pushpay, Tithely, Stripe, and other trusted platforms. We'll build the giving experience directly into your site so it feels native, not like an afterthought.",
      },
      {
        heading: "Outreach Tools: Welcoming Visitors Before They Arrive",
        body: [
          "Your website is your most powerful outreach tool because it operates around the clock. Someone searching for a church at 11pm on a Wednesday will find your site before they find your building.",
          "An effective outreach-oriented website includes a dedicated \"I'm New\" or \"Plan Your Visit\" page that tells first-time visitors exactly what to expect: parking, what to wear, what happens during services, where to bring kids, and where to go when they arrive. This page reduces the anxiety that keeps people from walking through the door.",
          "Online connect cards — a simple digital form where a visitor can share their name, email, and how they'd like to get connected — are the digital equivalent of a visitor card in the pew. They capture interest at the highest-intent moment (when someone is actively engaging with your site) and give your ministry team a way to follow up.",
        ],
        list: [
          "\"Plan Your Visit\" page: what to expect, parking, children's ministry, what people wear",
          "Online connect card: name, email, how they'd like to connect, prayer requests",
          "Small group finder: searchable by neighborhood, day, or interest area",
          "Volunteer sign-up: ministry areas, current needs, easy commitment form",
          "Prayer request form: let visitors and members submit requests privately",
        ],
      },
      {
        heading: "Sermon Streaming and Media Library",
        body: [
          "Live streaming and an on-demand sermon library extend your ministry's reach far beyond the walls of your building. Members who travel for work, families with sick children, and people who haven't yet committed to attending in person all benefit from access to your teaching content online.",
          "For live streaming, most churches use YouTube Live or Facebook Live as their primary platform, with the stream embedded on their website. This keeps visitors on your site during the service rather than sending them to a third-party platform.",
          "The media library — organized by series, searchable by topic, and updated weekly — is one of the highest-value sections of any ministry website. A robust library demonstrates the depth and history of your teaching ministry and gives seekers hours of content to engage with before they decide to visit.",
        ],
      },
      {
        heading: "Growing Membership Engagement Through Your Website",
        body: [
          "Beyond attracting new visitors, your website should serve your existing congregation. This means member resources, ministry sign-ups, giving history access, and communication tools that keep your community connected.",
          "A church app or member portal can handle the deepest engagement needs, but your website can do a lot with a well-organized members section: small group listings with contact information, ministry teams with sign-up forms, upcoming events with registration, and a giving page where members can manage recurring gifts.",
          "The goal is a website that your congregation visits regularly — not just when they're checking service times — because it's genuinely useful for staying connected to the life of the church.",
        ],
      },
    ],
    conclusion:
      "A Christian ministry website that does all of this well becomes one of your most powerful ministry tools. It welcomes the spiritually curious, serves your congregation, supports your generosity, and extends your teaching far beyond Sunday morning.\n\nBuilding this doesn't require a massive budget or a full-time communications team. It requires thoughtful design, quality content, and ongoing support from people who understand what ministry websites are trying to accomplish.\n\nWe've built websites for churches of every size and tradition. If you'd like to see what's possible for your ministry, reach out for a free conversation.",
    related: [
      "church-website-design-essentials",
      "church-website-support",
      "post-sermons-online",
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

function Sidebar() {
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
            Ready to put this into practice?
          </h3>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Get a professionally designed website with hosting, updates, and
            support all included for $99/month.
          </p>
          <Link
            href="/web-design-pricing/"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5592823075"
            className="flex items-center justify-center gap-2 w-full py-2.5 mt-3 rounded-full border border-blue-200 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
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
            $99/month — everything included
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
              Call Brandon: (559) 282-3075
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

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Zap className="w-4 h-4 text-yellow-400" />
          {isNonprofit ? "Built for nonprofits. Priced for nonprofits." : "Ready to put this into practice?"}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          {isNonprofit ? (
            <>Your nonprofit deserves a professional website{" "}<span className="text-orange-300">for $99/month.</span></>
          ) : (
            <>Get a website that already does all of this{" "}<span className="text-orange-300">for $99/month.</span></>
          )}
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {isNonprofit
            ? "Donation integration, volunteer forms, mobile-first design, SEO, and unlimited updates — every item on this list is already built into your $99/month site. No setup fees. No surprises. Launching in 5–7 days."
            : "Everything you just read about (speed, mobile-first design, clear CTAs, local SEO) is built into every CalTech Web site. Launching in 5–7 days."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            {isNonprofit ? "Get My Nonprofit Website" : "Get My Website"}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:5592823075"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (559) 282-3075
          </a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
          {[
            "800+ websites built",
            "93% updates done in <1 hour",
            "5–7 day launch",
          ].map((item) => (
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

function StickyMobileCTA() {
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
            Call Now
          </a>
          <Link
            href="/web-design-pricing/"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
          >
            Get My Website
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
            <Sidebar />
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />

        {/* CTA */}
        <CTAStrip post={post} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
