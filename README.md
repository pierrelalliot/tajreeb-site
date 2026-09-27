# Tajreeb

Single-page site for Tajreeb, an experimentation consultancy in Dubai. Plain HTML, CSS, and a small script. No build step.

## Files

- `index.html` — page content
- `style.css` — Ink & Teal palette, light and dark modes
- `config.js` — contact details and legal fields still pending (email, WhatsApp, booking link, LinkedIn, legal entity, license number, privacy and terms URLs)
- `main.js` — applies `config.js` values to the page
- `favicon.svg` — logo mark

## Updating pending details

Edit `config.js`. Empty values stay marked as pending on the page; filled values update every link and label that uses them.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.
