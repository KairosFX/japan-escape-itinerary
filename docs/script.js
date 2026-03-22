const languageButtons = document.querySelectorAll("[data-set-language]");
const themeButtons = document.querySelectorAll("[data-set-theme]");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const sectionTabs = Array.from(document.querySelectorAll("[data-panel-target]"));
const contentPanels = Array.from(document.querySelectorAll("[data-panel]"));
const siteHeader = document.querySelector(".site-header");
const welcomeOverlay = document.querySelector(".welcome-overlay");
const sequenceNotice = document.querySelector("[data-sequence-notice]");
const routeMedia = document.querySelector(".route-reference__media");
const routeMapToggle = document.querySelector("[data-route-map-toggle]");
const routeMapLoadButton = document.querySelector("[data-route-map-load]");
const routeMapPanel = document.getElementById("route-map-panel");
const routeMapSurface = document.querySelector(".route-map__surface");
const routeMapCanvas = document.getElementById("route-map-canvas");
const routeMapStatus = document.querySelector("[data-route-map-status]");
const routeMapPreview = document.querySelector("[data-route-map-preview]");
const dayCards = Array.from(document.querySelectorAll(".day-card[data-day]"));
const dayGrids = Array.from(document.querySelectorAll(".day-grid"));
const checklistInputs = Array.from(document.querySelectorAll('.day-card input[type="checkbox"]'));
const progressItems = Array.from(document.querySelectorAll("[data-progress-item]"));
const progressTimeline = document.querySelector("[data-progress-timeline]");
const progressCurrentDayNode = document.querySelector("[data-progress-current-day]");
const progressTotalDaysNode = document.querySelector("[data-progress-total-days]");
const progressOverviewFill = document.querySelector("[data-progress-overview-fill]");
const progressOverviewCaptions = document.querySelectorAll(".progress-overview__caption [data-language]");
const jumpCurrentDayButton = document.querySelector("[data-jump-current-day]");
const resetProgressOpenButtons = Array.from(document.querySelectorAll("[data-reset-progress-open]"));
const resetProgressModal = document.querySelector("[data-reset-progress-modal]");
const resetProgressCancelButton = document.querySelector("[data-reset-progress-cancel]");
const resetProgressConfirmButton = document.querySelector("[data-reset-progress-confirm]");
const backToTopButtons = document.querySelectorAll("[data-back-to-top]");
const scrollSwipeTargetSelector =
  ".card, .booking-item, .progress-overview, .progress-item, .section-heading, .route-reference, .route-map__surface, .route-map__status, .site-footer__lead, .site-footer__aside, .site-footer__credit";
