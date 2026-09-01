# Lock Desk — Grok Build punch list

One combined list for live `https://www.lockdesk.co.uk/` (repo `aipagesnow/amazon1` — **do not clone or edit the repo from this file**).

Sources (1 Sep 2026): live audit `pages.md` / `index.json`; Lena Hart copy parts 1–3 + remainder + vs/insurance exact; Owen Price SEO; Sable Wren structure + 375px supplement. Conflicts already resolved below. Do not reopen them.

**Covered:** 17 live HTML pages + 404 template + 301s for `/privacy` and `/disclosure`.

---

## 1. House rules (short)

- UK English. Magazine, not a shop. Voice is already a magazine — do not flatten it.
- No ranking promises, traffic claims, invented ASINs, tests, cut-times, volumes, or testimonials.
- Quote only live specs already on the site (table below). If a number is not in that table, omit it.
- Kill the word **slice** everywhere (`our slice`, `on our slice`, `in this slice`, `from our UK slice`, `UK slice`). Replace with **on this site** / **on our records** / **on this listing**.
- Title tags: keep Owen/live SEO titles where they already match intent. H1s: use Lena’s visitor H1s when they differ.
- Metas: complete sentences, **≤155 characters**. Use Lena’s six review metas. Prefer Owen’s other complete metas; strip “slice”.
- Amazon: `tag` stays `process.env` (never invent a new tag). Buttons still say **See on Amazon**. `rel="nofollow sponsored noopener"`. No prices. No “Buy now”.
- Listing pages (`/`, `/best`, `/reviews`, `/for/*`, `/alternatives/*`): styled CTA = **Read the review**; Amazon as a text link. Editor’s pick and single-review pages: both CTAs OK. On a review, the **subject** lock gets the first Amazon button, under the verdict — not an alternative.
- Do not mint extra URLs (no `/compare` index, no Pitbull/DX1000 review shells, no extra vs pages, no extra legal essays). Optional later only: X1 vs D1000 or X1 vs 540, and only with unique who-each.

### Specs you may quote (live records — do not change)

| Lock | Weight | Sold Secure | Hole / length | Bar | Mount | Cable | Keys | ASIN (UK listing) |
|---|---|---|---|---|---|---|---|---|
| Litelok X1 | 1.7 kg | Pedal Diamond; powered Diamond | 101 × 197 mm | 21 mm | No (on this listing) | No | 2 | B0BLT59NFJ |
| Hiplok D1000 | 1.9 kg | Pedal Diamond; powered Diamond | 92 × 155 mm | 20 mm | No | No | 3 | B0D77XJR4Z |
| Kryptonite Evolution Mini-7 | 1.61 kg | Gold (pedal) | 83 × 178 mm | 13 mm | Yes | Yes (not Gold) | 3 | B074K6KSY5 |
| ABUS Granit XPlus 540 | 1.8 kg | Pedal Diamond; powered Gold | 108 × 300 mm | 13 mm | Yes (EaZy KF on this ASIN) | No | 2 | B0944HG7MK |
| Kryptonite New York Fahgettaboudit Mini | 2.06 kg | Gold (pedal) | 83 × 153 mm | 18 mm | No | No | 3 | B0CW175JJ8 |
| Kryptonite New York 1410 chain | 4.9 kg | Gold (pedal) | 100 cm | 14 mm chain | No | No | 3 | B073W8N26F |
| Hiplok DX1000 (named only; **no review page**) | 2.75 kg | — | 112 × 205 mm | — | — | — | — | — |

OnGuard Pitbulls: named as context only. No specs on record. No review page.

---

## 2. Sitewide (once)

### Chrome

1. **Header** — keep the five items: How to choose · Best of · Reviews · Compare · About. Do **not** add Methodology as a fifth (or sixth) item. Do **not** create `/compare`.
2. **Compare** — keep it as **one** header item pointing at `/vs/evolution-mini-7-vs-d1000`. Relabel it **Mini-7 vs D1000** (honest). D-lock vs chain stays footer-only. Do **not** add a second header destination, mega-menu, or `/compare` index. **301** `/compare` → `/best`.
3. **Methodology** — stays footer-only in the main nav. Park a **How we work** line under About that links to `/method`.
4. **Footer** — same destinations, three labelled groups (not a 10-link equal-weight row). No new URLs.
   - **Guides:** How to choose, D-lock vs chain, For commuting, For insurance
   - **Reviews:** Best of (same label as the header, not “Best bike locks”), Reviews, plus the one alternatives chip **Instead of the New York Mini** → `/alternatives/kryptonite-new-york-fahgettaboudit-mini`
   - **About this desk:** Methodology, About, Disclosure, Privacy
   Ownership/Associate line above the photo note. Disclosure and Privacy already point at `/about#disclosure` and `/about#privacy` — keep the hashes.
5. **Inner overlay heroes** — one-line Associate disclosure (legal-before-link stays). Move the photo caveat onto the image (`figcaption`), not a second hero paragraph. Keep the caption text:
   > Editorial photograph of a generic lock or street. We have not photographed the named products in this magazine.
6. **Associate line** (pages with Amazon CTAs), keep:
   > As an Amazon Associate I earn from qualifying purchases. This site is not Amazon. Prices and availability change on Amazon.
   Match **I earn** everywhere (Method currently says **we earn**).
7. **Footer legal**, keep:
   > As an Amazon Associate I earn from qualifying purchases. Lock Desk is operated by Aivora Digital. We are not Amazon. Prices and availability change on Amazon.
   > Photographs on this site are editorial. They are not pictures of the named products.

### Template swaps (every review)

| Live | Replace with |
|---|---|
| H2 `Is it worth it?` | `Verdict` |
| H2 `The workshop sheet` | `Spec sheet` |
| H2 `Questions we keep getting` | `Common questions` |
| Kicker `Buy this instead if` | `Better if` |
| Closer `Same magazine. Different job. Read the review before the Amazon button.` | `Different job. Read the review before Amazon.` |
| `our slice` / `on our slice` / `in this slice` / `from our UK slice` | `on our records` / `on this listing` / `on this site` |

Also rename `/best` H2 `The workshop sheet` → `Spec sheet`. Guide/home do not use that H2.

### CTAs and JSON-LD

