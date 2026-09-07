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
    hook: "A Sold Secure Diamond D-lock that weighs 1.7kg.",
    job: "When the policy names Diamond and you still need a weekday carry, start here — about 1.7kg.",
    meta: "Litelok X1 review: Sold Secure Diamond for ordinary bikes and e-bikes, 1.7kg, 101 × 197 mm locking area. Based on published grades and specs, not a cut test.",
    verdict:
      "The X1 is Sold Secure Diamond for ordinary bikes and for e-bikes. It weighs 1.7kg and has a 101 × 197 mm locking area. It fits when your insurance requires Diamond and you regularly leave an expensive bike in public. If Gold is enough for your policy, the extra weight may not be worthwhile — and the Evolution Mini-7 adds a clip and a cable in one kit. There is no frame mount in the box we looked at, so you will need a bag or a separate mount.",
    subheads: [
      "Locking area and whether it will close",
      "No frame mount in the box we looked at",
      "What Sold Secure Diamond means here",
      "When a Gold Mini is enough instead",
    ],
    body: [
      "Sold Secure lists this lock as Diamond for ordinary bikes and for e-bikes. At 1.7kg it sits in a weight band many people will still take to work, which matters as much as the grade. A heavier lock left at home does not protect the bike at the stand.",
      "The locking area is 101 × 197 mm. That is larger than the compact Hiplok D1000 (92 × 155 mm), though it is still not a long shackle. Measure your stand plus the frame tube before you order. If a small lock already fails to close on your rack, do not assume this one will either.",
      "On the Amazon listing we looked at, the frame mount is sold separately. Budget for a mount or a bag, or be honest that you will carry 1.7kg by hand. Riders who know they will only use a lock that clips to the bike often prefer the Evolution Mini-7 for that reason alone.",
      "Maker claims about grinders and cut-times are advertising. Diamond is Sold Secure’s higher bike grade, tested against a tougher tool set than Gold. It is not a promise that a battery grinder will fail. Check the marking on the lock you buy, and your insurer’s approved list, before you spend the money.",
      "This lock makes sense when Gold is not enough for the policy, or the bike is valuable enough that the extra grade is worth carrying. If you need a 300 mm shackle for a fat post, look at the ABUS 540 instead, and read the e-bike grade on that page carefully.",
    ],
    bestFor: [
      "A higher-value bike parked in public where the policy names Diamond",
      "E-bikes where insurance asks for the e-bike Diamond grade",
      "Riders who want a full-size D-lock rather than a tiny compact shackle",
    ],
    skipIf: [
      "Gold grade is enough, and you want a cable and a frame mount in one box",
      "You need a long shackle to close around a fat post",
      "You will not buy a mount, and you will not carry 1.7kg in a bag",
    ],
    good: [
      "Diamond grade for ordinary bikes and for e-bikes, on the same lock",
      "1.7kg — in the range people still take to work",
      "101 × 197 mm locking area is usable for an armoured D-lock",
      "Sold as armoured against grinders; the Sold Secure grade we rely on is Diamond",
    ],
    bad: [
      "No frame mount in the box we looked at",
      "Only two keys listed",
      "No cable, so a quick-release front wheel still needs something else to hold it",
    ],
    change: "A frame mount in the box would make daily carry more realistic for people who will not use a bag.",
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
    job: "For high-theft streets — but only after you have measured the stand and confirmed the small shackle will close.",
    meta: "Hiplok D1000 review: Sold Secure Diamond, 1.9kg, 92 × 155 mm locking area, no frame mount. Measure the stand first. Based on grades and specs, not a cut test.",
    verdict:
      "The D1000 is Sold Secure Diamond for ordinary bikes and for e-bikes. It weighs 1.9kg, has a 92 × 155 mm locking area, and comes without a frame mount on the listing we looked at. That compact shackle is the main thing to check before you buy. If it will not close around your stand and frame, the grade does not help. Riders whose insurance still asks for Gold, and who want a mount and a cable, are usually better served by the Evolution Mini-7.",
    subheads: [
      "The compact locking area",
      "Weight and carry without a mount",
      "Anti-grinder claims versus the Sold Secure grade",
      "D1000, DX1000, and the Litelok X1",
    ],
    body: [
      "Hiplok sells this lock on its anti-grinder design. The locking area is Mini-sized at 92 × 155 mm, and it weighs more than a typical compact D-lock. Fat tyres, cargo bikes, and some UK stands will not take it. Measure the post plus the frame tube before you order. A product photo will not answer that question.",
      "There is no frame mount in the box we looked at. You would need to carry 1.9kg in a bag, or leave it at home. For a weekday commuter whose insurance still asks for Gold, the Evolution Mini-7 is lighter, includes a mount, and comes with a cable.",
      "The grade is Diamond for ordinary bikes and Diamond for e-bikes. The two-cuts design is Hiplok’s own description. We do not print cut-times. Diamond is a tougher Sold Secure test than Gold; it is not a promise that a battery grinder fails.",
      "Hiplok’s larger DX1000 (112 × 205 mm, 2.75kg) is the sibling if the compact shackle is the problem. It is also Diamond for ordinary bikes and for e-bikes, still with no frame mount, and 850 g heavier. If you wanted Diamond with a more usable locking area at 1.7kg, look at the Litelok X1. Choose the D1000 only after you have stood next to the rack with a tape measure.",
    ],
    bestFor: [
      "High-theft stands you have stood next to with a tape measure",
      "E-bikes where the insurance names the e-bike Diamond grade",
      "Riders who already know a compact D-lock closes on their stand",
    ],
    skipIf: [
      "You have not measured 92 × 155 mm and you ride a fat-tyre or cargo bike",
      "You will not carry nearly 2kg with no frame mount",
      "Gold is enough and you want a cable in the box",
    ],
    good: [
      "Diamond for ordinary bikes and for e-bikes",
      "Sold as anti-grinder; the square shackle is Hiplok’s two-cut design",
      "1.9kg is heavy for a bag, but it is not a 4.9kg chain",
      "Three numbered keys listed",
    ],
    bad: [
      "92 × 155 mm will not close on a lot of real UK stands",
      "No frame mount in the box we looked at",
      "Heavier than the Litelok X1, for a smaller locking area",
    ],
    change:
      "The DX1000 exists if you need a larger locking area. For this compact lock, a frame mount in the box would make daily carry easier.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "The D1000 has a 92 × 155 mm locking area and weighs 1.9kg. The DX1000 has a 112 × 205 mm locking area and weighs 2.75kg. Choose the one that closes on your stand. Do not guess from a product photo. Full DX1000 write-up: [Hiplok DX1000](/reviews/hiplok-dx1000).",
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
        a: "Same Diamond grade for ordinary bikes and e-bikes. The X1 is lighter (1.7kg) with a larger locking area. The D1000 is the compact lock sold as anti-grinder. Most people who have not measured a tiny shackle should start with the X1.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Same Diamond grade, a larger locking area, and 200 g lighter.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "You will actually carry it, Gold meets the policy, and you want a frame mount on the bike.",
  },
  "kryptonite-evolution-mini-7": {
    hook: "A Gold-grade compact D-lock with a frame mount and a cable.",
    job: "The straightforward choice for a weekday commute when Gold is enough. It has a frame mount and cable and weighs 1.61kg.",
    meta: "Kryptonite Evolution Mini-7 review: Sold Secure Gold, 1.61kg, frame mount and cable in the box. The cable is not Gold. Based on published grades and specs.",
    verdict:
      "This kit suits daily riders whose insurance asks for Sold Secure Gold, who want a cable and a frame mount in one box, and who prefer not to carry a heavier Diamond lock every day. The D-lock is Gold. The cable is not — Kryptonite says so. Grade, weight, and the kit in the box line up well for weekday commuting. It is a poor match if your policy names Diamond for a high-value e-bike.",
    subheads: [
      "The cable is not Sold Secure Gold",
      "Compact locking area — measure the stand",
      "Gold on many UK household policies",
      "Compared with the New York Mini",
    ],
    body: [
      "This lock is aimed at daily commuting. It weighs 1.61kg and includes a frame mount, three keys, and a loop cable. Because it clips to the bike, you are more likely to have it with you at the stand.",
      "The cable is for a quick-release wheel, or a helmet, if you must. It is not Sold Secure Gold. If a listing photo makes the whole kit look approved, ignore the photo. The D-lock is the graded product. Do not lock the bike to the stand with the cable alone.",
      "The locking area is 83 × 178 mm. That is a compact Mini size. It will close on a lot of UK bike stands and fail on fat lamp-posts and some cargo bikes. Measure first. If it will not close, look at the ABUS 540 (a 300 mm shackle) or a chain at home, rather than a thicker compact lock with an even smaller locking area.",
      "Gold is still the grade a lot of UK household cycle insurance names. Diamond is higher, and some e-bike policies want the e-bike version of that grade. If that is your situation, look elsewhere. If Gold is what the policy asks for and you will carry 1.6kg, this kit fits that job well. If you need Gold with more reach than 83 × 178 mm, the Bordo 6500 offers 110 cm of folding length at a higher weight.",
      "The New York Fahgettaboudit Mini is the thicker sibling: 18 mm, 2.06kg, no mount, no cable, still only Gold. People search it because of the name. Most commuters are better with this Evolution Mini-7. The extra thickness is not usually worth an extra 450 g every day when the Sold Secure grade is the same.",
    ],
    bestFor: [
      "Weekday commuting where Gold meets the policy",
      "Riders who want a frame mount and a wheel cable without a second purchase",
      "Anyone who prefers a lock that clips onto the bike",
    ],
    skipIf: [
      "The street or the policy wants Diamond, or a lock sold as anti-grinder",
      "You need a larger locking area than 83 × 178 mm",
      "You already own a Gold D-lock and only needed a cable",
    ],
    good: [
      "Gold grade on the D-lock — the grade most UK household policies still name",
      "1.61kg with a frame mount, so it is designed to live on the bike",
      "Cable in the box for a quick-release wheel (the cable is not graded)",
      "Three keys, including the usual lighted key on Kryptonite Mini kits",
    ],
    bad: [
      "Not Diamond, and not sold as angle-grinder resistant",
      "Compact size: 83 × 178 mm will not close on every post",
      "The cable is useful, but it is not a second Gold lock",
    ],
    change: "A clearer cable warning on listings would help. Too many kit photos still read as if the whole set is Gold.",
    faqs: [
      {
        q: "Is the cable Sold Secure Gold?",
        a: "No. On Kryptonite’s Mini-7 notes, any cable supplied is not part of the Sold Secure approval. The D-lock is the graded product.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "Gold is what many UK policies still ask for. Diamond is the higher grade, and some e-bike or high-value policies name it. Check the wording you signed.",
      },
      {
        q: "Evolution Mini-7 or New York Mini?",
        a: "The New York Mini is 18 mm thick, weighs 2.06kg, and has no mount and no cable. The Evolution Mini-7 is 13 mm thick, weighs 1.61kg, and includes a frame mount and a cable. Both are Gold. Carry the Evolution unless you specifically want the thicker Mini as a second lock.",
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
    job: "The long shackle makes this useful when a compact D-lock will not reach around the stand. It is Diamond rated for ordinary bikes, but check the e-bike grade if that applies to you.",
    meta: "ABUS Granit XPlus 540 review: Diamond for ordinary bikes, Gold for e-bikes, 108 × 300 mm, frame mount in the box. For stands a compact lock will not close. Not sold as anti-grinder.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "This lock is useful when a compact D-lock will not close on the stand and you still want Sold Secure Diamond for an ordinary bike, plus a frame mount. For e-bikes, the grade we have is Gold, not Diamond. E-bike policies that insist on e-bike Diamond should look at the X1 or D1000 instead. Specs on our records: 1.8kg, a 13 mm square shackle, and a 108 × 300 mm locking area.",
    subheads: [
      "Why the long shackle exists",
      "Diamond for ordinary bikes, Gold for e-bikes",
      "Not sold as anti-grinder",
      "Using the length without leaving a big loop",
    ],
    body: [
      "UK street furniture is not all the same size. A compact lock that will not close offers little protection. The 540’s 108 × 300 mm locking area will close around posts that a Mini-7 cannot. That reach is the main reason to choose it.",
      "On the lock we looked at, the ordinary-bike grade is Diamond and the e-bike grade is Gold. Those are different Sold Secure tests. If you ride an ordinary bike and the policy names Diamond, this lock is a real option. If you ride an e-bike and the policy names e-bike Diamond, it does not match — look at the X1 or the D1000.",
      "The frame mount is in the box we looked at. At 1.8kg on the frame, you are more likely to have it with you in the morning. There is no cable in this box. Do not assume an ABUS cable kit from another product.",
      "It is not sold as angle-grinder resistant. Diamond is not a grinder-proof badge. If anti-grinder marketing is why you are shopping, this is the wrong lock. If the compact lock will not fit, it might be the right one.",
      "A longer shackle also gives a thief more room for a tool. Fill it as much as you can: frame plus rear wheel if they both fit, tight to the stand. If a Mini already closes on your stand, you do not need this length.",
    ],
    bestFor: [
      "Stands a compact D-lock cannot close around",
      "Ordinary bikes where Diamond is required and you want a frame mount",
      "Commuters who will put 1.8kg on the frame",
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
      "1.8kg is in the same band as the X1",
    ],
    bad: [
      "E-bike Sold Secure grade is Gold, not Diamond",
      "Not listed as angle-grinder resistant",
      "Only two keys in the spec",
    ],
    change:
      "List the e-bike grade next to the ordinary-bike grade. Too many pages only print the better number.",
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
        a: "At 1.8kg with a frame mount, yes if it closes on your stand and the grade matches the policy. It is not the lock for an e-bike policy that wants powered Diamond.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "The e-bike Diamond grade matters more than shackle length.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold and a cable are enough, and you want less lock to carry.",
  },
  "kryptonite-new-york-fahgettaboudit-mini": {
    hook: "An 18 mm Sold Secure Gold compact D-lock at 2.06kg, without a frame mount.",
    job: "A thick Gold Mini at 2.06kg with no frame mount. For daily carry, the Evolution Mini-7 is usually easier in the same grade.",
    meta: "Kryptonite New York Mini review: 18 mm Gold compact D-lock, 2.06kg, no frame mount, no cable. A thick second lock. Based on published grades and specs.",
    verdict:
      "This can work as a small, thick Gold D-lock you leave on a heavy bike or at a regular stand. It is a poorer fit as your only commute lock if 1.6kg already feels like too much. Specs: 2.06kg, 83 × 153 mm locking area, no frame mount, and no cable. In this family, the Evolution Mini-7 is usually easier to take every day, because it is lighter and includes a mount and a cable.",
    subheads: [
      "Thickness versus daily carry",
      "No frame mount and no cable",
      "Sold Secure Gold, not Diamond",
      "When the Evolution Mini-7 is the clearer daily choice",
    ],
    body: [
      "The Fahgettaboudit name is branding. What you get is an 18 mm Gold compact D-lock with a smaller locking area than the Evolution Mini-7 and 450 g more steel. There is no frame mount in the box we looked at, and no cable, so you carry 2.06kg by hand or strap it somehow.",
      "83 × 153 mm is tighter than the Evolution’s 83 × 178 mm. If the Mini-7 already struggles on your stand, this will not save you. Sold Secure Gold is still Gold: insurers look at the grade and the exact model, not the New York name. We do not keep a live list.",
      "If you need a lock you will carry, the Evolution Mini-7 is usually the clearer daily choice in this family: lighter, with a mount and a cable. If the policy wants Diamond, look at the Litelok X1. If you need length at home, the New York 1410 chain is the sibling. Keep this Mini only as a second lock on a heavy bike.",
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
      "2.06kg and no frame mount listed — a lot of loose steel",
      "Smaller locking area than the Evolution Mini-7",
      "No cable; Sold Secure Gold only; not sold as angle-grinder resistant",
    ],
    change:
      "A frame mount, as on the Evolution Mini-7, would make this compact lock more realistic for daily carry.",
    faqs: [
      {
        q: "New York Mini or Evolution Mini-7?",
        a: "The Evolution Mini-7 is 13 mm thick, weighs 1.61kg, and includes a frame mount and a cable. The New York Mini is 18 mm thick, weighs 2.06kg, and has no mount and no cable. Both are Gold. For most commuters, the lighter lock is the better daily choice.",
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
      blurb: "If you need Gold you will carry, Diamond for insurance, or a long chain to leave at home, another lock from this set is usually easier to live with on a weekday.",
    },
  },
  "kryptonite-new-york-fahgettaboudit-1410": {
    hook: "A Sold Secure Gold chain, 100 cm long, listed at 4.9kg.",
    job: "The 4.9kg weight makes this much more suitable for use at home than for a daily commute.",
    meta: "Kryptonite New York 1410 chain review: 100 cm, 14 mm, 4.9kg, Gold grade. Extra length for home or a terrace. Based on published grades and specs.",
    verdict:
      "This suits home, garden, or café-terrace use when a D-lock will not reach the only solid object. The 4.9kg weight, with no mount, makes it a poor daily commute lock. Sold Secure Gold applies to the approved product; looping the chain twice does not change the grade. Leave this where the bike is stored overnight and take a D-lock when you ride away.",
    subheads: [
      "Reach versus carry",
      "The listed weight is 4.9kg",
      "Gold grade, and what looping twice does not change",
      "Using it with a commute D-lock",
    ],
    body: [
      "A D-lock suits a tight stand. A chain suits extra length. 100 cm of 14 mm New York chain will reach a ground anchor, a second bike, or a post a compact D-lock cannot close around. The 4.9kg weight makes it much more suitable to leave at home than to carry in a backpack every day.",
      "Gold is the ordinary-bike grade on the lock we looked at. Looping the chain twice can take up slack, but it does not change the Sold Secure grade, and it does not turn an unapproved lamp-post into an approved anchor. Match the lock on Sold Secure’s list, and treat a ground anchor as a separate product if the policy names one.",
      "The disc lock is part of the kit, with three keys and no frame mount. Pair it with a D-lock you actually carry — often the Evolution Mini-7 for Gold, or the Litelok X1 if you need Diamond on the bike. At home, lock through the frame to something fixed, take up slack, leave the chain where the bike lives overnight, and take the D-lock when you leave the house.",
    ],
    bestFor: [
      "Home, a garden, or a ground anchor",
      "A post or terrace railing a compact D-lock cannot close around",
      "A second layer alongside a D-lock you take on the commute",
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
      "4.9kg — useful where the bike is stored, awkward as a daily carry",
      "No frame mount listed — as expected for a chain this heavy",
      "Not sold as angle-grinder resistant",
    ],
    change: "Calling it a home chain in the title would set clearer expectations. Too many listings make it look like a commute lock.",
    faqs: [
      {
        q: "D-lock or chain?",
        a: "A D-lock is better for a tight stand on a commute. A chain is better when you need length. Many riders use both, and only carry the D-lock.",
      },
      {
        q: "Is 4.9kg right?",
        a: "That is the listed weight for this 100 cm New York 1410 kit. If another listing looks far lighter, it is a different product.",
      },
      {
        q: "Can I use it on an e-bike?",
        a: "Yes, as a home or destination lock, if Gold meets the policy. Almost nobody will carry 4.9kg as their only lock. For Diamond on an e-bike you still take to work, look at the X1.",
      },
      {
        q: "Does looping it twice make it stronger?",
        a: "It can reduce slack. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor. Grade the lock, then the object you lock to.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "A Gold D-lock you can take on the ride to work, while leaving the chain where the bike is stored.",
    altSecond: "litelok-x1",
    altSecondWhy: "You need Diamond on a lock you still have to carry: 1.7kg, on the bike.",
  },
  "hiplok-dx1000": {
    hook: "The larger Hiplok anti-grinder D-lock. For stands the D1000 will not close on.",
    job: "A larger Hiplok than the D1000, still Diamond for bikes and e-bikes. At 2.75kg with no frame mount, it only makes sense after you have measured the stand.",
    meta: "Hiplok DX1000 review: Diamond for bikes and e-bikes, 2.75kg, 112 × 205 mm, no mount. Larger than the D1000. Measure the stand.",
    verdict:
      "This lock suits riders who want Hiplok’s anti-grinder D-lock and find the D1000’s 92 × 155 mm shackle too small — e-bikes, cargo frames, fat tyres, or fatter stands. It is Sold Secure Diamond for ordinary bikes and for e-bikes. Specs on the listing we looked at: 2.75kg, a 32 mm shackle, a 112 × 205 mm locking area, three keys, and no frame mount. That is 850 g more than the D1000, and more than a kilogram over the X1. The extra room is the reason to choose it, and only after you have measured.",
    subheads: [
      "Larger than the D1000 — still measure",
      "2.75kg and no frame mount",
      "Anti-grinder claims and the Sold Secure grade",
      "DX1000, D1000, or the Litelok X1",
    ],
    body: [
      "The DX1000 exists because the D1000 is too small for a lot of real bikes. Same Hiplok anti-grinder story, a larger locking area, and a weight you will notice. If 112 × 205 mm will not close around your stand and your frame, the rest of the sheet does not matter.",
      "112 × 205 mm is a step up from the D1000’s 92 × 155 mm. It is in the same band as the X1 (101 × 197 mm), not in the band of a 300 mm shackle. Fat lamp-posts and some cargo racks will still beat it. Measure the post plus the tube. If you already know a compact lock fails and you need 292 mm or 300 mm, that is the Pitbull LS or the ABUS 540.",
      "There is no frame mount in the box we looked at. You carry 2.75kg in a bag, or you leave it at home. A Diamond lock on the kitchen floor does not protect the bike at the stand. If you already know you will only use a lock that clips on, look at the Pitbull STD: Diamond for ordinary bikes, 1.44kg, a mount in the box.",
      "It is Diamond for ordinary bikes and Diamond for e-bikes. The anti-grinder language is Hiplok’s. We have not taken a grinder to it. Diamond is a tougher Sold Secure test than Gold; it is not a promise that a battery grinder fails. Check the marking on the lock you buy, and the insurer’s list.",
      "If you wanted Diamond you will still carry at 1.7kg, that is the X1. If 92 × 155 mm already closes, the D1000 is the lighter Hiplok. If you need a long shackle and a mount, the Pitbull LS or the 540 will close on posts this one will not.",
    ],
    bestFor: [
      "E-bikes, cargo bikes, and fatter stands that beat the D1000’s 92 × 155 mm",
      "Policies that name Diamond, including the e-bike grade",
      "Riders who want Hiplok’s anti-grinder D-lock and have already measured 112 × 205 mm",
    ],
    skipIf: [
      "You have not measured 112 × 205 mm, or you need a 300 mm shackle",
      "You will not carry 2.75kg with no frame mount",
      "You wanted Diamond with a clip on the bike — that is the Pitbull STD",
    ],
    good: [
      "Diamond for ordinary bikes and for e-bikes",
      "Sold as anti-grinder; 32 mm shackle on the listing we looked at",
      "112 × 205 mm — more usable than the D1000 on e-bike and cargo frames",
      "Three numbered keys listed",
    ],
    bad: [
      "2.75kg with no frame mount in the box we looked at",
      "Still not a long shackle: fat lamp-posts can beat 205 mm",
      "Heavier than the X1, for a similar locking area",
    ],
    change:
      "A frame mount in the box would help. At 2.75kg this is the Hiplok most likely to stay in the hall.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "The D1000 is 92 × 155 mm and 1.9kg. The DX1000 is 112 × 205 mm and 2.75kg. Same Diamond grade for ordinary bikes and e-bikes, still no mount. Choose the one that closes. Full D1000 write-up: [Hiplok D1000](/reviews/hiplok-d1000).",
      },
      {
        q: "DX1000 or Litelok X1?",
        a: "Same Diamond grade for ordinary bikes and e-bikes. The X1 is 1.7kg with a 101 × 197 mm locking area. The DX1000 is 2.75kg with 112 × 205 mm, sold as anti-grinder. Most people who need Diamond they will still carry should start with the X1.",
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
    altSecondWhy: "You need a longer shackle and a frame mount rather than a heavier Hiplok Mini.",
  },
  "onguard-pitbull-std-8003": {
    hook: "A Diamond D-lock that clips to the frame.",
    job: "Diamond with a frame mount in the box, and more room inside the shackle than the Mini-7.",
    meta: "OnGuard Pitbull STD 8003 review: Sold Secure Diamond for ordinary bikes, 1.44kg, frame mount, 115 × 230 mm. Worth considering if you need Diamond with a clip. Based on published grades and specs.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "This suits riders whose policy names Diamond and who will not take a lock that does not clip to the bike. Specs on our records: 1.44kg, 14 mm shackle, 115 × 230 mm locking area, a frame mount, five keys, no cable. The ordinary-bike grade is Diamond. We do not have an e-bike grade listed, so if the policy names powered Diamond, check Sold Secure and the insurer’s list before you treat this as an e-bike lock. It is not sold as anti-grinder.",
    subheads: [
      "Diamond with a frame mount",
      "115 × 230 mm locking area",
      "No cable, and no e-bike grade on our records",
      "STD, DT, or LS",
    ],
    body: [
      "The X1 and the D1000 are Diamond locks you typically carry in a bag. This Pitbull fits if you want Diamond security but also want to carry the lock on the bike. At 1.44kg it is lighter than the Mini-7, and the mount is in the box we looked at. That combination is why it sits on the best-of table: if you need Diamond and you already know you will not take a loose lock every morning, start here.",
      "The locking area is 115 × 230 mm. That is more generous than the Evolution Mini-7 (83 × 178 mm) and the D1000 (92 × 155 mm). It is not a 300 mm shackle. Measure the stand plus the frame tube. If a compact lock already fails on a fat lamp-post, look at the Pitbull LS (115 × 292 mm) or the ABUS 540.",
      "There is no cable in this box. If you have a quick-release front wheel, you still need something else to hold it, or you buy the DT 8005, which is this shackle plus a cable. The cable on the DT is not Diamond. On our records we only have the ordinary-bike Sold Secure grade. If you ride an e-bike and the policy names the powered grade, the X1 and the D1000 are Diamond for both on our records.",
      "It is a 14 mm shackle, not sold as angle-grinder resistant. Diamond is the grade. A 14 mm bar is not a 32 mm Hiplok. If anti-grinder marketing is why you are here, this is the wrong lock. If you wanted Gold with a cable and a mount, that is the Mini-7.",
      "The DT is the same 115 × 230 mm D-lock with a cable in the box — heavier, still a mount, cable not graded. The LS is the long 115 × 292 mm sibling for posts this one will not close on. Choose the STD unless you know you need the cable or the extra length.",
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
      "1.44kg with a frame mount in the box we looked at",
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
        a: "Same 14 mm shackle, same 115 × 230 mm locking area, same mount. The DT adds a cable and is listed at 1.6kg. The cable is not Diamond. Choose the STD unless you want that cable in the box.",
      },
      {
        q: "Pitbull STD or Litelok X1?",
        a: "The X1 is Diamond for ordinary bikes and for e-bikes, 1.7kg, sold as armoured, no mount in the box we looked at. The STD is Diamond for ordinary bikes, 1.44kg, with a mount. Choose on the e-bike grade and on whether you will clip it on.",
      },
      {
        q: "Will it fit a Sheffield stand?",
        a: "Often yes. The locking area is 115 × 230 mm. Measure the stand plus the frame tube. If a Mini already fails, look at the [Pitbull LS](/reviews/onguard-pitbull-ls-8002) or the [ABUS 540](/reviews/abus-granit-xplus-540), not a thicker compact lock.",
      },
    ],
    altBest: "onguard-pitbull-dt-8005",
    altBestWhy: "Same Diamond D-lock, and you want a wheel cable in the box. The cable is not graded.",
    altSecond: "litelok-x1",
    altSecondWhy: "The policy names e-bike Diamond, or you want the armoured lock when you will still carry 1.7kg in a bag.",
  },
  "onguard-pitbull-dt-8005": {
    hook: "The Pitbull with a cable in the box. The cable is not Diamond.",
    job: "The same Diamond D-lock as the STD, with a cable and frame mount in the box. The cable itself is not Sold Secure graded.",
    meta: "OnGuard Pitbull DT 8005 review: Pedal Cycle Diamond D-lock with a cable, 1.6kg, 14 mm, 115 × 230 mm, mount. The cable is not graded.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "Choose this when you want the STD Pitbull’s Diamond D-lock and you also want a wheel cable in the same box. The D-lock is Sold Secure Diamond for ordinary bikes on our records. The cable is not part of that grade — same rule as the Mini-7’s cable. Specs: 1.6kg, 14 mm, 115 × 230 mm, a frame mount, five keys. If you do not need the cable, the STD is lighter.",
    subheads: [
      "The cable is not Diamond",
      "Same shackle as the STD",
      "A mount in the box, at 1.6kg",
      "DT, STD, or the Mini-7",
    ],
    body: [
      "This is the STD Pitbull with extras. The D-lock is the graded product. The cable is for a quick-release wheel or a helmet if you must, and it is not Sold Secure Diamond. If a listing photo makes the whole kit look approved, ignore the photo and lock the frame with the D-lock.",
      "The shackle matches the STD: 14 mm, 115 × 230 mm. Measure the stand plus the frame tube. If 230 mm already fails, the LS 8002 is the long Pitbull. On our records the ordinary-bike grade is Diamond; we do not have an e-bike grade listed.",
      "The frame mount is in the box we looked at, at 1.6kg, with five keys. No anti-grinder claim on our records. If Gold is enough, the Evolution Mini-7 sits in the same weight band with a cable. If you need Diamond without the cable, choose the STD. If you need Diamond for an e-bike policy, check this model on Sold Secure — the X1 is Diamond for both on our records.",
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
      "The cable is not graded, so do not treat it as a second Diamond lock",
      "Heavier than the STD for extras you may not use",
      "No e-bike grade on our records; not sold as anti-grinder",
    ],
    change:
      "A clearer cable warning next to the Diamond badge would help. Too many kit photos still read as if the whole thing is approved.",
    faqs: [
      {
        q: "Is the cable Sold Secure Diamond?",
        a: "No. The D-lock is the graded product. Use the cable for a quick-release wheel. Lock the frame with the D-lock.",
      },
      {
        q: "DT or STD 8003?",
        a: "Same 14 mm shackle, same 115 × 230 mm locking area, same mount. The DT is listed at 1.6kg with a cable. The STD is 1.44kg with no cable. Choose the STD unless you want that cable in the box.",
      },
      {
        q: "Pitbull DT or Evolution Mini-7?",
        a: "The Mini-7 is Gold, 1.61kg, a mount and a cable — and the cable is not Gold. The DT is Diamond on the D-lock, 1.6kg, a mount and a cable — and the cable is not Diamond. If Gold meets the policy, most commuters should take the Mini-7.",
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
    job: "A longer Diamond Pitbull with a frame mount, useful when a standard Mini will not close around a fat post and you still want the lock on the bike.",
    meta: "OnGuard Pitbull LS 8002 review: Sold Secure Diamond for ordinary bikes, long 115 × 292 mm shackle, 1.75kg, frame mount. For fat posts and cargo when a Mini will not close.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "This helps when a compact Diamond will not close and you still want a mount. 115 × 292 mm is in the same band as the ABUS 540’s 108 × 300 mm. Specs: 1.75kg, 14 mm, five keys, no cable, frame mount in the box we looked at. On our records the ordinary-bike grade is Diamond; we do not have an e-bike grade listed. The 540 is Diamond for ordinary bikes and Gold for e-bikes, with a slightly longer shackle. Pick this if you want the Pitbull mount-and-keys kit on a long shackle.",
    subheads: [
      "Why the long shackle helps",
      "Diamond for ordinary bikes — check e-bikes separately",
      "LS versus the ABUS 540",
      "Filling a long shackle",
    ],
    body: [
      "A compact lock that will not close offers little protection. The LS exists because UK street furniture is not all Mini-sized. 115 × 292 mm will take posts the STD (115 × 230 mm) and the Mini-7 (83 × 178 mm) cannot.",
      "On our records the ordinary-bike grade is Diamond. We have not invented an e-bike grade. If you ride an ordinary bike and the policy names Diamond, this lock is a real option with a mount. If you ride an e-bike and the policy names powered Diamond, check Sold Secure — the X1, D1000 and DX1000 are Diamond for both on our records. The 540 is Diamond for ordinary bikes and Gold for e-bikes.",
      "The 540 is 108 × 300 mm, 1.8kg, two keys, EaZy KF bracket, no cable. This LS is 115 × 292 mm, 1.75kg, five keys, a mount, no cable. Neither is sold as anti-grinder. Choose on cylinder, keys, and the e-bike line — after you have measured. If you wanted Hiplok’s larger anti-grinder lock, the DX1000 is 112 × 205 mm: more room than the D1000, not this much length.",
      "The frame mount is in the box we looked at. 1.75kg on the frame is a lock you are more likely to have with you. There is no cable. A longer shackle also gives a thief more room for a tool. Fill it: frame plus rear wheel if they both fit, tight to the stand. If a Mini already closes on your stand, you do not need this length — choose the STD, or the Mini-7 if Gold is enough. If you need a metre of chain at home, that is the New York 1410.",
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
      "Frame mount in the box we looked at, 1.75kg",
      "Five keys listed",
    ],
    bad: [
      "No e-bike grade on our records",
      "No cable; not sold as angle-grinder resistant",
      "A long shackle is more room for a tool if you leave a loop",
    ],
    change:
      "Say, on the same line as the 292 mm, that a long shackle needs filling. Length helps with fit, and it also leaves more room for a tool if you leave a loop.",
    faqs: [
      {
        q: "Pitbull LS or ABUS 540?",
        a: "Both are long D-locks with a mount. The LS is 115 × 292 mm, 1.75kg, five keys, Diamond for ordinary bikes on our records. The 540 is 108 × 300 mm, 1.8kg, two keys, Diamond for ordinary bikes and Gold for e-bikes. Measure, then read the e-bike line on the policy.",
      },
      {
        q: "LS or STD 8003?",
        a: "Same 14 mm family, same mount, same ordinary-bike Diamond on our records. The STD is 115 × 230 mm at 1.44kg. The LS is 115 × 292 mm at 1.75kg. Choose the STD if a compact lock already closes. Choose the LS if it does not.",
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
    job: "Gold folding reach on the bike when a Mini will not close, if you would rather not leave a chain at home.",
    meta: "ABUS Bordo Granit XPlus 6500 review: Sold Secure Gold folding lock, 2.16kg, 110 cm, SH bracket. Flexible Gold when reach matters more than Mini-7 weight.",
    verdict:
      "This suits riders when Gold meets the policy, a compact D-lock will not reach the only solid object, and you still want the lock on the bike rather than a 4.9kg chain at home. Specs: 110 cm of folding bars, 2.16kg, SH bracket on the listing we looked at, two keys. That is 550 g more than the Mini-7, and a different shape: 5.5 mm bars, not a 13 mm D-shackle. Gold is Gold; the shape is not Diamond. Prefer the Mini-7 for a classic Gold commute that already closes. Prefer this when the extra reach is the point.",
    subheads: [
      "Reach you can still clip on",
      "Gold, not Diamond — 5.5 mm bars",
      "Heavier than a Mini, lighter than a chain",
      "Bordo, Mini-7, or the 540",
    ],
    body: [
      "A D-lock suits a tight stand. A chain suits extra length you leave at home. A folding lock sits between those jobs: more reach than a Mini, on the bike, if you will actually clip 2.16kg in the SH bracket. 110 cm is in the same length band as the New York 1410, at less than half the weight, with a different Sold Secure test and a different shape.",
      "Sold Secure Gold is the ordinary-bike grade on the lock we looked at. We do not have an e-bike grade listed. The bars are 5.5 mm. That is not a 14 mm Pitbull and it is not a 32 mm Hiplok. Gold is still the grade a lot of UK household policies name. If the policy names Diamond, look at the X1, a Pitbull, or a Hiplok. Maker talk about saw protection and security levels is ABUS’s. The grade we will stand behind is Gold.",
      "2.16kg with an SH bracket is a commute lock only if you will fit the bracket and use it. That is a lot of lock on a down tube. If 1.6kg already feels like too much, this will stay at home. The Mini-7 is the lighter Gold lock with a clip and a cable.",
      "If the problem is a fat post and you still want a D-shackle, the ABUS 540 (108 × 300 mm) or the Pitbull LS (115 × 292 mm) are the long D-locks. The Bordo helps when the object is awkward — a tree guard, a railing, a second bike — and a rigid shackle will not snake through. It does not win on weight or on Diamond.",
      "Keep the 1410 chain at home if you need 14 mm Gold through a ground anchor. Take this Bordo when Gold is enough and the extra reach has to come with you.",
    ],
    bestFor: [
      "Gold policies where a Mini will not reach the only solid object",
      "Riders who want 110 cm of reach with an SH bracket, not a 4.9kg chain",
      "Awkward street furniture a rigid D-lock cannot snake through",
    ],
    skipIf: [
      "A compact D-lock already closes — the Mini-7 is lighter",
      "The policy names Diamond",
      "You will not fit the SH bracket, and you will not carry 2.16kg in a bag",
    ],
    good: [
      "Sold Secure Gold on the ordinary-bike listing",
      "110 cm of folding reach — more than any D-lock we have reviewed",
      "SH bracket in the box we looked at",
      "2.16kg is heavy for a bag, but it is not a 4.9kg chain",
    ],
    bad: [
      "Sold Secure Gold only; 5.5 mm bars rather than a thick D-shackle",
      "Heavier than the Mini-7, with only two keys listed",
      "No cable; no e-bike grade on our records",
    ],
    change:
      "Call it a Gold reach lock in the title rather than implying it replaces Diamond. Too many folding-lock pages skip the grade and sell the fold.",
    faqs: [
      {
        q: "Bordo 6500 or Evolution Mini-7?",
        a: "The Mini-7 is Gold, 1.61kg, a frame clip and a cable, 83 × 178 mm. The Bordo is Gold, 2.16kg, an SH bracket, 110 cm of folding bars. If a Mini already closes, take the Mini-7. Take the Bordo when you need the reach.",
      },
      {
        q: "Bordo or ABUS 540?",
        a: "The 540 is a 300 mm D-lock, Diamond for ordinary bikes and Gold for e-bikes, 1.8kg, with a mount. The Bordo is Gold, 110 cm, 2.16kg, folding. Rigid long shackle versus flexible length. Measure the object.",
      },
      {
        q: "Is a folding lock as strong as a D-lock?",
        a: "Not as a class. Grade, thickness, and whether you use it all matter more than the fold. This Bordo is Gold with 5.5 mm bars. A Diamond D-lock is a different test. Read the policy, then pick the shape that closes.",
      },
      {
        q: "Can I commute with it?",
        a: "At 2.16kg with an SH bracket, yes if Gold matches the policy and you will actually clip it on. It is not the lock for a Diamond line, and it is not a 4.9kg home chain.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "Gold is enough, a Mini already closes, and you want less lock to carry.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "You need a long rigid shackle, and Diamond for an ordinary bike, rather than 110 cm of folding bars.",
  },
};

export const catalogueHooks: Record<string, string> = {
  "litelok-x1": "When the policy names Diamond and you still need a weekday carry, start here.",
  "hiplok-d1000": "A compact anti-grinder D-lock — only after you have measured the stand.",
  "kryptonite-evolution-mini-7": "The straightforward choice for a weekday commute when Gold is enough.",
  "abus-granit-xplus-540": "Useful when a compact D-lock will not reach around the stand.",
  "kryptonite-new-york-fahgettaboudit-mini": "A thick Gold Mini at 2.06kg; the Evolution Mini-7 is usually easier for daily carry.",
  "kryptonite-new-york-fahgettaboudit-1410": "The 4.9kg weight makes this much more suitable for use at home than for a daily commute.",
  "hiplok-dx1000": "The larger Hiplok when the D1000’s shackle will not close. Measure the stand first.",
  "onguard-pitbull-dt-8005": "The Pitbull with a cable in the box — remember the cable is not graded.",
  "onguard-pitbull-std-8003": "Diamond with a frame mount in the box, and more room than the Mini-7.",
  "onguard-pitbull-ls-8002": "A longer Diamond Pitbull when a Mini will not close on a fat post.",
  "abus-bordo-granit-xplus-6500": "Gold folding reach when a Mini will not close and you still want the lock on the bike.",
};

export function hookFor(product: Product): string {
  return catalogueHooks[product.slug] ?? `${product.brand} ${product.specs?.type ?? "lock"}.`;
}
