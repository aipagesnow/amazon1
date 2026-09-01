# Lock Desk — stop here (1 Sep 2026)

Chris is taking a break. Do not start over. Do not undo the copy rewrite, mobile layout, image work, or the four-link header unless he asks.

- Live: https://www.lockdesk.co.uk/
- Repo: https://github.com/aipagesnow/amazon1
- Local (only working copy): `C:\Users\chris\OneDrive\Desktop\Sites\lock-desk`
- Code HEAD before this note: `1bd32b0` (desktop header links). This stop-here note is committed on `main` after that. Check `git log -1`.

This folder **is** the git repo. Do not make a second Desktop copy. Keep this folder and `origin/main` in sync.

---

## What this site is

**Lock Desk** is a UK Amazon Associates review site for D-locks and chains. Not a shop. Night-commute paper (high-vis on dark, Source Serif 4). Not Mothership. Not getaipages.

- Domain: `lockdesk.co.uk` (GoDaddy)
- Vercel project: `lock-desk`
- Slug: `lock-desk`
- Channel: Flippa (listing URL not set yet — `data/site.json` status is `draft`)
- Buyer desk (getaipages): `/go/lock-desk`
- Skill: amazon-affiliate-site, then this folder’s `GROK.md` + `AMAZON-SITE.md`

Outbound product links say **See on Amazon**. Tag is `process.env.AMAZON_ASSOCIATE_TAG` only. Never invent ASINs, prices, traffic, or hands-on tests.

Copy voice is locked in `GROK.md`: UK visitor on a phone. Short sentences. Headlines name the job. Not a novel.

---

## Waiting on Chris

He is pausing after a live pass. Next sitting: apply only what he asks. Do not invent a new punch list.

---

## This sitting (already on `main`) — do not re-run

| Commit | What it did |
|---|---|
| `27a7192` | Rewrote public copy into plain UK review English. Job-named H1s. No chapter-hook headlines. |
| `2e7c105` | Mobile: hero text no longer overlapping; how-to-choose table no longer stretches the page |
| `bb18675` | WebP photos + `next/image`. Cover is LCP (`priority`, not lazy). |
| `d6c0619` | Cover LCP uses real width/height. Grade / Fit / Carry are H2s (heading order). |
| `b661b12` | Header cut to four links. Compare and commuting moved to footer. |
| `1bd32b0` | Desktop actually shows those four links. Phones keep **Menu**. |

Earlier briefs (`GROK-COPY-PASS.md`, fill-in) are history. Do not re-apply them. Do not restore literary H1s such as “The lock you will still carry is the only lock that counts.”

---

## Keep unless Chris says otherwise

**Header (desktop):** How to choose · Best of · Reviews · About  
**Header (narrow):** Menu button, same four destinations  
**Footer:** Mini-7 vs D1000, D-lock vs chain, commuting, insurance, methodology, alternatives to the New York Mini

Do **not** put Compare or Commuting back in the header. `/compare` still 301s to `/best`.

**Home:** Editor’s pick (Litelok X1), compact five-lock strip, New York Mini also-reviewed line, commuting + insurance photo cards. No second catalogue. No “Six ways in”. No “We’d buy this one”.

**Photos:** WebP in `public/images/`. Use `SiteImage` (`next/image`). Cover and overlay heroes pass `width={1280} height={720}` plus `priority`. Do not go back to raw full-size JPEGs.

**Copy:** Verdict-led, The good / The bad / Best for / Skip it if. UK English. No fake tests. No “slice” in public copy.

Chris liked the quieter header once desktop links were visible.

---

## PageSpeed (as of this sitting)

Image delivery and LCP discovery are much better. Leftovers PageSpeed may still list:

- Render-blocking CSS (~7 KB) — leave it unless he asks
- Legacy / unused JS from Next.js / React (~12–20 KB) — leave it unless he asks
- Preconnect — no extra origins to add

Do not chase those for their own sake.

---

## Page map (first launch is built)

| URL | Role |
|---|---|
| `/` | Hub. Cover, Grade/Fit/Carry, Editor’s pick (Litelok X1), compact five-strip, Mini line, commuting/insurance photos |
| `/guide` | How to choose. Chooser table is inside `.spec-scroll` so it does not blow out mobile width |
| `/best` | Best of — table of the five, chooser under the hero |
| `/reviews` | Six-card catalogue (only full catalogue) |
| `/reviews/litelok-x1` | Editor’s pick |
| `/reviews/hiplok-d1000` | |
| `/reviews/kryptonite-evolution-mini-7` | |
| `/reviews/abus-granit-xplus-540` | Pedal Diamond stamp (powered is Gold) |
| `/reviews/kryptonite-new-york-fahgettaboudit-mini` | Reviewed, not a commute pick |
| `/reviews/kryptonite-new-york-fahgettaboudit-1410` | House chain |
| `/vs/evolution-mini-7-vs-d1000` | Footer (Mini-7 vs D1000) |
| `/vs/d-lock-vs-chain` | Footer only |
| `/for/commuting` | Footer + home photo card |
| `/for/insurance` | Footer + home photo card |
| `/alternatives/kryptonite-new-york-fahgettaboudit-mini` | Footer chip, not in header |
| `/method` | Footer, not in header |
| `/about` | Disclosure + privacy anchors |

Redirects: `/privacy` → `/about#privacy`, `/disclosure` → `/about#disclosure`, `/compare` → `/best`.

Slice has ten products. Six have reviews. OnGuard Pitbulls and Hiplok DX1000 are named as context only — no extra review URLs.

---

## Do not

- Build a shop, cart, or second Amazon
- Add Insurance, Methodology, Compare, or Commuting to the header
- Dump a second catalogue on home
- Restyle the brand (no cream/terracotta/Fraunces, no other site’s skin)
- Invent Flippa URLs, rankings, or a real Associates tag in git
- Pull products from Mothership; the slice is `data/products.json`
- Work in a second folder
- Write like a novel. Headlines name the job.

---

## Buyer handover

`HANDOVER.md` and `handover/spec.json` in this folder are the desk notes. Theme tokens match the live site (high-vis `#d4b43a`, paper `#e6ebe3`, ink `#0e1512`). Header in `HANDOVER.md` already says the four-link masthead.

The live getaipages desk is `/go/lock-desk`. Client records live in getaipages’ store, not this repo. If the desk copy is stale after this stop, paste from `handover/spec.json` in getaipages admin. Do not invent a Flippa listing URL.

---

## Next sitting

1. Read this file, then `GROK.md` and `AMAZON-SITE.md`.
2. Apply Chris’s feedback only.
3. Keep this folder and https://github.com/aipagesnow/amazon1 in sync.
