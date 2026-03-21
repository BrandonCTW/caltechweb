# AP Automation Design Agent Log

## 2026-03-21

**Change:** Added before/after metrics comparison strip to the Before State section.

**What:** Inserted a two-column red/green metric strip above the existing before/after text columns in the "Before State" section. The strip shows four scannable stats:
- Before: "3,500+" manual invoice touches/week and "5-6" people touching every invoice
- After: "Zero" manual touches on standard invoices and "Exceptions" as the only invoices the team handles

**Why:** The before/after section was entirely text-heavy. Readers had to scan two full paragraphs before reaching the bullet-point summaries. The new strip gives a scannable visual anchor at the top of the section, immediately communicating the transformation in concrete numbers before the supporting copy. The 3,500+ figure is derived from the page's own content (700 invoices x 5 touches minimum = 3,500 manual touches/week), making it accurate and impactful.
TASK COMPLETE - STOPPING
[2026-03-21 11:10:42] Run #2 finished
[2026-03-21 11:10:47] Run #3 starting (model: sonnet)

---

## 2026-03-21 — Run #3

**Change:** Added per-layer color differentiation and numbered badges to the Technical Architecture cards.

**What:** The five architecture layer cards in the Technical Architecture section were visually identical (same dark background, same single blue icon, no numbering). Added:
- A distinct colored `border-l-4` accent to each card (blue, violet, indigo, teal, green)
- A matching colored number badge (1-5) overlaid on each icon
- Slightly larger icons (w-8/h-8 vs w-6/h-6) for better visual weight
- A new `archColorMap` constant following the same pattern as the existing `phaseColorMap`
- Added `color` property to each item in the `architecture` array

**Why:** The architecture section is visually the weakest part of the page — a list of uniform dark cards on a dark background. The before/after and timeline sections already use color differentiation effectively. Applying the same visual language to the architecture cards makes each infrastructure layer feel distinct, aids scannability, and visually connects the numbered cards to the numbered pipeline diagram directly above them. No content was changed.
TASK COMPLETE - STOPPING
[2026-03-21 11:13:26] Run #3 finished
[2026-03-21 11:13:31] Run #4 starting (model: sonnet)

---

## 2026-03-21 — Run #4

**Change:** Upgraded the break-even progress bar in the Investment section from a barely-visible 2px line to a proper milestone visualization.

**What:** The break-even bar was `h-2` (8px tall) with a small 14px dot — essentially invisible. Replaced it with:
- A taller `h-4` (16px) bar with the same green gradient fill
- A larger `w-5 h-5` milestone marker with a centered inner dot for clarity
- A "Break-even" label callout with a down-arrow positioned above the marker point
- Wrapped in a `relative pt-5` container to give the label room to render above the bar without overlap

**Why:** The break-even data ("~Month 2") is the single most conversion-critical piece of information on the page — it tells a prospect they will recoup the $37K investment within 60 days of go-live. The previous visualization was so thin it was nearly invisible on the page, severely underselling this ROI story. The upgraded milestone bar makes the break-even point scannable at a glance, reinforcing the investment decision before the prospect reaches the CTA.
TASK COMPLETE - STOPPING
TASK COMPLETE - STOPPING
[2026-03-21 11:15:20] Run #4 finished
[2026-03-21 11:15:25] Run #5 starting (model: sonnet)

---

## 2026-03-21 — Run #5

**Change:** Added a mobile-only VS divider between the "Before" and "After" columns in the Before/After comparison section.

**What:** The desktop layout already had a centered vertical line with an arrow circle (`hidden md:flex absolute ...`) separating the two columns. On mobile, the two sections stacked directly with no visual break other than gap spacing. Added a `flex md:hidden` horizontal rule with a centered rounded arrow badge (rotated 90 degrees to point downward) between the Before and After `<div>` elements inside the grid.

**Why:** On mobile the Before/After comparison is the page's core narrative — yet nothing signaled the transition from the problem state to the solution state. The new divider makes the before-to-after flow explicit on small screens, matching the visual language already present on desktop. It reuses the same ArrowRight icon and white/border-gray-200 circle style already used in the desktop VS separator, keeping the design consistent with zero new visual patterns.
TASK COMPLETE - STOPPING
TASK COMPLETE - STOPPING
[2026-03-21 11:16:52] Run #5 finished
[2026-03-21 11:16:57] Run #6 starting (model: sonnet)

---

## 2026-03-21 — Run #6

**Change:** Added deliverables lists to the two pricing cards in the Investment section.

**What:** The Build Fee ($22,000) and Monthly Retainer ($2,500/mo) cards previously showed only a price and a one-line subtitle. Added a bordered deliverables list below each price, separated by a subtle `border-b border-gray-100` divider:
- Build Fee includes: inbox monitor + OCR pipeline, GL coding rules engine, PO matching and 3-way verification, ERP EDI connector + fallback automation, exception routing with audit trail, training and SOPs
- Monthly Retainer includes: exception rule-building, new vendor templates, ERP configuration updates, system monitoring and uptime oversight

**Why:** Showing a price without explaining what it buys creates friction at the decision point. Prospects see $22,000 and have no reference for what they receive. The deliverables list anchors the value proposition directly next to the number, making the investment feel concrete and justified. The blue CheckCircle icons visually mirror the benefit lists already used elsewhere on the page, reinforcing consistency.
TASK COMPLETE - STOPPING
TASK COMPLETE - STOPPING
[2026-03-21 11:17:48] Run #6 finished
[2026-03-21 11:17:53] Run #7 starting (model: sonnet)

---

## 2026-03-21 — Run #7

