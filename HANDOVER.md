# Handover — Lock Desk

Desk note for getaipages. Keep this factual. Update it when the listing is prepared.

## Project

- Name: Lock Desk
- Domain: lockdesk.co.uk
- Slug: lock-desk
- Niche: Bike locks (D-locks and chains)
- Kind: UK Amazon Associates review / comparison magazine
- Channel: Flippa
- Stack: Vercel (app, project name `lock-desk`) + GoDaddy (domain `lockdesk.co.uk`)
- GitHub: https://github.com/aipagesnow/amazon1
- Local folder: `Desktop\Sites\lock-desk` (only working copy)

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

## What this site is

A UK product-discovery and comparison magazine that earns with Amazon Associates. Not a shop. Not Amazon. Editorial pages (how-to-choose, best-of, reviews, comparisons) that link out.

Traffic is expected to come from organic search over time. A brand-new site has no ranking or commission history unless the listing says otherwise with evidence.

## Listing reminder

Flippa gets domain + code + this slice. Nothing else.

Official messages stay on Flippa. The getaipages desk at `/go/lock-desk` is extra help for the transfer.
