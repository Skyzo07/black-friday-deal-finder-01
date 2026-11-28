// HTML for each page from the deal data. Values are escaped before they
// go into the page; missing `checked` / `also` fall back to CHECKED / [].

import { CHECKED } from "./data.js";

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const usd = (n) => `$${Number(n).toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`;
const percentOff = (d) => Math.round((1 - d.price / d.was) * 100);
const saved = (d) => d.was - d.price;
const day = (iso) =>
  new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: "America/New_York" }) + " ET";

const VERDICT_LABEL = {
  "new-low": "New low",
  strong: "Strong deal",
  routine: "Routine",
};

export function verdictBadge(d) {
  return `<span class="badge ${escape(d.verdict)}">${escape(VERDICT_LABEL[d.verdict] || d.verdict)}</span>`;
}

export function card(d) {
  return `<li class="card" id="card-${escape(d.id)}">
  <h2><a href="#/deal/${encodeURIComponent(d.id)}">${escape(d.title)}</a></h2>
  <div class="meta">${escape(d.store)} · ${escape(d.category)}</div>
  <div class="prices"><span class="price">${usd(d.price)}</span><span class="was">${usd(d.was)}</span><span class="off">${percentOff(d)}% off</span></div>
  ${d.drop ? `<div class="drop">↓ dropped today — was ${usd(d.drop)} this morning</div>` : ""}
  <div>${verdictBadge(d)} <span class="meta">save ${usd(saved(d))}</span></div>
  <p class="evidence">${escape(d.evidence)}</p>
  <div class="spacer"></div>
  <div class="checked">Checked ${day(d.checked || CHECKED)} · ${escape(d.source)}</div>
  <a class="store-link" href="${escape(d.url)}" rel="noopener">Shop at ${escape(d.store)} ↗</a>
  <a class="detail-link" href="#/deal/${encodeURIComponent(d.id)}">Why this verdict →</a>
</li>`;
}

export function statsBar(deals) {
  const totalSaved = deals.reduce((s, d) => s + saved(d), 0);
  const avgOff = Math.round(deals.reduce((s, d) => s + percentOff(d), 0) / deals.length);
  const newLows = deals.filter((d) => d.verdict === "new-low").length;
  const byTitle = new Map();
  for (const d of deals) {
    if (!byTitle.has(d.title)) byTitle.set(d.title, new Set());
    byTitle.get(d.title).add(d.store);
    for (const a of d.also || []) byTitle.get(d.title).add(a.store);
  }
  let crossStore = 0;
  for (const [, s] of byTitle) if (s.size >= 2) crossStore++;
  return `<section class="stats" aria-label="Board summary">
  <div class="stat"><b>${deals.length}</b><span>verified deals</span></div>
  <div class="stat"><b>${avgOff}%</b><span>average discount</span></div>
  <div class="stat"><b>${usd(totalSaved)}</b><span>total savings if you bought one of each</span></div>
  <div class="stat"><b>${newLows}</b><span>new lows this season</span></div>
  <div class="stat"><b>${crossStore}</b><span>products compared across stores</span></div>
</section>`;
}

export function toolbar(categories, stores, state) {
  const opt = (v, label, current) => `<option value="${escape(v)}"${v === current ? " selected" : ""}>${escape(label)}</option>`;
  return `<section class="toolbar">
  <div class="toolbar-row">
    <input class="search" id="q" type="search" placeholder="Search deals, brands, stores…" value="${escape(state.q)}" aria-label="Search deals">
    <select id="category" aria-label="Filter by category">
      ${opt("", "All categories", state.category)}
      ${categories.map((c) => opt(c, c, state.category)).join("")}
    </select>
    <select id="store" aria-label="Filter by store">
      ${opt("", "All stores", state.store)}
      ${stores.map((s) => opt(s, s, state.store)).join("")}
    </select>
    <select id="minoff" aria-label="Filter by discount">
      ${opt("", "Any discount", state.minOff)}
      ${opt("20", "20% off or more", state.minOff)}
      ${opt("30", "30% off or more", state.minOff)}
      ${opt("40", "40% off or more", state.minOff)}
      ${opt("50", "50% off or more", state.minOff)}
    </select>
    <select id="sort" aria-label="Sort deals">
      ${opt("best", "Sort: best deal first", state.sort)}
      ${opt("discount", "Sort: biggest discount", state.sort)}
      ${opt("saving", "Sort: biggest saving ($)", state.sort)}
      ${opt("price", "Sort: lowest price", state.sort)}
    </select>
  </div>
  <div class="verdict-toggles" role="group" aria-label="Filter by verdict">
    ${["new-low", "strong", "routine"].map((v) => `<button type="button" class="toggle" data-verdict="${v}" aria-pressed="${state.verdicts.has(v)}">${escape(VERDICT_LABEL[v])}</button>`).join("")}
  </div>
  <p class="result-line" id="result-line"></p>
</section>`;
}