const bookingTransitRoot = document.querySelector("[data-booking-transit]");
const bookingTransitGroupsRoot = document.querySelector("[data-booking-transit-groups]");
const bookingTransitEmptyState = document.querySelector("[data-booking-empty]");
const optionalPrompt = document.querySelector("[data-optional-prompt]");
const optionalPromptExpanded = document.querySelector("[data-optional-prompt-expanded]");
const optionalPromptCompact = document.querySelector("[data-optional-prompt-compact]");
const optionalPromptFeedback = document.querySelector("[data-optional-feedback]");
const optionalUnlockButtons = document.querySelectorAll("[data-optional-unlock]");
const optionalSkipButton = document.querySelector("[data-optional-skip]");
const optionalSectionNodes = document.querySelectorAll("[data-optional-section]");
const optionalProgressItems = Array.from(
  document.querySelectorAll("[data-progress-item][data-progress-optional='true']")
);
const dayCardMap = new Map(dayCards.map((card) => [card.dataset.day, card]));
const progressItemMap = new Map(progressItems.map((item) => [item.dataset.progressItem, item]));
const root = document.documentElement;
const aggressivePerformanceMode = false;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
const compactViewportQuery = window.matchMedia("(max-width: 920px)");
const pageTitles = {
  en: "Japan Trip | Travel Guide",
  ja: "日本旅行 | 旅行ガイド"
};
const storageKey = "japan-trip-language";
const themeStorageKey = "japan-trip-theme";
const checklistStorageKey = "japan-trip-checklist-state";
const completedHistoryStorageKey = "japan-trip-completed-history";
const optionalDaysUnlockedStorageKey = "japan-trip-optional-days-unlocked";
const activePanelStorageKey = "japan-trip-active-panel";
const bookingTransitStorageKey = "japan-trip-bookings-transit-state";
const bookingTransitGroupDefinitions = [
  {
    id: "bookings",
    title: { en: "Bookings", ja: "予約" },
    copy: {
      en: "Keep the timed or pre-trip reservations together so the critical items are easy to scan first.",
      ja: "時間指定や出発前に固めたい予約をまとめて、優先度の高い項目を先に見渡せるようにします。"
    }
  },
  {
    id: "transit",
    title: { en: "Transit", ja: "移動" },
    copy: {
      en: "Keep the saved route references and transport checks together so transfer days stay calmer.",
      ja: "保存しておきたい経路メモや運行確認をまとめて、移動日を落ち着いて進められるようにします。"
    }
  }
];
const bookingTransitItems = [
  {
    id: "ic-card",
    group: "transit",
    filters: ["transit"],
    kind: "prep",
    tone: { en: "Setup prep", ja: "事前準備" },
    defaultStatus: { en: "Ready", ja: "準備OK" },
    doneStatus: { en: "Ready", ja: "準備済み" },
    toggleDefault: { en: "Mark ready", ja: "準備完了にする" },
    toggleDone: { en: "Ready", ja: "準備済み" },
    title: { en: "IC card setup", ja: "ICカードの準備" },
    summary: {
      en: "Choose ICOCA, Suica, PASMO, or mobile IC before landing.",
      ja: "到着前にICOCA、Suica、PASMO、またはモバイルICを決めておく。"
    },
    details: {
      en: "Keep one reloadable tap card or wallet setup ready for city trains, subways, and convenience-store stops. Mobile IC is the lightest option if your phone supports it.",
      ja: "都市部の電車、地下鉄、コンビニ利用のために、チャージ式ICカードかモバイルICを一つ準備しておくと動きやすいです。対応端末ならモバイルICが最も身軽です。"
    },
    action: {
      href: "https://www.google.com/maps/search/?api=1&query=ICOCA%20Suica%20PASMO%20Japan",
      label: { en: "Open Google Maps", ja: "Googleマップで開く" }
    }
  },
  {
    id: "shin-osaka-odawara",
    group: "bookings",
    filters: ["to-book"],
    kind: "booking",
    tone: { en: "Reserve ahead", ja: "事前予約" },
    defaultStatus: { en: "Not booked", ja: "未予約" },
    doneStatus: { en: "Booked", ja: "予約済み" },
    toggleDefault: { en: "Mark booked", ja: "予約済みにする" },
    toggleDone: { en: "Booked", ja: "予約済み" },
    title: { en: "Shin-Osaka -> Odawara shinkansen", ja: "新大阪 -> 小田原 新幹線" },
    summary: {
      en: "Treat this as the fixed rail booking that anchors the Hakone transfer day.",
      ja: "箱根移動日の軸になる固定予約として扱う。"
    },
    details: {
      en: "Reserve this once the transfer day is locked. A reserved seat keeps the Osaka to Hakone handoff cleaner, especially if you are carrying luggage.",
      ja: "移動日が固まったら予約しておくと安心です。荷物がある場合は指定席にしておくと、大阪から箱根への乗り継ぎがかなり楽になります。"
    },
    action: {
      href: "https://www.rome2rio.com/map/Shin-Osaka-Station/Odawara-Station",
      label: { en: "View route", ja: "経路を見る" }
    }
  },
  {
    id: "hakone-freepass",
    group: "transit",
    filters: ["transit"],
    kind: "prep",
    tone: { en: "Pass option", ja: "パス候補" },
    defaultStatus: { en: "Optional", ja: "任意" },
    doneStatus: { en: "Saved", ja: "保存済み" },
    toggleDefault: { en: "Save pass", ja: "パスを保存する" },
    toggleDone: { en: "Saved", ja: "保存済み" },
    title: { en: "Hakone Freepass", ja: "箱根フリーパス" },
    summary: {
      en: "Keep the Odawara version handy as the default pass to compare against single fares.",
      ja: "このルートでは小田原版を基準にして、単発運賃と比較できるようにしておく。"
    },
    details: {
      en: "Save the pass page so you can check current pricing and coverage before Day 4. It is useful when the Hakone loop stays compact and you want one reference page for the area.",
      ja: "4日目の前に、料金と対象区間を確認できるようパスページを保存しておくと便利です。箱根の移動をまとめる時に、エリア全体の基準ページとして使えます。"
    },
    action: {
      href: "https://www.google.com/maps/search/?api=1&query=Odawara%20Station%20Hakone%20Freepass",
      label: { en: "Open Google Maps", ja: "Googleマップで開く" }
    }
  },
  {
    id: "hakone-status",
    group: "transit",
    filters: ["transit"],
    kind: "reference",
    tone: { en: "Live updates", ja: "運行確認" },
    defaultStatus: { en: "Ready", ja: "準備OK" },
    doneStatus: { en: "Saved", ja: "保存済み" },
    toggleDefault: { en: "Save page", ja: "ページを保存する" },
    toggleDone: { en: "Saved", ja: "保存済み" },
    title: { en: "Hakone transport status page", ja: "箱根の運行状況ページ" },
    summary: {
      en: "Use this for same-day checks on ropeway, cable car, and lake transport conditions.",
      ja: "ロープウェイ、ケーブルカー、湖の移動状況を当日確認するためのページ。"
    },
    details: {
      en: "Keep a trusted map search ready for the ropeway and rail operators around Hakone so you can jump to stations and operator points quickly if the loop needs to change.",
      ja: "箱根周遊の変更が必要になった時にすぐ駅や運営地点へ飛べるよう、ロープウェイと鉄道周辺の信頼できる地図検索を保存しておきます。"
    },
    action: {
      href: "https://www.google.com/maps/search/?api=1&query=Hakone%20Ropeway%20Hakone%20Tozan%20Railway",
      label: { en: "Open Google Maps", ja: "Googleマップで開く" }
    }
  },
  {
    id: "hakone-kawaguchiko",
    group: "transit",
    filters: ["transit"],
    kind: "reference",
    tone: { en: "Save route", ja: "経路保存" },
    defaultStatus: { en: "Ready", ja: "準備OK" },
    doneStatus: { en: "Saved", ja: "保存済み" },
    toggleDefault: { en: "Save route", ja: "経路を保存する" },
    toggleDone: { en: "Saved", ja: "保存済み" },
    title: { en: "Hakone -> Kawaguchiko via Gotemba", ja: "箱根 -> 御殿場経由で河口湖" },
    summary: {
      en: "Keep the transfer chain ready so Day 5 stays light and weather-flexible.",
      ja: "5日目を軽く保つため、乗り継ぎの流れを事前に保存しておく。"
    },
    details: {
      en: "This is the reference route for moving from Hakone toward the Fuji side. Save the route details rather than memorizing them so you can adjust if departure times shift.",
      ja: "箱根から富士側へ抜ける時の基準ルートです。時刻変更に対応できるよう、暗記するより経路情報を保存しておく方が実用的です。"
    },
    action: {
      href: "https://www.rome2rio.com/map/Hakone/Kawaguchiko",
      label: { en: "View route", ja: "経路を見る" }
    }
  },
  {
    id: "kawaguchiko-tokyo",
    group: "transit",
    filters: ["transit"],
    kind: "reference",
    tone: { en: "Save route", ja: "経路保存" },
    defaultStatus: { en: "Ready", ja: "準備OK" },
    doneStatus: { en: "Saved", ja: "保存済み" },
    toggleDefault: { en: "Save route", ja: "経路を保存する" },
    toggleDone: { en: "Saved", ja: "保存済み" },
    title: { en: "Kawaguchiko -> Tokyo", ja: "河口湖 -> 東京" },
    summary: {
      en: "Keep the Tokyo return options nearby, especially Fuji Excursion and bus fallback details.",
      ja: "東京へ戻る選択肢、特に富士回遊とバスの代替案をすぐ見られるようにしておく。"
    },
    details: {
      en: "Use this as the saved return reference for the final move into Tokyo. It works best when you keep one rail option and one fallback option ready.",
      ja: "東京へ入る最後の移動のために保存しておく参照ルートです。鉄道案と代替案を一つずつ持っておくと動きやすいです。"
    },
    action: {
      href: "https://www.rome2rio.com/map/Kawaguchiko/Tokyo",
      label: { en: "View route", ja: "経路を見る" }
    }
  },
  {
    id: "kaiyukan",
    group: "bookings",
    filters: ["to-book"],
    kind: "booking",
    tone: { en: "Reserve ahead", ja: "事前予約" },
    defaultStatus: { en: "Not booked", ja: "未予約" },
    doneStatus: { en: "Booked", ja: "予約済み" },
    toggleDefault: { en: "Mark booked", ja: "予約済みにする" },
    toggleDone: { en: "Booked", ja: "予約済み" },
    title: { en: "Kaiyukan booking", ja: "海遊館の予約" },
    summary: {
      en: "Treat this as an ahead-of-time attraction reservation for the Osaka waterfront day.",
      ja: "大阪ベイエリアの日に向けた事前予約枠として扱う。"
    },
    details: {
      en: "Keep a trusted map result ready for the Osaka Aquarium stop so the waterfront day stays easy to navigate and confirm in one place.",
      ja: "大阪ベイエリアの日に迷わないよう、海遊館の信頼できる地図結果をすぐ開ける状態にしておきます。"
    },
    action: {
      href: "https://www.google.com/maps/search/?api=1&query=Kaiyukan%20Osaka%20Aquarium",
      label: { en: "Open Google Maps", ja: "Googleマップで開く" }
    }
  },
  {
    id: "shibuya-sky",
    group: "bookings",
    filters: ["to-book"],
    kind: "booking",
    tone: { en: "Reserve ahead", ja: "事前予約" },
    defaultStatus: { en: "Not booked", ja: "未予約" },
    doneStatus: { en: "Booked", ja: "予約済み" },
    toggleDefault: { en: "Mark booked", ja: "予約済みにする" },
    toggleDone: { en: "Booked", ja: "予約済み" },
    title: { en: "Shibuya Sky booking", ja: "渋谷スカイの予約" },
    summary: {
      en: "Keep the timed-entry booking ready because night slots and weather changes matter here.",
      ja: "夜の時間帯や天候変更の影響があるので、時間指定予約をすぐ開けるようにしておく。"
    },
    details: {
      en: "Keep a trusted map result ready for the Shibuya rooftop stop so arrival, entry timing, and the surrounding area are easy to check in one place.",
      ja: "渋谷の屋上スポットへ向かう時に、到着位置や周辺確認を一つで済ませられるよう、信頼できる地図結果をすぐ開ける状態にしておきます。"
    },
    action: {
      href: "https://www.google.com/maps/search/?api=1&query=Shibuya%20Sky%20Tokyo",
      label: { en: "Open Google Maps", ja: "Googleマップで開く" }
    }
  }
];
const bookingTransitItemMap = new Map(bookingTransitItems.map((item) => [item.id, item]));
const routeExperienceAssetUrls = {
  css: "./route-section.min.css",
  script: "./route-map.min.js"
};
const routeMapControllerAssetUrls = {
  css: "./assets/vendor/maplibre-gl/maplibre-gl.css",
  js: "./assets/vendor/maplibre-gl/maplibre-gl.js",
  segmentsUrl: "./assets/data/route-map-segments.json",
  loadTimeoutMs: 10000
};
const routeStopProgressConfig = {
  osakaStart: { stopId: "route-stop-osaka-start", days: ["1"] },
  kyoto: { stopId: "route-stop-kyoto", days: ["2"] },
  osakaReturn: { stopId: "route-stop-osaka-return", days: ["3"] },
  shinOsaka: { stopId: "route-stop-shin-osaka", days: ["4"] },
  odawara: { stopId: "route-stop-odawara", days: ["4"] },
  hakone: { stopId: "route-stop-hakone", days: ["4"] },
  fuji: { stopId: "route-stop-fuji", days: ["5", "6"] },
  tokyo: { stopId: "route-stop-tokyo", days: ["7", "8", "9"] }
};
const routeSegmentConfig = {
  "route-progress-kyoto": ["2"],
  "route-progress-osaka-return": ["3"],
  "route-progress-shin-osaka": ["4"],
  "route-progress-odawara": ["4"],
  "route-progress-hakone": ["4"],
  "route-progress-fuji": ["5"],
  "route-progress-tokyo": ["7"]
};
const routeDayToStopKey = {
  1: "osakaStart",
  2: "kyoto",
  3: "osakaReturn",
  4: "hakone",
  5: "fuji",
  6: "fuji",
  7: "tokyo",
  8: "tokyo",
  9: "tokyo"
};
let reservedHeaderHeight = 0;
let headerLockUntil = 0;
let lastScrollY = window.scrollY;
let scrollTicking = false;
let revealObserver = null;
let completedDays = new Set();
let completedHistoryDays = new Set();
let unlockedDays = new Set();
let warningDays = new Set();
let accessibleDay = 1;
let currentProgressDay = 1;
let sequenceNoticeTimer = 0;
let lastTimelineFocusDay = null;
let optionalDaysUnlocked = false;
let optionalPromptIsCompact = false;
let optionalPromptDeferred = false;
let routeMapStatusMode = null;
let routeMapLiveReady = false;
let routeExperienceStylesPromise = null;
let routeMapControllerScriptPromise = null;
let routeMapControllerPromise = null;
let routeMapController = null;
let lastResetTrigger = null;
let dayCardRowEqualizeFrame = 0;
let backToTopMotionResetTimer = 0;
let boxSwipeMotionResetTimer = 0;
let activePanelId = Array.from(sectionTabs).find((tab) => tab.classList.contains("is-active"))?.dataset.panelTarget ?? null;
let bookingTransitState = { filter: "all", items: {} };
let bookingTransitInitialized = false;
let reducedEffectsEnabled = false;
let lastParallaxValues = {
  shift: "",
  sunShift: "",
  mistShift: "",
  fujiShift: ""
};

function markScrollSwipeTargets() {
  if (aggressivePerformanceMode || reducedEffectsEnabled) {
    return;
  }

  document.querySelectorAll(scrollSwipeTargetSelector).forEach((target) => {
    target.classList.add("scroll-swipe-target");
  });
}

function getVisibleScrollSwipeTargets() {
  if (reducedEffectsEnabled) {
    return [];
  }

  markScrollSwipeTargets();
  return Array.from(document.querySelectorAll(scrollSwipeTargetSelector)).filter((target) => {
    const panel = target.closest("[data-panel]");
    return !panel || panel.classList.contains("is-active");
  });
}

function syncBackToTopMotion(delta, { force = false } = {}) {
  if (!backToTopButtons.length || reducedEffectsEnabled) {
    return;
  }

  if ((!force && Math.abs(delta) < 6) || delta === 0) {
    return;
  }

  const swipeDirection = delta > 0 ? "is-swipe-down" : "is-swipe-up";

  backToTopButtons.forEach((button) => {
    button.classList.toggle("is-swipe-down", swipeDirection === "is-swipe-down");
    button.classList.toggle("is-swipe-up", swipeDirection === "is-swipe-up");
  });

  window.clearTimeout(backToTopMotionResetTimer);
  backToTopMotionResetTimer = window.setTimeout(() => {
    backToTopButtons.forEach((button) => {
      button.classList.remove("is-swipe-down", "is-swipe-up");
    });
  }, 240);
}

function syncBoxSwipeMotion(delta, { force = false } = {}) {
  const visibleTargets = getVisibleScrollSwipeTargets();
  if (!visibleTargets.length) {
    return;
  }

  if ((!force && Math.abs(delta) < 6) || delta === 0) {
    return;
  }

  const swipeDirection = delta > 0 ? "is-swipe-down" : "is-swipe-up";

  visibleTargets.forEach((target) => {
    target.classList.remove("is-swipe-up", "is-swipe-down");
    target.classList.add(swipeDirection);
  });

  window.clearTimeout(boxSwipeMotionResetTimer);
  boxSwipeMotionResetTimer = window.setTimeout(() => {
    visibleTargets.forEach((target) => {
      target.classList.remove("is-swipe-up", "is-swipe-down");
    });
  }, 280);
}

function syncDirectionalMotion(delta, options) {
  if (aggressivePerformanceMode || reducedEffectsEnabled) {
    return;
  }

  syncBackToTopMotion(delta, options);
  syncBoxSwipeMotion(delta, options);
}

