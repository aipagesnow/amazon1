export const BEST_VERDICTS: Record<string, { bestFor: string; caveat: string }> = {
  B0BLT59NFJ: {
    bestFor: "Diamond grade you can still commute with — ordinary bikes and e-bikes.",
    caveat: "No frame mount in this listing.",
  },
  B074K6KSY5: {
    bestFor: "Gold commute lock with a cable and a frame mount.",
    caveat: "The cable is not Sold Secure approved.",
  },
  B0D77XJR4Z: {
    bestFor: "High-theft stands you have already measured.",
    caveat: "92 × 155 mm shackle is tight; no mount listed.",
  },
  B0944HG7MK: {
    bestFor: "When a compact D-lock will not close on the stand.",
    caveat: "E-bike Sold Secure grade is Gold, not Diamond.",
  },
  B073W8N26F: {
    bestFor: "Extra length at home, not in a backpack.",
    caveat: "4.9 kg. Not a commute lock.",
  },
};

export type Faq = { q: string; a: string };

export type GuideSection = {
  h2: string;
  paragraphs?: string[];
  bullets?: { lead: string; text: string }[];
};

export const GUIDE_META =
  "How to choose a bike lock in the UK: Sold Secure Gold vs Diamond, insurance lists, D-lock vs chain, and a weight you will actually carry.";

export const GUIDE_LEDE =
  "Start with your insurance policy. Then check the lock will close on the stand you actually use. Then pick a weight you will take out of the house. Brand comes last.";

export const GUIDE_INTRO = [
  "Most people buy a lock by brand, then find out it will not close on the stand, or that the insurer wanted a different Sold Secure grade. The order below avoids that.",
  "Sold Secure grades come from Sold Secure. Weights and shackle sizes come from the manufacturer specs we have recorded. We have not cut these locks open; the reviews are a reading of those facts, not a lab test.",
];

export const GUIDE_START = [
  "Check the Sold Secure grade your policy asks for — Gold or Diamond, and whether it names the e-bike grade.",
  "Measure the stand plus the frame tube, then compare that with the locking area on the spec.",
  "Pick a weight you will actually take to work. A heavier lock left at home does nothing.",
];

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    h2: "What Sold Secure Gold and Diamond mean",
    paragraphs: [
      "Sold Secure is a UK test house owned by the Master Locksmiths Association. Bicycle locks are graded Bronze, Silver, Gold, and Diamond. Gold is still what a lot of UK household cycle insurance asks for. Diamond is the higher pedal-cycle grade. Neither grade means the lock cannot be cut with an angle grinder. Diamond is tested against a tougher set of tools than Gold; it is not a promise that a determined thief with a battery grinder will walk away.",
      "There is a separate Sold Secure programme for powered cycles — e-bikes, and historically motorcycles. A lock can be Diamond for an ordinary pedal bike and only Gold for an e-bike. That split matters if your policy names the powered-cycle grade rather than the pedal one. The ABUS Granit XPlus 540 on these pages is the example: Diamond for ordinary bikes, Gold for e-bikes on the spec we have.",
      "Treat manufacturer lines such as “20× more resistant” as marketing unless an independent grade is marked on the lock. Read [best bike lock for insurance](/for/insurance) after this. We do not keep a live list of which insurers accept which models — that list changes, and we are not your broker.",
    ],
  },
  {
    h2: "The cable in the box is usually not graded",
    paragraphs: [
      "Plenty of Gold D-locks ship with a loop cable. On Kryptonite’s Evolution Mini-7 notes, that cable is not part of the Sold Secure approval. Use it to hold a quick-release front wheel to the frame if you must. Do not treat it as a second Gold lock, and do not lock the bike to the stand with the cable alone.",
      "If a product photo makes the whole kit look approved, ignore the photo. The D-lock is the graded product. The cable is a convenience.",
    ],
  },
  {
    h2: "Will the lock close on your stand?",
    paragraphs: [
      "A compact D-lock that will not close around the stand does not protect the bike. The figure that matters is the locking area: the space inside the shackle. Compare that with the post plus the tube of your frame. Measure both. A tape measure in your bag is more useful than a brand name.",
      "Longer shackles close more easily. The ABUS 540 here is 300 mm, which will take posts that a Mini cannot. The trade-off is extra room for a thief’s tool. Tight Minis — the Hiplok D1000 is 92 × 155 mm — are awkward on fat tyres, cargo frames, and some UK street furniture. If you already know a compact lock fails on your rack, do not buy a thicker Mini with an even smaller opening. Look at the 540, or a chain you leave at home.",
    ],
  },
  {
    h2: "Will you actually carry it?",
    paragraphs: [
      "The lock you leave at home does not protect the bike at the station. Weight, and whether it has a frame mount, decide whether you take it every day.",
      "On the specs we have: the Evolution Mini-7 is 1.61 kg with a mount; the Litelok X1 is 1.7 kg with no mount in the listing; the D1000 is 1.9 kg with no mount listed; the New York Mini is 2.06 kg with no mount; the New York 1410 chain is 4.9 kg. If you already skip 1.6 kg, do not buy 2 kg because the name sounds tougher.",
      "A lock that clips to the frame is the one that is still on the bike at 7am. Budget for a mount if the listing does not include one, or be honest that you will carry it in a bag.",
    ],
  },
  {
    h2: "D-lock or chain",
    paragraphs: [
      "A D-lock — sometimes sold as a U-lock — is for a tight stand on a commute. A chain is for extra length: home, a ground anchor, two bikes, or a post a compact D-lock cannot close around. [D-lock vs chain](/vs/d-lock-vs-chain) is the longer comparison.",
      "Many careful riders use both, and only carry the D-lock. That is the practical setup: Gold or Diamond on the bike for the station, a heavy chain left where the bike is stored overnight. Commuting with a 4.9 kg chain is not a setup. It is a New Year’s resolution that lasts a week.",
    ],
  },
  {
    h2: "How to lock the bike",
    paragraphs: [
      "Lock the frame to the stand. If the shackle will also take the rear wheel, do that. Do not lock a quick-release wheel to the stand and leave the frame free — the rest of the bike walks away.",
      "Fill the shackle as much as you reasonably can. Slack in a D-lock or a chain gives a thief room to get a tool in. Check the stand itself is bolted down; a Gold lock on a loose hoop is only as good as the hoop.",
      "At home, lock through the frame to something that does not move — a ground anchor if the policy asks for one, not a wooden fence post. Looping a chain twice can reduce slack. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor.",
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
        text: "A Gold lock on the bike beats a Diamond lock in the hallway.",
      },
      {
        lead: "Never checking the insurer’s approved-lock list.",
        text: "A Sold Secure badge is required on many policies. Being on that insurer’s PDF is a separate check.",
      },
    ],
  },
];

