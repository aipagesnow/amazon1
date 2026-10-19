import type { Faq } from "@/content/pages";

/** SEO metas and thin-content extras. Keeps pages.ts / editorial.ts lean on disk for MCP pushes. */

export const HOME_META =
  "Small UK comparison site for eighteen D-locks and chains. Sold Secure grades, insurance fit, and which lock you will actually carry — based on published specs, not cut tests.";

export const HOME_NEXT = [
  {
    href: "/guide",
    title: "How to choose a bike lock",
    blurb: "Sold Secure Gold or Diamond, whether it’ll close on your stand, and whether you’ll carry it.",
  },
  {
    href: "/best",
    title: "Best bike locks UK",
    blurb: "Locks compared on grade, fit, and weight. No single best lock for everyone.",
  },
  {
    href: "/reviews",
    title: "Bike lock reviews",
    blurb: "Eighteen full reviews: who each lock suits, when another is a better fit, and the drawbacks.",
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
    a: "Only when the Sold Secure grade matches your policy and, where the insurer publishes a list, the exact model is on that list. A badge alone isn’t always enough. See [best bike lock for insurance](/for/insurance).",
  },
  {
    q: "D-lock or chain for a commute?",
    a: "A compact D-lock for the station. A heavy chain for reach at home. [D-lock vs chain](/vs/d-lock-vs-chain) explains why using both is common.",
  },
];

export const BEST_META =
  "Our UK picks by situation: Litelok X1 for Diamond, Pitbull STD 8003 for Diamond with a mount, Evolution Mini-7 for Gold commutes. Grades, kg, cut times.";

export const BEST_INTRO_EXTRA =
  "If you already know the job, jump to [best lock for commuting](/for/commuting) or [best lock for insurance](/for/insurance). Comparing locks sold against grinders? See [what to look for in an anti-grinder lock](/for/anti-grinder). If you are stuck between two names, try [Evolution Mini-7 vs D1000](/vs/evolution-mini-7-vs-d1000), [D1000 vs DX1000](/vs/d1000-vs-dx1000), or [D-lock vs chain](/vs/d-lock-vs-chain). Looking for something instead of the New York Mini? See the [alternatives page](/alternatives/kryptonite-new-york-fahgettaboudit-mini).";

export const BEST_FAQS: Faq[] = [
  {
    q: "Why is the New York Mini not on this table?",
    a: "It’s Sold Secure Diamond for ordinary bikes (Gold for e-bikes) at 2.06kg with no frame clip. If Gold is enough, you’d usually be better with the Evolution Mini-7. We still review it because people search the name — see [alternatives to the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
  },
  {
    q: "Should I buy Diamond for a weekday commute?",
    a: "Only if the policy asks for it, or the bike is worth the extra weight, and you’ll still carry the lock. Otherwise a Gold Mini you take every day beats a Diamond lock left at home. See [commuting](/for/commuting).",
  },
  {
    q: "How do you pick these locks?",
    a: "Grade on the policy, whether the shackle will close, and whether you’ll carry it. Full method: [how we research](/method). Full chooser: [how to choose](/guide).",
  },
  {
    q: "Which Sold Secure grade do insurers want?",
    a: "Sold Secure says Gold is typically the minimum grade insurers ask for on higher-value bikes. Always check your own policy wording.",
  },
  {
    q: "Is Diamond angle-grinder proof?",
    a: "No. Explicit angle-grinder testing is part of the Powered Cycle Diamond standard. The published cut times further up this page are from BikeRadar and Cycling UK, and they show a Diamond lock can still be cut.",
  },
  {
    q: "What is the best rated bike lock?",
    a: "There isn’t one. We’d go by the Sold Secure grade your insurer asks for, whether the lock closes on your stand, and whether you’ll carry it. We don’t use Amazon stars.",
  },
  {
    q: "What lock works in a block of flats car park?",
    a: "We’d leave a chain on a ground anchor there, and take a D-lock when you ride. The New York 1410 is 100 cm at 4.9kg. If that won’t reach, the New York 1415 is 150 cm at 6.92kg. We don’t review the anchors themselves.",
  },
  {
    q: "Do I need the e-bike (Powered Cycle) grade?",
    a: "If you ride an e-bike and your policy names it, yes. On this shortlist the Litelok X1 and Hiplok D1000 are Diamond for e-bikes too. The ABUS 540 and the New York 1410 drop to Gold on e-bikes, and we don’t have an e-bike grade listed for the Pitbull STD.",
  },
  {
    q: "Is a heavier lock more secure?",
    a: "Not by grade. The Pitbull STD 8003 is Sold Secure Diamond at 1.44kg, while the Bordo 6500K is Gold at 2.47kg. Check the grade marked on the lock, then pick the lightest one that meets your policy and closes on your stand.",
  },
  {
    q: "What’s the lightest Diamond lock with a mount here?",
    a: "The OnGuard Pitbull STD 8003: Sold Secure Diamond for ordinary bikes, 1.44kg, with a frame mount and a 115 × 230 mm locking area. We don’t have an e-bike grade listed for it, so if you ride an e-bike we’d look at the Litelok X1.",
  },
];

