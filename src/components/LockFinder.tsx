"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { GradeStamp } from "@/components/GradeStamp";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { displayName, productBySlug } from "@/lib/products";

type Grade = "gold" | "diamond" | "unsure";
type Place = "stand" | "fat" | "home";
type Carry = "mount" | "bag" | "home";
type MarkName = Grade | Place | "mount" | "bag" | "stay";

type Pick = {
  slug: string;
  why: string;
  note?: string;
};

/**
 * Decision order (reviewed locks only):
 * 1. Home place → chain
 * 2. Fat post:
 *    - Stays home → chain
 *    - Diamond + mount → Pitbull LS (note 540)
 *    - Diamond + bag → DX1000 (needs room; larger than D1000’s 92 × 155)
 *    - Gold/unsure + mount → 540 (Mini-7 may not fit; note Pitbull LS)
 *    - Gold/unsure + bag → Bordo (flexible Gold reach / folding)
 * 3. Carry stays at home → chain
 * 4. Gold or unsure + normal stand → Mini-7 (Bordo is the folding-reach alternative)
 * 5. Diamond + wants a frame clip + normal stand → Pitbull STD (note DT for a cable)
 * 6. Diamond + bag → X1 (D1000 only if 92 × 155 mm; DX1000 if the stand is larger)
 */
