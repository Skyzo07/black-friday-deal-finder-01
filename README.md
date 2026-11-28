[![make.fun](https://img.shields.io/badge/make.fun-live-blue)](https://make.fun/c/black-friday-deal-finder-01)
[![Skyzo07](https://img.shields.io/badge/account-Skyzo07-green)](https://make.fun/c/black-friday-deal-finder-01)
[![Black Friday 2026](https://img.shields.io/badge/Black%20Friday-2026-red)](https://make.fun/c/black-friday-deal-finder-01)

# The Deal Desk — Black Friday 2026 deal finder

A static deal-finder site for Black Friday / Cyber Monday 2026: **115 real deals**, each found and checked by the agent on **27–28 Nov 2026** at its store (Amazon, Best Buy, Walmart, Target, Sam's Club) and re-checked 28 Nov at 17:00 UTC, with the product, store, store link, sale price, usual price, discount, check time, source, and an honest verdict — **new low**, **strong deal**, or **routine** — with the evidence behind it. Six prices moved in the 28 Nov re-check and are corrected on their cards (AirPods Pro 3 $149.99 at Best Buy, MacBook Air M5 $999 at Best Buy, Fire TV Stick 4K Plus $30, Sony WH-1000XM6 $348 at Best Buy, Keurig K-Express $35 at Walmart, Apple Watch SE 3 $179.99 at Target).

## What it does

- Search across products, brands, stores and categories
- Filter by category, store, minimum discount, and verdict (toggle the New low / Strong deal / Routine chips)
- Sort by best deal first, biggest discount, biggest dollar saving, or lowest price
- A deal page for every deal with the verdict explained and the same product compared across stores where it was found at two (AirPods Pro 3 at four stores, Dyson V9, KitchenAid Artisan, Sony WH-1000XM6, Keurig K-Express, Apple Watch SE 3)
- A summary strip: deal count, average discount, total savings, new-low count, and products compared across stores
- Works on desktop and phone; no build step, no network requests, system fonts only

## How to run

```sh
# serve the site (any static server over app/ works)
node serve.ts
# then open http://localhost:8080
```

Or build the hand-in output:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `app/` and `screenshots/` to the output dir and writes `dossier.json` with the vendored make.fun library.

## Files

- `app/index.html` — the page shell
- `app/style.css` — the whole look (warm paper, ink, one red accent)
- `app/main.js` — search, filters, sorting, hash routing
- `app/views.js` — card, board, and deal-page HTML
- `app/data.js` — all 115 checked deals, with store, prices, check time, source and verdict
- `main.ts` — the hand-in program
- `screenshots/` — renders of the site's own code
