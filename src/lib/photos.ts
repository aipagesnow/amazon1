export const photos = {
  cover: "/images/cover-night.jpg",
  pick: "/images/pick-dlock.jpg",
  commute: "/images/commute-station.jpg",
  insurance: "/images/insurance-desk.jpg",
  vs: "/images/vs-bench.jpg",
  fit: "/images/fit-shackle.jpg",
  chain: "/images/chain-wet.jpg",
} as const;

export const photoAlt = {
  cover:
    "A bicycle locked to a Sheffield stand on a wet UK street at night. Editorial photograph; not a product reviewed here.",
  pick:
    "A compact unbranded D-lock closed around a bicycle frame and a stand at dusk. Editorial photograph; not a named model.",
  commute:
    "Commuter bicycles parked at a UK railway station in blue hour. Editorial photograph.",
  insurance:
    "A D-lock, keys, and a folded letter on a kitchen table beside a high-visibility jacket. Editorial still life.",
  vs: "An unbranded D-lock and a sleeved chain lock on a steel workbench. Editorial still life; not named models.",
  fit: "A lock shackle closing around a galvanised stand and a frame tube in the rain. Editorial photograph.",
  chain: "A thick unbranded chain lock coiled on wet tarmac. Editorial photograph; not a named model.",
} as const;

export const EDITORIAL_CREDIT =
  "Editorial photograph of a generic lock or street. We have not photographed the named products in this magazine.";

export function typePhoto(type?: string): { src: string; alt: string } {
  if ((type ?? "").toLowerCase().includes("chain")) {
    return { src: photos.chain, alt: photoAlt.chain };
  }
  return { src: photos.pick, alt: photoAlt.pick };
}
