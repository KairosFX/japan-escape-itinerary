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

const TERM_ITEMS = {
  "visibility-led": {
    title: "Visibility-Led",
    text: "For the Fuji block, the clearest mountain view decides the order. If Fuji is visible, go to the strongest viewpoint first and move the rest around it."
  },
  shinkansen: {
    title: "Shinkansen",
    text: "Japan's high-speed bullet train. In this route it matters most for the Shin-Osaka to Odawara move on the Hakone transfer day."
  },
  "ic-card": {
    title: "IC Card",
    text: "A rechargeable tap card like ICOCA, Suica, or PASMO that makes local transit cleaner than buying single tickets over and over."
  },
  ryokan: {
    title: "Ryokan",
    text: "A traditional inn, often with a set meal, tatami room, and a calmer overnight pace that fits Hakone especially well."
  },
  konbini: {
    title: "Konbini",
    text: "Japanese convenience stores. They are the backup plan for onigiri, drinks, desserts, and late food when energy or time gets tight."
  },
  "hachiko-side": {
    title: "Hachiko Side",
    text: "The easiest first-side of Shibuya for the Crossing and a simple meet point if the group wants a low-confusion Tokyo start."
  },
  "hakone-freepass": {
    title: "Hakone Freepass",
    text: "A bundled transport pass for the Hakone area. The area-only version fits this route better than the Tokyo round-trip version."
  },
  "coin-lockers": {
    title: "Coin Lockers",
    text: "Station lockers or luggage counters used to drop bags before sightseeing. Big stations are usually the safest and fastest places to rely on them."
  },
  "yoshida-udon": {
    title: "Yoshida Udon",
    text: "A Mount Fuji area noodle specialty known for firmer noodles and a practical local-lunch feel around the Kawaguchiko and Fujiyoshida side."
  },
  izakaya: {
    title: "Izakaya",
    text: "A casual Japanese pub-style place built around shared plates, drinks, and a flexible dinner pace that works well in Osaka or Tokyo."
  },
  "late-backup": {
    title: "Late Backup",
    text: "The simple fallback plan when the day runs long: convenience-store snacks, ramen, dessert, or one easy meal instead of a complicated last-minute search."
  },
  onsen: {
    title: "Onsen",
    text: "A hot-spring bathing area. The core rules are wash first, keep towels out of the bath, and leave phones away from the water area."
  },
  sumimasen: {
    title: "Sumimasen",
    text: "The most useful all-purpose polite opener. Use it to say excuse me, get attention, or start a quick question."
  },
  "no-photo-signs": {
    title: "No-Photo Signs",
    text: "Many temple halls, shops, and bath areas quietly prohibit photos. Treat posted signs as the final answer."
  },
  "queue-lines": {
    title: "Queue Lines",
    text: "Japan stations and attractions rely on orderly queues. Stand in line cleanly, let people off first, and avoid crowding the doors."
  }
};

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

function initTermGroups() {
  const groups = [...document.querySelectorAll("[data-term-group]")];
  if (!groups.length) {
    return;
  }

  groups.forEach((group) => {
    const panel = group.querySelector("[data-term-panel]");
    const buttons = [...group.querySelectorAll("[data-term]")];
    if (!panel || !buttons.length) {
      return;
    }

    const renderTerm = (key) => {
      const item = TERM_ITEMS[key];
      if (!item) {
        return;
      }

      buttons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.term === key);
        button.setAttribute("aria-pressed", button.dataset.term === key ? "true" : "false");
      });

      panel.innerHTML = `
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      `;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => renderTerm(button.dataset.term));
    });

    const initial = buttons.find((button) => button.classList.contains("is-active")) || buttons[0];
    renderTerm(initial.dataset.term);
  });
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("DOMContentLoaded", () => {
  updateScrollProgress();
  initReveal();
  initSearch();
  initTermGroups();
});
