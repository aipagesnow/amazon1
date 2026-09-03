export const BEST_VERDICTS: Record<string, { bestFor: string; caveat: string }> = {
  B0BLT59NFJ: {
    bestFor: "A Diamond lock you can still take to work, for ordinary bikes and e-bikes.",
    caveat: "No frame clip in the box we looked at.",
  },
  B074K6KSY5: {
    bestFor: "A Gold commute lock with a clip for the frame and a cable.",
    caveat: "The cable is not Sold Secure approved.",
  },
  B0D77XJR4Z: {
    bestFor: "Busy streets where you have already measured the stand.",
    caveat: "The 92 × 155 mm shackle is tight, and there is no clip listed.",
  },
  B0944HG7MK: {
    bestFor: "When a compact D-lock will not close on the stand.",
    caveat: "For e-bikes, Sold Secure lists it as Gold, not Diamond.",
  },
  B073W8N26F: {
    bestFor: "Extra reach at home — not something to put in a backpack.",
    caveat: "At 4.9 kg it is too heavy for a daily commute.",
  },
};

export type Faq = { q: string; a: string };

export type GuideSection = {
  h2: string;
  paragraphs?: string[];
  bullets?: { lead: string; text: string }[];
};

export const GUIDE_META =
  "How to choose a bike lock in the UK: Sold Secure Gold or Diamond, what your insurance actually wants, D-lock or chain, and a weight you will take with you.";

export const GUIDE_LEDE =
  "Three things matter more than the brand. What grade your insurance asks for. Whether the lock will close on your stand. And whether you will actually take it with you. Get those right, then pick a name.";

export const GUIDE_INTRO = [
  "Most people start with a brand they recognise. Then they find the lock will not close on the stand, or the insurer wanted a different grade. It is better to do it the other way round.",
  "These reviews are a careful reading of Sold Secure grades and the maker’s specs. We have not taken a grinder to the locks. That is still enough to avoid the usual mistakes.",
];

