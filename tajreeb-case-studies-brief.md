# Tajreeb — Case Studies Handoff

Two case studies, one per client goal (Build / Scale). Each needs a condensed version on
the homepage and a full version on its own page, linked from the condensed one.

## Placement

- Add a short case-study blurb under each relevant card in the "What we do" section
  (the Build card gets the Build case study, the Scale card gets the Scale case study),
  each ending with a "Read the full story →" link.
- Each full case study gets its own page: `case-study-build.html` and
  `case-study-scale.html`. Use the same header/footer/design system as the rest of the
  site (Ink & Teal palette, Space Grotesk/IBM Plex Sans), matching how `privacy.html`
  and `terms.html` were built.
- Both companies are anonymized. Do not add real names, sectors specific enough to
  identify them (in particular, the Scale case study's client is easily identifiable if
  paired with "lottery" or "gaming" language, since there's only one such national
  operator in France — keep it generic), or logos.

## Open items (do not block on these, use the defaults given)

- The Scale case study mentions an AI-powered test-variation tool. The exact product
  name is unconfirmed, so the text below already uses a generic description
  ("AI-generated test variations") instead of naming a tool. Leave it generic.
- The existing homepage stat row (200+ tests, 5x velocity, +15% conversion, etc.) is
  left unchanged. The Build case study's "10x test volume" figure is a different
  engagement and is not being added to that stat row, to avoid two similar-sounding
  velocity stats sitting next to each other without context.

---

## Case Study 1 — Build (homepage condensed version)

Place under the "Build" card in the What we do section.

> An organization had the experimentation methodology and tooling in place after 18
> months of coaching, but ran only four tests in a year. The bottleneck wasn't
> knowledge, it was execution: testing sat apart from Product instead of inside it. We
> built a research-led pipeline (feature audits, standardized experiment briefs, an
> insight repository) and moved ownership of ideas into Product itself. Within six
> months, test volume went from 4 a year to 20, on the way to roughly 40 across the
> full year, and Product Owners went from needing convincing to actively pitching their
> own test ideas.

Link text: "Read the full story →" → `case-study-build.html`

## Case Study 1 — Build (full page)