**Change:** Replaced the single-line net return text in the Investment savings box with a visual 3-column ROI breakdown grid.

**What:** The green savings box previously showed "$300,000 per year saved" prominently, then buried the net return calculation as a tiny gray text line: "Net return in year one after build and retainer: ~$263,000". Replaced that text line with a 3-column grid showing:
- $37K (Year 1 cost — build fee + 6mo retainer)
- $263K (Net return Y1)
- 8× (ROI multiple — $300K savings / $37K cost)

The ROI multiple cell uses a solid green-600 background to make it pop visually. The other two cells use white with a green border to match the surrounding green savings box.

**Why:** The net return and ROI ratio are the two most conversion-relevant numbers on the page after the headline savings figure. Presenting them as a scannable 3-column grid makes the investment math immediately legible at a glance, reducing the cognitive load required to evaluate the pricing section. Prospects can now see cost, net return, and ROI multiple in one visual unit without doing mental arithmetic.
TASK COMPLETE - STOPPING
`TASK COMPLETE - STOPPING`
[2026-03-21 11:19:30] Run #7 finished
[2026-03-21 11:19:35] Run #8 starting (model: sonnet)

---

## 2026-03-21 — Run #8

**Change:** Added a "what happens on the call" 3-step strip to the final CTA section.

**What:** The final CTA section had a heading, one line of copy, and two buttons — nothing to reduce booking friction. Added a horizontal 3-card strip between the subheading and buttons, showing exactly what the 30-minute call involves:
1. Describe your workflow (FileText icon) — volume, vendors, how invoices arrive
2. We assess the fit (Brain icon) — honest answer, no pressure
3. Get a ballpark scope (TrendingUp icon) — timeline and investment range

Each card uses `bg-white/5 border border-white/10` to match the hero stats bar visual language, with a blue circle icon and two-line label/sub text.

**Why:** Prospects who reach the bottom CTA are interested but often hesitate because they don't know what booking a call actually means. Spelling out the three steps removes ambiguity and signals that the call is low-stakes and useful. All icons were already imported (FileText, Brain, TrendingUp). No new packages, no fake content — every claim accurately reflects a typical scoping call.
TASK COMPLETE - STOPPING
TASK COMPLETE - STOPPING
[2026-03-21 11:20:31] Run #8 finished
[2026-03-21 11:20:36] Run #9 starting (model: sonnet)

---

## 2026-03-21 — Run #9

**Change:** Added ArrowRight connectors between the 3 phase overview cards in the Timeline section.

**What:** The phase overview strip (Discovery / Build & Test / Go-Live) used a `grid grid-cols-3 gap-3` layout, placing three visually identical gap-separated cards with no directional indicator. Converted to a `flex items-center gap-2` layout and inserted an `ArrowRight` icon (already imported) between each adjacent card pair.

**Why:** The three cards represent sequential project phases but visually read as three independent options — a prospect could easily interpret them as alternative tracks rather than a linear progression. The arrow connectors make the flow explicit and reinforce the "12 weeks, three phases" narrative at a glance. The ArrowRight icon was already in the imports; zero new dependencies added.

TASK COMPLETE - STOPPING
TASK COMPLETE - STOPPING
[2026-03-21 11:21:54] Run #9 finished
[2026-03-21 11:21:59] Run #10 starting (model: sonnet)

---

## 2026-03-21 — Run #10

**Change:** Added a "Custom Build vs. Off-the-Shelf AP Software" comparison table between the Technical Architecture and Timeline sections.

**What:** Inserted a new section with a 3-column comparison table (4 rows) contrasting SaaS AP platforms (Tipalti, Bill.com, Coupa) against this custom build across four dimensions:
1. Data Ownership: vendor servers vs client AWS environment
2. Pricing Model: per-invoice fees vs fixed build fee and retainer
3. GL Coding Rules: rigid platform mapping vs rules matched to exact ERP structure
4. Vendor Lock-in: full re-onboarding vs client owns code and credentials

The table uses a structured grid layout with a red/green column header row, alternating `bg-gray-50` / `bg-green-50` column backgrounds, and `XCircle` / `CheckCircle` icons matching the visual language already used in the Before/After section. A brief subheading names specific competing platforms to make the comparison tangible.

**Why:** A prospect reading this case study will likely ask: "Why not just use Bill.com or Tipalti?" That objection was completely unaddressed on the page. The custom-build's strongest differentiators (client-owned infrastructure, fixed pricing, exact rule matching) are buried in the Technical Architecture cards and Investment section copy. A dedicated comparison table surfaces these advantages at the moment a prospect is forming their buying criteria, directly reducing the most common conversion friction on a page selling a $22K custom build against lower-cost SaaS alternatives.

TASK COMPLETE - STOPPING
**Change made:** Added a "Custom Build vs. Off-the-Shelf AP Software" comparison table between the Technical Architecture and Timeline sections.

The table has 4 rows comparing SaaS AP platforms against this custom build across:
- **Data Ownership** — vendor servers vs your AWS environment
- **Pricing Model** — per-invoice fees vs fixed build fee + retainer
- **GL Coding Rules** — rigid platform mapping vs your exact ERP logic
- **Vendor Lock-in** — full re-onboarding vs you own the code

This addresses the most significant unhandled sales objection on the page: "Why not just use Bill.com or Tipalti?" The custom build's strongest differentiators were buried in other sections; this table surfaces them at the moment a prospect is forming their buying criteria.

TASK COMPLETE - STOPPING
[2026-03-21 11:23:24] Run #10 finished
[2026-03-21 11:23:24] Reached max loops (10). Stopping.