function getPanelTransitionDelta(nextPanelId) {
  if (!activePanelId || activePanelId === nextPanelId) {
    return 0;
  }

  const panelOrder = Array.from(sectionTabs).map((tab) => tab.dataset.panelTarget);
  const currentIndex = panelOrder.indexOf(activePanelId);
  const nextIndex = panelOrder.indexOf(nextPanelId);

  if (currentIndex === -1 || nextIndex === -1) {
    return 0;
  }

  return nextIndex - currentIndex;
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredThemePreference() {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "";
  } catch (error) {
    return "";
  }
}

function storeThemePreference(theme) {
  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch (error) {
    // Ignore storage failures and keep the page usable.
  }
}

function getCurrentTheme() {
  const explicitTheme = root.dataset.theme;
  if (explicitTheme === "light" || explicitTheme === "dark") {
    return explicitTheme;
  }

  return getSystemTheme();
}

function updateThemeButtons(theme) {
  themeButtons.forEach((button) => {
    const isActive = button.dataset.setTheme === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateThemeColorMeta(theme) {
  if (!themeColorMeta) {
    return;
  }

  themeColorMeta.content = theme === "dark" ? "#111315" : "#9b3c33";
}

function applyRouteTheme() {
  const routeDoc = routeMedia?.contentDocument;
  if (!routeDoc?.documentElement) {
    return;
  }

  routeDoc.documentElement.dataset.theme = getCurrentTheme();
}

function isLikelyLowerPowerDevice() {
  const deviceMemory = Number(navigator.deviceMemory || 0);
  const hardwareConcurrency = Number(navigator.hardwareConcurrency || 0);

  return (
    (deviceMemory > 0 && deviceMemory <= 4) ||
    (hardwareConcurrency > 0 && hardwareConcurrency <= 4)
  );
}

function shouldReduceEffects() {
  return (
    aggressivePerformanceMode ||
    reducedMotionQuery.matches ||
    coarsePointerQuery.matches ||
    compactViewportQuery.matches ||
    isLikelyLowerPowerDevice()
  );
}

function syncReducedEffectsMode({ force = false } = {}) {
  const nextReducedEffectsEnabled = shouldReduceEffects();
  if (!force && reducedEffectsEnabled === nextReducedEffectsEnabled) {
    return;
  }

  reducedEffectsEnabled = nextReducedEffectsEnabled;
  root.classList.toggle("reduce-effects", reducedEffectsEnabled);
  syncParallax(true);

  if (reducedEffectsEnabled && root.classList.contains("is-welcoming")) {
    finishWelcome();
  }
}

function bindMediaQueryChange(query, handler) {
  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handler);
    return;
  }

  if (typeof query.addListener === "function") {
    query.addListener(handler);
  }
}

function hasActiveChecklistPanel() {
  return contentPanels.some(
    (panel) => panel.dataset.panel === "checklist" && panel.classList.contains("is-active")
  );
}

function shouldEqualizeDayCardRows() {
  return !reducedEffectsEnabled && !compactViewportQuery.matches && hasActiveChecklistPanel();
}

function getOrderedDayNumbers() {
  return dayCards
    .map((card) => Number(card.dataset.day))
    .filter((day) => !Number.isNaN(day))
    .sort((left, right) => left - right);
}

function getTrackedDayNumbers() {
  return getOrderedDayNumbers().filter((day) => optionalDaysUnlocked || day <= 7);
}

function readStoredDaySet(key) {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "[]");
    if (!Array.isArray(parsed)) {
      return new Set();
    }

    return new Set(parsed.map((value) => String(value)));
  } catch (error) {
    return new Set();
  }
}

function storeDaySet(key, daySet) {
  try {
    const sortedDays = Array.from(daySet).sort((left, right) => Number(left) - Number(right));
    window.localStorage.setItem(key, JSON.stringify(sortedDays));
  } catch (error) {
    // Ignore storage failures and keep the page usable.
  }
}

function readStoredBoolean(key) {
  try {
    return window.localStorage.getItem(key) === "1";
  } catch (error) {
    return false;
  }
}

function storeBoolean(key, value) {
  try {
    if (value) {
      window.localStorage.setItem(key, "1");
      return;
    }

    window.localStorage.removeItem(key);
  } catch (error) {
    // Ignore storage failures and keep the page usable.
  }
}

function setsMatch(left, right) {
  if (left.size !== right.size) {
    return false;
  }

  for (const value of left) {
    if (!right.has(value)) {
      return false;
    }
  }

  return true;
}

function getJourneyState() {
  const orderedDays = getTrackedDayNumbers();
  const rawCompleted = new Set();
  const validDays = new Set(orderedDays.map((day) => String(day)));

  dayCards.forEach((card) => {
    if (isDayComplete(card)) {
      rawCompleted.add(card.dataset.day);
    }
  });

  const completedHistory = new Set(
    Array.from(completedHistoryDays).filter((day) => validDays.has(day))
  );
  rawCompleted.forEach((day) => {
    completedHistory.add(day);
  });

  const nextUnlockedDays = new Set();
  if (orderedDays.length) {
    nextUnlockedDays.add(String(orderedDays[0]));
  }

  completedHistory.forEach((day) => {
    if (validDays.has(day)) {
      nextUnlockedDays.add(day);
    }
  });

  orderedDays.forEach((day, index) => {
    const nextDay = orderedDays[index + 1];
    if (completedHistory.has(String(day)) && nextDay) {
      nextUnlockedDays.add(String(nextDay));
    }
  });

  let highestUnlockedDay = orderedDays[0] || 1;
  for (const day of orderedDays) {
    if (nextUnlockedDays.has(String(day))) {
      highestUnlockedDay = day;
    }
  }

  let nextCurrentDay = highestUnlockedDay;
  for (let index = orderedDays.length - 1; index >= 0; index -= 1) {
    const day = orderedDays[index];
    const dayKey = String(day);
    if (nextUnlockedDays.has(dayKey) && !rawCompleted.has(dayKey)) {
      nextCurrentDay = day;
      break;
    }
  }

  const nextWarningDays = new Set(
    Array.from(completedHistory).filter((day) => !rawCompleted.has(day))
  );

  return {
    rawCompleted,
    completedHistory,
    unlockedDays: nextUnlockedDays,
    warningDays: nextWarningDays,
    accessibleDay: highestUnlockedDay,
    currentDay: nextCurrentDay
  };
}