export const GUIDE_START = [
  "Check the Sold Secure grade your policy asks for — Gold or Diamond — and whether it talks about e-bikes separately.",
  "Measure the stand and the frame tube, then compare that with the space inside the lock.",
  "Pick a weight you will actually take to work. A heavier lock left at home does nothing.",
];

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    h2: "What Sold Secure Gold and Diamond mean",
    paragraphs: [
      "Sold Secure is the UK group that tests bike locks. Locks are graded Bronze, Silver, Gold, and Diamond. Gold is still what a lot of household cycle insurance asks for. Diamond is the next step up. Neither grade means the lock cannot be cut. Diamond is tested against a tougher set of tools than Gold. It is not a promise that a thief with a battery grinder will walk away.",
      "There is a separate Sold Secure test for e-bikes. A lock can be Diamond for an ordinary bike and only Gold for an e-bike. That split matters if your policy names the e-bike grade. The ABUS Granit XPlus 540 is the example on these pages: Diamond for ordinary bikes, Gold for e-bikes.",
      "Treat lines such as “20× more resistant” as advertising unless an independent grade is marked on the lock. After this page, read [best bike lock for insurance](/for/insurance). We do not keep a live list of which insurers accept which models. Those lists change, and we are not selling you a policy.",
    ],
  },
  {
    h2: "The cable in the box is usually not graded",
    paragraphs: [
      "Plenty of Gold D-locks come with a loop cable. On Kryptonite’s Evolution Mini-7, that cable is not part of the Sold Secure approval. Use it to hold a quick-release front wheel to the frame if you need to. Do not treat it as a second Gold lock, and do not lock the bike to the stand with the cable alone.",
      "If a product photo makes the whole kit look approved, ignore the photo. The D-lock is the graded product. The cable is a useful extra.",
    ],
  },
  {
    h2: "Will the lock close on your stand?",
    paragraphs: [
      "A compact D-lock that will not close around the stand does not protect the bike. The figure that matters is the locking area: the space inside the shackle. Compare that with the post plus the tube of your frame. Measuring the stand is more useful than choosing by brand.",
      "Longer shackles close more easily. The ABUS 540 here is 300 mm, so it will take posts that a Mini cannot. The trade-off is extra room for a thief’s tool. Tight Minis — the Hiplok D1000 is 92 × 155 mm — are awkward on fat tyres, cargo frames, and some UK street furniture. If you already know a compact lock fails on your rack, do not buy a thicker Mini with an even smaller opening. Look at the 540, or a chain you leave at home.",
    ],
  },
  {
    h2: "Will you actually carry it?",
    paragraphs: [
      "The lock you leave at home does not protect the bike at the station. Weight, and whether it clips to the frame, decide whether you take it every day.",
      "On the locks we reviewed: the Evolution Mini-7 is 1.61 kg with a clip; the Litelok X1 is 1.7 kg with no clip in the box; the D1000 is 1.9 kg with no clip listed; the New York Mini is 2.06 kg with no clip; the New York 1410 chain is 4.9 kg. If 1.6 kg already feels like too much, a 2 kg lock with a tougher-sounding name will not help. You are less likely to take it.",
      "A lock that clips to the frame is the one you are most likely to have with you every morning. If the box does not include a clip, budget for one, or be honest that you will carry it in a bag.",
    ],
  },
  {
    h2: "D-lock or chain",
    paragraphs: [
      "A D-lock — sometimes sold as a U-lock — is for a tight stand on a commute. A chain is for extra reach: home, a ground anchor, two bikes, or a post a compact D-lock cannot close around. [D-lock vs chain](/vs/d-lock-vs-chain) is the longer comparison.",
      "Many careful riders use both, and only carry the D-lock. That is a practical setup: Gold or Diamond on the bike for the station, and a heavy chain left where the bike is stored overnight. A 4.9 kg chain is too heavy for a daily commute. Most people will stop carrying it after a few days.",
    ],
  },
  {
    h2: "How to lock the bike",
    paragraphs: [
      "Lock the frame to the stand. If the shackle will also take the rear wheel, do that. Do not lock a quick-release wheel to the stand and leave the frame free — the rest of the bike walks away.",
      "Fill the shackle as much as you reasonably can. Slack in a D-lock or a chain gives a thief room to get a tool in. Check the stand itself is bolted down. A Gold lock on a loose hoop is only as good as the hoop.",
      "At home, lock through the frame to something that does not move — a ground anchor if the policy asks for one, not a wooden fence post. Looping a chain twice can take up slack. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor.",
    ],
  },
  {
    h2: "Which specs you can ignore",
    bullets: [
      {
        lead: "Ignore anti-grinder marketing",
        text: "if you park in sight for ten minutes and Gold already meets the policy. Carry the compact D-lock.",
      },
      {
        lead: "Ignore “Mini”",
        text: "if your stand is a fat lamp-post. Measure, then look at the ABUS 540 or a chain at home.",
      },
      {
        lead: "Ignore e-bike Diamond",
        text: "if you ride an ordinary bike and the policy only names Gold.",
      },
      {
        lead: "Ignore a 4.9 kg chain",
        text: "as a commute lock. That is a home lock.",
      },
    ],
  },
  {
    h2: "Common mistakes",
    bullets: [
      {
        lead: "Locking a wheel and leaving the frame open.",
        text: "The frame is what you need to take home. A quick-release wheel is replaceable; the bike is not.",
      },
      {
        lead: "Trusting the cable as if it were Gold.",
        text: "The cable is usually ungraded. Use it for a wheel, not as the lock.",
      },
      {
        lead: "Buying Diamond, then leaving it at home.",
        text: "A Gold lock you take with you protects the bike. A Diamond lock left at home does not.",
      },
      {
        lead: "Never checking the insurer’s approved-lock list.",
        text: "A Sold Secure badge is required on many policies. Being on that insurer’s list is a separate check.",
      },
    ],
  },
];

export const GUIDE_CHOOSER_INTRO =
  "A short match of situation to the locks we have reviewed. Measure the stand before you buy a compact D-lock.";