export const REVIEWS_META =
  "Eighteen UK D-lock, folding-lock and chain reviews. Each page says who the lock suits, when another is a better fit, and the drawbacks.";

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
  "2.06kg, no mount, 18 mm, Diamond for ordinary bikes (Gold for e-bikes). If that is too heavy or too small, carry the Evolution Mini-7, look at e-bike Diamond, or keep a New York chain at home.";

export const ALT_BODY_EXTRA = [
  "If you need a lock you will take to work, start with the Evolution Mini-7: same brand family, Gold, 1.61kg, a frame clip, and a cable in the box. The cable is not Gold. For most UK riders whose policy still names Gold, that is the clearer daily choice in this set.",
  "If the policy names Diamond for an e-bike, the New York Mini won’t cover it: it’s Diamond for ordinary bikes but Gold for e-bikes. Look at the Litelok X1 (1.7kg, Diamond for ordinary bikes and e-bikes, 101 × 197 mm). The Hiplok D1000 is also Diamond, but only after you have measured its 92 × 155 mm shackle.",
  "If the problem is reach at home, not thickness on a Mini, the New York 1410 chain is the sibling that uses the name well: 100 cm, 14 mm, 4.9kg, and Sold Secure Diamond for ordinary bikes (Gold for e-bikes). Leave it where the bike is stored overnight. Take a D-lock when you ride away. See [D-lock vs chain](/vs/d-lock-vs-chain).",
  "This page exists because people search for alternatives to the New York Mini. Full write-ups live under [reviews](/reviews). How we pick grades and weights: [how to choose](/guide) and [how we research](/method).",
];

export const VS_AFTER_EXTRA: Record<string, string> = {
  "evolution-mini-7-vs-d1000":
    "For the weekday ride, see [best bike lock for commuting](/for/commuting). For the policy wording, see [best bike lock for insurance](/for/insurance). For Diamond locks sold against grinders, see [what to look for in an anti-grinder lock](/for/anti-grinder). The wider chooser is [how to choose a bike lock](/guide).",
  "d1000-vs-dx1000":
    "Measure first, then read the full write-ups: [Hiplok D1000](/reviews/hiplok-d1000) and [Hiplok DX1000](/reviews/hiplok-dx1000). For locks sold against grinders, see [what to look for in an anti-grinder lock](/for/anti-grinder). Want lighter Diamond carry? The [Litelok X1](/reviews/litelok-x1) sits on the [best of](/best) shortlist.",
  "d-lock-vs-chain":
    "Still choosing a daily lock? [Best lock for commuting](/for/commuting) names the Mini-7 and the X1. The [best of](/best) table puts both next to the home chain so the weight difference is obvious. If 100 cm of chain won’t reach, the [New York 1415](/reviews/kryptonite-new-york-fahgettaboudit-1415) is the 150 cm version at 6.92kg.",
};

