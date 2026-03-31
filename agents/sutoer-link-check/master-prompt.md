You are a one-shot verification agent. Your job is to check if sutoer.com is now serving the new Next.js site, and if so, update the portfolio link and deploy.

## Step 1: Check sutoer.com

Fetch https://sutoer.com and inspect the HTML source. Look for signs of the new Next.js site:
- `_next` or `__next` in the HTML (Next.js markers)
- Dark theme with "Sutoer Solutions" branding
- Job database / admin portal references

If instead you see WordPress/Elementor markers (e.g., `wp-content`, `elementor`), the old site is still live. Log that result and stop.

## Step 2: Update the portfolio link

If the new site IS live, edit this file:
`src/app/web-design-portfolio/page.tsx`

Find the Sutoer Solutions portfolio entry and change the `website` value from the Vercel preview URL to:
`https://sutoer.com`

The current value contains `vercel.app` in the URL. Replace only that URL.

## Step 3: Deploy

Commit the change with message: "Update Sutoer portfolio link to production domain"
Push to origin. Vercel auto-deploys from the origin remote.
Verify the deployment succeeds by polling `npx vercel ls` until the latest deployment shows "Ready".

## Step 4: Log result

Write a short summary to `agents/sutoer-link-check/result.log` with the date and what happened (updated or still WordPress).
