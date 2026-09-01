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
    "How to choose a bike lock in the UK: Sold Secure Gold vs Diamond, insurance lists, D-lock vs chain, and a weight you will actually carry.",
  alternates: { canonical: pageUrl("/guide") },
  openGraph: {
    title: "How to choose a bike lock · Lock Desk",
    description:
      "Sold Secure Gold vs Diamond, insurance, fit, and which lock on this site suits which job.",
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
        lede="Start with your insurance policy, then check the lock will fit your rack, then pick a weight you will actually carry. Brand comes last."
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <p className="kicker">Start here</p>
        <ol className="start-here">
          <li>Check the Sold Secure grade your policy asks for.</li>
          <li>Measure the rack plus your frame.</li>
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
          This guide still works if every Amazon link disappeared. Grades come from Sold Secure.
          Weights and sizes come from the product records on this site. We have not run lab tests.
        </p>

        <h2>What Sold Secure Gold and Diamond mean</h2>
        <p>
          Sold Secure is a UK test house owned by the Master Locksmiths Association. Bicycle locks
          are graded Bronze, Silver, Gold, and Diamond. There is a separate powered-cycle programme
          (e-bikes, and historically motorcycles). A lock can be Diamond for pedal cycles and only
          Gold for powered cycles. That split matters if your e-bike policy names the powered grade.
        </p>
        <p>
          Gold is still what a lot of UK household cycle insurance asks for. Diamond is the higher
          pedal grade. Neither grade means angle-grinder proof. Diamond includes a tougher tool set
          than Gold. Treat manufacturer “20× more resistant” lines as marketing unless an
          independent grade is on the lock.
        </p>
        <p>
          Read <Link href="/for/insurance">best bike lock for insurance</Link> after this. We do
          not keep a live insurer list.
        </p>

        <h2>The cable is usually not Sold Secure graded</h2>
        <p>
          Plenty of Gold D-locks ship with a loop cable. On Kryptonite’s Mini-7 notes, that cable is
          not part of the Sold Secure approval. Use it for a quick-release wheel if you must. Do not
          treat it as a second Gold lock.
        </p>

        <h2>Will the lock close on your rack?</h2>
        <p>
          A Mini that will not close around the stand does not protect the bike. Compare locking
          area (the hole) with the post plus the frame tube. Longer shackles (the ABUS 540 here is
          300 mm) close more easily and also give a thief more room for a tool. Tight Minis (the
          D1000 is 92 × 155 mm) are awkward on fat tyres and some cargo frames.
        </p>

        <h2>Will you actually carry it?</h2>
        <p>
          The lock you leave at home does not protect the bike at the station. On this site the
          Evolution Mini-7 is 1.61 kg with a mount; the Litelok X1 is 1.7 kg; the D1000 is 1.9 kg
          with no mount listed; the New York Mini is 2.06 kg with no mount; the New York 1410 chain
          is 4.9 kg. If you already skip 1.6 kg, do not buy 2 kg because the name sounds tougher.
        </p>

        <h2>D-lock or chain</h2>
        <p>
          A D-lock is for a tight rack on a commute. A chain is for extra length: home, a ground
          anchor, two bikes, or a post a Mini cannot close around.{" "}
          <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link> is the longer comparison. Many
          riders use both and only carry the D-lock.
        </p>

        <h2>Which specs you can ignore</h2>
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
                <td>100 cm, 4.9 kg. Not a commute lock.</td>
              </tr>
            </tbody>
          </table>
          <p>
            Full table: <Link href="/best">best bike locks UK</Link>. Comparison:{" "}
            <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs D1000</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