function readStoredChecklistState() {
  try {
    return JSON.parse(window.localStorage.getItem(checklistStorageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function storeChecklistState() {
  try {
    const nextState = {};
    checklistInputs.forEach((input) => {
      if (input.checked) {
        nextState[input.id] = true;
      }
    });
    window.localStorage.setItem(checklistStorageKey, JSON.stringify(nextState));
  } catch (error) {
    // Ignore storage failures and keep the checklist usable.
  }
}

function readStoredBookingTransitState() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(bookingTransitStorageKey) || "{}");
    const nextFilter =
      parsed?.filter === "to-book" || parsed?.filter === "transit" || parsed?.filter === "done"
        ? parsed.filter
        : "all";

    return {
      filter: nextFilter,
      items: typeof parsed?.items === "object" && parsed.items ? parsed.items : {}
    };
  } catch (error) {
    return { filter: "all", items: {} };
  }
}

function storeBookingTransitState() {
  try {
    window.localStorage.setItem(bookingTransitStorageKey, JSON.stringify(bookingTransitState));
  } catch (error) {
    // Ignore storage failures and keep the booking board usable.
  }
}

function getBookingTransitItemState(itemId) {
  const state = bookingTransitState.items[itemId];
  return {
    done: Boolean(state?.done),
    expanded: Boolean(state?.expanded)
  };
}

function updateStoredBookingTransitItemState(itemId, nextState) {
  const mergedState = {
    ...getBookingTransitItemState(itemId),
    ...nextState
  };

  if (!mergedState.done && !mergedState.expanded) {
    delete bookingTransitState.items[itemId];
  } else {
    bookingTransitState.items[itemId] = mergedState;
  }

  storeBookingTransitState();
}

function renderLocalizedContent(content) {
  return `<span data-language="en">${content.en}</span><span data-language="ja" hidden>${content.ja}</span>`;
}

function renderBookingTransitItem(item) {
  const state = getBookingTransitItemState(item.id);

  return `
    <details
      class="booking-item"
      data-booking-item
      data-booking-id="${item.id}"
      data-booking-group="${item.group}"
      data-booking-kind="${item.kind}"
      data-booking-state="${state.done ? "done" : "pending"}"
      ${state.expanded ? "open" : ""}>
      <summary>
        <span class="booking-item__meta">
          <span class="booking-item__tone">${renderLocalizedContent(item.tone)}</span>
          <span class="booking-item__status" data-booking-status>
            <span data-language="en" data-booking-status-language="en"></span>
            <span data-language="ja" data-booking-status-language="ja" hidden></span>
          </span>
        </span>
        <span class="booking-item__headline">
          <span class="booking-item__title">${renderLocalizedContent(item.title)}</span>
          <span class="booking-item__caret" aria-hidden="true"></span>
        </span>
        <span class="booking-item__summary-copy">${renderLocalizedContent(item.summary)}</span>
      </summary>
      <div class="booking-item__details">
        <div class="booking-item__details-inner">
          <p class="booking-item__detail-copy">${renderLocalizedContent(item.details)}</p>
          <div class="booking-item__actions">
            <a
              class="booking-item__cta booking-item__cta--primary"
              href="${item.action.href}"
              target="_blank"
              rel="noopener noreferrer">
              ${renderLocalizedContent(item.action.label)}
            </a>
            <button
              class="booking-item__cta booking-item__cta--secondary"
              type="button"
              data-booking-done-toggle
              aria-pressed="${state.done ? "true" : "false"}">
              <span data-language="en" data-booking-toggle-language="en"></span>
              <span data-language="ja" data-booking-toggle-language="ja" hidden></span>
            </button>
          </div>
        </div>
      </div>
    </details>
  `;
}

function renderBookingTransitBoard() {
  if (!bookingTransitGroupsRoot) {
    return;
  }

  bookingTransitGroupsRoot.innerHTML = bookingTransitGroupDefinitions
    .map((group) => {
      const itemsMarkup = bookingTransitItems
        .filter((item) => item.group === group.id)
        .map((item) => renderBookingTransitItem(item))
        .join("");

      return `
        <section class="booking-group" data-booking-group-section="${group.id}">
          <div class="booking-group__header">
            <h5 class="booking-group__title">${renderLocalizedContent(group.title)}</h5>
            <p class="booking-group__copy">${renderLocalizedContent(group.copy)}</p>
          </div>
          <div class="booking-group__list">
            ${itemsMarkup}
          </div>
        </section>
      `;
    })
    .join("");

  markScrollSwipeTargets();
}

function syncBookingTransitItemUI(itemElement) {
  const itemId = itemElement.dataset.bookingId;
  const itemConfig = bookingTransitItemMap.get(itemId);
  if (!itemConfig) {
    return;
  }

  const state = getBookingTransitItemState(itemId);
  itemElement.dataset.bookingState = state.done ? "done" : "pending";

  if (itemElement.open !== state.expanded) {
    itemElement.open = state.expanded;
  }

  itemElement.querySelectorAll("[data-booking-status-language]").forEach((node) => {
    const language = node.dataset.bookingStatusLanguage;
    const nextContent = state.done ? itemConfig.doneStatus[language] : itemConfig.defaultStatus[language];
    node.textContent = nextContent;
  });

  const doneButton = itemElement.querySelector("[data-booking-done-toggle]");
  if (doneButton) {
    doneButton.classList.toggle("is-complete", state.done);
    doneButton.setAttribute("aria-pressed", String(state.done));
    doneButton.querySelectorAll("[data-booking-toggle-language]").forEach((node) => {
      const language = node.dataset.bookingToggleLanguage;
      const nextContent = state.done ? itemConfig.toggleDone[language] : itemConfig.toggleDefault[language];
      node.textContent = nextContent;
    });
  }
}

function itemMatchesBookingTransitFilter(itemConfig, state) {
  if (bookingTransitState.filter === "all") {
    return true;
  }

  if (bookingTransitState.filter === "done") {
    return state.done;
  }

  return itemConfig.filters.includes(bookingTransitState.filter);
}

function updateBookingTransitUI() {
  if (!bookingTransitRoot) {
    return;
  }

  let hasVisibleItems = false;
  let hasVisibleDoneItems = false;

  bookingTransitRoot.querySelectorAll("[data-booking-filter-button]").forEach((button) => {
    const isActive = button.dataset.bookingFilterButton === bookingTransitState.filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  bookingTransitRoot.querySelectorAll("[data-booking-item]").forEach((itemElement) => {
    const itemConfig = bookingTransitItemMap.get(itemElement.dataset.bookingId || "");
    if (!itemConfig) {
      return;
    }

    const state = getBookingTransitItemState(itemConfig.id);
    const isVisible = itemMatchesBookingTransitFilter(itemConfig, state);
    itemElement.hidden = !isVisible;
    if (isVisible) {
      hasVisibleItems = true;
      if (state.done) {
        hasVisibleDoneItems = true;
      }
    }

    syncBookingTransitItemUI(itemElement);
  });

  bookingTransitRoot.querySelectorAll("[data-booking-group-section]").forEach((groupElement) => {
    groupElement.hidden = !groupElement.querySelector("[data-booking-item]:not([hidden])");
  });

  if (bookingTransitEmptyState) {
    bookingTransitEmptyState.hidden =
      bookingTransitState.filter !== "done" || hasVisibleDoneItems || !bookingTransitItems.length;
  }

  if (!hasVisibleItems && bookingTransitState.filter !== "done") {
    bookingTransitState.filter = "all";
    storeBookingTransitState();
    updateBookingTransitUI();
  }
}

function setBookingTransitFilter(nextFilter) {
  const allowedFilters = new Set(["all", "to-book", "transit", "done"]);
  bookingTransitState.filter = allowedFilters.has(nextFilter) ? nextFilter : "all";
  storeBookingTransitState();
  updateBookingTransitUI();
}

function bindBookingTransitUI() {
  if (!bookingTransitRoot) {
    return;
  }

  if (bookingTransitRoot.dataset.bookingFiltersBound !== "true") {
    bookingTransitRoot.querySelectorAll("[data-booking-filter-button]").forEach((button) => {
      button.addEventListener("click", () => {
        setBookingTransitFilter(button.dataset.bookingFilterButton || "all");
      });
    });
    bookingTransitRoot.dataset.bookingFiltersBound = "true";
  }

  bookingTransitRoot.querySelectorAll("[data-booking-item]").forEach((itemElement) => {
    if (itemElement.dataset.bookingBound === "true") {
      return;
    }

    itemElement.addEventListener("toggle", () => {
      updateStoredBookingTransitItemState(itemElement.dataset.bookingId || "", {
        expanded: itemElement.open
      });
      syncBookingTransitItemUI(itemElement);
    });

    itemElement.querySelector("[data-booking-done-toggle]")?.addEventListener("click", (event) => {
      event.preventDefault();
      const itemId = itemElement.dataset.bookingId || "";
      const state = getBookingTransitItemState(itemId);
      updateStoredBookingTransitItemState(itemId, {
        done: !state.done
      });
      updateBookingTransitUI();
    });

    itemElement.dataset.bookingBound = "true";
  });
}

function initializeBookingTransit() {
  if (!bookingTransitRoot || bookingTransitInitialized) {
    return;
  }

  bookingTransitState = readStoredBookingTransitState();
  renderBookingTransitBoard();
  bindBookingTransitUI();
  updateBookingTransitUI();
  bookingTransitInitialized = true;
}

function resetBookingTransitState() {
  bookingTransitState = { filter: "all", items: {} };
  storeBookingTransitState();
  if (bookingTransitRoot && bookingTransitInitialized) {
    renderBookingTransitBoard();
    bindBookingTransitUI();
    updateBookingTransitUI();
  }
}

function readStoredLanguage() {
  try {
    return window.localStorage.getItem(storageKey);
  } catch (error) {
    return null;
  }
}

function readStoredActivePanel() {
  try {
    const storedPanel = window.localStorage.getItem(activePanelStorageKey);
    return Array.from(sectionTabs)
      .some((tab) => tab.dataset.panelTarget === storedPanel)
      ? storedPanel
      : null;
  } catch (error) {
    return null;
  }
}

function storeActivePanel(panelId) {
  try {
    window.localStorage.setItem(activePanelStorageKey, panelId);
  } catch (error) {
    // Ignore storage failures and keep the navigation usable.
  }
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem(storageKey, language);
  } catch (error) {
    // Ignore storage failures and keep the page usable.
  }
}

function finishWelcome() {
  root.classList.remove("is-welcoming");
  root.classList.add("has-seen-welcome");
  if (welcomeOverlay) {
    welcomeOverlay.setAttribute("hidden", "");
  }
}

function syncReservedHeaderHeight(forceReset = false) {
  if (!siteHeader) {
    return;
  }

  const currentHeight = Math.ceil(siteHeader.getBoundingClientRect().height);
  if (forceReset) {
    reservedHeaderHeight = currentHeight;
  } else {
    reservedHeaderHeight = Math.max(reservedHeaderHeight, currentHeight);
  }

  root.style.setProperty("--header-reserved-height", `${reservedHeaderHeight}px`);
}

function lockHeaderState(duration = 420) {
  headerLockUntil = window.performance.now() + duration;
  lastScrollY = window.scrollY;
}

function preserveScrollPosition(callback) {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  callback();
  window.requestAnimationFrame(() => {
    window.scrollTo(scrollX, scrollY);
    window.requestAnimationFrame(() => {
      window.scrollTo(scrollX, scrollY);
    });
  });
}

function getDayInputs(dayCard) {
  return Array.from(dayCard.querySelectorAll('input[type="checkbox"]'));
}

function getDayCompletionRatio(dayCard) {
  const inputs = getDayInputs(dayCard);
  if (!inputs.length) {
    return 0;
  }

  const checkedCount = inputs.filter((input) => input.checked).length;
  return checkedCount / inputs.length;
}

function isDayComplete(dayCard) {
  const inputs = getDayInputs(dayCard);
  return inputs.length > 0 && inputs.every((input) => input.checked);
}

function areOptionalDaysUnlocked() {
  return optionalDaysUnlocked;
}

function restoreChecklistState() {
  const storedState = readStoredChecklistState();
  checklistInputs.forEach((input) => {
    input.checked = Boolean(storedState[input.id]);
  });
}

function decorateProgressTimeline() {
  progressItems.forEach((item) => {
    if (item.querySelector(".progress-item__body")) {
      return;
    }

    const step = item.querySelector(".progress-item__step");
    const place = item.querySelector(".progress-item__place");
    if (!step || !place) {
      return;
    }

    const body = document.createElement("div");
    body.className = "progress-item__body";

    const text = document.createElement("div");
    text.className = "progress-item__text";
    text.append(step, place);

    const meter = document.createElement("span");
    meter.className = "progress-item__meter";
    meter.setAttribute("aria-hidden", "true");

    const meterFill = document.createElement("span");
    meterFill.className = "progress-item__meter-fill";
    meter.append(meterFill);

    const meta = document.createElement("div");
    meta.className = "progress-item__meta";

    const ratio = document.createElement("span");
    ratio.className = "progress-item__ratio";
    ratio.textContent = "0%";

    const notice = document.createElement("span");
    notice.className = "progress-item__notice";
    notice.hidden = true;

    meta.append(ratio, notice);
    body.append(text, meter, meta);

    item.append(body);
  });
}

function getScrollBehavior() {
  return reducedEffectsEnabled ? "auto" : "smooth";
}

function animateCompletion(target) {
  if (!target || aggressivePerformanceMode || reducedEffectsEnabled) {
    return;
  }

  target.classList.remove("is-celebrating", "is-unlocking");
  void target.getBoundingClientRect();
  target.classList.add("is-celebrating");
  window.setTimeout(() => {
    target.classList.remove("is-celebrating");
  }, 920);
}

function animateUnlock(target) {
  if (!target || aggressivePerformanceMode || reducedEffectsEnabled) {
    return;
  }

  target.classList.remove("is-unlocking");
  void target.getBoundingClientRect();
  target.classList.add("is-unlocking");
  window.setTimeout(() => {
    target.classList.remove("is-unlocking");
  }, 1200);
}

function showSequenceNotice(requiredDay) {
  if (!sequenceNotice) {
    return;
  }

  sequenceNotice.textContent =
    root.lang === "ja"
      ? `${requiredDay}日目を完了すると次の行程へ進めます。`
      : `Complete Day ${requiredDay} to unlock the next step of your trip.`;

  sequenceNotice.hidden = false;
  sequenceNotice.classList.remove("is-visible");
  if (!reducedEffectsEnabled) {
    void sequenceNotice.getBoundingClientRect();
  }
  sequenceNotice.classList.add("is-visible");

  window.clearTimeout(sequenceNoticeTimer);
  sequenceNoticeTimer = window.setTimeout(() => {
    sequenceNotice.classList.remove("is-visible");
    window.setTimeout(() => {
      if (!sequenceNotice.classList.contains("is-visible")) {
        sequenceNotice.hidden = true;
      }
    }, 220);
  }, 2400);
}

function getCurrentProgressDay() {
  return String(currentProgressDay);
}

function getProgressOverviewState() {
  const totalDays = areOptionalDaysUnlocked() ? 9 : 7;
  const completedCount = completedDays.size;
  const activeDay = Math.min(Number(getCurrentProgressDay()) || 1, totalDays);

  return {
    totalDays,
    completedCount,
    activeDay,
    ratio: totalDays ? completedCount / totalDays : 0
  };
}

function updateProgressOverview() {
  const { totalDays, completedCount, activeDay, ratio } = getProgressOverviewState();

  if (progressCurrentDayNode) {
    progressCurrentDayNode.textContent = String(activeDay);
  }

  if (progressTotalDaysNode) {
    progressTotalDaysNode.textContent = String(totalDays);
  }

  if (progressOverviewFill) {
    progressOverviewFill.style.setProperty("--overview-progress", String(ratio));
    progressOverviewFill.parentElement?.style.setProperty("--overview-progress", String(ratio));
  }

  progressOverviewCaptions.forEach((node) => {
    if (node.dataset.language === "ja") {
      node.textContent = `${totalDays}日中${completedCount}日を完了しました`;
    } else {
      node.textContent = `${completedCount} of ${totalDays} full day${totalDays === 1 ? "" : "s"} completed`;
    }
  });
}

function setOptionalPromptFeedback(isVisible) {
  if (!optionalPromptFeedback) {
    return;
  }

  if (!isVisible) {
    optionalPromptFeedback.hidden = true;
    optionalPromptFeedback.textContent = "";
    optionalPrompt?.classList.remove("is-confirmed");
    return;
  }

  optionalPromptFeedback.hidden = false;
  optionalPromptFeedback.textContent =
    root.lang === "ja" ? "追加日程を追加しました" : "Optional days added";
  optionalPrompt?.classList.add("is-confirmed");
}

function setOptionalPromptButtonsDisabled(isDisabled) {
  optionalUnlockButtons.forEach((button) => {
    button.disabled = isDisabled;
  });

  if (optionalSkipButton) {
    optionalSkipButton.disabled = isDisabled;
  }
}

function getRouteMapMessage(key) {
  const language = root.lang === "ja" ? "ja" : "en";
  const messages = {
    en: {
      open: "View map",
      close: "Hide map",
      loading: "Loading live map…",
      fallback: "Live routing is unavailable right now. Showing a simplified path.",
      error: "Map could not load right now."
    },
    ja: {
      open: "地図を見る",
      close: "地図を閉じる",
      loading: "ライブ地図を読み込み中…",
      fallback: "ライブの経路を取得できないため、簡易ルートを表示しています。",
      error: "現在は地図を読み込めません。"
    }
  };

  return messages[language][key];
}

function updateRouteMapToggleLabel() {
  if (!routeMapToggle) {
    return;
  }

  const isExpanded = routeMapToggle.getAttribute("aria-expanded") === "true";
  const nextLabel = isExpanded ? getRouteMapMessage("close") : getRouteMapMessage("open");
  routeMapToggle.textContent = nextLabel;
}

function renderRouteMapStatus() {
  if (!routeMapStatus) {
    return;
  }

  if (!routeMapStatusMode) {
    routeMapStatus.hidden = true;
    routeMapStatus.textContent = "";
    return;
  }

  routeMapStatus.hidden = false;
  routeMapStatus.textContent = getRouteMapMessage(routeMapStatusMode);
}

function setRouteMapLoadPending(isPending) {
  if (!routeMapLoadButton) {
    return;
  }

  routeMapLoadButton.disabled = Boolean(isPending);
  routeMapLoadButton.setAttribute("aria-busy", String(Boolean(isPending)));
}

function setRouteMapLiveReady(isReady) {
  routeMapLiveReady = Boolean(isReady);
  routeMapPreview?.toggleAttribute("hidden", routeMapLiveReady);
  routeMapSurface?.classList.toggle("is-map-ready", routeMapLiveReady);
}

function buildRouteMapStateSnapshot() {
  const dayProgress = {};
  dayCards.forEach((card) => {
    dayProgress[card.dataset.day] = getDayCompletionRatio(card);
  });

  return {
    language: root.lang === "ja" ? "ja" : "en",
    theme: getCurrentTheme(),
    accessibleDay,
    currentProgressDay,
    optionalDaysUnlocked,
    completedDays: Array.from(completedDays),
    unlockedDays: Array.from(unlockedDays),
    warningDays: Array.from(warningDays),
    dayProgress
  };
}

function ensureRouteExperienceStyles() {
  if (!routeMapPanel) {
    return Promise.resolve(null);
  }

  const existingLink = document.querySelector("link[data-route-experience='css']");
  if (existingLink) {
    return Promise.resolve(existingLink);
  }

  if (routeExperienceStylesPromise) {
    return routeExperienceStylesPromise;
  }

  routeExperienceStylesPromise = new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = routeExperienceAssetUrls.css;
    link.dataset.routeExperience = "css";
    link.addEventListener(
      "load",
      () => {
        scheduleDayCardRowHeights();
        resolve(link);
      },
      { once: true }
    );
    link.addEventListener(
      "error",
      () => {
        routeExperienceStylesPromise = null;
        reject(new Error("Route experience styles failed to load."));
      },
      { once: true }
    );
    document.head.append(link);
  });

  return routeExperienceStylesPromise;
}

