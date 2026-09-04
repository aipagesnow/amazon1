import type { Faq } from "@/content/pages";

/** SEO metas and thin-content extras. Keeps pages.ts / editorial.ts lean on disk for MCP pushes. */

export const HOME_META =
  "Independent UK reviews of D-locks and chains. Sold Secure grades, insurance, and which lock you will actually carry.";

export const HOME_NEXT = [
  {
    href: "/guide",
    title: "How to choose a bike lock",
    blurb: "Sold Secure Gold or Diamond, will it close on your stand, and will you carry it.",
  },
  {
    href: "/best",
    title: "Best bike locks UK",
    blurb: "Five locks compared on grade, fit, and weight. No single best lock for everyone.",
  },
  {
    href: "/reviews",
    title: "Bike lock reviews",
    blurb: "Six full reviews: who each lock is for, who should skip it, and the drawbacks.",
  },
  {
    href: "/for/commuting",
    title: "Best lock for commuting",
    blurb: "Gold Mini-7 for most weekday riders. X1 if the policy names Diamond.",
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
  "Five D-locks and chains compared on Sold Secure grade, weight, and locking area. There is no single best lock for everyone.";

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
    q: "How do you pick these five?",
    a: "Grade on the policy, whether the shackle will close, and whether you will carry it. Full method: [how we research](/method). Full chooser: [how to choose](/guide).",
  },
];

export const REVIEWS_META =
  "Six UK D-lock and chain reviews. Each page says who it is for, who should skip it, and the drawbacks.";

export const REVIEWS_INTRO_EXTRA =
  "Need a shortlist first? Use the [best of](/best) table. Choosing from scratch? Read [how to choose a bike lock](/guide). Job-led guides: [commuting](/for/commuting) and [insurance](/for/insurance).";

export const GUIDE_FAQ_EXTRA: Faq = {
  q: "Where do I match a lock to my insurance?",
  a: "Read [best bike lock for insurance](/for/insurance). Match the Sold Secure grade on the policy, then the insurer’s approved-lock list. We do not keep that list live.",
};

export const COMMUTE_BODY_EXTRA = [
  "If you are stuck between Gold and Diamond, read [Evolution Mini-7 vs D1000](/vs/evolution-mini-7-vs-d1000). If the question is reach at home versus carry on the bike, read [D-lock vs chain](/vs/d-lock-vs-chain). The [how to choose](/guide) page covers measuring the stand before you buy a Mini.",
  "We have not cut these locks open. Grades and weights come from Sold Secure and the manufacturer. For how we write a review, see [how we research](/method).",
];

export const INSURANCE_BODY_EXTRA = [
  "Grade alone is not the whole claim story. Many policies also care how you locked the bike: through the frame to a fixed object, not a wheel alone, and sometimes to a named ground anchor at home. Read those lines before you buy a thicker lock you will not use correctly.",
  "If the policy names Gold and you will carry the lock every day, start with the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7): 1.61 kg, a frame clip, and a cable in the box. The cable is not Gold. If the policy names Diamond and you will carry 1.7 kg, start with the [Litelok X1](/reviews/litelok-x1). The [D1000](/reviews/hiplok-d1000) is Diamond too, but only after you have measured 92 × 155 mm.",
  "Do not buy the ABUS 540 to satisfy an e-bike Diamond line. On our records it is Diamond for ordinary bikes and Gold for e-bikes. Use it when a compact D-lock will not close and the ordinary-bike grade still matches.",
  "We are not your broker. We do not sell insurance. For how we treat grades and specs, see [how we research](/method). For measuring the stand and choosing a weight you will carry, see [how to choose a bike lock](/guide).",
];

export const ALT_META =
  "2.06 kg, no mount, 18 mm Gold. If that is too heavy or too small, carry the Evolution Mini-7, step to Diamond, or keep a New York chain at home.";

export const ALT_BODY_EXTRA = [
  "If you need a lock you will take to work, start with the Evolution Mini-7: same brand family, Gold, 1.61 kg, a frame clip, and a cable in the box. The cable is not Gold. That is the honest commute fork for most UK riders whose policy still names Gold.",
  "If the policy names Diamond — including the e-bike grade — a thicker Gold Mini will not fix that. Look at the Litelok X1 (1.7 kg, Diamond for ordinary bikes and e-bikes, 101 × 197 mm). The Hiplok D1000 is also Diamond, but only after you have measured its 92 × 155 mm shackle.",
  "If the problem is reach at home, not thickness on a Mini, the New York 1410 chain is the sibling that uses the name well: 100 cm, 14 mm, 4.9 kg, Gold. Leave it where the bike is stored overnight. Take a D-lock when you ride away. See [D-lock vs chain](/vs/d-lock-vs-chain).",
  "This page is a landing for a search people type. It is not a fourth catalogue. Full write-ups live under [reviews](/reviews). How we pick grades and weights: [how to choose](/guide) and [how we research](/method).",
];

export const VS_AFTER_EXTRA: Record<string, string> = {
  "evolution-mini-7-vs-d1000":
    "For the weekday ride, see [best bike lock for commuting](/for/commuting). For the policy wording, see [best bike lock for insurance](/for/insurance). The wider chooser is [how to choose a bike lock](/guide).",
  "d-lock-vs-chain":
    "Still choosing a daily lock? [Best lock for commuting](/for/commuting) names the Mini-7 and the X1. The [best of](/best) table puts both next to the home chain so the weight difference is obvious.",
};

export const REVIEW_META_OVERRIDES: Record<string, string> = {
  "litelok-x1":
    "Pedal and powered Diamond, 1.7 kg, 101 × 197 mm. The lock we would carry on a bike worth insuring. Not a lab test.",
  "hiplok-d1000":
    "Diamond, 1.9 kg, 92 × 155 mm, no mount. Worth it if you have measured the rack. Skip it if Gold and a cable would do.",
  "kryptonite-evolution-mini-7":
    "Sold Secure Gold, 1.61 kg, mount and cable in the box. The cable is not Gold. The commute lock most people will actually carry.",
  "abus-granit-xplus-540":
    "Pedal Diamond, powered Gold, 108 × 300 mm, mount in the box. For racks a Mini will not hug. Not an anti-grinder story.",
  "kryptonite-new-york-fahgettaboudit-mini":
    "18 mm Gold Mini, 2.06 kg, no mount, no cable. A thick second lock. Most commuters should buy the Evolution Mini-7.",
  "kryptonite-new-york-fahgettaboudit-1410":
    "100 cm, 14 mm, 4.9 kg, Sold Secure Gold. A house or terrace chain. Not the lock you pedal with.",
};

export const REVIEW_RELATED_WELLS: Record<
  string,
  { href: string; title: string; blurb: string }
> = {
  "litelok-x1": {
    href: "/for/insurance",
    title: "Best bike lock for insurance",
    blurb:
      "Match Sold Secure Gold or Diamond to the policy, then check the insurer’s list. The X1 is our Diamond pick when you will still carry 1.7 kg.",
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
};

export const COMMUTE_META =
  "A commute lock is one you take every day. For most UK riders that is a Gold Mini with a frame clip. Step up to Diamond if the bike is worth the weight.";