- Listing grids: **Read the review** is the only styled button; **See on Amazon** is text.
- Review template: one **See on Amazon** for the **subject** lock directly under the Desk verdict (next to the disclosure already on the page). Alternative cards come **after** that subject CTA. Do not lead the page with an alternative’s Amazon button.
- Slim sticky footer on **narrow** review widths only: lock name + grade + See on Amazon; disclosure abbreviated to “affiliate”. Reuse the existing dark strip — not a new component.
- **Drop Product JSON-LD `Offer`** (it points at an Amazon URL with no price). **Keep Article + FAQPage.**
- Amazon URLs stay `amazon.co.uk/dp/{ASIN}?tag=` from env. Do not hard-code a new tag. Do not print £.

### Ghost products

Do not create review URLs for OnGuard Pitbulls or Hiplok DX1000. One labelled editor’s note, or delete the names. If kept, paste:

> Not reviewed yet. The OnGuard Pitbulls and the Hiplok DX1000 are real products. They do not have review pages on this site. DX1000 on our records: 112 × 205 mm, 2.75 kg.

### 404 + legal URLs

- 404 `<title>`: `Page not found · Lock Desk`
- Do **not** canonical 404s to the homepage. Self-canonical the 404 or omit canonical. Keep `noindex`.
- H1 may stay: `That page is not here`
- **301** `/privacy` → `/about#privacy` and `/disclosure` → `/about#disclosure`. Do not write two extra legal pages.
- **301** `/compare` → `/best`. Leave `/contact`, `/legal`, `/terms`, `/cookies`, `/vs`, `/for`, `/alternatives` (index), `/shop`, `/blog` as 404s. Do not mint them.

### Sitemap / photos

- Sitemap currently 200 with 17 locs — keep it honest. Do not add the 404 paths.
- Keep honest photo alts (generic lock / street, not named products).

---

## 2b. Mobile / 375px

Sable visual supplement. Do not reopen closed copy. Layout only.

**Home at 375px (live):** disclosure sits above the H1, so only ~3 lines of headline show. Grade/Fit/Carry ~600px down. First CTA ~2100px. Sticky nav two-row ~150px permanently.

- Disclosure **under** the H1 on narrow (legal still before the first Amazon).
- Grade / Fit / Carry as **one three-item strip**, not three stacked blocks.
- One hero CTA under the dek (How to choose + Best of as text).
- Collapse the mobile nav to a single row / menu. Do not keep a two-row sticky eating ~150px.

**Guide:** Grade/Fit/Weight briefing currently sits below a hero that spends the fold on affiliate + photo, with no CTA.

- Put a 3-bullet **Start here** in the hero (policy, then rack, then weight).
- Disclosure one line under it.
- Jump link to the chooser.

**/for/commuting:** Mini-7 pick is buried in paragraph 3; cards last; Not-for leads.

- One-line verdict + two cards **under the hero**.
- If-you / Not-for rows **underneath** the cards.

**/for/insurance:** Gold-vs-Diamond rule is prose; badges only on cards.

- Two-branch fold block: **Policy Gold → Mini-7** / **Diamond → X1, D1000**.
- Short checklist above the cards.
- Do not add a 540 card (540 stays in the grade sentence + FAQ).

**Both `/vs/*`:** deck is a dense paragraph; Amazon cards currently beat the table; dash cells look like missing data; “not rivals” is the last sentence of the Mini-7 vs D1000 dek.

- Split the dek into two labelled lines (keep Lena’s sentences).
- Who-each **above** the spec table; Amazon **after** the table.
- Group table rows (grade together, size together, in-the-box together). Empty cells say `n/a` or a short reason, not a bare dash.
- On Mini-7 vs D1000, lift “sold as angle-grinder resistant” to the top of that pair’s table with the plain-English caveat already in the review (independent grade is Diamond; cut-times are marketing).

**About:** `#disclosure` and `#privacy` land under the sticky header.

- `scroll-margin-top` = header height.
- 3-link jump list under the H1: About · Disclosure · Privacy.

**Alternatives:** 3-line H1 + disclosure consume the fold; four equal cards; spec labels wrap mid-unit at 375.

- Keep Lena’s H1; tighten type/spacing, do not rewrite it.
- One-line why you’re here + first pick **above** the cards.
- Rank the three forks: **Best carry** / **Best for insurance** / **Best reach**.
- Do not wrap spec-chip units mid-value (`1.61 kg`, `83 × 178 mm` stay on one line).

**/method:** the desk-research line is a low-contrast grey dek.

- Boxed one-liner at the top.
- Order: What we use → What we will not claim → Amazon → What this means for you.
- No cover photo.

**Reviews (narrow):** sticky strip as in sitewide. 540 stamp must read **pedal** Diamond on the first screen.

### 1440px home / listing tiles (Sable desktop pass)

- **Spec chips inside tiles** wrap to 3 lines at 1440px and push the one-line verdict below the card fold; heights go ragged. → Single inline row under the title (`1.7 kg · 101×197 mm · 21 mm`); lead the card with the verdict. Applies on `/reviews` (and `/for/*`, alternatives) once home no longer carries a grid.
- **Use-case pair is on the home page twice** — items 05/06 in “Six ways in” and again as the commuting/insurance photo cards. → Drop them from the numbered index; keep the photo pair (no spec chips, no Amazon on the home versions).
- **Editor’s Pick photo** is generic and the “not pictures of the named products” line only lives in the footer. → Same small caption under the pick image as on review pages.
- **Header “Best of” vs footer “Best bike locks”** for the same `/best`. → One label in both places: **Best of**.
- Do not keep “Five we compared” as a tile strip. Do not point Compare at an index. Do not add Methodology to the header.

---

## 3. Per URL

### `/` — https://www.lockdesk.co.uk/

**What's wrong.** Two catalogues (H2 “Five we compared” and H2 “Reviewed on this desk”) = 11 tiles, 12 Amazon labels. H2 is the product name “Litelok X1”. “We’d buy this one” + “This desk / Six ways in” fight the cover. First CTA is ~2100px down on 375px. OG claims “not a product grid” while the page is one.

**Do this.** Keep H1. Editor’s pick is the **only** lock-tile on the cover. Do **not** keep “Five we compared” as a tile strip (that is still a catalogue). Link the five as a ranked **one-line list** (or a single “Open the full table”) to `/best`. New York Mini is a one-line “also reviewed”. Six-card catalogue lives only on `/reviews`. Drop “This desk” / “Six ways in” (the numbered index duplicates the commuting/insurance photo pair — drop those two from the index, keep the photo pair with no spec chips and no Amazon). Drop “We’d buy this one”. Cover CTAs: How to choose (primary) + Best of (text). Pick well: H2 `Editor’s pick`, product name H3 `Litelok X1`. Caption the pick photo with the same editorial line as reviews. Keep Grade/Fit/Carry as one strip. Header and footer both say **Best of** for `/best`.