export const REVIEW_META_OVERRIDES: Record<string, string> = {
  "litelok-x1":
    "Litelok X1: Sold Secure Diamond for bikes and e-bikes, 1.7kg, 101 × 197 mm. Our first look for Diamond you’ll still carry; no frame clip in the box.",
  "hiplok-d1000":
    "Hiplok D1000: Sold Secure Diamond for bikes and e-bikes, 1.9kg, 92 × 155 mm, no mount. Worth it once you’ve measured your stand and plan to bag it.",
  "kryptonite-evolution-mini-7":
    "Sold Secure Gold, 1.61kg, mount and cable in the box. The cable is not Gold. A commute lock many UK riders will still take every day.",
  "abus-granit-xplus-540":
    "ABUS Granit XPlus 540: Sold Secure Diamond (Gold on e-bikes), 1.8kg, with a long 108 × 300 mm shackle and mount for stands a compact Mini will not close around.",
  "kryptonite-new-york-fahgettaboudit-mini":
    "New York Fahgettaboudit Mini: Sold Secure Diamond (ordinary bikes), Gold (e-bikes), 2.06 kg, no mount, no cable. If Gold will do, the Evolution Mini-7 is easier to carry.",
  "kryptonite-new-york-fahgettaboudit-1410":
    "Kryptonite New York 1410: 100 cm of 14 mm chain, 4.9kg, Sold Secure Diamond for bikes, Gold for e-bikes. One to leave at home for reach.",
  "hiplok-dx1000":
    "Diamond for ordinary bikes and e-bikes at 2.75kg, with a 112 × 205 mm locking area and no mount. Larger than the D1000 — measure the stand first.",
  "onguard-pitbull-std-8003":
    "Sold Secure Diamond for ordinary bikes, 1.44kg, with a frame mount and a 115 × 230 mm locking area. Fits if you need Diamond with a clip. No cable.",
  "onguard-pitbull-dt-8005":
    "OnGuard Pitbull DT 8005 is Sold Secure Diamond at about 1.6 kg. A cable is in the box, and the cable is not graded.",
  "onguard-pitbull-ls-8002":
    "OnGuard Pitbull LS 8002: Sold Secure Diamond, 1.75kg, long 115 × 292 mm shackle with a frame mount, for when a Mini won’t close on a fat post.",
  "abus-bordo-granit-6500k":
    "ABUS Bordo Granit 6500K: Sold Secure Gold folding lock, 2.47kg, 120 cm reach and an SH bracket, for when a compact D-lock won’t close.",
  "seatylock-mason-140":
    "Seatylock Mason 140: Sold Secure Pedal Cycle Diamond at about 0.97kg, 140 × 85 mm. Measure the stand; the mount is sold separately.",
  "kryptonite-new-york-diamond":
    "Kryptonite New York Diamond: Sold Secure Diamond for bikes and e-bikes, 2.3kg, 95 × 204 mm, bracket in the box. Sold as angle-grinder resistant.",
  "onguard-rocksolid-8590":
    "OnGuard RockSolid 8590: Sold Secure Diamond for bikes and e-bikes, about 1.4kg, 90 × 175 mm, no mount. The lightest anti-grinder lock here; measure first.",
  "oxford-grinder-s1":
    "Oxford Grinder S1 320 mm (LK376): Sold Secure Diamond for bikes and e-bikes, about 2.36kg, roomy 247 × 115 mm shackle, carry bracket included.",
  "abus-granit-super-extreme-2500":
    "ABUS Granit Super Extreme 2500: Sold Secure Powered Cycle Diamond, 2.47kg, 102 × 230 mm, USH 2500 holder. For e-bikes and bulky frames.",
  "squire-stronghold-d16-max":
    "Squire Stronghold D16 MAX: Sold Secure Powered Cycle Diamond, 2.84kg, 94 × 218 mm, 16 mm shackle. Heavy, so best kept on the bike or in a pannier.",
  "kryptonite-new-york-fahgettaboudit-1415":
    "Kryptonite New York 1415: 150 cm chain, 6.92kg, Sold Secure Diamond for bikes, Gold for e-bikes. The longer home chain when 100 cm won’t reach.",
};

