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
    job: "The lock we would buy if the bike is expensive, and we still had to take the lock to work.",
    meta: "Litelok X1 review: Diamond grade for ordinary bikes and e-bikes, 1.7 kg, a shackle that fits most stands. A lock many insurers take seriously, at a weight you might still carry.",
    verdict:
      "If we were buying one lock to take every day on a higher-value bike, this would be it. Sold Secure Diamond — the higher UK lock grade — for both ordinary bikes and e-bikes, at 1.7 kg. That is light enough that people still commute with it, and high enough for many policies that have moved past Gold. The locking area is 101 × 197 mm, which is more usable than the compact anti-grinder Minis. The practical catch: no frame mount in the box we looked at, so you carry it in a bag or buy a mount separately.",
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
      "Worth buying if you park in a known theft hotspot, your insurance wants Diamond, and you can lock through a 92 × 155 mm gap. It is 1.9 kg with no frame mount in the box we looked at. We would not buy it as a first lock for someone who already skips 1.6 kg. Fit is the deciding factor — if the shackle will not close, nothing else on the sheet matters.",
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
      "Hiplok’s larger DX1000 (112 × 205 mm, 2.75 kg) is a real lock if the compact shackle is the problem, not the grade. We have not written a full review of it yet. If you wanted Diamond with a more usable locking area and 1.7 kg, that is the Litelok X1, not a thicker Mini. Buy the D1000 only after you have stood next to the rack with a tape measure.",
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
        a: "The D1000 has a 92 × 155 mm locking area and weighs 1.9 kg. The DX1000 has a 112 × 205 mm locking area and weighs 2.75 kg. Buy the one that closes on your stand. Do not guess from a product photo. We have not written a full review of the DX1000 yet.",
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
    job: "The lock we would buy for most UK commuters who need Gold.",
    meta: "Kryptonite Evolution Mini-7 review: Gold grade, 1.61 kg, a frame mount and a cable in the box. The cable is not Gold. The commute lock most people will actually carry.",
    verdict:
      "Worth it for a daily rider whose insurance asks for Sold Secure Gold, who wants a cable and a frame mount in one box, and who will not carry a 2 kg Diamond lock. The D-lock is Gold. The cable is not — Kryptonite says so. We would buy this for a mid-value commuter bike. We would not buy it as the only lock on a high-value e-bike in a known theft hotspot.",
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
      "Gold is still the grade a lot of UK household cycle insurance names. Diamond is a higher grade, and some e-bike policies want the e-bike version of that grade. If that is you, this is the wrong lock. If Gold is what the policy asks for and you will carry 1.6 kg, this is the right one of the six we have reviewed.",
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
        a: "Gold is what many UK policies still ask for. Diamond is what we would look for on a high-value e-bike. Check the wording you signed.",
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
      "Worth it as a home, garden, or café-terrace lock when a D-lock will not reach the only solid object. Not worth it as the lock you take on the bike: 4.9 kg, no mount, and too heavy for a backpack commute. Sold Secure Gold applies to the approved product, not to any chain you loop twice. We would keep this at home, not on the bike.",
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
};

export const catalogueHooks: Record<string, string> = {
  "litelok-x1": "Our pick: Diamond grade you can still carry.",
  "hiplok-d1000": "Small anti-grinder D-lock. Measure the stand first.",
  "kryptonite-evolution-mini-7": "Gold compact lock with a cable and a frame mount.",
  "abus-granit-xplus-540": "Long 300 mm D-lock. Diamond for ordinary bikes.",
  "kryptonite-new-york-fahgettaboudit-mini": "Thick Gold compact lock. Heavy, no frame mount.",
  "kryptonite-new-york-fahgettaboudit-1410": "Gold chain for extra length at home, not commuting.",
  "hiplok-dx1000": "Larger Hiplok anti-grinder D-lock. We have not written a full review yet.",
  "onguard-pitbull-dt-8005": "Gold Pitbull with a cable.",
  "onguard-pitbull-std-8003": "Standard Gold Pitbull.",
  "onguard-pitbull-ls-8002": "Long shackle Gold Pitbull.",
};

export function hookFor(product: Product): string {
  return catalogueHooks[product.slug] ?? `${product.brand} ${product.specs?.type ?? "lock"}.`;
}

export const GHOST_NOTE =
  "We have not written full reviews of the OnGuard Pitbulls or the Hiplok DX1000 yet. They are real locks. The DX1000 is the larger Hiplok: 112 × 205 mm locking area, 2.75 kg.";

export const GHOST_NOTE_SHORT =
  "We have not written full reviews of the OnGuard Pitbulls or the Hiplok DX1000 yet. They are real locks.";
