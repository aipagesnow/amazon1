export const photos = {
  cover: "/images/cover-night.webp",
  pick: "/images/pick-dlock.webp",
  commute: "/images/commute-station.webp",
  insurance: "/images/insurance-desk.webp",
  vs: "/images/vs-bench.webp",
  fit: "/images/fit-shackle.webp",
  chain: "/images/chain-wet.webp",
  bannerTight: "/images/banner-tight.webp",
  bannerCommute: "/images/banner-commute.webp",
  bannerLong: "/images/banner-long.webp",
  bannerHouse: "/images/banner-house.webp",
  bannerThick: "/images/banner-thick.webp",
} as const;

export type PhotoKey = keyof typeof photos;

export const photoAlt = {
  cover: "A bicycle locked to a bike stand on a wet UK street at night.",
  pick: "A compact unbranded D-lock closed around a bicycle frame and a stand at dusk.",
  commute: "Commuter bicycles parked at a UK railway station in blue hour.",
  insurance: "A D-lock, keys, and a folded letter on a kitchen table beside a high-visibility jacket.",
  vs: "An unbranded D-lock and a sleeved chain lock on a steel workbench.",
  fit: "A lock closing around a galvanised stand and a frame tube in the rain.",
  chain: "A thick unbranded chain lock coiled on wet tarmac.",
  bannerTight: "A crowded night bike rack in the rain.",
  bannerCommute: "A bicycle at a UK station in blue hour.",
  bannerLong: "A long D-lock closed around a lamp post on a wet street.",
  bannerHouse: "A heavy chain lock on a doorstep beside a bicycle.",
  bannerThick: "A thick D-lock on a bicycle frame in a wet alley.",
} as const;

function scene(key: PhotoKey): { src: string; alt: string } {
  return { src: photos[key], alt: photoAlt[key] };
}

export function typePhoto(type?: string): { src: string; alt: string } {
  const kind = (type ?? "").toLowerCase();
  if (kind.includes("chain")) {
    return scene("chain");
  }
  if (kind.includes("fold")) {
    return scene("fit");
  }
  return scene("pick");
}

/** Each of the 11 review slugs gets a distinct image from /public/images (cover reserved for home). */
export function reviewBanner(slug: string): { src: string; alt: string } {
  switch (slug) {
    case "litelok-x1":
      return scene("vs");
    case "hiplok-d1000":
      return scene("bannerTight");
    case "hiplok-dx1000":
      return scene("commute");
    case "kryptonite-evolution-mini-7":
      return scene("bannerCommute");
    case "abus-granit-xplus-540":
      return scene("bannerLong");
    case "kryptonite-new-york-fahgettaboudit-mini":
      return scene("bannerThick");
    case "kryptonite-new-york-fahgettaboudit-1410":
      return scene("bannerHouse");
    case "onguard-pitbull-std-8003":
      return scene("chain");
    case "onguard-pitbull-dt-8005":
      return scene("pick");
    case "onguard-pitbull-ls-8002":
      return scene("insurance");
    case "abus-bordo-granit-xplus-6500":
      return scene("fit");
    default:
      return typePhoto();
  }
}
