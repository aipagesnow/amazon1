import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { articleJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { productBySlug } from "@/lib/products";
import { pageUrl } from "@/lib/site";

type UseCase = {
  slug: string;
  title: string;
  description: string;
  notFor: string;
  body: string[];
  picks: string[];
};

const CASES: UseCase[] = [
  {
    slug: "commuting",
    title: "Best bike lock for commuting",
    description:
      "A commute lock is the one you will carry. Gold Mini with a mount, or Diamond if the bike is worth the weight.",
    notFor: "This is not a page about 5 kg chains, ground anchors, or leaving the bike in a shed.",
    body: [
      "If the lock stays in the hall, the bike is unlocked at the stand. Weight and a frame mount are not lifestyle extras. They decide whether the lock is on the bike.",
      "For most UK commuters whose policy still names Sold Secure Gold, the Evolution Mini-7 is the honest pick in this slice: 1.61 kg, bracket, cable in the box. Remember the cable is not Gold.",
      "If the bike is an e-bike you would hate to claim on, and you will carry 1.7 kg, take the Litelok X1 instead. Do not buy the D1000 for a commute until you have confirmed the 92 × 155 mm shackle closes on your rack.",
      "A 4.9 kg chain is not a commute plan. Keep length at home and a D-lock on the bike. That pairing is how careful riders actually lock up, not a 100 cm chain in a backpack.",
    ],
    picks: ["kryptonite-evolution-mini-7", "litelok-x1"],
  },
  {
    slug: "insurance",
    title: "Best bike lock for insurance",
    description:
      "Match Sold Secure Gold or Diamond to the policy, then check the insurer’s approved list. We are not your broker.",
    notFor: "We do not sell insurance and we do not keep a live list of approved models.",
    body: [
      "Read the wording you signed. Many UK cycle policies still say Sold Secure Gold. Some e-bike and high-value policies ask for Diamond, and some name the powered-cycle grade rather than the pedal grade.",
      "Then open the insurer’s approved-lock PDF. A lock can be Gold in Sold Secure’s database and still missing from one brand’s list. The grade is necessary; it is not always sufficient.",
      "In this slice: Evolution Mini-7 and the New York Mini and 1410 chain are Gold on our pedal record. Litelok X1 and Hiplok D1000 are Diamond for both pedal and powered. The ABUS 540 is pedal Diamond and powered Gold — the wrong way round if your e-bike policy wants powered Diamond.",
      "Grade is necessary; it is not always sufficient. If the PDF names models, match the model, not just the badge. We do not keep that list current, because insurers change it.",
    ],
    picks: ["litelok-x1", "kryptonite-evolution-mini-7", "hiplok-d1000"],
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
        data={articleJsonLd({
          title: item.title,
          description: item.description,
          path: `/for/${item.slug}`,
        })}
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
        <p>
          <strong>Not for:</strong> {item.notFor}
        </p>
        {item.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h2>From this slice</h2>
        <div className="cards">
          {products.map((p) => (
            <ProductCard key={p.asin} product={p} />
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
