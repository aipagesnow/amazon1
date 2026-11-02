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
          "Take a Sheffield stand with a tube about 50 mm across and a down tube about 40 mm across. Side by side, that is 90 mm, which is wider than the 83 mm opening. So in practice the two tubes sit end to end along the 153 mm length: 50 + 40 = 90 mm, leaving about 63 mm. That is enough to close the lock, but usually not enough to take in a rear wheel as well.",
          "The Evolution Mini-7 has the same 83 mm width but 178 mm of length, which leaves about 88 mm with the same two tubes. That extra 25 mm is often the difference between locking the frame only and locking the frame plus the rim. Measure your own stand and tubes; these are example figures, not a standard.",
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
          "At 115 mm wide, this Pitbull is roomier than the 83 mm compact locks. With a 50 mm stand tube and a 40 mm frame tube side by side, that is 90 mm, leaving about 25 mm across. That often leaves room to take in the rear rim with the frame, which a compact lock can’t do.",
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
          "Take a 50 mm stand tube, a 40 mm frame tube and a 25 mm rim. Stacked along the length, that is 115 mm of the 300 mm, leaving 185 mm of open shackle. That gap is the main weakness of any long lock, because it leaves room for a jack or a lever.",
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
};