export const GUIDE_CHOOSER: { situation: string; slug: string; name: string; why: string }[] = [
  {
    situation: "Weekday commute, Gold is enough, you want a frame clip and a cable",
    slug: "kryptonite-evolution-mini-7",
    name: "Kryptonite Evolution Mini-7",
    why: "1.61 kg, Sold Secure Gold, with a frame clip and a cable in the box. The cable is not Gold.",
  },
  {
    situation: "Higher-value bike, public stands, you will carry about 1.7 kg",
    slug: "litelok-x1",
    name: "Litelok X1",
    why: "Diamond for ordinary bikes and e-bikes. Locking area 101 × 197 mm.",
  },
  {
    situation: "Known theft hotspot, you have measured a compact shackle",
    slug: "hiplok-d1000",
    name: "Hiplok D1000",
    why: "Diamond, sold as anti-grinder. Compact 92 × 155 mm shackle.",
  },
  {
    situation: "Compact D-lock will not close; you still want Diamond for an ordinary bike",
    slug: "abus-granit-xplus-540",
    name: "ABUS Granit XPlus 540",
    why: "300 mm shackle. For e-bikes, the grade is Gold.",
  },
  {
    situation: "Home, garden, or a post a D-lock cannot reach",
    slug: "kryptonite-new-york-fahgettaboudit-1410",
    name: "New York 1410 chain",
    why: "100 cm, 4.9 kg. Use it at home, not on a commute.",
  },
];

export const GUIDE_FAQS: Faq[] = [
  {
    q: "Is Gold enough, or do I need Diamond?",
    a: "Read the policy you signed. Many UK household cycle policies still name Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the e-bike grade separately. Check the wording rather than guessing from a product page.",
  },
  {
    q: "Should I buy a D-lock or a chain?",
    a: "A D-lock is the better choice for a tight stand on a commute. A chain is better when you need extra reach at home. Many riders use both and only carry the D-lock. See [D-lock vs chain](/vs/d-lock-vs-chain).",
  },
  {
    q: "How do I know if a Mini will fit my stand?",
    a: "Measure the stand plus the frame tube, then compare that with the locking area. The Evolution Mini-7 is 83 × 178 mm; the D1000 is 92 × 155 mm. If a compact lock already fails, look at the ABUS 540 (300 mm) or a chain at home — not a thicker Mini.",
  },
  {
    q: "Does a heavier lock mean a safer bike?",
    a: "Only if you take it with you. The New York Mini is 2.06 kg and Gold; the Evolution Mini-7 is 1.61 kg and also Gold. Most commuters are better with the lock they will actually carry.",
  },
];

export const HOME_LEDE =
  "We compare D-locks and chains so you can pick one your insurance will accept — and that you will actually take to work. Grade, fit, and weight matter more than the brand on the box.";

export const HOME_BRIEFING = {
  grade:
    "UK bike insurance usually asks for a Sold Secure grade. Gold is what most policies still want. Diamond is a step up, often for more expensive bikes or e-bikes. Match the grade on your policy.",
  fit: "A small D-lock will not close on every stand. Measure the post and your frame together. If that is bigger than the opening in the lock, it will not fit, so do not buy it.",
  carry:
    "A lock only protects the bike if it is with you. If it is too heavy, or it does not clip onto the frame, it tends to stay at home. Pick one you will actually take to work.",
};

export const HOME_COMMUTE =
  "For most commuters, a Gold compact D-lock with a frame clip. Step up to Diamond if the bike is worth the extra weight.";

export const HOME_INSURANCE =
  "Match the Sold Secure grade on your policy, then check the insurer’s approved-lock list. A badge on its own is not always enough.";

export const HOME_PICK = {
  why: "Sold Secure Diamond for bikes and e-bikes, 1.7 kg, and a 101 × 197 mm locking area. High enough for many insurance policies, and light enough that you might still take it on a commute.",
  who: "Higher-value bikes parked in public, especially if Gold is not enough for your policy.",
  change:
    "Put a frame clip in the box. Without one, some people will not carry 1.7 kg every day.",
  alt: "if you want Hiplok’s smaller anti-grinder D-lock and you have already measured the stand.",
};

export const BEST_LEDE =
  "Five D-locks and chains compared on Sold Secure grade, whether you will carry them, and whether the shackle will close. A sixth lock, the New York Mini, is reviewed separately because it is too heavy for most commutes. There is no single best lock for everyone.";

export const BEST_INTRO = [
  "“Best bike lock UK” is a search, not a product. The right lock is the one that matches the grade on your policy, closes on the stand you actually use, and is light enough that you still take it to work.",
  "We picked five locks from the six we have reviewed in full. The Evolution Mini-7 is the Gold commute lock. The Litelok X1 is the Diamond lock we would still carry. The D1000 is Diamond for a stand you have already measured. The ABUS 540 is the long shackle when a Mini will not close. The New York 1410 is the home chain. The New York Mini is reviewed because people search the name; it is not on this table.",
];