/** Reviews retitled to the "{Model} Review: Sold Secure {grade}, {kg}" pattern; no site suffix past 60 characters. */
export const REVIEW_RETITLED = new Set<string>([
  "hiplok-d1000",
  "litelok-x1",
  "kryptonite-new-york-fahgettaboudit-1410",
  "kryptonite-new-york-fahgettaboudit-1415",
  "onguard-pitbull-ls-8002",
  "seatylock-mason-140",
  "abus-bordo-granit-6500k",
  "kryptonite-new-york-diamond",
  "onguard-rocksolid-8590",
  "oxford-grinder-s1",
  "abus-granit-super-extreme-2500",
  "squire-stronghold-d16-max",
]);

export const REVIEW_TITLE_OVERRIDES: Record<string, string> = {
  "onguard-pitbull-std-8003":
    "OnGuard Pitbull STD 8003 review: Sold Secure Diamond, 1.44kg",
  "kryptonite-evolution-mini-7":
    "Kryptonite Evolution Mini-7 review: Sold Secure Gold, 1.61kg",
  "abus-granit-xplus-540":
    "ABUS Granit XPlus 540 review: Sold Secure Diamond, 1.8kg",
  "onguard-pitbull-dt-8005":
    "OnGuard Pitbull DT 8005 review: Sold Secure Diamond, 1.6kg + cable",
  "kryptonite-new-york-fahgettaboudit-mini":
    "Kryptonite Fahgettaboudit Mini review: Sold Secure Diamond, 2.06kg",
  "hiplok-d1000": "Hiplok D1000 Review: Diamond Anti-Grinder D-Lock, 1.9kg",
  "litelok-x1": "Litelok X1 Review: Sold Secure Diamond, 1.7kg, Bikes & E-Bikes",
  "kryptonite-new-york-fahgettaboudit-1410": "Kryptonite NY 1410 Review: Diamond Chain, 4.9kg, Home Use",
  "kryptonite-new-york-fahgettaboudit-1415": "Kryptonite NY 1415 Review: Diamond Chain, 6.92kg, Home Use",
  "onguard-pitbull-ls-8002": "OnGuard Pitbull LS 8002 Review: Sold Secure Diamond, 1.75kg",
  "seatylock-mason-140": "Seatylock Mason 140 Review: Sold Secure Diamond, 0.97kg",
  "abus-bordo-granit-6500k": "ABUS Bordo 6500K Review: Sold Secure Gold, 2.47kg, Folding",
  "kryptonite-new-york-diamond": "Kryptonite New York Diamond Review: Sold Secure Diamond, 2.3kg",
  "onguard-rocksolid-8590": "OnGuard RockSolid 8590 Review: Sold Secure Diamond, 1.4kg",
  "oxford-grinder-s1": "Oxford Grinder S1 320mm Review: Sold Secure Diamond, 2.36kg",
  "abus-granit-super-extreme-2500": "ABUS Granit Super Extreme 2500 Review: Diamond, 2.47kg",
  "squire-stronghold-d16-max": "Squire Stronghold D16 MAX Review: Sold Secure Diamond, 2.84kg",
};

