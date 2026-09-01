import { Product } from "@/lib/products";

export type Faq = { q: string; a: string };

export type ReviewCopy = {
  hook: string;
  verdict: string;
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
};

export const reviewCopy: Record<string, ReviewCopy> = {
  "litelok-x1": {
    hook: "Diamond-rated, 1.7 kg, and a locking area you can actually use.",
    verdict:
      "If we were buying one lock to carry every day on a bike worth insuring, this is the one. Sold Secure Diamond on both pedal and powered cycles, 1.7 kg, and a 101 × 197 mm locking area — which is the rare combination of a rating insurers take seriously and a size most people will still take to work. We have not cut one open. The case rests on published ratings, manufacturer materials, and the spec sheet.",
    bestFor: [
      "Commuters who will actually carry a Diamond lock",
      "E-bikes and higher-value bikes where policies ask for Diamond",
      "Riders who want a full-size D-lock, not a tiny mini",
    ],
    skipIf: [
      "You need a cable in the box for the front wheel",
      "Your policy only asks for Gold and you want something lighter and cheaper",
      "You want a frame mount in the same carton — the X1 mount is sold separately",
    ],
    good: [
      "Sold Secure pedal Diamond and powered Diamond, so the rating matches what many e-bike policies ask for",
      "1.7 kg — heavy enough to be serious, light enough that people still carry it",
      "101 × 197 mm locking area is generous for an armoured D-lock",
      "Sold as Barronium-armoured against angle grinders; that is a manufacturer claim, independently graded Diamond",
    ],
    bad: [
      "No frame mount in the box on this listing — carry pouch or mount is extra",
      "Only two keys in the published spec",
      "No cable, so a quick-release front wheel still needs a second tether",
    ],
    change:
      "Ship a mount in the box. A Diamond lock that lives under the desk because it is awkward to carry is a Gold lock in practice.",
    faqs: [
      {
        q: "Is the Litelok X1 Sold Secure Diamond?",
        a: "The product record we have lists Sold Secure Diamond for both pedal cycles and powered cycles. Check the current marking on the lock and your insurer’s approved list before you buy.",
      },
      {
        q: "Will it fit a fat tyre or cargo bike?",
        a: "The listed locking area is 101 × 197 mm. That is larger than a Mini D-lock, but still a D-lock. Measure the rack and the frame tube before you assume it will close.",
      },
      {
        q: "Did you test it with an angle grinder?",
        a: "No. We do not run lab attacks. Diamond is an independent Sold Secure grade. Treat marketing times-to-cut as marketing.",
      },
      {
        q: "Is it the same as the X1 Moto?",
        a: "Litelok says the bicycle and moto X1 are the same lock, marketed twice. This UK listing is the X1 armoured D-lock in our slice.",
      },
    ],
    altBest: "hiplok-d1000",
    altBestWhy: "If you want Hiplok’s smaller, heavier anti-grinder D-lock instead, and you can live with a 92 × 155 mm shackle.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "If Gold is enough for your policy and you want a cable and a frame bracket in the same box.",
  },
  "hiplok-d1000": {
    hook: "The small, heavy anti-grinder D-lock people search for by name.",
    verdict:
      "Worth it if you park in a high-theft street and your insurer wants Diamond — and you can lock through a 92 × 155 mm gap. It is 1.9 kg with no mount in our spec sheet. We would not buy it as a first lock for a slim commuter who already struggles to carry 1.6 kg. We have not attacked one; the Diamond grades are on the record.",
    bestFor: [
      "High-theft city racks and overnight street parking",
      "E-bikes where powered-cycle Diamond is the policy line",
      "Riders who already know the shackle will fit their rack",
    ],
    skipIf: [
      "You need a larger locking area (look at the X1 or the DX1000)",
      "You refuse to carry nearly 2 kg with no frame mount",
      "Gold is enough and you want a cable",
    ],
    good: [
      "Pedal Diamond and powered Diamond on the spec sheet",
      "Sold as Ferosafe / anti-angle-grinder; square shackle needs two cuts in Hiplok’s design story",
      "1.9 kg is still portable compared with a 4.9 kg chain",
      "Three coded keys listed",
    ],
    bad: [
      "92 × 155 mm is tight — many Sheffield stands plus a fat frame will not close",
      "No frame mount in the product record",
      "Heavier than the Litelok X1 for a smaller hole",
    ],
    change:
      "A larger sibling exists (DX1000). For this Mini-sized lock, a mount in the box would stop it living in a pannier you forget.",
    faqs: [
      {
        q: "D1000 or DX1000?",
        a: "D1000 is the smaller 92 × 155 mm lock at 1.9 kg. DX1000 is 112 × 205 mm and 2.75 kg. Buy the one that closes on your rack. Do not guess.",
      },
      {
        q: "Is Gold enough instead?",
        a: "Many UK cycle policies still accept Sold Secure Gold. Diamond is the higher pedal grade. Read your wording; we are not your insurer.",
      },
      {
        q: "Does it include a cable?",
        a: "Not on this listing. The D-lock is the rated product. A cable is a second, usually unrated, tether.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Same Diamond story, more locking area, 200 g lighter on the spec sheet.",
    altSecond: "hiplok-dx1000",
    altSecondWhy: "If the D1000 will not close on your rack, the DX1000 is the larger Hiplok anti-grinder D-lock in this slice (no dedicated review).",
  },
  "kryptonite-evolution-mini-7": {
    hook: "The Gold Mini most UK commuters actually finish up carrying.",
    verdict:
      "Worth it for a daily rider whose policy asks for Sold Secure Gold, who wants a cable and a bracket in one box, and who will not carry a 2 kg Diamond lock. The D-lock is Gold; the cable is not part of that approval — Kryptonite says so. We would buy this for a mid-value commuter bike. We would not buy it as the only lock on a high-value e-bike in a known theft hotspot.",
    bestFor: [
      "Weekday commuting where Gold meets the policy",
      "Riders who want a frame mount and a wheel cable without a second purchase",
      "Anyone who will skip a lock that does not fit on the bike",
    ],
    skipIf: [
      "Your insurer or the theft pattern around you wants Diamond or an anti-grinder lock",
      "You need a larger shackle than 83 × 178 mm",
      "You already own a Gold D-lock and only needed a cable",
    ],
    good: [
      "Sold Secure Gold on the D-lock — the grade most UK household cycle policies still name",
      "1.61 kg with a frame mount listed, so it is designed to live on the bike",
      "Cable in the box for a quick-release wheel (the cable is not Sold Secure approved)",
      "Three keys, including the usual lighted fob on Kryptonite Mini kits",
    ],
    bad: [
      "Not sold as angle-grinder resistant, and not Diamond",
      "Mini dimensions: 83 × 178 mm will not hug every post",
      "The cable is a convenience, not a second Gold lock",
    ],
    change:
      "Print the cable disclaimer larger. Too many listings still read as if the whole kit is Gold.",
    faqs: [
      {
        q: "Is the cable Sold Secure Gold?",
        a: "No. On Kryptonite’s own Mini-7 notes, any cable supplied is not part of the Sold Secure approval. The D-lock is the rated product.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "Gold is what many UK policies still ask for. Diamond is a higher pedal grade and is what we would look for on a high-value e-bike. Check the wording you actually signed.",
      },
      {
        q: "Evolution Mini-7 or New York Mini?",
        a: "The New York Fahgettaboudit Mini is thicker (18 mm) and heavier (2.06 kg) with no mount in our spec. Take the Evolution if you will carry it every day.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "Step up to Diamond and a larger locking area if the bike is worth the extra weight.",
    altSecond: "abus-granit-xplus-540",
    altSecondWhy: "If you need a longer 300 mm shackle and pedal Diamond, and you still want a bracket.",
  },
  "abus-granit-xplus-540": {
    hook: "Pedal Diamond with a 300 mm shackle — the long Gold/Diamond hybrid in this slice.",
    verdict:
      "Worth it when a Mini will not close on the rack and you still want Sold Secure pedal Diamond plus a frame bracket. Powered-cycle grade on our record is Gold, not Diamond, so e-bike policies that insist on powered Diamond should look at the X1 or D1000 instead. 1.8 kg, 13 mm square shackle, 108 × 300 mm. We have not lab-tested it.",
    bestFor: [
      "Riders who need extra shackle length around a thick post",
      "Pedal bikes where Diamond is the line and a Mini is too small",
      "People who want a bracket in the carton",
    ],
    skipIf: [
      "Your e-bike policy wants powered-cycle Diamond",
      "You want an anti-grinder marketing story",
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
      "A cable kit SKU exists elsewhere in the ABUS range. This particular ASIN is lock plus bracket. Do not assume a cable.",
    faqs: [
      {
        q: "Is the 540 Diamond or Gold?",
        a: "On our slice: pedal Diamond, powered Gold. Those are different Sold Secure programmes. Read both if you ride an e-bike.",
      },
      {
        q: "Why 300 mm?",
        a: "Longer shackles close around fatter posts and some rear triangles. They also give a thief more room to get a tool in. That is the trade-off.",
      },
      {
        q: "ABUS 540 or Litelok X1?",
        a: "X1 is powered Diamond and sold as armoured. The 540 is the longer shackle with a mount. Fit and policy first, brand second.",
      },
    ],
    altBest: "litelok-x1",
    altBestWhy: "If powered Diamond matters more than shackle length.",
    altSecond: "kryptonite-evolution-mini-7",
    altSecondWhy: "If Gold and a cable are enough, and you want less lock to carry.",
  },
  "kryptonite-new-york-fahgettaboudit-mini": {
    hook: "18 mm of Gold Mini — the flagship name, not the lock we would carry every day.",
    verdict:
      "Worth it as a small, thick Gold D-lock you leave on a heavy bike or at a regular stand. Not worth it as your only commuter lock if you already bounce off 1.6 kg: this one is 2.06 kg, 83 × 153 mm, no mount in our spec, no cable. The New York name is the flagship. The Evolution Mini-7 is what most people should actually buy in this family.",
    bestFor: [
      "A second lock that lives on a rack or in a pannier",
      "Riders who want the thickest Mini Gold shackle in this slice (18 mm)",
      "Matching a New York chain with a New York D-lock",
    ],
    skipIf: [
      "You need a mount or a cable in the box",
      "You want Diamond or anti-grinder armour",
      "You will only use a lock that fits a bottle-cage boss",
    ],
    good: [
      "18 mm shackle — the thickest Mini D-lock in this slice",
      "Sold Secure Gold on the pedal record we have",
      "Compact 83 × 153 mm locking area, tight to the rack if it fits",
    ],
    bad: [
      "2.06 kg and no frame mount listed — that is a lot of loose steel",
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
        q: "Is this the lock in ‘best alternatives to Kryptonite New York’?",
        a: "Yes. This Mini is the New York D-lock in our slice. The 1410 is the New York chain. Alternatives live on that page.",
      },
      {
        q: "Will insurers accept it?",
        a: "Gold is widely named. Always match the exact model to your insurer’s list. We do not keep a live list.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "Same brand, Gold, and you will actually carry it.",
    altSecond: "litelok-x1",
    altSecondWhy: "If you were buying New York for ‘maximum Mini’ and your policy would rather see Diamond.",
  },
  "kryptonite-new-york-fahgettaboudit-1410": {
    hook: "A 100 cm, 14 mm Gold chain — useful length, not a commute in your bag.",
    verdict:
      "Worth it as a home, café-terrace, or two-bike lock when a D-lock will not reach. Not worth it as the lock you pedal with: 4.9 kg and no mount. Sold Secure Gold applies to the approved product, not to ‘any chain you loop twice’. We would keep this next to the door, not on the down tube.",
    bestFor: [
      "Locking at home to a ground anchor or through a wheel and frame",
      "When a D-lock cannot reach the only solid object",
      "A second layer with a D-lock, not a replacement for one on the commute",
    ],
    skipIf: [
      "You need something you will carry 5 miles to work",
      "You want Diamond or anti-grinder armour",
      "You thought 4.9 kg was a typo",
    ],
    good: [
      "100 cm of 14 mm chain — reach a D-lock cannot match",
      "Sold Secure Gold on our pedal record",
      "New York disc lock on the chain; three keys listed",
    ],
    bad: [
      "4.9 kg. That is the whole point, and the whole problem",
      "No frame mount, because you would not want one",
      "Not sold as angle-grinder resistant; grinders do not care about Gold the way croppers do",
    ],
    change:
      "Sell the 100 cm chain as a house lock in the title. Too many ‘bike chain’ listings pretend you will wear this.",
    faqs: [
      {
        q: "D-lock or chain?",
        a: "D-lock for a tight rack on a commute. Chain when you need length. Many theft-aware riders use both, and only carry the D-lock.",
      },
      {
        q: "Is 4.9 kg right?",
        a: "That is the weight on our spec sheet for this 100 cm New York 1410 kit. If a listing looks far lighter, it is a different product.",
      },
      {
        q: "Can I use it on an e-bike?",
        a: "As a home or destination lock, yes if Gold meets the policy. As the only lock you carry, almost nobody will.",
      },
    ],
    altBest: "kryptonite-evolution-mini-7",
    altBestWhy: "For the ride to work. Keep the chain at home.",
    altSecond: "hiplok-d1000",
    altSecondWhy: "If the reason you wanted a New York was ‘serious’, and you still need to carry it.",
  },
};

export const catalogueHooks: Record<string, string> = {
  "litelok-x1": "Editor’s pick: Diamond you can still carry.",
  "hiplok-d1000": "Small anti-grinder D-lock. Measure the rack.",
  "kryptonite-evolution-mini-7": "Gold Mini with cable and a mount.",
  "abus-granit-xplus-540": "Long 300 mm shackle, pedal Diamond.",
  "kryptonite-new-york-fahgettaboudit-mini": "Thick Gold Mini. Heavy, no mount.",
  "kryptonite-new-york-fahgettaboudit-1410": "Gold chain for length, not for panniers.",
  "hiplok-dx1000": "Larger Hiplok anti-grinder D-lock — in the slice, no full review yet.",
  "onguard-pitbull-dt-8005": "Gold Pitbull with a cable. Slice only on first launch.",
  "onguard-pitbull-std-8003": "Standard Gold Pitbull. Slice only on first launch.",
  "onguard-pitbull-ls-8002": "Long-shackle Gold Pitbull. Slice only on first launch.",
};

export function hookFor(product: Product): string {
  return catalogueHooks[product.slug] ?? `${product.brand} ${product.specs?.type ?? "lock"} in the Lock Desk slice.`;
}