```markdown
# From 4 to 40 Experiments: Building a Program Product Teams Actually Owned

## Executive Summary

An established experimentation program had the methodology, tooling, and theoretical foundations in place, but only four A/B tests had launched in a full year. The challenge was no longer teaching the organization what experimentation was. It was turning experimentation into a practical Product capability.

By embedding experimentation into Product workflows, introducing a research-led testing process, and giving Product teams ownership of the ideas, the program grew from **4 tests in 2024 to 20 tests in the first six months of 2025**, with the resulting backlog enabling approximately **40 tests across the full year**. Ownership shifted alongside the volume: Product teams went from needing to be convinced to test, to actively supplying experiment ideas themselves.

## The Starting Point: Rigor Without Momentum

The organization had already invested in experimentation. For roughly 18 months, an external coach had trained the team on A/B testing methodology: formulating hypotheses, analyzing experiments, selecting tests, and applying statistical rigor.

Rigor had become a constraint rather than an enabler. Despite having the platform and methodology in place, the team ran only **four tests in 2024**, and the program risked fading once the coach's engagement ended. The team had the theoretical knowledge already; what was missing was execution. Experimentation had settled into a specialist activity that sat alongside Product, rather than something integrated into how Product teams made decisions.

### The Business Risk

Without a healthy experimentation pipeline, Product decisions kept relying on assumptions about what would improve the customer experience and conversion. The organization needed to move from confidence in *how* to run an experiment to consistency in identifying *what* was worth experimenting on. That meant connecting experimentation to Product strategy, research, and the existing development process.

## The 0-to-1 Implementation

### Turning Analysis Into an Experimentation Engine

Joining initially as a Web Analyst, with responsibility for analyzing the website and identifying opportunities, the first step wasn't rebuilding the experimentation platform; the underlying tracking was already robust and usable. The focus instead was building a systematic pipeline from insight to hypothesis to experiment to learning.

One of the first initiatives was a feature audit covering the major components of the digital experience: search, recommendation engines, product images, quick views, CTAs, and other tracked features. Each was assessed against its usage and relationship to both macro-conversions (purchases) and micro-conversions (steps that move users toward the next stage). This produced a prioritization matrix identifying the strongest experimentation opportunities, and the audit was repeated the following year to track how feature performance had shifted.

### Standardizing the Experimentation Process

Two core templates made experimentation repeatable:

- **Experiment brief:** the research supporting the test, hypothesis structure, KPIs, and rationale.
- **Results deck:** a consistent format for outcomes, segmentation, insights, and statistical interpretation.

The goal was building a process for confidently identifying winners, losers, and inconclusive results, and learning from all three, not just chasing wins. An insight repository centralized findings from analytics, surveys, and prior A/B tests, which helped prevent what's best described as "spaghetti testing": launching experiments because an idea sounded interesting, without research or evidence behind it.

### Making Experimentation Part of Product

The biggest change was organizational. Experimentation stopped being a separate analytical activity and became part of the Product team's own work. Work happened directly with Product stakeholders to build the experimentation backlog, and workshops aligned on strategy and defended the program's direction. The relationship evolved from pitching individual tests to Product Owners, to helping them develop and structure their own testing ideas.

## Measured Results and ROI

- **4 tests in 2024** to **20 tests in the first 6 months of 2025**
- The resulting backlog enabled approximately **40 tests across the full year**
- **10x annual test volume**, from 4 to approximately 40 experiments
- Approximately half of experiments were reported as winners, though a consolidated conversion or revenue uplift wasn't available across markets and brands
- The organization operated across multiple brands and countries, so individual experiment impacts were distributed across markets rather than captured as one consolidated uplift
- A structured research → hypothesis → test → analysis → insight workflow replaced isolated test ideas

The test count mattered less than what drove it.

### Product Ownership Became the Leading Indicator

Early on, Product Owners had to be convinced to run experiments. Over time, the dynamic reversed: the conversation moved from "what should we test?" to "which of your ideas should we prioritize, and how do we turn them into strong experiments?" That shift built a more sustainable model, one that didn't depend on an analyst continuously pushing tests into the Product roadmap.

## The Turning Point

One of the clearest signals of adoption: the Head of Product began actively asking for input on experimentation strategy, which tests to run, and how to make the program work better within Product. At the same time, Product Owners evolved from reluctant recipients of experimentation proposals into a source of experiment ideas themselves.

> The goal wasn't to make Product run tests. It was to make experimentation part of how Product thought.

The program started with a team that knew the theory but was running four tests a year. Six months later, it had launched twenty.

### Strategic Takeaway

Scaling experimentation doesn't always require a new platform or a larger analytics team. Sometimes the real constraint is organizational: the capability exists, but it sits too far from the people making Product decisions. Here, the breakthrough came from turning experimentation from a specialist service into a shared Product capability, supported by CRO expertise and increasingly powered by Product teams themselves.
```

---

## Case Study 2 — Scale (homepage condensed version)

Place under the "Scale" card in the What we do section.

> A five-year-old centralized experimentation program had strong testing capability but a strained relationship with Product: tests felt imposed rather than owned. We restructured around ownership instead of output, handing the roadmap to Product and repositioning as an enabler rather than a gatekeeper. The clearest signal it worked: Product went from having almost no experimentation ideas of its own in Q1 to generating more than available resources could support by Q2.

Link text: "Read the full story →" → `case-study-scale.html`

## Case Study 2 — Scale (full page)

