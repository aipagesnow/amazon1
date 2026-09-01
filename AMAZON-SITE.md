# AMAZON-SITE — Lock Desk art direction

This file is **this magazine’s** visual contract. It is not a skin for other Mothership sites.

Lock Desk is a night-commute cycling paper: wet Sheffield stands, Sold Secure grades, the lock you will still carry. It must not look like Mothership or getaipages (cream paper, terracotta, Fraunces, Figtree, dashboard cards). It must not look like a shop.

Tone: a small editorial magazine that also keeps a catalogue. Unique reason to visit: honest comparison of UK D-locks and chains, not a second copy of Amazon.

## What this is not

- Not a shop
- Not a marketplace
- Not an Amazon storefront
- No Amazon logo, smile mark, or replica badges
- No cart, account, or frozen price as if it were live stock
- Not a pile of keyword landing pages with the same review pasted six times
- Not a fake newsroom (“Issue 7”, “TODAY”) on a brand-new site
- Not a comparison URL for every product pair the slice can generate
- Not the studio dashboard

Outbound product action is a text button: **See on Amazon**. Never “Buy now” or “Check price on Amazon”.

## Colour and type (this site only)

Night-commute paper. High-vis tape as the accent, not a SaaS pill.

- Night `#0b100e` / `#141c18`
- Paper `#e6ebe3`
- Ink `#0e1512`
- High-vis `#d4b43a` / `#8d761c`
- Steel `#2a4a42`
- Gold stamp `#c4a028`
- Diamond stamp `#9aafb8`

Display: Source Serif 4. Body: IBM Plex Sans. Specs and kickers: IBM Plex Mono. Dark masthead with a high-vis rule. Sharp corners, like a lock body.

Do not use Inter, Fraunces, Figtree, or studio terracotta.

## Photography

Editorial photographs live in `public/images/`. They are atmosphere: UK streets, Sheffield stands, unbranded D-locks and chains. Caption them as editorial. Never pass them off as a photograph of a named ASIN. Never fake a lab test. Never Amazon branding.

## Voice

Direct. Verdict-led. A person helping someone choose.

Write: “We’d buy this one. Here’s why.”

Do not write: “The XYZ 3000 is a fantastic product with many useful features…”

Do not claim hands-on testing you did not do.

## Disclosure

A short disclosure strip appears **before the first affiliate link** on any page that has one. Use `kit/DisclosureStrip.tsx`.

Required sentence somewhere prominent (footer is not enough on its own if a link appears higher):

> As an Amazon Associate I earn from qualifying purchases.

Also state that the operator is not Amazon, and that prices and availability change on Amazon.

## Home (hub)

Home is an editorial front page, not a product grid. Editor’s pick is the only lock tile on the cover. The six-card catalogue lives only on `/reviews`.

1. Masthead: site name, niche in a quiet line, no Amazon branding. Header: How to choose, Best of, Reviews, Mini-7 vs D1000, About.
2. Full-bleed cover photograph with the opening line on the night street.
3. H1, dek, then one-line Associate disclosure (under the H1), then cover CTAs: How to choose (primary) + Best of (text).
4. Three briefing facts as one strip: grade, fit, carry.
5. **Editor’s pick** — the only product tile:
   - H2 Editor’s pick, product name as H3
   - Why we like it / Who it is for / What we’d change
   - Best alternative (link to that review)
   - Read the review + See on Amazon
   - Editorial photograph with the same caption as review pages
6. Five we compared as a text line to `/best` (not a tile strip). One also-reviewed line for the New York Mini.
7. Two photographic use-case features (commuting, insurance). No spec chips, no Amazon on the home versions.
8. Footer in three groups: Guides, Reviews (including Instead of the New York Mini), About this desk.

## Catalogue cards

Each card:

- Product name (serif)
- Brand and category
- Sold Secure stamp
- One-line editorial hook (from the review, not from Amazon)
- Link to the review (primary, styled **Read the review**)
- **See on Amazon** as a text link on listing pages (`rel="nofollow sponsored"`)

No star widgets invented from nothing. No scraped price. No fake product shot of that ASIN.

## Review page

Recipe, in this order:

1. Title, brand, ASIN in small type (ASIN is a fact, not decoration). Grade stamp. Editorial type photograph with a caption that it is not this model.
2. Disclosure strip if this is the first link context.
3. **Verdict** — first, under the job-line. The subject lock’s **See on Amazon** sits under that verdict. No second URL for “is it worth it?”
4. Spec figures, then **Best for / Skip it if**
5. Body with short subheads over existing paragraphs
6. **The good**
7. **The bad** — required, at least two honest ones.
8. **What we’d change**
9. **Spec sheet** grouped as Grade / Size & weight / In the box. If a spec is missing, omit it. Do not invent it.
10. **Better if** alternatives from the same set, after the subject Amazon button
11. **Common questions**
12. Closer: Different job. Read the review before Amazon.

## Best-of

One page. Photographic opener, then a chooser, then a real table: product, comparable specs from the records, best for, main caveat, Read the review, Amazon as a text link. Five rows. No five-card board duplicating the table. A short intro explains the criteria. No “number one for everyone” theatre.

Never add Price or Amazon rating columns. Omit a spec column when the slice does not have it.

After the table, a short **chooser**: who should pick which row. Prose or a small table. Not a shop filter. Not a budget quiz.

Target the commercial query (best X in this niche). The table is the page. Do not hide it under a thousand words of preamble.

## Head-to-head

Two products from the slice — the pair a UK searcher would actually type, not the first two rows in the JSON. Shared criteria down the page, including a spec table from the slice. A verdict that names a winner **for a defined reader**, and the other product for a different reader. Both keep a See on Amazon button. Do not trash one to sell the other.

Do not generate a vs page for every combination.

## How-to-choose guide

A single long guide. Criteria, trade-offs, who should ignore which spec, mistakes. Ends with an **editorial chooser**: situation → which product in the slice. Links to reviews. Disclosure before the first Amazon link. This page should still make sense if every Amazon link died tomorrow.

This is the informational pillar. Other pages link up to it.

## Use-case guides

Short editorial pages for a situation, problem, or audience a UK searcher would type (best X for Y). Each page:

- Names the situation in the title
- Says who it is not for
- Picks from the slice only
- Links to the relevant reviews and the how-to-choose guide
- Does not invent a product to fill a hole

## Alternatives (optional page)

Every review already names a best alternative. Add **one** `/alternatives/[hero]` page only if `data/seo.json` has that query and the slice has a clear flagship. Same rules: slice only, honest trade-offs, See on Amazon after disclosure. Do not mint an alternatives URL per product.

## Methodology

One calm page. How the site researches products, what it will not claim, that prices change on Amazon, that the operator is not Amazon. Link it from About and the footer.

## About / disclosure / privacy

Plain language.

- Who runs the site (Aivora Digital / the named operator as appropriate)
- Amazon Associates disclosure
- We are not Amazon
- Privacy: no sale of personal data; any analytics named honestly
- How to get in touch

## Search and structure

Read `data/seo.json` as the brief. Do not invent search volumes.

- UK English. `lang="en-GB"`.
- One topical cluster around the niche. One clear intent per URL.
- Unique title and meta description.
- Canonical on every indexable page.
- Internal links: hub → pillar → best-of → reviews ↔ comparisons ↔ use-cases. No orphan reviews.
- `sitemap.ts` and `robots.ts`.
- JSON-LD: `WebSite` on home, `Article` on essays, `FAQPage` only for real FAQs, `ItemList` on the best-of. No fake `AggregateRating`.

Do not stuff the year into every title. If you use a year, you are committing to update that page.

Fewer excellent pages beat many thin ones. Do not add routes to look large.

## First-launch page set (ship these)

- Home
- 1 how-to-choose guide
- 1 best-of
- 6 reviews (or every product in the slice if fewer than six; never invent ASINs to pad)
- Reviews index
- 2 head-to-heads (highest-intent pairs)
- 2 use-case guides (1 if the slice is under four products)
- Methodology
- About / disclosure / privacy
- Optional: 1 alternatives-to-hero page if the brief supports it

## Implementation notes for Grok Build

Stack: Next.js App Router on Vercel.

Copy `kit/` into `src/lib` and `src/components`. Amazon URLs only via that helper.

Amazon URL at request time:

`https://www.amazon.co.uk/dp/{ASIN}?tag={process.env.AMAZON_ASSOCIATE_TAG}`

`rel="nofollow sponsored"` on those anchors.

Read `data/products.json` as the only product source. Read `GROK.md`, `data/seo.json`, and this file. Update `HANDOVER.md`.

First launch is Amazon Associates only. Do not add other retailer networks, newsletters, ads, or a filter/quiz app.
