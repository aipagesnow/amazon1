/**
 * Optional guide sections for reviews rebuilt as fuller buying guides (Nov 2026).
 * Figures come from the maker listings and Sold Secure, as in data/products.json.
 * Worked figures are arithmetic on those numbers, not test results.
 */
export type ReviewGuide = {
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  summary: string;
};

import { SOLD_SECURE_APPROVED_SEARCH as SS } from "@/lib/sold-secure";

export const REVIEW_GUIDES: Record<string, ReviewGuide> = {
  "kryptonite-new-york-fahgettaboudit-mini": {
    sections: [
      {
        heading: "What the 18 mm shackle does and doesn’t buy you",
        paragraphs: [
          "The 18 mm shackle is the reason people look at this lock. Thicker hardened steel takes longer to cut with hand tools, and it leaves less room inside the lock for a jack or a long-handled lever. That is the whole case for the New York Mini, and it is a fair one.",
          "What it doesn’t change is the grade. Sold Secure lists this lock as Gold for ordinary bikes, the same grade as the 13 mm Evolution Mini-7. Insurers write the grade and sometimes the model into the policy, not the shackle thickness. So if your policy says Gold, both locks meet it. If it says Diamond, neither does.",
          "It also isn’t sold as angle-grinder resistant. A battery grinder goes through plain hardened steel of either thickness; the thicker shackle mainly makes the thief work longer and use more battery. If grinders are the worry at your stand, read [what to look for in an anti-grinder lock](/for/anti-grinder) before buying any compact D-lock.",
        ],
      },
      {
        heading: "Will it fit your stand? A worked example",
        paragraphs: [
          "The locking area is 83 × 153 mm. Width matters more than people expect, because a stand tube and a frame tube have to sit side by side or one behind the other inside that space.",
          "Here is an example: say your stand is a round post about 48 mm across and your down tube is about 38 mm. Side by side, that is 86 mm, just over the 83 mm opening, so the two sit end to end along the 153 mm length instead, leaving about 67 mm. That closes the lock, but the thick 18 mm shackle bars eat into the gap, so a rear wheel usually won’t fit as well.",
          "With the same example tubes, the Evolution Mini-7 (83 × 178 mm) would leave about 92 mm, which is often the difference between the frame only and the frame plus the rim. Measure your own stand and tubes; these are example figures, not a standard.",
        ],
      },
      {
        heading: "Carrying 2.06kg without a mount",
        paragraphs: [
          "The New York Mini weighs 2.06kg. The Evolution Mini-7 weighs 1.61kg, so the New York Mini is 0.45kg (about 28%) heavier, and there is no frame mount in the box.",
          "That means it goes in a bag, a pannier, or a back pocket that isn’t built for it. For a lock that stays on a heavy bike at home, or lives at a regular stand at work, that is fine. For a daily commute on a lighter bike, the extra weight and the lack of a clip are the most likely reasons it ends up left at home.",
        ],
        bullets: [
          "Locks that live in one place (home, work stand): weight matters less, so the thickness is worth having.",
          "Locks you carry every day: the lighter Mini-7 with a mount is usually the one you’ll actually bring.",
          "Two-lock setups: the New York Mini makes a solid second lock alongside a chain at home.",
        ],
      },
      {
        heading: "Checking the grade yourself",
        paragraphs: [
          `Grades can change and listings can be renamed, so check the exact model on [Sold Secure’s approved products search](${SS}) before you buy, then match it to the wording on your policy. Kryptonite’s own specs are on [kryptonitelock.com](https://www.kryptonitelock.com). We haven’t cut or tested this lock ourselves; the figures here are the published ones.`,
        ],
      },
    ],
    summary:
      "A thick, Gold-rated compact D-lock that suits a lock left on a heavy bike or at a regular stand. For daily carry, the [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7) is lighter, has 25 mm more length and comes with a mount; for a Diamond policy, look at the [Litelok X1](/reviews/litelok-x1).",
  },

  "onguard-pitbull-dt-8005": {
    sections: [
      {
        heading: "What you get in the box, and what is graded",
        paragraphs: [
          "The DT 8005 is a Pitbull D-lock with a 14 mm shackle, a frame mount, five keys and a looped cable. Sold Secure lists the D-lock as Diamond for ordinary bikes. The cable is not part of that grade.",
          "This matters because a Diamond grade is the reason most people choose a Pitbull. The D-lock should always hold the frame to the stand. The cable is for a quick-release wheel or a saddle, where a thief would otherwise just lift the part off.",
        ],
      },
      {
        heading: "DT 8005 or STD 8003: the weight of the cable",
        paragraphs: [
          "The DT is listed at 1.6kg and the STD at 1.44kg. The cable and its loops cost you about 0.16kg, roughly 11% more to carry. The shackle, locking area and mount are the same.",
          "If both your wheels are bolted on, or you already own a cable, the STD gives you the same Diamond D-lock for less weight. If your front wheel is quick-release and you would otherwise buy a separate cable, the DT saves you a purchase and keeps everything in one box.",
        ],
        bullets: [
          "Quick-release front wheel, no cable yet: the DT 8005 makes sense.",
          "Bolted-on wheels or a cable you already own: the [STD 8003](/reviews/onguard-pitbull-std-8003) is the lighter choice.",
          "Stand too fat for 230 mm: the [LS 8002](/reviews/onguard-pitbull-ls-8002) is the long Pitbull.",
        ],
      },
      {
        heading: "Using the 115 × 230 mm locking area well",
        paragraphs: [
          "At 115 mm wide, this Pitbull is roomier than the 83 mm compact locks. Say your stand is a square street post about 60 mm across and your seat tube is about 32 mm (example figures; measure your own). Side by side, that is 92 mm, leaving about 23 mm across, and along the 230 mm length there is space for a rear rim as well. Keep the 14 mm shackle filled so there is little room for a jack.",
          "The trade-off is that spare space gives a thief room for a lever or jack. Fill the shackle as much as you can: frame and rear wheel together, tight to the stand, with the keyway facing down. Thread the cable through the front wheel and back into the D-lock.",
        ],
      },
      {
        heading: "Insurance and e-bikes",
        paragraphs: [
          `Sold Secure grades ordinary bikes and powered bikes in separate tests. We haven’t found an e-bike grade for this model, so if your policy names e-bike Diamond, check the exact listing on [Sold Secure’s approved products search](${SS}) before you rely on it. The [Litelok X1](/reviews/litelok-x1) is Diamond for both. OnGuard’s specs are on [onguardlock.com](https://www.onguardlock.com). We haven’t cut or tested this lock; the figures are the published ones.`,
        ],
      },
    ],
    summary:
      "A Diamond-rated Pitbull D-lock with a mount and a cable for a quick-release wheel, at 1.6kg. Lock the frame with the D-lock, not the cable. If you don’t need the cable, the [STD 8003](/reviews/onguard-pitbull-std-8003) is the same lock and 0.16kg lighter.",
  },

  "abus-granit-xplus-540": {
    sections: [
      {
        heading: "How much more room 300 mm gives you",
        paragraphs: [
          "The 540’s locking area is 108 × 300 mm. The Evolution Mini-7’s is 83 × 178 mm. That is 122 mm more length and 25 mm more width, and about 2.2 times the space inside the lock (32,400 mm² against 14,774 mm²).",
          "In practice, that means the 540 can close around fat lamp posts, thick railings, and some cycle hoops that a compact lock simply won’t reach. It can also take a frame tube and a rear rim together on most ordinary stands.",
        ],
      },
      {
        heading: "Filling the shackle: a worked example",
        paragraphs: [
          "Here is an example: say you lock to a lamp post about 76 mm across, through a fat e-bike down tube about 55 mm deep and a 30 mm rim. Stacked along the length, that is 161 mm of the 300 mm, leaving about 139 mm of open shackle. These are example figures, so measure your own. That gap is the main weakness of any long lock, because it leaves room for a jack or a lever.",
          "So use the length only when you need it. Put the lock high on the stand, take in the frame and the rear wheel, and turn the bike so the shackle sits as full as possible. If a compact lock already closes on the stands you use, the extra length gains you nothing.",
        ],
        bullets: [
          "Fat posts and railings a compact lock can’t close on: the 540 earns its length.",
          "Ordinary Sheffield stands: a shorter shackle is usually tighter and easier to carry.",
          "Very fat posts or cargo bikes: compare the [Pitbull LS 8002](/reviews/onguard-pitbull-ls-8002), a long Diamond lock at 115 × 292 mm.",
        ],
      },
      {
        heading: "Diamond for ordinary bikes, Gold for e-bikes",
        paragraphs: [
          `Sold Secure tests ordinary bikes and powered bikes separately. The 540 is Diamond for ordinary bikes and Gold for e-bikes. If you ride an e-bike and your policy asks for Diamond, this lock may not meet it. Check the exact listing on [Sold Secure’s approved products search](${SS}) and compare it with your policy wording.`,
          "For an e-bike policy that wants Diamond, the [Litelok X1](/reviews/litelok-x1) is Diamond in both tests. The [Hiplok D1000](/reviews/hiplok-d1000) is sold as angle-grinder resistant, which the 540 isn’t.",
        ],
      },
      {
        heading: "Carrying it",
        paragraphs: [
          "At 1.8kg with the EaZy KF bracket in the box, the 540 is about 0.2kg heavier than the Mini-7 and in the same weight band as the Litelok X1. The long shackle makes it awkward in a small bag, so the frame bracket is the realistic way to carry it every day. Check that your frame has room for a 300 mm lock before you buy. There are only two keys, so keep the spare somewhere safe. We haven’t cut or tested this lock; the figures are the published ones.",
        ],
      },
    ],
    summary:
      "A long, Diamond-rated (ordinary bikes) D-lock with a frame bracket, for posts and railings a compact lock won’t reach. It is Gold for e-bikes and isn’t sold as anti-grinder. If a compact lock already fits your stands, a shorter lock will sit tighter.",
  },
  "hiplok-d1000": {
    sections: [
      {
        heading: "How we put this review together",
        paragraphs: [
          "This is desk research. We haven’t cut, ground or carried a D1000 ourselves. The figures come from [Hiplok’s own D1000 page](https://hiplok.com/products/hiplok-d1000) and Sold Secure’s listings, and the worked examples below are arithmetic on those numbers, not test results.",
        ],
      },
      {
        heading: "What Hiplok publishes",
        paragraphs: [
          "Hiplok lists an internal locking area of 92 × 155 mm, a 32 mm shackle, a weight of 1.93 kg and an outside size of 230 × 155 × 40 mm. It comes with three coded, replaceable keys and a key code card, and Hiplok offers a lifetime warranty if you register within 30 days.",
          "On security, Hiplok names Sold Secure Diamond for pedal cycles and for powered cycles (e-bikes), plus ART 4 Star. The anti-grinder claim is Hiplok’s description of the shackle material, which is designed to wear down cutting discs. Sold Secure’s grade is the independent part; the cut-time claims are the maker’s.",
        ],
      },
      {
        heading: "Will 92 × 155 mm close round your e-bike? A worked example",
        paragraphs: [
          "Here is an example: say your stand is a round Sheffield tube about 60 mm across, and your e-bike has an oval down tube about 65 mm deep. Side by side, that is 125 mm, far wider than the 92 mm opening. End to end along the 155 mm length, it fits with about 30 mm to spare. The lock closes, but there is no room for the rear wheel as well.",
          "Now say it’s an e-scooter: a stem about 45 mm across against a railing bar about 25 mm. Side by side that is 70 mm, which sits inside the 92 mm width with room left over. These are example figures. Measure your own stand and frame, or use Hiplok’s free size checker, before you buy.",
        ],
      },
      {
        heading: "Carrying it without a mount: a worked example",
        paragraphs: [
          "There is no frame mount in the box, so it goes in a bag. Say your rucksack’s laptop sleeve is about 25 cm tall: the D1000’s 230 mm outside length fits upright, and at 40 mm deep it sits flatter than most D-locks with a thick shackle. The weight is the harder part. At 1.93 kg it is about 230 g heavier than the Litelok X1, and you’ll notice that on a daily commute.",
        ],
        bullets: [
          "High-theft stands you have already measured: the D1000 earns its place.",
          "Fat-tyre, cargo or chunky e-bike frames with a wide stand: look at the [DX1000](/reviews/hiplok-dx1000) and its 112 × 205 mm area.",
          "Diamond with more room and less weight: the [Litelok X1](/reviews/litelok-x1).",
        ],
      },
      {
        heading: "Checking the grade yourself",
        paragraphs: [
          `Grades can change, so check the exact model on [Sold Secure’s approved products search](${SS}) and match it to the wording on your insurance policy. Hiplok’s specifications are on [hiplok.com](https://hiplok.com/products/hiplok-d1000).`,
        ],
      },
    ],
    summary:
      "A compact, Sold Secure Diamond D-lock for bikes and e-bikes, sold as angle-grinder resistant, at 1.93 kg with no mount. Its 92 × 155 mm locking area is the thing to check: measure your stand and frame first. If it won’t close, the [DX1000](/reviews/hiplok-dx1000) is the larger Hiplok.",
  },
};