**Paste-ready copy**

- Title (keep): `Lock Desk — UK bike lock comparisons`
- H1 (keep): `The lock you will still carry is the only lock that counts.`
- Meta (keep): `A small UK magazine on D-locks and chains. Sold Secure, insurance, and the lock you will still take to work. Not a shop.`
- OG description (fix the lie): `Sold Secure, insurance, and the lock you will still carry. A UK magazine, not a shop.`
- Lead:
  > A UK magazine for people who need a Sold Secure grade their insurer will accept, and a weight they will still take out of the house. Not a shop. Not a test lab.
- Cover CTAs: `How to choose` → `/guide` · `Best of` → `/best`
- Five-lock line (not tiles): `Five we compared` → `/best` as text / “Open the full table”. No lock-tiles on this line.
- Also-reviewed line:
  > Also reviewed: the New York Fahgettaboudit Mini — 18 mm Gold, 2.06 kg, no mount. Not a commute pick. Read the review.
- Keep Editor’s pick body (already honest). Keep both pick CTAs (`Read the X1 review` + `See on Amazon`).

---

### `/best` — https://www.lockdesk.co.uk/best

**What's wrong.** Five cards then a table of the same five, each with a dark See on Amazon. H1 is the query, not the argument. Chain caveat in the table is just “4.9 kg”. X1 “best for” is vague. NY Mini missing with no reason. Ghost products unnamed-as-a-note. Chooser (the useful block) sits last. H2 is “The workshop sheet”.

**Do this.** Title stays (Owen/query). H1 becomes Lena’s. Cut the five cards. Table is the page. Chooser **under the hero**. Last column **Read the review**; Amazon a small secondary line. Rename workshop → spec sheet. Say why the Mini is not in the five. Ghost note: one line or delete. Group D-locks then the chain. Caption how it is sorted.

**Paste-ready copy**

- Title (keep): `Best bike locks UK · Lock Desk`
- H1: `Five locks. Not one winner.`
- Meta (keep): `Five D-locks and chains compared on Sold Secure grade, weight, and locking area. No number one for everyone.`
- Dek:
  > Five we would pick. A sixth reviewed lock is the Mini we would not commute with. Criteria: Sold Secure pedal grade, whether you will carry it, and whether the shackle will close. Not number one for everyone.
- Ghost (if kept):
  > Not reviewed yet. The OnGuard Pitbulls and the Hiplok DX1000 are real products. They do not have review pages on this site.
- Table caption: `D-locks first, then the house chain. Weights from our records.`
- H2: `Spec sheet`
- Table columns: Lock / Sold Secure / Weight / Locking area / Best for / Caveat / Review  
  Fold Type into the lock name as a kicker (D-lock / Chain).
- Best-for / caveat (quote live, fixed):
  - X1 — Best for: `Diamond you will still carry (pedal and powered).` Caveat: `Mount not in the box on this listing.`
  - Mini-7 — Best for: `Gold commute with a cable and a bracket.` Caveat: `Cable is not Sold Secure approved.`
  - D1000 — Best for: `High-theft racks you have measured.` Caveat: `92 × 155 mm shackle is tight; no mount listed.`
  - 540 — Best for: `When a Mini will not close.` Caveat: `Powered Sold Secure is Gold, not Diamond.`
  - 1410 — Best for: `Length at home, not in a backpack.` Caveat: `4.9 kg. Not a commute lock.`
- Chooser H2 (move under hero): `Start here — pick your case`
  > Carry Diamond on an insured bike: Litelok X1.
  > Gold, mount, cable: Evolution Mini-7.
  > You have measured a small stand in a bad street: D1000.
  > Mini will not fit: Granit XPlus 540.
  > You need a metre of chain at home: New York 1410.
  > How we picked the grades: how to choose · methodology.

---

### `/reviews` — https://www.lockdesk.co.uk/reviews

**What's wrong.** Thin (two sentences + recycled blurbs). No H2. Six cards in a broken row. Amazon styled equal to Read the review. Duplicate of the home catalogue. Ghost products as a loose sentence. Orphan alternatives URL not linked.

**Do this.** Lena H1. Unique standfirst, then **six cards only here**. Group under: Diamond, on the bike / Gold you’ll carry / House chain. 3-up so six fills (or lead + 5). Styled CTA = Read the review; Amazon text. Spec slot 3 labelled **Locking area / length** on every card. Chip linking the alternatives URL. Ghost as a labelled note or delete.

**Paste-ready copy**

- Title (keep): `Bike lock reviews · Lock Desk`
- H1: `Six reviews. Verdict first.`
- Meta (keep): `Six UK D-lock and chain reviews from Lock Desk. Verdict first. Not hands-on lab tests. Not a shop.`
- Standfirst:
  > Six locks, Gold to Diamond, 1.61 kg to 4.9 kg. Each page says who it is for, who should skip it, and what we would change. We have not cut these open.
- Rubrics:
  - `Diamond, on the bike` — X1 (1.7 kg, pedal and powered Diamond, 101 × 197 mm); D1000 (1.9 kg, 92 × 155 mm, no mount); 540 (1.8 kg, 108 × 300 mm, pedal Diamond / powered Gold).
  - `Gold you’ll carry` — Mini-7 (1.61 kg, mount, cable — cable is not Gold); New York Mini (2.06 kg, 18 mm, no mount).
  - `House chain` — 1410 (100 cm, 14 mm, 4.9 kg).
- Alternatives chip (not in main nav):
  > Looking for something instead of the New York Mini?
- Card one-liners may stay as stamps (live):
  - X1: `The lock we would carry on a bike worth insuring.`
  - D1000: `Diamond for a bad street — if the shackle will close.`
  - Mini-7: `The lock you will still take to work.`
  - 540: `Pedal Diamond for fat posts. Check the powered grade if you ride an e-bike.`
  - NY Mini: `18 mm of Gold — not the lock we would commute with.`
  - 1410: `Reach, not a commute. 4.9 kg stays by the door.`

---

### Review template (all six)

