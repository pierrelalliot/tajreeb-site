# Tajreeb

Site for Tajreeb, an experimentation consultancy in Dubai. Plain HTML, CSS, and a small script. No build step.

## Files

- `index.html` — homepage
- `privacy.html`, `terms.html` — legal pages, copy sourced from `tajreeb-legal-pages-brief.md`
- `style.css` — Ink & Teal palette, light and dark modes
- `config.js` — contact details and legal fields still pending (email, WhatsApp, booking link, LinkedIn, legal entity, license number, legal pages' last-updated date)
- `main.js` — applies `config.js` values to the page
- `motion.js` — stats counter, scroll reveal, sliding nav highlight (progressive enhancement, see file for details)
- `favicon.svg` — logo mark

## Updating pending details

Edit `config.js`. Empty values stay marked as pending on the page; filled values update every link and label that uses them.

## Keeping the legal pages accurate

`privacy.html` and `terms.html` describe what the live site actually collects and which third-party tools it uses. Any change that affects that — a contact form, new analytics, a client portal, a new third-party tool, a changed legal entity or license number — must ship with a matching update to both pages in the same change, not as a follow-up.

## Analytics

Page-view analytics via Vercel Web Analytics (`https://cdn.vercel-insights.com/v1/script.js`, included on every page). It's cookieless and only reports page views, device/browser type, approximate location, and referral source — matching what `privacy.html` describes. **Enable "Web Analytics" in the Vercel project dashboard** for the script to report anything; without that toggle the script tag is a harmless no-op.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.
