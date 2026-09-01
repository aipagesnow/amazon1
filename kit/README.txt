Copy these into the Next.js app on first build. Do not rewrite the URL helper.

  kit/amazon.ts            → src/lib/amazon.ts
  kit/SeeOnAmazon.tsx      → src/components/SeeOnAmazon.tsx
  kit/DisclosureStrip.tsx  → src/components/DisclosureStrip.tsx

Fix the import in SeeOnAmazon to `@/lib/amazon` after the move.

Amazon URLs are built at request time from ASIN + AMAZON_ASSOCIATE_TAG.
Never put a real associate tag in git.
Button copy is "See on Amazon". rel="nofollow sponsored noopener".
