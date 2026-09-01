import { Product } from "@/lib/products";

export type Faq = { q: string; a: string };

export type ReviewCopy = {
  hook: string;
  job: string;
  verdict: string;
  meta: string;
  subheads: [string, string, string];
  body: string[];
  bestFor: string[];
  skipIf: string[];
  good: string[];
  bad: string[];
  change: string;
  faqs: Faq[];
  altBest: string;
  altBestWhy: string;
  altSecond: string;
  altSecondWhy: string;
  stamp?: string;
  relatedWell?: { href: string; title: string; blurb: string };
};

export const reviewCopy: Record<string, ReviewCopy> = {
  "litelok-x1": {
    hook: "Diamond you might actually take on the train.",
    job: "The lock we would carry on a bike worth insuring.",
    meta: "Pedal and powered Diamond, 1.7 kg, 101 × 197 mm. The lock we would carry on a bike worth insuring. Not a lab test.",
    verdict:
      "If we were buying one lock to take every day, this is it. Pedal Diamond and powered Diamond, 1.7 kg, and a 101 × 197 mm hole — the rare overlap of a grade insurers take seriously and a weight people still pick up. We have not cut one open. The case is the spec sheet, Sold Secure, and manufacturer materials.",
    subheads: ["Will it fit your rack", "The mount problem", "What’s marketing, what’s graded"],
    body: [
      "Most “serious” locks fail the only test that happens every morning: do you take it? A 4.9 kg chain stays by the door. A tiny Mini that will not close on the stand is a paperweight. The X1 sits in the awkward middle — armoured enough to be Diamond, light enough that a commuter might still clip it on.",
      "The locking area is 101 × 197 mm. That is not huge, but it is larger than the Mini-7 and much larger than the D1000. Measure the Sheffield stand plus the frame tube. If a Mini already fails to close on your rack, do not assume this will either — but it has a better chance than the small anti-grinder locks.",
      "Litelok sells the mount separately on this listing. That is the practical hole in the product. A Diamond lock that lives under the desk because it is awkward to carry is a Gold lock in real life. Budget for a mount or a pouch, or be honest that you will hand-carry 1.7 kg.",
      "The Barronium / angle-grinder story is manufacturer language. Independent grade on our record is Sold Secure Diamond, for both pedal and powered cycles. Treat cut-times in adverts as marketing. Check the marking on the lock and your insurer’s approved list before you buy.",
    ],
    bestFor: [
      "A bike you would be sick to lose, parked in public",
      "E-bikes where the policy names Diamond, including powered-cycle Diamond",
      "Riders who want a full-size D-lock, not a tiny Mini",
    ],
    skipIf: [
      "Gold is enough and you want a cable and a bracket in one box",
      "You need a 300 mm shackle to close on a fat post",
      "You will not buy a mount, and you will not carry 1.7 kg in a bag",
    ],
    good: [
      "Sold Secure pedal Diamond and powered Diamond on the same lock",
      "1.7 kg — in the band people still commute with",
      "101 × 197 mm locking area is generous for an armoured D-lock",
      "Sold as armoured against grinders; independently graded Diamond, not a lab claim from us",
    ],
    bad: [
      "No frame mount in the box on this listing",
      "Only two keys in the published spec",
      "No cable, so a quick-release front wheel still needs a second tether",
    ],
    change:
      "Put a mount in the carton. The grade does not matter if the lock is still in the hall.",
    faqs: [
      {
        q: "Is the Litelok X1 Sold Secure Diamond?",
        a: "On our records: yes, for pedal cycles and powered cycles. Confirm the current marking and your insurer’s list. We do not keep a live list.",
      },
      {
        q: "Will it fit my rack?",
        a: "Locking area is 101 × 197 mm. Measure the post plus the frame. A Mini that already fails may still fail. The ABUS 540 is the long-shackle option on this site.",
      },
      {
        q: "Did you attack it with a grinder?",
        a: "No. We do not run lab tests. Diamond is Sold Secure’s higher pedal grade. Marketing times-to-cut are marketing.",
      },
      {
        q: "Is this the same as the X1 Moto?",
        a: "Litelok says the bicycle and moto X1 are the same lock, marketed twice. This UK listing is the X1 armoured D-lock on our records.",
      },
    ],
    altBest: "hiplok-d1000",
    altBestWhy:
      "You want Hiplok’s smaller anti-grinder D-lock, and you have already measured 92 × 155 mm.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold is enough, and you want a cable and a frame bracket in the same box.",
  },
  "hiplok-d1000": {
    hook: "The small anti-grinder D-lock people type by name.",
    job: "Diamond for a bad street — if the shackle will close.",
    meta: "Diamond, 1.9 kg, 92 × 155 mm, no mount. Worth it if you have measured the rack. Skip it if Gold and a cable would do.",
    verdict:
      "Worth it if you park in a known-theft street, the policy wants Diamond, and you can lock through a 92 × 155 mm gap. It is 1.9 kg with no mount on our sheet. We would not buy it as a first lock for someone who already skips 1.6 kg. We have not attacked one; the Diamond grades are on the record.",
    subheads: ["Will it fit your rack", "No mount, 1.9 kg", "What’s marketing, what’s graded"],
    body: [
      "People search this lock because of the anti-grinder story, not because it is easy to live with. The D1000 is a Mini-sized hole with Mini-plus weight. Fit is the whole review. If the shackle will not close around your stand and your stays, nothing else on the spec sheet matters.",
      "92 × 155 mm is tight. Fat tyres, cargo frames, and some Sheffield stands will refuse it. Hiplok’s larger DX1000 (112 × 205 mm, 2.75 kg) is on our records without a full review — that is the sibling to look at if the Mini hole is the problem, not the grade.",
      "There is no frame mount in the product record. You carry 1.9 kg in a bag or you leave it at home. That is a behaviour spec, the same as weight. For a weekday commuter whose policy still names Gold, the Evolution Mini-7 is the more honest lock.",
      "Pedal Diamond and powered Diamond are both on our sheet. The Ferosafe / two-cuts design story is Hiplok’s. Independent grade is Diamond. We do not print cut-times.",
    ],
    bestFor: [
      "High-theft racks you have stood next to with a tape measure",
      "E-bikes where powered-cycle Diamond is the line on the policy",
      "Riders who already know a Mini shackle closes on their stand",
    ],
    skipIf: [
      "You have not measured 92 × 155 mm and you ride a fat or cargo frame",
      "You refuse to carry nearly 2 kg with no mount",
      "Gold is enough and you want a cable in the box",
    ],
    good: [
      "Pedal Diamond and powered Diamond on the spec sheet",
      "Sold as anti-angle-grinder; square shackle is Hiplok’s two-cut design",
      "1.9 kg is still a bag lock, not a 4.9 kg chain",
      "Three coded keys listed",
    ],
    bad: [
      "92 × 155 mm will not close on a lot of real UK stands",
      "No frame mount in the product record",
      "Heavier than the Litelok X1 for a smaller hole",
    ],
    change:
      "The DX1000 exists for fit. For this Mini, a mount in the box would stop it living in a pannier you forget.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "D1000: 92 × 155 mm, 1.9 kg. DX1000: 112 × 205 mm, 2.75 kg. Buy the one that closes. Do not guess. The DX1000 is on our records without a full review on this site yet.",
      },
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK household policies still name. Diamond is the higher pedal grade. Read the wording you signed. We are not your broker.",
      },
      {
        q: "Does it include a cable?",
        a: "Not on this listing. The D-lock is the rated product. A cable is a second, usually unrated, tether.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Same Diamond story, more locking area, 200 g lighter on the spec sheet.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "You will actually carry it, Gold meets the policy, and you want a mount.",
  },
  "kryptonite-evolution-mini-7": {
    hook: "Gold, a mount, and a cable — the commute lock most people finish up with.",
    job: "The lock you will still take to work.",
    meta: "Sold Secure Gold, 1.61 kg, mount and cable in the box. The cable is not Gold. The commute lock most people will actually carry.",
    verdict:
      "Worth it for a daily rider whose policy asks for Sold Secure Gold, who wants a cable and a bracket in one box, and who will not carry a 2 kg Diamond lock. The D-lock is Gold; the cable is not part of that approval — Kryptonite says so. We would buy this for a mid-value commuter bike. We would not buy it as the only lock on a high-value e-bike in a known theft hotspot.",
    subheads: ["The cable is not Gold", "Mini hole — measure the rack", "Gold is the policy line"],
    body: [
      "This is the lock that matches how UK commuters actually behave. 1.61 kg, a frame mount, three keys, a loop cable in the carton. It lives on the bike, so it is on the bike at the stand. That is more security than a Diamond lock left in the hall.",
      "The cable is the bit people get wrong. It is for a quick-release wheel, or a helmet, if you must. It is not Sold Secure Gold. If a listing photograph makes the whole kit look approved, ignore the photograph. The D-lock is the rated product.",
      "83 × 178 mm is a Mini. It will hug a lot of Sheffield stands and fail on fat lamp-posts and some cargo frames. Measure. If it will not close, look at the ABUS 540 (300 mm) or a chain at home — not a thicker Mini with an even smaller hole.",
      "Gold is still the grade a lot of UK household cycle insurance names. Diamond is a higher pedal grade, and some e-bike policies want the powered-cycle version. If that is you, this is the wrong lock. If Gold is the line and you will carry 1.6 kg, this is the right one on this site.",
    ],
    bestFor: [
      "Weekday commuting where Gold meets the policy",
      "Riders who want a frame mount and a wheel cable without a second purchase",
      "Anyone who will skip a lock that does not clip onto the bike",
    ],
    skipIf: [
      "The street or the policy wants Diamond or an anti-grinder lock",
      "You need a larger shackle than 83 × 178 mm",
      "You already own a Gold D-lock and only needed a cable",
    ],
    good: [
      "Sold Secure Gold on the D-lock — the grade most UK household policies still name",
      "1.61 kg with a frame mount, so it is designed to live on the bike",
      "Cable in the box for a quick-release wheel (the cable is not approved)",
      "Three keys, including the usual lighted fob on Kryptonite Mini kits",
    ],
    bad: [
      "Not Diamond, and not sold as angle-grinder resistant",
      "Mini dimensions: 83 × 178 mm will not hug every post",
      "The cable is a convenience, not a second Gold lock",
    ],
    change:
      "Print the cable disclaimer larger. Too many listings still read as if the whole kit is Gold.",
    faqs: [
      {
        q: "Is the cable Sold Secure Gold?",
        a: "No. On Kryptonite’s Mini-7 notes, any cable supplied is not part of the Sold Secure approval. The D-lock is the rated product.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "Gold is what many UK policies still ask for. Diamond is what we would look for on a high-value e-bike. Check the wording you signed.",
      },
      {
        q: "Evolution Mini-7 or New York Mini?",
        a: "New York Mini: 18 mm, 2.06 kg, no mount, no cable, Gold. Evolution: 13 mm, 1.61 kg, mount, cable, Gold. Carry the Evolution unless you specifically want the thicker Mini as a second lock.",
      },
      {
        q: "What should I buy instead of the New York Mini?",
        a: "This lock, if you need Gold you will carry. Diamond: [Litelok X1](/reviews/litelok-x1). Reach at home: the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410). Longer version: [alternatives to the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Step up to Diamond and a larger locking area if the bike is worth the extra weight.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "The Mini will not close, and you still want pedal Diamond plus a bracket.",
  },
  "abus-granit-xplus-540": {
    hook: "A 300 mm shackle when a Mini will not close.",
    job: "Pedal Diamond for fat posts. Check the powered grade if you ride an e-bike.",
    meta: "Pedal Diamond, powered Gold, 108 × 300 mm, mount in the box. For racks a Mini will not hug. Not an anti-grinder story.",
    stamp: "Pedal Diamond",
    verdict:
      "Worth it when a Mini will not close on the rack and you still want Sold Secure pedal Diamond plus a frame bracket. Powered-cycle grade on our record is Gold, not Diamond, so e-bike policies that insist on powered Diamond should look at the X1 or D1000 instead. 1.8 kg, 13 mm square shackle, 108 × 300 mm. We have not lab-tested it.",
    subheads: ["Fit is the point", "Pedal Diamond, powered Gold", "Not an anti-grinder story"],
    body: [
      "Fit is a security spec. A Mini that will not close is zero. The 540 exists because UK street furniture is not all the same diameter. 108 × 300 mm is a long D-lock. It will close around posts that laugh at the Mini-7. It also leaves more room for a tool. That is the trade, not a free lunch.",
      "On our records the pedal grade is Diamond and the powered grade is Gold. Those are different Sold Secure programmes. If you ride an unassisted bike and the policy names pedal Diamond, this lock is in the conversation. If you ride an e-bike and the policy names powered Diamond, it is the wrong way round — look at the X1 or the D1000.",
      "The EaZy KF bracket is in the carton on this ASIN. That matters. 1.8 kg on the frame is a lock you still own at 8am. There is no cable in this listing. Do not assume an ABUS cable kit from another SKU.",
      "It is not sold as angle-grinder resistant. Diamond is not a grinder-proof badge. If the anti-grinder marketing is why you are here, this is not the lock. If the Mini will not fit, it might be.",
    ],
    bestFor: [
      "Racks a Mini cannot hug",
      "Pedal bikes where Diamond is the line and you want a mount",
      "Commuters who will actually put 1.8 kg on the frame",
    ],
    skipIf: [
      "Your e-bike policy wants powered-cycle Diamond",
      "You came for an anti-grinder story",
      "You need a cable in the same box",
    ],
    good: [
      "Sold Secure pedal Diamond on the spec we hold",
      "300 mm shackle — much longer than the Minis",
      "Frame mount listed (EaZy KF on this ASIN)",
      "1.8 kg is in the same band as the X1",
    ],
    bad: [
      "Powered / e-bike Sold Secure on our record is Gold, not Diamond",
      "Not listed as angle-grinder resistant",
      "Only two keys in the spec",
    ],
    change:
      "Say the powered grade in the same breath as the pedal grade. Too many pages only print the better number.",
    faqs: [
      {
        q: "Is the 540 Diamond or Gold?",
        a: "On our records: pedal Diamond, powered Gold. Read both if you ride an e-bike.",
      },
      {
        q: "Why 300 mm?",
        a: "Longer shackles close around fatter posts. They also give a thief more room. Measure, then choose.",
      },
      {
        q: "ABUS 540 or Litelok X1?",
        a: "X1 is powered Diamond and sold as armoured, with a smaller hole and no mount in the box. The 540 is the long shackle with a bracket. Fit and policy first.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Powered Diamond matters more than shackle length.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold and a cable are enough, and you want less lock to carry.",
  },
  "kryptonite-new-york-fahgettaboudit-mini": {
    hook: "The flagship Mini. Thick. Heavy. No mount.",
    job: "18 mm of Gold — not the lock we would commute with.",
    meta: "18 mm Gold Mini, 2.06 kg, no mount, no cable. A thick second lock. Most commuters should buy the Evolution Mini-7.",
    verdict:
      "Worth it as a small, thick Gold D-lock you leave on a heavy bike or at a regular stand. Not worth it as your only commuter lock if you already bounce off 1.6 kg: this one is 2.06 kg, 83 × 153 mm, no mount in our spec, no cable. The New York name is famous. The Evolution Mini-7 is what most people should buy in this family.",
    subheads: ["Carry versus thickness", "No mount, no cable", "Gold is Gold"],
    body: [
      "Fahgettaboudit is a nickname with a marketing department. What you actually get on our records is an 18 mm Gold Mini with a smaller hole than the Evolution Mini-7 and 450 g more steel. Thickness is the point. Carry is the problem.",
      "There is no frame mount in our spec. There is no cable. You hand-carry 2.06 kg or you strap it somehow. Most commuters will not. That is why this page exists as a warning as much as a review: the name people type is not the lock they will use at 7.40am.",
      "83 × 153 mm is tighter than the Evolution’s 83 × 178 mm. If the Mini-7 already struggles on your stand, this will not save you. For reach, the New York 1410 chain is the sibling — 100 cm, 4.9 kg, a house lock.",
      "Gold is Gold. Insurers who name Sold Secure Gold may accept it if the exact model is on their list. They will not care that it says New York. Match the list. We do not keep one.",
    ],
    bestFor: [
      "A second lock that lives in a pannier or on a heavy bike",
      "Riders who want the thickest Mini Gold shackle on this site (18 mm)",
      "Pairing a New York chain with a New York D-lock at home",
    ],
    skipIf: [
      "You need a mount or a cable in the box",
      "You want Diamond or anti-grinder armour",
      "You will only use a lock that fits a bottle-cage boss",
    ],
    good: [
      "18 mm shackle — the thickest Mini D-lock on this site",
      "Sold Secure Gold on the pedal record we have",
      "Compact 83 × 153 mm hole, tight to the rack if it fits",
    ],
    bad: [
      "2.06 kg and no frame mount listed — a lot of loose steel",
      "Smaller locking area than the Evolution Mini-7",
      "No cable, not Diamond, not sold as angle-grinder resistant",
    ],
    change:
      "Give it the FlexFrame treatment the Evolution already has. A flagship Mini that does not mount is a paperweight.",
    faqs: [
      {
        q: "New York Mini or Evolution Mini-7?",
        a: "Evolution: 13 mm, 1.61 kg, mount, cable, Gold. New York Mini: 18 mm, 2.06 kg, no mount, no cable, Gold. Carry versus thickness.",
      },
      {
        q: "What should I buy instead?",
        a: "If you need a lock you will carry, the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7). If you need Diamond, the [Litelok X1](/reviews/litelok-x1). If you need reach at home, the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410). The longer version is [Instead of the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
      },
      {
        q: "Will insurers accept it?",
        a: "Gold is widely named. Always match the exact model to your insurer’s list. We do not keep a live list.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "Same brand, Gold, and you will actually carry it.",
    altSecond: "litelok-x1",
    altSecondWhy: "You were buying New York for ‘maximum Mini’ and the policy would rather see Diamond.",
    relatedWell: {
      href: "/alternatives/kryptonite-new-york-fahgettaboudit-mini",
      title: "Instead of the New York Mini",
      blurb: "Carry Gold, step to Diamond, or keep a chain at home. This Mini is usually the wrong lock.",
    },
  },
  "kryptonite-new-york-fahgettaboudit-1410": {
    hook: "A metre of Gold chain. Leave it where the bike lives.",
    job: "Reach, not a commute. 4.9 kg stays by the door.",
    meta: "100 cm, 14 mm, 4.9 kg, Sold Secure Gold. A house or terrace chain. Not the lock you pedal with.",
    verdict:
      "Worth it as a home, garden, or café-terrace lock when a D-lock will not reach the only solid object. Not worth it as the lock you pedal with: 4.9 kg, no mount, no fantasy of a backpack. Sold Secure Gold applies to the approved product, not to any chain you loop twice. We would keep this next to the door.",
    subheads: ["Reach vs carry", "4.9 kg is the product", "Gold, and what looping doesn’t do"],
    body: [
      "A D-lock hugs a rack. A chain buys length. That is the whole distinction, and it is why this lock does not belong in a ‘best commute lock’ list. 100 cm of 14 mm New York chain will reach a ground anchor, a drainpipe you should not rely on, a second bike, or a post a Mini cannot close around. It will not come with you to the station twice a day.",
      "4.9 kg is not a typo. It is the product. If a listing photograph looks like a bag chain, it is a different SKU. People buy this because they want New York on a chain. They should use it like a house lock: through the frame and a rear wheel, to something that does not move, left in place or carried the last ten metres from the hall.",
      "Gold is the pedal grade on our record. Looping the chain twice does not make it Diamond, and it does not make an unapproved ground anchor into an approved one. If the policy names a grade, match the lock that is on Sold Secure’s list. If the policy also names a ground anchor, that is a separate product — not this page.",
      "The disc lock on the chain is part of the kit we have on the sheet: three keys. There is no frame mount, because you would not want 4.9 kg on a down tube. Pair it with a D-lock you actually carry. On this site that is the Evolution Mini-7 for Gold commuters, or the X1 if you need Diamond on the bike and the chain at home.",
    ],
    bestFor: [
      "Home, a garden, or a ground anchor",
      "A post or terrace railing a Mini cannot hug",
      "A second layer with a D-lock — not a replacement for one on the commute",
    ],
    skipIf: [
      "You need something you will carry five miles to work",
      "You want Diamond or anti-grinder armour",
      "You thought 4.9 kg was a spec-sheet error",
    ],
    good: [
      "100 cm of 14 mm chain — reach a D-lock cannot match",
      "Sold Secure Gold on our pedal record",
      "New York disc lock on the chain; three keys listed",
    ],
    bad: [
      "4.9 kg. That is the point, and the problem",
      "No frame mount, because you would not want one",
      "Not sold as angle-grinder resistant; grinders do not care about Gold the way croppers do",
    ],
    change:
      "Call it a house chain in the title. Too many ‘bike chain’ listings pretend you will wear this.",
    faqs: [
      {
        q: "D-lock or chain?",
        a: "D-lock for a tight rack on a commute. Chain when you need length. Many careful riders use both, and only carry the D-lock. That pairing is the honest setup.",
      },
      {
        q: "Is 4.9 kg right?",
        a: "That is the weight on our spec sheet for this 100 cm New York 1410 kit. If a listing looks far lighter, it is a different product.",
      },
      {
        q: "Can I use it on an e-bike?",
        a: "As a home or destination lock, yes if Gold meets the policy. As the only lock you carry, almost nobody will. For Diamond on an e-bike you still take to work, look at the X1.",
      },
      {
        q: "Does looping it twice make it stronger?",
        a: "It can reduce slack. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor. Grade the lock, then the object you lock to.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "For the ride to work. Keep the chain at home.",
    altSecond: "litelok-x1",
    altSecondWhy: "You wanted ‘serious’ and you still have to carry something. Diamond, 1.7 kg, on the bike.",
  },
};

export const catalogueHooks: Record<string, string> = {
  "litelok-x1": "Editor’s pick: Diamond you can still carry.",
  "hiplok-d1000": "Small anti-grinder D-lock. Measure the rack.",
  "kryptonite-evolution-mini-7": "Gold Mini with cable and a mount.",
  "abus-granit-xplus-540": "Long 300 mm shackle, pedal Diamond.",
  "kryptonite-new-york-fahgettaboudit-mini": "Thick Gold Mini. Heavy, no mount.",
  "kryptonite-new-york-fahgettaboudit-1410": "Gold chain for length, not for panniers.",
  "hiplok-dx1000": "Larger Hiplok anti-grinder D-lock — on our records, no full review yet.",
  "onguard-pitbull-dt-8005": "Gold Pitbull with a cable. Named as context only on this site.",
  "onguard-pitbull-std-8003": "Standard Gold Pitbull. Named as context only on this site.",
  "onguard-pitbull-ls-8002": "Long-shackle Gold Pitbull. Named as context only on this site.",
};

export function hookFor(product: Product): string {
  return catalogueHooks[product.slug] ?? `${product.brand} ${product.specs?.type ?? "lock"} on this site.`;
}

export const GHOST_NOTE =
  "Not reviewed yet. The OnGuard Pitbulls and the Hiplok DX1000 are real products. They do not have review pages on this site. DX1000 on our records: 112 × 205 mm, 2.75 kg.";

export const GHOST_NOTE_SHORT =
  "Not reviewed yet. The OnGuard Pitbulls and the Hiplok DX1000 are real products. They do not have review pages on this site.";