export const BEST_PICKS: { lead: string; slug: string; name: string; text: string }[] = [
  {
    lead: "Need Diamond you will still carry",
    slug: "litelok-x1",
    name: "Litelok X1",
    text: "1.7 kg, Diamond for ordinary bikes and e-bikes, 101 × 197 mm locking area. No frame clip in the box we looked at.",
  },
  {
    lead: "Need Gold with a clip and a cable",
    slug: "kryptonite-evolution-mini-7",
    name: "Evolution Mini-7",
    text: "1.61 kg, Sold Secure Gold. The cable is not graded. The lock most UK commuters will actually take.",
  },
  {
    lead: "Busy stand you have already measured",
    slug: "hiplok-d1000",
    name: "Hiplok D1000",
    text: "Diamond, sold as anti-grinder. 1.9 kg, no clip, 92 × 155 mm shackle — tight on fat tyres and some UK stands.",
  },
  {
    lead: "Compact D-lock will not fit the stand",
    slug: "abus-granit-xplus-540",
    name: "Granit XPlus 540",
    text: "300 mm shackle, frame clip, Diamond for ordinary bikes. For e-bikes, the grade is Gold.",
  },
  {
    lead: "Need a metre of chain at home",
    slug: "kryptonite-new-york-fahgettaboudit-1410",
    name: "New York 1410",
    text: "100 cm, 14 mm, 4.9 kg, Gold. Use it at home. Take a D-lock on the bike for the commute.",
  },
];

export const BEST_WEIGHT =
  "The 1410 chain is almost three times the weight of the X1, which is why we treat it as a home lock rather than a commute lock. The bars are relative to the heaviest lock in this comparison.";

export const REVIEWS_LEDE =
  "Six D-locks and chains, from Sold Secure Gold to Diamond. Each review says who it is for, who should skip it, and the main drawbacks.";

export const REVIEWS_INTRO = [
  "This is not a ranking of every lock on Amazon. We took six products people actually search for — three Diamond D-locks, two Gold D-locks, and one Gold chain — and wrote each one up against the same questions: grade, fit, weight, and whether you will carry it.",
  "Start with the group that matches the grade on your policy. Then read the verdict, not just the name. A Diamond lock left at home is worse than a Gold lock you take with you.",
];

export const REVIEW_GROUPS = [
  {
    title: "Sold Secure Diamond D-locks",
    blurb:
      "For higher-value bikes and policies that name Diamond. The X1 is the one we would still commute with (1.7 kg, ordinary-bike and e-bike Diamond, 101 × 197 mm). The D1000 is the compact anti-grinder lock (1.9 kg, 92 × 155 mm, no clip) — only if you have measured the stand. The ABUS 540 is the long 300 mm shackle for posts a Mini cannot close around; for e-bikes the grade is Gold.",
    slugs: ["litelok-x1", "hiplok-d1000", "abus-granit-xplus-540"],
  },
  {
    title: "Sold Secure Gold D-locks",
    blurb:
      "For the many UK household policies that still name Gold. The Evolution Mini-7 is the commute lock: 1.61 kg, a frame clip, and a cable in the box — the cable is not Gold. The New York Mini is 18 mm thick and 2.06 kg, with no clip; most commuters should buy the Mini-7 instead.",
    slugs: ["kryptonite-evolution-mini-7", "kryptonite-new-york-fahgettaboudit-mini"],
  },
  {
    title: "Chain for home and extra reach",
    blurb:
      "The New York 1410 is 100 cm of 14 mm Gold chain at 4.9 kg. Use it at home, in the garden, or on a post a D-lock cannot reach. It is too heavy for a daily commute. Pair it with a D-lock you actually carry.",
    slugs: ["kryptonite-new-york-fahgettaboudit-1410"],
  },
] as const;

export const METHOD_META =
  "How Lock Desk researches bike locks: Sold Secure grades, manufacturer specs, and UK insurance wording. We have not cut these locks open.";

export const METHOD_INTRO =
  "Lock Desk reviews locks from Sold Secure grades and manufacturer specs. We have not cut these locks open. Every claim on a review page should be something we can point to on a spec sheet, a Sold Secure grade, or the manufacturer’s own notes.";

