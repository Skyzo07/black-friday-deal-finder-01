// The Deal Desk: search, filter, sort and detail routing over data.js.
// Runs from app/ — no network request. Routes: #/ the board, #/deal/<id>
// one deal with its verdict and cross-store comparison. __shotReady is
// false while a page renders, true once it is on screen, so a screenshot
// script knows when to capture.

import { deals, categories, stores } from "./data.js";
import { listPage, dealPage, missingPage, card } from "./views.js";

const app = document.getElementById("app");

const VERDICT_RANK = { "new-low": 0, strong: 1, routine: 2 };
const percentOff = (d) => 1 - d.price / d.was;

const state = {
  q: "",
  category: "",
  store: "",
  minOff: "",
  sort: "best",
  verdicts: new Set(["new-low", "strong", "routine"]),
};

function applyFilters() {
  const q = state.q.trim().toLowerCase();
  let shown = deals.filter((d) => {
    if (!state.verdicts.has(d.verdict)) return false;
    if (state.category && d.category !== state.category) return false;
    if (state.store && d.store !== state.store) return false;
    if (state.minOff && percentOff(d) * 100 < Number(state.minOff)) return false;
    if (q && !`${d.title} ${d.store} ${d.category} ${d.verdict}`.toLowerCase().includes(q)) return false;
    return true;
  });
  const by = {
    best: (a, b) => VERDICT_RANK[a.verdict] - VERDICT_RANK[b.verdict] || percentOff(b) - percentOff(a),
    discount: (a, b) => percentOff(b) - percentOff(a),
    saving: (a, b) => b.was - b.price - (a.was - a.price),
    price: (a, b) => a.price - b.price,
  }[state.sort];
  return shown.sort(by);
}

function renderList() {
  const shown = applyFilters();
  document.title = "The Deal Desk — Black Friday 2026 deal finder";
  app.innerHTML = listPage(deals, categories, stores, state, shown);
  const line = app.querySelector("#result-line");
  line.textContent = `Showing ${shown.length} of ${deals.length} deals · sorted: ${state.sort === "best" ? "best deal first" : state.sort} · all prices checked 27–28 Nov 2026.`;
  const q = app.querySelector("#q");
  q.addEventListener("input", () => { state.q = q.value; refreshGrid(); });
  for (const id of ["category", "store", "minoff", "sort"]) {
    app.querySelector(`#${id}`).addEventListener("change", (e) => {
      state[id === "minoff" ? "minOff" : id] = e.target.value;
      renderList();
    });
  }
  app.querySelectorAll(".toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.verdict;
      if (state.verdicts.has(v)) {
        if (state.verdicts.size > 1) state.verdicts.delete(v);
      } else {
        state.verdicts.add(v);
      }
      renderList();
    });
  });
}

function refreshGrid() {
  // Live search: re-render only the grid and the count.
  const shown = applyFilters();
  const old = app.querySelector(".deals, .empty");
  const fresh = document.createElement("div");
  fresh.innerHTML = shown.length === 0
    ? `<div class="empty"><p><strong>No deal matches.</strong></p><p>Try a different search word, or clear a filter.</p></div>`
    : `<ul class="deals">${shown.map(card).join("")}</ul>`;
  old.replaceWith(fresh.firstChild);
  app.querySelector("#result-line").textContent =
    `Showing ${shown.length} of ${deals.length} deals · sorted: ${state.sort === "best" ? "best deal first" : state.sort} · all prices checked 27–28 Nov 2026.`;
}

function render() {
  window.__shotReady = false;
  const match = location.hash.match(/^#\/deal\/([^/?]+)/);
  if (match) {
    const found = deals.find((d) => d.id === decodeURIComponent(match[1]));
    document.title = `${found ? found.title : "Not found"} | The Deal Desk`;
    app.innerHTML = found ? dealPage(found, deals) : missingPage(deals.length);
  } else {
    renderList();
  }
  window.scrollTo(0, 0);
  window.__shotReady = true;
}

window.addEventListener("hashchange", render);
render();
