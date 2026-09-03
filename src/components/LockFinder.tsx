"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GradeStamp } from "@/components/GradeStamp";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { displayName, productBySlug } from "@/lib/products";

type Grade = "gold" | "diamond" | "unsure";
type Place = "stand" | "fat" | "home";
type Carry = "mount" | "bag" | "home";

type Pick = {
  slug: string;
  why: string;
  note?: string;
};

function recommend(grade: Grade | null, place: Place | null, carry: Carry | null): Pick | null {
  if (!grade || !place || !carry) return null;

  if (place === "home" || carry === "home") {
    return {
      slug: "kryptonite-new-york-fahgettaboudit-1410",
      why: "A 100 cm Gold chain for extra length at home. Use it at home. Take a D-lock on the bike for the commute.",
      note: "Not a commute lock. Pair it with the Evolution Mini-7 or the X1 for the ride.",
    };
  }

  if (place === "fat") {
    return {
      slug: "abus-granit-xplus-540",
      why: "300 mm shackle. This is the lock that closes around posts a compact D-lock cannot.",
      note:
        grade === "diamond"
          ? "Diamond for ordinary bikes, Gold for e-bikes. If your e-bike policy wants e-bike Diamond, take the X1 instead and measure the stand."
          : "If the 540 still will not close, you need a chain at home, not a thicker compact lock.",
    };
  }

  if (grade === "gold") {
    return {
      slug: "kryptonite-evolution-mini-7",
      why: "Sold Secure Gold, 1.61 kg, a frame mount, and a cable in the box. The cable is not Gold.",
      note: "If the bike is high-value and you will carry 1.7 kg, step up to the X1.",
    };
  }

  if (carry === "bag") {
    return {
      slug: "litelok-x1",
      why: "Diamond for bikes and e-bikes at 1.7 kg, with a locking area that works for an armoured D-lock.",
      note: "The D1000 is only the pick if you have already measured 92 × 155 mm.",
    };
  }

  return {
    slug: "litelok-x1",
    why: "Diamond you can still commute with. No frame mount in this listing — budget for a bag or a separate mount.",
    note: "If Gold already meets the policy, the Mini-7 is the lock most people will actually carry.",
  };
}

function Choice<T extends string>({
  value,
  current,
  onPick,
  children,
}: {
  value: T;
  current: T | null;
  onPick: (v: T) => void;
  children: string;
}) {
  return (
    <button type="button" className="choice" data-on={current === value} onClick={() => onPick(value)}>
      {children}
    </button>
  );
}

export function LockFinder({ id = "finder" }: { id?: string }) {
  const [grade, setGrade] = useState<Grade | null>(null);
  const [place, setPlace] = useState<Place | null>(null);
  const [carry, setCarry] = useState<Carry | null>(null);
  const pick = useMemo(() => recommend(grade, place, carry), [grade, place, carry]);
  const product = pick ? productBySlug(pick.slug) : undefined;

  return (
    <section className="finder" id={id} aria-labelledby={`${id}-title`}>
      <p className="kicker">Quick pick</p>
      <h2 id={`${id}-title`}>Find a lock</h2>
      <p className="meta">
        Answer three questions and we will point you to one of the locks we have reviewed.
      </p>
      <div className="finder-steps">
        <div>
          <p className="finder-q">1. What grade does your insurance ask for?</p>
          <div className="choice-row">
            <Choice value="gold" current={grade} onPick={setGrade}>
              Gold (most home policies)
            </Choice>
            <Choice value="diamond" current={grade} onPick={setGrade}>
              Diamond (higher grade)
            </Choice>
            <Choice value="unsure" current={grade} onPick={setGrade}>
              Not sure
            </Choice>
          </div>
        </div>
        <div>
          <p className="finder-q">2. Where will you lock the bike?</p>
          <div className="choice-row">
            <Choice value="stand" current={place} onPick={setPlace}>
              A normal bike stand
            </Choice>
            <Choice value="fat" current={place} onPick={setPlace}>
              A fat post or lamp-post
            </Choice>
            <Choice value="home" current={place} onPick={setPlace}>
              At home or in the garden
            </Choice>
          </div>
        </div>
        <div>
          <p className="finder-q">3. Will you take the lock with you every day?</p>
          <div className="choice-row">
            <Choice value="mount" current={carry} onPick={setCarry}>
              Yes, if it clips to the bike
            </Choice>
            <Choice value="bag" current={carry} onPick={setCarry}>
              Yes, in a bag
            </Choice>
            <Choice value="home" current={carry} onPick={setCarry}>
              No — it can stay at home
            </Choice>
          </div>
        </div>
      </div>
      {product && pick ? (
        <div className="finder-result">
          <p className="kicker">Your pick</p>
          <h3>{displayName(product)}</h3>
          <p className="stamp-row">
            <GradeStamp grade={product.specs?.soldSecurePedal} />
          </p>
          <p>{pick.why}</p>
          {pick.note ? <p className="meta">{pick.note}</p> : null}
          <p className="tile-actions">
            <Link href={`/reviews/${product.slug}`} className="primary-link">
              Read the review
            </Link>
            <SeeOnAmazon asin={product.asin} variant="text" />
          </p>
        </div>
      ) : (
        <p className="meta" style={{ marginTop: "1rem" }}>
          Answer all three and we will name one lock from the set we have reviewed.
        </p>
      )}
    </section>
  );
}