export const METHOD_USE = [
  "The product record: the Amazon listing we reviewed, name, brand, and the published specs — weight, locking area, shackle or chain size, keys, frame clip, cable.",
  "Manufacturer notes, including whether a cable in the box is part of the Sold Secure approval.",
  "Sold Secure’s public grades for ordinary bikes and, where we have it, e-bikes.",
  "How UK cycle insurance typically names Gold and Diamond. We do not keep a live list of approved models — insurers change those lists.",
];

export const METHOD_SHAPE =
  "Each review opens with a verdict: who it is for, and who should skip it. Then Best for / Skip it if, the main body, What’s good, What’s not so good, What we’d change, the numbers, alternatives from the same set of locks, and Common questions. Every review links up to [how to choose a bike lock](/guide) and across to other reviews.";

export const METHOD_WONT = [
  "We have not taken a grinder or bolt cropper to these locks. Advertised cut-times are the manufacturer’s, not ours.",
  "We do not invent a weight, locking area, or grade. If a figure is missing, we leave it blank.",
  "We do not print live prices. They change on Amazon.",
  "We do not copy Amazon customer reviews or star ratings onto these pages.",
  "Photographs are editorial — streets, stands, unbranded locks — not pictures of the named product. We cannot yet pull Amazon’s official listing photos.",
];

export const METHOD_WHY = [
  "A lot of bike-lock writing either copies the manufacturer’s headline or pretends to be a lab. We would rather say what the grade is, what the lock weighs, whether it will close, and who should skip it.",
  "A verdict here is our reading of those facts, not a lab result. Use it to match Sold Secure grade, fit, and carry to your bike. Then read your policy, and measure the stand.",
];

export type UseCase = {
  slug: string;
  title: string;
  description: string;
  h2: string;
  notFor: string;
  body: string[];
  picks: string[];
  faqs: Faq[];
  fold?: { gold: string; diamond: string };
  policy?: string[];
  records?: string;
  checklist?: string[];
};