**What's wrong.** Shared skeleton is magazine-grade; the shop leaks are structural. First See on Amazon is an **alternative**. Verdict H2 is “Is it worth it?” after the spec tiles. Four mid-page paras with no subheads. “Buy this instead if”. “The workshop sheet”. “Questions we keep getting”. “slice”. Six metas truncated at 158 characters mid-word. Product JSON-LD Offer. 540 hero stamp says Diamond while the body correctly splits powered Gold. NY Mini FAQ #2 is an SEO pointer.

**Do this (every review).** Apply sitewide H2/kicker swaps. Lift a two-line verdict under the gold job-line; specs follow. One subject Amazon under that verdict. Three short subheads wrapping **existing** body paras (do not invent tests). Group spec sheet as Grade / Size & weight / In the box, same row order. Alternative cards after the subject CTA. Sticky strip on narrow. Drop Product Offer JSON-LD; keep Article + FAQPage. Kill slice. Paste Lena metas. Buttons still See on Amazon.

Keep product H1s and live titles (they match intent). Keep Best for / Skip / The good / The bad / What we’d change. Keep ASINs already on the pages.

**Paste-ready metas (all ≤155)**

| URL | Title (keep) | Meta |
|---|---|---|
| `/reviews/litelok-x1` | Litelok X1 review · Lock Desk | `Pedal and powered Diamond, 1.7 kg, 101 × 197 mm. The lock we would carry on a bike worth insuring. Not a lab test.` (114) |
| `/reviews/hiplok-d1000` | Hiplok D1000 review · Lock Desk | `Diamond, 1.9 kg, 92 × 155 mm, no mount. Worth it if you have measured the rack. Skip it if Gold and a cable would do.` (117) |
| `/reviews/kryptonite-evolution-mini-7` | Kryptonite Evolution Mini-7 review · Lock Desk | `Sold Secure Gold, 1.61 kg, mount and cable in the box. The cable is not Gold. The commute lock most people will actually carry.` (127) |
| `/reviews/abus-granit-xplus-540` | ABUS Granit XPlus 540 review · Lock Desk | `Pedal Diamond, powered Gold, 108 × 300 mm, mount in the box. For racks a Mini will not hug. Not an anti-grinder story.` (118) |
| `/reviews/kryptonite-new-york-fahgettaboudit-mini` | Kryptonite New York Fahgettaboudit Mini review · Lock Desk | `18 mm Gold Mini, 2.06 kg, no mount, no cable. A thick second lock. Most commuters should buy the Evolution Mini-7.` (114) |
| `/reviews/kryptonite-new-york-fahgettaboudit-1410` | Kryptonite New York 1410 chain review · Lock Desk | `100 cm, 14 mm, 4.9 kg, Sold Secure Gold. A house or terrace chain. Not the lock you pedal with.` (95) |

OG descriptions: use the same strings (live OG currently copies the truncated metas).

**Closer (all six):**
> Different job. Read the review before Amazon.

**Spec-sheet intro (keep, already honest):**
> Figures from our records only. If a number is missing, we omit it rather than guess.

---

### `/reviews/litelok-x1`

**What's wrong.** Truncated meta. Alt Amazon before subject. Workshop / Is it worth it? / slice in FAQ. No mount in the box is the practical hole — keep it, don’t bury it.

**Do this.** Template swaps. Subject Amazon under verdict. Subheads over existing paras. Slice → on our records / on this site.

**Paste-ready**

- H1 (keep): `Litelok X1`
- Job-line (keep): `The lock we would carry on a bike worth insuring.`
- Subheads:
  1. `Will it fit your rack`
  2. `The mount problem`
  3. `What’s marketing, what’s graded`
- FAQ “On our slice: yes…” →
  > On our records: yes, for pedal cycles and powered cycles. Confirm the current marking and your insurer’s list. We do not keep a live list.
- FAQ “The ABUS 540 is the long-shackle option in this slice.” →
  > The ABUS 540 is the long-shackle option on this site.
- FAQ “This UK listing is the X1 armoured D-lock in our slice.” →
  > This UK listing is the X1 armoured D-lock on our records.

---

### `/reviews/hiplok-d1000`

**What's wrong.** Truncated meta. DX1000 named (keep as context, no new URL). “in this slice” twice. Alt Amazon first.

**Do this.** Template swaps. Keep the DX1000 fit warning with live 112 × 155? **No** — live figure is **112 × 205 mm, 2.75 kg**. Do not invent a DX1000 review.

**Paste-ready**

- H1 (keep): `Hiplok D1000`
- Job-line (keep): `Diamond for a bad street — if the shackle will close.`
- Subheads:
  1. `Will it fit your rack`
  2. `No mount, 1.9 kg`
  3. `What’s marketing, what’s graded`
- Body “Hiplok’s larger DX1000 (112 × 205 mm, 2.75 kg) is in this slice without a first-launch review” →
  > Hiplok’s larger DX1000 (112 × 205 mm, 2.75 kg) is on our records without a full review — that is the sibling to look at if the Mini hole is the problem, not the grade.
- FAQ “The DX1000 is in the slice without a full review on first launch.” →
  > The DX1000 is on our records without a full review on this site yet.

---

### `/reviews/kryptonite-evolution-mini-7`

**What's wrong.** Truncated meta. “in the slice”. Cable-not-Gold is the editorial point — keep it. Add inbound to alternatives from the NY Mini comparison, not as the lead FAQ here.

**Do this.** Template swaps. Add a Mini FAQ link to alternatives (this lock is the honest commute fork).

**Paste-ready**

- H1 (keep): `Kryptonite Evolution Mini-7`
- Job-line (keep): `The lock you will still take to work.`
- Subheads:
  1. `The cable is not Gold`
  2. `Mini hole — measure the rack`
  3. `Gold is the policy line`
- Body “this is the right one in the slice” →
  > If Gold is the line and you will carry 1.6 kg, this is the right one on this site.
- Extra FAQ (inbound, rider question):
  - Q: `What should I buy instead of the New York Mini?`
  - A: `This lock, if you need Gold you will carry. Diamond: Litelok X1. Reach at home: the New York 1410 chain. Longer version: alternatives to the New York Mini.`

---

### `/reviews/abus-granit-xplus-540`

**What's wrong.** Truncated meta. Hero **Diamond** stamp oversells; body correctly says pedal Diamond / powered Gold. “On our slice”. Not an anti-grinder lock — keep that.

**Do this.** Split or qualify the stamp: **Pedal Diamond**. Template swaps.

