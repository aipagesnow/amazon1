# Image provenance & Associates compliance

**Purpose:** Associates-safe image policy for Lock Desk (lockdesk.co.uk).

## What we use
Locally hosted editorial/lifestyle scene images under `public/images/` (12 WebP files). Reviews and related pages use **shared editorial scene banners** mapped in `src/lib/photos.ts` (`reviewBanner` / `typePhoto`) — not brand packshots. Served from this site only — not hotlinked.

## What we do not use
- Amazon CDN or scraped Amazon listing photos (`m.media-amazon.com` and similar)
- Amazon logos, smile marks, or wordmarks as site branding
- PA-API product images until Associates has approved API access and keys are configured
- Per-product Amazon packshots on review pages (scene banners only, by design)

## Disclosure & links
Affiliate outbound links use **See on Amazon** (or equivalent) with `rel="nofollow sponsored"`. The Associates tag lives in env (`AMAZON_ASSOCIATE_TAG`), never in git.

## Future (optional)
When PA-API keys exist and Amazon has approved the account, product images may be served under Amazon’s licence via the API. Until then, stay on local editorial scene assets.

## Note
Photos are illustrative/editorial for the bike-lock niche (UK street, station, and fit scenes). They are not claimed as Amazon-owned assets, and they are not hands-on lab or packshot photography unless the page copy says otherwise.