function recommend(grade: Grade | null, place: Place | null, carry: Carry | null): Pick | null {
  if (!grade || !place || !carry) return null;

  if (place === "home") {
    return {
      slug: "kryptonite-new-york-fahgettaboudit-1410",
      why: "A 100 cm Gold chain for extra length at home. Use it at home. Take a D-lock on the bike for the commute.",
      note: "Not a commute lock. Pair it with the Evolution Mini-7, the Pitbull STD, or the X1 for the ride.",
    };
  }

  if (place === "fat") {
    if (carry === "home") {
      return {
        slug: "kryptonite-new-york-fahgettaboudit-1410",
        why: "A fat post at home is a job for 100 cm of Gold chain, not a commute D-lock. Leave it where the bike is stored.",
        note: "If you later take a lock on the bike, a Mini may not close on that post. The Pitbull LS or the ABUS 540 are the long shackles with a mount.",
      };
    }

    const needsDiamond = grade === "diamond";
    const wantsMount = carry === "mount";

    if (needsDiamond && wantsMount) {
      return {
        slug: "onguard-pitbull-ls-8002",
        why: "Long 115 × 292 mm Diamond D-lock with a frame mount. This is the lock that closes around posts a Mini cannot, without giving up a clip.",
        note: "The ABUS 540 is 300 mm and Diamond for ordinary bikes (Gold for e-bikes). If you wanted Hiplok’s larger anti-grinder lock instead, that is the DX1000 — 112 × 205 mm, no mount, 2.75 kg.",
      };
    }

    if (needsDiamond) {
      return {
        slug: "hiplok-dx1000",
        why: "Diamond for bikes and e-bikes, sold as anti-grinder, 112 × 205 mm — larger than the D1000’s 92 × 155 mm. 2.75 kg, no frame mount.",
        note: "If the post is a true lamp-post, measure 205 mm. The Pitbull LS (292 mm) and the ABUS 540 (300 mm) are the longer shackles, both with mounts.",
      };
    }

    if (wantsMount) {
      return {
        slug: "abus-granit-xplus-540",
        why: "A compact Mini may not close on a fat post. 300 mm shackle, frame bracket, Diamond for ordinary bikes — Gold for e-bikes.",
        note: "The OnGuard Pitbull LS is the other long Diamond D-lock with a mount (115 × 292 mm). The Bordo 6500 is Gold folding if you wanted 110 cm of flexible reach instead of a long shackle.",
      };
    }

    return {
      slug: "abus-bordo-granit-xplus-6500",
      why: "Sold Secure Gold, 110 cm of folding bars, 2.16 kg. Flexible reach around a fat post, and it still has an SH bracket if you later want it on the bike.",
      note: "The Mini-7 is lighter if a compact D-lock already closes. For a long D-shackle instead, the Pitbull LS or the ABUS 540.",
    };
  }

  if (carry === "home") {
    return {
      slug: "kryptonite-new-york-fahgettaboudit-1410",
      why: "If the lock can stay put, a 100 cm Gold chain gives you reach around a home stand or ground anchor.",
      note: "Still take a D-lock when you ride away. The Mini-7 covers most Gold policies; the Pitbull STD or the X1 if you need Diamond on the bike.",
    };
  }

  // From here: place is a normal stand, and they will carry the lock daily.
  const wantsMount = carry === "mount";
  const needsDiamond = grade === "diamond";
  const goldEnough = grade === "gold" || grade === "unsure";

  if (goldEnough) {
    return {
      slug: "kryptonite-evolution-mini-7",
      why: wantsMount
        ? "Sold Secure Gold, 1.61 kg, a frame mount, and a cable in the box. The cable is not Gold."
        : "Sold Secure Gold at 1.61 kg — light enough for a bag, with a frame mount and cable in the box if you want them. The cable is not Gold.",
      note:
        grade === "unsure"
          ? "Most UK home policies still name Gold. If the wording later asks for Diamond, step up to the Pitbull STD (with a clip) or the X1. If you needed Gold with more reach than a Mini, that is the Bordo 6500."
          : "If a Mini already closes, this is the commute lock. If you need folding reach instead, look at the Bordo 6500. If the bike is high-value and you will carry 1.7 kg, step up to the X1.",
    };
  }

  // Diamond + daily carry on a normal stand
  if (needsDiamond && wantsMount) {
    return {
      slug: "onguard-pitbull-std-8003",
      why: "Sold Secure Diamond for ordinary bikes, 1.44 kg, 115 × 230 mm, and a frame mount in the box — useful when you need Diamond that clips on.",
      note: "Want a cable in the same box? That is the Pitbull DT 8005 — the cable is not Diamond. We do not have an e-bike grade listed for the Pitbulls; if the policy names powered Diamond, check Sold Secure and look at the X1.",
    };
  }

  // Diamond + bag (or any remaining Diamond path)
  return {
    slug: "litelok-x1",
    why: "Diamond for bikes and e-bikes at 1.7 kg, with a locking area that works for an armoured D-lock.",
    note: "No frame mount in this listing. The D1000 is only the pick if you have already measured 92 × 155 mm. If that hole is too small — e-bike, cargo, fatter stand — the DX1000 is 112 × 205 mm at 2.75 kg, still with no mount.",
  };
}