```markdown
# Decentralizing Experimentation to Scale Across Product

## Executive Summary

An organization had run experimentation for five years through a centralized Data/CRO team, reaching roughly 50 tests in its strongest year. The model was technically capable, but Product teams felt tests were imposed rather than owned, and the relationship between the two functions had reached an impasse. Rather than pushing for more tests from the center, the shift moved experimentation ownership into Product itself, with the CRO function becoming an enabler rather than a gatekeeper. The result was not a higher test count. It was a fundamentally different organization: one where Product teams generated and owned their own experimentation.

## The Bottleneck (Before)

### Centralized Friction

For five years, a Data/CRO team ran experimentation centrally, building real capability along the way and reaching approximately 50 tests in its record year. But the relationship with Product had deteriorated. Tests were sometimes seen as challenges to decisions Product had already made. Experiments weren't always aligned with the roadmap. Product Managers were occasionally shown results for initiatives they hadn't shaped, and even a clear, useful result could be hard to implement if it didn't fit the broader product strategy already in motion.

### Impact on Speed and Adoption

The constraint wasn't test-production capacity. The centralized team could already produce tests at volume. The real limitation was distance: experimentation sat apart from where product decisions actually got made, so its output rarely translated into adoption. A test could be statistically sound and still go nowhere.

## The Scaling Framework (Execution)

### Governance and Enablement

The organization restructured the experimentation capability to sit closer to Product. Rather than handing Product a testing roadmap, the approach reversed the relationship: the roadmap stayed in Product's hands, and the CRO function's role became helping Product turn its own priorities into experiments. This took real relationship-building. Work happened directly with the three Product Managers, each owning a distinct scope, through their existing rituals: release planning, trimester roadmap prep, and the everyday conversations where testable opportunities naturally surface. A half-day experimentation masterclass covered the fundamentals of A/B testing and its role in product decisions, but training wasn't the main lever.

### Operating Model

The bigger shift was ownership. Product teams stopped accommodating externally designed tests and started generating their own, with the CRO function supporting execution rather than dictating it. Over time, a simple habit took hold: any mention of an "A/B test" in a Product conversation drew immediate engagement, until teams were joking about how predictably that attention arrived. The goal was repetition and normalization, not a one-time training event. Experimentation spread across roughly seven Product squads, and for the first time meaningfully reached the app, where prior activity had been close to zero across the preceding five years.

### AI Experimentation as an Accelerator

A roughly one-hour workshop let the Product team experiment hands-on with AI-generated test variations. The organization wasn't ready to operationalize this as a long-term workflow, but the session had a real effect: it showed Product stakeholders how much they could produce themselves in a short window, reinforcing the broader point that experimentation didn't have to stay the exclusive domain of CRO specialists.

## Measured Results and Velocity (After)

- Q1: approximately 7–8 tests
- Q2: approximately 12 tests
- Q3: approximately 6 tests, affected by the summer slowdown
- Roughly seven Product squads now running experiments (figure to be validated before external use)
- Approximately five app experiments, up from close to zero in the previous five years
- Prior centralized record: approximately 50 tests in its strongest year

Overall raw velocity during the transition period didn't exceed the previous record year; it landed closer to a typical year than the peak one. What changed was where experimentation happened, who owned it, and how deeply it was embedded in Product's own process. Coverage broadened, app experimentation began in earnest, and ownership shifted from something Product accommodated to something Product actively generated.

## Key Moment and Strategic Takeaway

The clearest evidence of the shift came between Q1 and Q2. In Q1, Product Managers had few experimentation ideas of their own. By Q2, the situation had reversed entirely: there were more proposed experiments than available resources could support, and the work became filtering ideas down rather than sourcing them.

> Your roadmap is in your hands. I'm not here to impose tests on you. I'm here to help you get the experiments out.

Scaling experimentation here wasn't about building a larger centralized testing operation. It was about changing who owned it. The CRO function became an enablement layer, supporting Product teams in testing within their own strategic priorities rather than working around a separate team's agenda.
```