**Paste-ready**

- H1 (keep): `ABUS Granit XPlus 540`
- Stamp: `Pedal Diamond` (not a bare Diamond badge)
- Job-line (keep): `Pedal Diamond for fat posts. Check the powered grade if you ride an e-bike.`
- Subheads:
  1. `Fit is the point`
  2. `Pedal Diamond, powered Gold`
  3. `Not an anti-grinder story`
- Body “On our slice the pedal grade is Diamond and the powered grade is Gold.” →
  > On our records the pedal grade is Diamond and the powered grade is Gold.
- FAQ “On our slice: pedal Diamond, powered Gold.” →
  > On our records: pedal Diamond, powered Gold. Read both if you ride an e-bike.

---

### `/reviews/kryptonite-new-york-fahgettaboudit-mini`

**What's wrong.** Truncated meta. Written as a warning (keep). FAQ #2 is a sitemap pointer. “in this slice” / “in our slice”. No inbound `<a>` to the alternatives URL from other pages in the crawl (only this FAQ text). Not on `/best` (correct, if `/best` dek says so).

**Do this.** Template swaps. Replace FAQ #2 with a rider question that still links alternatives. Add a related well (not instead of the FAQ — parent requires Mini FAQ + chip + footer). No Amazon for this Mini on the **alternatives** page; this review may keep subject Amazon after verdict.

**Paste-ready**

- H1 (keep): `Kryptonite New York Fahgettaboudit Mini`
- Job-line (keep): `18 mm of Gold — not the lock we would commute with.`
- Subheads:
  1. `Carry versus thickness`
  2. `No mount, no cable`
  3. `Gold is Gold`
- “the thickest Mini Gold shackle in this slice (18 mm)” →
  > the thickest Mini Gold shackle on this site (18 mm)
- “What you actually get in this slice is an 18 mm Gold Mini” →
  > What you actually get on our records is an 18 mm Gold Mini
- “18 mm shackle — the thickest Mini D-lock in this slice” →
  > 18 mm shackle — the thickest Mini D-lock on this site
- Replace FAQ `Is this the lock in ‘best alternatives to Kryptonite New York’?` with:
  - Q: `What should I buy instead?`
  - A: `If you need a lock you will carry, the Evolution Mini-7. If you need Diamond, the Litelok X1. If you need reach at home, the New York 1410 chain. The longer version is Instead of the New York Mini.`
- Keep FAQs: New York Mini or Evolution Mini-7? (live answer is fine; already quotes 13 mm / 1.61 kg vs 18 mm / 2.06 kg). Will insurers accept it? (live: Gold is widely named; match the model; we do not keep a live list).

---

### `/reviews/kryptonite-new-york-fahgettaboudit-1410`

**What's wrong.** Truncated meta. Wordiest of the six — still keep, add subheads. “In this slice that is the Evolution Mini-7”. Subject Amazon last.

**Do this.** Template swaps. Subheads over existing paras. Do not turn it into a commute pick.

**Paste-ready**

- H1 (keep): `Kryptonite New York 1410 chain`
- Job-line (keep): `Reach, not a commute. 4.9 kg stays by the door.`
- Subheads:
  1. `Reach vs carry`
  2. `4.9 kg is the product`
  3. `Gold, and what looping doesn’t do`
- “In this slice that is the Evolution Mini-7 for Gold commuters, or the X1 if you need Diamond on the bike and the chain at home.” →
  > On this site that is the Evolution Mini-7 for Gold commuters, or the X1 if you need Diamond on the bike and the chain at home.

---

### `/for/commuting` — https://www.lockdesk.co.uk/for/commuting

**What's wrong.** Thin use-case. H2 “From this magazine” is chrome. Mini-7 pick buried in para 3 on mobile; cards last. No FAQ. Body is already close to Lena — finish the last chain sentence and add FAQs. Keep two cards only (Mini-7, X1).

**Do this.** Keep title/H1/lead. Rename H2 to the job. One-line verdict + two cards under the hero; Not-for / if-you underneath. Amazon text on cards; Read the review styled. Two FAQs. Do not add 1410 or D1000 as commute cards.

**Paste-ready copy**

- Title (keep): `Best bike lock for commuting · Lock Desk`
- H1 (keep): `Best bike lock for commuting`
- Meta (keep): `A commute lock is the one you will carry. Gold Mini with a mount, or Diamond if the bike is worth the weight.`
- Lead (keep): `A commute lock is the one you will carry. Gold Mini with a mount, or Diamond if the bike is worth the weight.`
- H2: `Two we’d take on the train`
- Not for:
  > This is not a page about 5 kg chains, ground anchors, or leaving the bike in a shed.
- Body (keep the live Mini-7 / X1 / D1000-measure paras). Finish the chain paragraph as:
  > A 4.9 kg chain is not a commute plan. Keep length at home and a D-lock on the bike. That pairing is how careful riders lock up. It is not a 100 cm chain in a backpack.
- Cards (two only): Mini-7 · X1.
- Common questions:
  - Q: `Can I commute with the 1410?`
  - A: `Not twice a day. 4.9 kg stays by the door. Keep length at home and a D-lock on the bike.`
  - Q: `Gold or Diamond for the train?`
  - A: `For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the honest pick: 1.61 kg, bracket, cable in the box. The cable is not Gold. If the bike is an e-bike you would hate to claim on, and you will carry 1.7 kg, take the Litelok X1. We are not your broker.`

---

### `/for/insurance` — https://www.lockdesk.co.uk/for/insurance

**What's wrong.** Thin. H2 “From this magazine”. “Grade is necessary; it is not always sufficient” said twice. Cards already happen to be X1 / Mini-7 / D1000 — keep those three, not the whole catalogue, not a 540 card. No FAQ. Gold-vs-Diamond rule is buried in prose.

**Do this.** Keep title/H1/lead. Say the necessary/sufficient line **once**. Keep “we are not your broker”. No live insurer list. Two-branch fold: Policy Gold → Mini-7 / Diamond → X1, D1000. Checklist above cards. 540 caveat in the records paragraph + FAQ only. Paste Lena’s sentences verbatim.

**Paste-ready copy**

