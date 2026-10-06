import type { Faq } from "@/content/pages";

/** SEO metas and thin-content extras. Keeps pages.ts / editorial.ts lean on disk for MCP pushes. */

export const HOME_META =
  "Small UK comparison site for thirteen D-locks and chains. Sold Secure grades, insurance fit, and which lock you will actually carry — based on published specs, not cut tests.";

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
    blurb: "Thirteen full reviews: who each lock suits, when another is a better fit, and the drawbacks.",
  },
  {
    href: "/for/commuting",
    title: "Best lock for commuting",
    blurb: "For most weekday riders on Gold, start with the Mini-7. Look at the X1 if the policy names Diamond.",
  },
  {
    href: "/for/anti-grinder",
    title: "Anti-grinder bike locks",
    blurb: "What Diamond, locking area, and carry mean when a lock is sold against angle grinders.",
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
    q: "Are D-locks accepted by insurers?",
    a: "Only when the Sold Secure grade matches your policy and, where the insurer publishes a list, the exact model is on that list. A badge alone is not always enough. See [best bike lock for insurance](/for/insurance).",
  },
  {
    q: "D-lock or chain for a commute?",
    a: "A compact D-lock for the station. A heavy chain for reach at home. [D-lock vs chain](/vs/d-lock-vs-chain) explains why using both is common.",
  },
];

export const BEST_META =
  "D-locks, a folding lock, and a chain compared on Sold Secure grade, weight, and locking area. There is no single best lock for everyone.";

export const BEST_INTRO_EXTRA =
  "If you already know the job, jump to [best lock for commuting](/for/commuting) or [best lock for insurance](/for/insurance). Comparing locks sold against grinders? See [what to look for in an anti-grinder lock](/for/anti-grinder). If you are stuck between two names, try [Evolution Mini-7 vs D1000](/vs/evolution-mini-7-vs-d1000), [D1000 vs DX1000](/vs/d1000-vs-dx1000), or [D-lock vs chain](/vs/d-lock-vs-chain). Looking for something instead of the New York Mini? See the [alternatives page](/alternatives/kryptonite-new-york-fahgettaboudit-mini).";

