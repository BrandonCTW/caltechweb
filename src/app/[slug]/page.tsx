import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Phone,
  Globe,
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
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type ContentSection = {
  heading: string;
  body: string[];
  list?: string[];
  tip?: string;
  quote?: { text: string; author: string; role?: string };
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
    slug: "dr-kanuri-40-percent-traffic-increase",
    category: "Case Study",
    categoryColor: "bg-green-100 text-green-700",
    title:
      "How Dr. Arjun Kanuri Increased Website Traffic by 40% and Doubled Conversions in 3 Months",
    metaTitle:
      "Case Study: 40% Traffic Increase & 2× Conversions in 3 Months | CalTech Web",
    metaDescription:
      "See exactly how Dr. Arjun Kanuri's medical practice grew website traffic 40% and doubled patient conversions in 90 days - with a $99/month CalTech Web redesign.",
    excerpt:
      "A busy plastic surgery practice, an outdated website, and a $99/month plan. Here's exactly what we changed - and the measurable results that followed.",
    readTime: "6 min read",
    date: "January 28, 2026",
    intro:
      "When Dr. Arjun Kanuri first called me, he was frustrated. His plastic surgery practice in the DC/MD/VA area was busy - word-of-mouth referrals kept the appointment book full - but his website was costing him new patients. People were finding him on Google, landing on a slow, outdated site, and leaving before they ever booked an appointment.\n\n\"I had patients tell me they almost didn't come in because the website looked old,\" he told me. \"That's when I knew something had to change.\"\n\nHere's exactly what we did - and what happened over the next 90 days.",
    sections: [
      {
        heading: "The Problem: A Website That Was Working Against Him",
        body: [
          "Dr. Kanuri's previous website was built in 2019. Back then, it was fine. By 2025, it was a liability.",
          "The site loaded in 7.2 seconds on mobile. It wasn't mobile-responsive - elements overflowed on smaller screens. The \"Book Appointment\" button was buried three clicks deep. There was no clear information about his specialties, insurance acceptance, or what patients could expect at their first visit.",
          "Worst of all: the site had no trust signals. No patient reviews. No professional photo. No credentials displayed prominently. For a medical professional, trust is everything - and his website was projecting the opposite.",
        ],
        tip: "If your website takes more than 3 seconds to load on mobile, you're losing more than half of potential visitors before they ever see your content. Google reports a 53% abandonment rate for pages that take longer than 3 seconds.",
      },
      {
        heading: "What We Changed - And Why Each Change Mattered",
        body: [
          "We launched the redesigned site in 5 days. Every change was intentional.",
        ],
        list: [
          "Speed first: Optimized images, modern hosting infrastructure, and clean code brought load time from 7.2 seconds down to under 1.8 seconds on mobile.",
          "Mobile-first layout: 68% of Dr. Kanuri's traffic came from phones. We designed for mobile first, then scaled up - not the other way around.",
          "Clear conversion path: The primary CTA - \"Book an Appointment\" - appears above the fold on every page. No scrolling required.",
          "Trust signals front and center: Patient reviews, credentials, a professional headshot, and insurance information are all visible on the homepage.",
          "Local SEO foundation: Proper title tags, schema markup for a medical practice, and consistent business information to improve search visibility.",
          "Simplified navigation: Removed 11 menu items. Kept 4. Made it impossible to get lost.",
        ],
      },
      {
        heading: "The Results at 90 Days",
        body: [
          "We track the same metrics for every client - organic traffic, conversion rate, bounce rate, and session duration. Here's what Dr. Kanuri's analytics showed at the 90-day mark compared to the same period the prior year:",
        ],
        list: [
          "Organic traffic: +40% increase - more people finding the practice through Google searches.",
          "Appointment conversions: 2× increase - the same traffic was converting at twice the rate.",
          "Bounce rate: Dropped from 74% to 38%. Visitors were reading the site instead of immediately leaving.",
          "Average session duration: Up from 0:48 to 2:12. People were engaged and exploring.",
          "Mobile conversions: Previously near zero. Now the primary source of new appointment requests.",
        ],
        tip: "The traffic increase came from better SEO. The conversion increase came from better design and clearer CTAs. Both matter - but the conversion improvement had the biggest immediate impact on new patient revenue.",
      },
      {
        heading: "In His Own Words",
        body: [],
        quote: {
          text: "Brandon's expertise and genuine care for my success have been game-changers. Thanks to CalTech Web, my professional image has never looked better, and my business is thriving like never before.",
          author: "Dr. Arjun Kanuri, MD, MBA",
          role: "Plastic & Reconstructive Surgery, DC/MD/VA",
        },
      },
      {
        heading: "What $99/Month Actually Buys You",
        body: [
          "The redesign, hosting, ongoing updates, and support are all included in the $99/month plan. Over 3 months, that's $297 in total investment.",
          "Even conservatively, if one additional patient per month books through the website, the site pays for itself many times over. Dr. Kanuri reports an average of 12+ additional new patient inquiries per month since the relaunch.",
          "That's the math that actually matters - not the cost of the website, but the cost of not having one that works.",
        ],
      },
    ],
    conclusion:
      "If your website is slow, outdated, or not converting visitors into customers, the fix doesn't have to be complicated. Dr. Kanuri's site took 5 days to launch and costs $99/month. The results were measurable within 90 days.\n\nIf you're curious what a redesign could do for your business, I offer a free review of your current site and a straightforward conversation about what's possible - no pressure, no obligation.",
    related: [
      "small-business-website-redesign-signs",
      "99-month-vs-diy-website-builders",
      "website-speed-local-seo",
    ],
  },
  {
    slug: "small-business-website-redesign-signs",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "5 Signs Your Small Business Website Needs a Redesign (Right Now)",
    metaTitle:
      "5 Signs Your Small Business Website Needs a Redesign | CalTech Web",
    metaDescription:
      "Is your website hurting your business? Here are 5 clear signs it's time for a redesign - and what to do about it without spending a fortune.",
    excerpt:
      "If your bounce rate is climbing, your phone isn't ringing, or your site looks like it was built in 2014 - it's time. Here's how to know for sure.",
    readTime: "4 min read",
    date: "February 10, 2026",
    intro:
      "Most small business owners don't realize their website is costing them customers. They assume that because the site \"works\" - meaning it loads and has the right information - it's doing its job.\n\nBut a website that just exists is very different from a website that converts.\n\nHere are five clear signs your website is overdue for a redesign.",
    sections: [
      {
        heading: "1. Your Bounce Rate Is Above 65%",
        body: [
          "Bounce rate measures the percentage of visitors who leave your site after viewing only one page. A high bounce rate means people are arriving at your site, deciding it's not what they need, and leaving immediately.",
          "A healthy bounce rate for a small business website is typically 40–60%. Above 65%, and you have a problem. Above 75%, and you're almost certainly losing significant business to competitors.",
          "The most common causes: slow load time, design that looks outdated or untrustworthy, content that doesn't match what the visitor was searching for, or no clear next step for the visitor to take.",
        ],
        tip: "Check your bounce rate in Google Analytics. If you don't have Google Analytics set up, that's also a sign your website needs attention.",
      },
      {
        heading: "2. Your Site Takes More Than 3 Seconds to Load on Mobile",
        body: [
          "Google reports that 53% of mobile users abandon a page that takes more than 3 seconds to load. If your site is slow, you're losing more than half your mobile visitors before they ever see your content.",
          "More importantly: Google uses page speed as a ranking factor. A slow site doesn't just frustrate visitors - it also drops your position in search results, which means fewer visitors in the first place.",
          "Test your site speed at Google PageSpeed Insights. If you're scoring below 70 on mobile, a redesign with modern hosting and optimized code can make a dramatic difference.",
        ],
      },
      {
        heading: "3. It Doesn't Look Right on a Phone",
        body: [
          "If you have to pinch-to-zoom, if text runs off the screen, or if buttons are too small to tap - your site is not mobile-responsive. This is a dealbreaker in 2026.",
          "Over 60% of web traffic is now mobile. And a non-responsive site doesn't just frustrate visitors - it signals to them that your business is behind the times, which damages trust before they've even learned anything about you.",
          "Pull out your phone right now and navigate to your website. If anything feels awkward, cramped, or difficult to use, your visitors are experiencing the same thing.",
        ],
      },
      {
        heading: "4. Your Competitors' Sites Look Better",
        body: [
          "Search for your main service in your city. Look at the top 3-5 results. Now honestly compare those sites to yours.",
          "Design is a trust signal. When someone is choosing between your business and a competitor, the quality of your website is part of how they judge you. A dated, cluttered, or amateur-looking site - even if your actual work is excellent - can lose you the comparison.",
          "You don't need the flashiest site on the internet. You need a site that looks clean, professional, and trustworthy. That bar is not hard to clear, but you do have to clear it.",
        ],
      },
      {
        heading: "5. Your Phone Isn't Ringing From the Website",
        body: [
          "This is the clearest sign of all. If you can't point to a single customer in the last 3 months who found you through your website, your website isn't working.",
          "A well-designed site should be one of your best lead sources. It's available 24/7, costs less per lead than almost any paid channel, and compounds over time as your SEO improves.",
          "If your website isn't generating leads, it's one of two problems: either people aren't finding it (an SEO/visibility problem), or people are finding it and leaving without contacting you (a design/conversion problem). Either way, it's time for a change.",
        ],
        tip: "Set up call tracking with a unique phone number on your website. This lets you know exactly how many calls your site is generating each month - the most important metric for a local service business.",
      },
    ],
    conclusion:
      "If you recognize your site in any of these five signs, you're leaving money on the table. The good news: a redesign doesn't have to cost thousands of dollars or take months.\n\nAt CalTech Web, a complete redesign, new hosting, and ongoing support starts at $99/month. Most sites launch in 5–7 days. If you're not satisfied, you get a refund and keep the website.",
    related: [
      "99-month-vs-diy-website-builders",
      "mobile-first-website-design",
      "website-speed-local-seo",
    ],
  },
  {
    slug: "99-month-vs-diy-website-builders",
    category: "Pricing & Value",
    categoryColor: "bg-orange-100 text-orange-700",
    title: "$99/Month vs. DIY Website Builders: Which Is Actually Cheaper?",
    metaTitle:
      "$99/Month vs. DIY Website Builders: Which Is Cheaper? | CalTech Web",
    metaDescription:
      "Wix, Squarespace, and GoDaddy look affordable - until you add up your time, add-ons, and missed conversions. Here's the honest cost comparison.",
    excerpt:
      "Wix, Squarespace, and GoDaddy all look affordable at first glance. But once you add up your time, upgrades, and missed conversions - the math tells a different story.",
    readTime: "5 min read",
    date: "February 3, 2026",
    intro:
      "Every week I talk to small business owners who tried building their own website. Most of them spent 40–80 hours on it, ended up with something they were half-proud of, and then watched it sit there doing nothing for months.\n\nThe DIY website builder pitch is compelling: \"Just drag and drop! It's easy! You can do this yourself.\" And you can. But should you?\n\nLet's look at the honest cost comparison.",
    sections: [
      {
        heading: "The Advertised Cost vs. The Real Cost",
        body: [
          "DIY website builders advertise low monthly prices, but the total cost is rarely that simple.",
        ],
        list: [
          "Wix: $17–$36/month for business plans. Add an ecommerce feature, a contact form that doesn't look like default Wix, a scheduling tool - you're easily at $60–$80/month before you've even customized the design.",
          "Squarespace: $23–$65/month. To remove the Squarespace branding and get advanced features, you need higher tiers. Most business use cases require at least the $33/month Business plan.",
          "GoDaddy Website Builder: $10–$25/month base, but GoDaddy is famous for upselling - SEO tools, security certificates, email marketing - that add up quickly.",
          "Your time: This is the cost that nobody accounts for. If your time is worth $50/hour and you spend 60 hours building and maintaining a DIY site over the first year, that's $3,000 in real cost.",
        ],
      },
      {
        heading: "The Hidden Time Cost",
        body: [
          "The biggest lie in the DIY website builder pitch is that building a website is quick. For someone who does this every day, it's fast. For a business owner who has never done it, there's a steep learning curve.",
          "Building a site typically takes first-timers 40–80 hours. That includes learning the platform, designing pages, writing content, setting up contact forms, connecting a domain, configuring SEO settings, and testing everything.",
          "After launch, there's ongoing time: updating content, adding new services, fixing things that break, figuring out why something doesn't look right on mobile.",
          "That's time you're not spending running your business, serving customers, or doing anything that actually generates revenue.",
        ],
        tip: "Ask yourself: what would I do with 60 hours of time I got back? For most business owners, the answer is worth a lot more than $99/month.",
      },
      {
        heading: "The Quality Gap",
        body: [
          "DIY website builders produce DIY-looking websites. There's a ceiling on what you can achieve with templates and drag-and-drop tools - and experienced eyes can usually spot it.",
          "A professionally designed site is built around conversion principles: clear hierarchy, strategic CTAs, optimized load speed, and a design that builds trust with your specific audience.",
          "This isn't about aesthetics. It's about results. A site that converts at 3% instead of 1% means three times as many leads from the same traffic.",
        ],
      },
      {
        heading: "What $99/Month Actually Includes",
        body: [
          "When you compare CalTech Web's $99/month plan to DIY builders, you're not comparing apples to apples. Here's what's included:",
        ],
        list: [
          "Custom professional design - not a template",
          "Hosting included (no separate hosting bill)",
          "Unlimited updates - text, images, new pages, anything",
          "Free redesigns whenever you want a fresh look",
          "Fast support - 93% of requests completed in under 1 hour",
          "5–7 day average launch time",
          "Brandon's personal guarantee: unsatisfied? Refund + keep the site",
        ],
      },
      {
        heading: "The Honest Comparison",
        body: [
          "For a small business that just needs a website and doesn't want to think about it: $99/month wins on every dimension. Lower total cost (when you include your time), better quality, faster launch, and ongoing support.",
          "The only case where DIY might make sense: you have design skills, enjoy building websites, and have the time to do it right. If that's you, DIY away.",
          "If that's not you - if you just need a website that works and gets out of your way - $99/month is the better investment.",
        ],
      },
    ],
    conclusion:
      "The real question isn't \"what's the cheapest way to have a website?\" The real question is \"what's the cheapest way to have a website that actually grows my business?\"\n\nFor most small business owners, that answer is not a DIY builder - it's a professional who handles everything for $99/month while you focus on your actual business.",
    related: [
      "small-business-website-redesign-signs",
      "1-hour-support-why-it-matters",
      "dr-kanuri-40-percent-traffic-increase",
    ],
  },
  {
    slug: "church-website-design-essentials",
    category: "Church Websites",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Church Website Design: 7 Things Every Church Website Needs",
    metaTitle:
      "Church Website Design: 7 Essentials Every Church Site Needs | CalTech Web",
    metaDescription:
      "Your church website is often a visitor's first impression. Here are the 7 things every church website needs to turn visitors into members.",
    excerpt:
      "Your church website is often the first thing a visitor sees before they ever walk through your doors. Here's what it needs to say - and do - to turn visitors into members.",
    readTime: "5 min read",
    date: "January 20, 2026",
    intro:
      "I've built dozens of church websites over the years. And the conversation is almost always the same: a pastor or church administrator calls because their current site \"hasn't been updated in years\" and new visitors keep telling them they couldn't find basic information online.\n\nThe good news: what makes a great church website isn't complicated. Here are the seven things that every church website needs - and why each one matters.",
    sections: [
      {
        heading: "1. Service Times and Location - Above the Fold",
        body: [
          "This is the most important information on your website, and it needs to be the first thing a visitor sees - without any scrolling.",
          "When someone searches for a church and lands on your site, they want to know two things immediately: When do you meet? And where? If they have to hunt for this information, many will simply go back and click the next result.",
          "Put your service times and address in the hero section of your homepage. Include a clickable map link. Make it impossible to miss.",
        ],
      },
      {
        heading: "2. A Welcoming \"I'm New Here\" or \"Plan Your Visit\" Section",
        body: [
          "First-time visitors have a lot of anxiety. What should I wear? Where do I park? What happens when I walk in? Do I need to bring anything?",
          "A dedicated section that answers these questions - warmly and specifically - can be the difference between someone visiting or choosing a different church. It costs nothing to add this content, and it means everything to someone who's nervous about walking in for the first time.",
        ],
        tip: "Include a photo of your building exterior so visitors can recognize it when they arrive. This small detail reduces a common first-visit anxiety.",
      },
      {
        heading: "3. Sermon Archive",
        body: [
          "A sermon archive does three things: it lets members catch up on messages they missed, it lets prospective visitors get a sense of your preaching style before they visit, and it gives you a rich library of SEO-friendly content that can bring in organic search traffic.",
          "Even if you only have audio, that's fine. Video is better. But something is significantly better than nothing. Most church website platforms make it easy to embed YouTube or podcast links.",
        ],
      },
      {
        heading: "4. Online Giving",
        body: [
          "Online giving is now expected by most congregations - especially younger members and families. If you don't offer it, you're losing contributions from people who don't carry cash and would prefer to give automatically each month.",
          "Integrations with platforms like Tithe.ly, Pushpay, or even PayPal make this straightforward. The key is making the \"Give\" option visible in your navigation and on your homepage - not buried in a dropdown.",
        ],
      },
      {
        heading: "5. Staff and Leadership Bios",
        body: [
          "People connect with people, not institutions. A staff page with real photos and brief bios of your pastor, worship leader, and key leaders helps visitors feel like they're meeting the community before they arrive.",
          "This also builds trust. A church whose leadership is visible and identifiable feels more accountable and welcoming than one that presents itself as faceless.",
        ],
      },
      {
        heading: "6. Events Calendar",
        body: [
          "An up-to-date events calendar tells your community and prospective visitors that your church is alive and active. It answers the question \"Is anything happening here besides Sunday services?\"",
          "Keep it current. A calendar with events from 2024 does more harm than good - it makes the site look abandoned. Even if you have one recurring event, keep the dates updated.",
        ],
      },
      {
        heading: "7. Mobile-First Design",
        body: [
          "Over 70% of church website traffic is from mobile devices. This is higher than almost any other category of website - because people search for churches spontaneously (\"where can I go this Sunday?\") almost always on their phones.",
          "If your church website isn't mobile-friendly, you're failing the majority of your visitors at the moment of highest intent. Every item on this list needs to work perfectly on a phone.",
        ],
      },
    ],
    conclusion:
      "A church website doesn't need to be fancy. It needs to be welcoming, informative, and easy to use on a phone. Get these seven elements right and your site will be doing its job: turning curious visitors into first-timers, and first-timers into members.\n\nCalTech Web specializes in church websites. We've built them for congregations across California and know exactly what works.",
    related: [
      "nonprofit-website-design-tips",
      "mobile-first-website-design",
      "small-business-website-redesign-signs",
    ],
  },
  {
    slug: "website-speed-local-seo",
    category: "SEO",
    categoryColor: "bg-teal-100 text-teal-700",
    title:
      "How Website Speed Affects Your Local SEO Rankings (And What To Do About It)",
    metaTitle:
      "How Website Speed Affects Local SEO Rankings | CalTech Web",
    metaDescription:
      "Google uses page speed as a ranking factor. If your website is slow, you're losing both rankings and visitors. Here's what matters and how to fix it.",
    excerpt:
      "Google's algorithm has made page speed a ranking factor - and most small business websites are failing this test. Here's what matters and how to fix it fast.",
    readTime: "4 min read",
    date: "January 12, 2026",
    intro:
      "In 2021, Google made something official that was already widely understood: page speed is a ranking factor. They call them \"Core Web Vitals,\" and they measure how fast your page loads, how quickly it becomes interactive, and how stable the layout is as it loads.\n\nFor local service businesses, this matters more than most people realize. Here's why - and what you can do about it.",
    sections: [
      {
        heading: "What Are Core Web Vitals?",
        body: [
          "Core Web Vitals are three specific measurements Google uses to assess page experience:",
        ],
        list: [
          "LCP (Largest Contentful Paint): How quickly the main content of the page loads. Google wants this under 2.5 seconds.",
          "FID/INP (Interaction to Next Paint): How quickly the page responds when a user clicks or taps something. Under 200ms is the goal.",
          "CLS (Cumulative Layout Shift): How much the page layout shifts while loading. A score under 0.1 means nothing is jumping around unexpectedly.",
        ],
        tip: "Check your scores at PageSpeed Insights (pagespeed.web.dev). A score below 50 on mobile means your site has significant speed issues that are likely affecting your rankings.",
      },
      {
        heading: "Why This Hits Local Businesses Hardest",
        body: [
          "Local search is intensely competitive. When someone searches \"plumber in Fresno\" or \"dentist near me,\" they're presented with the Google Local Pack (the 3 map results) and then 10 organic results. You need to appear in both.",
          "If your site speed is poor, Google may rank you lower than a competitor with a faster site - even if your business has more reviews and more relevance. Speed is the tiebreaker.",
          "Worse, slow sites get penalized in the mobile search results specifically - and local searches are predominantly mobile. This is a double hit on your visibility.",
        ],
      },
      {
        heading: "The Most Common Causes of Slow Small Business Sites",
        body: [
          "Most slow small business websites have the same set of problems:",
        ],
        list: [
          "Unoptimized images: A full-resolution photo from a phone camera can be 4–8 MB. On a webpage, it should be under 200 KB. Uncompressed images are the #1 cause of slow sites.",
          "Cheap shared hosting: Budget hosting services ($3–$5/month) put hundreds of sites on one server. When that server is busy, every site on it slows down.",
          "Bloated page builders: Drag-and-drop builders like Elementor or Divi load enormous amounts of unused CSS and JavaScript. This adds seconds to load time.",
          "No caching or CDN: A content delivery network (CDN) serves your site from servers close to the visitor. Without one, a visitor in New York loading a site hosted in California has extra latency.",
          "Outdated code: Websites built years ago often use outdated frameworks and libraries that load slowly on modern browsers.",
        ],
      },
      {
        heading: "How to Fix It",
        body: [
          "The good news: most of these issues can be resolved with a rebuild on modern infrastructure.",
        ],
        list: [
          "Modern hosting: Move to a quality hosting provider with SSD storage and modern server infrastructure.",
          "Image optimization: Compress all images before upload, and use next-gen formats (WebP) instead of JPEG where possible.",
          "Clean code: A custom-built site without heavy page builders loads dramatically faster.",
          "CDN integration: Serve static assets from a CDN so visitors everywhere get fast load times.",
          "Lazy loading: Load images only when they're about to enter the viewport - this makes the initial page load much faster.",
        ],
      },
    ],
    conclusion:
      "Website speed is no longer optional. It's a direct ranking factor that affects how many people find your business online. And since local search is almost entirely mobile, a slow site means fewer customers - period.\n\nEvery CalTech Web site is built with speed as a priority. Our sites consistently score in the 85–95 range on Google PageSpeed Insights.",
    related: [
      "small-business-website-redesign-signs",
      "google-business-profile-website",
      "mobile-first-website-design",
    ],
  },
  {
    slug: "nonprofit-website-design-tips",
    category: "Non-Profits",
    categoryColor: "bg-pink-100 text-pink-700",
    title: "Non-Profit Website Design: How to Get More Donors and Volunteers Online",
    metaTitle:
      "Non-Profit Website Design: Get More Donors & Volunteers | CalTech Web",
    metaDescription:
      "A non-profit's website should build trust and make it easy to give. Most don't do either. Here's the blueprint for a site that grows your mission.",
    excerpt:
      "A non-profit's website should do two things: build trust and make it easy to give. Most don't do either. Here's the blueprint for a site that actually grows your mission.",
    readTime: "5 min read",
    date: "December 30, 2025",
    intro:
      "I've built websites for non-profits across California - food banks, youth organizations, faith-based charities, animal rescues. And almost every time, the incoming site has the same problems: it tells people about the mission but makes it hard to do anything about it.\n\nA non-profit website has two jobs. First: convince a visitor that your organization is trustworthy and doing meaningful work. Second: make it as easy as possible to donate, volunteer, or get involved. Here's how to do both.",
    sections: [
      {
        heading: "Lead With Impact, Not With Mission Statements",
        body: [
          "Most non-profit homepages open with a vague mission statement like \"Empowering communities through transformative change.\" This is meaningless.",
          "Instead, lead with a concrete impact statement: \"We've served 12,000 meals this year to families in Fresno County.\" Or: \"47 shelter dogs found forever homes last month.\" Specific numbers create emotional resonance and immediate credibility.",
          "Save the formal mission statement for your About page. Your homepage should answer one question: what do you actually do, and is it working?",
        ],
        tip: "Update your impact numbers at least quarterly. A website showing stats from 2023 in late 2025 signals to donors that nobody is paying attention.",
      },
      {
        heading: "Make the Donation CTA Unmissable",
        body: [
          "Your \"Donate\" button should be the most prominent call-to-action on your homepage. It should appear in the navigation, above the fold on mobile, and at least twice more as you scroll down the page.",
          "Don't bury it. Don't make it look like every other link. Use a contrasting color. Make it a button, not a text link. And make sure it works perfectly on mobile - because that's where most of your spontaneous donations will come from.",
          "Test the donation flow yourself on your phone, right now. If it takes more than 3 taps to complete a donation, you're losing contributors.",
        ],
      },
      {
        heading: "Show the Humans Behind the Mission",
        body: [
          "Trust is the foundation of charitable giving. People give to people, not to organizations. Your website should make the humans behind your non-profit visible and real.",
          "Include photos of your team, your volunteers in action, and the people or animals your work serves (with appropriate permissions). Include a staff page with real names and brief bios. Show a video, even a simple phone-recorded one, of your work in action.",
          "Organizations that show their people raise more money. This isn't a guess - it's backed by decades of fundraising research.",
        ],
      },
      {
        heading: "Make Volunteering Easy to Sign Up For",
        body: [
          "Many non-profits want volunteers but bury the volunteer information deep in the site. Make it easy to find and easier to commit to.",
          "Create a simple volunteer page with: what roles are available, what the time commitment looks like, and a simple signup form. The form should ask for the minimum information needed - name, email, and maybe availability. The full onboarding can happen later.",
          "The goal is to capture interest before it fades. Make the first step as easy as possible.",
        ],
      },
      {
        heading: "Display Your 990 and Nonprofit Status Prominently",
        body: [
          "Donors research before they give. Having your 501(c)(3) status, EIN, and a link to your most recent 990 (tax filing) visible on your site answers the transparency question before it's asked.",
          "This is especially important for first-time donors who found you through search rather than personal connection. They don't know you yet. Show them that you're accountable.",
        ],
      },
    ],
    conclusion:
      "A non-profit website isn't just a digital brochure - it's your 24/7 fundraising and recruiting tool. Get the design right and it quietly grows your mission around the clock.\n\nCalTech Web offers special pricing for non-profits. Call or email Brandon to discuss your organization's needs.",
    related: [
      "church-website-design-essentials",
      "contact-page-converts",
      "small-business-website-redesign-signs",
    ],
  },
  {
    slug: "1-hour-support-why-it-matters",
    category: "Support & Reliability",
    categoryColor: "bg-yellow-100 text-yellow-700",
    title:
      "Why 93% of Our Website Updates Are Done in Under 1 Hour - And Why That Matters",
    metaTitle:
      "93% of Website Updates Done in Under 1 Hour | CalTech Web",
    metaDescription:
      "Your business doesn't wait. Neither should your website. Here's how CalTech Web completes 93% of support requests in under 1 hour - and why it matters for your business.",
    excerpt:
      "Your business doesn't wait. Neither should your website. Here's how CalTech Web built a support process that gets most requests turned around in under an hour.",
    readTime: "3 min read",
    date: "December 18, 2025",
    intro:
      "When you need to update your website - a new service, a changed price, an upcoming event, a new team member - every hour that update doesn't happen is an hour that a potential customer might get wrong information. Or miss an opportunity. Or choose a competitor.\n\nMost web design agencies don't talk about their support turnaround time. That's because it's usually measured in days, not hours. Here's why we do it differently, and why it matters for your business.",
    sections: [
      {
        heading: "The Problem With Most Web Design Support",
        body: [
          "The typical web design agency model is: build the site, collect the check, and move on. Support is an afterthought - something handled through a ticketing system with a 24–72 hour response window.",
          "That might be acceptable for a large enterprise with an internal IT team to handle urgent changes. For a small business owner who just realized their holiday hours are wrong at 4pm on Christmas Eve, a 48-hour response time is useless.",
          "I've taken calls from clients who were stuck with other agencies, waiting days for a simple content update while the wrong information lived on their site. That's not okay.",
        ],
      },
      {
        heading: "How We Actually Do It",
        body: [
          "The reason we can complete 93% of support requests in under an hour is simple: this is a priority, not an afterthought.",
        ],
        list: [
          "Direct access: You call or email Brandon directly - not a ticketing system, not a third-party support desk.",
          "Simple changes are made immediately: Text updates, image swaps, new phone numbers, updated hours - these take minutes, not days.",
          "We know your site: Because we built it, we don't have to spend 20 minutes figuring out how it's structured before we can make a change.",
          "No bureaucracy: No approval process, no change management workflow. Just: you ask, we do it.",
        ],
        tip: "Over 5,000 support tickets closed. The most common request? \"Can you update our hours/prices/menu?\" Average time to complete: under 15 minutes.",
      },
      {
        heading: "Why Fast Support Matters for Your Business",
        body: [
          "Think about the moments when you need a website update. They're rarely planned:",
        ],
        list: [
          "You just added a new service and want it on the site before the week is out.",
          "You changed your hours and customers are showing up at the wrong time.",
          "You just got a great new testimonial and want it live before your next sales call.",
          "You're running a promotion that starts tomorrow and need the banner updated today.",
          "A vendor changed their pricing and your service page has the wrong numbers.",
        ],
      },
      {
        heading: "The Cost of Slow Support",
        body: [
          "When a website update takes days, several bad things can happen: customers get wrong information, you look unprofessional to prospects, and you stop trusting the website as a communication tool.",
          "That last one is the most insidious. Business owners who've been burned by slow support start treating their website as a static brochure - something that gets updated once a year instead of reflecting the current state of the business. The site becomes less valuable, not more.",
          "Fast support keeps your website current, accurate, and working for you every day.",
        ],
      },
    ],
    conclusion:
      "You shouldn't have to think twice about asking for a website update. It should be as easy as sending a text and knowing it'll be done before lunch.\n\nThat's what we aim for - and what 93% of our clients experience.",
    related: [
      "99-month-vs-diy-website-builders",
      "small-business-website-redesign-signs",
      "dr-kanuri-40-percent-traffic-increase",
    ],
  },
  {
    slug: "mobile-first-website-design",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title:
      "Mobile-First Website Design: Why 60% of Your Visitors Are Judging You on a Phone",
    metaTitle:
      "Mobile-First Website Design for Small Businesses | CalTech Web",
    metaDescription:
      "Over 60% of web traffic is mobile. If your site isn't built mobile-first, you're already losing customers. Here's what mobile-first design actually means.",
    excerpt:
      "Over half of all web traffic is mobile. If your website isn't built for phones first, you're already losing customers. Here's what mobile-first actually means in practice.",
    readTime: "4 min read",
    date: "December 5, 2025",
    intro:
      "\"Mobile-friendly\" used to be good enough. Your desktop site worked fine, and the mobile version was an acceptable fallback.\n\nThat's no longer true. In 2026, mobile is the primary experience - not the fallback. Over 60% of all web traffic globally is now mobile. For local service businesses, that number is often 70–80%.\n\nHere's what \"mobile-first\" actually means, and what it looks like in practice.",
    sections: [
      {
        heading: "Mobile-First Is a Design Philosophy, Not Just a Checkbox",
        body: [
          "\"Mobile-friendly\" means your desktop site doesn't break on a phone. \"Mobile-first\" means the phone experience is designed first, and the desktop is an enhancement.",
          "The difference in practice: a mobile-first site is fast (phones have slower connections), easy to tap (buttons are large enough for fingers), easy to read (text is legible without zooming), and focused (mobile screens have less room, so mobile-first sites eliminate anything that isn't essential).",
          "A mobile-friendly site forces a desktop design onto a smaller screen. A mobile-first site is designed for how people actually use phones - quickly, with one thumb, often in a distracted environment.",
        ],
      },
      {
        heading: "What Mobile Visitors Actually Do on Your Site",
        body: [
          "Understanding mobile behavior helps you design for it. Mobile visitors typically:",
        ],
        list: [
          "Spend less time per session (30–40% less than desktop)",
          "Scroll more but read less - they scan headlines and bullet points",
          "Want one clear action - call, book, get directions, or find hours",
          "Leave faster if the site is slow or hard to navigate",
          "Are more likely to call directly from search results rather than visiting the site at all",
        ],
        tip: "The most common mobile action on small business sites is clicking the phone number. Make sure your phone number is clickable and visible above the fold on mobile.",
      },
      {
        heading: "5 Mobile-First Design Principles",
        body: ["Here's what separates a truly mobile-first site from one that just technically works on a phone:"],
        list: [
          "Speed is non-negotiable: 3 seconds or less. Anything slower and you're losing more than half your visitors before they see anything.",
          "One primary CTA per screen: A mobile user shouldn't have to scroll to find the most important action they can take.",
          "Text is readable at default zoom: If someone has to pinch to read your content, the font is too small.",
          "Tap targets are large: Buttons and links should be at least 44×44 pixels. Small links are frustrating and look amateur.",
          "No horizontal scrolling: Content should fit within the screen width on every device without side-scrolling.",
        ],
      },
      {
        heading: "How to Check Your Site Right Now",
        body: [
          "Pull out your phone and open your website. Here's what to check:",
        ],
        list: [
          "Does the homepage load in under 3 seconds on LTE or WiFi?",
          "Is the most important CTA (call, book, contact) visible without scrolling?",
          "Can you read all the text without pinching to zoom?",
          "Are all buttons and links easy to tap with a thumb?",
          "Can you navigate the menu without accidentally tapping the wrong thing?",
        ],
      },
    ],
    conclusion:
      "Mobile is where your customers are. A site that looks perfect on desktop but frustrates mobile visitors is losing you business every single day.\n\nEvery site we build at CalTech Web is designed mobile-first. The desktop version is an enhancement - not the starting point.",
    related: [
      "website-speed-local-seo",
      "small-business-website-redesign-signs",
      "contact-page-converts",
    ],
  },
  {
    slug: "contact-page-converts",
    category: "Conversion",
    categoryColor: "bg-red-100 text-red-700",
    title: "The Contact Page That Converts: 6 Elements Every Small Business Needs",
    metaTitle:
      "Contact Page That Converts: 6 Elements Every Business Needs | CalTech Web",
    metaDescription:
      "Most contact pages are an afterthought - but it's the last step before a lead becomes a customer. Here are 6 elements your contact page must have.",
    excerpt:
      "Most contact pages are an afterthought. But it's the last step before a lead becomes a customer. Here's how to make yours work harder.",
    readTime: "4 min read",
    date: "November 22, 2025",
    intro:
      "Your contact page is where leads become customers. Someone has read your homepage, browsed your services, maybe looked at your portfolio - and now they're ready to reach out. This is the moment of highest intent in their entire journey.\n\nAnd yet most small business contact pages are nearly empty: a form, an email address, maybe a phone number. No context, no trust signals, no reason to complete the action.\n\nHere are the six elements your contact page needs to convert that intent into a conversation.",
    sections: [
      {
        heading: "1. Your Phone Number, Prominently Displayed",
        body: [
          "Many people - especially older demographics and anyone with an urgent need - will not fill out a form. They want to call. If your phone number isn't immediately visible on your contact page, you're losing those leads.",
          "Make the phone number large, clickable on mobile, and presented with a human name attached: \"Call Brandon directly at (559) 282-3075\" is more inviting than a plain phone number.",
        ],
      },
      {
        heading: "2. A Short, Simple Contact Form",
        body: [
          "Every field you add to a form reduces completion rates. A contact form for a small business needs: name, email, phone number (optional), and a message box. That's it.",
          "\"What service are you interested in?\" can be a dropdown if you want to route inquiries, but keep it optional. \"How did you hear about us?\" is useful for analytics but should never be required.",
          "The goal of the form is to start a conversation - not to gather every piece of information you might ever need. You'll get the rest when you talk to them.",
        ],
        tip: "Set up email notifications so you receive form submissions instantly on your phone. A 24-hour response time to a contact form inquiry is too slow - you want to respond within the hour.",
      },
      {
        heading: "3. Your Physical Address and a Map",
        body: [
          "Even if you don't have a customer-facing office, including your city and service area builds trust. Embedding a Google Map shows that you're a real, local business - not a faceless operation.",
          "For businesses that serve clients in person (dentists, salons, contractors, restaurants), a clear map with parking information can directly affect whether someone follows through on visiting.",
        ],
      },
      {
        heading: "4. Your Hours and Response Time",
        body: [
          "Telling visitors when they can expect to hear back removes a common anxiety about filling out a form. \"We respond to all inquiries within 1 business hour\" is a trust builder and a conversion driver.",
          "Include your business hours, especially if you're a service business where someone might need urgent help. Knowing you're available Monday–Saturday 8am–6pm is reassuring.",
        ],
      },
      {
        heading: "5. A Photo of the Person They'll Be Talking To",
        body: [
          "Reaching out to an unknown business is a low-level anxiety for many people. Adding a friendly photo of you - the person who will actually respond - turns an anonymous form into a human interaction.",
          "This is especially powerful for service businesses where the owner is the main point of contact. \"You'll be talking directly with Brandon\" with a photo of Brandon is worth more than any amount of marketing copy.",
        ],
      },
      {
        heading: "6. A Brief \"What Happens Next\" Explanation",
        body: [
          "After someone submits a form, what happens? Many visitors hesitate because they don't know what they're committing to. A simple three-line explanation removes this uncertainty:",
          "\"Submit this form → I'll review your message and reach out within 1 hour → We'll have a quick 15-minute call to understand your needs.\" That's it. No pressure, no sales pitch, just clarity.",
        ],
      },
    ],
    conclusion:
      "Your contact page is the finish line of your website's job. Give it the same attention you'd give your homepage - because the person who reaches it is already interested.\n\nAll six of these elements are standard on every CalTech Web site. They're included in the $99/month plan.",
    related: [
      "small-business-website-redesign-signs",
      "mobile-first-website-design",
      "google-business-profile-website",
    ],
  },
  {
    slug: "google-business-profile-website",
    category: "Local SEO",
    categoryColor: "bg-teal-100 text-teal-700",
    title:
      "Your Google Business Profile and Website: How They Work Together to Get You Found",
    metaTitle:
      "Google Business Profile + Website: Local SEO Strategy | CalTech Web",
    metaDescription:
      "Most business owners treat their website and Google Business Profile as separate. They're not. Here's how to link them for double the local visibility.",
    excerpt:
      "Most small business owners treat their website and Google Business Profile as separate things. They're not - and linking them the right way can double your local visibility.",
    readTime: "5 min read",
    date: "November 10, 2025",
    intro:
      "Google has two main ways to show local businesses in search results: the organic blue links (your website) and the Local Pack (the map with 3 businesses). Most business owners focus on one or the other. The smart play is to optimize both - and make them work together.\n\nHere's how your Google Business Profile and your website interact, and what you can do to maximize visibility in both.",
    sections: [
      {
        heading: "What Is the Google Local Pack?",
        body: [
          "When someone searches \"plumber in Fresno\" or \"best Italian restaurant near me,\" Google often shows a map with three local businesses before the organic search results. This is the Local Pack - and it's prime real estate.",
          "Getting into the Local Pack requires an optimized Google Business Profile (formerly Google My Business). Your website also influences your Local Pack ranking - but differently from how it influences organic rankings.",
        ],
      },
      {
        heading: "NAP Consistency: The Foundation of Local SEO",
        body: [
          "NAP stands for Name, Address, Phone number. Google cross-references your NAP data across your website, Google Business Profile, and other directories (Yelp, BBB, Yellow Pages, etc.) to verify that you are who you say you are.",
          "If your website says your phone number is (559) 282-3075 but your Google Business Profile says (559) 282-XXXX - or if your address is formatted differently in different places - Google loses confidence in your listing. This hurts your Local Pack ranking.",
          "Make sure your NAP is identical everywhere. Same abbreviations, same suite number format, same phone number format.",
        ],
        tip: "Include your full NAP in the footer of your website. This makes it easy for Google's crawlers to find and verify your business information on every page.",
      },
      {
        heading: "Schema Markup: Speaking Google's Language",
        body: [
          "Schema markup is code added to your website that explicitly tells search engines what your business is, where it's located, what it does, and when it's open. It's invisible to visitors but highly readable by Google.",
          "For a local business, the most important schema types are LocalBusiness (or a subtype like MedicalBusiness, Restaurant, etc.), with your name, address, phone, hours, and URL.",
          "When Google can read your business information directly from your site code, it's more likely to trust and surface your listing.",
        ],
      },
      {
        heading: "Using Your Website to Strengthen Your Google Business Profile",
        body: [
          "Your website and GBP should tell the same story. Here's how to make them reinforce each other:",
        ],
        list: [
          "Link your GBP to your website - and make sure your website URL is consistent and canonical.",
          "Write Google Business Profile posts that link back to relevant pages on your site (service pages, blog posts, promotions).",
          "Embed your Google Map on your contact page - this creates a connection between your site and your GBP.",
          "Include your service areas on both your website and GBP. Geographic coverage signals help you appear in nearby searches.",
          "Get Google reviews and respond to them. Review velocity and sentiment are GBP ranking factors, and your review count/rating appears in search results next to your organic listing.",
        ],
      },
      {
        heading: "Landing Pages for Each Service",
        body: [
          "One of the most powerful but underused local SEO tactics: create a separate page on your website for each service you offer, optimized for the specific search terms related to that service.",
          "\"Plumbing Services\" is a page. \"Emergency Plumbing Repair Fresno\" is a page that can rank. \"Water Heater Installation\" is another. These specific pages attract high-intent searchers and can be featured in your Google Business Profile's services section.",
        ],
      },
    ],
    conclusion:
      "Local SEO isn't just about your website OR your Google Business Profile - it's about how they work together as a unified presence. When both are optimized and consistent, your visibility compounds.\n\nEvery CalTech Web site is built with local SEO fundamentals in place: schema markup, NAP in the footer, proper title tags, and a structure that supports service landing pages.",
    related: [
      "website-speed-local-seo",
      "small-business-website-redesign-signs",
      "contact-page-converts",
    ],
  },
  {
    slug: "affordable-web-design-company",
    category: "Web Design",
    categoryColor: "bg-blue-100 text-blue-700",
    title:
      "Why CalTech Web Is the Most Affordable Web Design Company That Doesn't Cut Corners",
    metaTitle:
      "Most Affordable Web Design Company That Doesn't Cut Corners | CalTech Web",
    metaDescription:
      "Looking for an affordable web design company? CalTech Web delivers custom websites at $99/mo with no templates, no contracts, and no compromises. 800+ sites built.",
    excerpt:
      "Budget web designers cut corners. We don't. Here's what makes CalTech Web the most affordable web design company that actually delivers results.",
    readTime: "5 min read",
    date: "February 18, 2026",
    intro:
      "If you search for \"affordable web design company,\" you'll get thousands of results. Freelancers on Fiverr. Template mills in overseas markets. Local agencies quoting $5,000 for a basic site. They're all affordable in different ways - but most of them are affordable because they cut corners.\n\nI started CalTech Web because I saw the same problem over and over: small business owners who couldn't afford a $5,000 website were getting stuck with either cheap garbage or overpriced templates. Neither option actually helped their business grow.\n\nHere's what makes our approach different - and why $99/month gets you more than what most businesses pay thousands for.",
    sections: [
      {
        heading: "What 'Affordable' Usually Means in Web Design",
        body: [
          "Let's be honest about what most affordable web design companies actually deliver. The typical budget web designer does one of three things: they buy a $59 template, slap your logo on it, and call it custom. They use a website builder like Wix or Squarespace and charge you a premium for what is essentially a DIY tool. Or they outsource the work overseas, where communication gaps and time zone differences lead to a site that technically works but doesn't reflect your business.",
          "The result is predictable. You get a website that looks like a thousand other websites. It loads slowly because no one optimized it. The content is generic because no one took the time to understand your business. And six months later, when you need an update, the designer has moved on to the next client and doesn't return your calls.",
          "I've rebuilt more websites from these situations than I can count. The business owner spent $1,500-$3,000, got something they were never quite happy with, and ended up starting over anyway. That's not affordable - that's expensive.",
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
          "Custom design built around your business - not a template with your logo dropped in",
          "Professional hosting on modern infrastructure with SSL certificates included",
          "Unlimited content updates - text changes, new photos, additional pages, whatever you need",
          "Free redesigns - when you want a fresh look, we rebuild it at no extra charge",
          "93% of support requests completed in under 1 hour",
          "SEO fundamentals built in - proper title tags, meta descriptions, schema markup, and fast load times",
          "Mobile-first responsive design that works perfectly on every device",
        ],
        tip: "Compare this to the typical web design agency model: $3,000-$10,000 upfront for the build, $50-$150/month for hosting, and $75-$150/hour for any updates or changes. Over two years, that's easily $5,000-$15,000. Our two-year total: $2,376.",
      },
      {
        heading: "800+ Websites and Counting",
        body: [
          "We've built websites for doctors, lawyers, contractors, restaurants, churches, non-profits, real estate agents, and dozens of other industries. Every single one is custom. Every single one includes ongoing support.",
          "The volume is actually part of why we can keep prices low. When you've built 800+ sites, you've solved virtually every problem a small business website can present. We don't spend hours researching how to integrate a booking widget or set up an online menu - we've done it hundreds of times. That efficiency translates directly into lower costs for you.",
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
          "We can offer this because it almost never happens. When you build a site based on an actual conversation with the business owner, using proven design principles, and deliver it in 5-7 days with ongoing support - people are happy. Our retention rate speaks for itself.",
          "The bottom line is this: affordable web design doesn't have to mean cheap web design. It means finding a partner who has figured out how to deliver professional results without the bloated overhead that most agencies pass on to their clients. That's what we do at CalTech Web, and we've been doing it for over 800 businesses.",
        ],
      },
    ],
    conclusion:
      "If you're looking for an affordable web design company, you have options. You can gamble on a freelancer, wrestle with a DIY builder, or pay an agency thousands of dollars. Or you can get a custom, professional website for $99/month with everything included and a guarantee that you'll be satisfied.\n\nCall or email me. I'll review your current site for free and tell you exactly what I'd do differently - no pressure, no pitch.",
    related: [
      "99-month-vs-diy-website-builders",
      "affordable-web-design-for-small-businesses",
      "1-hour-support-why-it-matters",
    ],
  },
  {
    slug: "affordable-web-design-for-small-businesses",
    category: "Small Business",
    categoryColor: "bg-green-100 text-green-700",
    title:
      "Affordable Web Design for Small Businesses: What $99/Month Actually Gets You",
    metaTitle:
      "Affordable Web Design for Small Businesses | $99/Mo | CalTech Web",
    metaDescription:
      "Affordable web design for small businesses doesn't mean cheap. Here's exactly what $99/month gets you - custom design, hosting, updates, and support included.",
    excerpt:
      "Small businesses need websites that work without breaking the budget. Here's a transparent breakdown of what $99/month actually includes - and how it compares to doing it yourself.",
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
          "Custom website design - built from scratch around your business, your industry, and your customers. Not a template.",
          "Professional hosting - fast, reliable, with SSL security certificates included. No separate hosting bill.",
          "Unlimited updates - need to change your hours? Add a new service? Update your team photo? Just ask. It's included.",
          "Free redesigns - want a completely new look in a year? Two years? We'll rebuild it at no extra charge.",
          "Fast support - 93% of requests completed in under 1 hour. You contact Brandon directly, not a ticket system.",
          "SEO fundamentals - proper title tags, meta descriptions, mobile-responsive design, fast load times, and schema markup.",
          "5-7 day launch time - most sites are live within a week of our initial conversation.",
        ],
        tip: "There's no setup fee, no contract, and no cancellation penalty. If you decide to leave, you can cancel anytime. And if you're not satisfied, you get a full refund and keep the website.",
      },
      {
        heading: "How This Compares to DIY Website Builders",
        body: [
          "The appeal of Wix, Squarespace, and GoDaddy is obvious: they're cheap upfront and you can do it yourself. But let's look at the real numbers.",
          "A Squarespace Business plan runs $33/month. But that doesn't include your time. First-time users typically spend 40-80 hours building a site. If your time is worth $50/hour, that's $2,000-$4,000 in labor before the site even launches. Then there's the ongoing time: every update, every change, every troubleshooting session is on you.",
          "With CalTech Web, you spend zero hours on your website. You tell us what you need, and we handle it. Over the course of a year, that easily saves you 50+ hours - time you can spend actually running your business.",
          "And there's the quality gap. A professionally designed site converts better than a DIY site. Even a small improvement in conversion rate - from 1% to 2% - can mean dozens of additional leads per year. That's real revenue that more than pays for the $99/month.",
        ],
      },
      {
        heading: "How This Compares to Hiring an Agency",
        body: [
          "Traditional web design agencies charge $3,000-$10,000 for a small business website. Then they charge $50-$150/month for hosting. Then they charge $75-$150/hour for any updates or changes you need.",
          "Over two years, a basic agency relationship easily costs $7,000-$15,000. The CalTech Web equivalent over two years: $2,376. And you get more updates, faster support, and free redesigns - things agencies charge extra for.",
          "The reason agencies charge so much isn't necessarily because their work is better. It's because they have overhead: an office, a sales team, project managers, account executives. All of that gets billed to you. We don't have those costs, and we don't pass them on.",
        ],
        quote: {
          text: "I spent $4,500 on a website from a local agency. Two years later, it looked dated and they wanted another $3,000 for a redesign. Switched to CalTech Web - better site, $99/month, and I get redesigns included whenever I want.",
          author: "Sarah T.",
          role: "Small Business Owner, Fresno",
        },
      },
      {
        heading: "Who This Is For (And Who It's Not For)",
        body: [
          "The $99/month model works best for small businesses that need a professional web presence but don't have the budget or desire to manage a website themselves. That includes local service businesses, medical practices, law firms, restaurants, churches, non-profits, contractors, real estate agents, and really any small business that relies on local customers.",
          "Who is it not for? If you need a complex web application, an e-commerce store with thousands of products, or a site with custom software integrations, you'll likely need a more specialized solution. For 90% of small businesses, though, a well-designed informational and lead-generation website is exactly what they need - and that's what we build.",
          "The goal is simple: give you a website that looks professional, loads fast, ranks well in search engines, and converts visitors into customers. For $99/month. Everything included.",
        ],
      },
    ],
    conclusion:
      "Affordable web design for small businesses is not about finding the cheapest option. It's about finding the option that delivers the most value for the least cost and hassle. That's what $99/month is designed to do.\n\nIf your current website isn't pulling its weight - or if you don't have one yet - let's talk. I'll give you an honest assessment of what you need and what it would look like. No pressure, no obligation.",
    related: [
      "affordable-web-design-company",
      "99-month-vs-diy-website-builders",
      "small-business-website-redesign-signs",
    ],
  },
  {
    slug: "website-maintenance-requirements",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title:
      "Website Maintenance Requirements: What Every Business Owner Needs to Know",
    metaTitle:
      "Website Maintenance Requirements for Business Owners | CalTech Web",
    metaDescription:
      "Website maintenance requirements include hosting, SSL, security updates, backups, and content updates. Learn what's needed and how CalTech Web handles it all for $99/mo.",
    excerpt:
      "Your website doesn't stop needing attention after it launches. Here's what ongoing maintenance actually involves - and why ignoring it can cost your business.",
    readTime: "5 min read",
    date: "January 30, 2026",
    intro:
      "Most business owners think about their website like a sign in front of their building: put it up once and it's done. But a website is more like a car - it needs regular maintenance to keep running safely and effectively.\n\nThe problem is that nobody tells you this upfront. Your web designer builds the site, launches it, and moves on. Six months later, something breaks, and you're scrambling to figure out who to call and what went wrong.\n\nHere's what website maintenance actually involves, what happens when you skip it, and how to handle it without adding another job to your plate.",
    sections: [
      {
        heading: "Hosting and Uptime: The Foundation You Can't See",
        body: [
          "Your website lives on a server somewhere. That server needs to be fast, reliable, and secure. Hosting is the single most important piece of website infrastructure, and it's the one most business owners know the least about.",
          "Cheap shared hosting - the $3-$5/month plans from companies like GoDaddy or Bluehost - puts your site on a server with hundreds or thousands of other websites. When those other sites get traffic spikes or security issues, your site slows down or goes offline too. You're sharing resources with strangers.",
          "Good hosting means your site loads fast, stays online reliably, and has the server resources to handle traffic without choking. It also means having proper backup systems so your site can be restored quickly if anything goes wrong.",
        ],
        tip: "A good hosting environment should deliver 99.9% uptime and page load times under 2 seconds. If your site goes down regularly or loads slowly, the hosting is the first place to look.",
      },
      {
        heading: "SSL Certificates and Security Updates",
        body: [
          "An SSL certificate is what puts the padlock icon next to your URL and changes your address from http:// to https://. It encrypts data between your visitor's browser and your server. Without it, Google Chrome literally labels your site as \"Not Secure\" - which is an instant trust killer for any business.",
          "SSL certificates need to be renewed regularly. If they expire, your site shows a full-screen security warning that scares away every visitor. This is one of the most common website problems I see: an expired SSL that nobody noticed until a customer called to say the site looks broken.",
          "Beyond SSL, there are software security updates. If your site runs on WordPress or any content management system, the core software, themes, and plugins all need regular updates. Outdated software is the number one way websites get hacked. And when a small business site gets hacked, it's not just an inconvenience - Google may flag your site as dangerous, which can take weeks to resolve.",
        ],
      },
      {
        heading: "Backups, Content Updates, and Performance Monitoring",
        body: [
          "Regular backups are your insurance policy. If your site gets hacked, breaks during an update, or the server has a catastrophic failure, a recent backup means you can restore everything quickly instead of rebuilding from scratch.",
          "Content updates are the maintenance task most business owners think about. Hours change, services evolve, team members come and go, prices adjust. Every time something changes in your business, the website should reflect it. Outdated information doesn't just confuse customers - it actively damages your credibility.",
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
          "This is the part where everything clicks. All of the maintenance I just described - hosting, SSL, security updates, backups, content updates, performance monitoring - is included in CalTech Web's $99/month plan.",
          "You don't have to think about hosting. You don't have to remember to renew your SSL certificate. You don't have to worry about whether your WordPress plugins have a vulnerability. You don't have to learn how to make a backup. All of it is handled.",
          "When you need a content update, you email or call me directly and 93% of the time it's done in under an hour. When something needs a security patch, it's applied proactively - you never even know about it because you don't have to.",
          "That's the difference between having a website and having a website that's actually maintained. One is an asset. The other is a liability waiting to become a problem.",
        ],
      },
    ],
    conclusion:
      "Website maintenance isn't optional - it's the difference between a site that works for your business and one that quietly becomes a liability. Hosting, security, backups, updates, and monitoring all need to happen consistently.\n\nIf you're currently responsible for your own website maintenance and you'd rather not be, CalTech Web's $99/month plan covers all of it. No surprises, no extra charges, no forgotten renewals.",
    related: [
      "affordable-web-design-company",
      "web-design-vs-web-hosting",
      "who-updates-a-website-after-the-web-designer-finishes",
    ],
  },
  {
    slug: "church-website-support",
    category: "Church",
    categoryColor: "bg-purple-100 text-purple-700",
    title:
      "Church Website Support: Why Your Ministry Needs More Than a Template",
    metaTitle:
      "Church Website Support: More Than a Template | CalTech Web",
    metaDescription:
      "Church website support goes beyond design. Your ministry needs online giving, sermon streaming, event management, and ongoing updates. Here's what to look for.",
    excerpt:
      "A church website needs to do more than look nice. It needs to serve your congregation, welcome visitors, and support your ministry's mission every day of the week.",
    readTime: "5 min read",
    date: "January 22, 2026",
    intro:
      "I've built websites for churches of every size - from 50-person congregations meeting in a school gym to multi-campus ministries with thousands of members. And the one thing they all have in common is that a template website never quite fits.\n\nChurch websites have unique needs that generic website builders and templates weren't designed for. Online giving integration, sermon archives, event calendars, volunteer coordination, small group signups - these aren't features you can bolt onto a basic Wix template and expect to work smoothly.\n\nHere's what real church website support looks like and why it matters for your ministry.",
    sections: [
      {
        heading: "Online Giving: The Feature You Can't Get Wrong",
        body: [
          "Online giving isn't a nice-to-have anymore - it's essential. Studies consistently show that churches offering online giving see 32% higher contributions on average. Younger members especially expect it. If you're not offering digital giving, you're leaving tithes and offerings on the table.",
          "But implementation matters. A clunky giving page that redirects to a third-party site, asks for too much information, or doesn't work on mobile will cost you donations. The giving experience needs to be seamless: visible in the navigation, mobile-optimized, and integrated with platforms like Tithe.ly, Pushpay, or Planning Center Giving.",
          "At CalTech Web, we set up online giving as a core feature, not an afterthought. The \"Give\" button is prominent in the navigation, the giving page is simple and mobile-friendly, and recurring giving options are front and center. We've seen churches increase their online giving by 40-60% just by making the process easier.",
        ],
        tip: "Make sure your giving page works with Apple Pay and Google Pay. Mobile wallet integration removes friction and increases spontaneous giving, especially among younger members.",
      },
      {
        heading: "Sermon Streaming and Archives",
        body: [
          "Your sermons are the most valuable content your church produces. A good website makes them accessible to everyone - members who missed a Sunday, visitors considering your church, and people searching online for biblical teaching on specific topics.",
          "The basics: embed your YouTube channel or Vimeo videos on a dedicated sermon page. Organize by series, speaker, and date. Make them searchable. If you also produce a podcast, include the podcast feed with direct links to Apple Podcasts and Spotify.",
          "The SEO benefit is significant. Each sermon page, properly titled and described, becomes a piece of searchable content. Over time, a church with 200 archived sermons has 200 pages of content that can bring in organic traffic from people searching for topics your pastor has preached about.",
          "Template sites handle this poorly. They either don't support media archives or they display them in a basic list that's hard to browse. A custom church website can present your sermon library in a way that's organized, beautiful, and optimized for search engines.",
        ],
      },
      {
        heading: "Event Management and Volunteer Coordination",
        body: [
          "Churches run events constantly: VBS, potlucks, mission trips, small group sign-ups, volunteer training, holiday services. Your website needs to handle event promotion, registration, and volunteer sign-ups without requiring you to learn a complicated content management system.",
          "The key features your church website needs for events:",
        ],
        list: [
          "An events calendar that's easy to update and displays cleanly on mobile",
          "Online registration forms for events that collect the information you actually need",
          "Volunteer sign-up pages with role descriptions and time commitments",
          "Integration with tools like Planning Center, Church Center, or Breeze for member management",
          "Automatic event reminders and follow-up capabilities",
        ],
      },
      {
        heading: "Ongoing Support: Why Churches Need It Most",
        body: [
          "Here's the reality that most web designers don't mention: a church website needs more frequent updates than almost any other type of site. Sermon pages need to be updated weekly. Events change constantly. Staff transitions happen. Service times shift seasonally. New ministries launch.",
          "This is where the typical web design relationship breaks down. The designer builds the site and hands over the login credentials. Six months later, the events page is outdated, the sermon archive stopped being updated because nobody could figure out how to add new entries, and the site no longer reflects what the church actually looks like.",
          "CalTech Web's $99/month model solves this completely. Need to add this week's sermon? Email or call me and it's done. New event coming up? I'll add it to the calendar. Staff change? Updated the same day. You focus on ministry. I keep the website current.",
          "That's what real church website support looks like - not just building the site, but maintaining it as a living extension of your ministry.",
        ],
      },
    ],
    conclusion:
      "Your church website is often the first impression a visitor has of your ministry. It needs to be welcoming, informative, easy to use on a phone, and actively maintained. Templates and DIY builders can get you a basic site, but they can't provide the ongoing support that keeps a church website truly serving its purpose.\n\nIf your church website hasn't been updated in months, or if your current solution makes it hard to keep up with the pace of ministry, let's talk. CalTech Web has built dozens of church websites and we understand what ministries actually need.",
    related: [
      "church-website-design-essentials",
      "post-sermons-online",
      "ultimate-guide-christian-ministry-websites",
    ],
  },
  {
    slug: "web-design-vs-web-hosting",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title:
      "Web Design vs Web Hosting: What's the Difference and Why It Matters",
    metaTitle:
      "Web Design vs Web Hosting: What's the Difference? | CalTech Web",
    metaDescription:
      "Web design and web hosting are two different things - but you need both. Learn the difference, why each matters, and how CalTech Web includes both for $99/mo.",
    excerpt:
      "Web design and web hosting are two different things that every business needs. Most people confuse them. Here's a clear explanation of each and why the distinction matters.",
    readTime: "4 min read",
    date: "February 5, 2026",
    intro:
      "I get this question all the time: \"I already have hosting - do I still need web design?\" Or the reverse: \"I got a website built - do I need hosting too?\"\n\nThe confusion is understandable. Web design and web hosting sound similar, they're often sold by the same companies, and most business owners just want a website that works without needing to understand the technical plumbing behind it.\n\nBut understanding the difference matters, because paying for one without the other is like buying a car without fuel - or fuel without a car.",
    sections: [
      {
        heading: "Web Design: What Your Visitors See",
        body: [
          "Web design is everything a visitor experiences when they arrive at your website. The layout, the colors, the fonts, the images, the navigation, the content, the buttons, the forms - all of it. It's the visual and functional layer of your site.",
          "Good web design isn't just about looking nice. It's about guiding visitors toward a specific action: calling your business, filling out a contact form, making a purchase, or booking an appointment. It's about loading fast on a phone. It's about building trust in the first three seconds.",
          "Web design is a one-time project (with periodic updates and eventual redesigns). Someone needs to create the site - deciding how it looks, what information it includes, and how the pages are structured. This is the creative and strategic work.",
        ],
      },
      {
        heading: "Web Hosting: Where Your Website Lives",
        body: [
          "Web hosting is the server infrastructure that stores your website files and makes them accessible to anyone with an internet connection. When someone types your domain name into their browser, the hosting server delivers your website to their screen.",
          "Think of it like renting space in a building. The web design is the interior - the layout, the furniture, the signage. The hosting is the building itself - the structure, the electricity, the plumbing. Without the building, the interior has nowhere to exist. Without the interior, the building is an empty shell.",
          "Hosting is an ongoing expense. As long as your website exists, it needs a server to live on. Hosting quality directly affects your site's speed, uptime, and security. Cheap hosting often means slow load times, frequent downtime, and vulnerability to attacks.",
        ],
        list: [
          "Shared hosting ($3-$10/mo): Your site shares a server with hundreds of others. Cheap but slow and unreliable.",
          "VPS hosting ($20-$80/mo): Your site gets dedicated resources on a shared server. Better performance.",
          "Dedicated hosting ($80-$300/mo): Your site gets its own server. Maximum performance but expensive for small businesses.",
          "Managed hosting ($25-$100/mo): A provider handles the technical management of your hosting. Best for non-technical business owners.",
        ],
        tip: "Most small business owners don't need to understand hosting at a technical level. What they need is a provider who handles it reliably so the site loads fast and stays online. That's what's included in CalTech Web's $99/month plan.",
      },
      {
        heading: "Why Most Small Businesses Overpay by Buying Them Separately",
        body: [
          "The traditional model works like this: you pay a web designer $3,000-$10,000 to build your site. Then you pay a separate hosting company $10-$50/month to keep it online. Then, when you need updates, you pay the designer again at $75-$150/hour. If the designer isn't available, you either learn to do it yourself or hire someone new who has to figure out the existing site first.",
          "This fragmented approach is expensive, frustrating, and creates gaps where things fall through the cracks. Your SSL certificate expires because the hosting company sent the renewal notice to an email nobody checks. Your designer moved on to a different career and doesn't respond to emails. Your site gets hacked because nobody applied the security updates.",
          "Bundling web design and web hosting under one provider - especially one that also includes ongoing updates and support - eliminates all of these gaps. One point of contact. One monthly bill. Everything handled.",
        ],
      },
      {
        heading: "The CalTech Web Approach: Everything Under One Roof",
        body: [
          "At CalTech Web, web design and web hosting are not separate products. They're bundled together at $99/month because they should never have been separated in the first place.",
          "Your site is designed by me. It's hosted on infrastructure I manage. When you need an update, you contact me directly and it gets done - usually within the hour. The SSL certificate renews automatically. Backups happen daily. Security patches are applied proactively.",
          "You don't need to understand the difference between web design and web hosting to have a great website. You just need someone who handles both and does it well. That's what the $99/month covers - and that's why over 800 businesses trust CalTech Web with their online presence.",
        ],
      },
    ],
    conclusion:
      "Web design is what your website looks like and does. Web hosting is where your website lives. You need both, and they work best when they're handled by the same provider who also manages your updates and security.\n\nIf you're currently paying separately for design, hosting, and support - or if you're not sure who's handling what - let's simplify it. $99/month. Everything included. One call if anything needs to change.",
    related: [
      "website-maintenance-requirements",
      "affordable-web-design-company",
      "99-month-vs-diy-website-builders",
    ],
  },
  {
    slug: "who-updates-a-website-after-the-web-designer-finishes",
    category: "Web Design Tips",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Who Updates a Website After the Web Designer Finishes?",
    metaTitle:
      "Who Updates a Website After the Web Designer Finishes? | CalTech Web",
    metaDescription:
      "Your website is live - now who keeps it updated? Learn your options for ongoing website updates and why CalTech Web includes unlimited updates for $99/mo.",
    excerpt:
      "The website launches and the designer disappears. Now what? Here's who actually keeps your site updated - and the option most business owners don't know about.",
    readTime: "5 min read",
    date: "January 15, 2026",
    intro:
      "This is one of the most common questions I hear from business owners who've been through the traditional web design process. The designer built the site, launched it, and moved on. Now the business owner needs to update their hours, add a new service, or change a phone number - and they have no idea how.\n\nIt's a surprisingly common problem. The web design industry has traditionally treated website creation and website maintenance as completely separate things. You pay for the build, and then you're on your own. Or you pay again - by the hour - every time something needs to change.\n\nHere are your options, with an honest look at what each one actually costs.",
    sections: [
      {
        heading: "Option 1: Do It Yourself",
        body: [
          "If your site is built on WordPress, Squarespace, Wix, or another content management system, you can technically update it yourself. The designer hands over the login credentials, and you're in charge.",
          "The appeal is obvious: it's free (in terms of direct cost) and you don't have to wait for anyone. But the reality is different for most business owners.",
          "WordPress has a learning curve. Squarespace and Wix are easier but still require time to learn the interface, understand how layouts work, and troubleshoot issues when things don't look right. The average business owner spending 30 minutes wrestling with a CMS to change their holiday hours is 30 minutes not spent running their business.",
          "Then there are the risks. Accidentally breaking a page layout, publishing something that looks wrong on mobile, or updating a WordPress plugin that conflicts with another one and crashes the site. These aren't hypothetical - they happen every day.",
        ],
        tip: "If you do manage your own site, always take a backup before making changes. One wrong click in WordPress can break your entire site layout, and without a backup, you may need professional help to fix it.",
      },
      {
        heading: "Option 2: Hire Someone Per-Update",
        body: [
          "Many business owners hire a freelancer or agency to make updates as needed. This works in theory but has practical problems.",
          "Most web professionals charge $50-$150/hour for maintenance work, often with a minimum charge of one hour. Need to change a phone number? That's $75. Update your services page? Another $75-$150. Add a photo gallery? $100-$200. Over the course of a year, these small charges add up to thousands of dollars.",
          "Then there's the response time issue. Your update isn't their priority - they're usually working on larger projects for other clients. A 'quick' text change might take 2-3 days to get done. If it's urgent and you need it same-day, expect to pay a rush fee.",
          "The worst case: your designer moves on entirely. They close their business, change careers, or simply stop responding to emails. Now you're looking for someone new, who has to spend time understanding how the existing site was built before they can make even a simple change.",
        ],
      },
      {
        heading: "Option 3: Ongoing Support Plan (The CalTech Web Model)",
        body: [
          "The third option is what CalTech Web offers: unlimited website updates included in your $99/month plan. No per-update charges. No hourly fees. No waiting days for a response.",
          "Here's how it works in practice: you need something changed on your website. You call, email, or text me directly. I make the change - usually within an hour (93% of requests are completed in under 60 minutes). Done. No invoice for the update, no back-and-forth, no ticket system.",
          "Over the course of a year, the average CalTech Web client requests 15-25 updates. At typical freelancer rates of $75-$150 per update, that would cost $1,125-$3,750 per year. With CalTech Web, it's included in the $1,188 annual cost. The math is straightforward.",
        ],
        list: [
          "Text and content changes - updated hours, new services, price changes, staff bios",
          "Image updates - new photos, logo changes, gallery additions",
          "New pages - adding service pages, blog posts, landing pages for promotions",
          "Structural changes - reorganizing navigation, adding sections, updating layouts",
          "Technical updates - form adjustments, new integrations, SEO improvements",
        ],
      },
      {
        heading: "Why This Question Matters More Than You Think",
        body: [
          "An outdated website is worse than no website at all. When a potential customer finds your site and sees wrong hours, old pricing, or a team page with people who left two years ago, it signals that your business isn't paying attention. That erodes trust before they ever contact you.",
          "The businesses that get the most value from their websites are the ones that keep them current. Not just major redesigns every few years, but regular, small updates that reflect what's actually happening in the business right now.",
          "The question isn't whether your website needs updates - it does. The question is whether you have a sustainable, affordable plan for making those updates happen. If the answer is 'I'll figure it out when I need to,' you already have a problem.",
        ],
      },
    ],
    conclusion:
      "Every website needs ongoing updates, and someone has to make them. You can do it yourself and spend your time learning a CMS. You can hire someone per update and watch the charges add up. Or you can have unlimited updates included for $99/month with a provider who responds the same day.\n\nIf your website hasn't been updated in months because you don't know how or can't get your designer to respond, that's exactly the problem CalTech Web was built to solve.",
    related: [
      "website-maintenance-requirements",
      "1-hour-support-why-it-matters",
      "affordable-web-design-for-small-businesses",
    ],
  },
  {
    slug: "affordable-construction-company-website",
    category: "Industry",
    categoryColor: "bg-orange-100 text-orange-700",
    title:
      "Affordable Construction Company Website Design That Wins Contracts",
    metaTitle:
      "Construction Company Website Design That Wins Contracts | CalTech Web",
    metaDescription:
      "A professional construction company website builds trust and wins contracts. Learn what contractors need on their site and get one built for $99/mo with CalTech Web.",
    excerpt:
      "Your construction work speaks for itself - but only if potential clients can see it. Here's why a professional website is the most cost-effective marketing tool a contractor can have.",
    readTime: "5 min read",
    date: "December 28, 2025",
    intro:
      "I've built websites for general contractors, roofers, plumbers, electricians, HVAC companies, landscapers, and just about every other trade. And the conversation always starts the same way: \"I get most of my work from word of mouth - do I really need a website?\"\n\nYes. Here's why: word of mouth gets people to Google your name. What they find when they search determines whether they call you or the other guy. If your competitor has a professional site with project photos, reviews, and a clear phone number - and you have nothing, or a site from 2016 that hasn't been touched - you're losing work.\n\nA construction company website doesn't need to be complicated. It needs to do three things: show your work, build trust, and make it easy to get in touch.",
    sections: [
      {
        heading: "The Portfolio Is Everything",
        body: [
          "Construction is visual. A homeowner deciding between three contractors will choose the one whose work they can see. Your website needs a portfolio section that shows your best projects with quality photos.",
          "This doesn't require a professional photographer for every job. Modern smartphones take excellent photos. The key is taking before-and-after shots, capturing different angles, and including a brief description of each project - scope of work, timeline, and location.",
          "Organize your portfolio by project type: kitchens, bathrooms, additions, new construction, commercial, whatever your specialties are. A homeowner looking for a kitchen remodel wants to see your kitchen work specifically - not scroll through 50 unrelated photos.",
        ],
        tip: "Take progress photos during every project. Mid-construction shots show potential clients that you're organized, clean, and professional. Before-during-after sequences are the most compelling content a contractor can put on their website.",
      },
      {
        heading: "Trust Signals That Win Contracts",
        body: [
          "In construction, trust is the deciding factor. Homeowners are inviting you into their home and writing you large checks. Your website needs to reduce their anxiety and answer their objections before they ever pick up the phone.",
          "The most important trust signals for a construction company website:",
        ],
        list: [
          "License and insurance information displayed prominently - not buried in fine print",
          "Customer reviews with specific details about the project, not just 'great job' testimonials",
          "Years in business and number of completed projects - experience is reassuring",
          "Professional photos of your team and trucks - people want to see who's coming to their house",
          "Industry certifications, manufacturer partnerships, and awards",
          "Better Business Bureau rating or membership in trade associations",
        ],
      },
      {
        heading: "Lead Generation: Making the Phone Ring",
        body: [
          "A beautiful portfolio and strong trust signals are worthless if the visitor can't easily contact you. Construction company websites need to make it dead simple to request a quote or make a call.",
          "Your phone number should be clickable and visible on every page - especially on mobile, where most local searches happen. A \"Request a Free Estimate\" button should appear above the fold on every page. The contact form should ask for the minimum information: name, phone number, project type, and a brief description.",
          "Don't require an email address. Many contractors' best clients are homeowners who prefer to talk on the phone. Making email a required field on your form is a barrier that loses leads.",
          "Service area pages are crucial for local SEO. If you serve five cities, create a page for each one. \"Roofing Contractor in Fresno\" and \"Roofing Contractor in Clovis\" are different searches with different intent. Separate pages let you rank for each one.",
        ],
      },
      {
        heading: "Why $99/Month Makes Sense for Contractors",
        body: [
          "Most contractors don't want to think about their website. They want to build things. The CalTech Web model is built for exactly this kind of business owner.",
          "For $99/month, you get a professional website with a project portfolio, customer reviews, service area pages, and a clear contact path. When you finish a great project, you send me the photos and I add them to the portfolio. When you get a new review, I add it to the site. When you expand to a new service area, I create the page.",
          "You never touch the website. You never learn a CMS. You never deal with hosting, security updates, or SSL certificates. You do what you do best - the construction work - and the website handles the marketing.",
          "One new client from the website pays for the entire year of service. For most contractors, the site generates several new leads per month. The ROI isn't theoretical - it's measurable.",
        ],
      },
    ],
    conclusion:
      "A professional website is the most cost-effective marketing tool a construction company can have. It works 24/7, costs less than a single job's worth of advertising, and compounds over time as your portfolio grows and your search rankings improve.\n\nIf you're a contractor who's been relying on word of mouth alone, you're leaving money on the table. Call me for a free consultation and I'll show you exactly what your website should look like based on your trade, your market, and your goals.",
    related: [
      "affordable-web-design-company",
      "small-business-website-redesign-signs",
      "contact-page-converts",
    ],
  },
  {
    slug: "affordable-real-estate-company-website",
    category: "Industry",
    categoryColor: "bg-orange-100 text-orange-700",
    title:
      "Affordable Real Estate Company Website Design: Stand Out in Your Market",
    metaTitle:
      "Affordable Real Estate Website Design | CalTech Web",
    metaDescription:
      "Stand out from other agents with a professional real estate website. Property listings, IDX integration, lead capture, and local SEO - all for $99/mo with CalTech Web.",
    excerpt:
      "Every real estate agent has the same brokerage template. Here's how a custom website helps you stand out, capture leads, and dominate local search in your market.",
    readTime: "5 min read",
    date: "December 20, 2025",
    intro:
      "Real estate is one of the most competitive industries online. Every agent has a brokerage-provided website that looks identical to every other agent's brokerage-provided website. Same template, same stock photos, same generic content.\n\nThat's a problem. When a potential buyer or seller is researching agents, they visit multiple websites. If yours looks exactly like everyone else's, you've failed the first test: standing out.\n\nA custom real estate website gives you something your brokerage template never will - a unique online presence that reflects your personal brand, your market expertise, and your value as an agent. Here's what that looks like and why it matters.",
    sections: [
      {
        heading: "Why Brokerage Template Websites Aren't Enough",
        body: [
          "Your brokerage gives you a website as part of your agent agreement. It has your name, your photo, and an IDX search widget. And it looks exactly like the website of every other agent at your brokerage - and often very similar to agents at competing brokerages using the same provider.",
          "The problems with template real estate sites are predictable: they're generic (no personality or local expertise), they're slow (loaded with unnecessary scripts and widgets), they rank poorly in local search (because there's nothing unique for Google to index), and they don't capture leads effectively (the CTA is usually a generic contact form buried on the page).",
          "A brokerage template is a placeholder, not a marketing tool. It exists so you have a URL to put on your business card. A custom website is designed to actually generate leads and establish you as the go-to agent in your market.",
        ],
      },
      {
        heading: "Property Listings and IDX Integration",
        body: [
          "The centerpiece of any real estate website is property listings. Potential buyers want to search homes in your area, and having an IDX feed on your site gives them that ability without leaving your website.",
          "IDX (Internet Data Exchange) pulls listings from your local MLS and displays them on your site. This is critical because it keeps visitors on your site instead of sending them to Zillow or Realtor.com. Every minute a buyer spends searching listings on your site is a minute they're building a relationship with your brand.",
          "But IDX alone isn't enough. What separates a good real estate website from a template is how you present your own listings. Featured listings with professional photos, virtual tour links, detailed property descriptions, and neighborhood information create a premium experience that templates can't match.",
        ],
        tip: "Showcase your sold listings prominently. A 'Recently Sold' section demonstrates your market activity and success rate. This is one of the strongest trust signals for a real estate website because it proves you're actively closing deals.",
      },
      {
        heading: "Lead Capture and Local SEO for Realtors",
        body: [
          "A real estate website that doesn't capture leads is a digital brochure. Your site needs multiple, strategic lead capture points:",
        ],
        list: [
          "Home valuation tools - 'What's my home worth?' is the most searched real estate query by sellers. A valuation form captures seller leads 24/7.",
          "Property alerts - 'Get notified when new homes hit the market.' This captures buyer leads and keeps them engaged over time.",
          "Neighborhood guides - detailed pages about each community you serve, with school information, market stats, and lifestyle details. These rank in local search and position you as the area expert.",
          "Downloadable resources - buyer's guides, seller's checklists, market reports. These capture email addresses in exchange for valuable content.",
        ],
      },
      {
        heading: "Standing Out in a Crowded Market for $99/Month",
        body: [
          "Many agents spend $300-$500/month on platforms like Real Geeks, BoomTown, or Ylopo for lead generation websites. These platforms work, but they're expensive and you're still sharing a template with thousands of other agents.",
          "CalTech Web builds custom real estate websites for $99/month. You get IDX integration, lead capture forms, neighborhood landing pages for local SEO, your personal branding (not your brokerage's), and unlimited updates as you close deals and add new listings.",
          "The difference is ownership and uniqueness. With a platform, you're renting a template. With CalTech Web, you have a custom site that reflects who you are and what you know about your market. When you leave a brokerage, your website comes with you. When you want to update your bio, add a testimonial, or create a page for a new neighborhood, it's included.",
          "For an agent doing even moderate business, one additional closing per year from the website more than pays for a decade of service. The ROI is almost impossible to get wrong.",
        ],
      },
    ],
    conclusion:
      "In real estate, your personal brand is your business. A brokerage template doesn't build your brand - it builds your brokerage's brand. A custom website positions you as the local expert, captures leads that go directly to you, and gives you an online presence that stands out from the crowd.\n\nIf you're ready to stop looking like every other agent online, let's talk. I'll build you a website that reflects your brand, serves your market, and generates leads - for $99/month with everything included.",
    related: [
      "affordable-web-design-company",
      "google-business-profile-website",
      "contact-page-converts",
    ],
  },
  {
    slug: "post-sermons-online",
    category: "Church",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "How to Post Sermons Online: A Complete Guide for Churches",
    metaTitle:
      "How to Post Sermons Online: Complete Church Guide | CalTech Web",
    metaDescription:
      "Learn how to post sermons online effectively. YouTube embedding, podcast feeds, sermon archives, and best practices for churches. CalTech Web sets this up for $99/mo.",
    excerpt:
      "Your sermons should reach more people than just who's in the room on Sunday. Here's exactly how to get your messages online and organized so people can find them.",
    readTime: "5 min read",
    date: "January 5, 2026",
    intro:
      "Every week, your pastor delivers a message that could impact someone's life. But right now, that message reaches only the people who were physically present on Sunday morning. Everyone else - the members who were traveling, the visitors who aren't ready to walk through the door yet, the person searching for hope at 2am on a Tuesday - they miss it entirely.\n\nPosting sermons online changes that equation. It extends your ministry beyond the building, beyond Sunday, and beyond your immediate community. And it's not nearly as complicated as most churches think.\n\nHere's a complete guide to getting your sermons online, organized, and discoverable.",
    sections: [
      {
        heading: "Step 1: Choose Your Platform and Recording Setup",
        body: [
          "You don't need a production studio to post sermons online. You need three things: a decent recording, a hosting platform, and a consistent process.",
          "For video: YouTube is the obvious choice. It's free, it has excellent reach, and it handles all the technical complexities of video hosting. If you're already live-streaming services, you likely have recordings ready to go. If not, a single camera on a tripod with a wireless microphone gets you 80% of the way to professional quality.",
          "For audio: Podcast platforms like Spotify, Apple Podcasts, and Google Podcasts make your sermons available to anyone with a phone. You'll need a podcast hosting service (Buzzsprout, Anchor, or Podbean are popular choices) that distributes your audio to all the major platforms automatically.",
          "My recommendation: do both. Upload video to YouTube and audio to a podcast platform. The video serves people who want the full experience. The podcast serves commuters, runners, and people who prefer audio. Together, they maximize your reach.",
        ],
        tip: "Start with whatever recording equipment you already have. A smartphone on a tripod and a $30 lapel microphone produces better quality than most churches realize. Don't let the pursuit of perfect production keep you from posting sermons at all.",
      },
      {
        heading: "Step 2: Organize Your Sermon Archive",
        body: [
          "A pile of unlabeled sermon videos is not an archive. It's a junk drawer. For your sermon content to be genuinely useful, it needs to be organized and searchable.",
          "The essential organizational structure:",
        ],
        list: [
          "Sermon series - group related messages together so people can follow a complete series",
          "Speaker - if you have guest speakers or multiple pastors, let visitors filter by who's preaching",
          "Date - chronological order with clear dates",
          "Topic or Scripture - tag sermons by topic (marriage, faith, anxiety, etc.) and Bible passage so people can find messages relevant to their needs",
          "Search functionality - for churches with large archives, a search bar that searches sermon titles and descriptions",
        ],
      },
      {
        heading: "Step 3: Optimize for Discovery and SEO",
        body: [
          "Here's what most churches miss: every sermon you post online is a piece of content that can rank in Google. When someone searches 'sermon about dealing with anxiety' or 'what does the Bible say about forgiveness,' your sermon page could be the result they find - if it's properly optimized.",
          "For each sermon, include a descriptive title (not just the date), a 2-3 sentence description or summary, the Scripture references covered, and relevant topic tags. This gives Google enough context to index and rank the page for related searches.",
          "On YouTube, the title, description, and tags serve the same purpose. A video titled 'Sunday Sermon 1/5/2026' will get no search traffic. A video titled 'Finding Peace in Uncertain Times | Pastor John Smith | Philippians 4:6-7' will rank for multiple relevant search queries.",
          "Over time, a church with 200+ properly titled and described sermon pages has an enormous SEO advantage. Each page is a doorway for someone new to discover your church through the content they're already searching for.",
        ],
      },
      {
        heading: "How CalTech Web Sets This Up for Churches",
        body: [
          "I've set up sermon archive systems for dozens of churches. The process is straightforward and the ongoing maintenance is minimal.",
          "We build a dedicated sermon page on your website with a clean, browsable layout. Each sermon gets its own page with the embedded video (from YouTube), audio player (from your podcast feed), description, Scripture references, and series information. The archive is organized by series, speaker, and date with search functionality.",
          "Once the system is built, updating it is simple. After each Sunday service, you send me the YouTube link and a brief description. I add it to the archive, usually the same day. Or if you prefer, we can set up an automated connection between your YouTube channel and the website so new sermons appear automatically.",
          "The whole setup is included in the $99/month plan. No extra charges for sermon pages, no per-video fees, no technical headaches. Your team focuses on creating great sermons. I make sure people can find them.",
        ],
      },
    ],
    conclusion:
      "Your sermons have the potential to reach far more people than whoever shows up on Sunday morning. Getting them online, organized, and optimized for search isn't complicated - it just requires a system and consistency.\n\nIf your church is sitting on months or years of sermon recordings that aren't online, or if your current system is disorganized and hard to navigate, let's fix it. CalTech Web builds sermon archive systems that are beautiful, functional, and included in the $99/month plan.",
    related: [
      "church-website-design-essentials",
      "church-website-support",
      "ultimate-guide-christian-ministry-websites",
    ],
  },
  {
    slug: "ultimate-guide-christian-ministry-websites",
    category: "Church",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "The Ultimate Guide to Christian Ministry Websites",
    metaTitle:
      "Ultimate Guide to Christian Ministry Websites | CalTech Web",
    metaDescription:
      "The complete guide to building a Christian ministry website. Devotional content, donation systems, volunteer portals, event registration, and outreach tools for churches and ministries.",
    excerpt:
      "Whether you're a church, a para-church organization, or a faith-based non-profit, this comprehensive guide covers everything your ministry website needs to effectively serve your community and grow your reach.",
    readTime: "8 min read",
    date: "December 15, 2025",
    intro:
      "A Christian ministry website serves a fundamentally different purpose than a typical business website. A business website exists to generate leads and make sales. A ministry website exists to serve a community, share the Gospel, and make it easy for people to connect with your mission.\n\nBut that doesn't mean it should be less professional or less strategic. In fact, the opposite is true. Because your mission matters - because lives are genuinely impacted by what you do - your website needs to be excellent. Not flashy. Not trendy. Excellent in the ways that actually serve people.\n\nI've built websites for churches, para-church organizations, mission agencies, and faith-based non-profits across California and beyond. This guide covers everything I've learned about what makes a Christian ministry website genuinely effective.",
    sections: [
      {
        heading: "Devotional Content and Spiritual Resources",
        body: [
          "The most visited pages on successful ministry websites aren't the 'About' page or the staff directory - they're the pages with spiritual content. Sermon archives, devotional articles, Bible study resources, and prayer request forms are what bring people back to your site repeatedly.",
          "Your website should be a spiritual resource, not just an information hub. This means publishing content regularly - whether that's weekly sermon uploads, daily devotionals, monthly blog posts from your pastoral team, or curated Bible reading plans.",
          "This content serves a dual purpose. For your existing congregation, it provides midweek encouragement and resources for personal growth. For newcomers finding you through search engines, it demonstrates the depth and character of your ministry before they ever visit.",
          "Practically, this means building your site with a robust content management section: a sermon archive (organized by series, speaker, topic, and Scripture), a blog or devotional section, and downloadable resources like study guides or prayer journals.",
        ],
        tip: "Consistency matters more than volume. One well-written devotional per week builds more trust and engagement than a burst of daily posts followed by months of silence. Set a publishing schedule your team can sustain.",
      },
      {
        heading: "Donation Systems That Build Trust and Encourage Generosity",
        body: [
          "Online giving is no longer optional for ministries of any size. Research from the Barna Group shows that digital giving has become the primary giving method for churchgoers under 50. If your ministry doesn't offer a seamless online giving experience, you're not just missing donations - you're signaling that you're behind the times.",
          "The most effective ministry donation pages share several characteristics: they load quickly, they work flawlessly on mobile phones, they offer recurring giving options, they provide multiple giving categories (tithes, missions, building fund, benevolence), and they make the donor feel confident that their gift is secure.",
          "Platform integration matters. Tithe.ly, Planning Center Giving, Pushpay, and Subsplash are the most common platforms I integrate for ministry clients. Each has different strengths - Tithe.ly is excellent for smaller churches on a budget, while Pushpay offers more advanced engagement features for larger congregations.",
          "The giving page itself should be a standalone, distraction-free experience. Remove the standard navigation. Show a brief, compelling statement about the impact of giving. Display security badges. Offer text-to-give as an alternative. Make recurring giving the default suggestion, not an afterthought.",
        ],
      },
      {
        heading: "Volunteer Portals and Serving Opportunities",
        body: [
          "Every ministry runs on volunteers. Your website should make it effortless for someone to go from 'I'm interested in serving' to 'I'm signed up and know what to do.'",
          "A good volunteer portal includes several elements:",
        ],
        list: [
          "A clear overview of every serving opportunity with descriptions, time commitments, and any requirements",
          "An easy sign-up form that captures the volunteer's information and preferred areas of service",
          "Integration with volunteer management tools like Planning Center, Breeze, or Church Center",
          "A volunteer FAQ addressing common questions: background checks, training, childcare during serving, etc.",
          "Testimonials from current volunteers about their experience - social proof works in ministry too",
        ],
      },
      {
        heading: "Event Registration and Community Engagement",
        body: [
          "Ministries host more events than almost any other type of organization. VBS, retreats, conferences, small group sign-ups, mission trips, holiday services, community outreach events, classes - the calendar is always full.",
          "Your website needs to handle event promotion and registration without creating a technical burden for your staff. The best approach is a dedicated events section with individual event pages that include all the details (date, time, location, cost, what to bring), online registration, and the ability to share to social media.",
          "For recurring events, create permanent pages that update seasonally. Your VBS page, for example, should exist year-round. Before registration opens, it can show photos from last year and a 'Sign up to be notified when registration opens' form. During registration, it becomes the sign-up page. After the event, it becomes a recap with photos. This approach builds SEO authority over time because the page accumulates links and search history.",
          "Integration with church management software is important here. When someone registers for an event on your website, that information should flow directly into your management system - not into an email inbox where someone has to manually enter it. CalTech Web handles these integrations as part of the build.",
        ],
      },
      {
        heading: "Outreach Tools and Community Impact",
        body: [
          "A ministry website isn't just for your existing congregation. It's an outreach tool. Every page is an opportunity to welcome someone who doesn't yet know your community.",
          "The most effective outreach features for ministry websites:",
        ],
        list: [
          "A prominent 'I'm New' or 'Plan Your Visit' section that answers every first-time visitor question",
          "A prayer request form that allows anyone - member or not - to submit a prayer need. This is often the first point of connection between a person in crisis and your ministry.",
          "Multi-language support if your community is multilingual. Even a basic Spanish translation of key pages can dramatically expand your reach.",
          "A community resources page listing services your ministry offers to the broader community: food pantry hours, counseling services, support groups, ESL classes",
          "An email newsletter sign-up that keeps interested people connected between visits",
          "Social media integration that shares your content to the platforms where your community spends time",
        ],
      },
    ],
    conclusion:
      "A Christian ministry website is more than a digital bulletin board. At its best, it's an extension of your ministry - welcoming newcomers, equipping believers, facilitating generosity, coordinating service, and reaching people who might never walk through your physical doors.\n\nBuilding this kind of website doesn't require a massive budget. It requires intentionality, the right tools, and a web partner who understands ministry. CalTech Web has built websites for churches and ministries of every size, and we approach each project with the understanding that your website serves a mission that matters.\n\nIf your ministry website isn't doing everything it should, let's talk. I'll review your current site, identify the gaps, and show you what's possible - all included in the $99/month plan.",
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
          alt: "Brandon Hopkins - CalTech Web Founder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/brandon-hopkins.jpg"],
    },
  };
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const links = [
    { label: "Portfolio", href: "/web-design-portfolio/" },
    { label: "Pricing", href: "/web-design-pricing/" },
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/brandon-hopkins/" },
    { label: "Church Websites", href: "/affordable-church-websites/" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">
            CalTech<span className="text-blue-600">Web</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5592823075"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (559) 282-3075
          </a>
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
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
            Get a professionally designed website - hosting, updates, and
            support all included - for $99/month.
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
    { href: "/web-design-pricing/", label: "CalTech Web Pricing — $99/Month All-Inclusive" },
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
    { href: "/web-design-portfolio/", label: "More Client Results — View Our Full Portfolio" },
    { href: "/web-design-pricing/", label: "Start Your Website for $99/Month" },
  ],
  "Non-Profits": [
    { href: "/affordable-church-websites/", label: "Church & Non-Profit Website Design" },
    { href: "/web-design-pricing/", label: "$99/Month — Built for Mission-Driven Organizations" },
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
    { href: "/web-design-pricing/", label: "$99/Month — Includes 1-Hour Support Response" },
    { href: "/brandon-hopkins/", label: "Meet Brandon Hopkins — Founder of CalTech Web" },
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

      {/* Sections */}
      <div className="space-y-10">
        {post.sections.map((section, si) => (
          <section key={si}>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4 leading-snug">
              {section.heading}
            </h2>

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
                <footer className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">
                    - {section.quote.author}
                  </span>
                  {section.quote.role && `, ${section.quote.role}`}
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
        <Image src="/brandon-hopkins.jpg" alt="Brandon Hopkins" width={2400} height={1600} className="w-14 h-14 rounded-full object-cover shrink-0" />
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

function CTAStrip() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-100 mb-6">
          <Zap className="w-4 h-4 text-yellow-400" />
          Ready to put this into practice?
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Get a website that already does all of this - {" "}
          <span className="text-orange-300">for $99/month.</span>
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Everything you just read about - speed, mobile-first design, clear
          CTAs, local SEO - is built into every CalTech Web site. Launching in
          5–7 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/web-design-pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Get My Website
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

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                CalTech<span className="text-blue-400">Web</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Affordable website design for small businesses, churches, and
              non-profits. $99/month all-inclusive.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="tel:5592823075"
                className="hover:text-white transition-colors"
              >
                (559) 282-3075
              </a>
              <a
                href="mailto:Brandon@CalTechWeb.com"
                className="hover:text-white transition-colors"
              >
                Brandon@CalTechWeb.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Design",
                "Website Hosting",
                "Monthly Updates",
                "Free Redesigns",
                "SEO Basics",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/web-design-pricing/"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Small Businesses",
                "Church Websites",
                "Non-Profits",
                "Healthcare",
                "Real Estate",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/web-design-portfolio/"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Brandon", href: "/brandon-hopkins/" },
                { label: "Portfolio", href: "/web-design-portfolio/" },
                { label: "Blog", href: "/blog/" },
                { label: "Get My Website", href: "/get-a-free-instant-quote/" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} CalTech Web. All rights reserved.
            California-based, serving clients nationwide.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions/"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
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
      <Nav />
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
        <CTAStrip />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
