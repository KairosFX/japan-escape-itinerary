const languageButtons = document.querySelectorAll("[data-set-language]");
const localizedNodes = document.querySelectorAll("[data-language]");
const ariaLabelNodes = document.querySelectorAll("[data-aria-label-en][data-aria-label-ja]");
const altTextNodes = document.querySelectorAll("[data-alt-en][data-alt-ja]");
const sourceNodes = document.querySelectorAll("[data-src-en][data-src-ja]");
const sectionLinks = document.querySelectorAll(".section-nav a");
const siteHeader = document.querySelector(".site-header");
const welcomeOverlay = document.querySelector(".welcome-overlay");
const pageTitles = {
  en: "Japan Trip | Itinerary",
  ja: "日本旅行 | 旅程"
};
const storageKey = "japan-trip-language";
const welcomeStorageKey = "japan-trip-welcome-seen";

function readStoredLanguage() {
  try {
    return window.localStorage.getItem(storageKey);
  } catch (error) {
    return null;
  }
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem(storageKey, language);
  } catch (error) {
    // Ignore storage failures and keep the page usable.
  }
}

function storeWelcomeSeen() {
  try {
    window.localStorage.setItem(welcomeStorageKey, "1");
  } catch (error) {
    // Ignore storage failures and keep the page usable.
  }
}

function finishWelcome() {
  document.documentElement.classList.remove("is-welcoming");
  document.documentElement.classList.add("has-seen-welcome");
  if (welcomeOverlay) {
    welcomeOverlay.setAttribute("hidden", "");
  }
  storeWelcomeSeen();
}

function setLanguage(language) {
  const nextLanguage = language === "ja" ? "ja" : "en";

  document.documentElement.lang = nextLanguage;
  document.title = pageTitles[nextLanguage];

  localizedNodes.forEach((node) => {
    node.hidden = node.dataset.language !== nextLanguage;
  });

  ariaLabelNodes.forEach((node) => {
    node.setAttribute(
      "aria-label",
      nextLanguage === "ja" ? node.dataset.ariaLabelJa : node.dataset.ariaLabelEn
    );
  });

  altTextNodes.forEach((node) => {
    node.setAttribute(
      "alt",
      nextLanguage === "ja" ? node.dataset.altJa : node.dataset.altEn
    );
  });

  sourceNodes.forEach((node) => {
    const nextSource = nextLanguage === "ja" ? node.dataset.srcJa : node.dataset.srcEn;
    if (node.getAttribute("src") !== nextSource) {
      node.setAttribute("src", nextSource);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.setLanguage === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  storeLanguage(nextLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.setLanguage);
  });
});

setLanguage(readStoredLanguage());

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteHeader?.classList.remove("is-condensed");
  });
});

if (document.documentElement.classList.contains("is-welcoming")) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(finishWelcome, prefersReducedMotion ? 60 : 2600);
} else if (welcomeOverlay) {
  welcomeOverlay.setAttribute("hidden", "");
}

let lastScrollY = window.scrollY;
let scrollTicking = false;

function syncHeaderState() {
  if (!siteHeader) {
    scrollTicking = false;
    return;
  }

  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY;

  if (currentScrollY <= 36 || delta < -8) {
    siteHeader.classList.remove("is-condensed");
  } else if (currentScrollY > 150 && delta > 8) {
    siteHeader.classList.add("is-condensed");
  }

  lastScrollY = currentScrollY;
  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(syncHeaderState);
  },
  { passive: true }
);
