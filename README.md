[![make.fun](https://img.shields.io/badge/make.fun-live-blue)](https://make.fun/c/black-friday-deal-finder-01)
[![Skyzo07](https://img.shields.io/badge/account-Skyzo07-green)](https://make.fun/c/black-friday-deal-finder-01)
[![Black Friday 2026](https://img.shields.io/badge/Black%20Friday-2026-red)](https://make.fun/c/black-friday-deal-finder-01)

# The Deal Desk — Black Friday 2026 deal finder

A static deal-finder site for Black Friday / Cyber Monday 2026: **282 real deals**, each found and checked by the agent on **27–28 Nov 2026** at its store (Amazon, Best Buy, Walmart, Target, Sam's Club, Dell, Costco) and re-checked 28 Nov in the evening and again late evening, with the product, store, store link, sale price, usual price, discount, check time, source, and an honest verdict — **new low**, **strong deal**, or **routine** — with the evidence behind it. The evening pass added 68 deals and corrected two prices (M6 MacBook Pro 14-inch $1,749 at Amazon, Watch SE 3 Target row's Amazon link $179); the late pass added 55 more deals and corrected the MacBook Neo 256GB to $649.99 new (the $599.99 listing was refurbished).

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
- `app/data.js` — the first 80 checked deals, loaded with the first paint, with store, prices, check time, source and verdict
- `app/data2.js` — the remaining 202 checked deals, loaded by `import()` just after the first paint, so the first load stays small while the board shows all 282 deals
- `main.ts` — the hand-in program
- `screenshots/` — renders of the site's own code
