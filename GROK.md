# Lock Desk

This folder is a **UK Amazon Associates review and comparison site** for **Lock Desk**. It earns with UK Amazon Associates. It is not a shop and not a second copy of Amazon.

- Domain: `lockdesk.co.uk`
- Slug: `lock-desk`
- Niche: Bike locks (D-locks and chains)
- Kind: Amazon UK review site (Flippa)
- Audience: UK commuters and cyclists who need a lock their insurer will accept and that they will still carry
- Primary query: best bike lock UK
- Angle: Sold Secure ratings, insurance, and what you will actually carry — not a shop of every cable lock

It is **not a shop**. Do not add a cart, checkout, inventory, or marketplace UI.

The job is to become a site UK readers trust when they are deciding what to buy in this niche. Organic search is the traffic plan. Amazon links are the first (and, at launch, only) monetisation layer. Do not write thin doorway pages. Do not add extra URLs to look large.

Build **one topical cluster** around the niche (pillar, best-of, reviews, two highest-intent comparisons, two use-cases). Follow `data/seo.json`. Unique editorial voice: verdict-led, The good / The bad / Best for / Skip it if. Never claim a hands-on test you did not do.

## Website copy voice (locked)

Write for a UK visitor scanning a phone, not for a novel reader. Short sentences. One idea each. Headlines name the job. No literary cadence, aphorisms, or chapter-hook H1s. Never read `HUMAN-AUTHOR-CRAFT.md` or anything in KDP-BOOKS while working in this folder.

## Skill

Use the **amazon-affiliate-site** skill from the first file. Follow it for architecture, disclosure, URLs, SEO rules, and the first-launch page set.

## Products

The product slice for this site is `data/products.json`.

- Facts only: asin, name, brand, category, specs.
- Do not invent ASINs.
- Do not put an associate tag in that file.

Site identity is in `data/site.json`. Search brief is in `data/seo.json` — use it as a brief, never invent traffic numbers.

## Associate tag

Outbound Amazon links are built at request time by `kit/amazon.ts` (copy into `src/lib/amazon.ts`):

```
https://www.amazon.co.uk/dp/{ASIN}?tag={process.env.AMAZON_ASSOCIATE_TAG}
```

The tag is an environment variable. Copy `.env.example` to `.env.local` for development. Never commit a real tag. Never write a real tag into this repository.

Button copy: **See on Amazon**. `rel="nofollow sponsored"`.

## Layout

Follow `AMAZON-SITE.md` in this folder. That file is **this site’s** art direction — a night-commute lock paper — not the Mothership or getaipages studio look, and not a generic shop theme.

Copy `kit/SeeOnAmazon.tsx` and `kit/DisclosureStrip.tsx` into `src/components`.

## Handover

Keep `HANDOVER.md` and `handover/spec.json` current for the getaipages desk. Session stop notes live in `HANDOFF.md`. Flippa package is domain + code + this slice; there is no listing URL in the repo yet. The buyer does not receive Mothership. The buyer sets `AMAZON_ASSOCIATE_TAG` on Vercel after purchase.
