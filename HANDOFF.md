# Lock Desk — stop here (1 Sep 2026)

Chris is taking a break to look through the live site, then come back with feedback. Do not start over. Do not treat the applied punch lists as pending work.

- Live: https://www.lockdesk.co.uk/
- Repo: https://github.com/aipagesnow/amazon1
- Local (only working copy): `C:\Users\chris\OneDrive\Desktop\Sites\lock-desk`
- Fill-in (header + home strip): `9c58786`
- This stop-here note is committed on `main` after that. Check `git log -1`.

This folder **is** the git repo. Do not make a second Desktop copy. Keep this folder and `origin/main` in sync.

---

## What this site is

**Lock Desk** is a UK Amazon Associates review magazine for D-locks and chains. Magazine, not a shop. Night-commute paper (high-vis on dark, Source Serif 4). Not Mothership. Not getaipages.

- Domain: `lockdesk.co.uk` (GoDaddy)
- Vercel project: `lock-desk`
- Slug: `lock-desk`
- Channel: Flippa (listing URL not set yet — `data/site.json` status is `draft`)
- Buyer desk (getaipages): `/go/lock-desk`
- Skill: amazon-affiliate-site, then this folder’s `GROK.md` + `AMAZON-SITE.md`

Outbound product links say **See on Amazon**. Tag is `process.env.AMAZON_ASSOCIATE_TAG` only. Never invent ASINs, prices, traffic, or hands-on tests.

---

## Waiting on Chris

Visual and copy feedback after a real pass through the live site. Next sitting: apply that feedback. Do not invent a new punch list while he is looking.

---

## Already applied — do not re-run as if pending

| Brief (in this folder) | What it did |
|---|---|
| `GROK-START.txt` / `GROK-CONTINUE.txt` | First launch + continue rules |
| `GROK-APPLY.txt` → `GROK-COPY-PASS.md` | Copy, SEO, structure punch list (`2d9708b`) |
| `GROK-FILL.txt` | Fill-in after that list over-stripped home/nav (`9c58786`) |

Copy-pass things that must **stay** unless Chris says otherwise: magazine voice, unique metas, 404, the word “slice” killed in public copy, template H2 swaps.

Fill-in things that must **stay** unless Chris says otherwise:

- Header: How to choose · Best of · Reviews · About
- Mini-7 vs D1000, commuting, insurance, and methodology stay in the **footer**
- `/compare` 301s to `/best`. Do not add a `/compare` index. Do not put Compare or Commuting back in the header.
- Home: one compact five-lock strip under Editor’s pick (X1, Mini-7, D1000, 540, 1410). Name, grade, one-line stamp, Read the review, Amazon as **text**
- Caption under the strip: Five we compared / Open the full table → `/best`
- Also-reviewed line for the New York Mini
- Do **not** bring back “Reviewed on this desk”, “Six ways in”, or “We’d buy this one”

---

## Page map (first launch is built)

| URL | Role |
|---|---|
| `/` | Hub. Cover, Grade/Fit/Carry, Editor’s pick (Litelok X1), compact five-strip, Mini line, commuting/insurance photos |
| `/guide` | How to choose |
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
- Add Insurance or Methodology to the header
- Dump a second catalogue on home
- Restyle the brand (no cream/terracotta/Fraunces, no other magazine’s skin)
- Invent Flippa URLs, rankings, or a real Associates tag in git
- Pull products from Mothership; the slice is `data/products.json`
- Work in a second folder

---

## Buyer handover

`HANDOVER.md` and `handover/spec.json` in this folder are the desk notes. Theme tokens match the live magazine (high-vis `#d4b43a`, paper `#e6ebe3`, ink `#0e1512`).

The live getaipages desk is `/go/lock-desk`. Client records live in getaipages’ store, not this repo. If the desk copy is stale after this stop, paste from `handover/spec.json` in getaipages admin. Do not invent a Flippa listing URL.

---

## Next sitting

1. Read this file, then `GROK.md` and `AMAZON-SITE.md`.
2. Apply Chris’s feedback only. Do not undo the copy-pass or the fill-in unless he asks.
3. Keep this folder and https://github.com/aipagesnow/amazon1 in sync.
