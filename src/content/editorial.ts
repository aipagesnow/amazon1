import { Product } from "@/lib/products";

export type Faq = { q: string; a: string };

export type ReviewCopy = {
  hook: string;
  job: string;
  verdict: string;
  meta: string;
  subheads: string[];
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
    hook: "A strong D-lock that still weighs only 1.7 kg.",
    job: "Desk pick when the policy names Diamond and you will still carry 1.7 kg.",
    meta: "Litelok X1 review: Diamond grade for ordinary bikes and e-bikes, 1.7 kg, a shackle that fits most stands. A lock many insurers take seriously, at a weight you might still carry.",
    verdict:
      "On grade, weight, and fit alone, this is the Diamond desk shortlist for a higher-value bike you take out every day. Sold Secure Diamond — the higher UK lock grade — for both ordinary bikes and e-bikes, at 1.7 kg. That is light enough that people still commute with it, and high enough for many policies that have moved past Gold. The locking area is 101 × 197 mm, which is more usable than the compact anti-grinder Minis. The practical catch: no frame mount in the box we looked at, so you carry it in a bag or buy a mount separately.",
    subheads: [
      "Will it fit your bike stand?",
      "It does not come with a frame mount",
      "What the adverts say, and what the grade means",
      "Who should buy this instead of a Gold Mini",
    ],
    body: [
      "A lock only works if you take it with you. A heavy chain is often left at home, and a compact D-lock that will not close on the stand does not protect the bike either. The X1 sits between those two problems: Sold Secure Diamond, at a weight many commuters will still carry.",
      "The locking area — the space inside the shackle — is 101 × 197 mm. That is not huge, but it is bigger than the compact “Mini” locks we have reviewed. Measure your bike stand plus the tube of your frame. If a small lock already fails to close, do not assume this will close either — but it has a better chance than the Hiplok D1000 (92 × 155 mm).",
      "On the Amazon listing we looked at, the frame mount is sold separately. That is the practical problem. A strong lock left at home does not protect the bike. Budget for a mount or a bag, or be honest that you will carry 1.7 kg in your hand. If you already know you will skip anything that does not clip to the bike, the Evolution Mini-7 is the more realistic daily lock.",
      "Sold Secure is the UK group that tests bike locks. The grade here is Diamond, for ordinary bikes and for e-bikes. Maker claims about grinders and cut-times are advertising. Check the marking on the lock you buy, and your insurer’s approved list, before you spend the money.",
      "Buy this if Gold is not enough for the policy, or the bike is worth the extra weight, and you will still carry 1.7 kg. Skip it if a Gold Mini with a mount and a cable already meets the policy — that is the Evolution Mini-7, and it is the lock most weekday commuters will actually use. Skip it if you need a 300 mm shackle for a fat post; that is the ABUS 540, with the e-bike-grade caveat on that page.",
    ],
    bestFor: [
      "A bike you would hate to lose, parked in public",
      "E-bikes where the insurance asks for Diamond, including the e-bike version of that grade",
      "Riders who want a full-size D-lock, not a tiny compact one",
    ],
    skipIf: [
      "Gold grade is enough, and you want a cable and a frame mount in one box",
      "You need a long shackle to close around a fat post",
      "You will not buy a mount, and you will not carry 1.7 kg in a bag",
    ],
    good: [
      "Diamond grade for ordinary bikes and for e-bikes, on the same lock",
      "1.7 kg — in the range people still take to work",
      "The locking area is a decent size for an armoured D-lock",
      "Sold as armoured against grinders; the Sold Secure grade is Diamond, not a lab claim from us",
    ],
    bad: [
      "No frame mount in the box we looked at",
      "Only two keys listed",
      "No cable, so a quick-release front wheel still needs something else to hold it",
    ],
    change: "Include a frame mount in the box. The Diamond grade does not help if the lock is left at home.",
    faqs: [
      {
        q: "Is the Litelok X1 Sold Secure Diamond?",
        a: "Yes — Sold Secure Diamond for ordinary bikes and for e-bikes, on the listing we looked at. Check the marking on the lock you buy, and your insurer’s list.",
      },
      {
        q: "Will it fit my bike stand?",
        a: "The locking area is 101 × 197 mm. Measure the post plus the frame. A small lock that already fails may still fail. The ABUS 540 is the long D-lock we have reviewed.",
      },
      {
        q: "Did you try to cut it with a grinder?",
        a: "No. Diamond is Sold Secure’s higher bike grade, tested against a tougher tool set than Gold. It is not a promise against a battery grinder. Advertised cut-times are marketing.",
      },
      {
        q: "Is this the same as the X1 Moto?",
        a: "Litelok says the bicycle and moto X1 are the same lock, sold under two names. The UK listing we looked at is the X1 armoured D-lock.",
      },
      {
        q: "X1 or Hiplok D1000?",
        a: "Same Diamond grade. The X1 is 200 g lighter with a larger locking area (101 × 197 mm versus 92 × 155 mm). The D1000 is the compact lock sold as anti-grinder — only if you have measured the stand. Most people who need Diamond should start with the X1.",
      },
    ],
    altBest: "hiplok-d1000",
    altBestWhy: "You want Hiplok’s smaller lock that is sold as anti-grinder, and you have already measured the tight 92 × 155 mm locking area.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold grade is enough, and you want a cable and a frame mount in the same box.",
  },
  "hiplok-d1000": {
    hook: "A compact Diamond D-lock, sold as anti-grinder.",
    job: "Worth a look on high-theft streets — but only if the small shackle will actually close.",
    meta: "Hiplok D1000 review: Diamond grade, 1.9 kg, a compact shackle, no frame mount. Worth it if you have measured the stand. Skip it if Gold and a cable would do.",
    verdict:
      "Worth buying if you park in a known theft hotspot, your insurance wants Diamond, and you can lock through a 92 × 155 mm gap. It is 1.9 kg with no frame mount in the box we looked at. On grade and weight alone, it is a poor first lock for someone who already skips 1.6 kg. Fit is the deciding factor — if the shackle will not close, nothing else on the sheet matters.",
    subheads: [
      "Will it fit your bike stand?",
      "No frame mount, and it weighs 1.9 kg",
      "What the adverts say, and what the grade means",
      "D1000, DX1000, or the Litelok X1",
    ],
    body: [
      "This lock is sold on its anti-grinder design. It is not the easiest lock to live with. The locking area is Mini-sized, and it weighs more than a typical compact D-lock. Fit is the deciding factor. If the shackle will not close around your stand and your bike, nothing else on the spec sheet matters.",
      "92 × 155 mm is tight. Fat tyres, cargo bikes, and some UK bike stands will not take it. Measure the post plus the frame tube before you order. A product photo will not tell you. If a compact lock already fails on your rack, this one will not save you.",
      "There is no frame mount in the box we looked at. You would need to carry 1.9 kg in a bag, or leave it at home. That practical issue is as important as the weight itself. For a weekday commuter whose insurance still asks for Gold, the Evolution Mini-7 is the more practical lock: lighter, a mount, and a cable in the box.",
      "It is Diamond for ordinary bikes and Diamond for e-bikes. The two-cuts design is Hiplok’s own description. The Sold Secure grade is Diamond. We do not print cut-times. Diamond is a tougher Sold Secure test than Gold; it is not a promise that a battery grinder fails.",
      "Hiplok’s larger DX1000 (112 × 205 mm, 2.75 kg) is the sibling if the compact shackle is the problem, not the grade. It is also Diamond for ordinary bikes and for e-bikes, still with no frame mount, and 850 g heavier. If you wanted Diamond with a more usable locking area and 1.7 kg, that is the Litelok X1, not a thicker Mini. Buy the D1000 only after you have stood next to the rack with a tape measure.",
    ],
    bestFor: [
      "High-theft stands you have stood next to with a tape measure",
      "E-bikes where the insurance names the e-bike Diamond grade",
      "Riders who already know a compact D-lock closes on their stand",
    ],
    skipIf: [
      "You have not measured 92 × 155 mm and you ride a fat-tyre or cargo bike",
      "You will not carry nearly 2 kg with no frame mount",
      "Gold is enough and you want a cable in the box",
    ],
    good: [
      "Diamond for ordinary bikes and for e-bikes",
      "Sold as anti-grinder; the square shackle is Hiplok’s two-cut design",
      "1.9 kg is heavy for a bag, but it is not a 4.9 kg chain",
      "Three numbered keys listed",
    ],
    bad: [
      "92 × 155 mm will not close on a lot of real UK stands",
      "No frame mount in the box we looked at",
      "Heavier than the Litelok X1, for a smaller locking area",
    ],
    change:
      "The DX1000 exists if you need a larger locking area. For this compact lock, a frame mount in the box would make it easier to take every day.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "The D1000 has a 92 × 155 mm locking area and weighs 1.9 kg. The DX1000 has a 112 × 205 mm locking area and weighs 2.75 kg. Buy the one that closes on your stand. Do not guess from a product photo. Full DX1000 write-up: [Hiplok DX1000](/reviews/hiplok-dx1000).",
      },
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK household policies still ask for. Diamond is the higher bike grade. Read the wording you signed.",
      },
      {
        q: "Does it include a cable?",
        a: "Not in the box we looked at. The D-lock is the graded product. A cable is a second, usually ungraded, extra.",
      },
      {
        q: "D1000 or Litelok X1?",
        a: "Same Diamond grade for ordinary bikes and e-bikes. The X1 is lighter (1.7 kg) with a larger locking area. The D1000 is the compact lock sold as anti-grinder. Most people who have not measured a tiny shackle should start with the X1.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Same Diamond grade, a larger locking area, and 200 g lighter.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "You will actually carry it, Gold meets the policy, and you want a frame mount on the bike.",
  },
  "kryptonite-evolution-mini-7": {
    hook: "A Gold-grade compact D-lock with a frame mount and a cable.",
    job: "Desk pick for most UK Gold commutes — grade, weight, and a clip in the box.",
    meta: "Kryptonite Evolution Mini-7 review: Gold grade, 1.61 kg, a frame mount and a cable in the box. The cable is not Gold. The commute lock most people will actually carry.",
    verdict:
      "Worth it for a daily rider whose insurance asks for Sold Secure Gold, who wants a cable and a frame mount in one box, and who will not carry a 2 kg Diamond lock. The D-lock is Gold. The cable is not — Kryptonite says so. On grade, weight, and kit, it is the Gold commute lock on the desk shortlist from desk research. It is not the Diamond shortlist pick for a high-value e-bike in a known theft hotspot.",
    subheads: [
      "The cable is not Gold",
      "The locking area is small — measure the stand",
      "Gold is what many policies still ask for",
      "Mini-7 versus the New York Mini",
    ],
    body: [
      "This lock is built for daily commuting. It weighs 1.61 kg. It has a frame mount, three keys, and a loop cable in the box. Because it clips to the bike, you still have it with you at the stand. That is more security than a heavier Diamond lock left at home.",
      "The cable is the bit people get wrong. It is for a quick-release wheel, or a helmet, if you must. It is not Sold Secure Gold. If a listing photo makes the whole kit look approved, ignore the photo. The D-lock is the graded product. Do not lock the bike to the stand with the cable alone.",
      "The locking area is 83 × 178 mm. That is a compact Mini size. It will close on a lot of UK bike stands and fail on fat lamp-posts and some cargo bikes. Measure. If it will not close, look at the ABUS 540 (a 300 mm shackle) or a chain at home — not a thicker compact lock with an even smaller locking area.",
      "Gold is still the grade a lot of UK household cycle insurance names. Diamond is a higher grade, and some e-bike policies want the e-bike version of that grade. If that is you, this is the wrong lock. If Gold is what the policy asks for and you will carry 1.6 kg, this is the Gold commute lock on the desk shortlist. If you needed Gold with more reach than 83 × 178 mm, look at the Bordo 6500 — folding, 110 cm, heavier.",
      "The New York Fahgettaboudit Mini is the thicker sibling: 18 mm, 2.06 kg, no mount, no cable, still only Gold. People search it because of the name. Most commuters should buy this Evolution Mini-7 instead. The extra thickness is not a reason to carry an extra 450 g every day if the Sold Secure grade is the same.",
    ],
    bestFor: [
      "Weekday commuting where Gold meets the policy",
      "Riders who want a frame mount and a wheel cable without a second purchase",
      "Anyone who will skip a lock that does not clip onto the bike",
    ],
    skipIf: [
      "The street or the policy wants Diamond, or a lock sold as anti-grinder",
      "You need a larger locking area than 83 × 178 mm",
      "You already own a Gold D-lock and only needed a cable",
    ],
    good: [
      "Gold grade on the D-lock — the grade most UK household policies still name",
      "1.61 kg with a frame mount, so it is designed to live on the bike",
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
        a: "No. On Kryptonite’s Mini-7 notes, any cable supplied is not part of the Sold Secure approval. The D-lock is the graded product.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "Gold is what many UK policies still ask for. Diamond is the desk shortlist grade on a high-value e-bike when the policy names it. Check the wording you signed.",
      },
      {
        q: "Evolution Mini-7 or New York Mini?",
        a: "The New York Mini is 18 mm thick, weighs 2.06 kg, and has no mount and no cable. The Evolution Mini-7 is 13 mm thick, weighs 1.61 kg, and includes a frame mount and a cable. Both are Gold. Carry the Evolution unless you specifically want the thicker Mini as a second lock.",
      },
      {
        q: "What should I buy instead of the New York Mini?",
        a: "This lock, if you need Gold you will carry. Diamond: [Litelok X1](/reviews/litelok-x1). Extra length at home: the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410). Longer version: [alternatives to the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
      },
      {
        q: "Will it fit a Sheffield stand?",
        a: "Often yes, not always. The locking area is 83 × 178 mm. Measure the stand plus the frame tube. If a Mini already fails, look at the [ABUS 540](/reviews/abus-granit-xplus-540), not a thicker Mini.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Step up to Diamond and a larger locking area if the bike is worth the extra weight.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "The compact lock will not close, and you still want Diamond for an ordinary bike plus a frame mount.",
  },
  "abus-granit-xplus-540": {
    hook: "A long 300 mm D-lock for when a compact lock will not close.",
    job: "Diamond for ordinary bikes, and long enough for fat posts. Check the e-bike grade if you ride one.",
    meta: "ABUS Granit XPlus 540 review: Diamond for ordinary bikes, Gold for e-bikes, 108 × 300 mm, frame mount in the box. For stands a compact lock will not close. Not sold as anti-grinder.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "Worth it when a compact D-lock will not close on the stand and you still want Sold Secure Diamond for an ordinary bike, plus a frame mount. For e-bikes, the grade we have is Gold, not Diamond. So e-bike policies that insist on e-bike Diamond should look at the X1 or D1000 instead. It is 1.8 kg, with a 13 mm square shackle and a 108 × 300 mm locking area.",
    subheads: [
      "Fit is the reason to buy it",
      "Diamond for ordinary bikes, Gold for e-bikes",
      "Not sold as anti-grinder",
      "The longer shackle trade-off",
    ],
    body: [
      "Fit is part of security. A compact lock that will not close is zero protection. The 540 exists because UK street furniture is not all the same size. 108 × 300 mm is a long D-lock. It will close around posts that a Mini-7 cannot. That is the reason to buy it.",
      "On the lock we looked at, the ordinary-bike grade is Diamond and the e-bike grade is Gold. Those are different Sold Secure tests. If you ride an ordinary bike and the policy names Diamond, this lock is a real option. If you ride an e-bike and the policy names e-bike Diamond, it does not match — look at the X1 or the D1000.",
      "The frame mount is in the box we looked at. That matters. 1.8 kg on the frame is a lock you will still have with you in the morning. There is no cable in this box. Do not assume an ABUS cable kit from another product.",
      "It is not sold as angle-grinder resistant. Diamond is not a grinder-proof badge. If the anti-grinder marketing is why you are here, this is not the lock. If the compact lock will not fit, it might be.",
      "A longer shackle also gives a thief more room for a tool. Fill it as much as you can: frame plus rear wheel if they both fit, tight to the stand. Do not buy 300 mm because it looks more serious, then leave a big loop. If a Mini already closes on your stand, you do not need this length.",
    ],
    bestFor: [
      "Stands a compact D-lock cannot close around",
      "Ordinary bikes where Diamond is required and you want a frame mount",
      "Commuters who will actually put 1.8 kg on the frame",
    ],
    skipIf: [
      "Your e-bike policy wants the e-bike Diamond grade",
      "You want a lock sold as anti-grinder",
      "You need a cable in the same box",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes",
      "300 mm shackle — much longer than the compact locks",
      "Frame mount in the box we looked at",
      "1.8 kg is in the same band as the X1",
    ],
    bad: [
      "E-bike Sold Secure grade is Gold, not Diamond",
      "Not listed as angle-grinder resistant",
      "Only two keys in the spec",
    ],
    change:
      "State the e-bike grade in the same breath as the ordinary-bike grade. Too many pages only print the better number.",
    faqs: [
      {
        q: "Is the 540 Diamond or Gold?",
        a: "Diamond for ordinary bikes, Gold for e-bikes. Read both if you ride an e-bike.",
      },
      {
        q: "Why 300 mm?",
        a: "Longer shackles close around fatter posts. They also give a thief more room. Measure, then choose. Fill the shackle if you buy it.",
      },
      {
        q: "ABUS 540 or Litelok X1?",
        a: "The X1 is Diamond for e-bikes and sold as armoured, with a smaller locking area and no mount in the box. The 540 is the long shackle with a mount. Choose based on whether it will close on your stand, and on the grade your policy asks for.",
      },
      {
        q: "Is this a commute lock?",
        a: "At 1.8 kg with a frame mount, yes if it closes on your stand and the grade matches the policy. It is not the lock for an e-bike policy that wants powered Diamond.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "The e-bike Diamond grade matters more than shackle length.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold and a cable are enough, and you want less lock to carry.",
  },
  "kryptonite-new-york-fahgettaboudit-mini": {
    hook: "A thick 18 mm Gold compact D-lock. Heavy, and no frame mount.",
    job: "A thick Gold Mini. Most commuters should buy the Evolution Mini-7 instead.",
    meta: "Kryptonite New York Mini review: 18 mm Gold compact D-lock, 2.06 kg, no frame mount, no cable. A thick second lock. Most commuters should buy the Evolution Mini-7.",
    verdict:
      "Worth it as a small, thick Gold D-lock you leave on a heavy bike or at a regular stand. Not worth it as your only commute lock if 1.6 kg already feels like too much. This one is 2.06 kg, with a 83 × 153 mm locking area, no frame mount, and no cable. The Evolution Mini-7 is what most people should buy in this family.",
    subheads: [
      "Thickness versus what you will carry",
      "No frame mount and no cable",
      "Sold Secure Gold, not Diamond",
      "What most people should buy instead",
    ],
    body: [
      "The Fahgettaboudit name is branding. What you actually get is an 18 mm Gold compact D-lock with a smaller locking area than the Evolution Mini-7 and 450 g more steel. The extra thickness is why people look at it. The extra weight is why most commuters should choose something else.",
      "There is no frame mount in the box we looked at. There is no cable. You carry 2.06 kg in your hand, or you strap it somehow. Most commuters will not. Many people search this name, but most of them would be better with a lock they will actually take to work.",
      "83 × 153 mm is tighter than the Evolution’s 83 × 178 mm. If the Mini-7 already struggles on your stand, this will not save you. For extra length, the New York 1410 chain is the sibling — 100 cm, 4.9 kg, a home lock.",
      "Sold Secure Gold is still only Gold. Insurers who name that grade may accept it if the exact model is on their list. They look at the grade and the model, not at the New York name. Match the list. We do not keep one.",
      "If you need a lock you will carry, buy the Evolution Mini-7: same brand, Gold, 1.61 kg, a mount, a cable. If the policy wants Diamond, buy the Litelok X1, not a thicker Gold Mini. If you need length at home, buy the 1410 chain. Keep this Mini only as a second lock on a heavy bike you do not mind lugging 2 kg for.",
    ],
    bestFor: [
      "A second lock that lives in a pannier or on a heavy bike",
      "Riders who want the thickest compact Gold D-lock we have reviewed (18 mm)",
      "Pairing a New York chain with a New York D-lock at home",
    ],
    skipIf: [
      "You need a frame mount or a cable in the box",
      "You want Diamond, or a lock sold as anti-grinder",
      "You will only use a lock that clips to a bottle-cage boss",
    ],
    good: [
      "18 mm shackle — the thickest compact D-lock we have reviewed",
      "Sold Secure Gold on the ordinary-bike listing",
      "Compact 83 × 153 mm locking area, tight to the stand if it fits",
    ],
    bad: [
      "2.06 kg and no frame mount listed — a lot of loose steel",
      "Smaller locking area than the Evolution Mini-7",
      "No cable, not Diamond, not sold as angle-grinder resistant",
    ],
    change:
      "Add a frame mount, as the Evolution Mini-7 already has. A compact lock this heavy without a mount is likely to stay at home.",
    faqs: [
      {
        q: "New York Mini or Evolution Mini-7?",
        a: "The Evolution Mini-7 is 13 mm thick, weighs 1.61 kg, and includes a frame mount and a cable. The New York Mini is 18 mm thick, weighs 2.06 kg, and has no mount and no cable. Both are Gold. For most commuters, the lighter lock is the better daily choice.",
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
      "Worth it as a home, garden, or café-terrace lock when a D-lock will not reach the only solid object. Not worth it as the lock you take on the bike: 4.9 kg, no mount, and too heavy for a backpack commute. Sold Secure Gold applies to the approved product, not to any chain you loop twice. On weight alone, keep this at home, not on the bike.",
    subheads: [
      "Reach versus carry",
      "4.9 kg is the real weight",
      "Gold, and what looping twice does not do",
      "How to use it with a commute D-lock",
    ],
    body: [
      "A D-lock is for a tight stand. A chain is for extra length. That is why this lock does not belong on a best-commute-lock list. 100 cm of 14 mm New York chain will reach a ground anchor, a second bike, or a post a compact D-lock cannot close around. It is not a lock most people will carry to the station twice a day.",
      "4.9 kg is the listed weight, not a rounding error. If a listing photo looks much lighter, it is a different product. People buy this because they want New York on a chain. Use it as a home lock: through the frame and a rear wheel, to something that does not move, left in place or carried a few metres from the house.",
      "Gold is the ordinary-bike grade on the lock we looked at. Looping the chain twice does not make it Diamond, and it does not make an unapproved ground anchor into an approved one. If the policy names a grade, match the lock that is on Sold Secure’s list. If the policy also names a ground anchor, that is a separate product.",
      "The disc lock on the chain is part of the kit: three keys. There is no frame mount, because you would not want 4.9 kg on a down tube. Pair it with a D-lock you actually carry. For Gold commuters that is the Evolution Mini-7. If you need Diamond on the bike and the chain at home, pair it with the Litelok X1.",
      "At home, lock through the frame to something fixed — a ground anchor if the policy asks for one, not a wooden fence post. Take up slack. A long loop of Gold chain on a loose object is only as good as the object. Leave the chain where the bike lives overnight, and take the D-lock when you leave the house.",
    ],
    bestFor: [
      "Home, a garden, or a ground anchor",
      "A post or terrace railing a compact D-lock cannot close around",
      "A second layer with a D-lock — not a replacement for one on the commute",
    ],
    skipIf: [
      "You need something you will carry five miles to work",
      "You want Diamond, or a lock sold as anti-grinder",
      "You expected a lightweight chain",
    ],
    good: [
      "100 cm of 14 mm chain — reach a D-lock cannot match",
      "Sold Secure Gold on the ordinary-bike listing",
      "New York disc lock on the chain; three keys listed",
    ],
    bad: [
      "4.9 kg — useful at home, too heavy to commute with",
      "No frame mount, because you would not want one",
      "Not sold as angle-grinder resistant; grinders do not care about Gold the way bolt croppers do",
    ],
    change: "Call it a home chain in the title. Too many listings make it look like a commute lock.",
    faqs: [
      {
        q: "D-lock or chain?",
        a: "A D-lock is better for a tight stand on a commute. A chain is better when you need length. Many riders use both, and only carry the D-lock. That is the practical setup.",
      },
      {
        q: "Is 4.9 kg right?",
        a: "That is the listed weight for this 100 cm New York 1410 kit. If another listing looks far lighter, it is a different product.",
      },
      {
        q: "Can I use it on an e-bike?",
        a: "Yes, as a home or destination lock, if Gold meets the policy. Almost nobody will carry 4.9 kg as their only lock. For Diamond on an e-bike you still take to work, look at the X1.",
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
  "hiplok-dx1000": {
    hook: "The larger Hiplok anti-grinder D-lock. For stands the D1000 will not close on.",
    job: "Diamond for bikes and e-bikes at 2.75 kg, with a 112 × 205 mm shackle. The D1000’s bigger brother — still no frame mount.",
    meta: "Hiplok DX1000 review: Diamond for bikes and e-bikes, 2.75 kg, 112 × 205 mm, no mount. Bigger brother of the D1000. Measure the stand.",
    verdict:
      "Worth buying if you want Hiplok’s anti-grinder D-lock and the D1000’s 92 × 155 mm shackle will not close — e-bikes, cargo frames, fat tyres, fatter stands. Sold Secure Diamond for ordinary bikes and for e-bikes, 2.75 kg, 32 mm shackle, 112 × 205 mm locking area, three keys, no frame mount on the listing we looked at. That is 850 g more than the D1000, and more than a kilogram over the X1. Buy it for the extra room. Do not buy it because the name is louder.",
    subheads: [
      "Bigger than the D1000 — still measure",
      "2.75 kg and no frame mount",
      "What the adverts say, and what the grade means",
      "DX1000, D1000, or the Litelok X1",
    ],
    body: [
      "The DX1000 exists because the D1000 is too small for a lot of real bikes. Same Hiplok anti-grinder story, a larger locking area, and a weight you will notice. Fit is still the deciding factor. If 112 × 205 mm will not close around your stand and your frame, nothing else on the sheet matters.",
      "112 × 205 mm is a step up from the D1000’s 92 × 155 mm. It is in the same band as the X1 (101 × 197 mm), not in the band of a 300 mm shackle. Fat lamp-posts and some cargo racks will still beat it. Measure the post plus the tube. A product photo of an e-bike will not tell you. If you already know a compact lock fails and you need 292 mm or 300 mm, that is the Pitbull LS or the ABUS 540 — not a thicker Hiplok Mini.",
      "There is no frame mount in the box we looked at. You carry 2.75 kg in a bag, or you leave it at home. That is the practical problem, and it is larger than on the D1000. A Diamond lock on the kitchen floor does not protect the bike at the stand. If you already know you will skip anything that does not clip on, look at the Pitbull STD instead: Diamond for ordinary bikes, 1.44 kg, a mount in the box.",
      "It is Diamond for ordinary bikes and Diamond for e-bikes. The anti-grinder language is Hiplok’s. The Sold Secure grade is Diamond. We have not taken a grinder to it. Diamond is a tougher Sold Secure test than Gold; it is not a promise that a battery grinder fails. Check the marking on the lock you buy, and the insurer’s list.",
      "Buy the DX1000 after you have measured, and only if you specifically want this Hiplok. If you wanted Diamond you will still carry, at 1.7 kg, that is the X1. If 92 × 155 mm already closes, the D1000 is the lighter Hiplok. If you need a long shackle and a mount, the Pitbull LS or the 540 will close on posts this one will not.",
    ],
    bestFor: [
      "E-bikes, cargo bikes, and fatter stands that beat the D1000’s 92 × 155 mm",
      "Policies that name Diamond, including the e-bike grade",
      "Riders who want Hiplok’s anti-grinder D-lock and have already measured 112 × 205 mm",
    ],
    skipIf: [
      "You have not measured 112 × 205 mm, or you need a 300 mm shackle",
      "You will not carry 2.75 kg with no frame mount",
      "You wanted Diamond with a clip on the bike — that is the Pitbull STD",
    ],
    good: [
      "Diamond for ordinary bikes and for e-bikes",
      "Sold as anti-grinder; 32 mm shackle on the listing we looked at",
      "112 × 205 mm — more usable than the D1000 on e-bike and cargo frames",
      "Three numbered keys listed",
    ],
    bad: [
      "2.75 kg with no frame mount in the box we looked at",
      "Still not a long shackle: fat lamp-posts can beat 205 mm",
      "Heavier than the X1, for a similar locking area",
    ],
    change:
      "Put a frame mount in the box. At 2.75 kg this is the Hiplok most likely to stay in the hall.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "The D1000 is 92 × 155 mm and 1.9 kg. The DX1000 is 112 × 205 mm and 2.75 kg. Same Diamond grade for ordinary bikes and e-bikes, still no mount. Buy the one that closes. Full D1000 write-up: [Hiplok D1000](/reviews/hiplok-d1000).",
      },
      {
        q: "DX1000 or Litelok X1?",
        a: "Same Diamond grade for ordinary bikes and e-bikes. The X1 is 1.7 kg with a 101 × 197 mm locking area. The DX1000 is 2.75 kg with 112 × 205 mm, sold as anti-grinder. Most people who need Diamond they will still carry should start with the X1.",
      },
      {
        q: "Will it close on a lamp-post?",
        a: "Not always. 112 × 205 mm is larger than the D1000, not as long as the Pitbull LS (115 × 292 mm) or the ABUS 540 (108 × 300 mm). Measure. If a compact lock already fails on that post, do not assume this will close.",
      },
      {
        q: "Did you try to cut it with a grinder?",
        a: "No. Advertised cut-times are marketing. Diamond is Sold Secure’s higher bike grade, not a promise against a battery grinder.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Same Diamond grade, a similar locking area, and more than a kilogram lighter.",
    altSecond: "onguard-pitbull-ls-8002",
    altSecondWhy: "You need a longer shackle and a frame mount, not a heavier Hiplok Mini.",
  },
  "onguard-pitbull-std-8003": {
    hook: "A Diamond D-lock that actually clips to the frame.",
    job: "Sold Secure Diamond, 1.44 kg, 14 mm, a frame mount, no cable. Desk pick when you want Diamond that clips on.",
    meta: "OnGuard Pitbull STD 8003 review: Pedal Cycle Diamond, 1.44 kg, 14 mm, 115 × 230 mm, frame mount. Diamond you can clip on.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "Worth it if the policy names Diamond and you will skip any lock that does not clip to the bike. 1.44 kg, 14 mm shackle, 115 × 230 mm locking area, a frame mount, five keys, no cable. On our records the ordinary-bike grade is Diamond. We do not have an e-bike grade listed, so if the policy names powered Diamond, check Sold Secure and the insurer’s list before you treat this as an e-bike lock. It is not sold as anti-grinder. That is still the gap the X1 and the D1000 leave: Diamond with a mount, at a weight you will carry.",
    subheads: [
      "Diamond with a frame mount — that is the point",
      "115 × 230 mm is usable, not huge",
      "No cable, and no e-bike grade on our records",
      "STD, DT, or LS",
    ],
    body: [
      "The X1 and the D1000 are Diamond you carry in a bag. This is Diamond you clip on. 1.44 kg is lighter than the Mini-7. The mount is in the box we looked at. That combination is why it is on the best-of table: if you need Diamond and you already know you will not take a loose lock every morning, start here.",
      "The locking area is 115 × 230 mm. That is more generous than the Evolution Mini-7 (83 × 178 mm) and the D1000 (92 × 155 mm). It is not a 300 mm shackle. Measure the stand plus the frame tube. If a compact lock already fails on a fat lamp-post, look at the Pitbull LS (115 × 292 mm) or the ABUS 540 — not a thicker Mini with a smaller hole.",
      "There is no cable in this box. If you have a quick-release front wheel, you still need something else to hold it, or you buy the DT 8005, which is this shackle plus a cable. The cable on the DT is not Diamond. On our records we only have the ordinary-bike Sold Secure grade. We have not invented an e-bike grade. If you ride an e-bike and the policy names the powered grade, the X1 and the D1000 are Diamond for both on our records.",
      "It is a 14 mm shackle, not sold as angle-grinder resistant. Diamond is the grade. A 14 mm bar is not a 32 mm Hiplok. If anti-grinder marketing is why you are here, this is the wrong lock. If you wanted Gold with a cable and a mount, that is the Mini-7, and it is the lock most weekday commuters will actually use.",
      "The DT is the same 115 × 230 mm D-lock with a cable in the box — heavier, still a mount, cable not graded. The LS is the long 115 × 292 mm sibling for posts this one will not close on. Buy the STD unless you know you need the cable or the extra length.",
    ],
    bestFor: [
      "Diamond on a weekday commute, with a clip on the frame",
      "Ordinary bikes where the policy names Diamond and a Mini already closes on the stand",
      "Riders who will skip the X1 or D1000 because those boxes have no mount",
    ],
    skipIf: [
      "The policy names e-bike Diamond and you have not checked this model on Sold Secure",
      "You need a cable in the same box — that is the DT 8005",
      "You need a long shackle for a fat post — that is the LS 8002 or the ABUS 540",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes, on our records",
      "1.44 kg with a frame mount in the box we looked at",
      "115 × 230 mm — more room than the compact Minis",
      "Five keys listed",
    ],
    bad: [
      "No e-bike Sold Secure grade on our records",
      "No cable, not sold as angle-grinder resistant",
      "230 mm will not close on every fat post",
    ],
    change:
      "Print the ordinary-bike grade next to the e-bike line, even if the e-bike line is blank. Too many Diamond D-locks are sold as if every policy is the same.",
    faqs: [
      {
        q: "Is the Pitbull STD Sold Secure Diamond?",
        a: "Yes — Pedal Cycle Diamond on the listing we looked at. We do not have an e-bike grade recorded. Check the marking on the lock you buy, and your insurer’s list.",
      },
      {
        q: "STD or DT 8005?",
        a: "Same 14 mm shackle, same 115 × 230 mm locking area, same mount. The DT adds a cable and is listed at 1.6 kg. The cable is not Diamond. Buy the STD unless you want that cable in the box.",
      },
      {
        q: "Pitbull STD or Litelok X1?",
        a: "The X1 is Diamond for ordinary bikes and for e-bikes, 1.7 kg, sold as armoured, no mount in the box we looked at. The STD is Diamond for ordinary bikes, 1.44 kg, with a mount. Choose on the e-bike grade and on whether you will clip it on.",
      },
      {
        q: "Will it fit a Sheffield stand?",
        a: "Often yes. The locking area is 115 × 230 mm. Measure the stand plus the frame tube. If a Mini already fails, look at the [Pitbull LS](/reviews/onguard-pitbull-ls-8002) or the [ABUS 540](/reviews/abus-granit-xplus-540), not a thicker compact lock.",
      },
    ],
    altBest: "onguard-pitbull-dt-8005",
    altBestWhy: "Same Diamond D-lock, and you want a wheel cable in the box. The cable is not graded.",
    altSecond: "litelok-x1",
    altSecondWhy: "The policy names e-bike Diamond, or you want the armoured lock on the desk shortlist when you will still carry 1.7 kg in a bag.",
  },
  "onguard-pitbull-dt-8005": {
    hook: "The Pitbull with a cable in the box. The cable is not Diamond.",
    job: "Same 115 × 230 mm Diamond D-lock as the STD, plus a cable and a frame mount. The cable is not graded.",
    meta: "OnGuard Pitbull DT 8005 review: Pedal Cycle Diamond D-lock with a cable, 1.6 kg, 14 mm, 115 × 230 mm, mount. The cable is not graded.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "Buy this if you want the STD Pitbull’s Diamond D-lock and you also want a wheel cable in the same box. The D-lock is Sold Secure Diamond for ordinary bikes on our records. The cable is not part of that grade — same rule as the Mini-7’s cable. 1.6 kg, 14 mm, 115 × 230 mm, a frame mount, five keys. If you do not need the cable, the STD is lighter. Do not treat the cable as a second Diamond lock.",
    subheads: [
      "The cable is not Diamond",
      "Same shackle as the STD",
      "A mount in the box, at 1.6 kg",
      "DT, STD, or the Mini-7",
    ],
    body: [
      "This is the STD Pitbull with extras. The extras are why people pick it, and why they get the grade wrong. The D-lock is the graded product. The cable is a useful extra. If a listing photo makes the whole kit look approved, ignore the photo.",
      "The cable is for a quick-release wheel, or a helmet, if you must. It is not Sold Secure Diamond. Do not lock the bike to the stand with the cable alone and expect the policy to treat that as Diamond. Use the D-lock through the frame. Use the cable for the bit that is allowed to be ungraded.",
      "The shackle is the same 14 mm, 115 × 230 mm locking area as the STD 8003. Fit advice is the same: measure the stand plus the frame tube. If 230 mm already fails, the LS 8002 is the long Pitbull, not a thicker cable. On our records the ordinary-bike grade is Diamond. We do not have an e-bike grade listed.",
      "The frame mount is in the box we looked at. 1.6 kg on the bike is a lock you will still have in the morning. That is the Mini-7 argument, at Diamond instead of Gold, without pretending the cable is graded. Five keys listed. No anti-grinder claim on our records.",
      "If Gold is enough and you want a cable and a mount, the Evolution Mini-7 is the lock most UK commuters will actually use, and it is in the same weight band. If you need Diamond and you do not want the cable, buy the STD and skip 160 g. If you need Diamond for an e-bike policy, check this model on Sold Secure — the X1 is Diamond for both on our records.",
    ],
    bestFor: [
      "Diamond on the D-lock, plus a wheel cable, in one box",
      "Commuters who want a frame mount and will not buy a cable separately",
      "Quick-release front wheels, as long as the D-lock still holds the frame",
    ],
    skipIf: [
      "You do not need a cable — the STD is the same D-lock, lighter",
      "You were going to lock the bike with the cable alone",
      "The policy names e-bike Diamond and you have not checked this model",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes, on the D-lock",
      "Frame mount and a cable in the box we looked at",
      "Same 115 × 230 mm shackle as the STD",
      "Five keys listed",
    ],
    bad: [
      "The cable is not graded — it is not a second Diamond lock",
      "Heavier than the STD for extras you may not use",
      "No e-bike grade on our records; not sold as anti-grinder",
    ],
    change:
      "Print the cable warning on the box, in the same type as the Diamond badge. Too many kit photos still read as if the whole thing is approved.",
    faqs: [
      {
        q: "Is the cable Sold Secure Diamond?",
        a: "No. The D-lock is the graded product. Use the cable for a quick-release wheel. Lock the frame with the D-lock.",
      },
      {
        q: "DT or STD 8003?",
        a: "Same 14 mm shackle, same 115 × 230 mm locking area, same mount. The DT is listed at 1.6 kg with a cable. The STD is 1.44 kg with no cable. Buy the STD unless you want that cable in the box.",
      },
      {
        q: "Pitbull DT or Evolution Mini-7?",
        a: "The Mini-7 is Gold, 1.61 kg, a mount and a cable — and the cable is not Gold. The DT is Diamond on the D-lock, 1.6 kg, a mount and a cable — and the cable is not Diamond. If Gold meets the policy, most commuters should take the Mini-7.",
      },
      {
        q: "Will insurers treat the cable as Diamond?",
        a: "No. Match the graded D-lock to the policy, then use the cable as an extra. We do not keep a live insurer list.",
      },
    ],
    altBest: "onguard-pitbull-std-8003",
    altBestWhy: "Same Diamond D-lock and mount, without paying in weight for a cable you may not use.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold is enough, and you still want a cable and a clip in one box.",
  },
  "onguard-pitbull-ls-8002": {
    hook: "A long Diamond D-lock with a frame mount. For posts a Mini will not close on.",
    job: "Pedal Cycle Diamond, 115 × 292 mm, 1.75 kg, a frame mount. Fat-post reach without jumping to the ABUS 540.",
    meta: "OnGuard Pitbull LS 8002 review: Pedal Cycle Diamond, long 115 × 292 mm shackle, 1.75 kg, 14 mm, frame mount. For fat posts and cargo reach.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "Worth it when a compact Diamond will not close and you still want a mount. 115 × 292 mm is in the same band as the ABUS 540’s 108 × 300 mm. 1.75 kg, 14 mm, five keys, no cable, frame mount in the box we looked at. On our records the ordinary-bike grade is Diamond; we do not have an e-bike grade listed. The 540 is Diamond for ordinary bikes and Gold for e-bikes, with a slightly longer shackle. Pick this if you want the Pitbull mount-and-keys kit on a long shackle. Pick the 540 if that e-bike split matches the policy, or you specifically want the ABUS cylinder.",
    subheads: [
      "Fit is the reason to buy it",
      "Diamond for ordinary bikes — check e-bikes separately",
      "LS versus the ABUS 540",
      "The longer shackle trade-off",
    ],
    body: [
      "A compact lock that will not close is zero protection. The LS exists because UK street furniture is not all Mini-sized, and not everyone wants to jump to the ABUS 540. 115 × 292 mm will take posts the STD (115 × 230 mm) and the Mini-7 (83 × 178 mm) cannot. That is the reason to buy it.",
      "On our records the ordinary-bike grade is Diamond. We have not invented an e-bike grade. If you ride an ordinary bike and the policy names Diamond, this lock is a real option with a mount. If you ride an e-bike and the policy names powered Diamond, check Sold Secure — the X1, D1000 and DX1000 are Diamond for both on our records. The 540 is Diamond for ordinary bikes and Gold for e-bikes.",
      "The 540 is 108 × 300 mm, 1.8 kg, two keys, EaZy KF bracket, no cable. This LS is 115 × 292 mm, 1.75 kg, five keys, a mount, no cable. Neither is sold as anti-grinder. Neither is a chain. Choose on cylinder, keys, and the e-bike line — not on a millimetre of shackle you have not measured. If you wanted Hiplok’s larger anti-grinder lock, the DX1000 is 112 × 205 mm: more room than the D1000, not this much length.",
      "The frame mount is in the box we looked at. 1.75 kg on the frame is a lock you will still have with you. There is no cable. A longer shackle also gives a thief more room for a tool. Fill it: frame plus rear wheel if they both fit, tight to the stand. Do not buy 292 mm because it looks more serious, then leave a big loop.",
      "If a Mini already closes on your stand, you do not need this length — buy the STD, or the Mini-7 if Gold is enough. If you need a metre of chain at home, that is the New York 1410, not a long D-lock you commute with.",
    ],
    bestFor: [
      "Fat posts and cargo frames a 230 mm Pitbull will not close around",
      "Ordinary bikes that need Diamond and a frame mount",
      "Riders who want long-shackle reach without the ABUS 540",
    ],
    skipIf: [
      "A compact lock already closes — the STD is lighter",
      "The policy names e-bike Diamond and you have not checked this model",
      "You need a cable in the box, or a lock sold as anti-grinder",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes, on our records",
      "115 × 292 mm — in the same band as the 540",
      "Frame mount in the box we looked at, 1.75 kg",
      "Five keys listed",
    ],
    bad: [
      "No e-bike grade on our records",
      "No cable; not sold as angle-grinder resistant",
      "A long shackle is more room for a tool if you leave a loop",
    ],
    change:
      "Say, on the same line as the 292 mm, that a long shackle needs filling. Length is the feature and the weakness.",
    faqs: [
      {
        q: "Pitbull LS or ABUS 540?",
        a: "Both are long D-locks with a mount. The LS is 115 × 292 mm, 1.75 kg, five keys, Diamond for ordinary bikes on our records. The 540 is 108 × 300 mm, 1.8 kg, two keys, Diamond for ordinary bikes and Gold for e-bikes. Measure, then read the e-bike line on the policy.",
      },
      {
        q: "LS or STD 8003?",
        a: "Same 14 mm family, same mount, same ordinary-bike Diamond on our records. The STD is 115 × 230 mm at 1.44 kg. The LS is 115 × 292 mm at 1.75 kg. Buy the STD if a compact lock already closes. Buy the LS if it does not.",
      },
      {
        q: "Will it replace a chain at home?",
        a: "No. 292 mm is a long D-lock, not 100 cm of chain. For a ground anchor or a garden post, see the [New York 1410](/reviews/kryptonite-new-york-fahgettaboudit-1410).",
      },
      {
        q: "Is this anti-grinder?",
        a: "Not on our records. Diamond is the Sold Secure grade. If anti-grinder marketing is the reason you are shopping, look at the [X1](/reviews/litelok-x1) or the Hiploks — and still measure the stand.",
      },
    ],
    altBest: "abus-granit-xplus-540",
    altBestWhy: "A slightly longer shackle, and the e-bike grade is on the page: Diamond for ordinary bikes, Gold for e-bikes.",
    altSecond: "onguard-pitbull-std-8003",
    altSecondWhy: "A compact lock already closes, and you still want Diamond with a mount.",
  },
  "abus-bordo-granit-xplus-6500": {
    hook: "A Gold folding lock with a metre of reach and a frame bracket.",
    job: "Sold Secure Gold, 110 cm, 2.16 kg, SH bracket in the box. Flexible reach when a Mini will not close and you still want Gold on the bike.",
    meta: "ABUS Bordo Granit XPlus 6500 review: Sold Secure Gold folding lock, 2.16 kg, 110 cm, SH bracket. Flexible Gold when reach matters more than Mini-7 weight.",
    verdict:
      "Worth it if Gold meets the policy, a compact D-lock will not reach the only solid object, and you still want the lock on the bike rather than a 4.9 kg chain at home. 110 cm of folding bars, 2.16 kg, SH bracket on the listing we looked at, two keys. That is 550 g more than the Mini-7, and a different shape: 5.5 mm bars, not a 13 mm D-shackle. Gold is Gold; the shape is not Diamond. Desk shortlist the Mini-7 for a classic Gold commute that already closes. Desk shortlist this when the extra reach is the point.",
    subheads: [
      "Reach you can still clip on",
      "Gold, not Diamond — 5.5 mm bars",
      "Heavier than a Mini, lighter than a chain",
      "Bordo, Mini-7, or the 540",
    ],
    body: [
      "A D-lock is for a tight stand. A chain is for extra length you leave at home. A folding lock sits between those two jobs: more reach than a Mini, on the bike, if you will actually clip 2.16 kg in the SH bracket. 110 cm is in the same band as the New York 1410’s length, at less than half the weight, with a different Sold Secure test and a different shape.",
      "Sold Secure Gold is the ordinary-bike grade on the lock we looked at. We do not have an e-bike grade listed. The bars are 5.5 mm. That is not a 14 mm Pitbull and it is not a 32 mm Hiplok. Gold is still the grade a lot of UK household policies name. If the policy names Diamond, this is the wrong lock — look at the X1, a Pitbull, or a Hiplok. Maker talk about saw protection and security levels is ABUS’s. The grade we will stand behind is Gold.",
      "2.16 kg with an SH bracket is a commute lock only if you will fit the bracket and use it. That is a lot of lock on a down tube. If 1.6 kg already feels like too much, this will stay at home, and then you have bought a folding chain you do not carry. The Mini-7 is the lighter Gold lock with a clip and a cable.",
      "If the problem is a fat post and you still want a D-shackle, the ABUS 540 (108 × 300 mm) or the Pitbull LS (115 × 292 mm) are the long D-locks. The Bordo wins when the object is awkward — a tree guard, a railing, a second bike — and a rigid shackle will not snake through. It does not win on weight. It does not win on Diamond.",
      "Keep the 1410 chain at home if you need 14 mm Gold through a ground anchor. Take this Bordo when Gold is enough and the extra reach has to come with you. Do not commute with both.",
    ],
    bestFor: [
      "Gold policies where a Mini will not reach the only solid object",
      "Riders who want 110 cm of reach with an SH bracket, not a 4.9 kg chain",
      "Awkward street furniture a rigid D-lock cannot snake through",
    ],
    skipIf: [
      "A compact D-lock already closes — the Mini-7 is lighter",
      "The policy names Diamond",
      "You will not fit the SH bracket, and you will not carry 2.16 kg in a bag",
    ],
    good: [
      "Sold Secure Gold on the ordinary-bike listing",
      "110 cm of folding reach — more than any D-lock we have reviewed",
      "SH bracket in the box we looked at",
      "2.16 kg is heavy for a bag, but it is not a 4.9 kg chain",
    ],
    bad: [
      "Not Diamond; 5.5 mm bars, not a thick D-shackle",
      "Heavier than the Mini-7, with only two keys listed",
      "No cable; no e-bike grade on our records",
    ],
    change:
      "Call it a Gold reach lock in the title, not a substitute for Diamond. Too many folding-lock pages skip the grade and sell the fold.",
    faqs: [
      {
        q: "Bordo 6500 or Evolution Mini-7?",
        a: "The Mini-7 is Gold, 1.61 kg, a frame clip and a cable, 83 × 178 mm. The Bordo is Gold, 2.16 kg, an SH bracket, 110 cm of folding bars. If a Mini already closes, take the Mini-7. Take the Bordo when you need the reach.",
      },
      {
        q: "Bordo or ABUS 540?",
        a: "The 540 is a 300 mm D-lock, Diamond for ordinary bikes and Gold for e-bikes, 1.8 kg, with a mount. The Bordo is Gold, 110 cm, 2.16 kg, folding. Rigid long shackle versus flexible length. Measure the object.",
      },
      {
        q: "Is a folding lock as strong as a D-lock?",
        a: "Not as a class. Grade, thickness, and whether you use it all matter more than the fold. This Bordo is Gold with 5.5 mm bars. A Diamond D-lock is a different test. Read the policy, then pick the shape that closes.",
      },
      {
        q: "Can I commute with it?",
        a: "At 2.16 kg with an SH bracket, yes if Gold matches the policy and you will actually clip it on. It is not the lock for a Diamond line, and it is not a 4.9 kg home chain.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "Gold is enough, a Mini already closes, and you want less lock to carry.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "You need a long rigid shackle, and Diamond for an ordinary bike, rather than 110 cm of folding bars.",
  },
};

export const catalogueHooks: Record<string, string> = {
  "litelok-x1": "Our pick: Diamond grade you can still carry.",
  "hiplok-d1000": "Small anti-grinder D-lock. Measure the stand first.",
  "kryptonite-evolution-mini-7": "Gold compact lock with a cable and a frame mount.",
  "abus-granit-xplus-540": "Long 300 mm D-lock. Diamond for ordinary bikes.",
  "kryptonite-new-york-fahgettaboudit-mini": "Thick Gold compact lock. Heavy, no frame mount.",
  "kryptonite-new-york-fahgettaboudit-1410": "Gold chain for extra length at home, not commuting.",
  "hiplok-dx1000": "Larger Hiplok anti-grinder D-lock. Measure the stand first.",
  "onguard-pitbull-dt-8005": "Diamond Pitbull with a cable. The cable is not graded.",
  "onguard-pitbull-std-8003": "Diamond D-lock with a frame mount. No cable.",
  "onguard-pitbull-ls-8002": "Long-shackle Diamond Pitbull with a frame mount.",
  "abus-bordo-granit-xplus-6500": "Gold folding lock, 110 cm, with an SH bracket.",
};

export function hookFor(product: Product): string {
  return catalogueHooks[product.slug] ?? `${product.brand} ${product.specs?.type ?? "lock"}.`;
}