function loadRouteMapControllerScript() {
  if (typeof window.createJapanTripRouteMapController === "function") {
    return Promise.resolve(window.createJapanTripRouteMapController);
  }

  if (routeMapControllerScriptPromise) {
    return routeMapControllerScriptPromise;
  }

  routeMapControllerScriptPromise = new Promise((resolve, reject) => {
    let script = document.querySelector("script[data-route-map-controller='script']");

    if (!script) {
      script = document.createElement("script");
      script.src = routeExperienceAssetUrls.script;
      script.async = true;
      script.dataset.routeMapController = "script";
      document.head.append(script);
    }

    const resolveController = () => {
      if (typeof window.createJapanTripRouteMapController === "function") {
        resolve(window.createJapanTripRouteMapController);
      } else {
        routeMapControllerScriptPromise = null;
        reject(new Error("Route map controller did not initialize."));
      }
    };

    script.addEventListener("load", resolveController, { once: true });
    script.addEventListener(
      "error",
      () => {
        routeMapControllerScriptPromise = null;
        reject(new Error("Route map controller failed to load."));
      },
      { once: true }
    );

    if (typeof window.createJapanTripRouteMapController === "function") {
      resolveController();
    }
  });

  return routeMapControllerScriptPromise;
}

function ensureRouteMapController() {
  if (!routeMapCanvas || !routeMapSurface) {
    return Promise.resolve(null);
  }

  if (routeMapController) {
    return Promise.resolve(routeMapController);
  }

  if (routeMapControllerPromise) {
    return routeMapControllerPromise;
  }

  routeMapControllerPromise = Promise.all([
    ensureRouteExperienceStyles(),
    loadRouteMapControllerScript()
  ])
    .then(() => {
      if (typeof window.createJapanTripRouteMapController !== "function") {
        throw new Error("Route map controller is unavailable.");
      }

      routeMapController = window.createJapanTripRouteMapController({
        panel: routeMapPanel,
        surface: routeMapSurface,
        canvas: routeMapCanvas,
        assetUrls: routeMapControllerAssetUrls,
        getState: buildRouteMapStateSnapshot,
        onStatusChange: (nextStatusMode) => {
          routeMapStatusMode = nextStatusMode;
          renderRouteMapStatus();
        },
        onLiveReadyChange: (isReady) => {
          setRouteMapLiveReady(isReady);
        },
        onShowSequenceNotice: (requiredDay) => {
          showSequenceNotice(requiredDay);
        },
        onScrollToDay: (day) => {
          scrollToChecklistDay(day);
        }
      });

      syncRouteMapState();
      return routeMapController;
    })
    .catch((error) => {
      routeMapControllerPromise = null;
      throw error;
    });

  return routeMapControllerPromise;
}

function primeRouteExperience() {
  return ensureRouteMapController().catch(() => null);
}

function syncRouteMapViewport(options = {}) {
  routeMapController?.resize(options);
}

function setRouteMapOpen(nextOpen) {
  if (!routeMapPanel || !routeMapToggle) {
    return;
  }

  const isOpen = Boolean(nextOpen);
  routeMapPanel.hidden = !isOpen;
  routeMapToggle.setAttribute("aria-expanded", String(isOpen));
  updateRouteMapToggleLabel();

  if (!isOpen) {
    routeMapController?.setInteractive(false);
    return;
  }

  primeRouteExperience();

  if (routeMapController?.isLiveReady()) {
    window.requestAnimationFrame(() => {
      syncRouteMapViewport();
      routeMapController?.setInteractive(false);
      syncRouteMapState();
    });
  }
}

function loadInteractiveRouteMap() {
  if (routeMapPanel?.hidden) {
    setRouteMapOpen(true);
  }

  if (routeMapLiveReady) {
    window.requestAnimationFrame(() => {
      syncRouteMapViewport({ force: true });
      routeMapController?.setInteractive(false);
      syncRouteMapState();
    });
    return Promise.resolve(routeMapController);
  }

  setRouteMapLoadPending(true);
  routeMapStatusMode = "loading";
  renderRouteMapStatus();

  return ensureRouteMapController()
    .then((controller) => {
      if (!controller) {
        throw new Error("Route map controller is unavailable.");
      }

      return controller.loadInteractive(buildRouteMapStateSnapshot());
    })
    .then((controller) => {
      setRouteMapLoadPending(false);
      syncRouteMapState();
      return controller;
    })
    .catch((error) => {
      routeMapStatusMode = "error";
      renderRouteMapStatus();
      setRouteMapLoadPending(false);
      throw error;
    });
}
function syncRouteMapState() {
  updateRouteMapToggleLabel();
  renderRouteMapStatus();
  routeMapController?.sync(buildRouteMapStateSnapshot());
}

