/**
 * Three GSC content-gap pages (29 Oct 2026). Figures come from data/products.json only.
 * Desk research — no cut tests, no prices.
 */

export const DESK_LINE =
  "Desk research from Sold Secure grades and published specs — not a hands-on cut test.";

export type GapSection = { h2: string; paragraphs: string[] };
export type GapFaq = { q: string; a: string };

/* ---------- 1. Bike lock types ---------- */

export const TYPES_PATH = "/guide/bike-lock-types";
export const TYPES_TITLE = "Bike lock types explained: cable vs chain vs D-lock vs folding";
export const TYPES_H1 = "Cable, chain, D-lock and folding bike locks: the main differences";
export const TYPES_META =
  "The main differences between cable, chain, D-lock and folding bike locks, and how folding locks compare to D-locks for security, with Sold Secure grades.";
export const TYPES_DIRECT =
  "Short answer: a cable lock is light but easy to cut, so it's a tether for a wheel and not a main lock. A D-lock is a rigid shackle that's easy to carry and closes round a stand. A chain gives you reach for awkward posts and home anchors, but it's heavy. A folding lock sits in between: more reach than a D-lock, and it folds onto the frame.";

export const TYPES_SECTIONS: GapSection[] = [
  {
    h2: "Cable locks",
    paragraphs: [
      "A cable is the lightest and most flexible option, and that's also its weakness. A thin cable is the easiest of the four types to cut, so we'd only use one to hold a quick-release wheel or a saddle to a lock that does the real work.",
      "None of the thirteen locks reviewed here is a cable-only lock for that reason. Some D-locks come with one in the box, such as the [Kryptonite Evolution Mini-7](/reviews/kryptonite-evolution-mini-7) and the [OnGuard Pitbull DT 8005](/reviews/onguard-pitbull-dt-8005). Worth knowing: the Sold Secure grade on those boxes belongs to the D-lock, and the cable isn't covered by it.",
    ],
  },
  {
    h2: "D-locks (U-locks)",
    paragraphs: [
      "A D-lock is a rigid steel shackle and a crossbar. It's the type most UK commuters carry, because it's compact and it closes neatly round a Sheffield stand and your frame.",
      "The weights are manageable. The [OnGuard Pitbull STD 8003](/reviews/onguard-pitbull-std-8003) is Sold Secure Diamond at 1.44kg, and the Evolution Mini-7 is Sold Secure Gold at 1.61kg. Both have a frame mount.",
      "Here's the catch: a D-lock only works if it closes round what you're locking to. The space inside the shackle (the locking area) is the figure to check, and it ranges from 83 × 153 mm on the [New York Fahgettaboudit Mini](/reviews/kryptonite-new-york-fahgettaboudit-mini) to 108 × 300 mm on the [ABUS Granit XPlus 540](/reviews/abus-granit-xplus-540).",
    ],
  },
  {
    h2: "Chain locks",
    paragraphs: [
      "A chain gives you length. That's useful at home, on a ground anchor, round two bikes, or on a post that a D-lock won't close round.",
      "The trade-off is weight. The [New York Fahgettaboudit 1410](/reviews/kryptonite-new-york-fahgettaboudit-1410) is 100 cm of 14 mm chain and weighs 4.9kg. The [1415](/reviews/kryptonite-new-york-fahgettaboudit-1415) is 150 cm and weighs 6.92kg. Both are Sold Secure Diamond for ordinary bikes and Gold for e-bikes, but they're locks to leave where the bike lives rather than carry every day.",
    ],
  },
  {
    h2: "Folding locks",
    paragraphs: [
      "A folding lock is a set of hardened plates joined by rivets. It opens out into a loop with more reach than a D-lock and folds back into a block that clips to the frame.",
      "The folding lock covered here is the [ABUS Bordo Granit 6500K](/reviews/abus-bordo-granit-6500k). It's Sold Secure Gold, opens to 120 cm and weighs 2.47kg with its SH bracket.",
    ],
  },
  {
    h2: "How do folding locks compare to D-locks for security?",
    paragraphs: [
      "Compare them on the Sold Secure grade, because the shape on its own doesn't tell you much. The Bordo 6500K is Gold. So is the Evolution Mini-7 D-lock, which is lighter at 1.61kg. If you want Diamond, the D-locks in this set get you there at a lower weight, with the Pitbull STD at 1.44kg.",
      "So we'd pick the folding lock for reach rather than for extra security. It makes sense if a D-lock won't close round the stands you use and you still want the lock on the bike. If a D-lock already fits, it's the lighter way to get the same grade or a higher one.",
    ],
  },
  {
    h2: "Which type should you carry?",
    paragraphs: [
      "For most commutes we'd carry a graded D-lock and add a cable only if you've got a quick-release wheel to hold. A folding lock suits awkward stands. A chain earns its weight at home. For the D-lock and chain head-to-head, see [D-lock vs chain](/vs/d-lock-vs-chain). If you're choosing a size, read [shackle size and how to judge lock security](/guide/shackle-size-lock-security).",
    ],
  },
];