export const CASES: UseCase[] = [
  {
    slug: "commuting",
    title: "Best bike lock for commuting",
    description:
      "A commute lock is one you will take every day. For most UK riders that is a Gold compact D-lock with a frame clip. Step up to Diamond if the bike is worth the extra weight.",
    h2: "Two commute locks we would take",
    notFor:
      "Skip this page if you only need a lock for a shed, a ground anchor, or a heavy chain left at home.",
    body: [
      "A commute lock has to come with you every working day. The Sold Secure grade needs to match your insurance. The lock has to close on the stand you use. Weight, and whether it clips to the frame, decide whether you will actually take it.",
      "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the pick: 1.61 kg, a frame clip, and a cable in the box. The D-lock is Gold. The cable is not — use it for a quick-release wheel, not as a second lock. That combination is why we put it ahead of thicker, heavier Gold Minis with no clip.",
      "If you ride an e-bike, or the policy names Diamond, and you will carry 1.7 kg, take the Litelok X1 instead. It is Diamond for ordinary bikes and for e-bikes. There is no frame clip in the box we looked at, so budget for a bag or a separate clip. Without one, it is likely to stay at home.",
      "Do not buy the Hiplok D1000 for a commute until you have checked that the 92 × 155 mm shackle closes on your stand. It is a serious Diamond lock. It is also compact, 1.9 kg, and listed without a clip. Check the fit before you buy.",
      "A 4.9 kg chain is not a commute lock. Keep the New York 1410 at home for extra reach — a garden, a ground anchor, or a post a Mini cannot close around — and take a D-lock on the bike. That two-lock setup is what careful commuters actually keep using.",
      "Lock the frame to the stand, not just a wheel. If the shackle will take the rear wheel as well, do that. Fill the shackle as much as you can. Check the stand is fixed down. These steps matter more than the brand name on the box.",
    ],
    picks: ["kryptonite-evolution-mini-7", "litelok-x1"],
    faqs: [
      {
        q: "Can I commute with the 1410 chain?",
        a: "No. The 1410 weighs 4.9 kg, which is too heavy to carry to work and back every day. Use the chain at home when you need extra reach — around a garden post or a ground anchor, for example — and take a D-lock on the bike for the commute.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the pick: 1.61 kg, a frame clip, and a cable in the box. The cable is not Gold. If you ride an e-bike, or the policy names Diamond, and you will carry 1.7 kg, take the Litelok X1.",
      },
      {
        q: "Do I need a frame clip?",
        a: "Yes, if you are unlikely to carry a lock in a bag every day. The Mini-7 and the ABUS 540 include a clip. The X1 and D1000 we looked at do not. A Diamond lock left at home does not protect the bike; a Gold lock you take with you does.",
      },
      {
        q: "Will a Mini close on my station stand?",
        a: "Measure the stand plus the frame tube. The Mini-7 is 83 × 178 mm; the D1000 is 92 × 155 mm. If a compact lock already fails, look at the [ABUS 540](/reviews/abus-granit-xplus-540) — 300 mm — not a thicker Mini.",
      },
      {
        q: "Should I lock the wheels as well?",
        a: "Lock the frame to the stand first. If the shackle also takes the rear wheel, do that. Use the ungraded cable, if you have one, for a quick-release front wheel — not as the lock.",
      },
    ],
  },
  {
    slug: "insurance",
    title: "Best bike lock for insurance",
    description:
      "Match Sold Secure Gold or Diamond to the policy, then check the insurer’s approved list. We do not sell insurance.",
    h2: "Three locks that can meet a typical policy",
    notFor: "We do not sell insurance, and we do not keep a live list of approved models.",
    body: [
      "Sold Secure is independent. Your insurer does not have to accept every lock that carries the badge. Many policies ask for a minimum grade and then publish a list of approved models. Both checks matter. A Gold badge on a lock that is missing from that list can still be a problem at claim time.",
      "We do not keep that list current, because insurers change it. Open the document that came with your policy. If it names models, match the model — not just “a Gold D-lock”. If it only names the grade, the Sold Secure marking on the lock you buy still needs to match.",
      "E-bike policies are where people get caught. Some name the e-bike grade rather than the ordinary-bike grade. A lock can be Diamond for an ordinary bike and only Gold for an e-bike. The ABUS 540 is Diamond for ordinary bikes and Gold for e-bikes. The Litelok X1 and Hiplok D1000 are Diamond for both.",
    ],
    fold: {
      gold: "If your policy names Gold, look at the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7).",
      diamond:
        "If your policy names Diamond, look at the [Litelok X1](/reviews/litelok-x1), or the [D1000](/reviews/hiplok-d1000) if 92 × 155 mm will close.",
    },
    policy: [
      "Read the wording you signed. Many UK household cycle policies still say Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the e-bike grade rather than the ordinary-bike grade.",
      "Then open the insurer’s approved-lock list. A lock can be Gold in Sold Secure’s database and still missing from one brand’s list. The grade is required, but it is not always enough.",
    ],
    records:
      "On the locks we reviewed: Evolution Mini-7, the New York Mini and the 1410 chain are Gold for ordinary bikes. Litelok X1 and Hiplok D1000 are Diamond for both ordinary bikes and e-bikes. The ABUS 540 is Diamond for ordinary bikes and Gold for e-bikes, so it does not match an e-bike policy that asks for e-bike Diamond.",
    checklist: [
      "Read the wording you signed — Gold or Diamond, ordinary bike or e-bike.",
      "Open the insurer’s approved-lock list.",
      "Match the model, not just the badge.",
      "Check the marking on the lock you actually receive.",
    ],
    picks: ["litelok-x1", "kryptonite-evolution-mini-7", "hiplok-d1000"],
    faqs: [
      {
        q: "If it is Gold, am I covered?",
        a: "Only if your policy names Gold and, where the insurer publishes a list, the exact model is on that list. A Sold Secure badge is not the same as being on the list.",
      },
      {
        q: "Ordinary-bike Diamond or e-bike Diamond?",
        a: "E-bike policies sometimes name the e-bike grade. The X1 and D1000 are Diamond for both. The ABUS 540 is Diamond for ordinary bikes and Gold for e-bikes.",
      },
      {
        q: "Does a cable in the box count?",
        a: "Usually not. On Kryptonite’s Mini-7 notes the cable is not part of the Sold Secure approval. The D-lock is the graded product. Do not lock the bike with the cable alone and expect the policy to treat that as Gold.",
      },
      {
        q: "Will you tell me which insurer accepts which lock?",
        a: "No. Lists change, and we do not sell insurance. Read the list that belongs to your policy. Then match the model.",
      },
    ],
  },
];

