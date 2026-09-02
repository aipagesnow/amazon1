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
    hook: "A strong U-shaped lock that still weighs only 1.7 kg.",
    job: "The lock we would buy if the bike is expensive, and we still had to take the lock to work.",
    meta: "Litelok X1 review: Diamond grade for ordinary bikes and e-bikes, 1.7 kg, a usable hole. A lock many insurers take seriously, at a weight you might still carry.",
    verdict:
      "If we were buying one lock to take every day, this would be it. It has Sold Secure Diamond — the higher UK lock grade — for both ordinary bikes and e-bikes. It weighs 1.7 kg, which is light enough that people still commute with it. We have not cut one open. This review is based on the spec, the official grade, and what the maker says.",
    subheads: ["Will it fit your bike stand?", "It does not come with a clip for the bike", "What the adverts say, and what the grade means"],
    body: [
      "A lock only works if you take it with you. A heavy chain often stays by the door. A tiny U-lock that will not close on the stand is no use either. The X1 sits in the middle: a high official grade, and light enough that a commuter might still take it.",
      "The hole in the lock is 101 × 197 mm. That is not huge, but it is bigger than the small “Mini” locks on this site. Measure your bike stand plus the tube of your frame. If a small lock already fails to close, do not assume this will close either — but it has a better chance than the compact anti-grinder locks.",
      "On this Amazon listing, the clip that holds the lock on the bike is sold separately. That is the practical problem. A strong lock left at home does not protect the bike. Budget for a clip or a bag, or be honest that you will carry 1.7 kg in your hand.",
      "Sold Secure is a UK group that tests bike locks and gives them a grade. The independent grade here is Diamond, for ordinary bikes and for e-bikes. Maker claims about grinders and cut-times are advertising. Check the marking on the lock you buy, and your insurer’s approved list, before you spend the money.",
    ],
    bestFor: [
      "A bike you would hate to lose, parked in public",
      "E-bikes where the insurance asks for Diamond, including the e-bike version of that grade",
      "Riders who want a full-size U-lock, not a tiny compact one",
    ],
    skipIf: [
      "Gold grade is enough, and you want a cable and a bike clip in one box",
      "You need a long U-bar to close around a fat post",
      "You will not buy a clip, and you will not carry 1.7 kg in a bag",
    ],
    good: [
      "Diamond grade for ordinary bikes and for e-bikes, on the same lock",
      "1.7 kg — in the range people still take to work",
      "The hole is a decent size for an armoured U-lock",
      "Sold as armoured against grinders; the independent grade is Diamond, not a lab claim from us",
    ],
    bad: [
      "No bike clip in the box on this listing",
      "Only two keys listed",
      "No cable, so a quick-release front wheel still needs something else to hold it",
    ],
    change: "Put a bike clip in the box. The grade does not help if the lock stays at home.",
    faqs: [
      {
        q: "Is the Litelok X1 Sold Secure Diamond?",
        a: "Yes, on the spec we have — for ordinary bikes and for e-bikes. Check the marking on the lock you buy, and your insurer’s list. We do not keep a live list of every insurer.",
      },
      {
        q: "Will it fit my bike stand?",
        a: "The hole is 101 × 197 mm. Measure the post plus the frame. A small lock that already fails may still fail. The ABUS 540 is the long U-lock on this site.",
      },
      {
        q: "Did you try to cut it with a grinder?",
        a: "No. We do not run lab tests. Diamond is Sold Secure’s higher bike grade. Advertised cut-times are marketing, not independent tests.",
      },
      {
        q: "Is this the same as the X1 Moto?",
        a: "Litelok says the bicycle and moto X1 are the same lock, sold under two names. This UK listing is the X1 armoured U-lock.",
      },
    ],
    altBest: "hiplok-d1000",
    altBestWhy: "You want Hiplok’s smaller lock that is sold as anti-grinder, and you have already measured the tight 92 × 155 mm hole.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold grade is enough, and you want a cable and a bike clip in the same box.",
  },
  "hiplok-d1000": {
    hook: "A compact Diamond U-lock, sold as anti-grinder.",
    job: "Worth a look on high-theft streets — but only if the small U-bar will actually close.",
    meta: "Hiplok D1000 review: Diamond grade, 1.9 kg, a very small hole, no bike clip. Worth it if you have measured the stand. Skip it if Gold and a cable would do.",
    verdict:
      "Worth buying if you park in a known theft hotspot, your insurance wants Diamond, and you can lock through a 92 × 155 mm gap. It is 1.9 kg with no clip to hold it on the bike. We would not buy it as a first lock for someone who already skips 1.6 kg. We have not tried to cut one. The Diamond grades are on the spec.",
    subheads: ["Will it fit your bike stand?", "No clip, and it weighs 1.9 kg", "What the adverts say, and what the grade means"],
    body: [
      "This lock is sold on its anti-grinder design. It is not the easiest lock to live with. The hole is Mini-sized — small — and it weighs more than a typical compact U-lock. Fit is the deciding factor. If the U-bar will not close around your stand and your bike, nothing else on the spec sheet matters.",
      "92 × 155 mm is tight. Fat tyres, cargo bikes, and some UK bike stands will not take it. Hiplok’s larger DX1000 (112 × 205 mm, 2.75 kg) is a real lock, but we have not written a full review of it yet. Look at that sibling if the small hole is the problem, not the grade.",
      "There is no bike clip on the spec we have. You carry 1.9 kg in a bag, or you leave it at home. That is as important as the weight itself. For a weekday commuter whose insurance still asks for Gold, the Evolution Mini-7 is the more practical lock.",
      "It is Diamond for ordinary bikes and Diamond for e-bikes. The two-cuts design story is Hiplok’s. The independent grade is Diamond. We do not print cut-times.",
    ],
    bestFor: [
      "High-theft stands you have stood next to with a tape measure",
      "E-bikes where the insurance names the e-bike Diamond grade",
      "Riders who already know a small U-lock closes on their stand",
    ],
    skipIf: [
      "You have not measured 92 × 155 mm and you ride a fat-tyre or cargo bike",
      "You will not carry nearly 2 kg with no clip",
      "Gold is enough and you want a cable in the box",
    ],
    good: [
      "Diamond for ordinary bikes and for e-bikes",
      "Sold as anti-grinder; square U-bar is Hiplok’s two-cut design",
      "1.9 kg is heavy for a bag, but it is not a 4.9 kg chain",
      "Three numbered keys listed",
    ],
    bad: [
      "92 × 155 mm will not close on a lot of real UK stands",
      "No bike clip on the spec we have",
      "Heavier than the Litelok X1, for a smaller hole",
    ],
    change:
      "The DX1000 exists if you need a bigger hole. For this compact lock, a clip in the box would make it easier to take every day.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "D1000: 92 × 155 mm hole, 1.9 kg. DX1000: 112 × 205 mm, 2.75 kg. Buy the one that closes. Do not guess. We have not written a full review of the DX1000 yet.",
      },
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK home policies still ask for. Diamond is the higher bike grade. Read the wording you signed. We are not your insurance broker.",
      },
      {
        q: "Does it include a cable?",
        a: "Not on this listing. The U-lock is the graded product. A cable is a second, usually ungraded, extra.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Same Diamond grade, a bigger hole, and 200 g lighter.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "You will actually carry it, Gold meets the policy, and you want a clip on the bike.",
  },
  "kryptonite-evolution-mini-7": {
    hook: "A Gold-grade compact U-lock with a bike clip and a cable.",
    job: "The lock we would buy for most UK commuters who need Gold.",
    meta: "Kryptonite Evolution Mini-7 review: Gold grade, 1.61 kg, a clip and a cable in the box. The cable is not Gold. The commute lock most people will actually carry.",
    verdict:
      "Worth it for a daily rider whose insurance asks for Sold Secure Gold, who wants a cable and a clip in one box, and who will not carry a 2 kg Diamond lock. The U-lock is Gold. The cable is not — Kryptonite says so. We would buy this for a mid-value commuter bike. We would not buy it as the only lock on a high-value e-bike in a known theft hotspot.",
    subheads: ["The cable is not Gold", "The hole is small — measure the stand", "Gold is what many policies still ask for"],
    body: [
      "This lock is built for daily commuting. It weighs 1.61 kg. It has a clip that holds it on the bike, three keys, and a loop cable in the box. Because it clips to the bike, you still have it with you at the stand. That is more security than a heavier Diamond lock left at home.",
      "The cable is the bit people get wrong. It is for a quick-release wheel, or a helmet, if you must. It is not Sold Secure Gold. If a listing photo makes the whole kit look approved, ignore the photo. The U-lock is the graded product.",
      "The hole is 83 × 178 mm. That is a compact “Mini” size. It will close on a lot of UK bike stands and fail on fat lamp-posts and some cargo bikes. Measure. If it will not close, look at the ABUS 540 (a 300 mm U-bar) or a chain at home — not a thicker compact lock with an even smaller hole.",
      "Gold is still the grade a lot of UK home bike insurance names. Diamond is a higher grade, and some e-bike policies want the e-bike version of that grade. If that is you, this is the wrong lock. If Gold is what the policy asks for and you will carry 1.6 kg, this is the right one on this site.",
    ],
    bestFor: [
      "Weekday commuting where Gold meets the policy",
      "Riders who want a bike clip and a wheel cable without a second purchase",
      "Anyone who will skip a lock that does not clip onto the bike",
    ],
    skipIf: [
      "The street or the policy wants Diamond, or a lock sold as anti-grinder",
      "You need a larger hole than 83 × 178 mm",
      "You already own a Gold U-lock and only needed a cable",
    ],
    good: [
      "Gold grade on the U-lock — the grade most UK home policies still name",
      "1.61 kg with a bike clip, so it is designed to live on the bike",
      "Cable in the box for a quick-release wheel (the cable is not graded)",
      "Three keys, including the usual lighted key on Kryptonite Mini kits",
    ],
    bad: [
      "Not Diamond, and not sold as angle-grinder resistant",
      "Compact size: 83 × 178 mm will not close on every post",
      "The cable is a convenience, not a second Gold lock",
    ],
    change: "Print the cable warning larger. Too many listings still read as if the whole kit is Gold.",
    faqs: [
      {
        q: "Is the cable Sold Secure Gold?",
        a: "No. On Kryptonite’s Mini-7 notes, any cable supplied is not part of the Sold Secure approval. The U-lock is the graded product.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "Gold is what many UK policies still ask for. Diamond is what we would look for on a high-value e-bike. Check the wording you signed.",
      },
      {
        q: "Evolution Mini-7 or New York Mini?",
        a: "New York Mini: 18 mm thick, 2.06 kg, no clip, no cable, Gold. Evolution: 13 mm thick, 1.61 kg, clip, cable, Gold. Carry the Evolution unless you specifically want the thicker Mini as a second lock.",
      },
      {
        q: "What should I buy instead of the New York Mini?",
        a: "This lock, if you need Gold you will carry. Diamond: [Litelok X1](/reviews/litelok-x1). Extra length at home: the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410). Longer version: [alternatives to the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Step up to Diamond and a larger hole if the bike is worth the extra weight.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "The compact lock will not close, and you still want Diamond for an ordinary bike plus a clip.",
  },
  "abus-granit-xplus-540": {
    hook: "A long 300 mm U-lock for when a compact lock will not close.",
    job: "Diamond for ordinary bikes, and long enough for fat posts. Check the e-bike grade if you ride one.",
    meta: "ABUS Granit XPlus 540 review: Diamond for ordinary bikes, Gold for e-bikes, 108 × 300 mm, clip in the box. For stands a compact lock will not close. Not sold as anti-grinder.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "Worth it when a compact U-lock will not close on the stand and you still want Sold Secure Diamond for an ordinary bike, plus a clip. The e-bike grade on the spec we have is Gold, not Diamond. So e-bike policies that insist on e-bike Diamond should look at the X1 or D1000 instead. It is 1.8 kg, with a 13 mm square U-bar and a 108 × 300 mm hole. We have not lab-tested it.",
    subheads: ["Fit is the reason to buy it", "Diamond for ordinary bikes, Gold for e-bikes", "Not sold as anti-grinder"],
    body: [
      "Fit is part of security. A compact lock that will not close is zero protection. The 540 exists because UK street furniture is not all the same size. 108 × 300 mm is a long U-lock. It will close around posts that a Mini-7 cannot. It also leaves more room for a thief’s tool. That is the trade-off.",
      "On the spec we have, the ordinary-bike grade is Diamond and the e-bike grade is Gold. Those are different Sold Secure tests. If you ride an ordinary bike and the policy names Diamond, this lock is a real option. If you ride an e-bike and the policy names the e-bike Diamond grade, it is the wrong way round — look at the X1 or the D1000.",
      "The bike clip is in the box on this listing. That matters. 1.8 kg on the frame is a lock you will still have with you in the morning. There is no cable in this listing. Do not assume an ABUS cable kit from another product.",
      "It is not sold as angle-grinder resistant. Diamond is not a grinder-proof badge. If the anti-grinder marketing is why you are here, this is not the lock. If the compact lock will not fit, it might be.",
    ],
    bestFor: [
      "Stands a compact lock cannot close around",
      "Ordinary bikes where Diamond is required and you want a clip",
      "Commuters who will actually put 1.8 kg on the frame",
    ],
    skipIf: [
      "Your e-bike policy wants the e-bike Diamond grade",
      "You want a lock sold as anti-grinder",
      "You need a cable in the same box",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes",
      "300 mm U-bar — much longer than the compact locks",
      "Bike clip listed on this Amazon listing",
      "1.8 kg is in the same band as the X1",
    ],
    bad: [
      "E-bike Sold Secure on the spec we have is Gold, not Diamond",
      "Not listed as angle-grinder resistant",
      "Only two keys in the spec",
    ],
    change:
      "State the e-bike grade in the same breath as the ordinary-bike grade. Too many pages only print the better number.",
    faqs: [
      {
        q: "Is the 540 Diamond or Gold?",
        a: "On the spec we have: Diamond for ordinary bikes, Gold for e-bikes. Read both if you ride an e-bike.",
      },
      {
        q: "Why 300 mm?",
        a: "Longer U-bars close around fatter posts. They also give a thief more room. Measure, then choose.",
      },
      {
        q: "ABUS 540 or Litelok X1?",
        a: "The X1 is Diamond for e-bikes and sold as armoured, with a smaller hole and no clip in the box. The 540 is the long U-bar with a clip. Fit and policy first.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "The e-bike Diamond grade matters more than U-bar length.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold and a cable are enough, and you want less lock to carry.",
  },
  "kryptonite-new-york-fahgettaboudit-mini": {
    hook: "A thick 18 mm Gold compact lock. Heavy, and no clip.",
    job: "A thick Gold Mini. Most commuters should buy the Evolution Mini-7 instead.",
    meta: "Kryptonite New York Mini review: 18 mm Gold compact U-lock, 2.06 kg, no clip, no cable. A thick second lock. Most commuters should buy the Evolution Mini-7.",
    verdict:
      "Worth it as a small, thick Gold U-lock you leave on a heavy bike or at a regular stand. Not worth it as your only commute lock if 1.6 kg already feels like too much. This one is 2.06 kg, with a 83 × 153 mm hole, no clip, and no cable. The Evolution Mini-7 is what most people should buy in this family.",
    subheads: ["Thickness versus what you will carry", "No clip and no cable", "Sold Secure Gold, not Diamond"],
    body: [
      "The Fahgettaboudit name is marketing. What you actually get is an 18 mm Gold compact U-lock with a smaller hole than the Evolution Mini-7 and 450 g more steel. Thickness is the selling point. Weight is the problem.",
      "There is no bike clip on the spec we have. There is no cable. You carry 2.06 kg in your hand, or you strap it somehow. Most commuters will not. The name people search is not the lock most of them will actually take to work.",
      "83 × 153 mm is tighter than the Evolution’s 83 × 178 mm. If the Mini-7 already struggles on your stand, this will not save you. For extra length, the New York 1410 chain is the sibling — 100 cm, 4.9 kg, a home lock.",
      "Sold Secure Gold is still only Gold. Insurers who name that grade may accept it if the exact model is on their list. They will not care that it says New York. Match the list. We do not keep one.",
    ],
    bestFor: [
      "A second lock that lives in a pannier or on a heavy bike",
      "Riders who want the thickest compact Gold U-bar on this site (18 mm)",
      "Pairing a New York chain with a New York U-lock at home",
    ],
    skipIf: [
      "You need a clip or a cable in the box",
      "You want Diamond, or a lock sold as anti-grinder",
      "You will only use a lock that clips to a bottle-cage boss",
    ],
    good: [
      "18 mm U-bar — the thickest compact D-lock on this site",
      "Sold Secure Gold on the ordinary-bike spec we have",
      "Compact 83 × 153 mm hole, tight to the stand if it fits",
    ],
    bad: [
      "2.06 kg and no bike clip listed — a lot of loose steel",
      "Smaller hole than the Evolution Mini-7",
      "No cable, not Diamond, not sold as angle-grinder resistant",
    ],
    change:
      "Add a bike clip, as the Evolution Mini-7 already has. A compact lock this heavy without a clip often stays at home.",
    faqs: [
      {
        q: "New York Mini or Evolution Mini-7?",
        a: "Evolution: 13 mm thick, 1.61 kg, clip, cable, Gold. New York Mini: 18 mm thick, 2.06 kg, no clip, no cable, Gold. That is carry versus thickness.",
      },
      {
        q: "What should I buy instead?",
        a: "If you need a lock you will carry, the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7). If you need Diamond, the [Litelok X1](/reviews/litelok-x1). If you need extra length at home, the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410). The longer version is [Instead of the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
      },
      {
        q: "Will insurers accept it?",
        a: "Gold is widely named. Always match the exact model to your insurer’s list. We do not keep a live list.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "Same brand, Gold, and you will actually carry it.",
    altSecond: "litelok-x1",
    altSecondWhy: "You were buying New York for maximum thickness, and the policy would rather see Diamond.",
    relatedWell: {
      href: "/alternatives/kryptonite-new-york-fahgettaboudit-mini",
      title: "Instead of the New York Mini",
      blurb: "Carry Gold, step up to Diamond, or keep a chain at home. This Mini is usually the wrong commute lock.",
    },
  },
  "kryptonite-new-york-fahgettaboudit-1410": {
    hook: "A Gold-grade chain, 100 cm long. For home, not commuting.",
    job: "A 4.9 kg chain for extra length at home. Do not commute with it.",
    meta: "Kryptonite New York 1410 chain review: 100 cm, 14 mm, 4.9 kg, Gold grade. A home or terrace chain. Not a commute lock.",
    verdict:
      "Worth it as a home, garden, or café-terrace lock when a U-lock will not reach the only solid object. Not worth it as the lock you take on the bike: 4.9 kg, no clip, and too heavy for a backpack commute. Sold Secure Gold applies to the approved product, not to any chain you loop twice. We would keep this next to the door.",
    subheads: ["Reach versus carry", "4.9 kg is the real weight", "Gold, and what looping twice does not do"],
    body: [
      "A U-lock is for a tight stand. A chain is for extra length. That is why this lock does not belong on a best-commute-lock list. 100 cm of 14 mm New York chain will reach a ground anchor, a second bike, or a post a compact U-lock cannot close around. It will not come with you to the station twice a day.",
      "4.9 kg is not a typo. It is the product. If a listing photo looks like a bag chain, it is a different product. People buy this because they want New York on a chain. Use it as a home lock: through the frame and a rear wheel, to something that does not move, left in place or carried a few metres from the house.",
      "Gold is the ordinary-bike grade on the spec we have. Looping the chain twice does not make it Diamond, and it does not make an unapproved ground anchor into an approved one. If the policy names a grade, match the lock that is on Sold Secure’s list. If the policy also names a ground anchor, that is a separate product — not this page.",
      "The disc lock on the chain is part of the kit: three keys. There is no bike clip, because you would not want 4.9 kg on a down tube. Pair it with a U-lock you actually carry. On this site that is the Evolution Mini-7 for Gold commuters, or the X1 if you need Diamond on the bike and the chain at home.",
    ],
    bestFor: [
      "Home, a garden, or a ground anchor",
      "A post or terrace railing a compact U-lock cannot close around",
      "A second layer with a U-lock — not a replacement for one on the commute",
    ],
    skipIf: [
      "You need something you will carry five miles to work",
      "You want Diamond, or a lock sold as anti-grinder",
      "You expected a lightweight chain",
    ],
    good: [
      "100 cm of 14 mm chain — reach a U-lock cannot match",
      "Sold Secure Gold on the ordinary-bike spec we have",
      "New York disc lock on the chain; three keys listed",
    ],
    bad: [
      "4.9 kg — useful at home, too heavy to commute with",
      "No bike clip, because you would not want one",
      "Not sold as angle-grinder resistant; grinders do not care about Gold the way bolt croppers do",
    ],
    change: "Call it a home chain in the title. Too many listings make it look like a commute lock.",
    faqs: [
      {
        q: "U-lock or chain?",
        a: "U-lock (a D-lock) for a tight stand on a commute. Chain when you need length. Many riders use both, and only carry the U-lock. That is the practical setup.",
      },
      {
        q: "Is 4.9 kg right?",
        a: "That is the weight on the spec we have for this 100 cm New York 1410 kit. If a listing looks far lighter, it is a different product.",
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
    altSecondWhy: "You wanted a serious lock you still have to carry. Diamond, 1.7 kg, on the bike.",
  },
};

export const catalogueHooks: Record<string, string> = {
  "litelok-x1": "Our pick: Diamond grade you can still carry.",
  "hiplok-d1000": "Small anti-grinder U-lock. Measure the stand first.",
  "kryptonite-evolution-mini-7": "Gold compact lock with a cable and a clip.",
  "abus-granit-xplus-540": "Long 300 mm U-bar. Diamond for ordinary bikes.",
  "kryptonite-new-york-fahgettaboudit-mini": "Thick Gold compact lock. Heavy, no clip.",
  "kryptonite-new-york-fahgettaboudit-1410": "Gold chain for extra length at home, not commuting.",
  "hiplok-dx1000": "Larger Hiplok anti-grinder U-lock — on the spec we have, no full review yet.",
  "onguard-pitbull-dt-8005": "Gold Pitbull with a cable. Named as context only on this site.",
  "onguard-pitbull-std-8003": "Standard Gold Pitbull. Named as context only on this site.",
  "onguard-pitbull-ls-8002": "Long U-bar Gold Pitbull. Named as context only on this site.",
};

export function hookFor(product: Product): string {
  return catalogueHooks[product.slug] ?? `${product.brand} ${product.specs?.type ?? "lock"} on this site.`;
}

export const GHOST_NOTE =
  "We have not written full reviews of the OnGuard Pitbulls or the Hiplok DX1000 yet. They are real locks. The DX1000 is the larger Hiplok: 112 × 205 mm hole, 2.75 kg.";

export const GHOST_NOTE_SHORT =
  "We have not written full reviews of the OnGuard Pitbulls or the Hiplok DX1000 yet. They are real locks.";