export const TYPES_TABLE = {
  caption: "Examples from the locks reviewed on Lock Desk. Grades are Sold Secure Pedal Cycle unless noted.",
  rows: [
    { type: "Cable", example: "Cable in the Mini-7 or Pitbull DT box", grade: "Not covered by the lock's grade", weight: "Not listed separately", use: "Holding a wheel or saddle" },
    { type: "D-lock", example: "OnGuard Pitbull STD 8003", grade: "Diamond", weight: "1.44kg", use: "Daily carry, Sheffield stands" },
    { type: "D-lock", example: "Kryptonite Evolution Mini-7", grade: "Gold", weight: "1.61kg", use: "Daily carry, Sheffield stands" },
    { type: "Folding", example: "ABUS Bordo Granit 6500K", grade: "Gold", weight: "2.47kg", use: "Awkward stands, carried on the frame" },
    { type: "Chain", example: "Kryptonite New York 1410", grade: "Diamond (Gold for e-bikes)", weight: "4.9kg", use: "Home, ground anchors, reach" },
  ],
};

export const TYPES_FAQS: GapFaq[] = [
  {
    q: "What are the main differences between bike cable locks, chain locks and D-locks?",
    a: "A cable is light but easy to cut, so it's best kept for holding a wheel. A D-lock is a compact rigid shackle that most commuters carry. A chain gives you reach for awkward posts and anchors, but the chains covered here weigh 4.9kg and 6.92kg.",
  },
  {
    q: "How do folding locks compare to D-locks for security?",
    a: "Go by the Sold Secure grade. The Bordo 6500K folding lock is Gold at 2.47kg. The Evolution Mini-7 D-lock is also Gold at 1.61kg, and the Pitbull STD D-lock is Diamond at 1.44kg. A folding lock gives you reach, while a D-lock gives you the grade for less weight.",
  },
  {
    q: "Is a cable lock enough on its own?",
    a: "We wouldn't rely on one for a bike left in public. Use it with a graded D-lock, folding lock or chain to hold a wheel or saddle.",
  },
];

/* ---------- 2. Compact locks for flats ---------- */

export const COMPACT_PATH = "/best/compact-bike-locks-small-flats";
export const COMPACT_TITLE = "Best compact bike locks for flats, small storage and errands";
export const COMPACT_H1 = "Best compact bike locks for flats and small storage";
export const COMPACT_META =
  "Compact, light bike locks for flat dwellers, small storage and frequent errands, with Sold Secure grades, weights and a pick for each situation.";
export const COMPACT_DIRECT =
  "Short answer: if you live in a flat and want a lock that's small to store and easy to take on every errand, look at a light D-lock with a frame mount. The Pitbull STD 8003 (Diamond, 1.44kg) and Evolution Mini-7 (Gold, 1.61kg) clip on the bike. The Mason 140 is the lightest at about 0.97kg but has no mount in the box. The Bordo 6500K folding lock is heavier, and it's the one for awkward stands.";

export const COMPACT_WEARABLE =
  "Worth knowing if you searched for a wearable lock: none of the locks reviewed here is designed to be worn on the body. The ones below are the lightest and most compact of the thirteen, and three of them clip to the frame so they don't take up space in your bag or your hallway.";

export type CompactPick = { asin: string; situation: string; why: string; caveat: string };

