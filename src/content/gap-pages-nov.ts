/**
 * GSC content-gap pages (1 Nov 2026). Figures come from data/products.json only.
 * Desk research — no cut tests, no prices.
 */
import type { GapFaq, GapSection } from "@/content/gap-pages";

export type GapPick = { asin: string; situation: string; why: string; caveat: string };

/* ---------- 1. Delivery riders and e-bikes ---------- */

export const DELIVERY_PATH = "/for/delivery-riders";
export const DELIVERY_TITLE = "Best bike locks for delivery riders and e-bikes";
export const DELIVERY_H1 = "Best bike locks for delivery riders and e-bikes";
export const DELIVERY_META =
  "Bike locks for delivery work and e-bikes: quick to use at every drop, Sold Secure graded for e-bikes where it matters, with weights and locking areas.";
export const DELIVERY_DIRECT =
  "Short answer: if you're on an e-bike, we'd carry the Hiplok D1000. It's Sold Secure Diamond for e-bikes as well as ordinary bikes, at 1.93kg, though it has no frame mount. On a pedal bike, the OnGuard Pitbull STD 8003 is Diamond at 1.44kg and clips to the frame, so it's quicker to grab at every drop.";

export const DELIVERY_PICKS: GapPick[] = [
  {
    asin: "B0D77XJR4Z",
    situation: "If you deliver on an e-bike",
    why: "The D1000 is Sold Secure Diamond for ordinary bikes and for e-bikes, and it's sold as anti-angle-grinder. At 1.93kg with a 92 × 155 mm locking area, it's compact enough for a bag or a rear rack.",
    caveat: "There's no frame mount, and that small loop needs a slim stand. Measure the posts at your usual drops first.",
  },
  {
    asin: "B01A6ZRMEK",
    situation: "If you're on a pedal bike and stop all shift",
    why: "The Pitbull STD 8003 is Sold Secure Diamond, weighs 1.44kg and comes with a frame mount, so it's on the bike when you pull up. The 115 × 230 mm locking area closes round most Sheffield stands.",
    caveat: "We don't have an e-bike grade for it on our records, so it's the pedal-bike pick.",
  },
  {
    asin: "B0D7JVP6QL",
    situation: "If you ride a cargo bike or a chunky e-bike frame",
    why: "The DX1000 is Diamond for bikes and e-bikes, with a 32 mm shackle and a wider 112 × 205 mm locking area for thick frame tubes.",
    caveat: "It's 2.75kg with no mount, so it's a lot to carry between drops.",
  },
];

export const DELIVERY_SECTIONS: GapSection[] = [
  {
    h2: "What makes a lock convenient for delivery work",
    paragraphs: [
      "You might lock up twenty times a shift, so the lock has to be quick. A frame mount means it's on the bike when you stop, not buried at the bottom of your bag under someone's order.",
      "Weight matters too, because you carry it all day. Every lock above is under 3kg, and the Pitbull STD is the lightest at 1.44kg. The locking area matters most of all. If the shackle won't close round the post outside a busy restaurant, you'll end up leaning the bike on a wall, and that's when bikes go.",
      "Here's the catch: a quick drop is still long enough for a thief with a grinder. We'd lock the frame to something fixed every time, even if you'll only be gone a minute.",
    ],
  },
  {
    h2: "Which locks are insurance-approved for e-bikes?",
    paragraphs: [
      "Sold Secure tests e-bike locks separately, and a lock can be Diamond for an ordinary bike but only Gold for an e-bike. If your policy names the e-bike grade, that's the one to match.",
      "Of the locks we cover, the [Hiplok D1000](/reviews/hiplok-d1000) and [DX1000](/reviews/hiplok-dx1000) are Diamond for e-bikes. The [ABUS Granit XPlus 540](/reviews/abus-granit-xplus-540) and the New York chains are Diamond for ordinary bikes and Gold for e-bikes. You can check any lock on [Sold Secure's approved product search](https://soldsecure.com/approved-product-search).",
      "Worth knowing: if you ride for work, check your policy covers business use. Plenty of personal cycle and home policies don't, and that's a separate question from the lock grade. [Best bike lock for insurance](/for/insurance) goes through the policy side.",
    ],
  },
  {
    h2: "Wearable and quick-access locks",
    paragraphs: [
      "None of the locks we've reviewed is designed to be worn on the body. If you want something small and fast to grab, a light D-lock on a frame mount is the closest thing. The [compact bike locks for flats](/best/compact-bike-locks-small-flats) page covers the lightest options, including the Seatylock Mason 140 at about 0.97kg.",
    ],
  },
  {
    h2: "At home and between shifts",
    paragraphs: [
      "When the bike's parked at home or in a block-of-flats car park, weight stops mattering. That's where a heavy chain and a ground anchor earn their place. We'd keep a chain such as the [New York Fahgettaboudit 1410](/reviews/kryptonite-new-york-fahgettaboudit-1410) where the bike lives and carry the D-lock on shift. [Ground anchors for flats and car parks](/guide/ground-anchors-flats-car-parks) explains how to set that up.",
      "If you deliver on a moped or scooter, Sold Secure has a separate motorcycle standard, and the bike locks here aren't the right tool.",
    ],
  },
];

