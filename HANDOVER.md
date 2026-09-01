# Handover — Lock Desk

Desk note for getaipages (`/go/lock-desk`). Keep this factual. Update it when the listing is prepared. Do not invent a Flippa URL, traffic, or commissions.

## Project

- Name: Lock Desk
- Domain: lockdesk.co.uk
- Slug: `lock-desk`
- Niche: Bike locks (D-locks and chains)
- Kind: UK Amazon Associates review / comparison magazine
- Channel: Flippa
- Live: https://www.lockdesk.co.uk/
- Stack: Vercel (app, project name `lock-desk`) + GoDaddy (domain `lockdesk.co.uk`)
- GitHub: https://github.com/aipagesnow/amazon1
- Local folder: `Desktop\Sites\lock-desk` (only working copy)

## What they buy

A finished UK magazine at lockdesk.co.uk: how-to-choose, best-of, six reviews, two head-to-heads, two use-cases, plus About and methodology. It earns with Amazon Associates via **See on Amazon**. Domain, Vercel hosting, and the product slice in `data/products.json` are included. Not a shop. Not Amazon. Not Mothership.

## Colours (from the live magazine)

- Accent (high-vis): `#d4b43a`
- Accent hover / dark tape: `#8d761c`
- Paper: `#e6ebe3`
- Ink: `#0e1512`
- Night masthead: `#0b100e`

Type: Source Serif 4 (display), IBM Plex Sans (body), IBM Plex Mono (kickers).

## What the buyer receives

- This domain
- This codebase
- Hosting on Vercel
- The product **slice** in `data/products.json` (facts only: ASIN, name, brand, category, specs)

The buyer does **not** receive Mothership. Mothership is the operator's central catalogue and is not part of the sale.

## What the buyer must set

```
AMAZON_ASSOCIATE_TAG
```

Their own UK Amazon Associates tag. It is an environment variable (Vercel project settings in production, `.env.local` in development). It is not in git. `.env.example` shows the shape only (`your-tag-21`).

Without their tag, outbound **See on Amazon** links will not credit them.

They need an Amazon Associates account for amazon.co.uk. We do not transfer an Associates account.

## Buyer steps (after purchase)

1. Keep the Flippa thread for anything official. The getaipages desk is extra help.
2. Send, on the desk form: the registrar account that should receive **lockdesk.co.uk** (often GoDaddy), the email for Vercel, and a GitHub username only if they want the repo.
3. We send the domain, a Vercel invite, and GitHub if they asked. They accept those emails.
4. They add the domain in Vercel if it is not already attached, then point nameservers / DNS as the desk guide shows.
5. They set `AMAZON_ASSOCIATE_TAG` on the Vercel project to their own UK tag (usually ending in `-21`).
6. They apply for an amazon.co.uk Associates account themselves.

## What this site is

A UK product-discovery and comparison magazine that earns with Amazon Associates. Not a shop. Not Amazon. Editorial pages (how-to-choose, best-of, reviews, comparisons) that link out. Night-commute art direction (high-vis on dark, Source Serif 4) — not the getaipages / Mothership studio look.

Header: How to choose · Best of · Reviews · About. Mini-7 vs D1000, commuting, insurance, methodology, and alternatives to the New York Mini sit in the footer.

Traffic is expected to come from organic search over time. A brand-new site has no ranking or commission history unless the listing says otherwise with evidence.

## Listing reminder

Flippa gets domain + code + this slice. Nothing else.

Official messages stay on Flippa. The getaipages desk at `/go/lock-desk` is extra help for the transfer.