function refreshRouteMapTheme() {
  routeMapController?.refreshTheme(buildRouteMapStateSnapshot());
}

function syncOptionalDaysUI() {
  const canOfferOptionalDays = completedHistoryDays.has("7");

  optionalProgressItems.forEach((item) => {
    item.hidden = !optionalDaysUnlocked;
  });

  optionalSectionNodes.forEach((node) => {
    node.hidden = !optionalDaysUnlocked;
  });

  if (!optionalPrompt) {
    return;
  }

  const showPrompt = canOfferOptionalDays && !optionalDaysUnlocked && !optionalPromptDeferred;
  optionalPrompt.hidden = !showPrompt;

  if (!showPrompt) {
    optionalPromptIsCompact = false;
    setOptionalPromptFeedback(false);
    setOptionalPromptButtonsDisabled(false);
  }

  if (optionalPromptExpanded) {
    optionalPromptExpanded.hidden = !showPrompt;
  }

  if (optionalPromptCompact) {
    optionalPromptCompact.hidden = true;
  }

  scheduleDayCardRowHeights();
}

function syncDayCardRowHeights() {
  if (!shouldEqualizeDayCardRows()) {
    dayGrids.forEach((grid) => {
      grid.querySelectorAll(".day-card").forEach((card) => {
        card.style.minHeight = "";
      });
    });
    return;
  }

  dayGrids.forEach((grid) => {
    const visibleCards = Array.from(grid.querySelectorAll(".day-card")).filter(
      (card) => !card.hidden && card.getClientRects().length
    );

    visibleCards.forEach((card) => {
      card.style.minHeight = "";
    });

    const rows = [];

    visibleCards.forEach((card) => {
      const top = card.offsetTop;
      const matchingRow = rows.find((row) => Math.abs(row.top - top) <= 4);

      if (matchingRow) {
        matchingRow.cards.push(card);
        return;
      }

      rows.push({ top, cards: [card] });
    });

    rows.forEach((row) => {
      const tallestCard = Math.max(...row.cards.map((card) => card.getBoundingClientRect().height));
      row.cards.forEach((card) => {
        card.style.minHeight = `${Math.ceil(tallestCard)}px`;
      });
    });
  });
}

function scheduleDayCardRowHeights() {
  if (!shouldEqualizeDayCardRows()) {
    if (dayCardRowEqualizeFrame) {
      window.cancelAnimationFrame(dayCardRowEqualizeFrame);
      dayCardRowEqualizeFrame = 0;
    }

    syncDayCardRowHeights();
    return;
  }

  if (dayCardRowEqualizeFrame) {
    window.cancelAnimationFrame(dayCardRowEqualizeFrame);
  }

  dayCardRowEqualizeFrame = window.requestAnimationFrame(() => {
    dayCardRowEqualizeFrame = window.requestAnimationFrame(() => {
      dayCardRowEqualizeFrame = 0;
      syncDayCardRowHeights();
    });
  });
}

function unlockOptionalDays() {
  optionalDaysUnlocked = true;
  optionalPromptIsCompact = false;
  optionalPromptDeferred = false;
  storeBoolean(optionalDaysUnlockedStorageKey, true);
  setOptionalPromptButtonsDisabled(false);
  setOptionalPromptFeedback(false);
  syncOptionalDaysUI();
  refreshChecklistProgressState();
  syncProgressTimeline();
  animateUnlock(progressItemMap.get("8"));
  animateUnlock(dayCardMap.get("8"));

  optionalSectionNodes.forEach((node, index) => {
    if (!node.classList.contains("reveal-block")) {
      return;
    }

    node.classList.remove("is-visible");
    node.style.setProperty("--reveal-delay", `${index * 70}ms`);
  });

  window.requestAnimationFrame(() => {
    optionalSectionNodes.forEach((node) => {
      if (!node.classList.contains("reveal-block")) {
        return;
      }

      node.classList.add("is-visible");

      if (revealObserver) {
        revealObserver.observe(node);
      }
    });

    scrollProgressTimelineToActive(true);
  });
}

function confirmOptionalDaysUnlock() {
  if (optionalDaysUnlocked) {
    return;
  }

  optionalPromptDeferred = false;
  setOptionalPromptButtonsDisabled(false);
  setOptionalPromptFeedback(false);
  unlockOptionalDays();
}

function setResetModalOpen(isOpen) {
  if (!resetProgressModal) {
    return;
  }

  resetProgressModal.hidden = !isOpen;
  root.classList.toggle("has-modal-open", isOpen);

  if (isOpen) {
    window.requestAnimationFrame(() => {
      resetProgressCancelButton?.focus();
    });
  } else {
    lastResetTrigger?.focus();
  }
}

function resetTripProgress() {
  checklistInputs.forEach((input) => {
    input.checked = false;
  });

  completedDays = new Set();
  completedHistoryDays = new Set();
  unlockedDays = new Set();
  warningDays = new Set();
  optionalDaysUnlocked = false;
  optionalPromptDeferred = false;
  optionalPromptIsCompact = false;
  accessibleDay = 1;
  currentProgressDay = 1;
  lastTimelineFocusDay = null;

  storeChecklistState();
  storeDaySet(completedHistoryStorageKey, completedHistoryDays);
  storeBoolean(optionalDaysUnlockedStorageKey, false);
  resetBookingTransitState();

  window.clearTimeout(sequenceNoticeTimer);
  if (sequenceNotice) {
    sequenceNotice.hidden = true;
    sequenceNotice.classList.remove("is-visible");
  }

  setOptionalPromptFeedback(false);
  setOptionalPromptButtonsDisabled(false);
  refreshChecklistProgressState();
  syncProgressTimeline();
  syncRouteMapState();
  setActivePanel("checklist");
  setResetModalOpen(false);

  window.requestAnimationFrame(() => {
    scrollToChecklistDay(1);
  });
}

function resolveLengthValue(value, rootFontSize) {
  const trimmedValue = String(value || "").trim();
  if (!trimmedValue) {
    return 0;
  }

  if (trimmedValue.endsWith("rem")) {
    return Number.parseFloat(trimmedValue) * rootFontSize;
  }

  if (trimmedValue.endsWith("px")) {
    return Number.parseFloat(trimmedValue);
  }

  return Number.parseFloat(trimmedValue) || 0;
}

function updateTimelineSpine() {
  if (!progressTimeline) {
    return;
  }

  const anchorItem =
    progressTimeline.querySelector(".progress-item.is-active") ||
    progressTimeline.querySelector(".progress-item.is-complete:last-of-type") ||
    progressTimeline.querySelector(".progress-item");

  if (!anchorItem) {
    progressTimeline.style.setProperty("--timeline-spine-fill", "0px");
    return;
  }

  const rootFontSize =
    Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize || "16") || 16;
  const timelineStyles = window.getComputedStyle(progressTimeline);
  const nodeTop = resolveLengthValue(timelineStyles.getPropertyValue("--timeline-node-top"), rootFontSize);
  const nodeSize = resolveLengthValue(
    timelineStyles.getPropertyValue("--timeline-node-size"),
    rootFontSize
  );
  const linkOverlap = resolveLengthValue(
    timelineStyles.getPropertyValue("--timeline-link-overlap"),
    rootFontSize
  );
  const fillStart = nodeTop + nodeSize - linkOverlap;
  const fillEnd = anchorItem.offsetTop + nodeTop + linkOverlap;
  const fillHeight = Math.max(fillEnd - fillStart, 0);

  progressTimeline.style.setProperty("--timeline-spine-fill", `${fillHeight}px`);
}

function scrollProgressTimelineToActive(force = false) {
  if (!progressTimeline) {
    return;
  }

  const timelineStyles = window.getComputedStyle(progressTimeline);
  if (!["auto", "scroll"].includes(timelineStyles.overflowY)) {
    lastTimelineFocusDay = null;
    return;
  }

  const activeItem = progressTimeline.querySelector(".progress-item.is-active");
  if (!activeItem) {
    return;
  }

  const activeDay = activeItem.dataset.progressItem;
  if (!force && lastTimelineFocusDay === activeDay) {
    return;
  }

  lastTimelineFocusDay = activeDay;

  if (progressTimeline.scrollHeight <= progressTimeline.clientHeight + 8) {
    progressTimeline.scrollTop = 0;
    return;
  }

  const nextTop =
    activeItem.offsetTop - progressTimeline.clientHeight * 0.28 + activeItem.offsetHeight * 0.5;

  progressTimeline.scrollTo({
    top: Math.max(nextTop, 0),
    behavior: getScrollBehavior()
  });
}

function updateRouteProgress() {
  const routeDoc = routeMedia?.contentDocument;
  if (!routeDoc) {
    return;
  }

  const currentStopKey = routeDayToStopKey[getCurrentProgressDay()];

  Object.entries(routeStopProgressConfig).forEach(([stopKey, config]) => {
    const stop = routeDoc.getElementById(config.stopId);
    if (!stop) {
      return;
    }

    const relevantDays = config.days.filter((day) => optionalDaysUnlocked || Number(day) <= 7);
    const completedCount = relevantDays.filter((day) => completedDays.has(day)).length;
    const ratio = relevantDays.length ? completedCount / relevantDays.length : 0;
    const progressRing = stop.querySelector(".node-progress");
    const progressTrack = stop.querySelector(".node-progress-track");
    const circumference = Number(progressRing?.dataset.circumference || "0");
    const isUnlocked = relevantDays.some((day) => unlockedDays.has(day));
    const isWarning = relevantDays.some((day) => warningDays.has(day));

    stop.classList.toggle("has-progress", ratio > 0);
    stop.classList.toggle("is-complete", ratio >= 1);
    stop.classList.toggle("is-current", stopKey === currentStopKey);
    stop.classList.toggle("is-locked", !isUnlocked);
    stop.classList.toggle("is-warning", isWarning);

    if (progressTrack) {
      progressTrack.style.opacity = ratio > 0 || stopKey === currentStopKey || isUnlocked ? "1" : "0.28";
    }

    if (progressRing && circumference) {
      progressRing.style.opacity = ratio > 0 ? "1" : "0";
      progressRing.style.strokeDashoffset = `${circumference * (1 - ratio)}`;
    }
  });

  Object.entries(routeSegmentConfig).forEach(([segmentId, requiredDays]) => {
    const segment = routeDoc.getElementById(segmentId);
    if (!segment) {
      return;
    }

    const isComplete = requiredDays.every((day) => completedDays.has(day));
    segment.classList.toggle("is-complete", isComplete);
  });
}

