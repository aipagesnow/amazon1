export const BEST_VERDICTS: Record<string, { bestFor: string; caveat: string }> = {
  B0BLT59NFJ: {
    bestFor: "Diamond grade you can still commute with — ordinary bikes and e-bikes.",
    caveat: "No frame mount in this listing.",
  },
  B074K6KSY5: {
    bestFor: "Gold commute lock with a cable and a mount.",
    caveat: "The cable is not Sold Secure approved.",
  },
  B0D77XJR4Z: {
    bestFor: "High-theft stands you have already measured.",
    caveat: "92 × 155 mm shackle is tight; no mount listed.",
  },
  B0944HG7MK: {
    bestFor: "When a compact U-lock will not close on the stand.",
    caveat: "E-bike Sold Secure grade is Gold, not Diamond.",
  },
  B073W8N26F: {
    bestFor: "Extra length at home, not in a backpack.",
    caveat: "4.9 kg. Not a commute lock.",
  },
};

export type Faq = { q: string; a: string };

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
      "A commute lock is one you will take every day. For most people that is a Gold compact U-lock with a clip. Step up to Diamond if the bike is worth the extra weight.",
    h2: "Two commute locks we would take",
    notFor:
      "Skip this page if you only need a lock for a shed, a ground anchor, or a heavy chain left at home.",
    body: [
      "If you leave the lock at home, it does not protect the bike at the station. Weight, and whether it clips to the bike, decide whether you take it every day.",
      "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the pick here: 1.61 kg, a clip, and a cable in the box. The cable is not Gold.",
      "If the bike is an e-bike you would hate to claim on, and you will carry 1.7 kg, take the Litelok X1 instead. Do not buy the D1000 for a commute until you have checked that the 92 × 155 mm locking area closes on your stand.",
      "A 4.9 kg chain is not a commute lock. Keep a chain at home for extra length, and a U-lock on the bike.",
    ],
    picks: ["kryptonite-evolution-mini-7", "litelok-x1"],
    faqs: [
      {
        q: "Can I commute with the 1410?",
        a: "Not twice a day. 4.9 kg stays by the door. Keep a chain at home for extra length, and a U-lock on the bike.",
      },
      {
        q: "Gold or Diamond for commuting?",
        a: "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the pick: 1.61 kg, a clip, and a cable in the box. The cable is not Gold. If the bike is an e-bike you would hate to claim on, and you will carry 1.7 kg, take the Litelok X1. We are not your insurance broker.",
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
    body: [],
    fold: {
      gold: "If your policy names Gold, look at the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7).",
      diamond:
        "If your policy names Diamond, look at the [Litelok X1](/reviews/litelok-x1), or the [D1000](/reviews/hiplok-d1000) if 92 × 155 mm will close.",
    },
    policy: [
      "Read the wording you signed. Many UK bike policies still say Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the e-bike grade rather than the ordinary-bike grade.",
      "Then open the insurer’s approved-lock PDF. A lock can be Gold in Sold Secure’s database and still missing from one brand’s list. The grade is required, but it is not always enough. If the PDF names models, match the model, not just the badge. We do not keep that list current, because insurers change it.",
    ],
    records:
      "On the spec we have: Evolution Mini-7, the New York Mini and the 1410 chain are Gold for ordinary bikes. Litelok X1 and Hiplok D1000 are Diamond for both ordinary bikes and e-bikes. The ABUS 540 is Diamond for ordinary bikes and Gold for e-bikes — the wrong way round if your e-bike policy wants e-bike Diamond.",
    checklist: [
      "Read the wording you signed.",
      "Open the insurer’s approved-lock PDF.",
      "Match the model, not just the badge.",
    ],
    picks: ["litelok-x1", "kryptonite-evolution-mini-7", "hiplok-d1000"],
    faqs: [
      {
        q: "If it is Gold, am I covered?",
        a: "Only if your policy names Gold and the exact model is on that insurer’s list. A Sold Secure badge is not the same as being on the list.",
      },
      {
        q: "Ordinary-bike Diamond or e-bike Diamond?",
        a: "E-bike policies sometimes name the e-bike grade. On this site the X1 and D1000 are Diamond for both. The ABUS 540 is Diamond for ordinary bikes and Gold for e-bikes.",
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
      "A Gold compact lock with a cable versus a Diamond anti-grinder U-lock. Who each is for, and who should skip both for the X1.",
    a: "kryptonite-evolution-mini-7",
    b: "hiplok-d1000",
    intro:
      "This compares a Sold Secure Gold commute lock with a Diamond U-lock sold as anti-grinder. They suit different riders.",
    whoEach: [
      "The Mini-7 is Gold you will carry: 1.61 kg, a clip, and a cable.",
      "The D1000 is Diamond with a compact shackle: 1.9 kg, no clip, 92 × 155 mm.",
    ],
    afterTable: [
      "The Evolution Mini-7 is 1.61 kg, Gold, a bike clip, and a cable in the box. The cable is not Gold. If that meets the policy, this is the lock that will actually be on the bike.",
      "The D1000 is Diamond for ordinary bikes and for e-bikes, sold as anti-grinder, 1.9 kg, no clip, and a 92 × 155 mm locking area. Worth it on a known high-theft stand you have measured. If you will not carry 1.9 kg with no clip, it will stay at home.",
      "If neither lock will close, look at the [ABUS 540](/reviews/abus-granit-xplus-540) — not a thicker compact lock. If you wanted Diamond with a shackle that fits most stands and 1.7 kg, that is the [Litelok X1](/reviews/litelok-x1), not this comparison.",
    ],
    faqs: [
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK home policies still name. Diamond is the higher bike grade. Read the wording you signed. We are not your insurance broker.",
      },
      {
        q: "D1000 or DX1000?",
        a: "D1000 is 92 × 155 mm, 1.9 kg. DX1000 is 112 × 205 mm, 2.75 kg and has no full review on this site yet. Buy the one that closes.",
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
      "A Gold compact U-lock versus a 100 cm New York chain. Carry versus extra length. Using both is common; commuting with 4.9 kg is not.",
    a: "kryptonite-evolution-mini-7",
    b: "kryptonite-new-york-fahgettaboudit-1410",
    intro:
      "A D-lock and a chain do different jobs. The Mini-7 is the lock you take on the bike. The New York 1410 is a 4.9 kg Gold chain for when a compact lock cannot reach the only solid object. Using both is common. Commuting with the chain is not.",
    whoEach: [
      "The Mini-7 is for carrying on a commute.",
      "The 1410 is for extra length at home.",
    ],
    afterTable: [
      "A U-lock is for a tight stand. A chain is for extra length. That is the main difference.",
      "The Evolution Mini-7 is what you take on the bike: 1.61 kg, a clip, Gold. You will carry it. You will not carry 4.9 kg twice a day.",
      "The New York 1410 is 100 cm of 14 mm Gold chain for a home, a garden, a ground anchor, or a post a compact lock cannot close around. Leave it where the bike is stored.",
      "These are not rivals. Careful riders use both and only carry the U-lock. If the compact lock will not close, neither of these is the answer — see the [ABUS 540](/reviews/abus-granit-xplus-540).",
    ],
    faqs: [
      {
        q: "Can I commute with the 1410?",
        a: "Not twice a day. 4.9 kg stays by the door.",
      },
      {
        q: "Does looping the chain twice make it Diamond?",
        a: "No. It can reduce slack. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor.",
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
  "The New York Mini is 2.06 kg, 18 mm Gold, with no clip. Better options: Evolution Mini-7 to carry, Litelok X1 for Diamond, or a New York chain at home.";
export const ALT_FAQS: Faq[] = [
  {
    q: "Should I still buy the New York Mini?",
    a: "Only as a thick second lock you will not have to clip on every morning. Most commuters should buy the Evolution Mini-7.",
  },
  {
    q: "Is the Mini on the best-of page?",
    a: "No. The best-of page lists five locks we would pick. This Mini is reviewed because people search the name, not because we would commute with it.",
  },
];