- Title (keep): `Best bike lock for insurance · Lock Desk`
- H1 (keep): `Best bike lock for insurance`
- Meta (keep): `Match Sold Secure Gold or Diamond to the policy, then check the insurer’s approved list. We are not your broker.`
- Lead (keep): `Match Sold Secure Gold or Diamond to the policy, then check the insurer’s approved list. We are not your broker.`
- H2: `Three that can satisfy a policy`
- Fold block:
  > Policy names Gold → Evolution Mini-7.
  > Policy names Diamond → Litelok X1, or D1000 if 92 × 155 mm will close.
- Not for:
  > We do not sell insurance and we do not keep a live list of approved models.
- Policy + PDF (keep live wording, say the necessary line once):
  > Read the wording you signed. Many UK cycle policies still say Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the powered-cycle grade rather than the pedal grade.
  > Then open the insurer’s approved-lock PDF. A lock can be Gold in Sold Secure’s database and still missing from one brand’s list. The grade is necessary; it is not always sufficient. If the PDF names models, match the model, not just the badge. We do not keep that list current, because insurers change it.
- On our records (Lena, verbatim 540 clause):
  > On our records: Evolution Mini-7, the New York Mini and the 1410 chain are Gold for pedal cycles. Litelok X1 and Hiplok D1000 are Diamond for both pedal and powered. The ABUS 540 is pedal Diamond and powered Gold — the wrong way round if your e-bike policy wants powered Diamond.
- Cards (three only): X1, Mini-7, D1000.
- Common questions (verbatim):
  - Q: `If it is Gold, am I covered?`
  - A: `Only if your policy names Gold and the exact model is on that insurer’s list. The badge is not a claim.`
  - Q: `Pedal Diamond or powered Diamond?`
  - A: `E-bike policies sometimes name the powered-cycle grade. On this site the X1 and D1000 are Diamond for both. The ABUS 540 is pedal Diamond and powered Gold.`

---

### `/guide` — https://www.lockdesk.co.uk/guide

**What's wrong.** Strongest magazine page — keep the H2 spine. Operator “pillar” line. Hero H3s Grade/Fit/Weight duplicate the H2s. Associate strip on a page with **zero** Amazon buttons. OG still says “our slice”. Chooser at the end is the payoff.

**Do this.** Keep structure, H1, title, meta. Drop “pillar”. Replace with Lena’s independence line. Chooser intro: from the locks on this site only. Cut briefing triplets **or** turn them into jump links (mobile: 3-bullet Start here in the hero). Jump to chooser under the dek. One-line disclosure under the hero, not a second legal block. No Amazon on this page (already correct). Strip slice from OG.

**Paste-ready copy**

- Title (keep): `How to choose a bike lock · Lock Desk`
- H1 (keep): `How to choose a bike lock`
- Meta (keep): `Sold Secure Gold vs Diamond, insurance lists, D-lock vs chain, and why a lock you will not carry is not a lock. UK English. Not a shop.`
- OG description: `Gold vs Diamond, insurance, fit, and a chooser for the locks on this site.`
- Lead (keep): `Start with the policy, then the rack, then the weight you will actually take out of the house. Brand comes last.`
- Replace the pillar paragraph:
  > This page should still help if every Amazon link vanished. Grades from Sold Secure. Weights and sizes from the product records here. We have not run lab attacks.
- Chooser intro:
  > From the locks on this site only. Not a shop filter. Not a price quiz.
- Hero Start here (three bullets):
  > Policy first.
  > Then the rack.
  > Then the weight you will take out of the house.

Keep the live Sold Secure / cable / fit / weight / D-lock-or-chain / ignore / mistakes copy. It already quotes live weights. No new product facts.

---

### `/method` — https://www.lockdesk.co.uk/method

**What's wrong.** Honest page. Mailbox line duplicates About. Associate pronoun “we earn”. Meta 169 characters (over 155). Desk-research dek is low-contrast grey. Not in the header (correct — park under About).

**Do this.** Lena lead. Move mailbox to About only. `I earn`. Trim meta. Boxed one-liner. Reorder: What we use → What we will not claim → Amazon → What this means for you. No cover photo. Link from About as How we work.

**Paste-ready copy**

- Title (keep): `How we research bike locks · Lock Desk`
- H1 (keep): `How we research bike locks`
- Meta (152): `Lock Desk is desk research, not a test lab. Sold Secure grades, manufacturer specs, and UK insurance wording. We do not pretend we attacked these locks.`
- Boxed lead:
  > Desk research. We have not cut these locks open. If a sentence would only be true because we attacked a lock, we do not write it.
- Amazon paragraph:
  > Lock Desk is not Amazon. Outbound buttons say See on Amazon. As an Amazon Associate I earn from qualifying purchases. Prices and stock are Amazon’s, on the day you click.
- Delete from this page: `We do not publish a contact mailbox yet — see About.` (keep that sentence on About only).
- What this means for you:
  > You should know what stands behind a verdict. We help a UK rider match Sold Secure grade, fit, and carry — from facts we can stand behind.

Keep the live “what a verdict is based on” / “what we will not claim” lists (already honest). Update the review-layout sentence: verdict is now labelled Verdict, spec sheet not workshop sheet, Common questions not Questions we keep getting.

---

### `/vs/d-lock-vs-chain` — https://www.lockdesk.co.uk/vs/d-lock-vs-chain

**What's wrong.** Thin who-each. Meta still says “from our UK slice”. Amazon cards sit before the spec table. H3 product names before any H2. Dashes in empty cells. Footer-only — keep it there.

**Do this.** Keep title/H1/lead. Kill slice. Delete “We are not trashing one to sell the other.” Who-each as two labelled lines under the lede, then spec table, then Amazon. H2 `The two locks` wrapping the cards **after** the table. Paste Lena body verbatim. Empty cells: `n/a` (D-lock has no chain length; chain has no shackle hole).

**Paste-ready copy**

- Title (keep): `D-lock vs chain lock · Lock Desk`
- H1 (keep): `D-lock vs chain lock`
- Meta (122): `A Gold Mini D-lock versus a 100 cm New York chain. Carry versus reach. Using both is common; commuting with 4.9 kg is not.`
- Lead (keep, including own line):
  > A D-lock and a chain do different jobs. The Mini-7 is what you take on the bike. The New York 1410 is 4.9 kg of Gold chain for when the only solid object is too far for a Mini. Using both is common. Pretending the chain is a commute lock is how it stays in the shed.
- Who-each (two labelled lines, before the table):
  > Mini-7 is carry.
  > 1410 is reach at home.