export const COMPACT_PICKS: CompactPick[] = [
  {
    asin: "B01A6ZRMEK",
    situation: "If you want Diamond in the smallest carry",
    why: "The Pitbull STD 8003 is Sold Secure Diamond and weighs 1.44kg, with a frame mount. Its 115 × 230 mm locking area gives you more room round a stand than most compact D-locks.",
    caveat: "There's no cable, so a quick-release wheel needs something else.",
  },
  {
    asin: "B074K6KSY5",
    situation: "If Gold is enough and you're popping out a lot",
    why: "The Evolution Mini-7 is Sold Secure Gold at 1.61kg. It has a frame mount and comes with a cable for the front wheel, so it suits short shop and café stops.",
    caveat: "The cable isn't covered by the Gold grade, and the 83 × 178 mm locking area is narrow.",
  },
  {
    asin: "B0D3RGPXWN",
    situation: "If weight and storage space matter most",
    why: "The Mason 140 is about 0.97kg and Sold Secure Diamond for ordinary bikes. It's the lightest lock here and small enough for a bag or a hallway hook.",
    caveat: "The mount is sold separately, and the 140 × 85 mm locking area only suits tight stands.",
  },
  {
    asin: "B0BDML8H3N",
    situation: "If your stands are awkward",
    why: "The Bordo Granit 6500K folds into a block on its SH bracket and opens to 120 cm. It's Sold Secure Gold.",
    caveat: "At 2.47kg it's the heaviest of the four.",
  },
];

export const COMPACT_SECTIONS: GapSection[] = [
  {
    h2: "What makes a lock good for a flat",
    paragraphs: [
      "If you keep the bike in a hallway or a small store, the lock has to live somewhere too. A lock that clips to the frame stays with the bike, so it doesn't end up on a shelf or in a drawer when you're heading out.",
      "Weight matters more than it seems when you're making several short trips a day. At under 2kg you're more likely to take the lock every time, and that's the point of owning one.",
      "If you're locking the bike in a shared bike store or a block-of-flats car park, check what you can lock to. A compact D-lock needs a stand or anchor it can close round. For reach at home, a chain is the better tool, and [D-lock vs chain](/vs/d-lock-vs-chain) explains why many people own both.",
    ],
  },
  {
    h2: "If you ride for delivery work",
    paragraphs: [
      "The same picks apply, with one difference: you lock up many times a shift, so the frame mount matters. The Pitbull STD and Mini-7 both clip on. We'd check your stops have Sheffield stands before relying on a narrow shackle, and see [best bike lock for commuting](/for/commuting) for the weekday picks in more detail.",
    ],
  },
];

export const COMPACT_FAQS: GapFaq[] = [
  {
    q: "What's the best compact lock for frequent errands?",
    a: "If you want a frame mount and a cable for the wheel, the Evolution Mini-7 (Gold, 1.61kg) suits short stops. If you'd rather have Diamond, the Pitbull STD 8003 is 1.44kg with a mount.",
  },
  {
    q: "Are there wearable bike locks in this list?",
    a: "No. None of the locks reviewed on Lock Desk is designed to be worn. The lightest is the Mason 140 at about 0.97kg, which fits in a bag.",
  },
  {
    q: "What's the lightest Diamond lock here?",
    a: "The Mason 140 at about 0.97kg, though its mount is sold separately. The Pitbull STD 8003 is 1.44kg and comes with a frame mount.",
  },
];

/* ---------- 3. Shackle size ---------- */

export const SHACKLE_PATH = "/guide/shackle-size-lock-security";
export const SHACKLE_TITLE = "Shackle size and lock security: when to choose a larger shackle";
export const SHACKLE_H1 = "Shackle size and how to judge bike lock security";
export const SHACKLE_META =
  "When to choose a larger shackle bike lock, what locking area and thickness mean, and whether customer reviews can tell you how secure a lock is.";
export const SHACKLE_DIRECT =
  "Short answer: choose a larger shackle when a compact D-lock won't close round your stand and frame. That's about the locking area, the space inside the shackle. Shackle thickness is a separate figure, and the Sold Secure grade is the better guide to how secure a lock is.";