export const GUIDE_CHOOSER_INTRO =
  "A short match of job to the locks we have reviewed. Measure the stand before you buy a compact D-lock.";

export const GUIDE_CHOOSER: { situation: string; slug: string; name: string; why: string }[] = [
  {
    situation: "Weekday commute, Gold is enough, you want a frame mount and a cable",
    slug: "kryptonite-evolution-mini-7",
    name: "Kryptonite Evolution Mini-7",
    why: "1.61 kg, Gold, mount and cable in the box. The cable is not Gold.",
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
    why: "300 mm shackle. E-bike grade is Gold on the spec we have.",
  },
  {
    situation: "Home, garden, or a post a D-lock cannot reach",
    slug: "kryptonite-new-york-fahgettaboudit-1410",
    name: "New York 1410 chain",
    why: "100 cm, 4.9 kg. Leave it at home.",
  },
];

export const GUIDE_FAQS: Faq[] = [
  {
    q: "Is Gold enough, or do I need Diamond?",
    a: "Read the policy you signed. Many UK household cycle policies still name Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the powered-cycle grade. We are not your broker.",
  },
  {
    q: "Should I buy a D-lock or a chain?",
    a: "A D-lock for a tight stand on a commute. A chain for extra length at home. Many riders use both and only carry the D-lock. See [D-lock vs chain](/vs/d-lock-vs-chain).",
  },
  {
    q: "How do I know if a Mini will fit my stand?",
    a: "Measure the stand plus the frame tube, then compare with the locking area on the spec. The Evolution Mini-7 is 83 × 178 mm; the D1000 is 92 × 155 mm. If a compact lock already fails, look at the ABUS 540 (300 mm) or a chain at home — not a thicker Mini.",
  },
  {
    q: "Does a heavier lock mean a safer bike?",
    a: "Only if you take it with you. The New York Mini is 2.06 kg and Gold; the Evolution Mini-7 is 1.61 kg and also Gold. Most commuters are better with the lock they will actually carry.",
  },
];

export const HOME_LEDE =
  "We compare D-locks and chains on Sold Secure grade, insurance wording, and weight. The aim is a lock your insurer will accept, and that you will still take to work.";