export const REVIEW_DIRECT_ANSWERS: Record<string, string> = {
  "kryptonite-new-york-diamond":
    "Sold Secure Diamond for ordinary bikes and e-bikes, 2.3kg, with a FlexFrame-U bracket and a 95 × 204 mm locking area. It suits a policy that names Diamond when you’d rather clip the lock on than bag it.",
  "onguard-rocksolid-8590":
    "Sold Secure Diamond for ordinary bikes and e-bikes at about 1.4kg, the lightest anti-grinder lock on Lock Desk. The 90 × 175 mm locking area is small and there’s no mount, so measure your frame and stand first.",
  "oxford-grinder-s1":
    "Sold Secure Diamond for ordinary bikes and e-bikes in the 320 mm size, with a carry bracket. Bennetts BikeSocial measured about 2.36kg and 247 × 115 mm inside, so it suits chunky frames and fat stands.",
  "abus-granit-super-extreme-2500":
    "Sold Secure Powered Cycle Diamond (ABUS also lists Pedal Cycle Diamond), 2.47kg, 102 × 230 mm, with a USH 2500 holder in the box. It suits e-bikes and bulky frames where the lock rides on the bike.",
  "squire-stronghold-d16-max":
    "Sold Secure Powered Cycle Diamond, 2.84kg, 16 mm shackle, 94 × 218 mm locking area. It suits an e-bike or cargo bike where the lock lives on the bike or in a pannier; it’s heavy for a daily bag.",
  "onguard-pitbull-std-8003":
    "Sold Secure Diamond for ordinary bikes, 1.44kg, with a frame mount and a 115 × 230 mm locking area. No cable in the box. It suits riders who need Diamond and will clip the lock to the bike.",
  "kryptonite-evolution-mini-7":
    "Sold Secure Gold on the D-lock, 1.61kg, with a frame mount and a cable in the box. The cable isn’t Gold — lock the frame with the graded D-lock.",
  "abus-granit-xplus-540":
    "Sold Secure Diamond for ordinary bikes with a long 300 mm shackle when a Mini won’t close. For e-bikes the grade is Gold, not Diamond. Frame mount in the box; not sold as anti-grinder.",
  "seatylock-mason-140":
    "Sold Secure Pedal Cycle Diamond at about 0.97kg with a compact 140 × 85 mm locking area. It suits ordinary-bike Diamond when carry weight is the limit. Measure the stand; mount sold separately; confirm e-bike grade on Sold Secure.",
  "onguard-pitbull-dt-8005":
    "Worth picking if you want Sold Secure Diamond on the D-lock plus a cable and frame mount in one box (~1.6 kg). Lock the frame with the graded D-lock; the cable isn’t Diamond. Skip it if you’ve a cable already, or prefer the lighter STD 8003 without one.",
  "kryptonite-new-york-fahgettaboudit-1415":
    "Sold Secure lists the 1415 chain with its New York disc lock as Diamond for ordinary bikes and Gold for e-bikes. It’s 150 cm long and weighs 6.92kg, so it’s a chain to leave at home when you need extra reach. If 100 cm is enough, the New York 1410 has the same grades at 4.9kg.",
};

export const REVIEW_RELATED_WELLS: Record<
  string,
  { href: string; title: string; blurb: string }