function refreshChecklistProgressState() {
  const {
    rawCompleted,
    completedHistory,
    unlockedDays: nextUnlockedDays,
    warningDays: nextWarningDays,
    accessibleDay: nextAccessibleDay,
    currentDay: nextCurrentDay
  } = getJourneyState();

  dayCards.forEach((card) => {
    const progressRatio = getDayCompletionRatio(card);
    const dayKey = card.dataset.day;
    const day = Number(card.dataset.day);
    const isComplete = rawCompleted.has(dayKey);
    const isLocked = !nextUnlockedDays.has(dayKey);
    const isWarning = nextWarningDays.has(dayKey);
    const isCurrent = dayKey === String(nextCurrentDay);

    card.style.setProperty("--day-progress", String(progressRatio));
    card.setAttribute("data-day-progress", String(Math.round(progressRatio * 100)));
    card.classList.toggle("is-complete", isComplete);
    card.classList.toggle("is-warning-day", isWarning);
    card.classList.toggle("is-current-day", isCurrent && !isComplete);
    card.classList.toggle("is-locked-day", isLocked);
    card.setAttribute("aria-disabled", String(isLocked));
    getDayInputs(card).forEach((input) => {
      input.disabled = isLocked;
    });
  });

  progressItems.forEach((item) => {
    const dayKey = item.dataset.progressItem;
    const day = Number(item.dataset.progressItem);
    const card = dayCardMap.get(dayKey);
    const progressRatio = card ? getDayCompletionRatio(card) : 0;
    const isLocked = !nextUnlockedDays.has(dayKey);
    const isComplete = rawCompleted.has(dayKey);
    const isWarning = nextWarningDays.has(dayKey);
    const isActive = dayKey === String(nextCurrentDay) && !isLocked;
    const ratioNode = item.querySelector(".progress-item__ratio");
    const noticeNode = item.querySelector(".progress-item__notice");

    item.style.setProperty("--timeline-progress", String(progressRatio));
    item.classList.toggle("is-locked", isLocked);
    item.classList.toggle("is-unlocked", !isLocked);
    item.classList.toggle("is-complete", !isLocked && isComplete);
    item.classList.toggle("is-warning", isWarning);
    item.classList.toggle("is-partial", progressRatio > 0 && progressRatio < 1 && !isWarning);
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-disabled", String(isLocked));
    if (isActive) {
      item.setAttribute("aria-current", "step");
    } else {
      item.removeAttribute("aria-current");
    }

    if (ratioNode) {
      ratioNode.textContent = `${Math.round(progressRatio * 100)}%`;
    }

    if (noticeNode) {
      if (isWarning) {
        noticeNode.hidden = false;
        noticeNode.textContent = root.lang === "ja" ? "要確認" : "Needs attention";
      } else if (isLocked) {
        noticeNode.hidden = false;
        noticeNode.textContent = root.lang === "ja" ? "未解放" : "Locked";
      } else {
        noticeNode.hidden = true;
        noticeNode.textContent = "";
      }
    }
  });

  if (!setsMatch(completedHistoryDays, completedHistory)) {
    completedHistoryDays = completedHistory;
    storeDaySet(completedHistoryStorageKey, completedHistoryDays);
  } else {
    completedHistoryDays = completedHistory;
  }

  syncOptionalDaysUI();
  completedDays = rawCompleted;
  unlockedDays = nextUnlockedDays;
  warningDays = nextWarningDays;
  accessibleDay = nextAccessibleDay;
  currentProgressDay = nextCurrentDay;
  updateRouteProgress();
  syncRouteMapState();
}

function celebrateCompletedDay(day) {
  animateCompletion(dayCardMap.get(String(day)));
  animateCompletion(progressItemMap.get(String(day)));
  animateRouteTargets(day);

  if (Number(day) === 7) {
    animateUnlock(progressItemMap.get("8"));
    animateUnlock(dayCardMap.get("8"));
  }

  if (Number(day) === 8) {
    animateUnlock(progressItemMap.get("9"));
    animateUnlock(dayCardMap.get("9"));
  }
}

function animateRouteTargets(day) {
  if (aggressivePerformanceMode || reducedEffectsEnabled) {
    return;
  }

  const routeDoc = routeMedia?.contentDocument;
  if (!routeDoc) {
    return;
  }

  const stopKey = routeDayToStopKey[Number(day)];
  if (stopKey) {
    const routeStop = routeDoc.getElementById(routeStopProgressConfig[stopKey]?.stopId || "");
    if (routeStop) {
      routeStop.classList.remove("is-celebrating");
      void routeStop.getBoundingClientRect();
      routeStop.classList.add("is-celebrating");
      window.setTimeout(() => {
        routeStop.classList.remove("is-celebrating");
      }, 920);
    }
  }

  Object.entries(routeSegmentConfig).forEach(([segmentId, requiredDays]) => {
    if (!requiredDays.includes(String(day))) {
      return;
    }

    const segment = routeDoc.getElementById(segmentId);
    if (!segment) {
      return;
    }

    segment.classList.remove("is-celebrating");
    void segment.getBoundingClientRect();
    segment.classList.add("is-celebrating");
    window.setTimeout(() => {
      segment.classList.remove("is-celebrating");
    }, 920);
  });
}

function scrollToChecklistDay(day) {
  const targetCard = dayCardMap.get(String(day));
  if (!targetCard) {
    return;
  }

  lockHeaderState(420);
  setActivePanel("checklist");

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const targetTop =
        targetCard.getBoundingClientRect().top + window.scrollY - reservedHeaderHeight - 24;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: getScrollBehavior()
      });

      targetCard.classList.remove("is-route-target");
      void targetCard.getBoundingClientRect();
      targetCard.classList.add("is-route-target");
      window.setTimeout(() => {
        targetCard.classList.remove("is-route-target");
      }, 1400);
    });
  });
}

function scrollToPanelStart(panelId) {
  const panel = Array.from(contentPanels).find((node) => node.dataset.panel === panelId);
  if (!panel) {
    return;
  }

  const anchor = panel.querySelector(".section-heading") || panel;
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const targetTop =
        anchor.getBoundingClientRect().top + window.scrollY - reservedHeaderHeight - 20;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: getScrollBehavior()
      });
    });
  });
}

function bindRouteInteractions() {
  if (!routeMedia?.contentDocument?.documentElement) {
    return;
  }

  const routeRoot = routeMedia.contentDocument.documentElement;
  applyRouteTheme();
  if (routeRoot.dataset.interactionsBound === "1") {
    updateRouteProgress();
    return;
  }

  routeRoot.dataset.interactionsBound = "1";

  routeMedia.contentDocument.querySelectorAll("[data-scroll-day]").forEach((stop) => {
    const activateStop = (event) => {
      event.preventDefault();
      event.stopPropagation();

      const targetDay = Number(stop.dataset.scrollDay);
      if (targetDay > accessibleDay) {
        showSequenceNotice(accessibleDay);
        return;
      }

      scrollToChecklistDay(stop.dataset.scrollDay);
    };

    stop.addEventListener("click", activateStop);
    stop.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        activateStop(event);
      }
    });
  });

  updateRouteProgress();
}

function setLanguage(language) {
  const nextLanguage = language === "ja" ? "ja" : "en";
  const localizedNodes = document.querySelectorAll("[data-language]");
  const ariaLabelNodes = document.querySelectorAll("[data-aria-label-en][data-aria-label-ja]");
  const altTextNodes = document.querySelectorAll("[data-alt-en][data-alt-ja]");
  const sourceNodes = document.querySelectorAll("[data-src-en][data-src-ja]");

  root.lang = nextLanguage;
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
    const sourceAttribute = node.tagName === "OBJECT" ? "data" : "src";
    if (node.getAttribute(sourceAttribute) !== nextSource) {
      node.setAttribute(sourceAttribute, nextSource);
    }
  });
  window.requestAnimationFrame(() => syncReservedHeaderHeight(false));

  languageButtons.forEach((button) => {
    const isActive = button.dataset.setLanguage === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  storeLanguage(nextLanguage);
  refreshChecklistProgressState();
  syncProgressTimeline();
  syncRouteMapState();
  setOptionalPromptFeedback(false);
  scheduleDayCardRowHeights();
}

function applyTheme(theme, options = {}) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  const { persist = true } = options;

  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
  updateThemeButtons(nextTheme);
  updateThemeColorMeta(nextTheme);
  applyRouteTheme();

  if (persist) {
    storeThemePreference(nextTheme);
  }

  if (routeMapController) {
    refreshRouteMapTheme();
  }
}

function handleLanguageButtonClick(button) {
  lockHeaderState(280);
  preserveScrollPosition(() => {
    setLanguage(button.dataset.setLanguage);
  });
}

function handleThemeButtonClick(button) {
  lockHeaderState(280);
  preserveScrollPosition(() => {
    applyTheme(button.dataset.setTheme);
  });
}

