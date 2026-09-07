import type { Faq } from "@/content/pages";

/** SEO metas and thin-content extras. Keeps pages.ts / editorial.ts lean on disk for MCP pushes. */

export const HOME_META =
  "Small UK comparison site for eleven D-locks and chains. Sold Secure grades, insurance fit, and which lock you will actually carry — based on published specs, not cut tests.";

export const HOME_NEXT = [
  {
    href: "/guide",
    title: "How to choose a bike lock",
    blurb: "Sold Secure Gold or Diamond, whether it will close on your stand, and whether you will carry it.",
  },
  {
    href: "/best",
    title: "Best bike locks UK",
    blurb: "Locks compared on grade, fit, and weight. No single best lock for everyone.",
  },
  {
    href: "/reviews",
    title: "Bike lock reviews",
    blurb: "Eleven full reviews: who each lock suits, when another is a better fit, and the drawbacks.",
  },
  {
    href: "/for/commuting",
    title: "Best lock for commuting",
    blurb: "The Gold Mini-7 suits most weekday riders. Look at the X1 if the policy names Diamond.",
  },
] as const;

export const HOME_FAQS: Faq[] = [
  {
    q: "Is there one best bike lock in the UK?",
    a: "No. The right lock matches the Sold Secure grade on your policy, closes on the stand you use, and is light enough that you still take it. Start with [how to choose](/guide), then the [best of](/best) table.",
  },
  {
    q: "Gold or Diamond for insurance?",
    a: "Read the wording you signed. Many UK household policies still name Gold. Some e-bike and high-value policies ask for Diamond. Then check the insurer’s approved-lock list. See [best bike lock for insurance](/for/insurance).",
  },
  {
    q: "D-lock or chain for a commute?",
    a: "A compact D-lock for the station. A heavy chain for reach at home. [D-lock vs chain](/vs/d-lock-vs-chain) explains why using both is common.",
  },
];

export const BEST_META =
  "D-locks, a folding lock, and a chain compared on Sold Secure grade, weight, and locking area. There is no single best lock for everyone.";

export const BEST_INTRO_EXTRA =
  "If you already know the job, jump to [best lock for commuting](/for/commuting) or [best lock for insurance](/for/insurance). If you are stuck between two names, try [Evolution Mini-7 vs D1000](/vs/evolution-mini-7-vs-d1000) or [D-lock vs chain](/vs/d-lock-vs-chain). Looking for something instead of the New York Mini? See the [alternatives page](/alternatives/kryptonite-new-york-fahgettaboudit-mini).";

export const BEST_FAQS: Faq[] = [
  {
    q: "Why is the New York Mini not on this table?",
    a: "It is Sold Secure Gold at 2.06 kg with no frame clip. Most commuters are better with the Evolution Mini-7. We still review it because people search the name — see [alternatives to the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
  },
  {
    q: "Should I buy Diamond for a weekday commute?",
    a: "Only if the policy asks for it, or the bike is worth the extra weight, and you will still carry the lock. Otherwise a Gold Mini you take every day beats a Diamond lock left at home. See [commuting](/for/commuting).",
  },
  {
    q: "How do you pick these locks?",
    a: "Grade on the policy, whether the shackle will close, and whether you will carry it. Full method: [how we research](/method). Full chooser: [how to choose](/guide).",
  },
];

export const REVIEWS_META =
  "Eleven UK D-lock, folding-lock and chain reviews. Each page says who the lock suits, when another is a better fit, and the drawbacks.";

export const REVIEWS_INTRO_EXTRA =
  "Need a shortlist first? Use the [best of](/best) table. Choosing from scratch? Read [how to choose a bike lock](/guide). Job-led guides: [commuting](/for/commuting) and [insurance](/for/insurance).";

export const GUIDE_FAQ_EXTRA: Faq = {
  q: "Where do I match a lock to my insurance?",
  a: "Read [best bike lock for insurance](/for/insurance). Match the Sold Secure grade on the policy, then the insurer’s approved-lock list. We do not keep that list live.",
};