export const HOME_BRIEFING = {
  grade:
    "Sold Secure is a UK test house. Gold is the grade most household cycle policies still ask for. Diamond is the next step up. A thin cable in the box is usually not part of that grade.",
  fit: "Compact D-locks do not fit every bike stand. Measure the stand plus your frame tube, then compare that with the locking area on the spec, before you buy.",
  carry:
    "If a lock is too heavy, or it has no frame mount, you will leave it at home. Then it does not protect the bike at the station. Carry beats a famous name.",
};

export const HOME_COMMUTE =
  "A Gold compact D-lock with a frame mount for most commuters. Step up to Diamond if the bike is worth the extra weight.";

export const HOME_INSURANCE =
  "Match the Sold Secure grade on your policy, then check the insurer’s approved-lock list. A badge is not always enough.";

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
    text: "1.7 kg, Diamond for ordinary bikes and e-bikes, 101 × 197 mm locking area. No frame mount in this listing.",
  },
  {
    lead: "Need Gold with a mount and a cable",
    slug: "kryptonite-evolution-mini-7",
    name: "Evolution Mini-7",
    text: "1.61 kg, Sold Secure Gold. The cable is not graded. The lock most UK commuters will actually take.",
  },
  {
    lead: "High-theft stand you have already measured",
    slug: "hiplok-d1000",
    name: "Hiplok D1000",
    text: "Diamond, sold as anti-grinder. 1.9 kg, no mount, 92 × 155 mm shackle — tight on fat tyres and some UK stands.",
  },
  {
    lead: "Compact D-lock will not fit the stand",
    slug: "abus-granit-xplus-540",
    name: "Granit XPlus 540",
    text: "300 mm shackle, frame mount, Diamond for ordinary bikes. E-bike grade is Gold on the spec we have.",
  },
  {
    lead: "Need a metre of chain at home",
    slug: "kryptonite-new-york-fahgettaboudit-1410",
    name: "New York 1410",
    text: "100 cm, 14 mm, 4.9 kg, Gold. Leave it by the door. Take a D-lock on the bike.",
  },
];

export const REVIEWS_LEDE =
  "Six D-locks and chains, from Sold Secure Gold to Diamond. Each review says who it is for, who should skip it, and the main drawbacks.";

export const REVIEWS_INTRO = [
  "These are desk reviews, not a ranking of every lock on Amazon. We took six products people actually search for — three Diamond D-locks, two Gold D-locks, and one Gold chain — and wrote each one up against the same questions: grade, fit, weight, and whether you will carry it.",
  "Start with the group that matches the grade on your policy. Then read the verdict, not just the name. A Diamond lock you leave at home is worse than a Gold lock on the bike.",
];

export const REVIEW_GROUPS = [
  {
    title: "Sold Secure Diamond D-locks",
    blurb:
      "For higher-value bikes and policies that name Diamond. The X1 is the one we would still commute with (1.7 kg, ordinary-bike and e-bike Diamond, 101 × 197 mm). The D1000 is the compact anti-grinder lock (1.9 kg, 92 × 155 mm, no mount) — only if you have measured the stand. The ABUS 540 is the long 300 mm shackle for posts a Mini cannot close around; e-bike grade is Gold.",
    slugs: ["litelok-x1", "hiplok-d1000", "abus-granit-xplus-540"],
  },
  {
    title: "Sold Secure Gold D-locks",
    blurb:
      "For the many UK household policies that still name Gold. The Evolution Mini-7 is the commute lock: 1.61 kg, frame mount, cable in the box — the cable is not Gold. The New York Mini is 18 mm thick and 2.06 kg, with no mount; most commuters should buy the Mini-7 instead.",
    slugs: ["kryptonite-evolution-mini-7", "kryptonite-new-york-fahgettaboudit-mini"],
  },
  {
    title: "Chain for home and extra length",
    blurb:
      "The New York 1410 is 100 cm of 14 mm Gold chain at 4.9 kg. Use it at home, in the garden, or on a post a D-lock cannot reach. Do not commute with it. Pair it with a D-lock you actually carry.",
    slugs: ["kryptonite-new-york-fahgettaboudit-1410"],
  },
] as const;

export const METHOD_META =
  "How Lock Desk researches bike locks: Sold Secure grades, manufacturer specs, and UK insurance wording. Desk research, not a cutting lab.";

export const METHOD_INTRO =
  "Lock Desk is desk research. We have not cut these locks open, and we do not pretend otherwise. Every claim on a review page should be something we can point to on a spec sheet, a Sold Secure grade, or the manufacturer’s own documentation.";

