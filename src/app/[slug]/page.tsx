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

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
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
            href="/web-design-pricing"
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
            href="/web-design-pricing"
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
        <img src="/brandon-hopkins.jpg" alt="Brandon Hopkins" className="w-14 h-14 rounded-full object-cover shrink-0" />
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
            href="/web-design-pricing"
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
            href="/web-design-pricing"
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

  return (
    <>
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
