import { NextRequest, NextResponse } from 'next/server'
import type { WebsiteCheck, ReportCategory, ReportAction, WebsiteReport } from '@/types/website-report'

/* ===================================================================
   Website Report Card API — POST /api/website-report-card/
   Accepts { url: string }, fetches the page HTML, and returns a
   comprehensive website report card with scores, grades, before/after
   projections, and revenue loss estimates.
   =================================================================== */

// --------------- Helpers ---------------

function normalizeUrl(input: string): string {
  let url = input.trim()
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url
  }
  return url
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function stripTags(html: string): string {
  return html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function matchAll(html: string, pattern: RegExp): string[] {
  const results: string[] = []
  let match: RegExpExecArray | null
  const regex = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g')
  while ((match = regex.exec(html)) !== null) {
    results.push(match[0])
  }
  return results
}

function getAttr(tag: string, attr: string): string | null {
  const patterns = [
    new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, 'i'),
    new RegExp(`${attr}\\s*=\\s*'([^']*)'`, 'i'),
    new RegExp(`${attr}\\s*=\\s*([^\\s>]+)`, 'i'),
  ]
  for (const p of patterns) {
    const m = tag.match(p)
    if (m) return m[1]
  }
  return null
}

function getMetaContent(html: string, nameOrProperty: string): string | null {
  const patterns = [
    new RegExp(`<meta[^>]*(?:name|property)\\s*=\\s*["']${nameOrProperty}["'][^>]*content\\s*=\\s*["']([^"']*)["'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]*content\\s*=\\s*["']([^"']*)["'][^>]*(?:name|property)\\s*=\\s*["']${nameOrProperty}["'][^>]*>`, 'i'),
  ]
  for (const p of patterns) {
    const m = html.match(p)
    if (m) return m[1]
  }
  return null
}

function computeGrade(score: number): string {
  if (score >= 90) return 'A+'
  if (score >= 85) return 'A'
  if (score >= 80) return 'A-'
  if (score >= 75) return 'B+'
  if (score >= 70) return 'B'
  if (score >= 65) return 'B-'
  if (score >= 60) return 'C+'
  if (score >= 55) return 'C'
  if (score >= 50) return 'C-'
  if (score >= 45) return 'D+'
  if (score >= 40) return 'D'
  if (score >= 35) return 'D-'
  return 'F'
}

function checkScore(checks: WebsiteCheck[]): number {
  if (checks.length === 0) return 0
  const total = checks.reduce((sum, c) => {
    if (c.status === 'pass') return sum + 100
    if (c.status === 'warning') return sum + 50
    return sum
  }, 0)
  return Math.round(total / checks.length)
}