function ChoiceMark({ name }: { name: MarkName }) {
  const stroke = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
  };
  return (
    <svg className="choice-mark" viewBox="0 0 24 24" aria-hidden="true">
      {name === "gold" ? <path {...stroke} d="M12 3.2 19.6 6.6v6.3c0 4.3-3.3 7.1-7.6 8.7-4.3-1.6-7.6-4.4-7.6-8.7V6.6L12 3.2Z" /> : null}
      {name === "diamond" ? <path {...stroke} d="M12 3.6 20.4 12 12 20.4 3.6 12Z" /> : null}
      {name === "unsure" ? (
        <>
          <circle {...stroke} cx="12" cy="12" r="8.1" />
          <path {...stroke} d="M9.7 9.5c.1-1.4 1.1-2.4 2.4-2.4 1.3 0 2.3.9 2.3 2.2 0 1.3-.7 1.8-1.6 2.4-.6.4-.9.9-.9 1.8" />
          <circle cx="12" cy="17.15" r="0.85" fill="currentColor" />
        </>
      ) : null}
      {name === "stand" ? (
        <>
          <path {...stroke} d="M8 13.6V9.4a4 4 0 0 1 8 0v4.2" />
          <path {...stroke} d="M5.6 13.6h12.8v6.6H5.6z" />
        </>
      ) : null}
      {name === "fat" ? (
        <>
          <path {...stroke} d="M7.2 16V7.2a4.8 4.8 0 0 1 9.6 0V16" />
          <path {...stroke} d="M4.8 16h14.4v4.6H4.8z" />
        </>
      ) : null}
      {name === "home" ? (
        <>
          <path {...stroke} d="M4.4 11.6 12 5.1l7.6 6.5" />
          <path {...stroke} d="M6.6 10.4V19h10.8v-8.6" />
        </>
      ) : null}
      {name === "mount" ? (
        <>
          <path {...stroke} d="M7.2 6.4h6.2a4.4 4.4 0 0 1 0 11.2H7.2" />
          <path {...stroke} d="M7.2 6.4v11.2" />
          <path {...stroke} d="M4.4 9.2h4.2M4.4 14.8h4.2" />
        </>
      ) : null}
      {name === "bag" ? (
        <>
          <path {...stroke} d="M6 9.4h12v10.4H6z" />
          <path {...stroke} d="M9.2 9.4V7.6a2.8 2.8 0 0 1 5.6 0v1.8" />
        </>
      ) : null}
      {name === "stay" ? (
        <>
          <path {...stroke} d="M9 10.6V8.2a3 3 0 0 1 6 0v2.4" />
          <path {...stroke} d="M7 10.6h10v7.6H7z" />
          <path {...stroke} d="M4.4 20.4h15.2" />
        </>
      ) : null}
    </svg>
  );
}

function Choice<T extends string>({
  value,
  current,
  onPick,
  label,
  help,
  mark,
}: {
  value: T;
  current: T | null;
  onPick: (v: T) => void;
  label: string;
  help: string;
  mark: MarkName;
}) {
  const on = current === value;
  return (
    <button
      type="button"
      className="choice"
      data-on={on ? "true" : "false"}
      aria-pressed={on}
      onClick={() => onPick(value)}
    >
      <ChoiceMark name={mark} />
      <span className="choice-copy">
        <span className="choice-label">{label}</span>
        <span className="choice-help">{help}</span>
      </span>
    </button>
  );
}

function waitCopy(answered: number): { kicker: string; body: string } {
  if (answered === 0) {
    return {
      kicker: "Answer the three questions",
      body: "Grade, place, and carry — then we name one lock from the set we have reviewed.",
    };
  }
  if (answered === 1) {
    return {
      kicker: "Two questions left",
      body: "We name a lock once all three are answered.",
    };
  }
  return {
    kicker: "One question left",
    body: "Answer the last one and we will name a lock.",
  };
}

