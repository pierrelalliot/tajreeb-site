# Tajreeb — Site Build Brief

Single-page marketing site for an experimentation consultancy launching in Dubai/GCC.
This brief has everything needed to build it: brand, copy, structure, and technical direction.
No further discovery needed — build from this directly.

## Brand

**Name:** Tajreeb (تجريب) — Arabic for "experimentation": testing ideas against reality, again and again.
**Positioning:** Rigorous, methodical, evidence-driven. Not a generic growth/marketing agency — a discipline.
**Voice:** Direct, plain, confident. No hype, no filler, no "not X, but Y" framing, no em dashes.
**Language:** English only.

### Logo mark (finalized)

An open Erlenmeyer flask (triangular, no bottom line — outline breaks) with a learning curve
floating inside it, not touching the walls. SVG, 160×160 viewbox:

```html
<svg width="164" height="164" viewBox="0 0 160 160" fill="none">
  <path d="M64,20 L64,46 L20,140" stroke="#15181A" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M96,20 L96,46 L140,140" stroke="#15181A" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M46,130 C70,130 78,100 100,100" stroke="#0E6B5C" stroke-width="11" stroke-linecap="round"></path>
</svg>
```

Wordmark: "tajreeb", lowercase, set in Space Grotesk 700.

### Palette — Ink & Teal (chosen over 7 alternatives)

| Token | Light | Dark |
|---|---|---|
| Background | `#F5F1E8` | `#15181A` |
| Ink (text) | `#15181A` | `#F5F1E8` |
| Accent (teal) | `#0E6B5C` | `#2FA08A` |

Warm ivory ground, near-black ink, teal accent. Reads as lab notebook / rigorous practice,
deliberately not generic SaaS blue (rejected "Graphite & Cobalt" alternative for that reason).

### Typography

- **Display / headings:** Space Grotesk (500, 700) — Google Fonts
- **Body:** IBM Plex Sans — Google Fonts
- Avoid Inter, Roboto, Arial (reads as AI-generated default)

### Design direction

- Single page, one continuous scroll, English only
- No dark summary bands at the bottom of sections
- Real content only, no lorem ipsum, no invented stats
- Works at phone width, light and dark mode both fully designed (not inverted defaults)

---

## Site structure & copy

### 1. Hero

**Eyebrow:** Experimentation consultancy · Dubai · GCC
**Headline:** Decisions backed by evidence.
**Subline:** Tajreeb builds and scales experimentation programs for digital teams across the GCC. We set up the process, the governance, and the statistics, and we can run the whole program for you.
**CTAs:** Book a call · Message us on WhatsApp

### 2. Founder & proof

**Section title:** Led by Pierre Lalliot

**Bio:** Pierre has worked in experimentation since 2021, first in-house at a major sporting goods retailer, then as lead CRO consultant for international brands across retail, beauty, and gaming at a specialized agency in Paris. He has designed and analyzed over 200 A/B tests on web and app, and holds an M.Sc. from HEC Montréal.

**Name note (small, under bio):** *Tajreeb (تجريب) is Arabic for experimentation: testing ideas against reality, again and again.*

**Figures (stat row):**
- 200+ A/B tests since 2021
- 5x test velocity, taking a global program from operational to strategic
- 34 tests in 5 months, coordinated across 7 product squads
- +15% annual conversion rate
- 50% faster test reporting with an in-house AI agent

**Credentials line:** Discussion lead at Kameleoon Experimentation Unite 2025 · Certified on AB Tasty, Kameleoon, Piano Analytics, GA4, Contentsquare

No company names, no logos — all proof points are anonymized ("a major sporting goods retailer," "a global program," etc.). This is deliberate; do not add company names or logos.

No professional photo yet — leave a placeholder marked clearly as a placeholder, or omit the image slot cleanly (design choice, your call), don't fake one.

### 3. What we do

**Section title:** Two goals. Three levels of involvement.

**Intro line:** Wherever your users make a choice, you can test it: on your website, in your app, or in acquisition (ad creative, ad copy, landing pages, offers).

**Your goal** (2 cards)
- **Build** — You don't test yet, or you test without a system. We set up the process, tools, governance, and team structure to test continuously.
- **Scale** — You already test. We raise your velocity, your statistical rigor, and the value each test brings to the roadmap.

**Our involvement** (3 cards)
- **Guide** — We audit, design, and coach. Your team runs the program.
- **Co-run** — We work alongside your team and share design, build, and analysis.
- **Run** — We operate the program end to end. One contact on your side keeps it aligned with business goals.

### 4. What a program is made of

**Section title:** The building blocks

Tag/pill list: CRO audit · Roadmap and prioritization · Test design and mock-ups · Development and QA · Statistical analysis · Web and app analytics · Tracking plans · Insight repository · Team training

**Line under it:** Most engagements start with an audit of your data, funnel, and team, ending with a prioritized test roadmap.

### 5. How to work with us

**Section title:** Three ways to work together

- **Retainer** — A fixed schedule over a set period, for example three days a week for six months. Suited to an embedded experimentation lead.
- **Pay-as-you-go days** — Buy a volume of days for the year and draw from it task by task. An A/B test from design to analysis takes 3 to 5 days, an audit around 8. You get time reporting to the hour and pay only for work delivered.
- **Package** — A defined deliverable at a fixed price, whatever time it takes us. Suited to audits, program setup, and training.

### 6. Sectors

**Section title:** Sectors we know

E-commerce and retail · Travel and hospitality · Banking and telecom · Gaming and lottery · B2B and tech

### 7. Tools

**Section title:** Coming soon: AI tooling for experimentation

Copy: The tools we use on our own programs to speed up analysis and reporting, opening to clients. Ask for early access.

Treat this as a visibly "coming soon" state, not a live feature — badge it clearly.

### 8. Contact

**Section title:** Start with a conversation
**Copy:** Tell us where your program stands. We reply within one business day.

Channels: Email · WhatsApp · Book a 30-minute call (booking link) · LinkedIn

Location line: Dubai, United Arab Emirates. Working across the GCC.

### 9. Footer

© 2026 Tajreeb [legal entity — TBD, pending license] · License no. [pending] · Privacy · Terms

Legal entity name, license number, and privacy/terms pages are placeholders until the license is filed — wire them up as easy-to-update fields/includes, not hardcoded copy.

---

## Open items not yet decided (flag, don't block on)

- Real email address, WhatsApp number, booking link, LinkedIn URL — placeholders until Pierre supplies them
- Domain — not yet registered at time of writing; build should not hardcode the domain anywhere
- Founder photo — none yet, see note in section 2
- Privacy policy / terms content — not yet drafted

## Recommended technical approach

Static site, no framework needed for a single page like this: plain HTML/CSS/JS, or a minimal
static site generator (Astro/11ty) only if multi-language or a blog is likely later. Deploy to
Vercel, Netlify, or Cloudflare Pages — any supports a custom domain once registered, and their
free tiers are enough for a marketing page. Keep it a real git repo from the start so revisions
are tracked.