- After spec table (verbatim):
  > A D-lock hugs a rack. A chain buys length. That is the whole distinction.
  > The Evolution Mini-7 is what you take on the bike: 1.61 kg, a mount, Gold. You will carry it. You will not carry 4.9 kg twice a day.
  > The New York 1410 is 100 cm of 14 mm Gold chain for a home, a garden, a ground anchor, or a post a Mini cannot hug. Leave it where the bike lives.
  > The mistake is treating these as rivals. Careful riders use both and only carry the D-lock. If the Mini will not close, neither of these is the answer — see the ABUS 540.
- Common questions (verbatim):
  - Q: `Can I commute with the 1410?`
  - A: `Not twice a day. 4.9 kg stays by the door.`
  - Q: `Does looping the chain twice make it Diamond?`
  - A: `No. It can reduce slack. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor.`
- Delete: `We are not trashing one to sell the other.`

Keep the live spec table figures (Mini-7: Gold, 13 mm, 83 × 178 mm, 1.61 kg, mount yes, cable yes, 3 keys. 1410: Gold, 14 mm, 100 cm, 4.9 kg, mount no, cable no, 3 keys. Neither sold as angle-grinder resistant).

---

### `/vs/evolution-mini-7-vs-d1000` — https://www.lockdesk.co.uk/vs/evolution-mini-7-vs-d1000

**What's wrong.** Header Compare’s only target. Same thin skeleton. Meta still says “from our UK slice”. Amazon before the table. “This is the search we keep seeing” talks to the operator. Who-should-skip-both (X1 / 540) is missing. DX1000 detour belongs in a FAQ, not a new page.

**Do this.** Keep title/H1. Lena lead. Delete the search line. Who-each above table; Amazon after. Lift anti-grinder row with the marketing caveat. Paste Lena after-table + FAQs verbatim. Do not mint X1 vs D1000.

**Paste-ready copy**

- Title (keep): `Kryptonite Evolution Mini-7 vs Hiplok D1000 · Lock Desk`
- H1 (keep): `Kryptonite Evolution Mini-7 vs Hiplok D1000`
- Meta (114): `Gold Mini with a cable versus a Diamond anti-grinder D-lock. Who each is for, and who should skip both for the X1.`
- Lead (verbatim):
  > The Gold commuter Mini versus the Diamond lock with the anti-grinder story. They are not rivals for the same rider.
- Delete: `This is the search we keep seeing.`
- Who-each (before table):
  > Mini-7 is Gold you will carry: 1.61 kg, mount, cable.
  > D1000 is Diamond with a tight shackle: 1.9 kg, no mount, 92 × 155 mm.
- After spec table (verbatim):
  > The Evolution Mini-7 is 1.61 kg, Gold, a frame mount, a cable in the box. The cable is not Gold. If that meets the policy, this is the lock that will actually be on the bike.
  > The D1000 is pedal and powered Diamond, sold as anti-grinder, 1.9 kg, no mount, a 92 × 155 mm hole. Worth it on a known-bad rack you have measured. If you will not carry 1.9 kg with no mount, it is a hall lock.
  > If neither shackle will close, look at the ABUS 540 — not a thicker Mini. If you wanted Diamond with a usable hole and 1.7 kg, that is the Litelok X1, not this head-to-head.
- Common questions (verbatim):
  - Q: `Gold or Diamond for this street?`
  - A: `Gold is what many UK household policies still name. Diamond is the higher pedal grade. Read the wording you signed. We are not your broker.`
  - Q: `D1000 or DX1000?`
  - A: `D1000 is 92 × 155 mm, 1.9 kg. DX1000 is 112 × 205 mm, 2.75 kg and has no full review on this site yet. Buy the one that closes.`
- Delete: `We are not trashing one to sell the other.`

Keep live table figures (Mini-7 Gold / powered —, 13 mm, 83 × 178 mm, 1.61 kg, mount yes, cable yes, anti-grinder no. D1000 Diamond / powered Diamond, 20 mm, 92 × 155 mm, 1.9 kg, mount no, cable no, anti-grinder yes). Powered cell for Mini-7: `n/a on our records`, not a dash.

---

### `/about` — https://www.lockdesk.co.uk/about (`#disclosure`, `#privacy`)

**What's wrong.** Closed inventory omits the live alternatives URL. `/privacy` and `/disclosure` 404 while footer labels look like pages. Mailbox said twice (About + Method). Anchors hide under the sticky header. Disclosure rewrite was incomplete in Lena part 1 — keep hashes on this page; privacy copy is already agreed.

**Do this.** Keep `#disclosure` and `#privacy` on **this** page. 301 the obvious URLs. Lena lead + body + inventory. Keep mailbox here only. Privacy: do not name analytics; Amazon outbound is Amazon’s notice (already live — keep). `scroll-margin-top`. 3-link jump under H1. How we work → `/method`. Do not add `/contact`.

**Paste-ready copy**

- Title (keep): `About, disclosure, and privacy · Lock Desk`
- H1 (keep): `About Lock Desk`
- Meta (keep): `Who operates Lock Desk, Amazon Associates disclosure, and privacy. We are not Amazon.`
- Jump: `About` · `Disclosure` · `Privacy` · `How we work`
- Lead:
  > A small UK magazine about D-locks and chains — Sold Secure, insurance, and the lock you will still carry.
- Body:
  > Lock Desk is operated by Aivora Digital. It is not a shop, not a marketplace, and not Amazon. We write for UK riders who need a grade their insurer will accept and a weight they will take out of the house. Amazon Associate links fund the site. They do not change the verdict.
- Inventory:
  > The magazine is small on purpose. We would rather six honest reviews than a catalogue we have not written. One extra URL exists for a search people actually type: alternatives to the New York Mini. It is not in the main nav. It is a landing, not a section.
- Mailbox (keep, here only):
  > We do not publish a contact mailbox yet. When we do, it will be listed here. Until then, this page is the record of who operates the site, how we are paid, and how we treat data.
- H2 Disclosure (`id="disclosure"`):
  > As an Amazon Associate I earn from qualifying purchases.
  > We are not Amazon. Prices and availability change on Amazon. Disclosure appears on every page that has an affiliate link, before that link. Buttons say See on Amazon. We do not scrape prices or star ratings.
  > How we research: methodology.
- H2 Privacy (`id="privacy"`) — agreed copy, keep:
  > We do not sell personal data. This site does not currently run a named analytics product. If that changes, this paragraph will name it.
  > Outbound clicks to Amazon.co.uk are their site, under their privacy notice.

---