function setActivePanel(panelId) {
  let hasMatch = false;
  const panelTransitionDelta = getPanelTransitionDelta(panelId);

  contentPanels.forEach((panel) => {
    const isActive = panel.dataset.panel === panelId;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-hidden", String(!isActive));
    panel.toggleAttribute("inert", !isActive);
    hasMatch ||= isActive;
  });

  sectionTabs.forEach((tab) => {
    const isActive = tab.dataset.panelTarget === panelId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  if (hasMatch) {
    if (panelId === "essentials") {
      initializeBookingTransit();
    }

    if (panelId === "route") {
      primeRouteExperience();
    }

    if (
      panelId === "checklist" &&
      optionalPromptDeferred &&
      completedHistoryDays.has("7") &&
      !optionalDaysUnlocked
    ) {
      optionalPromptDeferred = false;
      syncOptionalDaysUI();
    }

    refreshRevealPanel(panelId);
    syncDirectionalMotion(panelTransitionDelta, { force: true });
    syncProgressTimeline();
    scheduleDayCardRowHeights();
    if (
      panelId === "route" &&
      routeMapController?.isLiveReady() &&
      routeMapToggle?.getAttribute("aria-expanded") === "true"
    ) {
      window.requestAnimationFrame(() => {
        syncRouteMapViewport();
      });
    }

    activePanelId = panelId;
    storeActivePanel(panelId);
  }

  return hasMatch;
}

function setActiveProgressItem(day) {
  if (!progressItems.length) {
    return;
  }

  const maxVisibleDay = areOptionalDaysUnlocked() ? 9 : 7;
  const nextDay = Math.min(Number(day) || 1, maxVisibleDay);

  progressItems.forEach((item) => {
    const isActive =
      item.dataset.progressItem === String(nextDay) && !item.classList.contains("is-locked");
    item.classList.toggle("is-active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "step");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

function syncProgressTimeline() {
  if (!dayCards.length) {
    return;
  }

  setActiveProgressItem(getCurrentProgressDay());
  updateProgressOverview();
  window.requestAnimationFrame(() => {
    updateTimelineSpine();
    scrollProgressTimelineToActive();
  });
}

function syncParallax(force = false) {
  const currentScrollY = window.scrollY;
  const nextParallaxValues = reducedEffectsEnabled
    ? {
        shift: "0px",
        sunShift: "0px",
        mistShift: "0px",
        fujiShift: "0px"
      }
    : {
        shift: `${Math.min(Math.round(currentScrollY * 0.085), 60)}px`,
        sunShift: `${Math.min(Math.round(currentScrollY * 0.032), 28)}px`,
        mistShift: `${Math.min(Math.round(currentScrollY * 0.022), 20)}px`,
        fujiShift: `${Math.min(Math.round(currentScrollY * 0.014), 14)}px`
      };

  if (
    !force &&
    lastParallaxValues.shift === nextParallaxValues.shift &&
    lastParallaxValues.sunShift === nextParallaxValues.sunShift &&
    lastParallaxValues.mistShift === nextParallaxValues.mistShift &&
    lastParallaxValues.fujiShift === nextParallaxValues.fujiShift
  ) {
    return;
  }

  root.style.setProperty("--parallax-shift", nextParallaxValues.shift);
  root.style.setProperty("--sun-shift", nextParallaxValues.sunShift);
  root.style.setProperty("--mist-shift", nextParallaxValues.mistShift);
  root.style.setProperty("--fuji-shift", nextParallaxValues.fujiShift);
  lastParallaxValues = nextParallaxValues;
}

function registerRevealBlocks() {
  const revealBlocks = Array.from(
    document.querySelectorAll(
      ".hero-panel, .trip-stats, .progress-card, .content-section .section-heading, .essentials-grid, .day-grid, .notes-grid, [data-optional-section], .route-map, .journey-close, .site-footer__lead, .site-footer__aside, .site-footer__credit"
    )
  );

  revealBlocks.forEach((block, index) => {
    block.classList.add("reveal-block");
    block.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 60}ms`);
  });

  if (reducedEffectsEnabled || !("IntersectionObserver" in window)) {
    revealBlocks.forEach((block) => block.classList.add("is-visible"));
    return;
  }

  revealObserver = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealBlocks.forEach((block) => revealObserver.observe(block));
}

function refreshRevealPanel(panelId) {
  const activePanel = Array.from(contentPanels).find((panel) => panel.dataset.panel === panelId);
  if (!activePanel) {
    return;
  }

  const panelBlocks = activePanel.querySelectorAll(".reveal-block");
  if (reducedEffectsEnabled) {
    panelBlocks.forEach((block) => block.classList.add("is-visible"));
    return;
  }

  panelBlocks.forEach((block, index) => {
    block.classList.remove("is-visible");
    block.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 70}ms`);
  });

  window.requestAnimationFrame(() => {
    panelBlocks.forEach((block) => {
      block.classList.add("is-visible");
      if (revealObserver) {
        revealObserver.observe(block);
      }
    });
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleLanguageButtonClick(button);
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleThemeButtonClick(button);
  });
});

syncReducedEffectsMode({ force: true });

decorateProgressTimeline();
completedHistoryDays = readStoredDaySet(completedHistoryStorageKey);
optionalDaysUnlocked = readStoredBoolean(optionalDaysUnlockedStorageKey);
syncOptionalDaysUI();
applyTheme(readStoredThemePreference() || getCurrentTheme(), { persist: false });
setLanguage(readStoredLanguage());
restoreChecklistState();
refreshChecklistProgressState();

registerRevealBlocks();
const initialPanelId = readStoredActivePanel() || "overview";
if (initialPanelId === "route") {
  primeRouteExperience();
}
setActivePanel(initialPanelId);
setActiveProgressItem(getCurrentProgressDay());
syncParallax();
syncProgressTimeline();
syncDirectionalMotion(0);
updateRouteMapToggleLabel();
renderRouteMapStatus();
scheduleDayCardRowHeights();

if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    scheduleDayCardRowHeights();
  });
}

dayCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const day = Number(card.dataset.day);
    if (day <= accessibleDay) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    showSequenceNotice(accessibleDay);
  });
});

checklistInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const dayCard = input.closest(".day-card[data-day]");
    const day = dayCard?.dataset.day;
    const wasComplete = day ? completedDays.has(day) : false;
    const previousUnlockedDays = new Set(unlockedDays);
    const previousCurrentDay = String(currentProgressDay);

    storeChecklistState();
    refreshChecklistProgressState();
    syncProgressTimeline();

    Array.from(unlockedDays)
      .filter((unlockedDay) => !previousUnlockedDays.has(unlockedDay))
      .forEach((unlockedDay) => {
        animateUnlock(progressItemMap.get(unlockedDay));
        animateUnlock(dayCardMap.get(unlockedDay));
      });

    if (String(currentProgressDay) !== previousCurrentDay) {
      window.requestAnimationFrame(() => {
        scrollProgressTimelineToActive(true);
      });
    }

    if (
      day &&
      !wasComplete &&
      completedDays.has(day)
    ) {
      celebrateCompletedDay(day);
    }
  });
});

sectionTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    lockHeaderState(520);
    setActivePanel(tab.dataset.panelTarget);
    scrollToPanelStart(tab.dataset.panelTarget);
  });
});

if (routeMapToggle) {
  routeMapToggle.addEventListener("click", () => {
    const nextOpen = routeMapToggle.getAttribute("aria-expanded") !== "true";
    setRouteMapOpen(nextOpen);
  });
}

if (routeMapLoadButton) {
  routeMapLoadButton.addEventListener("click", () => {
    loadInteractiveRouteMap().catch(() => {
      // Status UI already reflects the failure path.
    });
  });
}

if (jumpCurrentDayButton) {
  jumpCurrentDayButton.addEventListener("click", () => {
    scrollToChecklistDay(getCurrentProgressDay());
  });
}

resetProgressOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastResetTrigger = button;
    setResetModalOpen(true);
  });
});

if (resetProgressCancelButton) {
  resetProgressCancelButton.addEventListener("click", () => {
    setResetModalOpen(false);
  });
}

if (resetProgressConfirmButton) {
  resetProgressConfirmButton.addEventListener("click", () => {
    resetTripProgress();
  });
}

backToTopButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: getScrollBehavior()
    });
  });
});

optionalUnlockButtons.forEach((button) => {
  button.addEventListener("click", () => {
    confirmOptionalDaysUnlock();
  });
});

if (optionalSkipButton) {
  optionalSkipButton.addEventListener("click", () => {
    optionalPromptDeferred = true;
    optionalPromptIsCompact = false;
    setOptionalPromptFeedback(false);
    setOptionalPromptButtonsDisabled(false);
    syncOptionalDaysUI();
  });
}

if (resetProgressModal) {
  resetProgressModal.addEventListener("click", (event) => {
    if (event.target === resetProgressModal) {
      setResetModalOpen(false);
    }
  });
}

[reducedMotionQuery, coarsePointerQuery, compactViewportQuery].forEach((query) => {
  bindMediaQueryChange(query, () => {
    syncReducedEffectsMode({ force: true });
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && resetProgressModal && !resetProgressModal.hidden) {
    setResetModalOpen(false);
  }
});

if (root.classList.contains("is-welcoming")) {
  window.setTimeout(finishWelcome, reducedEffectsEnabled ? 60 : 2100);
} else if (welcomeOverlay) {
  welcomeOverlay.setAttribute("hidden", "");
}

if (routeMedia) {
  routeMedia.addEventListener("load", bindRouteInteractions);
  window.requestAnimationFrame(() => {
    bindRouteInteractions();
  });
}

function syncHeaderState() {
  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY;
  syncDirectionalMotion(delta);

  if (!siteHeader) {
    lastScrollY = currentScrollY;
    scrollTicking = false;
    return;
  }

  if (window.performance.now() < headerLockUntil) {
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY <= 36 || delta < -8) {
    siteHeader.classList.remove("is-condensed");
  } else if (currentScrollY > 150 && delta > 8) {
    siteHeader.classList.add("is-condensed");
  }

  lastScrollY = currentScrollY;
}

function runScrollEffects() {
  syncHeaderState();
  syncParallax();
  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(runScrollEffects);
  },
  { passive: true }
);

if (siteHeader) {
  syncReservedHeaderHeight(true);

  if ("ResizeObserver" in window) {
    const headerObserver = new window.ResizeObserver(() => {
      if (siteHeader.classList.contains("is-condensed")) {
        return;
      }

      window.requestAnimationFrame(() => {
        syncReservedHeaderHeight(true);
      });
    });

    headerObserver.observe(siteHeader);
  }

  window.addEventListener("resize", () => {
    syncReducedEffectsMode();
    const wasCondensed = siteHeader.classList.contains("is-condensed");
    siteHeader.classList.remove("is-condensed");
    syncReservedHeaderHeight(true);
    if (wasCondensed && window.scrollY > 150) {
      siteHeader.classList.add("is-condensed");
    }
    syncParallax();
    syncProgressTimeline();
    scheduleDayCardRowHeights();
    if (routeMapController?.isLiveReady() && routeMapToggle?.getAttribute("aria-expanded") === "true") {
      syncRouteMapViewport();
    }
    lockHeaderState(220);
  });
}
