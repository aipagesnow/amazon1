import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { articleJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to choose a bike lock",
  description:
    "Sold Secure Gold vs Diamond, insurance lists, D-lock vs chain, and why a lock you will not carry is not a lock. UK English. Not a shop.",
  alternates: { canonical: pageUrl("/guide") },
  openGraph: {
    title: "How to choose a bike lock · Lock Desk",
    description: "Gold vs Diamond, insurance, fit, and a chooser for the locks on this site.",
    url: pageUrl("/guide"),
    images: [{ url: photos.fit, alt: photoAlt.fit }],
  },
};

export default function GuidePage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "How to choose a bike lock",
          description: String(metadata.description),
          path: "/guide",
        })}
      />
      <PageHero
        image={photos.fit}
        alt={photoAlt.fit}
        kicker="How to choose"
        title="How to choose a bike lock"
        lede="Start with the policy, then the rack, then the weight you will actually take out of the house. Brand comes last."
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <p className="kicker">Start here</p>
        <ol className="start-here">
          <li>Policy first.</li>
          <li>Then the rack.</li>
          <li>Then the weight you will take out of the house.</li>
        </ol>
        <p>
          <a href="#chooser" className="primary-link">
            Jump to the chooser
          </a>
        </p>
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <p>
          This page should still help if every Amazon link vanished. Grades from Sold Secure.
          Weights and sizes from the product records here. We have not run lab attacks.
        </p>

        <h2>Sold Secure is not a vibe</h2>
        <p>
          Sold Secure is a UK test house owned by the Master Locksmiths Association. Bicycle locks
          are graded Bronze, Silver, Gold, and Diamond. There is a separate powered-cycle programme
          (e-bikes, and historically motorcycles). A lock can be Diamond for pedal cycles and only
          Gold for powered cycles. That split matters if your e-bike policy names the powered grade.
        </p>
        <p>
          Gold is still what a lot of UK household cycle insurance asks for. Diamond is the higher
          pedal grade. Neither grade means “angle-grinder proof.” Diamond includes a tougher tool
          set than Gold. Treat manufacturer “20× more resistant” lines as marketing unless an
          independent grade is on the lock.
        </p>
        <p>
          Read <Link href="/for/insurance">best bike lock for insurance</Link> after this. We do
          not keep a live insurer list.
        </p>

        <h2>The cable is usually not the lock</h2>
        <p>
          Plenty of Gold D-locks ship with a loop cable. On Kryptonite’s Mini-7 notes, that cable is
          not part of the Sold Secure approval. Use it for a quick-release wheel if you must. Do not
          tell yourself you bought two Gold locks.
        </p>

        <h2>Fit is a security spec</h2>
        <p>
          A Mini that will not close around the stand is a paperweight. Compare locking area (the
          hole) with the post plus the frame tube. Longer shackles (the ABUS 540 here is
          300 mm) close more easily and also give a thief more room for a tool. Tight Minis (the
          D1000 is 92 × 155 mm) are awkward on fat tyres and some cargo frames.
        </p>

        <h2>Weight is a behaviour spec</h2>
        <p>
          The lock you leave in the hall does not protect the bike at the station. On this site the
          Evolution Mini-7 is 1.61 kg with a mount; the Litelok X1 is 1.7 kg; the D1000 is 1.9 kg
          with no mount listed; the New York Mini is 2.06 kg with no mount; the New York 1410 chain
          is 4.9 kg. If you already skip 1.6 kg, do not buy 2 kg because the name sounds tougher.
        </p>

        <h2>D-lock or chain</h2>
        <p>
          A D-lock is for a tight rack on a commute. A chain is for reach: home, a ground anchor,
          two bikes, a post a Mini cannot hug.{" "}
          <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link> is the long version. Many careful
          riders use both and only carry the D-lock.
        </p>

        <h2>Who should ignore which spec</h2>
        <ul>
          <li>
            <strong>Ignore anti-grinder marketing</strong> if you park in sight for ten minutes and
            Gold already meets the policy. Carry the Mini.
          </li>
          <li>
            <strong>Ignore “Mini”</strong> if your rack is a fat lamp-post. Measure, then look at
            the 540 or a chain.
          </li>
          <li>
            <strong>Ignore powered Diamond</strong> if you ride an unassisted bike and the policy
            only names pedal Gold.
          </li>
          <li>
            <strong>Ignore a 4.9 kg chain</strong> as a commute plan. That is a house lock.
          </li>
        </ul>

        <h2>Mistakes we keep seeing</h2>
        <ul>
          <li>Locking a wheel to the stand and leaving the frame open.</li>
          <li>Trusting a cable as if it were Gold.</li>
          <li>Buying Diamond, then leaving it at home because of the weight.</li>
          <li>Never checking the insurer’s approved-lock PDF.</li>
        </ul>

        <div className="chooser" id="chooser">
          <h2>Chooser — which of these is for you</h2>
          <p>From the locks on this site only. Not a shop filter. Not a price quiz.</p>
          <table className="spec">
            <thead>
              <tr>
                <th>Situation</th>
                <th>Pick</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Weekday commute, Gold is enough, you want a mount and a cable</td>
                <td>
                  <Link href="/reviews/kryptonite-evolution-mini-7">Kryptonite Evolution Mini-7</Link>
                </td>
                <td>1.61 kg, Gold, bracket and cable in the box. Cable is not rated.</td>
              </tr>
              <tr>
                <td>High-value bike, public racks, you will carry ~1.7 kg</td>
                <td>
                  <Link href="/reviews/litelok-x1">Litelok X1</Link>
                </td>
                <td>Pedal and powered Diamond, usable locking area.</td>
              </tr>
              <tr>
                <td>Known theft hotspot, you have measured a small shackle</td>
                <td>
                  <Link href="/reviews/hiplok-d1000">Hiplok D1000</Link>
                </td>
                <td>Diamond anti-grinder D-lock. Tight 92 × 155 mm hole.</td>
              </tr>
              <tr>
                <td>Mini will not close; you still want pedal Diamond</td>
                <td>
                  <Link href="/reviews/abus-granit-xplus-540">ABUS Granit XPlus 540</Link>
                </td>
                <td>300 mm shackle. Powered grade is Gold on our record.</td>
              </tr>
              <tr>
                <td>Home, garden, or a post a D-lock cannot reach</td>
                <td>
                  <Link href="/reviews/kryptonite-new-york-fahgettaboudit-1410">
                    New York 1410 chain
                  </Link>
                </td>
                <td>100 cm, 4.9 kg. Not a bag lock.</td>
              </tr>
            </tbody>
          </table>
          <p>
            Full table: <Link href="/best">best bike locks UK</Link>. Pair we see searched:{" "}
            <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs D1000</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