export const COMMUTE_BODY_EXTRA = [
  "Stuck between Gold and Diamond? See [Evolution Mini-7 vs D1000](/vs/evolution-mini-7-vs-d1000). Reach at home versus carry on the bike: [D-lock vs chain](/vs/d-lock-vs-chain).",
  "Grade, measuring the stand, and carry weight are covered once on [how to choose](/guide). Limits of our method: [how we research](/method).",
];

export const INSURANCE_BODY_EXTRA = [
  "Policies often care how you locked the bike as well as the grade — frame to a fixed object, not a wheel alone. Read those lines before you upgrade on thickness alone. Basics of grade, fit, and carry: [how to choose](/guide).",
  "If the policy names Gold and you will carry the lock every day, start with the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7): 1.61 kg, a frame clip, and a cable in the box. The cable is not Gold. If a Mini will not reach and Gold is still enough, look at the [Bordo 6500](/reviews/abus-bordo-granit-xplus-6500). If the policy names Diamond and you will carry 1.7 kg, start with the [Litelok X1](/reviews/litelok-x1). If you need Diamond with a clip, that is the [Pitbull STD](/reviews/onguard-pitbull-std-8003). The [D1000](/reviews/hiplok-d1000) is Diamond too, but only after you have measured 92 × 155 mm.",
  "Do not buy the ABUS 540 to satisfy an e-bike Diamond line. On our records it is Diamond for ordinary bikes and Gold for e-bikes. Use it when a compact D-lock will not close and the ordinary-bike grade still matches.",
  "We are not your broker. How we treat grades and what we will not claim: [how we research](/method).",
];

export const ALT_META =
  "2.06 kg, no mount, 18 mm Gold. If that is too heavy or too small, carry the Evolution Mini-7, step to Diamond, or keep a New York chain at home.";

export const ALT_BODY_EXTRA = [
  "If you need a lock you will take to work, start with the Evolution Mini-7: same brand family, Gold, 1.61 kg, a frame clip, and a cable in the box. The cable is not Gold. For most UK riders whose policy still names Gold, that is the clearer daily choice in this set.",
  "If the policy names Diamond — including the e-bike grade — a thicker Gold Mini will not fix that. Look at the Litelok X1 (1.7 kg, Diamond for ordinary bikes and e-bikes, 101 × 197 mm). The Hiplok D1000 is also Diamond, but only after you have measured its 92 × 155 mm shackle.",
  "If the problem is reach at home, not thickness on a Mini, the New York 1410 chain is the sibling that uses the name well: 100 cm, 14 mm, 4.9 kg, Gold. Leave it where the bike is stored overnight. Take a D-lock when you ride away. See [D-lock vs chain](/vs/d-lock-vs-chain).",
  "This page exists because people search for alternatives to the New York Mini. Full write-ups live under [reviews](/reviews). How we pick grades and weights: [how to choose](/guide) and [how we research](/method).",
];

export const VS_AFTER_EXTRA: Record<string, string> = {
  "evolution-mini-7-vs-d1000":
    "For the weekday ride, see [best bike lock for commuting](/for/commuting). For the policy wording, see [best bike lock for insurance](/for/insurance). The wider chooser is [how to choose a bike lock](/guide).",
  "d-lock-vs-chain":
    "Still choosing a daily lock? [Best lock for commuting](/for/commuting) names the Mini-7 and the X1. The [best of](/best) table puts both next to the home chain so the weight difference is obvious.",
};

