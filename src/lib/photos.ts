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

export const photoAlt = {
  cover:
    "A bicycle locked to a bike stand on a wet UK street at night. Scene photograph for context.",
  pick:
    "A compact unbranded D-lock closed around a bicycle frame and a stand at dusk. Scene photograph for context.",
  commute: "Commuter bicycles parked at a UK railway station in blue hour. Scene photograph for context.",
  insurance:
    "A D-lock, keys, and a folded letter on a kitchen table beside a high-visibility jacket. Scene still life for context.",
  vs: "An unbranded D-lock and a sleeved chain lock on a steel workbench. Scene still life for context.",
  fit: "A lock closing around a galvanised stand and a frame tube in the rain. Scene photograph for context.",
  chain: "A thick unbranded chain lock coiled on wet tarmac. Scene photograph for context.",
  bannerTight: "A crowded night bike rack in the rain. Scene photograph for context.",
  bannerCommute: "A bicycle at a UK station in blue hour. Scene photograph for context.",
  bannerLong: "A long D-lock closed around a lamp post on a wet street. Scene photograph for context.",
  bannerHouse: "A heavy chain lock on a doorstep beside a bicycle. Scene photograph for context.",
  bannerThick: "A thick D-lock on a bicycle frame in a wet alley. Scene photograph for context.",
} as const;

export const EDITORIAL_CREDIT =
  "Scene photo for context.";

export function typePhoto(type?: string): { src: string; alt: string } {
  const kind = (type ?? "").toLowerCase();
  if (kind.includes("chain")) {
    return { src: photos.chain, alt: photoAlt.chain };
  }
  if (kind.includes("fold")) {
    return { src: photos.fit, alt: photoAlt.fit };
  }
  return { src: photos.pick, alt: photoAlt.pick };
}

export function reviewBanner(slug: string): { src: string; alt: string } {
  switch (slug) {
    case "litelok-x1":
      return { src: photos.cover, alt: photoAlt.cover };
    case "hiplok-d1000":
      return { src: photos.bannerTight, alt: photoAlt.bannerTight };
    case "kryptonite-evolution-mini-7":
      return { src: photos.bannerCommute, alt: photoAlt.bannerCommute };
    case "abus-granit-xplus-540":
      return { src: photos.bannerLong, alt: photoAlt.bannerLong };
    case "kryptonite-new-york-fahgettaboudit-mini":
      return { src: photos.bannerThick, alt: photoAlt.bannerThick };
    case "kryptonite-new-york-fahgettaboudit-1410":
      return { src: photos.bannerHouse, alt: photoAlt.bannerHouse };
    case "hiplok-dx1000":
      return { src: photos.bannerLong, alt: photoAlt.bannerLong };
    case "onguard-pitbull-std-8003":
      return { src: photos.bannerCommute, alt: photoAlt.bannerCommute };
    case "onguard-pitbull-dt-8005":
      return { src: photos.pick, alt: photoAlt.pick };
    case "onguard-pitbull-ls-8002":
      return { src: photos.bannerLong, alt: photoAlt.bannerLong };
    case "abus-bordo-granit-xplus-6500":
      return { src: photos.fit, alt: photoAlt.fit };
    default:
      return typePhoto();
  }
}
