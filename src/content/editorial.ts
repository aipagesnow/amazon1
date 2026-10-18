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
    hook: "If you need Sold Secure Diamond you’ll still carry, the 1.7kg Litelok X1 is the one we’d look at first.",
    job: "Diamond for bikes and e-bikes; no frame clip in the box.",
    meta: "Litelok X1 review: Sold Secure Diamond for ordinary bikes and e-bikes, 1.7kg, 101 × 197 mm locking area. Based on published grades and specs, not a cut test.",
    verdict:
      "The X1 is Sold Secure Diamond for ordinary bikes and for e-bikes. It weighs 1.7kg and has a 101 × 197 mm locking area. It fits when your insurance requires Diamond and you regularly leave an expensive bike in public. Here’s the catch: if Gold is enough, the extra weight may not be worth it — and the Evolution Mini-7 adds a clip and a cable in one kit. There’s no frame mount in the box, so you’ll need a bag or a separate mount.",
    subheads: [
      "Locking area and whether it will close",
      "No frame mount in the box",
      "What Sold Secure Diamond means here",
      "When a Gold Mini is enough instead",
    ],
    body: [
      "Sold Secure lists this lock as Diamond for ordinary bikes and for e-bikes. At 1.7kg it sits in a weight band many people will still take to work, which matters as much as the grade. A heavier lock left at home doesn’t protect your bike at the stand.",
      "The locking area is 101 × 197 mm. That’s larger than the compact Hiplok D1000 (92 × 155 mm), though it’s still not a long shackle. Measure your stand plus the frame tube before you order. If a small lock already fails to close on your rack, don’t assume this one will either.",
      "The frame mount is sold separately. Budget for a mount or a bag, or be honest that you’ll carry 1.7kg by hand. If you know you’ll only use a lock that clips to the bike, you’d usually prefer the Evolution Mini-7 for that reason alone.",
      "Maker claims about grinders and cut-times are advertising. Diamond is Sold Secure’s higher bike grade, tested against a tougher tool set than Gold. It isn’t a promise that a battery grinder will fail. Check the marking on the lock you buy, and your insurer’s approved list, before you spend the money.",
      "This lock makes sense when Gold isn’t enough for the policy, or the bike is valuable enough that the extra grade is worth carrying. If you need a 300 mm shackle for a fat post, look at the ABUS 540 instead, and read the e-bike grade on that page carefully.",
    ],
    bestFor: [
      "A higher-value bike parked in public where the policy names Diamond",
      "E-bikes where insurance asks for the e-bike Diamond grade",
      "Riders who want a full-size D-lock rather than a tiny compact shackle",
    ],
    skipIf: [
      "Gold grade is enough, and you want a cable and a frame mount in one box",
      "You need a long shackle to close around a fat post",
      "You won’t buy a mount, and you won’t carry 1.7kg in a bag",
    ],
    good: [
      "Diamond grade for ordinary bikes and for e-bikes, on the same lock",
      "1.7kg — in the range people still take to work",
      "101 × 197 mm locking area is usable for an armoured D-lock",
      "Sold as armoured against grinders; the Sold Secure grade we rely on is Diamond",
    ],
    bad: [
      "No frame mount in the box",
      "Only two keys listed",
      "No cable, so a quick-release front wheel still needs something else to hold it",
    ],
    change: "A frame mount in the box would make daily carry more realistic for people who won’t use a bag.",
    faqs: [
      {
        q: "Is the Litelok X1 Sold Secure Diamond?",
        a: "Yes — Sold Secure Diamond for ordinary bikes and for e-bikes, on the listing. Check the marking on the lock you buy, and your insurer’s list.",
      },
      {
        q: "Will it fit my bike stand?",
        a: "The locking area is 101 × 197 mm. Measure the post plus the frame. A small lock that already fails may still fail. The ABUS 540 is the long D-lock we’ve reviewed.",
      },
      {
        q: "Did you try to cut it with a grinder?",
        a: "No. Diamond is Sold Secure’s higher bike grade, tested against a tougher tool set than Gold. It isn’t a promise against a battery grinder. Advertised cut-times are marketing.",
      },
      {
        q: "Is this the same as the X1 Moto?",
        a: "Litelok says the bicycle and moto X1 are the same lock, sold under two names. The UK listing is the X1 armoured D-lock.",
      },
      {
        q: "X1 or Hiplok D1000?",
        a: "Same Diamond grade. The X1 is 200 g lighter with a larger locking area (101 × 197 mm versus 92 × 155 mm). The D1000 is the compact lock sold as anti-grinder — only if you’ve measured the stand. If you need Diamond, start with the X1.",
      },
    ],
    altBest: "hiplok-d1000",
    altBestWhy: "You want Hiplok’s smaller lock that’s sold as anti-grinder, and you’ve already measured the tight 92 × 155 mm locking area.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold grade is enough, and you want a cable and a frame mount in the same box.",
  },
  "hiplok-d1000": {
    hook: "If you need Diamond on a tight stand you’ve already measured, the D1000 is the compact Hiplok we’d look at.",
    job: "Check the small 92 × 155 mm shackle closes before you buy.",
    meta: "Hiplok D1000 review: Sold Secure Diamond, 1.9kg, 92 × 155 mm locking area, no frame mount. Measure the stand first. Based on grades and specs, not a cut test.",
    verdict:
      "The D1000 is Sold Secure Diamond for ordinary bikes and for e-bikes. It weighs 1.9kg, has a 92 × 155 mm locking area, and comes without a frame mount on the listing. Worth knowing: that compact shackle is the thing to check before you buy. If it won’t close around your stand and frame, the grade doesn’t help. If your insurance still asks for Gold, and you want a mount and a cable, we’d point you to the Evolution Mini-7.",
    subheads: [
      "The compact locking area",
      "Weight and carry without a mount",
      "Anti-grinder claims versus the Sold Secure grade",
      "D1000, DX1000, and the Litelok X1",
    ],
    body: [
      "Hiplok sells this lock on its anti-grinder design. The locking area is Mini-sized at 92 × 155 mm, and it weighs more than a typical compact D-lock. Fat tyres, cargo bikes, and some UK stands won’t take it. Measure the post plus the frame tube before you order. A product photo won’t answer that question.",
      "There’s no frame mount in the box. You would need to carry 1.9kg in a bag, or leave it at home. For a weekday commuter whose insurance still asks for Gold, the Evolution Mini-7 is lighter, includes a mount, and comes with a cable.",
      "The grade is Diamond for ordinary bikes and Diamond for e-bikes. The two-cuts design is Hiplok’s own description. Cut-times on the box are advertising. Diamond is a tougher Sold Secure test than Gold; it isn’t a promise that a battery grinder fails.",
      "Hiplok’s larger DX1000 (112 × 205 mm, 2.75kg) is the sibling if the compact shackle is the problem. It’s also Diamond for ordinary bikes and for e-bikes, still with no frame mount, and 850 g heavier. If you wanted Diamond with a more usable locking area at 1.7kg, look at the Litelok X1. Choose the D1000 only after you’ve stood next to the rack with a tape measure.",
    ],
    bestFor: [
      "High-theft stands you’ve stood next to with a tape measure",
      "E-bikes where the insurance names the e-bike Diamond grade",
      "Riders who already know a compact D-lock closes on their stand",
    ],
    skipIf: [
      "You haven’t measured 92 × 155 mm and you ride a fat-tyre or cargo bike",
      "You won’t carry nearly 2kg with no frame mount",
      "Gold is enough and you want a cable in the box",
    ],
    good: [
      "Diamond for ordinary bikes and for e-bikes",
      "Sold as anti-grinder; the square shackle is Hiplok’s two-cut design",
      "1.9kg is heavy for a bag, but it isn’t a 4.9kg chain",
      "Three numbered keys listed",
    ],
    bad: [
      "92 × 155 mm won’t close on a lot of real UK stands",
      "No frame mount in the box",
      "Heavier than the Litelok X1, for a smaller locking area",
    ],
    change:
      "The DX1000 exists if you need a larger locking area. For this compact lock, a frame mount in the box would make daily carry easier.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "The D1000 has a 92 × 155 mm locking area and weighs 1.9kg. The DX1000 has a 112 × 205 mm locking area and weighs 2.75kg. Choose the one that closes on your stand. Don’t guess from a product photo. Side-by-side: [D1000 vs DX1000](/vs/d1000-vs-dx1000). Full DX1000 write-up: [Hiplok DX1000](/reviews/hiplok-dx1000).",
      },
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK household policies still ask for. Diamond is the higher bike grade. Read the wording you signed.",
      },
      {
        q: "Does it include a cable?",
        a: "Not in the box. The D-lock is the graded product. A cable is a second, usually ungraded, extra.",
      },
      {
        q: "D1000 or Litelok X1?",
        a: "Same Diamond grade for ordinary bikes and e-bikes. The X1 is lighter (1.7kg) with a larger locking area. The D1000 is the compact lock sold as anti-grinder. If you haven’t measured a tiny shackle, start with the X1.",
      },
      {
        q: "Is the D1000 easy to carry on a daily commute?",
        a: "Not really, no. It’s 1.9kg and there’s no frame mount, so you’d carry it in a bag. If Gold is enough on your policy, we’d take the Evolution Mini-7 instead, because it’s lighter and it clips on.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Same Diamond grade, a larger locking area, and 200 g lighter.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "You’ll actually carry it, Gold meets the policy, and you want a frame mount on the bike.",
  },
  "kryptonite-evolution-mini-7": {
    hook: "If Gold meets your policy, the Mini-7 is the commute D-lock we’d clip to the frame and take every day.",
    job: "Frame mount and cable in the box, at 1.61kg.",
    meta: "Kryptonite Evolution Mini-7 review: Sold Secure Gold, 1.61kg, frame mount and cable in the box. The cable is not Gold. Based on published grades and specs.",
    verdict:
      "This kit suits you if your insurance asks for Sold Secure Gold, you want a cable and a frame mount in one box, and you’d rather not carry a heavier Diamond lock every day. The D-lock is Gold. The cable isn’t — Kryptonite says so. Honestly, the grade, the weight and the kit line up well for a weekday commute. It’s a poor match if your policy names Diamond for a high-value e-bike.",
    subheads: [
      "The cable is not Sold Secure Gold",
      "Compact locking area — measure the stand",
      "Gold on many UK household policies",
      "Compared with the New York Mini",
    ],
    body: [
      "This lock is aimed at daily commuting. It weighs 1.61kg and includes a frame mount, three keys, and a loop cable. Because it clips to the bike, you’re more likely to have it with you at the stand.",
      "The cable is for a quick-release wheel, or a helmet, if you must. It isn’t Sold Secure Gold. If a listing photo makes the whole kit look approved, ignore the photo. The D-lock is the graded product. Don’t lock the bike to the stand with the cable alone.",
      "The locking area is 83 × 178 mm. That’s a compact Mini size. It’ll close on a lot of UK bike stands and fail on fat lamp-posts and some cargo bikes. Measure first. If it won’t close, look at the ABUS 540 (a 300 mm shackle) or a chain at home, rather than a thicker compact lock with an even smaller locking area.",
      "Gold is still the grade a lot of UK household cycle insurance names. Diamond is higher, and some e-bike policies want the e-bike version of that grade. If that’s your situation, look elsewhere. If Gold is what the policy asks for and you’ll carry 1.6kg, this kit fits that job well. If you need Gold with more reach than 83 × 178 mm, the Bordo 6500K offers 120 cm of folding length at a higher weight.",
      "The New York Fahgettaboudit Mini is the thicker sibling: 18 mm, 2.06kg, no mount, no cable, still only Gold. People search it because of the name. You’d usually be better with this Evolution Mini-7. The extra thickness isn’t usually worth an extra 450 g every day when the Sold Secure grade is the same.",
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
      "1.61kg with a frame mount, so it’s designed to live on the bike",
      "Cable in the box for a quick-release wheel (the cable isn’t graded)",
      "Three keys, including the usual lighted key on Kryptonite Mini kits",
    ],
    bad: [
      "Not Diamond, and not sold as angle-grinder resistant",
      "Compact size: 83 × 178 mm won’t close on every post",
      "The cable is useful, but it isn’t a second Gold lock",
    ],
    change: "A clearer cable warning on listings would help. Too many kit photos still read as if the whole set is Gold.",
    faqs: [
      {
        q: "Is the cable Sold Secure Gold?",
        a: "No. On Kryptonite’s Mini-7 notes, any cable supplied isn’t part of the Sold Secure approval. The D-lock is the graded product.",
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
        a: "This lock, if you need Gold you’ll carry. Diamond: [Litelok X1](/reviews/litelok-x1). Extra length at home: the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410). Longer version: [alternatives to the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
      },
      {
        q: "Will it fit a Sheffield stand?",
        a: "Often yes, not always. The locking area is 83 × 178 mm. Measure your stand plus the frame tube. If a Mini already fails, look at the [ABUS 540](/reviews/abus-granit-xplus-540), not a thicker Mini.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Step up to Diamond and a larger locking area if the bike is worth the extra weight.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "The compact lock won’t close, and you still want Diamond for an ordinary bike plus a frame mount.",
  },
  "abus-granit-xplus-540": {
    hook: "If a compact D-lock won’t close round your stand, the 540’s long 300 mm shackle is the one we’d try.",
    job: "Diamond on ordinary bikes; check the e-bike grade if that’s you.",
    meta: "ABUS Granit XPlus 540 review: Diamond for ordinary bikes, Gold for e-bikes, 108 × 300 mm, frame mount in the box. For stands a compact lock will not close. Not sold as anti-grinder.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "This lock is useful when a compact D-lock won’t close on the stand and you still want Sold Secure Diamond for an ordinary bike, plus a frame mount. To be fair, on e-bikes the grade is Gold, not Diamond. E-bike policies that insist on e-bike Diamond should look at the X1 or D1000 instead. Specs: 1.8kg, a 13 mm square shackle, and a 108 × 300 mm locking area.",
    subheads: [
      "Why the long shackle exists",
      "Diamond for ordinary bikes, Gold for e-bikes",
      "Not sold as anti-grinder",
      "Using the length without leaving a big loop",
    ],
    body: [
      "UK street furniture isn’t all the same size. A compact lock that won’t close offers little protection. The 540’s 108 × 300 mm locking area will close around posts that a Mini-7 cannot. That reach is the main reason to choose it.",
      "The ordinary-bike grade is Diamond and the e-bike grade is Gold. Those are different Sold Secure tests. If you ride an ordinary bike and the policy names Diamond, this lock is a real option. If you ride an e-bike and the policy names e-bike Diamond, it doesn’t match — look at the X1 or the D1000.",
      "The frame mount is in the box. At 1.8kg on the frame, you’re more likely to have it with you in the morning. There’s no cable in this box. Don’t assume an ABUS cable kit from another product.",
      "It isn’t sold as angle-grinder resistant. Diamond isn’t a grinder-proof badge. If anti-grinder marketing is why you’re shopping, this is the wrong lock. If the compact lock won’t fit, it might be the right one.",
      "A longer shackle also gives a thief more room for a tool. Fill it as much as you can: frame plus rear wheel if they both fit, tight to the stand. If a Mini already closes on your stand, you don’t need this length.",
    ],
    bestFor: [
      "Stands a compact D-lock can’t close around",
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
      "Frame mount in the box",
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
        a: "The X1 is Diamond for e-bikes and sold as armoured, with a smaller locking area and no mount in the box. The 540 is the long shackle with a mount. Choose based on whether it’ll close on your stand, and on the grade your policy asks for.",
      },
      {
        q: "Is this a commute lock?",
        a: "At 1.8kg with a frame mount, yes if it closes on your stand and the grade matches the policy. It isn’t the lock for an e-bike policy that wants powered Diamond.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "The e-bike Diamond grade matters more than shackle length.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold and a cable are enough, and you want less lock to carry.",
  },
  "kryptonite-new-york-fahgettaboudit-mini": {
    hook: "If you want a thick 18 mm Gold Mini as a second lock, this is it, but it’s 2.06kg with no frame mount.",
    job: "For daily carry, the Evolution Mini-7 is easier in the same grade.",
    meta: "Kryptonite New York Mini review: 18 mm Gold compact D-lock, 2.06kg, no frame mount, no cable. A thick second lock. Based on published grades and specs.",
    verdict:
      "This can work as a small, thick Gold D-lock you leave on a heavy bike or at a regular stand. It’s a poorer fit as your only commute lock if 1.6kg already feels like too much. Specs: 2.06kg, 83 × 153 mm locking area, no frame mount, and no cable. In this family, the Evolution Mini-7 is usually easier to take every day, because it’s lighter and includes a mount and a cable.",
    subheads: [
      "Thickness versus daily carry",
      "No frame mount and no cable",
      "Sold Secure Gold, not Diamond",
      "When the Evolution Mini-7 is the clearer daily choice",
    ],
    body: [
      "The Fahgettaboudit name is branding. What you get is an 18 mm Gold compact D-lock with a smaller locking area than the Evolution Mini-7 and 450 g more steel. There’s no frame mount in the box, and no cable, so you carry 2.06kg by hand or strap it somehow.",
      "83 × 153 mm is tighter than the Evolution’s 83 × 178 mm. If the Mini-7 already struggles on your stand, this won’t save you. Sold Secure Gold is still Gold: insurers look at the grade and the exact model, not the New York name. We don’t keep a live list.",
      "If you need a lock you’ll carry, the Evolution Mini-7 is usually the clearer daily choice in this family: lighter, with a mount and a cable. If the policy wants Diamond, look at the Litelok X1. If you need length at home, the New York 1410 chain is the sibling. Keep this Mini only as a second lock on a heavy bike.",
    ],
    bestFor: [
      "A second lock that lives in a pannier or on a heavy bike",
      "Riders who want the thickest compact Gold D-lock we’ve reviewed (18 mm)",
      "Pairing a New York chain with a New York D-lock at home",
    ],
    skipIf: [
      "You need a frame mount or a cable in the box",
      "You want Diamond, or a lock sold as anti-grinder",
      "You’ll only use a lock that clips to a bottle-cage boss",
    ],
    good: [
      "18 mm shackle — the thickest compact D-lock we’ve reviewed",
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
        a: "If you need a lock you’ll carry, the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7). If you need Diamond, the [Litelok X1](/reviews/litelok-x1). If you need extra length at home, the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410). The longer version is [Instead of the New York Mini](/alternatives/kryptonite-new-york-fahgettaboudit-mini).",
      },
      {
        q: "Will insurers accept it?",
        a: "Gold is widely named. Always match the exact model to your insurer’s list. We don’t keep a live list.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "Same brand, Gold, and you’ll actually carry it.",
    altSecond: "litelok-x1",
    altSecondWhy: "You were buying New York for maximum thickness, and the policy would rather see Diamond.",
    relatedWell: {
      href: "/alternatives/kryptonite-new-york-fahgettaboudit-mini",
      title: "Instead of the New York Mini",
      blurb: "If you need Gold you’ll carry, Diamond for insurance, or a long chain to leave at home, another lock from this set is usually easier to live with on a weekday.",
    },
  },
  "kryptonite-new-york-fahgettaboudit-1410": {
    hook: "If you need reach at home, the 100 cm New York 1410 is the chain we’d leave by the bike rather than carry.",
    job: "Diamond on ordinary bikes, Gold on e-bikes, at 4.9kg.",
    meta: "Kryptonite New York 1410 chain review: 100 cm, 14 mm, 4.9kg. Sold Secure Diamond for ordinary bikes, Gold for e-bikes. Extra length for home or a terrace. Based on published grades and specs.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "This suits home, garden, or café-terrace use when a D-lock will not reach the only solid object. The 4.9kg weight, with no mount, makes it a poor daily commute lock. Sold Secure lists the chain with its New York disc lock as Diamond for ordinary bikes and Gold for e-bikes; looping the chain twice does not change the grade. Leave this where the bike is stored overnight and take a D-lock when you ride away.",
    subheads: [
      "Reach versus carry",
      "The listed weight is 4.9kg",
      "Diamond for ordinary bikes, Gold for e-bikes, and what looping twice does not change",
      "Using it with a commute D-lock",
    ],
    body: [
      "A D-lock suits a tight stand. A chain suits extra length. 100 cm of 14 mm New York chain will reach a ground anchor, a second bike, or a post a compact D-lock can’t close around. The 4.9kg weight makes it much more suitable to leave at home than to carry in a backpack every day.",
      "Sold Secure lists this chain with its New York disc lock as Pedal Cycle Diamond for ordinary bikes and Powered Cycle Gold for e-bikes. Looping the chain twice can take up slack, but it doesn’t change the Sold Secure grade, and it doesn’t turn an unapproved lamp-post into an approved anchor. Match the lock on Sold Secure’s list, and treat a ground anchor as a separate product if the policy names one.",
      "The disc lock is part of the kit, with three keys and no frame mount. Pair it with a D-lock you actually carry — often the Evolution Mini-7 for Gold, or the Litelok X1 if you need Diamond on the bike. At home, lock through the frame to something fixed, take up slack, leave the chain where the bike lives overnight, and take the D-lock when you leave the house.",
    ],
    bestFor: [
      "Home, a garden, or a ground anchor",
      "A post or terrace railing a compact D-lock can’t close around",
      "A second layer alongside a D-lock you take on the commute",
    ],
    skipIf: [
      "You need something you’ll carry five miles to work",
      "Your e-bike policy names Powered Cycle Diamond, or you want a lock sold as anti-grinder",
      "You expected a lightweight chain",
    ],
    good: [
      "100 cm of 14 mm chain — reach a D-lock can’t match",
      "Sold Secure Diamond for ordinary bikes, and Gold for e-bikes",
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
        a: "That’s the listed weight for this 100 cm New York 1410 kit. If another listing looks far lighter, it’s a different product.",
      },
      {
        q: "Can I use it on an e-bike?",
        a: "Yes, as a home or destination lock, if the policy accepts Gold for e-bikes — that’s the Powered Cycle grade Sold Secure lists for this chain. Almost nobody will carry 4.9kg as their only lock. For Diamond on an e-bike you still take to work, look at the X1.",
      },
      {
        q: "Does looping it twice make it stronger?",
        a: "It can reduce slack. It doesn’t change the Sold Secure grade, and it doesn’t turn a lamp-post into an approved anchor. Grade the lock, then the object you lock to.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "A Gold D-lock you can take on the ride to work, while leaving the chain where the bike is stored.",
    altSecond: "kryptonite-new-york-fahgettaboudit-1415",
    altSecondWhy: "100 cm won’t reach the anchor or a second bike. The 1415 is the 150 cm version with the same Sold Secure grades, at 6.92kg.",
  },
  "hiplok-dx1000": {
    hook: "If the D1000 won’t close on your stand, the DX1000 is the larger Hiplok we’d step up to.",
    job: "Diamond for bikes and e-bikes; 2.75kg and no frame mount.",
    meta: "Hiplok DX1000 review: Diamond for bikes and e-bikes, 2.75kg, 112 × 205 mm, no mount. Larger than the D1000. Measure the stand.",
    verdict:
      "This lock suits you if you want Hiplok’s anti-grinder D-lock and find the D1000’s 92 × 155 mm shackle too small — e-bikes, cargo frames, fat tyres, or fatter stands. It’s Sold Secure Diamond for ordinary bikes and for e-bikes. Specs: 2.75kg, a 32 mm shackle, a 112 × 205 mm locking area, three keys, and no frame mount. That’s 850 g more than the D1000, and more than a kilogram over the X1. The extra room is the reason to choose it, and only after you’ve measured.",
    subheads: [
      "Larger than the D1000 — still measure",
      "2.75kg and no frame mount",
      "Anti-grinder claims and the Sold Secure grade",
      "DX1000, D1000, or the Litelok X1",
    ],
    body: [
      "The DX1000 exists because the D1000 is too small for a lot of real bikes. Same Hiplok anti-grinder story, a larger locking area, and a weight you’ll notice. If 112 × 205 mm won’t close around your stand and your frame, the rest of the sheet doesn’t matter.",
      "112 × 205 mm is a step up from the D1000’s 92 × 155 mm. It’s in the same band as the X1 (101 × 197 mm), not in the band of a 300 mm shackle. Fat lamp-posts and some cargo racks will still beat it. Measure the post plus the tube. If you already know a compact lock fails and you need 292 mm or 300 mm, that’s the Pitbull LS or the ABUS 540.",
      "There’s no frame mount in the box. You carry 2.75kg in a bag, or you leave it at home. A Diamond lock on the kitchen floor doesn’t protect your bike at the stand. If you already know you’ll only use a lock that clips on, look at the Pitbull STD: Diamond for ordinary bikes, 1.44kg, a mount in the box.",
      "It’s Diamond for ordinary bikes and Diamond for e-bikes. The anti-grinder language is Hiplok’s. We haven’t taken a grinder to one. Diamond is a tougher Sold Secure test than Gold; it isn’t a promise that a battery grinder fails. Check the marking on the lock you buy, and the insurer’s list.",
      "If you want Diamond and you’ll still carry 1.7kg, that’s the X1. If 92 × 155 mm already closes, the D1000 is the lighter Hiplok. If you need a long shackle and a mount, the Pitbull LS or the 540 will close on posts this one won’t.",
    ],
    bestFor: [
      "E-bikes, cargo bikes, and fatter stands that beat the D1000’s 92 × 155 mm",
      "Policies that name Diamond, including the e-bike grade",
      "Riders who want Hiplok’s anti-grinder D-lock and have already measured 112 × 205 mm",
    ],
    skipIf: [
      "You haven’t measured 112 × 205 mm, or you need a 300 mm shackle",
      "You won’t carry 2.75kg with no frame mount",
      "You wanted Diamond with a clip on the bike — that’s the Pitbull STD",
    ],
    good: [
      "Diamond for ordinary bikes and for e-bikes",
      "Sold as anti-grinder; 32 mm shackle on the listing",
      "112 × 205 mm — more usable than the D1000 on e-bike and cargo frames",
      "Three numbered keys listed",
    ],
    bad: [
      "2.75kg with no frame mount in the box",
      "Still not a long shackle: fat lamp-posts can beat 205 mm",
      "Heavier than the X1, for a similar locking area",
    ],
    change:
      "A frame mount in the box would help. At 2.75kg this is the Hiplok most likely to stay in the hall.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "The D1000 is 92 × 155 mm and 1.9kg. The DX1000 is 112 × 205 mm and 2.75kg. Same Diamond grade for ordinary bikes and e-bikes, still no mount. Choose the one that closes. Side-by-side: [D1000 vs DX1000](/vs/d1000-vs-dx1000). Full D1000 write-up: [Hiplok D1000](/reviews/hiplok-d1000).",
      },
      {
        q: "DX1000 or Litelok X1?",
        a: "Same Diamond grade for ordinary bikes and e-bikes. The X1 is 1.7kg with a 101 × 197 mm locking area. The DX1000 is 2.75kg with 112 × 205 mm, sold as anti-grinder. If you need Diamond and you’ll still carry it, start with the X1.",
      },
      {
        q: "Will it close on a lamp-post?",
        a: "Not always. 112 × 205 mm is larger than the D1000, not as long as the Pitbull LS (115 × 292 mm) or the ABUS 540 (108 × 300 mm). Measure. If a compact lock already fails on that post, don’t assume this will close.",
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
    hook: "If you need Diamond and want a lock that clips to the frame, the STD 8003 is the one we’d look at first.",
    job: "More room inside the shackle than the Mini-7, at 1.44kg.",
    meta: "OnGuard Pitbull STD 8003 review: Sold Secure Diamond for ordinary bikes, 1.44kg, frame mount, 115 × 230 mm. Worth considering if you need Diamond with a clip. Based on published grades and specs.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "This suits you if your policy names Diamond and you won’t take a lock that doesn’t clip to the bike. Specs: 1.44kg, 14 mm shackle, 115 × 230 mm locking area, a frame mount, five keys, no cable. The ordinary-bike grade is Diamond. There’s no e-bike grade listed, so if the policy names powered Diamond, check Sold Secure and the insurer’s list before you treat this as an e-bike lock. It isn’t sold as anti-grinder.",
    subheads: [
      "Diamond with a frame mount",
      "115 × 230 mm locking area",
      "No cable, and no e-bike grade listed",
      "STD, DT, or LS",
    ],
    body: [
      "The X1 and the D1000 are Diamond locks you typically carry in a bag. This Pitbull fits if you want Diamond security but also want to carry the lock on the bike. At 1.44kg it’s lighter than the Mini-7, and the mount is in the box. That combination is why it sits on the best-of table: if you need Diamond and you already know you won’t take a loose lock every morning, start here.",
      "The locking area is 115 × 230 mm. That’s more generous than the Evolution Mini-7 (83 × 178 mm) and the D1000 (92 × 155 mm). It isn’t a 300 mm shackle. Measure your stand plus the frame tube. If a compact lock already fails on a fat lamp-post, look at the Pitbull LS (115 × 292 mm) or the ABUS 540.",
      "There’s no cable in this box. If the front wheel is quick-release, you still need something else to hold it, or you buy the DT 8005, which is this shackle plus a cable. The cable on the DT isn’t Diamond. Only the ordinary-bike Sold Secure grade is listed. If you ride an e-bike and the policy names the powered grade, the X1 and the D1000 are Diamond for both.",
      "It’s a 14 mm shackle, not sold as angle-grinder resistant. Diamond is the grade. A 14 mm bar isn’t a 32 mm Hiplok. If anti-grinder marketing is why you’re here, this is the wrong lock. If you wanted Gold with a cable and a mount, that’s the Mini-7.",
      "The DT is the same 115 × 230 mm D-lock with a cable in the box — heavier, still a mount, cable not graded. The LS is the long 115 × 292 mm sibling for posts this one won’t close on. Choose the STD unless you know you need the cable or the extra length.",
    ],
    bestFor: [
      "Diamond on a weekday commute, with a clip on the frame",
      "Ordinary bikes where the policy names Diamond and a Mini already closes on the stand",
      "Riders who will skip the X1 or D1000 because those boxes have no mount",
    ],
    skipIf: [
      "The policy names e-bike Diamond and you haven’t checked this model on Sold Secure",
      "You need a cable in the same box — that’s the DT 8005",
      "You need a long shackle for a fat post — that’s the LS 8002 or the ABUS 540",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes,",
      "1.44kg with a frame mount in the box",
      "115 × 230 mm — more room than the compact Minis",
      "Five keys listed",
    ],
    bad: [
      "No e-bike Sold Secure grade listed",
      "No cable, not sold as angle-grinder resistant",
      "230 mm won’t close on every fat post",
    ],
    change:
      "Print the ordinary-bike grade next to the e-bike line, even if the e-bike line is blank. Too many Diamond D-locks are sold as if every policy is the same.",
    faqs: [
      {
        q: "Is the Pitbull STD Sold Secure Diamond?",
        a: "Yes — Pedal Cycle Diamond on the listing. There’s no e-bike grade recorded. Check the marking on the lock you buy, and your insurer’s list.",
      },
      {
        q: "STD or DT 8005?",
        a: "Same 14 mm shackle, same 115 × 230 mm locking area, same mount. The DT adds a cable and is listed at 1.6kg. The cable isn’t Diamond. Choose the STD unless you want that cable in the box.",
      },
      {
        q: "Pitbull STD or Litelok X1?",
        a: "The X1 is Diamond for ordinary bikes and for e-bikes, 1.7kg, sold as armoured, no mount in the box. The STD is Diamond for ordinary bikes, 1.44kg, with a mount. Choose on the e-bike grade and on whether you’ll clip it on.",
      },
      {
        q: "Will it fit a Sheffield stand?",
        a: "Often yes. The locking area is 115 × 230 mm. Measure your stand plus the frame tube. If a Mini already fails, look at the [Pitbull LS](/reviews/onguard-pitbull-ls-8002) or the [ABUS 540](/reviews/abus-granit-xplus-540), not a thicker compact lock.",
      },
    ],
    altBest: "onguard-pitbull-dt-8005",
    altBestWhy: "Same Diamond D-lock, and you want a wheel cable in the box. The cable isn’t graded.",
    altSecond: "litelok-x1",
    altSecondWhy: "The policy names e-bike Diamond, or you want the armoured lock when you’ll still carry 1.7kg in a bag.",
  },
  "onguard-pitbull-dt-8005": {
    hook: "If you want Diamond plus a cable and mount in one box, the DT 8005 is the Pitbull we’d pick.",
    job: "The D-lock is Diamond; the cable isn’t Sold Secure graded.",
    meta: "OnGuard Pitbull DT 8005 review: Pedal Cycle Diamond D-lock with a cable, 1.6kg, 14 mm, 115 × 230 mm, mount. The cable is not graded.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "We’d choose this when you want the STD Pitbull’s Diamond D-lock and you also want a wheel cable in the same box. The D-lock is Sold Secure Diamond for ordinary bikes. The cable isn’t part of that grade — same rule as the Mini-7’s cable. Specs: 1.6kg, 14 mm, 115 × 230 mm, a frame mount, five keys. If you don’t need the cable, the STD is lighter.",
    subheads: [
      "The cable is not Diamond",
      "Same shackle as the STD",
      "A mount in the box, at 1.6kg",
      "DT, STD, or the Mini-7",
    ],
    body: [
      "This is the STD Pitbull with extras. The D-lock is the graded product. The cable is for a quick-release wheel or a helmet if you must, and it isn’t Sold Secure Diamond. If a listing photo makes the whole kit look approved, ignore the photo and lock the frame with the D-lock.",
      "The shackle matches the STD: 14 mm, 115 × 230 mm. Measure your stand plus the frame tube. If 230 mm already fails, the LS 8002 is the long Pitbull. The ordinary-bike grade is Diamond; there’s no e-bike grade listed.",
      "The frame mount is in the box, at 1.6kg, with five keys. There’s no anti-grinder claim listed. If Gold is enough, the Evolution Mini-7 sits in the same weight band with a cable. If you need Diamond without the cable, choose the STD. If you need Diamond for an e-bike policy, check this model on Sold Secure — the X1 is Diamond for both.",
    ],
    bestFor: [
      "Diamond on the D-lock, plus a wheel cable, in one box",
      "Commuters who want a frame mount and won’t buy a cable separately",
      "Quick-release front wheels, as long as the D-lock still holds the frame",
    ],
    skipIf: [
      "You don’t need a cable — the STD is the same D-lock, lighter",
      "You were going to lock the bike with the cable alone",
      "The policy names e-bike Diamond and you haven’t checked this model",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes, on the D-lock",
      "Frame mount and a cable in the box",
      "Same 115 × 230 mm shackle as the STD",
      "Five keys listed",
    ],
    bad: [
      "The cable isn’t graded, so don’t treat it as a second Diamond lock",
      "Heavier than the STD for extras you may not use",
      "No e-bike grade listed; not sold as anti-grinder",
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
        a: "The Mini-7 is Gold, 1.61kg, a mount and a cable — and the cable isn’t Gold. The DT is Diamond on the D-lock, 1.6kg, a mount and a cable — and the cable isn’t Diamond. If Gold meets the policy, you’d usually take the Mini-7.",
      },
      {
        q: "Will insurers treat the cable as Diamond?",
        a: "No. Match the graded D-lock to the policy, then use the cable as an extra. We don’t keep a live insurer list.",
      },
    ],
    altBest: "onguard-pitbull-std-8003",
    altBestWhy: "Same Diamond D-lock and mount, without paying in weight for a cable you may not use.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "Gold is enough, and you still want a cable and a clip in one box.",
  },
  "onguard-pitbull-ls-8002": {
    hook: "If a Mini won’t close round a fat post, the LS 8002 is the long Diamond Pitbull we’d clip to the bike.",
    job: "Frame mount in the box, 1.75kg.",
    meta: "OnGuard Pitbull LS 8002 review: Sold Secure Diamond for ordinary bikes, long 115 × 292 mm shackle, 1.75kg, frame mount. For fat posts and cargo when a Mini will not close.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "This helps when a compact Diamond won’t close and you still want a mount. 115 × 292 mm is in the same band as the ABUS 540’s 108 × 300 mm. Specs: 1.75kg, 14 mm, five keys, no cable, frame mount in the box. The ordinary-bike grade is Diamond; there’s no e-bike grade listed. The 540 is Diamond for ordinary bikes and Gold for e-bikes, with a slightly longer shackle. We’d pick this if you want the Pitbull mount and keys on a long shackle.",
    subheads: [
      "Why the long shackle helps",
      "Diamond for ordinary bikes — check e-bikes separately",
      "LS versus the ABUS 540",
      "Filling a long shackle",
    ],
    body: [
      "A compact lock that won’t close offers little protection. The LS exists because UK street furniture isn’t all Mini-sized. 115 × 292 mm will take posts the STD (115 × 230 mm) and the Mini-7 (83 × 178 mm) cannot.",
      "The ordinary-bike grade is Diamond. There isn’t an e-bike grade listed. If you ride an ordinary bike and the policy names Diamond, this lock is a real option with a mount. If you ride an e-bike and the policy names powered Diamond, check Sold Secure — the X1, D1000 and DX1000 are Diamond for both. The 540 is Diamond for ordinary bikes and Gold for e-bikes.",
      "The 540 is 108 × 300 mm, 1.8kg, two keys, EaZy KF bracket, no cable. This LS is 115 × 292 mm, 1.75kg, five keys, a mount, no cable. Neither is sold as anti-grinder. Choose on cylinder, keys, and the e-bike line — after you’ve measured. If you wanted Hiplok’s larger anti-grinder lock, the DX1000 is 112 × 205 mm: more room than the D1000, not this much length.",
      "The frame mount is in the box. 1.75kg on the frame is a lock you’re more likely to have with you. There’s no cable. A longer shackle also gives a thief more room for a tool. Fill it: frame plus rear wheel if they both fit, tight to the stand. If a Mini already closes on your stand, you don’t need this length — choose the STD, or the Mini-7 if Gold is enough. If you need a metre of chain at home, that’s the New York 1410.",
    ],
    bestFor: [
      "Fat posts and cargo frames a 230 mm Pitbull won’t close around",
      "Ordinary bikes that need Diamond and a frame mount",
      "Riders who want long-shackle reach without the ABUS 540",
    ],
    skipIf: [
      "A compact lock already closes — the STD is lighter",
      "The policy names e-bike Diamond and you haven’t checked this model",
      "You need a cable in the box, or a lock sold as anti-grinder",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes,",
      "115 × 292 mm — in the same band as the 540",
      "Frame mount in the box, 1.75kg",
      "Five keys listed",
    ],
    bad: [
      "No e-bike grade listed",
      "No cable; not sold as angle-grinder resistant",
      "A long shackle is more room for a tool if you leave a loop",
    ],
    change:
      "Say, on the same line as the 292 mm, that a long shackle needs filling. Length helps with fit, and it also leaves more room for a tool if you leave a loop.",
    faqs: [
      {
        q: "Pitbull LS or ABUS 540?",
        a: "Both are long D-locks with a mount. The LS is 115 × 292 mm, 1.75kg, five keys, Diamond for ordinary bikes. The 540 is 108 × 300 mm, 1.8kg, two keys, Diamond for ordinary bikes and Gold for e-bikes. Measure, then read the e-bike line on the policy.",
      },
      {
        q: "LS or STD 8003?",
        a: "Same 14 mm family, same mount, same ordinary-bike Diamond. The STD is 115 × 230 mm at 1.44kg. The LS is 115 × 292 mm at 1.75kg. Choose the STD if a compact lock already closes. Choose the LS if it doesn’t.",
      },
      {
        q: "Will it replace a chain at home?",
        a: "No. 292 mm is a long D-lock, not 100 cm of chain. For a ground anchor or a garden post, see the [New York 1410](/reviews/kryptonite-new-york-fahgettaboudit-1410).",
      },
      {
        q: "Is this anti-grinder?",
        a: "It isn’t sold that way. Diamond is the Sold Secure grade. If anti-grinder marketing is the reason you’re shopping, look at the [X1](/reviews/litelok-x1) or the Hiploks — and still measure your stand.",
      },
    ],
    altBest: "abus-granit-xplus-540",
    altBestWhy: "A slightly longer shackle, and the e-bike grade is on the page: Diamond for ordinary bikes, Gold for e-bikes.",
    altSecond: "onguard-pitbull-std-8003",
    altSecondWhy: "A compact lock already closes, and you still want Diamond with a mount.",
  },
  "abus-bordo-granit-6500k": {
    hook: "If a Mini won’t reach and Gold is enough, the Bordo 6500K gives you 120 cm and still rides on the bike.",
    job: "SH bracket in the box, 2.47kg.",
    meta: "ABUS Bordo Granit 6500K review: Sold Secure Pedal Cycle Gold folding lock, 2.47kg, 120 cm, SH bracket. Flexible Gold when reach matters more than Mini-7 weight.",
    verdict:
      "This suits you when Gold meets the policy, a compact D-lock won’t reach the only solid object, and you still want the lock on the bike rather than a 4.9kg chain at home. ABUS lists the weight at 2.47kg, which is 860 g more than the Mini-7. Unfolded it’s 120 cm, with an SH bracket and two keys on the listing. The bars are 5.5 mm, a different shape from a D-shackle. Sold Secure Pedal Cycle Gold is the grade. We’d take the Mini-7 if a Gold D-lock already closes, and this when you need the reach.",
    subheads: [
      "Reach you can still clip on",
      "Pedal Cycle Gold, and 5.5 mm bars",
      "Heavier than a Mini, lighter than a chain",
      "Bordo 6500K, Mini-7, or the 540",
    ],
    body: [
      "A D-lock suits a tight stand. A chain suits extra length you leave at home. A folding lock sits between those jobs: more reach than a Mini, on the bike, if you’ll actually clip 2.47kg in the SH bracket. The 6500K is ABUS’s successor to the Granit XPlus 6500, and the 120 cm version is 10 cm longer and about 300 g heavier than the old 110 cm lock. 120 cm is longer than the New York 1410, at about half the weight, with a different Sold Secure test and a different shape.",
      "Sold Secure lists Pedal Cycle Gold. There’s no e-bike grade listed. The bars are 5.5 mm. ABUS describes them as specially hardened steel with an extra-soft coating, and says the housing and the structural parts of the locking mechanism are hardened steel too. The Link Protection Shield at the rivets is ABUS’s saw-resistance claim. The cylinder is an ABUS XPlus disc cylinder, and security level 15 is ABUS’s own scale. Gold is still the grade a lot of UK household policies name. If the policy names Diamond, look at the X1, a Pitbull, or a Hiplok. The grade we’ll stand behind is Pedal Cycle Gold.",
      "At 2.47kg, this is a commute lock only if you’ll fit the SH bracket and use it. The bracket uses straps, needs no tools, and the lock comes out of the front. The listing includes two keys. ABUS says it can be ordered keyed alike. It’s key-locking, and ABUS’s model number is 62115. There’s no cable and no alarm. That’s a lot of lock on a down tube. It weighs 860 g more than the Mini-7. If 1.6kg already feels like too much, this will stay at home. The Mini-7 is the lighter Gold lock with a clip and a cable.",
      "If the problem is a fat post and you still want a D-shackle, the ABUS 540 (108 × 300 mm) or the Pitbull LS (115 × 292 mm) are the long D-locks. The Bordo 6500K helps when the object is awkward — a tree guard, a railing, a second bike — and a rigid shackle won’t snake through. It doesn’t win on weight or on Diamond.",
      "Keep the 1410 chain at home if you need 14 mm chain through a ground anchor. Take this Bordo 6500K when Gold is enough and the extra reach has to come with you.",
    ],
    bestFor: [
      "Gold policies where a Mini won’t reach the only solid object",
      "Riders who want 120 cm of reach with an SH bracket, and who would rather not carry a 4.9kg chain",
      "Awkward street furniture a rigid D-lock can’t snake through",
    ],
    skipIf: [
      "A compact D-lock already closes — the Mini-7 is lighter",
      "The policy names Diamond",
      "You won’t fit the SH bracket, and you won’t carry 2.47kg in a bag",
    ],
    good: [
      "Sold Secure Pedal Cycle Gold",
      "120 cm of folding reach — more than any D-lock we’ve reviewed",
      "SH bracket included, fitted with straps and no tools, with the lock coming out of the front",
      "2.47kg is heavy for a bag, and it’s about half the weight of a 4.9kg chain",
    ],
    bad: [
      "Pedal Cycle Gold, with 5.5 mm bars rather than a thick D-shackle",
      "Heavier than the Mini-7 by 860 g, with two keys listed",
      "No cable; no e-bike grade listed",
    ],
    change:
      "Call it a Gold reach lock in the title rather than implying it replaces Diamond. Too many folding-lock pages skip the grade and sell the fold.",
    faqs: [
      {
        q: "Bordo 6500K or Evolution Mini-7?",
        a: "The Mini-7 is Gold at 1.61kg, with a frame clip, a cable, and an 83 × 178 mm locking area. The Bordo 6500K is Pedal Cycle Gold at 2.47kg, which is 860 g more, with an SH bracket and 120 cm of folding bars. If a Mini already closes, take the Mini-7. Take the Bordo when you need the reach.",
      },
      {
        q: "Bordo 6500K or ABUS 540?",
        a: "The 540 is a 300 mm D-lock, Diamond for ordinary bikes and Gold for e-bikes, 1.8kg, with a mount. The Bordo 6500K is Pedal Cycle Gold, at 2.47kg, with 120 cm of folding bars. Rigid long shackle versus flexible length. Measure the object.",
      },
      {
        q: "Is a folding lock as strong as a D-lock?",
        a: "Not as a class. Grade, thickness, and whether you use it all matter more than the fold. This Bordo 6500K is Pedal Cycle Gold with 5.5 mm bars. A Diamond D-lock is a different test. Read the policy, then pick the shape that closes.",
      },
      {
        q: "Can I commute with it?",
        a: "At 2.47kg with an SH bracket, yes if Gold matches the policy and you’ll actually clip it on. It isn’t the lock for a Diamond line, and it isn’t a 4.9kg home chain.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "Gold is enough, a Mini already closes, and you want less lock to carry.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "You need a long rigid shackle, and Diamond for an ordinary bike, rather than 120 cm of folding bars.",
  },
  "seatylock-mason-140": {
    hook: "If you need Diamond at the lowest carry weight, the Mason 140 is about 0.97kg, once its short hole fits.",
    job: "Measure the 140 × 85 mm locking area first.",
    meta: "Seatylock Mason 140 review: Sold Secure Pedal Cycle Diamond, about 0.97kg, 140 × 85 mm locking area, mount sold separately. Light weekday Diamond carry — confirm e-bike grade on Sold Secure.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "The Mason 140 is Sold Secure Pedal Cycle Diamond on the Sold Secure record. Manufacturer and retailer sheets put the weight at about 0.97kg and the locking area at 140 × 85 mm. That’s meaningfully lighter than the Diamond D-locks already in this set. The shackle is a triangular profile rather than a round bar, so millimetre comparisons with other locks aren’t direct. The frame mount is sold separately. Powered Cycle (e-bike) Diamond isn’t listed on that Sold Secure product page — confirm on Sold Secure if your policy names the e-bike grade. We’d skip it if Gold is enough, if you need a longer shackle, or if you want a clip in the box.",
    subheads: [
      "Weight under 1kg, and what that means for a commute",
      "The short 140 × 85 mm locking area",
      "Pedal Cycle Diamond — check e-bike grades separately",
      "Mount sold separately, and triangular shackle numbers",
      "When to choose this lock or another",
    ],
    body: [
      "Among the Diamond D-locks reviewed here, the next lightest clipped option is the Pitbull STD at 1.44kg, and the bag-carry X1 and D1000 sit at 1.7kg and 1.9kg. A published weight of about 0.97kg is the reason this lock exists on Lock Desk: it’s for riders whose policy names Diamond and who won’t take 1.4–1.9kg every day. A lighter lock you take still beats a heavier Diamond lock left at home.",
      "That weight gap is the commute case. If about 0.97kg is a lock you’ll keep putting in a bag, Pedal Cycle Diamond becomes usable on weekday stands. If you already leave 1.7kg at home, stepping up a grade on paper won’t protect your bike at the station.",
      "The locking area is compact: 140 × 85 mm on manufacturer and retailer sheets. That’s short and narrow next to the Pitbull STD (115 × 230 mm) and the X1 (101 × 197 mm). It’s closer in spirit to a Mini. Measure your stand plus the frame tube before you buy. Fat tyres, cargo frames, and many UK lamp-posts won’t close. If a compact lock already fails on your rack, look at the Pitbull LS, the ABUS 540, or a longer Mason size rather than guessing from a photo.",
      "Sold Secure lists Pedal Cycle Diamond for the Mason U Lock 140. The public product page doesn’t show a Powered Cycle grade. Category labels for e-bike security on that site aren’t the same as a Powered Cycle Diamond row. If you ride an e-bike and the policy names the powered grade, confirm the exact model on Sold Secure and on the insurer’s list before you treat this as an e-bike Diamond lock. The X1, D1000 and DX1000 are Diamond for both ordinary bikes and e-bikes.",
      "Amazon’s listing for this size states that the mounting bracket is sold separately. Budget for Seatylock’s bracket, or carry the lock in a bag. The shackle uses a patented triangular crossbar profile. Retailer sheets often quote about 13.7 mm; that isn’t a round-bar figure you can line up cleanly with the 14 mm Pitbull or the 20 mm Hiplok. Rely on the Sold Secure grade and whether the lock closes, not on a millimetre contest. Maker lines about uncuttable locks or grinders are advertising. Diamond is a tougher Sold Secure test than Gold. It isn’t a promise that a battery grinder will fail.",
      "Choose the Mason 140 when Pedal Cycle Diamond matches the policy, 140 × 85 mm will close, and carry weight is the limiting factor. Choose the Pitbull STD if you need Diamond with a clip in the box and more room inside the shackle. Choose the X1 if you need Diamond for ordinary bikes and e-bikes with a larger locking area at about 1.7kg. Choose the D1000 only after you’ve measured its 92 × 155 mm hole. Choose the Evolution Mini-7 if Gold is enough and you want a mount and cable in one kit.",
    ],
    bestFor: [
      "Ordinary bikes where the policy names Pedal Cycle Diamond and carry weight is the main limit",
      "Weekday bag carry when about 0.97kg is realistic and 1.4–1.9kg is not",
      "Tight stands you’ve already measured against 140 × 85 mm",
    ],
    skipIf: [
      "Gold meets the policy — the Evolution Mini-7 is the clearer Gold commute kit with a mount and cable",
      "You need a longer shackle or more internal room than 140 × 85 mm",
      "You want a frame mount in the box",
      "The policy names Powered Cycle Diamond and you haven’t confirmed this model on Sold Secure",
    ],
    good: [
      "Sold Secure Pedal Cycle Diamond on the Sold Secure record",
      "Published weight about 0.97kg — lighter than the other Diamond D-locks on this site",
      "Compact form many people will actually take every day",
      "Three keys and a key-duplication card listed on the Amazon kit",
    ],
    bad: [
      "140 × 85 mm is small; many UK stands won’t close — measure first",
      "Frame mount sold separately",
      "No Powered Cycle grade on the Sold Secure product page",
      "Triangular shackle — published millimetre figures aren’t directly comparable to round bars",
    ],
    change:
      "Include a frame mount as standard, and publish the ordinary-bike grade next to a clear e-bike line so buyers aren’t left guessing from category labels.",
    faqs: [
      {
        q: "Is the Seatylock Mason 140 Sold Secure Diamond?",
        a: "Yes for ordinary bikes — Pedal Cycle Diamond on the Sold Secure Mason U Lock 140 page. Powered Cycle (e-bike) Diamond wasn’t listed on that page. Confirm the marking on the lock you buy, and your insurer’s list.",
      },
      {
        q: "Is it really under 1kg?",
        a: "The maker and retailers put this 140 mm size at about 0.97kg, so that’s the figure we’d plan on. To be fair to you, we haven’t weighed one ourselves.",
      },
      {
        q: "Will it fit my bike stand?",
        a: "Only after you measure. The locking area is 140 × 85 mm. That’s short. If a Mini already fails on your stand, this one may fail too. Look at the [Pitbull LS](/reviews/onguard-pitbull-ls-8002) or the [ABUS 540](/reviews/abus-granit-xplus-540) for longer shackles.",
      },
      {
        q: "Does it come with a frame mount?",
        a: "No. The Amazon listing for this size says the mounting bracket is sold separately. Plan on a bag or buying Seatylock’s bracket.",
      },
      {
        q: "Mason 140 or Litelok X1?",
        a: "The Mason is lighter (about 0.97kg) with a smaller locking area, and Pedal Cycle Diamond on our Sold Secure check. The [X1](/reviews/litelok-x1) is 1.7kg with 101 × 197 mm and Diamond for ordinary bikes and e-bikes. Choose on e-bike grade, fit, and whether you’ll carry 1.7kg.",
      },
      {
        q: "Mason 140 or Hiplok D1000?",
        a: "Both are compact Diamond options. The D1000 is 1.9kg with a 92 × 155 mm hole and is sold as anti-grinder; it’s also Diamond for e-bikes. The Mason is lighter. Measure both holes before you pick on marketing alone. Full D1000 write-up: [Hiplok D1000](/reviews/hiplok-d1000).",
      },
    ],
    altBest: "onguard-pitbull-std-8003",
    altBestWhy: "You need Pedal Cycle Diamond with a frame mount in the box and more room inside the shackle (115 × 230 mm at 1.44kg).",
    altSecond: "litelok-x1",
    altSecondWhy: "You need Diamond for ordinary bikes and e-bikes, with a larger locking area, and you’ll still carry about 1.7kg.",
  },
  "kryptonite-new-york-fahgettaboudit-1415": {
    hook: "If 100 cm won’t reach, the 150 cm New York 1415 is the longer chain we’d leave where the bike lives.",
    job: "Diamond on ordinary bikes, Gold on e-bikes, at 6.92kg.",
    meta: "Kryptonite New York Fahgettaboudit 1415 chain review: Sold Secure Diamond for ordinary bikes, Gold for e-bikes. 150 cm, 6.92kg, for reach at home rather than a commute. Compared with the 1410.",
    stamp: "Diamond (ordinary bikes)",
    verdict:
      "The Kryptonite New York Fahgettaboudit 1415 is a 150 cm chain with a New York disc lock. Sold Secure lists it as Diamond for ordinary bikes and Gold for e-bikes, and Kryptonite’s published sheet puts the chain at 14 mm and the weight at 6.92kg. It suits a bike that stays at home, in a shed, or by a post that a 100 cm chain won’t reach, when the policy names Diamond for an ordinary bike and the chain can stay where the bike is stored. It’s a poor match for a commute, because it’s about 2kg heavier than the New York 1410, and that chain is already too heavy to take to work. It’s also a poor match if an e-bike policy asks for Powered Cycle Diamond, because the Sold Secure record for this model is Gold on powered cycles.",
    subheads: [
      "When 150 cm is worth the extra weight",
      "Diamond for ordinary bikes, Gold for e-bikes",
      "The grade covers the chain and the disc lock together",
      "Weight, keys, and what is not in the box",
      "When to choose this chain or another",
    ],
    body: [
      "Lock Desk already covers the New York 1410, which is 100 cm long. The 1415 is the same family with 50 cm more chain. Kryptonite lists 14 mm six-sided links, a 15 mm shackle on the disc lock, and a nylon cover. The extra length is the reason to choose it. It also adds about 2kg, which is why it’s a lock for home rather than for a bag.",
      "A longer chain helps when the only fixed object is some distance from where the bike stands, when a ground anchor sits low against a wall, or when two bikes share one point. Measure the route the chain will take before you buy: through the frame, through a wheel if you can, and around the anchor. If 100 cm closes comfortably, the 1410 does the same job with less weight and less slack for a thief to work with. If it does not, the 1415 gives you the extra half metre.",
      "Sold Secure lists the NY Fahgettaboudit Chain 1415 & NY Disc Lock as Pedal Cycle Diamond and Powered Cycle Gold. Those are separate tests. If you ride an ordinary bike and the policy names Diamond, this chain matches the grade. If you ride an e-bike and the policy names the Powered Cycle Diamond grade, it doesn’t. The Sold Secure page also lists Thatcham CAT3, which is a separate scheme rather than a Sold Secure grade, and Kryptonite’s own security rating is the maker’s scale rather than a Sold Secure result.",
      "The Sold Secure record is for the chain sold with the New York disc lock. If you use a different padlock, don’t assume the grade carries over. Looping the chain twice can take up slack, but it doesn’t change the grade, and it doesn’t turn a loose object into an anchor. Lock through the frame to something that doesn’t move, and treat a ground anchor as a separate product if the policy names one. Confirm the pairing on Sold Secure’s approved product search and on the insurer’s own list before you buy.",
      "At 6.92kg this isn’t a lock to carry on the bike. Neither Kryptonite nor Sold Secure lists a frame mount or a cable with it, which is normal for a chain of this size. Kryptonite lists three stainless keys, one of them with a light and a replaceable battery. The nylon cover helps stop the links marking the frame when the chain is pulled tight.",
      "Choose the 1415 when the bike stays at home, the policy names Diamond for an ordinary bike, and you’ve measured that 100 cm isn’t enough. Choose the New York 1410 if 100 cm reaches, since it has the same Sold Secure grades at 4.9kg. For riding away from home, pair either chain with a D-lock you’ll carry: the Evolution Mini-7 if Gold is enough, or the Litelok X1 if you need Diamond for an ordinary bike or an e-bike and will carry 1.7kg. If Gold is enough and the extra reach has to come with you on the bike, the ABUS Bordo 6500K folds into a frame bracket.",
    ],
    bestFor: [
      "Ordinary bikes kept at home or in a garden, where the policy names Pedal Cycle Diamond",
      "A post, railing, or ground anchor that 100 cm won’t reach, once you’ve measured for 150 cm",
      "Two bikes on the same fixed point, if the chain still closes through each frame",
      "Riders who already carry a D-lock and want the chain to stay where the bike is stored",
    ],
    skipIf: [
      "You want a lock to carry every day — it weighs 6.92kg and has no frame mount",
      "Your e-bike policy names Powered Cycle Diamond — this chain is Gold for e-bikes",
      "A compact D-lock already closes on the stand you use",
      "100 cm is enough — the New York 1410 is shorter and lighter, with the same grades",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes, for the chain and disc lock sold together",
      "150 cm of chain, which is 50 cm more than the 1410",
      "14 mm links and a 15 mm disc-lock shackle on Kryptonite’s published sheet",
      "Three keys listed by Kryptonite, one of them with a light",
      "A nylon cover, which helps protect the frame from the links",
    ],
    bad: [
      "The e-bike (Powered Cycle) grade is Gold",
      "6.92kg is about 2kg more than the 1410, and too heavy for a bag",
      "The grade applies to this chain with its New York disc lock; a different padlock may not keep it",
      "No frame mount and no cable listed",
      "Thatcham CAT3 appears on the Sold Secure page, but it’s a separate scheme from the Sold Secure grade",
      "A chain only protects as well as the object it goes around",
    ],
    change:
      "A clear line on Kryptonite’s UK listings that this is the 150 cm chain, so buyers don’t order it expecting the 100 cm 1410, or the other way round.",
    faqs: [
      {
        q: "Kryptonite 1415 or 1410?",
        a: "Both are New York chains with the same disc lock, and Sold Secure lists both as Diamond for ordinary bikes and Gold for e-bikes. The 1415 is 150 cm and 6.92kg. The [1410](/reviews/kryptonite-new-york-fahgettaboudit-1410) is 100 cm and 4.9kg. Measure the route around the anchor, and choose the shorter chain if it reaches.",
      },
      {
        q: "Will it meet an e-bike insurance policy?",
        a: "Only if the policy accepts Gold for e-bikes. Sold Secure lists this chain as Powered Cycle Gold. If the wording names Powered Cycle Diamond, look at a lock with that grade, such as the [Litelok X1](/reviews/litelok-x1), and check the insurer’s approved list. More on matching grades: [best bike lock for insurance](/for/insurance).",
      },
      {
        q: "Can I carry it on the bike?",
        a: "Not realistically for daily riding. It weighs 6.92kg and there’s no frame mount in the box. Leave it where the bike is stored and carry a D-lock. [D-lock vs chain](/vs/d-lock-vs-chain) explains how the two work together.",
      },
    ],
    altBest: "kryptonite-new-york-fahgettaboudit-1410",
    altBestWhy: "100 cm is enough to reach the anchor. It has the same Sold Secure grades and is about 2kg lighter.",
    altSecond: "litelok-x1",
    altSecondWhy: "You need a Diamond lock to take with you, including the e-bike grade, and you’ll carry 1.7kg.",
  },
  "kryptonite-new-york-diamond": {
    hook: "If you want Diamond for your bike and your e-bike in a lock that clips on, the New York Diamond is the one we’d look at, as long as 2.3kg doesn’t put you off.",
    job: "Diamond for bikes and e-bikes, bracket in the box, 95 × 204 mm.",
    meta: "Kryptonite New York Diamond review: Sold Secure Diamond for bikes and e-bikes, 2.3kg, 95 × 204 mm, FlexFrame-U bracket included. Sold as angle-grinder resistant.",
    stamp: "Diamond (bikes and e-bikes)",
    verdict:
      "The New York Lock Diamond Standard is Sold Secure Diamond for ordinary bikes and for e-bikes on the Sold Secure record. Kryptonite puts it at 2.3kg with a 95 × 204 mm locking area, and there’s a FlexFrame-U bracket in the box, so you can carry it on the bike rather than in a bag. It suits you if the policy names Diamond, the bike lives outside the office or the station all day, and you’d rather clip the lock on than carry it. Here’s the catch: 2.3kg is a lot to take every day, and if your policy only asks for Gold, the Evolution Mini-7 does that job at 1.61kg.",
    subheads: [
      "Diamond on both Sold Secure tests",
      "Will 95 × 204 mm close on your stand?",
      "Carrying 2.3kg, and the bracket in the box",
      "When to choose this lock or another",
    ],
    body: [
      "Short answer: it’s Kryptonite’s grinder-resistant D-lock, and it holds the top Sold Secure grade on both the ordinary-bike and e-bike tests. Kryptonite describes a 26 mm diamond-coated, double-layered shackle (that’s the outer, coated figure, so don’t line it up against a plain steel bar) and a double deadbolt, which means a thief has to cut both sides to get it off. That’s maker wording; the Sold Secure grade is the independent part.",
      "Sold Secure lists the New York Lock Diamond STD as Pedal Cycle Diamond and Powered Cycle Diamond. That matters if you ride an e-bike, because several locks on Lock Desk are Diamond for ordinary bikes but only Gold for e-bikes. If your policy names the e-bike grade, this one matches it. Check the exact model on your insurer’s list too, since some insurers keep their own.",
      "Kryptonite puts the inside of the shackle at 95 × 204 mm. That’s roomier than the D1000’s 92 × 155 mm and a touch longer than the Litelok X1’s 101 × 197 mm, so it’ll go round most Sheffield stands with a frame tube inside. Worth knowing: a thick e-bike down tube eats into that width quickly, so measure your frame and the stand together before you buy.",
      "At 2.3kg it’s heavier than the X1 (1.7kg) and the Pitbull STD (1.44kg). The good news is the FlexFrame-U bracket comes in the box, so you can leave it on the bike instead of in a rucksack. If you know you won’t carry 2.3kg, a lighter lock you actually take does more for your bike than this one left in the hallway. One more thing: in 2025 The Best Bike Lock reported an early unit with no anti-grinder layer at the base of the shackle, and found later units fixed, so we’d buy from a seller with easy returns and check the shackle ends show the textured coating.",
      "Choose the New York Diamond when the policy names Diamond (especially on an e-bike), you want a bracket in the box, and 2.3kg is a weight you’ll still clip on every day. Choose the Litelok X1 if you want Diamond for bikes and e-bikes at 1.7kg and don’t mind carrying it in a bag. Choose the OnGuard RockSolid 8590 if lighter matters more than room inside the shackle. Choose the Evolution Mini-7 if Gold is all your policy asks for.",
    ],
    bestFor: [
      "E-bikes and ordinary bikes where the policy names Sold Secure Diamond",
      "Riders who want the lock on the bike, with a bracket in the box",
      "Long days outside the office or the station, on stands you’ve already measured against 95 × 204 mm",
    ],
    skipIf: [
      "Gold meets your policy — the Evolution Mini-7 is lighter at 1.61kg",
      "You won’t carry 2.3kg every day",
      "A fat e-bike down tube plus your stand won’t fit inside 95 mm",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes and for e-bikes",
      "FlexFrame-U bracket in the box",
      "95 × 204 mm locking area, roomier than the compact anti-grinder locks",
      "Double deadbolt, so both sides of the shackle have to be cut",
      "Three keys on Kryptonite’s sheet",
    ],
    bad: [
      "2.3kg is heavy for a daily carry",
      "The Best Bike Lock reported an early 2025 unit with an unprotected shackle base; later units were fixed",
      "The 26 mm shackle figure includes the coating, so it isn’t a like-for-like steel measurement",
    ],
    change:
      "A lighter, shorter version for riders who only need a tight Sheffield stand, so Diamond for e-bikes doesn’t always mean 2.3kg.",
    faqs: [
      {
        q: "Is the Kryptonite New York Diamond Sold Secure Diamond?",
        a: "Yes. Sold Secure lists the New York Lock Diamond STD as Pedal Cycle Diamond and Powered Cycle Diamond, so it covers ordinary bikes and e-bikes. Check the marking on the lock you receive and your insurer’s own list.",
      },
      {
        q: "How heavy is the New York Diamond?",
        a: "Kryptonite says 2.3kg. That’s more than the [Litelok X1](/reviews/litelok-x1) at 1.7kg, but the New York Diamond comes with a bracket, so you can carry it on the frame.",
      },
      {
        q: "New York Diamond or Litelok X1?",
        a: "Both are Diamond for bikes and e-bikes. The New York Diamond is 2.3kg with a bracket and 95 × 204 mm inside. The X1 is 1.7kg with 101 × 197 mm and no clip in the box. We’d pick on how you’ll carry it.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "You want Diamond for bikes and e-bikes at 1.7kg and you’re happy to carry it in a bag.",
    altSecond: "onguard-rocksolid-8590",
    altSecondWhy: "You need Diamond for bikes and e-bikes at about 1.4kg, and 90 × 175 mm closes on your stand.",
  },
  "squire-stronghold-d16-max": {
    hook: "If your e-bike policy names Powered Cycle Diamond and the lock can live on the bike or in a pannier, the Squire D16 MAX is a solid British-made option at 2.84kg.",
    job: "Powered Cycle Diamond, 94 × 218 mm, 2.84kg.",
    meta: "Squire Stronghold D16 MAX review: Sold Secure Powered Cycle Diamond, 2.84kg, 94 × 218 mm, 16 mm shackle. Sold as anti-angle-grinder; heavy for a daily carry.",
    stamp: "Powered Cycle Diamond",
    verdict:
      "The Stronghold D16 MAX is Sold Secure Powered Cycle Diamond on the Sold Secure record, the grade e-bike policies tend to name. Squire puts it at 2.84kg with a 16 mm boron steel shackle and a 94 × 218 mm locking area, wrapped in tungsten carbide armour that the maker sells as anti-angle-grinder. It suits an e-bike or cargo bike that’s left in the same spot a lot, where you can keep the lock on the bike or in a pannier. Here’s the catch: 2.84kg is the heaviest D-lock on Lock Desk, so it’s a poor match if you’ll be carrying it in a bag every day.",
    subheads: [
      "Powered Cycle Diamond, and what it means for an ordinary bike",
      "A 94 × 218 mm locking area",
      "2.84kg, and how you’ll carry it",
      "When to choose this lock or another",
    ],
    body: [
      "Short answer: it’s Squire’s armoured D-lock, made in Britain, with a 16 mm boron hardened steel shackle and a 25 mm hardened steel body, both sheathed in tungsten carbide. Squire lists a 6-pin cylinder with a restricted key section, two keys and a key card for copies. The tungsten carbide is there to wear grinder discs down; that’s the maker’s claim, and the Sold Secure grade is the independent check.",
      "Sold Secure lists the Squire Stronghold D16 Max as Powered Cycle Diamond. The public product page doesn’t show a separate Pedal Cycle row. The Powered Cycle test is the tougher of the two, but if your policy names Pedal Cycle Diamond word for word, confirm with your insurer that they’ll accept the powered grade before you buy.",
      "Squire puts the inside at 94 × 218 mm. That’s long enough to go round a Sheffield stand with the frame inside, and longer than the D1000 (92 × 155 mm) or the RockSolid 8590 (90 × 175 mm). The width is similar to the other compact anti-grinder locks, so a fat e-bike down tube is still the thing to measure.",
      "At 2.84kg it’s heavier than the Hiplok DX1000 (2.75kg) and well over the Litelok X1 (1.7kg). Squire doesn’t list a frame bracket in the box, so plan on a pannier, a rack strap or leaving it on the bike at home. If you’d be carrying it in a rucksack five days a week, honestly, a lighter Diamond lock you’ll keep using is the better bet.",
      "Choose the D16 MAX when your policy names Powered Cycle Diamond, the bike is an e-bike or cargo bike, and you’ve a way to carry 2.84kg on the bike. Choose the Kryptonite New York Diamond if you want Diamond on both tests with a bracket in the box at 2.3kg. Choose the Hiplok DX1000 if you want more width inside the shackle (112 × 205 mm). Choose the Litelok X1 if weight is the deciding factor.",
    ],
    bestFor: [
      "E-bikes and cargo bikes where the policy names Powered Cycle Diamond",
      "Bikes left in the same spot for long stretches, with a pannier or rack to carry the lock",
      "Stands you’ve measured against 94 × 218 mm",
    ],
    skipIf: [
      "You’ll carry it in a bag every day — 2.84kg is a lot",
      "Your policy names Pedal Cycle Diamond and your insurer won’t confirm the powered grade covers it",
      "Gold is enough — the Evolution Mini-7 is 1.61kg with a clip and cable",
    ],
    good: [
      "Sold Secure Powered Cycle Diamond",
      "16 mm boron steel shackle with tungsten carbide armour",
      "94 × 218 mm locking area, longer than the compact anti-grinder locks",
      "Restricted key section with a key card for copies",
      "Made in Britain, per Squire",
    ],
    bad: [
      "2.84kg, the heaviest D-lock on Lock Desk",
      "No frame bracket listed in the box",
      "Only a Powered Cycle row on the Sold Secure product page",
    ],
    change:
      "A frame bracket in the box. At 2.84kg, most riders will want the lock on the bike rather than in a bag.",
    faqs: [
      {
        q: "Is the Squire Stronghold D16 MAX Sold Secure Diamond?",
        a: "Yes, Powered Cycle Diamond on the Sold Secure product page. There’s no separate Pedal Cycle row on that page, so if your policy names the ordinary-bike grade, check your insurer accepts the powered grade.",
      },
      {
        q: "How heavy is the D16 MAX?",
        a: "Squire says 2.84kg. That’s heavier than the [Hiplok DX1000](/reviews/hiplok-dx1000) at 2.75kg, so it’s best kept on the bike or in a pannier.",
      },
      {
        q: "D16 MAX or Kryptonite New York Diamond?",
        a: "Both are Powered Cycle Diamond. The [New York Diamond](/reviews/kryptonite-new-york-diamond) is lighter at 2.3kg, comes with a bracket and also lists Pedal Cycle Diamond. The D16 MAX has a longer 94 × 218 mm locking area. Measure the stand and choose on fit and carry.",
      },
    ],
    altBest: "kryptonite-new-york-diamond",
    altBestWhy: "You want Diamond on both Sold Secure tests with a bracket in the box, at 2.3kg.",
    altSecond: "hiplok-dx1000",
    altSecondWhy: "You need more width inside the shackle (112 × 205 mm) for a fat e-bike frame.",
  },
  "oxford-grinder-s1": {
    hook: "If you need Diamond for an e-bike and want a frame bracket and a roomy shackle, the 320 mm Oxford Grinder S1 is the one we’d look at, at about 2.36kg.",
    job: "Diamond for bikes and e-bikes, bracket included, about 115 × 247 mm.",
    meta: "Oxford Grinder S1 (320 mm, LK376) review: Sold Secure Diamond for bikes and e-bikes, about 2.36kg, roomy shackle, carry bracket included. Sold as anti-grinder.",
    stamp: "Diamond (bikes and e-bikes)",
    verdict:
      "The Oxford Grinder S1 in the long 320 mm size (LK376) is Sold Secure Diamond for ordinary bikes and for e-bikes on the Sold Secure listing. Oxford gives a 14 mm hardened steel core under a carbide coating and a carry bracket in the box. Oxford doesn’t publish the weight or inside size, but Bennetts BikeSocial measured the long S1 at 2,355g with about 247 × 115 mm inside. It suits an e-bike or chunky frame where the compact anti-grinder locks won’t close. Here’s the catch: at about 2.36kg it’s a lock for the bracket, not the rucksack.",
    subheads: [
      "Diamond on both Sold Secure tests",
      "A roomy shackle for chunky frames",
      "Weight, bracket and keys",
      "When to choose this lock or another",
    ],
    body: [
      "Short answer: it’s Oxford’s grinder-resistant D-lock, with a square 14 mm hardened steel core under a faceted carbide coating, a double-locking shackle and a disc detainer cylinder. Oxford claims it takes an average of 10 grinder discs to cut one side. That’s the maker’s figure; BikeSocial’s own attack took almost three discs for one cut, so treat any disc count as a rough guide and the Sold Secure grade as the bit that matters.",
      "Sold Secure lists the Grinder Shackle 1 U-Lock 320mm as Pedal Cycle Diamond and Powered Cycle Diamond. If your e-bike policy names the powered grade, this matches it. The shorter 260 mm Grinder S1 (LK375) has the same grades on that listing, so check the code on the box (LK376 is the long one).",
      "Bennetts BikeSocial measured the inside of the long S1 at about 247 × 115 mm. That’s much roomier than the D1000 (92 × 155 mm) or the RockSolid 8590 (90 × 175 mm), so it’ll take a fat e-bike down tube and a stand, or go round a lamp-post. Oxford only publishes the outside size (320 × 184 mm), so we’d plan on BikeSocial’s figure and measure your frame and stand to be sure.",
      "BikeSocial weighed the long S1 at 2,355g. Oxford includes a carry bracket, with a thinner sleeve on one side of the shackle so it slides into the clip; you’ll want a bit of clearance on the frame to get it in and out. There are three keys and a replacement-key service, plus a 10-year guarantee against defects, per Oxford.",
      "Choose the Grinder S1 when the policy names Diamond (bike or e-bike), the frame or stand is too chunky for the compact anti-grinder locks, and you’ll carry about 2.36kg in the bracket. Choose the Kryptonite New York Diamond if 95 × 204 mm is enough and you’d like it a little lighter at 2.3kg. Choose the Hiplok DX1000 if you prefer Hiplok’s design at 112 × 205 mm. Choose the Litelok X1 if weight matters most.",
    ],
    bestFor: [
      "E-bikes and ordinary bikes where the policy names Sold Secure Diamond",
      "Chunky frames and fat stands that compact anti-grinder locks won’t close around",
      "Riders who want the lock in a frame bracket",
    ],
    skipIf: [
      "You’d carry it in a bag every day — it’s about 2.36kg",
      "A compact Diamond lock already closes on your stand",
      "Gold meets your policy",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes and for e-bikes",
      "Roomy shackle, about 247 × 115 mm inside on BikeSocial’s measurement",
      "Carry bracket in the box",
      "Double-locking shackle, so both sides need cutting",
      "Replacement-key service and a 10-year guarantee from Oxford",
    ],
    bad: [
      "About 2.36kg",
      "Oxford doesn’t publish the weight or inside size; the figures come from BikeSocial",
      "Two lengths with similar names — check the LK376 code for the 320 mm lock",
    ],
    change:
      "Publish the weight and inside size on the product page, so riders don’t have to look to a review to see whether it’ll close.",
    faqs: [
      {
        q: "Is the Oxford Grinder S1 Sold Secure Diamond?",
        a: "Yes. Sold Secure lists the Grinder Shackle 1 U-Lock 320mm as Pedal Cycle Diamond and Powered Cycle Diamond. The 260 mm version has the same grades on that listing.",
      },
      {
        q: "How big is the inside of the Grinder S1 320 mm?",
        a: "Bennetts BikeSocial measured about 247 × 115 mm. Oxford only publishes the outside size, 320 × 184 mm. Measure your frame and stand together before you buy.",
      },
      {
        q: "Grinder S1 or Hiplok DX1000?",
        a: "Both are bigger anti-grinder D-locks. The Grinder S1 320 mm is Diamond for bikes and e-bikes with a bracket and a longer shackle. The [DX1000](/reviews/hiplok-dx1000) is 2.75kg, 112 × 205 mm, with no clip listed. Choose on fit and how you’ll carry it.",
      },
    ],
    altBest: "kryptonite-new-york-diamond",
    altBestWhy: "95 × 204 mm is enough for your stand and you’d like Diamond for bikes and e-bikes with a bracket at 2.3kg.",
    altSecond: "hiplok-dx1000",
    altSecondWhy: "You prefer Hiplok’s anti-grinder design with a 112 × 205 mm locking area.",
  },
  "abus-granit-super-extreme-2500": {
    hook: "If you ride an e-bike or cargo bike and want ABUS’s grinder-resistant D-lock with a holder in the box, the Granit Super Extreme 2500 is worth a look at 2.47kg.",
    job: "Powered Cycle Diamond on Sold Secure, 102 × 230 mm, USH 2500 holder.",
    meta: "ABUS Granit Super Extreme 2500 review: Sold Secure Powered Cycle Diamond, 2.47kg, 102 × 230 mm, tungsten carbide armour and a USH 2500 holder in the box.",
    stamp: "Powered Cycle Diamond",
    verdict:
      "The ABUS Granit Super Extreme 2500/165HB230 is Sold Secure Powered Cycle Diamond on the Sold Secure record, and ABUS also lists Pedal Cycle Diamond. ABUS puts it at 2.47kg with a 102 × 230 mm locking area and a tungsten carbide shell over the shackle and body. There’s a USH 2500 holder in the box. It suits an e-bike, cargo bike or bulky frame where you want a roomy Diamond lock that rides on the bike. Here’s the catch: 2.47kg is heavy for a bag, so it really wants that holder.",
    subheads: [
      "Powered Cycle Diamond, and the Pedal Cycle grade",
      "102 × 230 mm for bulky frames",
      "Weight and the USH 2500 holder",
      "When to choose this lock or another",
    ],
    body: [
      "Short answer: it’s ABUS’s grinder-resistant D-lock, made in Germany, with a hardened square shackle (Sold Secure’s page gives 20 mm square with a 7 mm plastic casing) wrapped in a tungsten carbide compound, a double-locking shackle and an XPlus cylinder. ABUS sells the carbide shell against battery angle grinders; that’s maker wording, and the Sold Secure grade is the independent part.",
      "Sold Secure lists the ABUS 2500/165HB230 as Powered Cycle Diamond. ABUS’s own product page also shows a Sold Secure Pedal Cycle Diamond seal, but the Sold Secure product record only carries the powered row. The powered test is the tougher of the two. If your policy names Pedal Cycle Diamond word for word, check your insurer accepts this listing.",
      "ABUS gives the locking area as 102 × 230 mm. That’s a little wider than the D1000 and the RockSolid 8590, and long enough for most Sheffield stands with a chunky frame inside, which is why ABUS pitches it at e-bikes and cargo bikes. As always, measure your down tube and the stand together.",
      "At 2.47kg it sits between the New York Diamond (2.3kg) and the Squire D16 MAX (2.84kg). The USH 2500 holder fixes to the frame or rack with coated metal straps and holds both ends of the shackle so it doesn’t rattle. You get two keys and an ABUS code card for replacements.",
      "Choose the Super Extreme 2500 when the bike is an e-bike or bulky frame, the policy names Powered Cycle Diamond, and the lock can ride in its holder. Choose the Oxford Grinder S1 320 mm if you need even more length inside. Choose the Kryptonite New York Diamond if you want Diamond on both Sold Secure records at 2.3kg. Choose the ABUS Granit XPlus 540 if Pedal Cycle Diamond is enough and you don’t need grinder armour.",
    ],
    bestFor: [
      "E-bikes, cargo bikes and bulky frames where the policy names Powered Cycle Diamond",
      "Riders who want the lock in a holder on the bike",
      "Stands you’ve measured against 102 × 230 mm",
    ],
    skipIf: [
      "You’d carry it in a bag every day — 2.47kg is a lot",
      "Your policy names Pedal Cycle Diamond and your insurer wants that exact Sold Secure row",
      "Gold meets your policy",
    ],
    good: [
      "Sold Secure Powered Cycle Diamond",
      "Tungsten carbide shell over the shackle and body",
      "102 × 230 mm locking area for chunkier frames",
      "USH 2500 holder in the box",
      "ABUS code card for replacement keys",
    ],
    bad: [
      "2.47kg",
      "The Sold Secure product record shows the Powered Cycle row only; Pedal Cycle Diamond comes from ABUS",
    ],
    change:
      "Get the Pedal Cycle Diamond grade showing on the Sold Secure record too, so riders with ordinary-bike policies don’t have to ask.",
    faqs: [
      {
        q: "Is the ABUS Granit Super Extreme 2500 Sold Secure Diamond?",
        a: "Yes, Powered Cycle Diamond on the Sold Secure record for the 2500/165HB230. ABUS also shows a Pedal Cycle Diamond seal. Check the marking on the lock and your insurer’s list.",
      },
      {
        q: "How heavy is the Super Extreme 2500?",
        a: "ABUS says 2.47kg, with the USH 2500 holder in the box so you can carry it on the bike.",
      },
      {
        q: "Super Extreme 2500 or Granit XPlus 540?",
        a: "The Super Extreme is Powered Cycle Diamond with grinder armour at 2.47kg. The [Granit XPlus 540](/reviews/abus-granit-xplus-540) is Pedal Cycle Diamond and Gold for e-bikes, with a long 300 mm shackle. For an e-bike policy that names Diamond, the Super Extreme is the one that matches.",
      },
    ],
    altBest: "oxford-grinder-s1",
    altBestWhy: "You need Diamond for bikes and e-bikes with a bracket and even more room inside the shackle.",
    altSecond: "kryptonite-new-york-diamond",
    altSecondWhy: "You want Diamond on both Sold Secure records with a bracket, at 2.3kg.",
  },
  "onguard-rocksolid-8590": {
    hook: "If you need Diamond for your bike or e-bike at the lowest weight in the anti-grinder group, the RockSolid 8590 is about 1.4kg, once its small shackle fits.",
    job: "Diamond for bikes and e-bikes; measure the 90 × 175 mm locking area first.",
    meta: "OnGuard RockSolid 8590 review: Sold Secure Diamond for bikes and e-bikes, about 1.4kg, 90 × 175 mm. The lightest anti-grinder lock here — measure your stand.",
    stamp: "Diamond (bikes and e-bikes)",
    verdict:
      "The OnGuard RockSolid 8590 is Sold Secure Diamond for ordinary bikes and for e-bikes on the Sold Secure record. OnGuard gives a 14 mm shackle and a 90 × 175 mm locking area, and UK retailers list about 1.4kg, which makes it the lightest of the anti-grinder locks on Lock Desk. It suits a weekday commute where Diamond is required and you’ll actually carry it. Here’s the catch: reviews disagree on how well it resists a grinder. road.cc rated it highly, while Bennetts BikeSocial found it only average against an angle grinder, and the 90 mm width is tight on chunky frames.",
    subheads: [
      "Diamond on both Sold Secure tests",
      "A small 90 × 175 mm locking area",
      "About 1.4kg, with no frame mount",
      "When to choose this lock or another",
    ],
    body: [
      "Short answer: it’s OnGuard’s grinder-resistant D-lock, with a 14 mm hardened steel shackle under a proprietary coating and an X4P mechanism that bolts the shackle to the crossbar in four places. There are five keys. OnGuard’s marketing is big on what it can withstand; the Sold Secure grade is the independent part, and published reviews are where the disagreement shows.",
      "Sold Secure lists the OnGuard RockSolid Shackle Lock 8590 as Pedal Cycle Diamond and Powered Cycle Diamond. If your e-bike policy names the powered grade, this matches it. To be fair, Bennetts BikeSocial’s review in May 2025 only saw Pedal Cycle Diamond at the time, so check the marking on the lock you receive.",
      "OnGuard gives the inside as 90 × 175 mm; BikeSocial measured closer to 80 × 170 mm. Either way it’s small, much like the Hiplok D1000’s 92 × 155 mm. road.cc found it fitted a road bike and a standard stand but not every e-bike frame. Measure your frame and the stand together before you buy.",
      "UK retailers list about 1.4kg, and BikeSocial and road.cc both weighed it at about 1.34kg. That’s lighter than the Litelok X1 (1.7kg) and much lighter than the other anti-grinder locks here (2.3–2.84kg). There’s no frame mount in the box, so plan on a bag or a separate clip.",
      "Choose the RockSolid 8590 when Diamond is required, about 1.4kg is the weight you’ll keep carrying, and 90 × 175 mm closes on your stand. Choose the Litelok X1 if you want a bit more room (101 × 197 mm) at 1.7kg. Choose the Kryptonite New York Diamond if you want a bracket in the box and a roomier shackle at 2.3kg. Choose the Pitbull STD if you need Pedal Cycle Diamond with a clip, and grinder armour isn’t the point.",
    ],
    bestFor: [
      "Weekday commutes where the policy names Diamond and you’ll carry about 1.4kg",
      "Road bikes and slim frames on stands you’ve measured against 90 × 175 mm",
      "E-bikes with slim tubes where the policy names Powered Cycle Diamond",
    ],
    skipIf: [
      "Your frame or stand won’t close inside 90 mm",
      "You want a frame mount in the box",
      "Gold meets your policy — the Evolution Mini-7 comes with a clip and cable",
    ],
    good: [
      "Sold Secure Diamond for ordinary bikes and for e-bikes",
      "About 1.4kg, the lightest anti-grinder lock on Lock Desk",
      "X4P mechanism locks the shackle in four places",
      "Five keys",
    ],
    bad: [
      "Small 90 × 175 mm locking area; chunky frames may not fit",
      "No frame mount in the box",
      "Published grinder reviews disagree: road.cc rated it highly, Bennetts BikeSocial rated it average",
    ],
    change:
      "A longer version at a similar weight, so riders with chunkier frames can get Diamond without moving up to 2.3kg.",
    faqs: [
      {
        q: "Is the OnGuard RockSolid 8590 Sold Secure Diamond?",
        a: "Yes. Sold Secure lists the RockSolid Shackle Lock 8590 as Pedal Cycle Diamond and Powered Cycle Diamond. Check the marking on the lock you buy and your insurer’s list.",
      },
      {
        q: "How heavy is the RockSolid 8590?",
        a: "UK retailers list about 1.4kg, and Bennetts BikeSocial and road.cc both weighed it at about 1.34kg. That’s lighter than the [Litelok X1](/reviews/litelok-x1) at 1.7kg.",
      },
      {
        q: "RockSolid 8590 or Litelok X1?",
        a: "Both are Diamond for bikes and e-bikes with no clip in the box. The RockSolid is lighter at about 1.4kg but smaller inside (90 × 175 mm). The X1 is 1.7kg with 101 × 197 mm. If the RockSolid closes on your stand and frame, it’s the lighter carry.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "You want a bit more room inside the shackle (101 × 197 mm) with Diamond for bikes and e-bikes at 1.7kg.",
    altSecond: "kryptonite-new-york-diamond",
    altSecondWhy: "You want a bracket in the box and a roomier 95 × 204 mm shackle, and 2.3kg is fine.",
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
  "abus-bordo-granit-6500k": "Gold folding reach when a Mini will not close and you still want the lock on the bike.",
  "seatylock-mason-140": "The lightest published Diamond D-lock in this set — about 0.97kg, after you measure 140 × 85 mm.",
  "kryptonite-new-york-fahgettaboudit-1415": "The longer New York chain, for when 100 cm will not reach. At 6.92kg it stays at home.",
  "kryptonite-new-york-diamond": "Diamond for bikes and e-bikes with a bracket in the box, if 2.3kg is a carry you’ll keep up.",
  "onguard-rocksolid-8590": "The lightest anti-grinder Diamond lock here, about 1.4kg, once 90 × 175 mm closes on your stand.",
  "oxford-grinder-s1": "Diamond for bikes and e-bikes with a roomy shackle and a bracket, for chunky frames, at about 2.36kg.",
  "abus-granit-super-extreme-2500": "Powered Cycle Diamond with a holder in the box, for e-bikes and bulky frames, at 2.47kg.",
  "squire-stronghold-d16-max": "Powered Cycle Diamond at 2.84kg — one to keep on the bike or in a pannier.",
};

export function hookFor(product: Product): string {
  return catalogueHooks[product.slug] ?? `${product.brand} ${product.specs?.type ?? "lock"}.`;
}