export const REVIEW_META_OVERRIDES: Record<string, string> = {
  "litelok-x1":
    "Sold Secure Diamond for ordinary bikes and e-bikes, 1.7 kg, 101 × 197 mm locking area. Based on published grades and specs, not a cut test.",
  "hiplok-d1000":
    "Diamond, 1.9 kg, 92 × 155 mm, no mount. Useful after you have measured the rack; less useful if Gold and a cable already meet the policy.",
  "kryptonite-evolution-mini-7":
    "Sold Secure Gold, 1.61 kg, mount and cable in the box. The cable is not Gold. A commute lock many UK riders will still take every day.",
  "abus-granit-xplus-540":
    "Diamond for ordinary bikes, Gold for e-bikes, 108 × 300 mm, mount in the box. For stands a compact Mini will not close on. Not listed as angle-grinder resistant.",
  "kryptonite-new-york-fahgettaboudit-mini":
    "18 mm Gold Mini, 2.06 kg, no mount, no cable. A thick second lock. The Evolution Mini-7 is usually easier for daily carry.",
  "kryptonite-new-york-fahgettaboudit-1410":
    "100 cm, 14 mm, 4.9 kg, Sold Secure Gold. Extra length for home or a terrace. The weight suits storage more than a daily commute.",
  "hiplok-dx1000":
    "Pedal and powered Diamond, 2.75 kg, 112 × 205 mm, no mount. Larger than the D1000. Measure the stand.",
  "onguard-pitbull-std-8003":
    "Pedal Cycle Diamond, 1.44 kg, 14 mm, 115 × 230 mm, frame mount. Diamond you can clip on. No cable.",
  "onguard-pitbull-dt-8005":
    "Pedal Cycle Diamond D-lock with a cable, 1.6 kg, 115 × 230 mm, mount. The cable is not graded.",
  "onguard-pitbull-ls-8002":
    "Pedal Cycle Diamond, long 115 × 292 mm shackle, 1.75 kg, 14 mm, frame mount. For fat posts and cargo.",
  "abus-bordo-granit-xplus-6500":
    "Sold Secure Gold folding lock, 2.16 kg, 110 cm, SH bracket. Flexible Gold when reach matters more than Mini-7 weight.",
};

export const REVIEW_RELATED_WELLS: Record<
  string,
  { href: string; title: string; blurb: string }
> = {
  "litelok-x1": {
    href: "/for/insurance",
    title: "Best bike lock for insurance",
    blurb:
      "Match Sold Secure Gold or Diamond to the policy, then check the insurer’s list. The X1 is worth considering for Diamond when you will still carry 1.7 kg.",
  },
  "hiplok-d1000": {
    href: "/vs/evolution-mini-7-vs-d1000",
    title: "Evolution Mini-7 vs D1000",
    blurb:
      "Gold you will carry versus Diamond with a tight shackle. Read this before you upgrade on weight alone.",
  },
  "kryptonite-evolution-mini-7": {
    href: "/for/commuting",
    title: "Best bike lock for commuting",
    blurb:
      "A commute lock is one you take every day. For most UK riders on Gold, that is this Mini-7.",
  },
  "abus-granit-xplus-540": {
    href: "/guide",
    title: "How to choose a bike lock",
    blurb: "Measure the stand before you buy a long shackle. Fit is why the 540 exists.",
  },
  "kryptonite-new-york-fahgettaboudit-1410": {
    href: "/vs/d-lock-vs-chain",
    title: "D-lock vs chain lock",
    blurb:
      "A D-lock for the commute, a chain for reach at home. Using both is common; commuting with 4.9 kg is not.",
  },
  "hiplok-dx1000": {
    href: "/vs/evolution-mini-7-vs-d1000",
    title: "Evolution Mini-7 vs D1000",
    blurb:
      "Gold you will carry versus Diamond with a tight shackle. The DX1000 is the larger Hiplok if 92 × 155 mm will not close.",
  },
  "onguard-pitbull-std-8003": {
    href: "/for/commuting",
    title: "Best bike lock for commuting",
    blurb:
      "A commute lock is one you take every day. This Pitbull is Diamond with a clip — useful when bag-carry Diamond locks do not suit you.",
  },
  "onguard-pitbull-dt-8005": {
    href: "/for/commuting",
    title: "Best bike lock for commuting",
    blurb:
      "The D-lock is Diamond. The cable is not. Same rule as the Mini-7 kit: lock the frame with the graded product.",
  },
  "onguard-pitbull-ls-8002": {
    href: "/guide",
    title: "How to choose a bike lock",
    blurb: "Measure the stand before you buy a long shackle. Fit is why the LS exists.",
  },
  "abus-bordo-granit-xplus-6500": {
    href: "/vs/d-lock-vs-chain",
    title: "D-lock vs chain lock",
    blurb:
      "A Mini for a tight stand, a chain for reach at home. The Bordo sits between: Gold folding reach you can still clip on.",
  },
};

export const COMMUTE_META =
  "A commute lock is one you take every day. For most UK riders that is a Gold Mini with a frame clip. Step up to Diamond if the bike is worth the weight.";