export const METHOD_USE = [
  "The product record: UK listing code (ASIN), name, brand, and the specs we have for it — weight, locking area, shackle or chain size, keys, frame mount, cable.",
  "Manufacturer documentation, including notes on whether a cable in the box is part of the Sold Secure approval.",
  "Sold Secure’s public grades for ordinary (pedal) cycles and, where we have it, powered cycles / e-bikes.",
  "How UK cycle insurance typically names Gold and Diamond. We are not your broker, and we do not keep a live list of approved models — insurers change those lists.",
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
      "A commute lock is one you will take every day. For most UK riders that is a Gold compact D-lock with a frame mount. Step up to Diamond if the bike is worth the extra weight.",
    h2: "Two commute locks we would take",
    notFor:
      "Skip this page if you only need a lock for a shed, a ground anchor, or a heavy chain left at home.",
    body: [
      "A commute lock has a simple job: be on the bike at the station. Grade matters for the policy. Fit matters for the stand. Weight and a frame mount decide whether you still have the lock with you on a wet Tuesday.",
      "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the pick: 1.61 kg, a frame mount, and a cable in the box. The D-lock is Gold. The cable is not — use it for a quick-release wheel, not as a second lock. That combination is why we put it ahead of thicker, heavier Gold Minis with no mount.",
      "If the bike is an e-bike you would hate to claim on, or the policy names Diamond, and you will carry 1.7 kg, take the Litelok X1 instead. It is Diamond for ordinary bikes and for e-bikes. There is no frame mount in the listing we reviewed, so budget for a bag or a separate mount, or it will start living in the hallway.",
      "Do not buy the Hiplok D1000 for a commute until you have checked that the 92 × 155 mm shackle closes on your stand. It is a serious Diamond lock. It is also compact, 1.9 kg, and listed without a mount. Fit first.",
      "A 4.9 kg chain is not a commute lock. Keep the New York 1410 at home for extra length — a garden, a ground anchor, a post a Mini cannot close around — and a D-lock on the bike. That two-lock setup is what careful commuters actually sustain.",
      "Lock the frame to the stand, not just a wheel. If the shackle will take the rear wheel as well, do that. Fill the shackle as much as you can. Check the stand is fixed down. None of that is exciting. All of it matters more than the brand on the box.",
    ],
    picks: ["kryptonite-evolution-mini-7", "litelok-x1"],
    faqs: [
      {
        q: "Can I commute with the 1410 chain?",
        a: "Not twice a day. 4.9 kg stays by the door. Keep a chain at home for extra length, and a D-lock on the bike.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the pick: 1.61 kg, a frame mount, and a cable in the box. The cable is not Gold. If the bike is an e-bike you would hate to claim on, and you will carry 1.7 kg, take the Litelok X1. We are not your insurance broker.",
      },
      {
        q: "Do I need a frame mount?",
        a: "If you will skip a lock that has to live in a bag, yes. The Mini-7 and the ABUS 540 list a mount. The X1 and D1000 listings we reviewed do not. A Diamond lock in the hallway is worse than a Gold lock on the bike.",
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
      "Match Sold Secure Gold or Diamond to the policy, then check the insurer’s approved list. We are not your insurance broker.",
    h2: "Three locks that can meet a typical policy",
    notFor: "We do not sell insurance, and we do not keep a live list of approved models.",
    body: [
      "Sold Secure is independent. Your insurer is not obliged to accept every lock that carries the badge. Many policies ask for a minimum grade and then publish a list of approved models. Both checks matter. A Gold badge on a lock that is missing from that PDF can still be a problem at claim time.",
      "We do not keep that list current, because insurers change it. Open the document that came with your policy. If it names models, match the model — not just “a Gold D-lock”. If it only names the grade, the Sold Secure marking on the lock you buy still needs to match.",
      "E-bike policies are where people get caught. Some name the powered-cycle grade rather than the pedal-cycle grade. A lock can be Diamond for an ordinary bike and only Gold for an e-bike. The ABUS 540 is that way round on the spec we have. The Litelok X1 and Hiplok D1000 are Diamond for both.",
    ],
    fold: {
      gold: "If your policy names Gold, look at the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7).",
      diamond:
        "If your policy names Diamond, look at the [Litelok X1](/reviews/litelok-x1), or the [D1000](/reviews/hiplok-d1000) if 92 × 155 mm will close.",
    },
    policy: [
      "Read the wording you signed. Many UK household cycle policies still say Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the powered-cycle grade rather than the ordinary-bike grade.",
      "Then open the insurer’s approved-lock PDF. A lock can be Gold in Sold Secure’s database and still missing from one brand’s list. The grade is required, but it is not always enough.",
    ],
    records:
      "On the spec we have: Evolution Mini-7, the New York Mini and the 1410 chain are Gold for ordinary bikes. Litelok X1 and Hiplok D1000 are Diamond for both ordinary bikes and e-bikes. The ABUS 540 is Diamond for ordinary bikes and Gold for e-bikes — the wrong way round if your e-bike policy wants powered Diamond.",
    checklist: [
      "Read the wording you signed — Gold or Diamond, pedal or powered.",
      "Open the insurer’s approved-lock PDF.",
      "Match the model, not just the badge.",
      "Check the marking on the lock you actually receive.",
    ],
    picks: ["litelok-x1", "kryptonite-evolution-mini-7", "hiplok-d1000"],
    faqs: [
      {
        q: "If it is Gold, am I covered?",
        a: "Only if your policy names Gold and, where the insurer publishes a list, the exact model is on that list. A Sold Secure badge is not the same as being on the list. We are not your broker.",
      },
      {
        q: "Ordinary-bike Diamond or e-bike Diamond?",
        a: "E-bike policies sometimes name the powered-cycle grade. The X1 and D1000 are Diamond for both on the spec we have. The ABUS 540 is Diamond for ordinary bikes and Gold for e-bikes.",
      },
      {
        q: "Does a cable in the box count?",
        a: "Usually not. On Kryptonite’s Mini-7 notes the cable is not part of the Sold Secure approval. The D-lock is the graded product. Do not lock the bike with the cable alone and expect the policy to treat that as Gold.",
      },
      {
        q: "Will you tell me which insurer accepts which lock?",
        a: "No. Lists change, and we do not sell insurance. Read the PDF that belongs to your policy. Then match the model.",
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
      "The Mini-7 is Gold you will carry: 1.61 kg, a frame mount, and a cable.",
      "The D1000 is Diamond with a tight shackle: 1.9 kg, no mount, 92 × 155 mm.",
    ],
    afterTable: [
      "The Evolution Mini-7 is 1.61 kg, Gold, a frame mount, and a cable in the box. The cable is not Gold. If that meets the policy, this is the lock that will actually be on the bike at 7am. That is the whole case for it.",
      "The D1000 is Diamond for ordinary bikes and for e-bikes, sold as anti-grinder, 1.9 kg, no mount, and a 92 × 155 mm locking area. Worth it on a known high-theft stand you have already measured. If you have not measured, do not guess. Fat tyres, cargo frames, and some UK street furniture will not take it.",
      "Carry is the other split. The Mini-7 is designed to live on the bike. The D1000, on the listing we have, is 1.9 kg in a bag or in your hand. A Diamond lock that starts staying at home is the wrong upgrade.",
      "If neither shackle will close, look at the [ABUS 540](/reviews/abus-granit-xplus-540) — 300 mm — not a thicker Mini. If you wanted Diamond with a usable locking area and 1.7 kg, that is the [Litelok X1](/reviews/litelok-x1), not this comparison.",
    ],
    faqs: [
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK household policies still name. Diamond is the higher pedal grade, tested against a tougher tool set — it is not a promise against a battery grinder. Read the wording you signed. We are not your broker.",
      },
      {
        q: "D1000 or DX1000?",
        a: "D1000 is 92 × 155 mm, 1.9 kg. DX1000 is 112 × 205 mm, 2.75 kg, and has no full review here yet. Buy the one that closes. Do not guess from a product photo.",
      },
      {
        q: "Why not just buy the D1000 if it is Diamond?",
        a: "Because it has to close, and you have to carry it. If Gold meets the policy and you will skip 1.9 kg with no mount, the Mini-7 is the lock that protects the bike. If you need Diamond you will still carry, look at the [X1](/reviews/litelok-x1).",
      },
      {
        q: "Is the Mini-7 cable Gold?",
        a: "No. Kryptonite says the cable is not part of the Sold Secure approval. Use it for a quick-release wheel. Lock the frame with the D-lock.",
      },
    ],
    leadWithAntiGrinder: true,
    tableNote:
      "“Sold as angle-grinder resistant” is the maker’s language. The independent grade on the D1000 is Diamond. Cut-times are marketing.",
  },
  {
    slug: "d-lock-vs-chain",
    title: "D-lock vs chain lock",
    description:
      "A Gold compact D-lock versus a 100 cm New York chain. Carry versus extra length. Using both is common; commuting with 4.9 kg is not.",
    a: "kryptonite-evolution-mini-7",
    b: "kryptonite-new-york-fahgettaboudit-1410",
    intro:
      "A D-lock and a chain do different jobs. The Mini-7 is the lock you take on the bike. The New York 1410 is a 4.9 kg Gold chain for when a Mini cannot reach the only solid object. Using both is common. Commuting with the chain is not.",
    whoEach: [
      "The Mini-7 is for carrying on a commute.",
      "The 1410 is for extra length at home.",
    ],
    afterTable: [
      "A D-lock is for a tight stand. A chain is for extra length. That is the main difference, and it is why these two are not rivals.",
      "The Evolution Mini-7 is what you take on the bike: 1.61 kg, a frame mount, Sold Secure Gold. You will carry it. You will not carry 4.9 kg twice a day, and you should not plan as if you will.",
      "The New York 1410 is 100 cm of 14 mm Gold chain for a home, a garden, a ground anchor, or a post a compact D-lock cannot close around. Leave it where the bike is stored. Use it through the frame, to something that does not move.",
      "Careful riders use both and only carry the D-lock. If the compact lock will not close on the only stand at work, neither of these is the answer for that stand — see the [ABUS 540](/reviews/abus-granit-xplus-540). If you need Diamond on the bike and length at home, pair the [Litelok X1](/reviews/litelok-x1) with the chain.",
    ],
    faqs: [
      {
        q: "Can I commute with the 1410?",
        a: "Not twice a day. 4.9 kg stays by the door. Take a D-lock on the bike.",
      },
      {
        q: "Does looping the chain twice make it Diamond?",
        a: "No. It can reduce slack, which is useful. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor.",
      },
      {
        q: "Should I own both?",
        a: "If you lock up at home or on a terrace as well as at the station, yes. The D-lock covers the commute. The chain covers the awkward post. That is the setup that lasts.",
      },
      {
        q: "Is a chain safer than a D-lock?",
        a: "Not as a class. Grade, thickness, and whether you use it all matter more than the shape. A Gold D-lock on the bike beats a Gold chain left in the shed. A chain wins when you need length.",
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
  "The New York Mini is 2.06 kg, 18 mm Gold, with no frame mount. Better options: Evolution Mini-7 to carry, Litelok X1 for Diamond, or a New York chain at home.";
export const ALT_LEDE =
  "The Fahgettaboudit Mini is an 18 mm Gold D-lock at 2.06 kg, with no frame mount and no cable on the spec we have. People search it because of the name. Most riders need a lock they will actually carry, a Diamond lock for insurance, or a long chain to leave at home.";
export const ALT_BODY = [
  "Keep the New York Mini only if you want an 18 mm Gold compact D-lock as a second lock on a heavy bike, and you do not need a mount or a cable. Thickness is the selling point. Weight is the problem. Most commuters should not buy it as their only lock.",
  "The name is marketing. What you actually get is a Gold Mini that is 450 g heavier than the Evolution Mini-7, with a smaller locking area (83 × 153 mm versus 83 × 178 mm), no mount, and no cable. Sold Secure Gold is still only Gold. Insurers who name that grade may accept it if the exact model is on their list. They will not care that it says New York.",
];
export const ALT_FAQS: Faq[] = [
  {
    q: "Should I still buy the New York Mini?",
    a: "Only as a thick second lock you will not have to clip on every morning. Most commuters should buy the Evolution Mini-7.",
  },
  {
    q: "Is the Mini on the best-of page?",
    a: "No. The [best bike locks UK](/best) page lists five locks we would pick. This Mini is reviewed because people search the name, not because we would commute with it.",
  },
  {
    q: "New York Mini or Evolution Mini-7?",
    a: "Evolution: 13 mm shackle, 1.61 kg, frame mount, cable, Gold. New York Mini: 18 mm shackle, 2.06 kg, no mount, no cable, Gold. That is carry versus thickness. Carry usually wins.",
  },
  {
    q: "What if I wanted New York for maximum security?",
    a: "If the policy wants Diamond, look at the [Litelok X1](/reviews/litelok-x1), not a thicker Gold Mini. If you need length at home, the [New York 1410 chain](/reviews/kryptonite-new-york-fahgettaboudit-1410) is the sibling that actually uses the name well.",
  },
];