export function LockFinder({ id = "finder" }: { id?: string }) {
  const [grade, setGrade] = useState<Grade | null>(null);
  const [place, setPlace] = useState<Place | null>(null);
  const [carry, setCarry] = useState<Carry | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const pick = useMemo(() => recommend(grade, place, carry), [grade, place, carry]);
  const product = pick ? productBySlug(pick.slug) : undefined;
  const answered = Number(!!grade) + Number(!!place) + Number(!!carry);
  const complete = answered === 3;
  // Keep earlier steps open after the first pick so changing any answer feels live.
  const openStep = !grade ? 1 : !place ? 2 : !carry ? 3 : 0;
  const stepOpen = (n: 1 | 2 | 3) => complete || openStep === n;
  const wait = waitCopy(answered);
  const pickKey = complete && pick ? `${grade}-${place}-${carry}-${pick.slug}` : "waiting";

  useEffect(() => {
    if (!complete || !pick || !resultRef.current) return;
    resultRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [complete, pickKey, pick]);

  return (
    <section
      className="finder"
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <header className="finder-head">
        <p className="kicker">Lock finder</p>
        <h2 id={`${id}-title`}>Find a lock</h2>
        <p className="finder-promise">
          Three questions, then one lock from the set we have reviewed.
          {complete ? " Change any answer and the pick updates." : ""}
        </p>
        <div className="finder-progress" aria-hidden="true">
          <span data-on={grade ? "true" : "false"} />
          <span data-on={place ? "true" : "false"} />
          <span data-on={carry ? "true" : "false"} />
        </div>
      </header>

      <div className="finder-steps">
        <div className="finder-step" data-done={grade ? "true" : "false"} data-open={stepOpen(1) ? "true" : "false"}>
          <span className="finder-step-index" aria-hidden="true">
            1
          </span>
          <div className="finder-step-body">
            <p className="finder-q" id={`${id}-q1`}>
              What grade does your insurance ask for?
            </p>
            <div className="choice-row" role="group" aria-labelledby={`${id}-q1`}>
              <Choice value="gold" current={grade} onPick={setGrade} mark="gold" label="Gold" help="Most home policies" />
              <Choice value="diamond" current={grade} onPick={setGrade} mark="diamond" label="Diamond" help="Higher grade" />
              <Choice value="unsure" current={grade} onPick={setGrade} mark="unsure" label="Not sure" help="We’ll start from Gold" />
            </div>
          </div>
        </div>

        <div className="finder-step" data-done={place ? "true" : "false"} data-open={stepOpen(2) ? "true" : "false"}>
          <span className="finder-step-index" aria-hidden="true">
            2
          </span>
          <div className="finder-step-body">
            <p className="finder-q" id={`${id}-q2`}>
              Where will you lock the bike?
            </p>
            <div className="choice-row" role="group" aria-labelledby={`${id}-q2`}>
              <Choice value="stand" current={place} onPick={setPlace} mark="stand" label="Bike stand" help="A normal stand" />
              <Choice value="fat" current={place} onPick={setPlace} mark="fat" label="Fat post" help="Lamp-post or thick post" />
              <Choice value="home" current={place} onPick={setPlace} mark="home" label="At home" help="Garden or shed" />
            </div>
          </div>
        </div>

        <div className="finder-step" data-done={carry ? "true" : "false"} data-open={stepOpen(3) ? "true" : "false"}>
          <span className="finder-step-index" aria-hidden="true">
            3
          </span>
          <div className="finder-step-body">
            <p className="finder-q" id={`${id}-q3`}>
              Will you take the lock with you every day?
            </p>
            <div className="choice-row" role="group" aria-labelledby={`${id}-q3`}>
              <Choice value="mount" current={carry} onPick={setCarry} mark="mount" label="Frame clip" help="Yes — clips to the bike" />
              <Choice value="bag" current={carry} onPick={setCarry} mark="bag" label="In a bag" help="Yes — daily carry" />
              <Choice value="home" current={carry} onPick={setCarry} mark="stay" label="Stays home" help="No — it can stay put" />
            </div>
          </div>
        </div>
      </div>

      {product && pick ? (
        <div
          key={pickKey}
          ref={resultRef}
          className="finder-result"
          role="status"
          aria-live="polite"
        >
          <div className="finder-result-top">
            <p className="kicker">Your pick</p>
            <p className="stamp-row">
              <GradeStamp grade={product.specs?.soldSecurePedal} />
            </p>
          </div>
          <h3>{displayName(product).replace(/-/g, "‑")}</h3>
          <p className="finder-why">{pick.why}</p>
          {pick.note ? (
            <p className="finder-note">
              <span className="finder-note-label">Note</span> {pick.note}
            </p>
          ) : null}
          <p className="tile-actions">
            <Link href={`/reviews/${product.slug}`} className="primary-link">
              Read the review
            </Link>
            <SeeOnAmazon asin={product.asin} variant="text" />
          </p>
        </div>
      ) : (
        <div className="finder-wait" role="status" aria-live="polite">
          <p className="finder-wait-kicker">{wait.kicker}</p>
          <p>{wait.body}</p>
        </div>
      )}
    </section>
  );
}