export const BEST_FAQS: Faq[] = [
  {
    q: "Why is the New York Mini not on this table?",
    a: "It is Sold Secure Gold at 2.06kg with no frame clip. Most commuters are better with the Evolution Mini-7. We still review it because people search the name — see [alternatives to the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
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
  "Thirteen UK D-lock, folding-lock and chain reviews. Each page says who the lock suits, when another is a better fit, and the drawbacks.";

export const REVIEWS_INTRO_EXTRA =
  "Need a shortlist first? Use the [best of](/best) table. Choosing from scratch? Read [how to choose a bike lock](/guide). Job-led guides: [commuting](/for/commuting), [insurance](/for/insurance), and [anti-grinder](/for/anti-grinder). Most-asked locks: [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7) (Gold with a clip), [Pitbull STD 8003](/reviews/onguard-pitbull-std-8003) (Diamond with a clip), [Pitbull DT 8005](/reviews/onguard-pitbull-dt-8005) (the STD plus a cable), [ABUS Granit XPlus 540](/reviews/abus-granit-xplus-540) (long shackle) and [Bordo 6500K](/reviews/abus-bordo-granit-6500k) (Gold folding reach).";

export const GUIDE_FAQ_EXTRA: Faq = {
  q: "Where do I match a lock to my insurance?",
  a: "Read [best bike lock for insurance](/for/insurance). Match the Sold Secure grade on the policy, then the insurer’s approved-lock list. We do not keep that list live.",
};

export const COMMUTE_BODY_EXTRA = [
  "Shopping locks sold as anti-grinder? See [what to look for in an anti-grinder bike lock](/for/anti-grinder) before you upgrade on marketing alone. Stuck between Gold and Diamond? See [Evolution Mini-7 vs D1000](/vs/evolution-mini-7-vs-d1000). Choosing between the two Hiplok Diamonds: [D1000 vs DX1000](/vs/d1000-vs-dx1000). Reach at home versus carry on the bike: [D-lock vs chain](/vs/d-lock-vs-chain).",
  "Grade, measuring the stand, and carry weight are covered once on [how to choose](/guide). Limits of our method: [how we research](/method).",
];

export const INSURANCE_BODY_EXTRA = [
  "If the policy already names Diamond and you are comparing locks sold against grinders, see [what to look for in an anti-grinder bike lock](/for/anti-grinder). Policies often care how you locked the bike as well as the grade — frame to a fixed object, not a wheel alone. Read those lines before you upgrade on thickness alone. Basics of grade, fit, and carry: [how to choose](/guide).",
  "If the policy names Gold and you will carry the lock every day, start with the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7): 1.61kg, a frame clip, and a cable in the box. The cable is not Gold. If a Mini will not reach and Gold is still enough, look at the [Bordo 6500K](/reviews/abus-bordo-granit-6500k). If the policy names Pedal Cycle Diamond and carry weight is the limit, look at the [Seatylock Mason 140](/reviews/seatylock-mason-140) (about 0.97kg — measure 140 × 85 mm). If you need Diamond for ordinary bikes and e-bikes and will carry 1.7kg, start with the [Litelok X1](/reviews/litelok-x1). If you need Diamond with a clip, that is the [Pitbull STD](/reviews/onguard-pitbull-std-8003). The [D1000](/reviews/hiplok-d1000) is Diamond too, but only after you have measured 92 × 155 mm.",
  "Do not buy the ABUS 540 to satisfy an e-bike Diamond line. On our records it is Diamond for ordinary bikes and Gold for e-bikes. Use it when a compact D-lock will not close and the ordinary-bike grade still matches.",
  "The two New York chains follow the same split. Sold Secure lists the [New York 1410](/reviews/kryptonite-new-york-fahgettaboudit-1410) (100 cm) and the [New York 1415](/reviews/kryptonite-new-york-fahgettaboudit-1415) (150 cm) as Diamond for ordinary bikes and Gold for e-bikes. Either can meet an ordinary-bike Diamond line at home. Neither meets a policy that names Powered Cycle Diamond.",
  "We are not your broker. How we treat grades and what we will not claim: [how we research](/method).",
];

export const ALT_META =
  "2.06kg, no mount, 18 mm Gold. If that is too heavy or too small, carry the Evolution Mini-7, step to Diamond, or keep a New York chain at home.";

export const ALT_BODY_EXTRA = [
  "If you need a lock you will take to work, start with the Evolution Mini-7: same brand family, Gold, 1.61kg, a frame clip, and a cable in the box. The cable is not Gold. For most UK riders whose policy still names Gold, that is the clearer daily choice in this set.",
  "If the policy names Diamond — including the e-bike grade — a thicker Gold Mini will not fix that. Look at the Litelok X1 (1.7kg, Diamond for ordinary bikes and e-bikes, 101 × 197 mm). The Hiplok D1000 is also Diamond, but only after you have measured its 92 × 155 mm shackle.",
  "If the problem is reach at home, not thickness on a Mini, the New York 1410 chain is the sibling that uses the name well: 100 cm, 14 mm, 4.9kg, and Sold Secure Diamond for ordinary bikes (Gold for e-bikes). Leave it where the bike is stored overnight. Take a D-lock when you ride away. See [D-lock vs chain](/vs/d-lock-vs-chain).",
  "This page exists because people search for alternatives to the New York Mini. Full write-ups live under [reviews](/reviews). How we pick grades and weights: [how to choose](/guide) and [how we research](/method).",
];

export const VS_AFTER_EXTRA: Record<string, string> = {
  "evolution-mini-7-vs-d1000":
    "For the weekday ride, see [best bike lock for commuting](/for/commuting). For the policy wording, see [best bike lock for insurance](/for/insurance). For Diamond locks sold against grinders, see [what to look for in an anti-grinder lock](/for/anti-grinder). The wider chooser is [how to choose a bike lock](/guide).",
  "d1000-vs-dx1000":
    "Measure first, then read the full write-ups: [Hiplok D1000](/reviews/hiplok-d1000) and [Hiplok DX1000](/reviews/hiplok-dx1000). For locks sold against grinders, see [what to look for in an anti-grinder lock](/for/anti-grinder). Want lighter Diamond carry? The [Litelok X1](/reviews/litelok-x1) sits on the [best of](/best) shortlist.",
  "d-lock-vs-chain":
    "Still choosing a daily lock? [Best lock for commuting](/for/commuting) names the Mini-7 and the X1. The [best of](/best) table puts both next to the home chain so the weight difference is obvious. If 100 cm of chain will not reach, the [New York 1415](/reviews/kryptonite-new-york-fahgettaboudit-1415) is the 150 cm version at 6.92kg.",
};

export const REVIEW_META_OVERRIDES: Record<string, string> = {
  "litelok-x1":
    "Sold Secure Diamond for ordinary bikes and e-bikes, 1.7kg, 101 × 197 mm locking area. Based on published grades and specs, not a cut test.",
  "hiplok-d1000":
    "Diamond at 1.9kg with a 92 × 155 mm locking area and no mount. Only after you have measured the rack; less useful if Gold and a cable already meet the policy.",
  "kryptonite-evolution-mini-7":
    "Sold Secure Gold, 1.61kg, mount and cable in the box. The cable is not Gold. A commute lock many UK riders will still take every day.",
  "abus-granit-xplus-540":
    "Diamond for ordinary bikes, Gold for e-bikes, 108 × 300 mm, mount in the box. For stands a compact Mini will not close on. Not listed as angle-grinder resistant.",
  "kryptonite-new-york-fahgettaboudit-mini":
    "New York Fahgettaboudit Mini: Sold Secure Gold, 2.06 kg, no mount, no cable — a thick second lock; the Evolution Mini-7 is usually easier to carry.",
  "kryptonite-new-york-fahgettaboudit-1410":
    "100 cm, 14 mm, 4.9kg. Sold Secure Diamond for ordinary bikes, Gold for e-bikes. Extra length for home or a terrace. The weight suits storage more than a daily commute.",
  "hiplok-dx1000":
    "Diamond for ordinary bikes and e-bikes at 2.75kg, with a 112 × 205 mm locking area and no mount. Larger than the D1000 — measure the stand first.",
  "onguard-pitbull-std-8003":
    "Sold Secure Diamond for ordinary bikes, 1.44kg, with a frame mount and a 115 × 230 mm locking area. Fits if you need Diamond with a clip. No cable.",
  "onguard-pitbull-dt-8005":
    "OnGuard Pitbull DT 8005 review: Sold Secure Diamond D-lock, ~1.6 kg, cable and mount in the box — worth it if you need Diamond plus a cable kit; the cable is not graded.",
  "onguard-pitbull-ls-8002":
    "Sold Secure Diamond for ordinary bikes with a long 115 × 292 mm shackle, 1.75kg, and a frame mount. Useful when a Mini will not close on a fat post or cargo bike.",
  "abus-bordo-granit-6500k":
    "ABUS Bordo 6500K: Sold Secure Gold folding lock, 2.47 kg, 120 cm reach, SH bracket — flexible Gold when a Mini will not close.",
  "seatylock-mason-140":
    "Sold Secure Pedal Cycle Diamond D-lock at about 0.97kg with a 140 × 85 mm locking area. Light weekday Diamond carry — measure the stand; mount sold separately; confirm e-bike grade on Sold Secure.",
  "kryptonite-new-york-fahgettaboudit-1415":
    "Sold Secure Diamond for ordinary bikes, Gold for e-bikes. A 150 cm chain at 6.92kg for reach at home rather than a commute, compared with the 1410.",
};

export const REVIEW_TITLE_OVERRIDES: Record<string, string> = {
  "onguard-pitbull-std-8003":
    "OnGuard Pitbull 8003 Review: Sold Secure Diamond D-Lock (UK)",
  "kryptonite-evolution-mini-7":
    "Kryptonite Evolution Mini-7 Review (UK): Sold Secure Gold, 1.61kg",
  "abus-granit-xplus-540":
    "ABUS Granit XPlus 540 Review (UK): Sold Secure Diamond, 300mm Shackle",
  "seatylock-mason-140":
    "Seatylock Mason 140 review — lightweight Diamond D-lock",
  "onguard-pitbull-dt-8005":
    "OnGuard Pitbull DT 8005 Review (UK): Sold Secure Diamond + Cable — Worth It?",
  "kryptonite-new-york-fahgettaboudit-mini":
    "Kryptonite New York Fahgettaboudit Mini: Gold Mini, 2.06 kg",
  "abus-bordo-granit-6500k": "ABUS Bordo Granit 6500K: Gold folding lock",
  "kryptonite-new-york-fahgettaboudit-1415": "New York Fahgettaboudit 1415 chain review",
};

export const REVIEW_DIRECT_ANSWERS: Record<string, string> = {
  "onguard-pitbull-std-8003":
    "Sold Secure Diamond for ordinary bikes, 1.44kg, with a frame mount and a 115 × 230 mm locking area. No cable in the box. It suits riders who need Diamond and will clip the lock to the bike.",
  "kryptonite-evolution-mini-7":
    "Sold Secure Gold on the D-lock, 1.61kg, with a frame mount and a cable in the box. The cable is not Gold — lock the frame with the graded D-lock.",
  "abus-granit-xplus-540":
    "Sold Secure Diamond for ordinary bikes with a long 300 mm shackle when a Mini will not close. On our records the e-bike grade is Gold, not Diamond. Frame mount in the box; not sold as anti-grinder.",
  "seatylock-mason-140":
    "Sold Secure Pedal Cycle Diamond at about 0.97kg with a compact 140 × 85 mm locking area. It suits ordinary-bike Diamond when carry weight is the limit. Measure the stand; mount sold separately; confirm e-bike grade on Sold Secure.",
  "onguard-pitbull-dt-8005":
    "Worth picking if you want Sold Secure Diamond on the D-lock plus a cable and frame mount in one box (~1.6 kg). Lock the frame with the graded D-lock; the cable is not Diamond. Skip it if you already have a cable or prefer the lighter STD 8003 without one.",
  "kryptonite-new-york-fahgettaboudit-1415":
    "Sold Secure lists the 1415 chain with its New York disc lock as Diamond for ordinary bikes and Gold for e-bikes. It is 150 cm long and weighs 6.92kg, so it is a chain to leave at home when you need extra reach. If 100 cm is enough, the New York 1410 has the same grades at 4.9kg.",
};

export const REVIEW_RELATED_WELLS: Record<
  string,
  { href: string; title: string; blurb: string }
> = {
  "litelok-x1": {
    href: "/for/anti-grinder",
    title: "What to look for in an anti-grinder lock",
    blurb:
      "The X1 is the usual Diamond starting point when a lock is sold against grinders and you will still carry 1.7kg.",
  },
  "hiplok-d1000": {
    href: "/vs/d1000-vs-dx1000",
    title: "Hiplok D1000 vs DX1000",
    blurb:
      "Same Diamond grade. Choose by locking area and weight after you have measured the stand.",
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
      "A D-lock for the commute, a chain for reach at home. Using both is common; commuting with 4.9kg is not.",
  },
  "hiplok-dx1000": {
    href: "/vs/d1000-vs-dx1000",
    title: "Hiplok D1000 vs DX1000",
    blurb:
      "Same Diamond grade. The DX1000 is the larger sibling when the D1000 will not close — measure first.",
  },
  "onguard-pitbull-std-8003": {
    href: "/reviews/onguard-pitbull-dt-8005",
    title: "OnGuard Pitbull DT 8005",
    blurb:
      "Same Pitbull Diamond D-lock family with a cable and mount in the box. The cable is not Diamond — use the graded D-lock on the frame.",
  },
  "onguard-pitbull-dt-8005": {
    href: "/reviews/onguard-pitbull-std-8003",
    title: "OnGuard Pitbull STD 8003",
    blurb:
      "Same Diamond D-lock without the cable — lighter kit if you already carry a cable or do not need one. See also the best of shortlist.",
  },
  "onguard-pitbull-ls-8002": {
    href: "/reviews/onguard-pitbull-dt-8005",
    title: "OnGuard Pitbull DT 8005",
    blurb:
      "If you need Diamond with a cable kit rather than a longer shackle, the DT 8005 is the Pitbull with cable and mount — cable not graded.",
  },
  "abus-bordo-granit-6500k": {
    href: "/vs/d-lock-vs-chain",
    title: "D-lock vs chain lock",
    blurb:
      "A Mini for a tight stand, a chain for reach at home. The Bordo 6500K sits between: Gold folding reach you can still clip on.",
  },
  "seatylock-mason-140": {
    href: "/for/commuting",
    title: "Best bike lock for commuting",
    blurb:
      "A commute lock is one you take every day. The Mason fits when Pedal Cycle Diamond is required and about 0.97kg is the carry you will keep using.",
  },
  "kryptonite-new-york-fahgettaboudit-1415": {
    href: "/vs/d-lock-vs-chain",
    title: "D-lock vs chain lock",
    blurb:
      "A D-lock for the ride and a chain for reach at home. The 1415 is the longer chain to leave where the bike is stored.",
  },
};

export const ANTI_GRINDER_META =
  "What to look for in an anti-grinder bike lock in the UK — Sold Secure Diamond, locking area, and weight you will still carry. Specs and maker claims, not cut tests.";

export const ANTI_GRINDER_BODY_EXTRA = [
  "Still choosing on a weekday Gold policy? See [best bike lock for commuting](/for/commuting). Matching a Diamond line on the policy: [best bike lock for insurance](/for/insurance). Head-to-head Gold Mini versus the compact Hiplok: [Evolution Mini-7 vs D1000](/vs/evolution-mini-7-vs-d1000). Choosing between the two Hiplok Diamonds: [D1000 vs DX1000](/vs/d1000-vs-dx1000).",
  "Full write-ups: [Litelok X1](/reviews/litelok-x1), [Hiplok D1000](/reviews/hiplok-d1000), [Hiplok DX1000](/reviews/hiplok-dx1000). How we treat grades and claims: [how we research](/method).",
];

export const COMMUTE_META =
  "A commute lock is one you take every day. For most UK riders that is a Gold Mini with a frame clip. Step up to Diamond if the bike is worth the weight.";