export type Pair = {
  slug: string;
  title: string;
  description: string;
  a: string;
  b: string;
  intro: string;
  whoEach: [string, string];
  afterTable: string[];
  faqs: Faq[];
  leadWithAntiGrinder?: boolean;
  tableNote?: string;
};

export const PAIRS: Pair[] = [
  {
    slug: "evolution-mini-7-vs-d1000",
    title: "Kryptonite Evolution Mini-7 vs Hiplok D1000",
    description:
      "A Gold compact D-lock with a cable versus a Diamond D-lock sold as anti-grinder. Who each is for, and who should skip both for the X1.",
    a: "kryptonite-evolution-mini-7",
    b: "hiplok-d1000",
    intro:
      "This compares a Sold Secure Gold commute Mini with a Diamond D-lock sold as anti-grinder. They suit different riders. If you wanted Diamond you will still carry, with a shackle that fits more stands, that is the Litelok X1 — not this pairing.",
    whoEach: [
      "The Mini-7 is Gold you will carry: 1.61 kg, a frame clip, and a cable.",
      "The D1000 is Diamond with a tight shackle: 1.9 kg, no clip, 92 × 155 mm.",
    ],
    afterTable: [
      "The Evolution Mini-7 is 1.61 kg, Gold, a frame clip, and a cable in the box. The cable is not Gold. If that meets the policy, this is the lock you are most likely to have with you every morning.",
      "The D1000 is Diamond for ordinary bikes and for e-bikes, sold as anti-grinder, 1.9 kg, no clip, and a 92 × 155 mm locking area. It is worth considering on a known high-theft stand you have already measured. If you have not measured, do not guess. Fat tyres, cargo frames, and some UK street furniture will not take it.",
      "Carry is the other split. The Mini-7 is designed to live on the bike. The D1000, on the listing we looked at, is 1.9 kg in a bag or in your hand. Upgrading to Diamond only helps if you still take the lock with you.",
      "If neither shackle will close, look at the [ABUS 540](/reviews/abus-granit-xplus-540) — 300 mm — not a thicker Mini. If you wanted Diamond with a usable locking area and 1.7 kg, that is the [Litelok X1](/reviews/litelok-x1), not this comparison.",
    ],
    faqs: [
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK household policies still name. Diamond is the higher grade, tested against a tougher set of tools — it is not a promise against a battery grinder. Read the wording you signed.",
      },
      {
        q: "D1000 or DX1000?",
        a: "D1000 is 92 × 155 mm, 1.9 kg. DX1000 is 112 × 205 mm, 2.75 kg, and we have not written a full review of it yet. Buy the one that closes. Do not guess from a product photo.",
      },
      {
        q: "Why not just buy the D1000 if it is Diamond?",
        a: "Because it has to close, and you have to carry it. If Gold meets the policy and you will skip 1.9 kg with no clip, the Mini-7 is the lock that protects the bike. If you need Diamond you will still carry, look at the [X1](/reviews/litelok-x1).",
      },
      {
        q: "Is the Mini-7 cable Gold?",
        a: "No. Kryptonite says the cable is not part of the Sold Secure approval. Use it for a quick-release wheel. Lock the frame with the D-lock.",
      },
    ],
    leadWithAntiGrinder: true,
    tableNote:
      "“Sold as angle-grinder resistant” is the maker’s language. The Sold Secure grade on the D1000 is Diamond. Cut-times are advertising.",
  },
  {
    slug: "d-lock-vs-chain",
    title: "D-lock vs chain lock",
    description:
      "A Gold compact D-lock versus a 100 cm New York chain. Carry versus extra reach. Using both is common; commuting with 4.9 kg is not.",
    a: "kryptonite-evolution-mini-7",
    b: "kryptonite-new-york-fahgettaboudit-1410",
    intro:
      "A D-lock and a chain do different jobs. The Mini-7 is the lock you take on the bike. The New York 1410 is a 4.9 kg Gold chain for when a Mini cannot reach the only solid object. Using both is common. Commuting with the chain is not.",
    whoEach: [
      "The Mini-7 is for carrying on a commute.",
      "The 1410 is for extra reach at home.",
    ],
    afterTable: [
      "A D-lock is for a tight stand. A chain is for extra reach. That is the main difference, and it is why these two are not rivals.",
      "The Evolution Mini-7 is what you take on the bike: 1.61 kg, a frame clip, Sold Secure Gold. You will carry it. You will not carry 4.9 kg twice a day, and you should not plan as if you will.",
      "The New York 1410 is 100 cm of 14 mm Gold chain for a home, a garden, a ground anchor, or a post a compact D-lock cannot close around. Leave it where the bike is stored. Use it through the frame, to something that does not move.",
      "Careful riders use both and only carry the D-lock. If the compact lock will not close on the only stand at work, neither of these is the answer for that stand — see the [ABUS 540](/reviews/abus-granit-xplus-540). If you need Diamond on the bike and length at home, pair the [Litelok X1](/reviews/litelok-x1) with the chain.",
    ],
    faqs: [
      {
        q: "Can I commute with the 1410?",
        a: "No. At 4.9 kg the 1410 is too heavy to carry to work and back every day. Use the chain at home when you need extra reach, and take a D-lock on the bike for the commute.",
      },
      {
        q: "Does looping the chain twice make it Diamond?",
        a: "No. It can take up slack, which is useful. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor.",
      },
      {
        q: "Should I own both?",
        a: "If you lock up at home or on a terrace as well as at the station, yes. The D-lock covers the commute. The chain covers the awkward post. That is the setup most people can keep using.",
      },
      {
        q: "Is a chain safer than a D-lock?",
        a: "Not as a class. Grade, thickness, and whether you use it all matter more than the shape. A Gold D-lock on the bike beats a Gold chain left in the shed. A chain wins when you need reach.",
      },
    ],
  },
];

