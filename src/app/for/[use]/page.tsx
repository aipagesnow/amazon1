import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { RichText } from "@/components/RichText";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { productBySlug } from "@/lib/products";
import { pageUrl } from "@/lib/site";

type Faq = { q: string; a: string };

type UseCase = {
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

const CASES: UseCase[] = [
  {
    slug: "commuting",
    title: "Best bike lock for commuting",
    description:
      "A commute lock is the one you will carry. Gold Mini with a mount, or Diamond if the bike is worth the weight.",
    h2: "Two we’d take on the train",
    notFor: "This is not a page about 5 kg chains, ground anchors, or leaving the bike in a shed.",
    body: [
      "If the lock stays in the hall, the bike is unlocked at the stand. Weight and a frame mount are not lifestyle extras. They decide whether the lock is on the bike.",
      "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the honest pick here: 1.61 kg, bracket, cable in the box. Remember the cable is not Gold.",
      "If the bike is an e-bike you would hate to claim on, and you will carry 1.7 kg, take the Litelok X1 instead. Do not buy the D1000 for a commute until you have confirmed the 92 × 155 mm shackle closes on your rack.",
      "A 4.9 kg chain is not a commute plan. Keep length at home and a D-lock on the bike. That pairing is how careful riders lock up. It is not a 100 cm chain in a backpack.",
    ],
    picks: ["kryptonite-evolution-mini-7", "litelok-x1"],
    faqs: [
      {
        q: "Can I commute with the 1410?",
        a: "Not twice a day. 4.9 kg stays by the door. Keep length at home and a D-lock on the bike.",
      },
      {
        q: "Gold or Diamond for the train?",
        a: "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the honest pick: 1.61 kg, bracket, cable in the box. The cable is not Gold. If the bike is an e-bike you would hate to claim on, and you will carry 1.7 kg, take the Litelok X1. We are not your broker.",
      },
    ],
  },
  {
    slug: "insurance",
    title: "Best bike lock for insurance",
    description:
      "Match Sold Secure Gold or Diamond to the policy, then check the insurer’s approved list. We are not your broker.",
    h2: "Three that can satisfy a policy",
    notFor: "We do not sell insurance and we do not keep a live list of approved models.",
    body: [],
    fold: {
      gold: "Policy names Gold → [Evolution Mini-7](/reviews/kryptonite-evolution-mini-7).",
      diamond:
        "Policy names Diamond → [Litelok X1](/reviews/litelok-x1), or [D1000](/reviews/hiplok-d1000) if 92 × 155 mm will close.",
    },
    policy: [
      "Read the wording you signed. Many UK cycle policies still say Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the powered-cycle grade rather than the pedal grade.",
      "Then open the insurer’s approved-lock PDF. A lock can be Gold in Sold Secure’s database and still missing from one brand’s list. The grade is necessary; it is not always sufficient. If the PDF names models, match the model, not just the badge. We do not keep that list current, because insurers change it.",
    ],
    records:
      "On our records: Evolution Mini-7, the New York Mini and the 1410 chain are Gold for pedal cycles. Litelok X1 and Hiplok D1000 are Diamond for both pedal and powered. The ABUS 540 is pedal Diamond and powered Gold — the wrong way round if your e-bike policy wants powered Diamond.",
    checklist: [
      "Read the wording you signed.",
      "Open the insurer’s approved-lock PDF.",
      "Match the model, not just the badge.",
    ],
    picks: ["litelok-x1", "kryptonite-evolution-mini-7", "hiplok-d1000"],
    faqs: [
      {
        q: "If it is Gold, am I covered?",
        a: "Only if your policy names Gold and the exact model is on that insurer’s list. The badge is not a claim.",
      },
      {
        q: "Pedal Diamond or powered Diamond?",
        a: "E-bike policies sometimes name the powered-cycle grade. On this site the X1 and D1000 are Diamond for both. The ABUS 540 is pedal Diamond and powered Gold.",
      },
    ],
  },
];

export function generateStaticParams() {
  return CASES.map((c) => ({ use: c.slug }));
}

function useOf(slug: string) {
  return CASES.find((c) => c.slug === slug);
}

type Props = { params: Promise<{ use: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { use } = await params;
  const item = useOf(use);
  if (!item) return {};
  const url = pageUrl(`/for/${item.slug}`);
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: url },
    openGraph: { title: `${item.title} · Lock Desk`, description: item.description, url },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { use } = await params;
  const item = useOf(use);
  if (!item) notFound();
  const products = item.picks.map((slug) => productBySlug(slug)!);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: item.title,
            description: item.description,
            path: `/for/${item.slug}`,
          }),
          faqJsonLd(item.faqs),
        ]}
      />
      <PageHero
        image={item.slug === "insurance" ? photos.insurance : photos.commute}
        alt={item.slug === "insurance" ? photoAlt.insurance : photoAlt.commute}
        kicker="Use case"
        title={item.title}
        lede={item.description}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        {item.fold ? (
          <div className="fold-block">
            <article>
              <p className="kicker">Policy Gold</p>
              <p>
                <RichText text={item.fold.gold} />
              </p>
            </article>
            <article>
              <p className="kicker">Diamond</p>
              <p>
                <RichText text={item.fold.diamond} />
              </p>
            </article>
          </div>
        ) : null}

        {item.checklist ? (
          <div className="chooser">
            <h3>Checklist</h3>
            <ul>
              {item.checklist.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <h2>{item.h2}</h2>
        <div className="cards">
          {products.map((p) => (
            <ProductCard key={p.asin} product={p} />
          ))}
        </div>

        <p>
          <strong>Not for:</strong> {item.notFor}
        </p>
        {item.policy?.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {item.records ? <p>{item.records}</p> : null}
        {item.body.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>Common questions</h2>
        <div className="faq-list">
          {item.faqs.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/guide">How to choose a bike lock</Link> · <Link href="/best">Best of</Link> ·{" "}
          <Link href="/method">Methodology</Link>
        </p>
      </article>
    </>
  );
}
