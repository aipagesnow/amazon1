# Lock Desk

UK product-discovery magazine for bike locks (D-locks and chains) at [lockdesk.co.uk](https://lockdesk.co.uk). Not a shop. Amazon Associates via **See on Amazon**.

## Stack

Next.js App Router on Vercel. Domain on GoDaddy. Product facts in `data/products.json`.

## Local

```
copy .env.example .env.local
npm install
npm run dev
```

Set `AMAZON_ASSOCIATE_TAG` in `.env.local` (never commit a real tag). `.env.example` uses `your-tag-21`.

## Production

Vercel project env:

```
AMAZON_ASSOCIATE_TAG
```

Buyer of this site sets their own UK tag. We do not transfer an Associates account. Mothership is not part of the sale.

## Repo

https://github.com/aipagesnow/amazon1

Working copy: `Desktop\Sites\lock-desk` only. Do not make a second Desktop folder.