export function listPage(deals, categories, stores, state, shown) {
  const rows = shown.length === 0
    ? `<div class="empty"><p><strong>No deal matches.</strong></p><p>Try a different search word, or clear a filter.</p></div>`
    : `<ul class="deals">${shown.map(card).join("")}</ul>`;
  return `${statsBar(deals)}${toolbar(categories, stores, state)}${rows}`;
}

export function dealPage(d, all) {
  const also = d.also || [];
  const compareRows = [{ store: d.store, price: d.price, url: d.url, here: true }, ...also.map((a) => ({ ...a, here: false }))]
    .sort((a, b) => a.price - b.price)
    .map((r, i) => `<tr${i === 0 && also.length ? ' class="best"' : ""}><td>${escape(r.store)}${r.here ? " (this deal)" : ""}</td><td>${usd(r.price)}</td><td><a href="${escape(r.url)}" rel="noopener">Open at ${escape(r.store)} ↗</a></td></tr>`)
    .join("");
  const compare = also.length
    ? `<h2>Same product, other stores</h2>
<table class="compare"><thead><tr><th>Store</th><th>Price</th><th>Link</th></tr></thead><tbody>${compareRows}</tbody></table>`
    : `<p class="source-note">We found this product at one store in this sale — check the store's site for the exact product name before you buy.</p>`;
  const siblings = all.filter((x) => x.category === d.category && x.id !== d.id).slice(0, 4);
  const more = siblings.length
    ? `<h2>More ${escape(d.category)} deals</h2><ul class="deals">${siblings.map(card).join("")}</ul>`
    : "";
  return `<a class="back" href="#/">&larr; All deals</a>
<article class="detail">
  <div>${verdictBadge(d)}</div>
  <h1>${escape(d.title)}</h1>
  <div class="prices"><span class="price">${usd(d.price)}</span><span class="was">${usd(d.was)}</span><span class="off">${percentOff(d)}% off</span></div>
  <dl>
    <dt>Store</dt><dd>${escape(d.store)}</dd>
    <dt>Category</dt><dd>${escape(d.category)}</dd>
    <dt>You save</dt><dd>${usd(saved(d))} (${percentOff(d)}% off the usual ${usd(d.was)})</dd>
    <dt>Verdict</dt><dd><strong>${escape(VERDICT_LABEL[d.verdict] || d.verdict)}</strong> — ${escape(d.evidence)}</dd>
    ${d.drop ? `<dt>Price move</dt><dd>Dropped again today — ${usd(d.drop)} in this morning's check, ${usd(d.price)} now.</dd>` : ""}
    <dt>Checked</dt><dd>${day(d.checked || CHECKED)}</dd>
    <dt>Read in</dt><dd>${escape(d.source)}</dd>
  </dl>
  ${compare}
  <a class="store-link" href="${escape(d.url)}" rel="noopener">Shop at ${escape(d.store)} ↗</a>
  <p class="source-note">Prices change fast on Black Friday. The store page is the final word — if the price has moved, the deal is gone.</p>
</article>
${more}`;
}

export function missingPage(count) {
  return `<h1>Not found</h1><p>There is no deal at this address. <a href="#/">See all ${count} deals</a>.</p>`;
}
