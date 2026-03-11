const SEARCH_ITEMS = [
  {
    title: "Itinerary Overview",
    text: "Where you stay each night, day flow, and route pacing.",
    href: "./itinerary.html#day-flow"
  },
  {
    title: "Osaka Food Picks",
    text: "Takoyaki, okonomiyaki, kushikatsu, gyoza, and neon-night areas.",
    href: "./food.html#osaka-food"
  },
  {
    title: "Kyoto Food Picks",
    text: "Matcha sweets, soba, tofu, and slower food stops.",
    href: "./food.html#kyoto-food"
  },
  {
    title: "Hakone Food And Early Close Note",
    text: "Ryokan meals, station snacks, and why you buy backup food early.",
    href: "./food.html#hakone-food"
  },
  {
    title: "Fuji Visibility Rule",
    text: "Day 6 stays weather-led. Clear view first, strict order second.",
    href: "./itinerary.html#fuji-visibility"
  },
  {
    title: "Tokyo Finish",
    text: "Shibuya shopping, dinner, and skyline close.",
    href: "./itinerary.html#tokyo-finish"
  },
  {
    title: "Shin-Osaka To Odawara",
    text: "Main shinkansen booking day, luggage note, and timing.",
    href: "./toolkit.html#shinkansen"
  },
  {
    title: "Hakone Freepass",
    text: "When the area pass helps and how Odawara hands off into Hakone.",
    href: "./toolkit.html#hakone-passes"
  },
  {
    title: "IC Cards",
    text: "Low-friction local transit for Osaka, Kyoto, and Tokyo.",
    href: "./toolkit.html#ic-cards"
  },
  {
    title: "Packing And Weather",
    text: "All-year seasonal facts, city weather notes, and what layers to bring.",
    href: "./toolkit.html#weather-packing"
  },
  {
    title: "Station Shortcuts And Luggage",
    text: "Shibuya Hachiko side, major lockers, and what to book before transfer days.",
    href: "./toolkit.html#station-shortcuts"
  },
  {
    title: "Safety Quick Ref",
    text: "Top etiquette and safety reminders in one short skim block.",
    href: "./culture.html#quick-ref"
  },
  {
    title: "Onsen Etiquette",
    text: "Quiet bath basics, towel rule, and photo-free spaces.",
    href: "./culture.html#onsen-etiquette"
  },
  {
    title: "Temple And Train Etiquette",
    text: "Short practical do and do not notes for first-time visitors.",
    href: "./culture.html#etiquette"
  },
  {
    title: "Helpful Japanese Phrases",
    text: "Directions, prices, photos, and asking for help.",
    href: "./culture.html#phrases"
  },
  {
    title: "Photo Prompts",
    text: "Where to stand and when to shoot in Osaka, Kyoto, Hakone, Fuji, and Tokyo.",
    href: "./culture.html#photo-prompts"
  },
  {
    title: "Quick Snapshot",
    text: "Portable mobile or printable essentials page.",
    href: "./quick_snapshot.html"
  },
  {
    title: "Full Interactive Guide",
    text: "The full all-in-one page with cards, galleries, and deeper notes.",
    href: "./guide.html"
  }
];

function initReveal() {
  const revealElements = [...document.querySelectorAll(".reveal")];
  if (!revealElements.length || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? Math.min(scrollTop / scrollRange, 1) : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress);
}

function renderSearchResults(items, resultsElement) {
  resultsElement.innerHTML = items
    .map(
      (item) => `
        <a class="search-result" href="${item.href}">
          <strong>${item.title}</strong>
          <span>${item.text}</span>
        </a>
      `
    )
    .join("");
}

function initSearch() {
  const input = document.getElementById("site-search");
  const resultsElement = document.getElementById("site-search-results");
  if (!input || !resultsElement) {
    return;
  }

  renderSearchResults(SEARCH_ITEMS.slice(0, 6), resultsElement);

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      renderSearchResults(SEARCH_ITEMS.slice(0, 6), resultsElement);
      return;
    }

    const filtered = SEARCH_ITEMS.filter((item) => {
      const haystack = `${item.title} ${item.text}`.toLowerCase();
      return haystack.includes(query);
    }).slice(0, 8);

    if (!filtered.length) {
      resultsElement.innerHTML = `
        <div class="search-result">
          <strong>No direct match</strong>
          <span>Try terms like Fuji, shinkansen, gyoza, onsen, Kyoto, or quick snapshot.</span>
        </div>
      `;
      return;
    }

    renderSearchResults(filtered, resultsElement);
  });
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("DOMContentLoaded", () => {
  updateScrollProgress();
  initReveal();
  initSearch();
});