function hashString(s: string): number {
  let hash = 0
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

function seededRandom(seed: number): () => number {
  let state = seed
  return () => {
    state = (state * 1664525 + 1013904223) & 0x7fffffff
    return state / 0x7fffffff
  }
}

// --------------- Analysis: First Impression (25%) ---------------

function analyzeFirstImpression(html: string, responseTimeMs: number): WebsiteCheck[] {
  const checks: WebsiteCheck[] = []

  // Response time (TTFB)
  if (responseTimeMs <= 600) {
    checks.push({ label: 'Response Time', status: 'pass', detail: `Server responded in ${responseTimeMs}ms. Fast initial response.` })
  } else if (responseTimeMs <= 1500) {
    checks.push({ label: 'Response Time', status: 'warning', detail: `Server responded in ${responseTimeMs}ms. Aim for under 600ms for the best first impression.` })
  } else {
    checks.push({ label: 'Response Time', status: 'fail', detail: `Server took ${responseTimeMs}ms to respond. Visitors may leave before the page even starts loading.` })
  }

  // Font loading — check for web font references
  const hasGoogleFonts = /fonts\.googleapis\.com|fonts\.gstatic\.com/i.test(html)
  const hasFontFace = /@font-face/i.test(html)
  const hasPreloadFont = /<link[^>]*rel\s*=\s*["']preload["'][^>]*as\s*=\s*["']font["']/i.test(html)
  if (hasPreloadFont) {
    checks.push({ label: 'Font Loading', status: 'pass', detail: 'Fonts are preloaded for fast rendering. Text appears quickly without layout shifts.' })
  } else if (hasGoogleFonts || hasFontFace) {
    checks.push({ label: 'Font Loading', status: 'warning', detail: 'Custom fonts detected but not preloaded. Text may flash or shift during loading (FOUT).' })
  } else {
    checks.push({ label: 'Font Loading', status: 'pass', detail: 'Using system fonts. Text renders instantly without additional network requests.' })
  }

  // H1 / value proposition
  const h1Tags = matchAll(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi)
  if (h1Tags.length === 0) {
    checks.push({ label: 'Value Proposition (H1)', status: 'fail', detail: 'No H1 heading found. Visitors should immediately see what your business does and why it matters.' })
  } else {
    const h1Text = stripTags(h1Tags[0]).trim()
    if (h1Text.length < 10) {
      checks.push({ label: 'Value Proposition (H1)', status: 'warning', detail: `H1 is very short: "${h1Text}". Make it a clear statement of what you offer and who it is for.` })
    } else {
      checks.push({ label: 'Value Proposition (H1)', status: 'pass', detail: `Clear heading found: "${h1Text.substring(0, 60)}${h1Text.length > 60 ? '...' : ''}"` })
    }
  }

  // Favicon
  const faviconLink = html.match(/<link[^>]*rel\s*=\s*["'](?:icon|shortcut icon|apple-touch-icon)["'][^>]*>/i)
  const faviconSvg = html.match(/<link[^>]*href\s*=\s*["']data:image\/svg\+xml[^"']*["'][^>]*>/i)
  checks.push({
    label: 'Favicon',
    status: (faviconLink || faviconSvg) ? 'pass' : 'fail',
    detail: (faviconLink || faviconSvg)
      ? 'Favicon detected. Your site shows a branded icon in browser tabs and bookmarks.'
      : 'No favicon found. Browser tabs will show a generic icon, making your site look unfinished.',
  })

  // Logo presence
  const hasLogo = /<img[^>]*(?:logo|brand)[^>]*>/i.test(html) ||
    /class\s*=\s*["'][^"']*logo[^"']*["']/i.test(html) ||
    /id\s*=\s*["'][^"']*logo[^"']*["']/i.test(html)
  checks.push({
    label: 'Logo Visibility',
    status: hasLogo ? 'pass' : 'warning',
    detail: hasLogo
      ? 'Logo element detected. Visitors can immediately identify your brand.'
      : 'No obvious logo element found. Make sure your brand identity is visible above the fold.',
  })

  // Image sizing — check for images with explicit width/height
  const imgTags = matchAll(html, /<img[^>]*>/gi)
  if (imgTags.length === 0) {
    checks.push({ label: 'Image Sizing', status: 'pass', detail: 'No images detected on the page.' })
  } else {
    const sizedImgs = imgTags.filter(tag =>
      (getAttr(tag, 'width') !== null && getAttr(tag, 'height') !== null) ||
      /style\s*=\s*["'][^"']*(?:width|aspect-ratio)[^"']*["']/i.test(tag)
    )
    const pct = Math.round((sizedImgs.length / imgTags.length) * 100)
    if (pct >= 80) {
      checks.push({ label: 'Image Sizing', status: 'pass', detail: `${pct}% of images have explicit dimensions. Minimal layout shift during loading.` })
    } else if (pct >= 40) {
      checks.push({ label: 'Image Sizing', status: 'warning', detail: `Only ${pct}% of images have explicit dimensions. Missing sizes cause layout shifts that frustrate visitors.` })
    } else {
      checks.push({ label: 'Image Sizing', status: 'fail', detail: `Only ${pct}% of images have explicit dimensions. The page will visibly jump and shift as images load.` })
    }
  }

  return checks
}

// --------------- Analysis: Mobile Experience (20%) ---------------

function analyzeMobileExperience(html: string): WebsiteCheck[] {
  const checks: WebsiteCheck[] = []

  // Viewport meta
  const viewportMeta = getMetaContent(html, 'viewport')
  if (viewportMeta && /width\s*=\s*device-width/i.test(viewportMeta)) {
    checks.push({ label: 'Viewport Configuration', status: 'pass', detail: 'Viewport is set to device-width. Page adapts to mobile screen sizes.' })
  } else if (viewportMeta) {
    checks.push({ label: 'Viewport Configuration', status: 'warning', detail: `Viewport meta found but may not be optimal: "${viewportMeta}". Use "width=device-width, initial-scale=1".` })
  } else {
    checks.push({ label: 'Viewport Configuration', status: 'fail', detail: 'No viewport meta tag. Mobile visitors see a tiny, zoomed-out version of your desktop site.' })
  }

  // Media queries (responsive CSS)
  const mediaQueries = matchAll(html, /@media[^{]*\{/gi)
  const hasExternalResponsive = /<link[^>]*media\s*=\s*["'][^"']*max-width[^"']*["']/i.test(html)
  if (mediaQueries.length >= 3 || hasExternalResponsive) {
    checks.push({ label: 'Responsive Design', status: 'pass', detail: `Found ${mediaQueries.length} media queries. Site has responsive CSS for different screen sizes.` })
  } else if (mediaQueries.length >= 1) {
    checks.push({ label: 'Responsive Design', status: 'warning', detail: `Only ${mediaQueries.length} media query found. Site may not fully adapt to all screen sizes.` })
  } else {
    checks.push({ label: 'Responsive Design', status: 'fail', detail: 'No media queries detected in inline styles. The site may not be responsive to different screen sizes.' })
  }

  // Flex/grid usage (modern layout)
  const hasFlexbox = /display\s*:\s*flex/i.test(html)
  const hasGrid = /display\s*:\s*grid/i.test(html)
  const hasTailwindFlex = /class\s*=\s*["'][^"']*(?:\bflex\b|\bgrid\b)[^"']*["']/i.test(html)
  if (hasFlexbox || hasGrid || hasTailwindFlex) {
    checks.push({ label: 'Modern Layout', status: 'pass', detail: 'Uses flexbox or CSS grid. Content will reflow naturally on smaller screens.' })
  } else {
    checks.push({ label: 'Modern Layout', status: 'warning', detail: 'No flexbox or CSS grid detected in inline styles. Older layout methods may not adapt well to mobile.' })
  }

  // Font sizes — check for very small text
  const tinyFontPatterns = /font-size\s*:\s*(\d+)\s*px/gi
  let tinyCount = 0
  let fontMatch: RegExpExecArray | null
  const fontRegex = new RegExp(tinyFontPatterns.source, tinyFontPatterns.flags)
  while ((fontMatch = fontRegex.exec(html)) !== null) {
    if (parseInt(fontMatch[1]) < 12) tinyCount++
  }
  if (tinyCount === 0) {
    checks.push({ label: 'Readable Font Sizes', status: 'pass', detail: 'No tiny font sizes detected in inline styles. Text should be comfortable to read on mobile.' })
  } else {
    checks.push({ label: 'Readable Font Sizes', status: 'warning', detail: `Found ${tinyCount} instance${tinyCount > 1 ? 's' : ''} of font sizes below 12px. Small text is hard to read on phones.` })
  }

  // Touch targets — check for small clickable elements
  const linkTags = matchAll(html, /<a[^>]*>/gi)
  const buttonTags = matchAll(html, /<button[^>]*>/gi)
  const inputTags = matchAll(html, /<input[^>]*type\s*=\s*["'](?:submit|button)["'][^>]*>/gi)
  const totalTouchTargets = linkTags.length + buttonTags.length + inputTags.length
  const hasPadding = /(?:padding|py-|px-|p-)\s*[:]*\s*(?:\d|0\.)/i.test(html)

  if (totalTouchTargets > 0 && hasPadding) {
    checks.push({ label: 'Touch-Friendly Targets', status: 'pass', detail: `${totalTouchTargets} interactive elements found with padding styles. Buttons and links should be easy to tap.` })
  } else if (totalTouchTargets > 0) {
    checks.push({ label: 'Touch-Friendly Targets', status: 'warning', detail: `${totalTouchTargets} interactive elements found but padding may be insufficient. Aim for 44x44px minimum tap targets.` })
  } else {
    checks.push({ label: 'Touch-Friendly Targets', status: 'warning', detail: 'Very few interactive elements detected. Mobile visitors need clear, tappable buttons and links.' })
  }

  return checks
}

// --------------- Analysis: Trust & Credibility (20%) ---------------

function analyzeTrustCredibility(html: string, url: string): WebsiteCheck[] {
  const checks: WebsiteCheck[] = []

  // HTTPS
  const isHttps = url.startsWith('https://')
  checks.push({
    label: 'Secure Connection (HTTPS)',
    status: isHttps ? 'pass' : 'fail',
    detail: isHttps
      ? 'Site is served over HTTPS. Visitors see a lock icon in the browser bar.'
      : 'Site is NOT using HTTPS. Browsers display a "Not Secure" warning that scares away customers.',
  })

  // Phone number visibility
  const hasPhone = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(html)
  checks.push({
    label: 'Phone Number Visible',
    status: hasPhone ? 'pass' : 'fail',
    detail: hasPhone
      ? 'Phone number found on the page. Customers can easily call you.'
      : 'No phone number found. Small businesses that show a phone number convert significantly better.',
  })

  // Email visibility
  const hasEmail = /[\w.+-]+@[\w-]+\.[\w.]+/.test(html) || /mailto:/i.test(html)
  checks.push({
    label: 'Email Address',
    status: hasEmail ? 'pass' : 'warning',
    detail: hasEmail
      ? 'Email contact found. Visitors have another way to reach you.'
      : 'No email address detected. Some customers prefer email over phone calls.',
  })

  // Physical address
  const hasAddress = /<address/i.test(html) || /\d{5}(-\d{4})?/.test(html) ||
    /\d+\s+[\w\s]+(?:St|Ave|Blvd|Dr|Rd|Ln|Way|Ct|Pl)/i.test(html)
  checks.push({
    label: 'Physical Address',
    status: hasAddress ? 'pass' : 'warning',
    detail: hasAddress
      ? 'Physical address or location indicator found. Builds trust for local customers.'
      : 'No physical address detected. Showing a location builds trust for local service businesses.',
  })

  // Social media links
  const socialPlatforms = ['facebook.com', 'instagram.com', 'twitter.com', 'x.com', 'linkedin.com', 'youtube.com', 'tiktok.com', 'yelp.com']
  const foundSocials = socialPlatforms.filter(p => html.toLowerCase().includes(p))
  if (foundSocials.length >= 2) {
    checks.push({ label: 'Social Media Presence', status: 'pass', detail: `${foundSocials.length} social platform links found. Active social presence builds credibility.` })
  } else if (foundSocials.length === 1) {
    checks.push({ label: 'Social Media Presence', status: 'warning', detail: 'Only 1 social platform link found. Add more social profiles to build trust.' })
  } else {
    checks.push({ label: 'Social Media Presence', status: 'fail', detail: 'No social media links found. Social profiles prove your business is real and active.' })
  }

  // Testimonials / reviews
  const hasTestimonials = /testimonial|review|rating|stars|★|⭐|"[^"]{20,}".*—|quote/i.test(html)
  checks.push({
    label: 'Testimonials / Reviews',
    status: hasTestimonials ? 'pass' : 'fail',
    detail: hasTestimonials
      ? 'Testimonial or review content detected. Social proof helps convert visitors.'
      : 'No testimonials or reviews found. Customer reviews are one of the strongest conversion tools.',
  })

  // Privacy policy link
  const hasPrivacy = /privacy[\s-]*policy|privacy\.html|\/privacy/i.test(html)
  checks.push({
    label: 'Privacy Policy',
    status: hasPrivacy ? 'pass' : 'warning',
    detail: hasPrivacy
      ? 'Privacy policy link found. Shows professionalism and legal compliance.'
      : 'No privacy policy link detected. Required by law for sites that collect any user data.',
  })

  return checks
}

// --------------- Analysis: Lead Capture (20%) ---------------

function analyzeLeadCapture(html: string): WebsiteCheck[] {
  const checks: WebsiteCheck[] = []

  // Contact form
  const hasForms = matchAll(html, /<form[^>]*>/gi).length
  const hasInputs = matchAll(html, /<input[^>]*type\s*=\s*["'](?:text|email|tel)["'][^>]*>/gi).length
  const hasTextarea = /<textarea/i.test(html)

  if (hasForms > 0 && (hasInputs > 0 || hasTextarea)) {
    checks.push({ label: 'Contact Form', status: 'pass', detail: `${hasForms} form${hasForms > 1 ? 's' : ''} found with input fields. Visitors can easily submit inquiries.` })
  } else if (hasForms > 0) {
    checks.push({ label: 'Contact Form', status: 'warning', detail: 'Form element found but missing visible input fields. Make sure the form is functional and easy to fill out.' })
  } else {
    checks.push({ label: 'Contact Form', status: 'fail', detail: 'No contact form found. A form is one of the most important ways to capture leads from your website.' })
  }

  // CTA buttons
  const buttonTexts = matchAll(html, /<(?:a|button)[^>]*>[\s\S]*?<\/(?:a|button)>/gi)
    .map(tag => stripTags(tag).toLowerCase())
  const ctaKeywords = ['get started', 'contact', 'call', 'quote', 'free', 'schedule', 'book', 'request', 'start', 'sign up', 'learn more', 'get my']
  const ctaCount = buttonTexts.filter(text => ctaKeywords.some(kw => text.includes(kw))).length

  if (ctaCount >= 2) {
    checks.push({ label: 'Call-to-Action Buttons', status: 'pass', detail: `${ctaCount} CTA buttons found with action-oriented text. Multiple conversion opportunities for visitors.` })
  } else if (ctaCount === 1) {
    checks.push({ label: 'Call-to-Action Buttons', status: 'warning', detail: '1 CTA button found. Consider adding CTAs in multiple sections so visitors always see a next step.' })
  } else {
    checks.push({ label: 'Call-to-Action Buttons', status: 'fail', detail: 'No clear call-to-action buttons found. Every page should tell visitors exactly what to do next.' })
  }

  // Phone in header (above fold)
  const headerHtml = html.match(/<header[^>]*>[\s\S]*?<\/header>/i)?.[0] ||
    html.match(/<nav[^>]*>[\s\S]*?<\/nav>/i)?.[0] || ''
  const phoneInHeader = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(headerHtml) ||
    /tel:/i.test(headerHtml)
  checks.push({
    label: 'Phone in Header',
    status: phoneInHeader ? 'pass' : 'fail',
    detail: phoneInHeader
      ? 'Phone number is in the header. Mobile visitors can tap to call instantly.'
      : 'No phone number in the header/navigation. Put your phone number where visitors see it first.',
  })

  // Clickable phone links (tel:)
  const telLinks = matchAll(html, /<a[^>]*href\s*=\s*["']tel:[^"']*["'][^>]*>/gi)
  checks.push({
    label: 'Click-to-Call Links',
    status: telLinks.length > 0 ? 'pass' : 'fail',
    detail: telLinks.length > 0
      ? `${telLinks.length} click-to-call link${telLinks.length > 1 ? 's' : ''} found. Mobile visitors can tap to dial.`
      : 'No tel: links found. Mobile visitors cannot tap your phone number to call. This is a huge missed opportunity.',
  })

  // Action-oriented text
  const bodyText = stripTags(html).toLowerCase()
  const actionPhrases = ['get a quote', 'free estimate', 'call us', 'contact us', 'get started', 'schedule', 'book now', 'request', 'free consultation']
  const foundPhrases = actionPhrases.filter(p => bodyText.includes(p))
  if (foundPhrases.length >= 3) {
    checks.push({ label: 'Action-Oriented Language', status: 'pass', detail: `${foundPhrases.length} action phrases found. Your copy encourages visitors to take the next step.` })
  } else if (foundPhrases.length >= 1) {
    checks.push({ label: 'Action-Oriented Language', status: 'warning', detail: `Only ${foundPhrases.length} action phrase${foundPhrases.length > 1 ? 's' : ''} found. Use more direct language like "Get a Free Quote" or "Call Us Today".` })
  } else {
    checks.push({ label: 'Action-Oriented Language', status: 'fail', detail: 'No action-oriented phrases found. Your website reads like a brochure instead of a sales tool.' })
  }

  return checks
}

// --------------- Analysis: SEO Basics (15%) ---------------

function analyzeSeoBasics(html: string): WebsiteCheck[] {
  const checks: WebsiteCheck[] = []

  // Title tag
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  const title = titleMatch ? titleMatch[1].trim() : ''
  if (!title) {
    checks.push({ label: 'Title Tag', status: 'fail', detail: 'No title tag found. This is the #1 on-page SEO factor. Google uses it as the main link in search results.' })
  } else if (title.length < 30) {
    checks.push({ label: 'Title Tag', status: 'warning', detail: `Title is too short (${title.length} chars). Aim for 30-60 characters to maximize search visibility.` })
  } else if (title.length > 60) {
    checks.push({ label: 'Title Tag', status: 'warning', detail: `Title is too long (${title.length} chars). Google truncates titles over 60 characters in search results.` })
  } else {
    checks.push({ label: 'Title Tag', status: 'pass', detail: `Title tag is well-optimized at ${title.length} characters.` })
  }

  // Meta description
  const metaDesc = getMetaContent(html, 'description')
  if (!metaDesc) {
    checks.push({ label: 'Meta Description', status: 'fail', detail: 'No meta description. Google shows a random snippet from your page instead of a compelling message you control.' })
  } else if (metaDesc.length < 120) {
    checks.push({ label: 'Meta Description', status: 'warning', detail: `Meta description is short (${metaDesc.length} chars). Aim for 120-160 characters to fill the search result snippet.` })
  } else if (metaDesc.length > 160) {
    checks.push({ label: 'Meta Description', status: 'warning', detail: `Meta description is too long (${metaDesc.length} chars). Google truncates over 160 characters.` })
  } else {
    checks.push({ label: 'Meta Description', status: 'pass', detail: `Meta description is well-optimized at ${metaDesc.length} characters.` })
  }

  // H1 count
  const h1Tags = matchAll(html, /<h1[^>]*>/gi)
  if (h1Tags.length === 0) {
    checks.push({ label: 'H1 Heading', status: 'fail', detail: 'No H1 heading found. Every page needs exactly one H1 that tells Google what the page is about.' })
  } else if (h1Tags.length > 1) {
    checks.push({ label: 'H1 Heading', status: 'warning', detail: `Found ${h1Tags.length} H1 tags. Best practice is exactly one H1 per page for clear topic hierarchy.` })
  } else {
    checks.push({ label: 'H1 Heading', status: 'pass', detail: 'Single H1 heading found. Clear topic signal for search engines.' })
  }

  // Image alt text
  const imgTags = matchAll(html, /<img[^>]*>/gi)
  const imgsWithAlt = imgTags.filter(tag => {
    const alt = getAttr(tag, 'alt')
    return alt !== null && alt.trim().length > 0
  })
  if (imgTags.length === 0) {
    checks.push({ label: 'Image Alt Text', status: 'pass', detail: 'No images found (may be fine for text-heavy content).' })
  } else {
    const altPercent = Math.round((imgsWithAlt.length / imgTags.length) * 100)
    if (altPercent === 100) {
      checks.push({ label: 'Image Alt Text', status: 'pass', detail: `All ${imgTags.length} images have alt text. Great for accessibility and image search.` })
    } else if (altPercent >= 70) {
      checks.push({ label: 'Image Alt Text', status: 'warning', detail: `${imgsWithAlt.length} of ${imgTags.length} images (${altPercent}%) have alt text. Add alt attributes to the rest.` })
    } else {
      checks.push({ label: 'Image Alt Text', status: 'fail', detail: `Only ${imgsWithAlt.length} of ${imgTags.length} images (${altPercent}%) have alt text. Search engines can't understand untagged images.` })
    }
  }

  // Structured data
  const jsonLdMatches = matchAll(html, /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>/gi)
  const hasMicrodata = /itemscope|itemtype/i.test(html)
  if (jsonLdMatches.length > 0) {
    checks.push({ label: 'Structured Data', status: 'pass', detail: `Found ${jsonLdMatches.length} JSON-LD block${jsonLdMatches.length > 1 ? 's' : ''}. Enables rich results in Google (star ratings, FAQs, etc).` })
  } else if (hasMicrodata) {
    checks.push({ label: 'Structured Data', status: 'pass', detail: 'Microdata structured data found on the page.' })
  } else {
    checks.push({ label: 'Structured Data', status: 'warning', detail: 'No structured data (JSON-LD) found. Adding LocalBusiness schema can show your address and phone in search results.' })
  }

  return checks
}

// --------------- After-state Projection ---------------

function projectAfterScore(currentScore: number): number {
  if (currentScore >= 90) return Math.min(currentScore + 3, 98)
  if (currentScore >= 75) return 90 + Math.round((currentScore - 75) / 3)
  if (currentScore >= 50) return 85 + Math.round((currentScore - 50) / 5)
  return 85 + Math.round(currentScore / 10)
}

// --------------- Revenue Loss Estimate ---------------

function estimateRevenueLoss(score: number): number {
  if (score >= 85) return 200
  if (score >= 70) return 500
  if (score >= 55) return 1000
  if (score >= 40) return 1500
  if (score >= 25) return 2000
  return 2500
}

// --------------- Report Generation ---------------

function generateTopIssues(categories: ReportCategory[]): string[] {
  const issues: string[] = []
  for (const cat of categories) {
    for (const check of cat.checks) {
      if (check.status === 'fail') {
        issues.push(`${check.label}: ${check.detail.split('.')[0]}.`)
      }
    }
  }
  return issues.slice(0, 5)
}

function generateStrengths(categories: ReportCategory[]): string[] {
  const strengths: string[] = []
  for (const cat of categories) {
    for (const check of cat.checks) {
      if (check.status === 'pass') {
        strengths.push(`${check.label}: ${check.detail.split('.')[0]}.`)
      }
    }
  }
  return strengths.slice(0, 5)
}

function generateActions(categories: ReportCategory[]): ReportAction[] {
  const failChecks: { label: string; category: string; detail: string }[] = []
  const warnChecks: { label: string; category: string; detail: string }[] = []

  for (const cat of categories) {
    for (const check of cat.checks) {
      if (check.status === 'fail') {
        failChecks.push({ label: check.label, category: cat.name, detail: check.detail })
      } else if (check.status === 'warning') {
        warnChecks.push({ label: check.label, category: cat.name, detail: check.detail })
      }
    }
  }

  const actions: ReportAction[] = []

  if (failChecks.length > 0) {
    const critical = failChecks[0]
    actions.push({
      title: `Fix: ${critical.label}`,
      description: critical.detail.split('.')[0] + '. This is hurting your business right now and should be fixed immediately.',
      urgency: 'Immediate',
      impact: 'High',
    })
  }

  const nextIssue = failChecks[1] || warnChecks[0]
  if (nextIssue) {
    actions.push({
      title: `Improve: ${nextIssue.label}`,
      description: nextIssue.detail.split('.')[0] + '. Addressing this will noticeably improve your website\'s effectiveness.',
      urgency: failChecks[1] ? 'Immediate' : 'This Month',
      impact: failChecks[1] ? 'High' : 'Medium',
    })
  }

  const hasLeadIssues = [...failChecks, ...warnChecks].some(c => c.category === 'Lead Capture')
  const hasTrustIssues = [...failChecks, ...warnChecks].some(c => c.category === 'Trust & Credibility')

  if (hasLeadIssues) {
    actions.push({
      title: 'Add Lead Capture Elements',
      description: 'Your website is missing key elements that turn visitors into leads — contact forms, click-to-call links, and clear CTAs. CalTech Web builds these into every site.',
      urgency: 'This Month',
      impact: 'High',
    })
  } else if (hasTrustIssues) {
    actions.push({
      title: 'Build Trust Signals',
      description: 'Add testimonials, social media links, and contact information to establish credibility. Visitors who trust your site are far more likely to call or fill out a form.',
      urgency: 'This Month',
      impact: 'Medium',
    })
  } else {
    actions.push({
      title: 'Monitor & Maintain',
      description: 'Your website fundamentals are solid. Keep content fresh, monitor speed, and ensure all forms and links stay functional.',
      urgency: 'Ongoing',
      impact: 'Low',
    })
  }

  return actions.slice(0, 3)
}

// --------------- Mock Fallback ---------------

function generateMockReport(url: string, domain: string, errorMessage: string): WebsiteReport {
  const seed = hashString(domain)
  const rand = seededRandom(seed)

  // Generate deterministic but realistic scores per category
  const mockCategories: ReportCategory[] = [
    { name: 'First Impression', weight: 25, score: 0, afterScore: 0, checks: [] },
    { name: 'Mobile Experience', weight: 20, score: 0, afterScore: 0, checks: [] },
    { name: 'Trust & Credibility', weight: 20, score: 0, afterScore: 0, checks: [] },
    { name: 'Lead Capture', weight: 20, score: 0, afterScore: 0, checks: [] },
    { name: 'SEO Basics', weight: 15, score: 0, afterScore: 0, checks: [] },
  ]

  const mockCheckSets: { name: string; checks: string[] }[] = [
    { name: 'First Impression', checks: ['Response Time', 'Font Loading', 'Value Proposition (H1)', 'Favicon', 'Logo Visibility', 'Image Sizing'] },
    { name: 'Mobile Experience', checks: ['Viewport Configuration', 'Responsive Design', 'Modern Layout', 'Readable Font Sizes', 'Touch-Friendly Targets'] },
    { name: 'Trust & Credibility', checks: ['Secure Connection (HTTPS)', 'Phone Number Visible', 'Email Address', 'Physical Address', 'Social Media Presence', 'Testimonials / Reviews', 'Privacy Policy'] },
    { name: 'Lead Capture', checks: ['Contact Form', 'Call-to-Action Buttons', 'Phone in Header', 'Click-to-Call Links', 'Action-Oriented Language'] },
    { name: 'SEO Basics', checks: ['Title Tag', 'Meta Description', 'H1 Heading', 'Image Alt Text', 'Structured Data'] },
  ]

  for (let i = 0; i < mockCategories.length; i++) {
    const cat = mockCategories[i]
    const checkNames = mockCheckSets[i].checks
    cat.checks = checkNames.map(label => {
      const r = rand()
      const status: 'pass' | 'warning' | 'fail' = r > 0.55 ? 'pass' : r > 0.25 ? 'warning' : 'fail'
      return {
        label,
        status,
        detail: status === 'pass'
          ? `${label} looks good on this site.`
          : status === 'warning'
            ? `${label} could be improved for better results.`
            : `${label} needs attention — this may be costing you customers.`,
      }
    })
    cat.score = checkScore(cat.checks)
    cat.afterScore = projectAfterScore(cat.score)
  }

  const overallScore = Math.round(
    mockCategories[0].score * 0.25 +
    mockCategories[1].score * 0.20 +
    mockCategories[2].score * 0.20 +
    mockCategories[3].score * 0.20 +
    mockCategories[4].score * 0.15
  )
  const afterScore = Math.round(
    mockCategories[0].afterScore * 0.25 +
    mockCategories[1].afterScore * 0.20 +
    mockCategories[2].afterScore * 0.20 +
    mockCategories[3].afterScore * 0.20 +
    mockCategories[4].afterScore * 0.15
  )

  return {
    url,
    domain,
    overallScore,
    afterScore,
    grade: computeGrade(overallScore),
    afterGrade: computeGrade(afterScore),
    categories: mockCategories,
    topIssues: [
      `Unable to fetch ${url}. ${errorMessage}`,
      'Ensure the URL is correct and the site is publicly accessible.',
      'If the site blocks automated requests, some checks cannot be completed.',
    ],
    strengths: url.startsWith('https://') ? ['URL uses HTTPS protocol.'] : [],
    actions: [
      {
        title: 'Verify Your URL',
        description: `We could not fetch ${url}. Double-check the URL and make sure the site is live.`,
        urgency: 'Immediate',
        impact: 'High',
      },
      {
        title: 'Check Server Configuration',
        description: 'If the site is live but the scan fails, the server may be blocking automated requests.',
        urgency: 'Immediate',
        impact: 'High',
      },
      {
        title: 'Try Again',
        description: 'If this was a temporary issue, wait a few minutes and run the report card again.',
        urgency: 'This Month',
        impact: 'Medium',
      },
    ],
    estimatedRevenueLoss: estimateRevenueLoss(overallScore),
  }
}

// --------------- Main Handler ---------------

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url: rawUrl } = body

    if (!rawUrl || typeof rawUrl !== 'string' || !rawUrl.trim()) {
      return NextResponse.json(
        { error: 'A URL is required. Please enter your website address.' },
        { status: 400 }
      )
    }

    const url = normalizeUrl(rawUrl)
    const domain = extractDomain(url)

    try {
      new URL(url)
    } catch {
      return NextResponse.json(
        { error: `"${rawUrl}" does not appear to be a valid URL. Try entering something like example.com` },
        { status: 400 }
      )
    }

    // Fetch the page HTML and measure response time
    let html: string
    let responseTimeMs: number

    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000)
      const startTime = Date.now()

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'identity',
          'Cache-Control': 'no-cache',
        },
        signal: controller.signal,
        redirect: 'follow',
      })

      clearTimeout(timeout)
      responseTimeMs = Date.now() - startTime

      if (!response.ok) {
        const mockReport = generateMockReport(url, domain, `Server returned HTTP ${response.status} (${response.statusText})`)
        return NextResponse.json(mockReport)
      }

      html = await response.text()
    } catch (fetchError: unknown) {
      const message = fetchError instanceof Error
        ? (fetchError.name === 'AbortError'
          ? 'Request timed out after 10 seconds'
          : fetchError.message)
        : 'Unknown fetch error'

      const mockReport = generateMockReport(url, domain, message)
      return NextResponse.json(mockReport)
    }

    // Run all 5 analysis functions
    const firstImpressionChecks = analyzeFirstImpression(html, responseTimeMs)
    const mobileChecks = analyzeMobileExperience(html)
    const trustChecks = analyzeTrustCredibility(html, url)
    const leadChecks = analyzeLeadCapture(html)
    const seoChecks = analyzeSeoBasics(html)

    const categories: ReportCategory[] = [
      { name: 'First Impression', weight: 25, score: checkScore(firstImpressionChecks), afterScore: 0, checks: firstImpressionChecks },
      { name: 'Mobile Experience', weight: 20, score: checkScore(mobileChecks), afterScore: 0, checks: mobileChecks },
      { name: 'Trust & Credibility', weight: 20, score: checkScore(trustChecks), afterScore: 0, checks: trustChecks },
      { name: 'Lead Capture', weight: 20, score: checkScore(leadChecks), afterScore: 0, checks: leadChecks },
      { name: 'SEO Basics', weight: 15, score: checkScore(seoChecks), afterScore: 0, checks: seoChecks },
    ]

    // Project "after" scores
    for (const cat of categories) {
      cat.afterScore = projectAfterScore(cat.score)
    }

    // Weighted overall score
    const overallScore = Math.round(
      categories[0].score * 0.25 +
      categories[1].score * 0.20 +
      categories[2].score * 0.20 +
      categories[3].score * 0.20 +
      categories[4].score * 0.15
    )

    const afterScore = Math.round(
      categories[0].afterScore * 0.25 +
      categories[1].afterScore * 0.20 +
      categories[2].afterScore * 0.20 +
      categories[3].afterScore * 0.20 +
      categories[4].afterScore * 0.15
    )

    const report: WebsiteReport = {
      url,
      domain,
      overallScore,
      afterScore,
      grade: computeGrade(overallScore),
      afterGrade: computeGrade(afterScore),
      categories,
      topIssues: generateTopIssues(categories),
      strengths: generateStrengths(categories),
      actions: generateActions(categories),
      estimatedRevenueLoss: estimateRevenueLoss(overallScore),
    }

    return NextResponse.json(report)
  } catch (error) {
    console.error('Website report card error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
