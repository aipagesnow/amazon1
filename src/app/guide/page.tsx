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
    "How to choose a bike lock in the UK: Gold vs Diamond, insurance lists, U-lock vs chain, and a weight you will actually carry.",
  alternates: { canonical: pageUrl("/guide") },
  openGraph: {
    title: "How to choose a bike lock · Lock Desk",
    description:
      "Gold vs Diamond, insurance, fit, and which lock on this site suits which job.",
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
        lede="Start with your insurance policy. Then check the lock will fit your stand. Then pick a weight you will actually carry. Brand comes last."
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <p className="kicker">Start here</p>
        <ol className="start-here">
          <li>Check the lock grade your insurance asks for.</li>
          <li>Measure the stand plus your frame.</li>
          <li>Pick a weight you will take out of the house.</li>
        </ol>
        <p>
          <a href="#chooser" className="primary-link">
            Jump to which lock to pick
          </a>
        </p>
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <p>
          This guide still works if every Amazon link disappeared. Grades come from Sold Secure, a
          UK group that tests bike locks. Weights and sizes come from the specs on this site. We
          have not run lab tests.
        </p>

        <h2>What Gold and Diamond mean</h2>
        <p>
          Sold Secure tests bike locks and gives them a grade: Bronze, Silver, Gold, or Diamond.
          Gold is what a lot of UK home bike insurance still asks for. Diamond is the higher grade.
          Neither grade means a lock cannot be cut with an angle grinder.
        </p>
        <p>
          There is a separate test for e-bikes. A lock can be Diamond for an ordinary bike and only
          Gold for an e-bike. That split matters if your e-bike policy names the e-bike grade.
        </p>
        <p>
          Treat “20× more resistant” lines as marketing unless an independent grade is on the lock.
          Read <Link href="/for/insurance">best bike lock for insurance</Link> after this. We do
          not keep a live insurer list.
        </p>

        <h2>The cable is usually not graded</h2>
        <p>
          Plenty of Gold U-locks ship with a loop cable. On Kryptonite’s Mini-7 notes, that cable is
          not part of the Sold Secure approval. Use it for a quick-release wheel if you must. Do not
          treat it as a second Gold lock.
        </p>

        <h2>Will the lock close on your stand?</h2>
        <p>
          A compact lock that will not close around the stand does not protect the bike. Compare the
          hole in the lock with the post plus the frame tube. Longer U-bars (the ABUS 540 here is
          300 mm) close more easily and also give a thief more room for a tool. Tight compact locks
          (the D1000 is 92 × 155 mm) are awkward on fat tyres and some cargo frames.
        </p>

        <h2>Will you actually carry it?</h2>
        <p>
          The lock you leave at home does not protect the bike at the station. On this site the
          Evolution Mini-7 is 1.61 kg with a clip; the Litelok X1 is 1.7 kg; the D1000 is 1.9 kg
          with no clip listed; the New York Mini is 2.06 kg with no clip; the New York 1410 chain
          is 4.9 kg. If you already skip 1.6 kg, do not buy 2 kg because the name sounds tougher.
        </p>

        <h2>U-lock or chain</h2>
        <p>
          A U-lock (a D-lock) is for a tight stand on a commute. A chain is for extra length: home,
          a ground anchor, two bikes, or a post a compact lock cannot close around.{" "}
          <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link> is the longer comparison. Many
          riders use both and only carry the U-lock.
        </p>

        <h2>Which specs you can ignore</h2>
        <ul>
          <li>
            <strong>Ignore anti-grinder marketing</strong> if you park in sight for ten minutes and
            Gold already meets the policy. Carry the compact lock.
          </li>
          <li>
            <strong>Ignore “Mini”</strong> if your stand is a fat lamp-post. Measure, then look at
            the 540 or a chain.
          </li>
          <li>
            <strong>Ignore e-bike Diamond</strong> if you ride an ordinary bike and the policy only
            names Gold.
          </li>
          <li>
            <strong>Ignore a 4.9 kg chain</strong> as a commute lock. That is a home lock.
          </li>
        </ul>

        <h2>Common mistakes</h2>
        <ul>
          <li>Locking a wheel to the stand and leaving the frame open.</li>
          <li>Trusting a cable as if it were Gold.</li>
          <li>Buying Diamond, then leaving it at home because of the weight.</li>
          <li>Never checking the insurer’s approved-lock PDF.</li>
        </ul>

        <div className="chooser" id="chooser">
          <h2>Which lock on this site fits your situation</h2>
          <p>These picks are from the locks reviewed on this site. It is not a shop filter.</p>
          <div className="spec-scroll">
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
                <td>Weekday commute, Gold is enough, you want a clip and a cable</td>
                <td>
                  <Link href="/reviews/kryptonite-evolution-mini-7">Kryptonite Evolution Mini-7</Link>
                </td>
                <td>1.61 kg, Gold, clip and cable in the box. Cable is not graded.</td>
              </tr>
              <tr>
                <td>High-value bike, public stands, you will carry about 1.7 kg</td>
                <td>
                  <Link href="/reviews/litelok-x1">Litelok X1</Link>
                </td>
                <td>Diamond for ordinary bikes and e-bikes, a usable hole.</td>
              </tr>
              <tr>
                <td>Known theft hotspot, you have measured a small hole</td>
                <td>
                  <Link href="/reviews/hiplok-d1000">Hiplok D1000</Link>
                </td>
                <td>Diamond anti-grinder U-lock. Tight 92 × 155 mm hole.</td>
              </tr>
              <tr>
                <td>Compact lock will not close; you still want Diamond for an ordinary bike</td>
                <td>
                  <Link href="/reviews/abus-granit-xplus-540">ABUS Granit XPlus 540</Link>
                </td>
                <td>300 mm U-bar. E-bike grade is Gold on the spec we have.</td>
              </tr>
              <tr>
                <td>Home, garden, or a post a U-lock cannot reach</td>
                <td>
                  <Link href="/reviews/kryptonite-new-york-fahgettaboudit-1410">
                    New York 1410 chain
                  </Link>
                </td>
                <td>100 cm, 4.9 kg. Not a commute lock.</td>
              </tr>
            </tbody>
          </table>
          </div>
          <p>
            Full table: <Link href="/best">best bike locks UK</Link>. Comparison:{" "}
            <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs D1000</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