export const DELIVERY_FAQS: GapFaq[] = [
  {
    q: "What's the most convenient bike lock for delivery riders?",
    a: "A light D-lock with a frame mount, because it's on the bike at every drop. The Pitbull STD 8003 is Diamond at 1.44kg with a mount. On an e-bike we'd carry the Hiplok D1000 instead, as it's Diamond for e-bikes too.",
  },
  {
    q: "Do e-bikes need a different Sold Secure grade?",
    a: "Sold Secure grades e-bike locks separately. The ABUS Granit XPlus 540 is Diamond for ordinary bikes but Gold for e-bikes, for example. The Hiplok D1000 and DX1000 are Diamond for both.",
  },
  {
    q: "Is a cable lock enough for a quick delivery stop?",
    a: "We wouldn't rely on one. A cable is easy to cut, and a quick stop is still long enough for a thief. Keep it for holding a wheel alongside a D-lock. [How to choose a cable lock](/guide/cable-locks) explains when one is enough.",
  },
];

/* ---------- 2. Cable locks ---------- */

export const CABLE_PATH = "/guide/cable-locks";
export const CABLE_TITLE = "How to choose a bike cable lock, and when one is enough";
export const CABLE_H1 = "How to choose a bike cable lock, and when one is enough";
export const CABLE_META =
  "What length and thickness of cable lock to buy, which features matter, and when a cable is enough compared with a chain or D-lock.";
export const CABLE_DIRECT =
  "Short answer: a cable lock is enough for holding a wheel or saddle alongside a proper lock, or for a stop where the bike stays in sight. For anything longer, we'd use a graded D-lock or chain. If you're buying a cable to go with a D-lock, get one long enough to reach from the shackle through your front wheel, and with looped ends so the shackle can pass through.";