> = {
  "litelok-x1": {
    href: "/for/anti-grinder",
    title: "What to look for in an anti-grinder lock",
    blurb:
      "The X1 is the usual Diamond starting point when a lock is sold against grinders and you’ll still carry 1.7kg.",
  },
  "hiplok-d1000": {
    href: "/vs/d1000-vs-dx1000",
    title: "Hiplok D1000 vs DX1000",
    blurb:
      "Same Diamond grade. Choose by locking area and weight after you’ve measured the stand.",
  },
  "kryptonite-evolution-mini-7": {
    href: "/for/commuting",
    title: "Best bike lock for commuting",
    blurb:
      "A commute lock is one you take every day. For most UK riders on Gold, that’s this Mini-7.",
  },
  "abus-granit-xplus-540": {
    href: "/guide",
    title: "How to choose a bike lock",
    blurb: "Measure your stand before you buy a long shackle. Fit is why the 540 exists.",
  },
  "kryptonite-new-york-fahgettaboudit-1410": {
    href: "/vs/d-lock-vs-chain",
    title: "D-lock vs chain lock",
    blurb:
      "A D-lock for the commute, a chain for reach at home. Using both is common; commuting with 4.9kg isn’t.",
  },
  "hiplok-dx1000": {
    href: "/vs/d1000-vs-dx1000",
    title: "Hiplok D1000 vs DX1000",
    blurb:
      "Same Diamond grade. The DX1000 is the larger sibling when the D1000 won’t close — measure first.",
  },
  "onguard-pitbull-std-8003": {
    href: "/reviews/onguard-pitbull-dt-8005",
    title: "OnGuard Pitbull DT 8005",
    blurb:
      "Same Pitbull Diamond D-lock family with a cable and mount in the box. The cable isn’t Diamond — use the graded D-lock on the frame.",
  },
  "onguard-pitbull-dt-8005": {
    href: "/reviews/onguard-pitbull-std-8003",
    title: "OnGuard Pitbull STD 8003",
    blurb:
      "Same Diamond D-lock without the cable — lighter kit if you already carry a cable or don’t need one. See also the best of shortlist.",
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
      "A commute lock is one you take every day. The Mason fits when Pedal Cycle Diamond is required and about 0.97kg is the carry you’ll keep using.",
  },
  "kryptonite-new-york-diamond": {
    href: "/for/anti-grinder",
    title: "What to look for in an anti-grinder lock",
    blurb: "Anti-grinder is maker wording; Diamond is the grade. The guide compares locks sold against grinders on grade, fit and carry.",
  },
  "onguard-rocksolid-8590": {
    href: "/for/anti-grinder",
    title: "What to look for in an anti-grinder lock",
    blurb: "The RockSolid is the lightest anti-grinder lock here. The guide puts it next to the X1 and Hiplok on fit and carry.",
  },
  "oxford-grinder-s1": {
    href: "/for/anti-grinder",
    title: "What to look for in an anti-grinder lock",
    blurb: "If your frame is chunky, the locking area matters as much as the grinder claim. The guide shows how to compare them.",
  },
  "abus-granit-super-extreme-2500": {
    href: "/for/insurance",
    title: "Best bike lock for insurance",
    blurb: "Powered Cycle and Pedal Cycle Diamond are separate Sold Secure rows. Here’s how to match the one your policy names.",
  },
  "squire-stronghold-d16-max": {
    href: "/for/insurance",
    title: "Best bike lock for insurance",
    blurb: "The D16 MAX lists Powered Cycle Diamond. Here’s how to match that against the grade your policy names.",
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
  "More anti-grinder D-locks, each with its own review: the [OnGuard RockSolid 8590](/reviews/onguard-rocksolid-8590) is the lightest at about 1.4kg, if 90 × 175 mm closes on your stand. The [Kryptonite New York Diamond](/reviews/kryptonite-new-york-diamond) is Diamond for bikes and e-bikes with a bracket at 2.3kg. For chunky frames, the [Oxford Grinder S1 320 mm](/reviews/oxford-grinder-s1) has about 247 × 115 mm inside and a bracket. On e-bike policies that name Powered Cycle Diamond, look at the [ABUS Granit Super Extreme 2500](/reviews/abus-granit-super-extreme-2500) (2.47kg, holder in the box) and the [Squire Stronghold D16 MAX](/reviews/squire-stronghold-d16-max) (2.84kg).",
];

export const COMMUTE_META =
  "A commute lock is one you take every day. For most UK riders that is a Gold Mini with a frame clip. Step up to Diamond if the bike is worth the weight.";

export const REVIEW_FAQ_EXTRA: Record<string, Faq[]> = {
  "onguard-pitbull-dt-8005": [
    {
      q: "Is the DT 8005 Diamond on an e-bike?",
      a: "We don’t have a Powered Cycle (e-bike) grade listed for it. On our records it’s Sold Secure Diamond for ordinary bikes. If your e-bike policy names e-bike Diamond, the Litelok X1 is Diamond for both.",
    },
    {
      q: "Is Diamond what my insurer wants?",
      a: "Only if your policy names it. Many UK household policies still name Gold, and a Diamond lock meets that line too. If the insurer publishes an approved list, match the exact model. See [bike lock for insurance](/for/insurance).",
    },
    {
      q: "Does the cable make it heavier than the STD 8003?",
      a: "A little. The DT 8005 is about 1.6kg with the cable; the STD 8003 is 1.44kg without one. It’s the same Diamond D-lock with the same 115 × 230 mm locking area.",
    },
  ],
  "kryptonite-evolution-mini-7": [
    {
      q: "Is the Mini-7 Gold on an e-bike?",
      a: "We don’t have a Powered Cycle (e-bike) grade listed for it; it’s Sold Secure Gold for ordinary bikes. If your e-bike policy names an e-bike grade, the Litelok X1 is Diamond for both.",
    },
    {
      q: "Will my insurer accept a Gold lock?",
      a: "If the policy names Gold and the model is on any list the insurer publishes, it should. Some high-value and e-bike policies ask for Diamond instead. See [bike lock for insurance](/for/insurance).",
    },
    {
      q: "Is a heavier Gold lock safer?",
      a: "Not by weight alone. The New York Mini is heavier at 2.06kg, but it’s Diamond for ordinary bikes, so that’s a different grade, not just more steel. If Gold is enough, the Mini-7 is 1.61kg with a frame clip, so it’s the one you’re more likely to have with you.",
    },
  ],
  "onguard-pitbull-std-8003": [
    {
      q: "Is the STD 8003 Diamond on an e-bike?",
      a: "We don’t have a Powered Cycle (e-bike) grade listed for it. On our records it’s Sold Secure Diamond for ordinary bikes. If your e-bike policy names e-bike Diamond, the Litelok X1 is Diamond for both.",
    },
    {
      q: "Is Diamond what my insurer wants?",
      a: "Only if your policy names it. Many UK household policies still name Gold, and a Diamond lock meets that line too. If the insurer publishes an approved list, match the exact model. See [bike lock for insurance](/for/insurance).",
    },
    {
      q: "Is it the lightest Diamond lock with a mount?",
      a: "In this set, yes: 1.44kg with a frame mount in the box. The Seatylock Mason 140 is lighter at about 0.97kg, but its mount is sold separately and its 140 × 85 mm locking area is much shorter.",
    },
  ],
  "kryptonite-new-york-fahgettaboudit-1415": [
    {
      q: "Is a 6.92kg chain more secure than a 1.9kg D-lock?",
      a: "Not by grade alone. The 1415 is Diamond for ordinary bikes; so is the Hiplok D1000 at 1.9kg, which is Diamond on e-bikes too. The chain’s weight buys you 150 cm of reach, not a higher grade.",
    },
    {
      q: "Does my insurer care how I lock it at home?",
      a: "Often, yes. Policies can care how you locked the bike as well as the grade: frame to a fixed object, not a wheel alone. Read those lines in your policy. See [bike lock for insurance](/for/insurance).",
    },
    {
      q: "What grade do insurers usually ask for?",
      a: "Sold Secure says Gold is typically the minimum insurers ask for on higher-value bikes; some policies ask for Diamond. The 1415 is Diamond for ordinary bikes and Gold for e-bikes.",
    },
  ],
  "onguard-pitbull-ls-8002": [
    {
      q: "Is the LS 8002 Diamond on an e-bike?",
      a: "We don’t have a Powered Cycle (e-bike) grade listed for it. On our records it’s Sold Secure Diamond for ordinary bikes. If your e-bike policy names e-bike Diamond, the Litelok X1 is Diamond for both.",
    },
    {
      q: "Is Diamond what my insurer wants?",
      a: "Only if your policy names it. Many UK household policies still name Gold, and a Diamond lock meets that line too. If the insurer publishes an approved list, match the exact model. See [bike lock for insurance](/for/insurance).",
    },
    {
      q: "Does the longer shackle make it heavier?",
      a: "A bit: 1.75kg against 1.44kg for the STD 8003, with the same Diamond grade. You’re paying for 115 × 292 mm of room, not a higher grade.",
    },
  ],
  "abus-granit-xplus-540": [
    {
      q: "What does Powered Cycle mean for the 540?",
      a: "It’s Sold Secure’s e-bike grade. The 540 is Gold there, not Diamond, so it won’t match a policy that asks for e-bike Diamond. On an ordinary bike it’s Diamond.",
    },
    {
      q: "Is Diamond what my insurer wants?",
      a: "Only if your policy names it. Many UK household policies still name Gold, and a Diamond lock meets that line too. If the insurer publishes an approved list, match the exact model. See [bike lock for insurance](/for/insurance).",
    },
    {
      q: "Is 1.8kg heavy for a Diamond lock?",
      a: "It’s mid-pack in this set: the Litelok X1 is 1.7kg and the Pitbull LS 8002 is 1.75kg, both Diamond. The 540’s weight goes on its 300 mm shackle, which is why it closes where a Mini won’t.",
    },
  ],
};