export const SHACKLE_SECTIONS: GapSection[] = [
  {
    h2: "Locking area and shackle thickness are different things",
    paragraphs: [
      "People say \"shackle size\" for two different figures. The locking area is the space inside the shackle, given in mm as width × length. It decides whether the lock fits round your stand and frame.",
      "Shackle thickness is the diameter of the steel itself. A thicker shackle is harder to cut, but it also adds weight.",
    ],
  },
  {
    h2: "When should you choose a larger shackle bike lock?",
    paragraphs: [
      "When the lock you'd like to carry won't close round the things you lock to. We'd measure the stand plus the frame tube first. If a compact lock like the Evolution Mini-7 (83 × 178 mm) or the [Hiplok D1000](/reviews/hiplok-d1000) (92 × 155 mm) won't fit, look at a longer shackle.",
      "The [OnGuard Pitbull LS 8002](/reviews/onguard-pitbull-ls-8002) has a 115 × 292 mm locking area and weighs 1.75kg. The [ABUS Granit XPlus 540](/reviews/abus-granit-xplus-540) is 108 × 300 mm at 1.8kg. The [Hiplok DX1000](/reviews/hiplok-dx1000) is 112 × 205 mm with a 32 mm shackle, and it weighs 2.75kg.",
      "Here's the catch: a bigger loop leaves more room around the bike once it's locked, and it's more to carry. If a compact lock already closes, it's usually the one you'll keep taking. [D1000 vs DX1000](/vs/d1000-vs-dx1000) goes through that choice for one pair.",
    ],
  },
  {
    h2: "Does a thicker shackle mean a higher grade?",
    paragraphs: [
      "Not on its own. The ABUS Granit XPlus 540 has a 13 mm shackle and is Sold Secure Diamond for ordinary bikes. The Evolution Mini-7 also has a 13 mm shackle and is Gold. The grade depends on how the whole lock performs in Sold Secure's attack testing, including the steel and the locking mechanism.",
      "Thickness does follow the grinder-rated locks, though. The D1000 (20 mm) and DX1000 (32 mm) are Sold Secure Diamond for ordinary bikes and for e-bikes, and both are sold as anti-angle-grinder.",
    ],
  },
  {
    h2: "Can customer reviews tell you how secure a bike lock is?",
    paragraphs: [
      "Not really. Owner reviews are useful for fit, keys, the mount and whether the lock rattles. Very few owners have tried to cut their own lock, so star ratings don't tell you much about attack resistance.",
      "For security, we'd go by the Sold Secure grade, which you can check on [Sold Secure's approved product search](https://soldsecure.com/approved-product-search). If your insurer names a grade, that's the one to match. [Best bike lock for insurance](/for/insurance) covers the policy side.",
    ],
  },
  {
    h2: "What is the best rated bike lock?",
    paragraphs: [
      "If you mean the Sold Secure rating, Diamond is the top pedal-cycle grade. Several locks reviewed here have it, and they suit different stands and carrying habits. The [best of shortlist](/best) puts them side by side, and the table below compares the D-locks by size.",
    ],
  },
];

export const SHACKLE_TABLE_ASINS = [
  "B074K6KSY5",
  "B0CW175JJ8",
  "B0D77XJR4Z",
  "B0D7JVP6QL",
  "B0944HG7MK",
  "B01A6ZRMEK",
  "B01KT86YWU",
  "B0D3RGPXWN",
] as const;

export const SHACKLE_FAQS: GapFaq[] = [
  {
    q: "When should I choose a larger shackle bike lock?",
    a: "When a compact D-lock won't close round your stand and frame. Measure first, then compare the locking area. Longer shackles here include the Pitbull LS 8002 (115 × 292 mm) and the ABUS Granit XPlus 540 (108 × 300 mm).",
  },
  {
    q: "Can customer reviews tell you how secure a bike lock is?",
    a: "They're good for fit, keys and mounts, but they rarely say anything reliable about cut resistance. The Sold Secure grade is the better guide.",
  },
  {
    q: "Is a thicker shackle always more secure?",
    a: "Not always. The ABUS Granit XPlus 540 and the Evolution Mini-7 both have 13 mm shackles, but the 540 is Diamond and the Mini-7 is Gold.",
  },
];