export const CABLE_SECTIONS: GapSection[] = [
  {
    h2: "When is a bike cable lock enough?",
    paragraphs: [
      "A cable is enough when it isn't doing the main job. The two places we'd use one are holding a quick-release wheel or saddle to a D-lock, and a very short stop where you can see the bike the whole time, like grabbing a coffee at a counter by the window.",
      "Honestly, it isn't enough for a bike left at a station, a town-centre rack or overnight anywhere. Every cable can be cut with hand tools, and that's why none of the thirteen locks we've reviewed is a cable-only lock.",
    ],
  },
  {
    h2: "What length and thickness of cable lock is best for low-risk stops?",
    paragraphs: [
      "Length first, because it decides what you can loop. As a rough guide, a cable of about 120 cm reaches from a D-lock through your front wheel. That's the job the 4 ft cable in the [Kryptonite Evolution Mini-7](/reviews/kryptonite-evolution-mini-7) box is made for. If you want to loop both wheels and the frame round a stand, you'll want something longer, and it'll be heavier and bulkier to carry.",
      "Thickness helps, but less than you'd hope. A thicker cable takes more effort to cut, but it's still a cable. So we wouldn't pay extra for a very thick one and then use it as your only lock. If the stop is risky enough that thickness feels important, it's a D-lock stop.",
    ],
  },
  {
    h2: "What features should you look for in a cable lock?",
    paragraphs: [
      "Looped ends, if it's going with a D-lock. The shackle passes through both loops, so the cable holds the wheel and the D-lock holds everything.",
      "A grade, if there is one. Most cable locks aren't graded by Sold Secure at all, and the ones that are tend to sit in the lower grades. Here's the thing: if a D-lock comes with a cable in the box, the grade on the box belongs to the D-lock and the cable isn't covered by it.",
      "After that, it's comfort. A coated cable is kinder to your paint, a mount or a coil that clips on means you'll actually carry it, and a key lock or a combination is down to whether you'd rather lose a key or forget a number.",
    ],
  },
  {
    h2: "Cable vs chain vs D-lock: how does the security compare?",
    paragraphs: [
      "A cable is the easiest of the three to cut. A D-lock is a rigid steel shackle that's easy to carry and closes neatly round a Sheffield stand. A chain gives you the most reach, but the ones we cover weigh 4.9kg and 6.92kg. [Bike lock types explained](/guide/bike-lock-types) puts all four types side by side, and [D-lock vs chain](/vs/d-lock-vs-chain) goes deeper on the two main locks.",
      "For the grade, go by Sold Secure rather than the shape. Gold and Diamond are the grades UK insurers usually name, and you'll find those on D-locks, chains and folding locks rather than cables.",
    ],
  },
  {
    h2: "A D-lock that comes with a cable",
    paragraphs: [
      "If you want both in one box, two of the locks we've reviewed include a cable. The Evolution Mini-7 is Sold Secure Gold at 1.61kg, and the [OnGuard Pitbull DT 8005](/reviews/onguard-pitbull-dt-8005) is Diamond at 1.6kg. Both have a frame mount.",
    ],
  },
];

export const CABLE_PICK_ASINS = ["B074K6KSY5", "B07DXW7YJJ"] as const;

export const CABLE_FAQS: GapFaq[] = [
  {
    q: "How do I choose the right bike cable lock for my needs?",
    a: "Decide what it's for first. To hold a wheel alongside a D-lock, pick one with looped ends that's long enough to reach through the wheel, around 120 cm. For a short stop in sight of the bike, a coiled cable you'll actually carry is fine. For anything longer, use a graded D-lock or chain instead.",
  },
  {
    q: "Are there places where a cable lock makes more sense than a chain or D-lock?",
    a: "Only low-risk ones: a quick stop in sight of the bike, or holding a wheel and saddle while a D-lock does the main work. A cable is also useful for tethering a helmet or panniers.",
  },
  {
    q: "Is the cable that comes with a D-lock Sold Secure rated?",
    a: "Not usually. The grade belongs to the D-lock. The cables in the Evolution Mini-7 and Pitbull DT 8005 boxes aren't covered by their grades.",
  },
];

/* ---------- 3. Ground anchors and home storage ---------- */

export const ANCHOR_PATH = "/guide/ground-anchors-flats-car-parks";
export const ANCHOR_TITLE = "Bike ground anchors for flats, car parks and indoor storage";
export const ANCHOR_H1 = "Bike ground anchors and locks for flats, car parks and indoor storage";
export const ANCHOR_META =
  "How to secure a bike in a block-of-flats car park, shared store or flat without a garage: what to look for in a ground anchor and which chain to pair it with.";
export const ANCHOR_DIRECT =
  "Short answer: if your bike lives in a block-of-flats car park or a shared bike store, we'd fit a ground anchor into solid concrete and run a heavy chain through the frame and the anchor. The Kryptonite New York 1410 (100 cm, 4.9kg) is Sold Secure Diamond for ordinary bikes. Look for an anchor with its own Sold Secure approval, and get the building's permission before you drill.";