### `/alternatives/kryptonite-new-york-fahgettaboudit-mini`

**What's wrong.** 200 and in sitemap; **orphan** (no inbound `<a>` from other crawled pages except mention-in-FAQ). About’s “small on purpose” ignored it. Thin: dek + three bullets + four equal Amazon cards. Title/H1 are shop-query long. Meta still says “UK slice”. Page currently Amazons the Mini’s rivals including a fourth equal D1000 card; Sable: no Amazon for the Mini being talked **off** (the Mini itself is correctly not a fifth buy button).

**Do this.** Keep the URL. Add inbound: Mini FAQ, `/reviews` chip, footer under Compare. Not in main nav. Lena title/H1/meta/lead. Chooser is the page. Rank three forks (Best carry / Best for insurance / Best reach). D1000 sits under insurance as “if the small shackle fits”, not a fourth equal hero card. No See on Amazon for the New York Mini on this page. Read the review styled on the forks.

**Paste-ready copy**

- Title: `Instead of the New York Mini · Lock Desk`
- H1: `The New York Mini is famous. It is usually the wrong lock.`
- Meta (144): `2.06 kg, no mount, 18 mm Gold. If that is too heavy or too small, carry the Evolution Mini-7, step to Diamond, or keep a New York chain at home.`
- Lead:
  > The Fahgettaboudit Mini is an 18 mm Sold Secure Gold D-lock at 2.06 kg, with no mount and no cable on our records. People search it because of the name. Most of them need a lock they will carry, or Diamond, or a metre of chain by the door.
- Why you’re here (one line, above cards):
  > Stay with it only if you want an 18 mm Gold Mini as a second lock on a heavy bike, and you will not miss a mount or a cable.
- Three honest forks:
  1. **Best carry** — Evolution Mini-7. 1.61 kg, Gold, mount, cable in the box. The cable is not Gold.
  2. **Best for insurance** — Litelok X1 (pedal and powered Diamond, 1.7 kg, 101 × 197 mm). D1000 only if you have measured 92 × 155 mm.
  3. **Best reach** — New York 1410 chain. 100 cm, 14 mm, 4.9 kg. A house lock, not a bag lock.
- Common questions:
  - Q: `Should I still buy the New York Mini?`
  - A: `Only as a thick second lock you will not have to clip on every morning. Most commuters should buy the Evolution Mini-7.`
  - Q: `Is the Mini on the best-of page?`
  - A: `No. Five we would pick live on best bike locks UK. This Mini is reviewed because people type the name, not because we would commute with it.`

---

### 404 template (any missing path)

**What's wrong.** `/privacy`, `/disclosure`, `/contact`, `/compare`, etc. return 404 with H1 “That page is not here” but `<title>` and canonical of the **homepage**, plus `noindex` (mixed signals).

**Do this.** Fix the 404 shell. 301 only `/privacy` and `/disclosure`. Do not canonical 404 to home. Do not mint extra legal pages.

**Paste-ready copy**

- Title: `Page not found · Lock Desk`
- H1 (keep): `That page is not here`
- Meta: `That page is not on Lock Desk. Try how to choose, best bike locks, or reviews.`
- Body (keep): `Try the front page, how to choose, best bike locks, or reviews.`
- Canonical: omit, or self; **never** `https://www.lockdesk.co.uk/`.
- Robots: keep `noindex`.

**Redirects**

- `301 /privacy` → `/about#privacy`
- `301 /disclosure` → `/about#disclosure`

---

## 4. Do not

- Do not clone or edit `aipagesnow/amazon1` from this punch list’s authoring pass. Implement in the build, not by forking the audit.
- Do not invent ASINs, grades, weights, hole sizes, cut-times, prices, testimonials, search volumes, or ranking promises.
- Do not write **slice** in any title, meta, H1, body, alt, or schema.
- Do not create `/compare`, `/privacy`, `/disclosure`, `/contact`, `/cookies`, `/terms`, extra vs pages (no X1 vs D1000 unless a later optional with unique who-each), or review shells for Pitbulls / DX1000.
- Do not put alternatives or Methodology in the main header. Do not add a fifth header item.
- Do not put two product boards on home. Do not put the six-card catalogue anywhere except `/reviews`.
- Do not lead a review with an alternative’s Amazon button. Do not put Amazon on `/guide`. Do not Amazon the New York Mini on the alternatives page.
- Do not dump the whole catalogue on `/for/insurance` or `/for/commuting`. Insurance cards = X1, Mini-7, D1000. Commuting cards = Mini-7, X1. 540 is the insurance caveat, not a fourth (or third) insurance tile.
- Do not restyle the brand. Reuse gold rule, dark strip, spec tiles, kicker, caption. Do not freeze prices. Do not change the See on Amazon label. Do not invent a new Amazon tag — `process.env` only.
- Do not drop Article or FAQPage JSON-LD. Do drop Product `Offer`.
- Do not canonical 404 to home. Do not index 404.
- Do not reopen closed copy: Lena’s insurance/vs sentences, Lena’s six metas, Lena’s alternatives H1, privacy copy as live, “we are not your broker”, no live insurer list.

---

## Executive summary (highest-impact)

1. Home: Editor’s pick only — no second catalogue, no five-tile strip. Six-card catalogue only on `/reviews`. Editor’s pick keeps both CTAs.
2. Fix 404 SEO (title `Page not found · Lock Desk`, no homepage canonical, keep noindex) and 301 `/privacy` + `/disclosure` onto About hashes.
3. Rewrite all six truncated review metas with Lena’s ≤155 strings; kill **slice** sitewide.
4. Reviews: subject Amazon under Verdict; alts after; H2 swaps (Verdict / Spec sheet / Common questions / Better if).
5. Drop Product JSON-LD Offer; keep Article + FAQPage; Amazon tag stays env; buttons stay See on Amazon.
6. Header Compare stays one URL: relabel **Mini-7 vs D1000**. D-lock vs chain stays footer-only. 301 `/compare` → `/best`. Methodology parked under About, not a new header item.
7. Thicken `/for/insurance`, both `/vs/*`, and alternatives with Lena’s verbatim who-each; insurance tiles stay X1 / Mini-7 / D1000; 540 is the powered-Gold caveat.
8. Un-orphan alternatives (Mini FAQ + `/reviews` chip + footer); listing CTAs = Read the review styled, Amazon as text; 375px: disclosure under H1, collapsed nav, who-each before vs tables.