export function useOf(slug: string) {
  return CASES.find((c) => c.slug === slug);
}

export function pairOf(slug: string) {
  return PAIRS.find((p) => p.slug === slug);
}

export const ALT_HERO = "kryptonite-new-york-fahgettaboudit-mini";
export const ALT_TITLE = "Best alternatives to the Kryptonite New York Mini";
export const ALT_META =
  "The New York Mini is 2.06 kg, 18 mm Gold, with no frame clip. Better options: Evolution Mini-7 to carry, Litelok X1 for Diamond, or a New York chain at home.";
export const ALT_LEDE =
  "The Fahgettaboudit Mini is an 18 mm Gold D-lock at 2.06 kg, with no frame clip and no cable. People search it because of the name. Most riders need a lock they will actually carry, a Diamond lock for insurance, or a long chain to leave at home.";
export const ALT_BODY = [
  "Keep the New York Mini only if you want an 18 mm Gold compact D-lock as a second lock on a heavy bike, and you do not need a clip or a cable. The extra thickness is why people look at it. The extra weight is why most commuters should choose something else as their only lock.",
  "The Fahgettaboudit name is branding. What you actually get is a Gold Mini that is 450 g heavier than the Evolution Mini-7, with a smaller locking area (83 × 153 mm versus 83 × 178 mm), no clip, and no cable. Sold Secure Gold is still only Gold. Insurers who name that grade may accept it if the exact model is on their list. They look at the grade and the model, not at the New York name.",
];
export const ALT_FAQS: Faq[] = [
  {
    q: "Should I still buy the New York Mini?",
    a: "Only as a thick second lock you will not have to attach every morning. Most commuters should buy the Evolution Mini-7.",
  },
  {
    q: "Is the Mini on the best-of page?",
    a: "No. The [best bike locks UK](/best) page lists five locks we would pick. This Mini is reviewed because people search the name, not because we would commute with it.",
  },
  {
    q: "New York Mini or Evolution Mini-7?",
    a: "The Evolution Mini-7 has a 13 mm shackle, weighs 1.61 kg, and includes a frame clip and a cable. The New York Mini has an 18 mm shackle, weighs 2.06 kg, and has no clip and no cable. Both are Sold Secure Gold. For most commuters, the lighter lock that is easier to take every day is the better choice.",
  },
  {
    q: "What if I wanted New York for maximum security?",
    a: "If the policy wants Diamond, look at the [Litelok X1](/reviews/litelok-x1), not a thicker Gold Mini. If you need length at home, the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410) is the sibling that actually uses the name well.",
  },
];