export const ANCHOR_SECTIONS: GapSection[] = [
  {
    h2: "Why a ground anchor matters in a shared car park",
    paragraphs: [
      "A lock is only as strong as what it's attached to. In plenty of block-of-flats car parks and shared stores, the only things to lock to are a drainpipe, a thin railing or a wobbly rack, and those can be cut or unbolted faster than a good lock.",
      "A ground anchor gives you a fixed point you control. Bolted into concrete with fixings that can't be undone once fitted, it turns a parking space into somewhere you can lock to properly.",
    ],
  },
  {
    h2: "What to look for in a bike ground anchor",
    paragraphs: [
      "A grade. Some anchors have their own Sold Secure approval, and you can check one on [Sold Secure's approved product search](https://soldsecure.com/approved-product-search). We'd buy one that does, so the anchor isn't the weak link in a Diamond setup.",
      "Fixings that can't be removed. Look for anchors that come with security bolts or are designed to be set in resin, so nobody can simply unscrew them.",
      "Solid concrete underneath. An anchor in paving slabs or thin tarmac can be levered out. If you're not sure what the floor is, ask the building manager before you buy.",
      "A loop that fits your chain. Check the opening is big enough for the chain you'll run through it. We don't review anchors ourselves yet, so read the maker's fitting instructions and the grade before you choose one.",
    ],
  },
  {
    h2: "Which chain to use with a ground anchor",
    paragraphs: [
      "This is where heavy chains make sense, because you don't carry them anywhere. The [New York Fahgettaboudit 1410](/reviews/kryptonite-new-york-fahgettaboudit-1410) is 100 cm of 14 mm chain at 4.9kg. The [1415](/reviews/kryptonite-new-york-fahgettaboudit-1415) is 150 cm at 6.92kg, which is the one if you're locking two bikes or the anchor's a stretch away. Sold Secure lists both as Diamond for ordinary bikes and Gold for e-bikes.",
      "Keep the chain off the floor if you can. A chain lying on concrete is easier to brace against for bolt croppers, so we'd pull it snug through the frame and anchor rather than leaving slack on the ground.",
      "If the anchor sits close to where the bike parks, a long-shackle D-lock can work too. The [OnGuard Pitbull LS 8002](/reviews/onguard-pitbull-ls-8002) has a 115 × 292 mm locking area.",
    ],
  },
  {
    h2: "If you rent or can't drill",
    paragraphs: [
      "You'll need the freeholder's or managing agent's permission to fix anything into a shared car park, and a landlord's say-so in a rented flat. It's worth asking, though. Some blocks already have anchors or secure stores you can use.",
      "If you can't fit one, lock the frame to the most solid fixed thing you've got, and lock the frame to a wheel as well so the bike can't simply be wheeled off.",
    ],
  },
  {
    h2: "Locks for indoor storage in a flat without a garage",
    paragraphs: [
      "If the bike lives inside your flat, you mainly want it hard to wheel away from a shared hallway or communal store. A chain round the frame and a fixed point does that best. If the bike's inside your own front door, a D-lock through the frame and rear wheel is plenty, and it's the same lock you'll carry anyway.",
      "For the lightest locks to keep in a small hallway, see [compact bike locks for flats](/best/compact-bike-locks-small-flats). For whether your insurer needs a particular grade at home, see [best bike lock for insurance](/for/insurance).",
    ],
  },
];

export const ANCHOR_PICK_ASINS = ["B073W8N26F", "B08LXM56RD"] as const;

export const ANCHOR_FAQS: GapFaq[] = [
  {
    q: "What's the best way to lock a bike in a block of flats car park?",
    a: "A ground anchor fixed into solid concrete, with a heavy chain such as the New York 1410 running through the frame and anchor. Get the building's permission first, and pick an anchor with its own Sold Secure approval.",
  },
  {
    q: "Can I fit a ground anchor in a rented flat or shared car park?",
    a: "Only with permission from the landlord, freeholder or managing agent. Ask, because some blocks will agree or already have secure stores.",
  },
  {
    q: "Do I need a Diamond chain at home?",
    a: "If your insurer names Diamond for home storage, yes. The New York 1410 and 1415 are Diamond for ordinary bikes and Gold for e-bikes. Check what your policy says.",
  },
];
