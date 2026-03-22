(function routeMapModuleBootstrap() {
  "use strict";

  const routeMapStops = {
    osakaStart: {
      coordinates: [135.5023, 34.6937],
      title: { en: "Osaka", ja: "大阪" },
      subtitle: { en: "Day 1 · Nightlife and Dotonbori", ja: "1日目 · 夜の街と道頓堀" }
    },
    kyoto: {
      coordinates: [135.7681, 35.0116],
      title: { en: "Kyoto", ja: "京都" },
      subtitle: { en: "Day 2 · Arashiyama, Nanzen-ji, Kiyomizu-dera", ja: "2日目 · 嵐山、南禅寺、清水寺" }
    },
    osakaReturn: {
      coordinates: [135.4945, 34.6992],
      title: { en: "Osaka", ja: "大阪" },
      subtitle: { en: "Day 3 · Kaiyukan, Osaka Castle, and flex time", ja: "3日目 · 海遊館、大阪城、自由時間" }
    },
    shinOsaka: {
      coordinates: [135.5013, 34.7335],
      title: { en: "Shin-Osaka", ja: "新大阪" },
      subtitle: { en: "Day 4 · Bullet train departure", ja: "4日目 · 新幹線の出発駅" }
    },
    odawara: {
      coordinates: [139.1544, 35.2556],
      title: { en: "Odawara", ja: "小田原" },
      subtitle: { en: "Day 4 · Hakone transfer handoff", ja: "4日目 · 箱根への乗り換え" }
    },
    hakone: {
      coordinates: [139.1039, 35.2323],
      title: { en: "Hakone", ja: "箱根" },
      subtitle: { en: "Day 4 · Ropeway, ryokan, and scenic stay", ja: "4日目 · ロープウェイと旅館の滞在" }
    },
    fuji: {
      coordinates: [138.7598, 35.4894],
      title: { en: "Mt. Fuji area", ja: "富士山エリア" },
      subtitle: { en: "Days 5 & 6 · Kawaguchiko, Oshino Hakkai, optional Chureito", ja: "5日目・6日目 · 河口湖、忍野八海、忠霊塔は任意" }
    },
    tokyo: {
      coordinates: [139.6917, 35.6895],
      title: { en: "Tokyo", ja: "東京" },
      subtitle: { en: "Day 7 onward · Shibuya finish", ja: "7日目以降 · 渋谷で締め" }
    }
  };

  const routeMapSegmentDefinitions = [
    { id: "segment-osaka-start-kyoto", from: "osakaStart", to: "kyoto", day: "2", kind: "main" },
    { id: "segment-kyoto-osaka-return", from: "kyoto", to: "osakaReturn", day: "3", kind: "main" },
    { id: "segment-osaka-return-shin-osaka", from: "osakaReturn", to: "shinOsaka", day: "4", kind: "main" },
    { id: "segment-shin-osaka-odawara", from: "shinOsaka", to: "odawara", day: "4", kind: "main" },
    { id: "segment-odawara-hakone", from: "odawara", to: "hakone", day: "4", kind: "main" },
    { id: "segment-hakone-fuji", from: "hakone", to: "fuji", day: "5", kind: "main" },
    { id: "segment-fuji-tokyo", from: "fuji", to: "tokyo", day: "7", kind: "main" }
  ];

  const routeStopProgressConfig = {
    osakaStart: { days: ["1"] },
    kyoto: { days: ["2"] },
    osakaReturn: { days: ["3"] },
    shinOsaka: { days: ["4"] },
    odawara: { days: ["4"] },
    hakone: { days: ["4"] },
    fuji: { days: ["5", "6"] },
    tokyo: { days: ["7", "8", "9"] }
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

  function normalizeState(snapshot) {
    const nextSnapshot = snapshot || {};

    return {
      language: nextSnapshot.language === "ja" ? "ja" : "en",
      theme: nextSnapshot.theme === "dark" ? "dark" : "light",
      accessibleDay: Number(nextSnapshot.accessibleDay) || 1,
      currentProgressDay: Number(nextSnapshot.currentProgressDay) || 1,
      optionalDaysUnlocked: Boolean(nextSnapshot.optionalDaysUnlocked),
      completedDays: new Set((nextSnapshot.completedDays || []).map((value) => String(value))),
      unlockedDays: new Set((nextSnapshot.unlockedDays || []).map((value) => String(value))),
      warningDays: new Set((nextSnapshot.warningDays || []).map((value) => String(value))),
      dayProgress: nextSnapshot.dayProgress || {}
    };
  }

  window.createJapanTripRouteMapController = function createJapanTripRouteMapController(options) {
    const {
      panel,
      surface,
      canvas,
      assetUrls,
      getState,
      onStatusChange,
      onLiveReadyChange,
      onShowSequenceNotice,
      onScrollToDay
    } = options || {};

    let currentSnapshot = normalizeState(typeof getState === "function" ? getState() : {});
    let routeMapInstance = null;
    let routeMapLibraryPromise = null;
    let routeMapInitializationPromise = null;
    let routeMapSegmentsPromise = null;
    let routeMapSegments = [];
    let routeMapMarkers = new Map();
    let routeMapInteractive = false;
    let routeMapDragArmed = false;
    let routeMapDragPointerId = null;
    let routeMapLiveReady = false;
    let routeMapViewportSize = { width: 0, height: 0 };
    let routeMapHasFittedBounds = false;

    function notifyStatus(nextStatusMode) {
      if (typeof onStatusChange === "function") {
        onStatusChange(nextStatusMode);
      }
    }

    function setLiveReady(isReady) {
      routeMapLiveReady = Boolean(isReady);
      if (!routeMapLiveReady) {
        routeMapViewportSize = { width: 0, height: 0 };
        routeMapHasFittedBounds = false;
      }

      if (typeof onLiveReadyChange === "function") {
        onLiveReadyChange(routeMapLiveReady);
      }
    }

    function getRouteMapPalette() {
      if (currentSnapshot.theme === "dark") {
        return {
          background: "#14171b",
          rasterOpacity: 0.54,
          rasterSaturation: -0.72,
          rasterContrast: 0.18,
          rasterBrightnessMin: 0.18,
          rasterBrightnessMax: 0.88,
          complete: "#d7745f",
          current: "#f0c1b4",
          warning: "#d09d59",
          available: "#a77466",
          locked: "#524844"
        };
      }

      return {
        background: "#f2ece5",
        rasterOpacity: 0.82,
        rasterSaturation: -0.28,
        rasterContrast: 0.08,
        rasterBrightnessMin: 0.48,
        rasterBrightnessMax: 1,
        complete: "#b55446",
        current: "#de8c78",
        warning: "#bf9151",
        available: "#b89082",
        locked: "#91857f"
      };
    }

    function buildRouteMapStyle() {
      const palette = getRouteMapPalette();

      return {
        version: 8,
        sources: {
          osmRaster: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
          }
        },
        layers: [
          {
            id: "route-map-background",
            type: "background",
            paint: {
              "background-color": palette.background
            }
          },
          {
            id: "route-map-raster",
            type: "raster",
            source: "osmRaster",
            paint: {
              "raster-opacity": palette.rasterOpacity,
              "raster-saturation": palette.rasterSaturation,
              "raster-contrast": palette.rasterContrast,
              "raster-brightness-min": palette.rasterBrightnessMin,
              "raster-brightness-max": palette.rasterBrightnessMax
            }
          }
        ]
      };
    }

    function buildFallbackGeometry(fromCoordinates, toCoordinates) {
      return {
        type: "LineString",
        coordinates: [fromCoordinates, toCoordinates]
      };
    }

    function getFallbackRouteMapSegments() {
      return routeMapSegmentDefinitions.map((segment) => ({
        ...segment,
        geometry: buildFallbackGeometry(
          routeMapStops[segment.from].coordinates,
          routeMapStops[segment.to].coordinates
        ),
        usesFallback: true
      }));
    }

    function ensureMapAssets() {
      if (window.maplibregl) {
        return Promise.resolve(window.maplibregl);
      }

      if (routeMapLibraryPromise) {
        return routeMapLibraryPromise;
      }

      routeMapLibraryPromise = new Promise((resolve, reject) => {
        let script = document.querySelector("script[data-route-maplibre='script']");
        const existingLink = document.querySelector("link[data-route-maplibre='css']");

        if (!existingLink) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = assetUrls.css;
          link.dataset.routeMaplibre = "css";
          document.head.append(link);
        }

        if (!script) {
          script = document.createElement("script");
          script.src = assetUrls.js;
          script.async = true;
          script.dataset.routeMaplibre = "script";
          document.head.append(script);
        }

        const resolveLibrary = () => {
          if (window.maplibregl) {
            resolve(window.maplibregl);
          } else {
            reject(new Error("MapLibre library failed to initialize."));
          }
        };

        script.addEventListener("load", resolveLibrary, { once: true });
        script.addEventListener(
          "error",
          () => {
            routeMapLibraryPromise = null;
            reject(new Error("MapLibre library failed to load."));
          },
          { once: true }
        );

        if (window.maplibregl) {
          resolveLibrary();
        }
      });

      return routeMapLibraryPromise;
    }

    function loadRouteMapSegments() {
      if (routeMapSegments.length) {
        return Promise.resolve(routeMapSegments);
      }

      if (!routeMapSegmentsPromise) {
        routeMapSegmentsPromise = window.fetch(assetUrls.segmentsUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Route map data request failed with status ${response.status}.`);
            }

            return response.json();
          })
          .then((data) => {
            if (!Array.isArray(data)) {
              throw new Error("Route map data is not an array.");
            }

            const storedSegments = new Map(data.map((segment) => [segment.id, segment]));
            const segments = routeMapSegmentDefinitions.map((segment) => {
              const storedSegment = storedSegments.get(segment.id);
              const fallbackGeometry = buildFallbackGeometry(
                routeMapStops[segment.from].coordinates,
                routeMapStops[segment.to].coordinates
              );
              const hasValidGeometry =
                storedSegment?.geometry?.type === "LineString" &&
                Array.isArray(storedSegment.geometry.coordinates) &&
                storedSegment.geometry.coordinates.length > 1;

              return {
                ...segment,
                geometry: hasValidGeometry ? storedSegment.geometry : fallbackGeometry,
                usesFallback: Boolean(storedSegment?.usesFallback) || !hasValidGeometry
              };
            });

            notifyStatus(segments.some((segment) => segment.usesFallback) ? "fallback" : null);
            routeMapSegments = segments;
            return segments;
          })
          .catch(() => {
            const fallbackSegments = getFallbackRouteMapSegments();
            notifyStatus("fallback");
            routeMapSegments = fallbackSegments;
            return fallbackSegments;
          });
      }

      return routeMapSegmentsPromise;
    }

    function getRouteMapSegmentState(dayKey) {
      const normalizedDayKey = String(dayKey);

      if (currentSnapshot.warningDays.has(normalizedDayKey)) {
        return "warning";
      }

      if (currentSnapshot.completedDays.has(normalizedDayKey)) {
        return "complete";
      }

      if (
        String(currentSnapshot.currentProgressDay) === normalizedDayKey &&
        currentSnapshot.unlockedDays.has(normalizedDayKey)
      ) {
        return "current";
      }

      if (currentSnapshot.unlockedDays.has(normalizedDayKey)) {
        return "available";
      }

      return "locked";
    }

    function buildFeatureCollection() {
      return {
        type: "FeatureCollection",
        features: routeMapSegments.map((segment) => ({
          type: "Feature",
          properties: {
            id: segment.id,
            kind: segment.kind,
            state: getRouteMapSegmentState(segment.day)
          },
          geometry: segment.geometry
        }))
      };
    }

    function addRouteMapLayers() {
      if (!routeMapInstance || routeMapInstance.getSource("route-map-segments")) {
        return;
      }

      const palette = getRouteMapPalette();

      routeMapInstance.addSource("route-map-segments", {
        type: "geojson",
        data: buildFeatureCollection()
      });

      const segmentColorExpression = [
        "match",
        ["get", "state"],
        "complete",
        palette.complete,
        "current",
        palette.current,
        "warning",
        palette.warning,
        "available",
        palette.available,
        palette.locked
      ];
      const segmentOpacityExpression = [
        "match",
        ["get", "state"],
        "complete",
        0.98,
        "current",
        0.94,
        "warning",
        0.9,
        "available",
        0.58,
        0
      ];

      routeMapInstance.addLayer({
        id: "route-map-main-base",
        type: "line",
        source: "route-map-segments",
        filter: ["==", ["get", "kind"], "main"],
        layout: {
          "line-cap": "round",
          "line-join": "round"
        },
        paint: {
          "line-color": "rgba(255, 243, 235, 0.24)",
          "line-width": ["interpolate", ["linear"], ["zoom"], 4, 3.4, 7, 5.4],
          "line-opacity": 0.5
        }
      });

      routeMapInstance.addLayer({
        id: "route-map-main-glow",
        type: "line",
        source: "route-map-segments",
        filter: ["==", ["get", "kind"], "main"],
        layout: {
          "line-cap": "round",
          "line-join": "round"
        },
        paint: {
          "line-color": segmentColorExpression,
          "line-width": ["interpolate", ["linear"], ["zoom"], 4, 7.6, 7, 11.4],
          "line-opacity": ["*", segmentOpacityExpression, 0.28],
          "line-blur": 8
        }
      });

      routeMapInstance.addLayer({
        id: "route-map-main-active",
        type: "line",
        source: "route-map-segments",
        filter: ["==", ["get", "kind"], "main"],
        layout: {
          "line-cap": "round",
          "line-join": "round"
        },
        paint: {
          "line-color": segmentColorExpression,
          "line-width": ["interpolate", ["linear"], ["zoom"], 4, 3.8, 7, 5.8],
          "line-opacity": segmentOpacityExpression
        }
      });

      routeMapInstance.addLayer({
        id: "route-map-branch-base",
        type: "line",
        source: "route-map-segments",
        filter: ["==", ["get", "kind"], "branch"],
        layout: {
          "line-cap": "round",
          "line-join": "round"
        },
        paint: {
          "line-color": "rgba(255, 243, 235, 0.18)",
          "line-width": ["interpolate", ["linear"], ["zoom"], 4, 2.2, 7, 3.4],
          "line-opacity": 0.52,
          "line-dasharray": [0.4, 1.7]
        }
      });

      routeMapInstance.addLayer({
        id: "route-map-branch-active",
        type: "line",
        source: "route-map-segments",
        filter: ["==", ["get", "kind"], "branch"],
        layout: {
          "line-cap": "round",
          "line-join": "round"
        },
        paint: {
          "line-color": segmentColorExpression,
          "line-width": ["interpolate", ["linear"], ["zoom"], 4, 2.7, 7, 3.9],
          "line-opacity": ["*", segmentOpacityExpression, 0.94],
          "line-dasharray": [0.35, 1.75]
        }
      });
    }

    function buildRouteMapPopupContent(stopKey) {
      const stop = routeMapStops[stopKey];

      return `
        <p class="route-map__popup-title">${stop.title[currentSnapshot.language]}</p>
        <p class="route-map__popup-meta">${stop.subtitle[currentSnapshot.language]}</p>
      `;
    }

    function getPreferredDayForStop(stopKey) {
      const config = routeStopProgressConfig[stopKey];
      if (!config) {
        return 1;
      }

      const relevantDays = config.days.filter(
        (day) => currentSnapshot.optionalDaysUnlocked || Number(day) <= 7
      );
      const incompleteUnlockedDay = relevantDays.find(
        (day) =>
          currentSnapshot.unlockedDays.has(day) &&
          !currentSnapshot.completedDays.has(day)
      );
      if (incompleteUnlockedDay) {
        return Number(incompleteUnlockedDay);
      }

      const currentDay = relevantDays.find(
        (day) => day === String(currentSnapshot.currentProgressDay)
      );
      if (currentDay) {
        return Number(currentDay);
      }

      const latestUnlockedDay = [...relevantDays]
        .reverse()
        .find((day) => currentSnapshot.unlockedDays.has(day));

      return Number(latestUnlockedDay || relevantDays[0] || 1);
    }

    function getRouteMapStopState(stopKey) {
      const config = routeStopProgressConfig[stopKey];
      const relevantDays = config.days.filter(
        (day) => currentSnapshot.optionalDaysUnlocked || Number(day) <= 7
      );

      return {
        isComplete:
          relevantDays.length > 0 &&
          relevantDays.every((day) => currentSnapshot.completedDays.has(day)),
        isCurrent: stopKey === routeDayToStopKey[currentSnapshot.currentProgressDay],
        isWarning: relevantDays.some((day) => currentSnapshot.warningDays.has(day)),
        isUnlocked: relevantDays.some((day) => currentSnapshot.unlockedDays.has(day)),
        hasProgress: relevantDays.some(
          (day) => Number(currentSnapshot.dayProgress[String(day)] || 0) > 0
        )
      };
    }

    function createRouteMapMarkers(maplibregl) {
      if (!routeMapInstance) {
        return;
      }

      routeMapMarkers.forEach(({ marker }) => marker.remove());
      routeMapMarkers = new Map();

      Object.entries(routeMapStops).forEach(([stopKey, stop]) => {
        const markerElement = document.createElement("button");
        markerElement.type = "button";
        markerElement.className = "route-map__marker";
        markerElement.setAttribute("aria-label", stop.title[currentSnapshot.language]);

        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 18,
          className: "route-map__popup"
        });

        const marker = new maplibregl.Marker({
          element: markerElement,
          anchor: "center"
        })
          .setLngLat(stop.coordinates)
          .addTo(routeMapInstance);

        const showPopup = () => {
          markerElement.classList.add("is-hovered");
          popup
            .setLngLat(stop.coordinates)
            .setHTML(buildRouteMapPopupContent(stopKey))
            .addTo(routeMapInstance);
        };

        const hidePopup = () => {
          markerElement.classList.remove("is-hovered");
          popup.remove();
        };

        markerElement.addEventListener("mouseenter", showPopup);
        markerElement.addEventListener("mouseleave", hidePopup);
        markerElement.addEventListener("focus", showPopup);
        markerElement.addEventListener("blur", hidePopup);
        markerElement.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();

          const targetDay = getPreferredDayForStop(stopKey);
          if (
            targetDay > currentSnapshot.accessibleDay ||
            !currentSnapshot.unlockedDays.has(String(targetDay))
          ) {
            if (typeof onShowSequenceNotice === "function") {
              onShowSequenceNotice(currentSnapshot.accessibleDay);
            }
            return;
          }

          hidePopup();
          if (typeof onScrollToDay === "function") {
            onScrollToDay(targetDay);
          }
        });

        markerElement.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            markerElement.click();
          }
        });

        routeMapMarkers.set(stopKey, { marker, markerElement, popup });
      });
    }

    function fitRouteMapBounds(animate) {
      if (!routeMapInstance || !window.maplibregl) {
        return;
      }

      const bounds = new window.maplibregl.LngLatBounds();
      Object.values(routeMapStops).forEach((stop) => bounds.extend(stop.coordinates));

      routeMapInstance.fitBounds(bounds, {
        padding: { top: 36, right: 34, bottom: 40, left: 34 },
        duration: animate ? 780 : 0,
        maxZoom: 6.25
      });
      routeMapHasFittedBounds = true;
    }

    function getViewportSize() {
      if (!canvas) {
        return { width: 0, height: 0 };
      }

      return {
        width: Math.round(canvas.clientWidth),
        height: Math.round(canvas.clientHeight)
      };
    }

    function resize(options) {
      const { force = false, fit = false } = options || {};
      if (!routeMapInstance || !routeMapLiveReady) {
        return;
      }

      const nextSize = getViewportSize();
      if (!nextSize.width || !nextSize.height) {
        return;
      }

      const sizeChanged =
        force ||
        nextSize.width !== routeMapViewportSize.width ||
        nextSize.height !== routeMapViewportSize.height;

      if (!sizeChanged && !(fit && !routeMapHasFittedBounds)) {
        return;
      }

      routeMapViewportSize = nextSize;
      routeMapInstance.resize();

      if (fit || !routeMapHasFittedBounds) {
        fitRouteMapBounds(false);
      }
    }

    function setInteractive(isInteractive) {
      routeMapInteractive = Boolean(isInteractive);
      routeMapDragArmed = false;
      routeMapDragPointerId = null;

      surface?.classList.toggle("is-interactive", routeMapInteractive);
      panel?.parentElement?.classList.toggle("is-map-interactive", routeMapInteractive);

      if (!routeMapInstance) {
        return;
      }

      if (routeMapInteractive) {
        routeMapInstance.scrollZoom.enable();
        routeMapInstance.dragPan.enable();
        routeMapInstance.boxZoom.enable();
        routeMapInstance.doubleClickZoom.enable();
        routeMapInstance.keyboard.enable();
        routeMapInstance.touchZoomRotate.enable();
        routeMapInstance.touchZoomRotate.disableRotation();
        return;
      }

      routeMapInstance.scrollZoom.disable();
      routeMapInstance.dragPan.disable();
      routeMapInstance.boxZoom.disable();
      routeMapInstance.doubleClickZoom.disable();
      routeMapInstance.keyboard.disable();
      routeMapInstance.touchZoomRotate.disable();
    }

    function armDrag(pointerId) {
      routeMapDragArmed = true;
      routeMapDragPointerId = pointerId;

      if (!routeMapInstance || routeMapInteractive) {
        return;
      }

      routeMapInstance.dragPan.enable();
      routeMapInstance.touchZoomRotate.enable();
      routeMapInstance.touchZoomRotate.disableRotation();
    }

    function disarmDrag(pointerId) {
      if (!routeMapDragArmed) {
        return;
      }

      if (
        pointerId !== null &&
        pointerId !== undefined &&
        routeMapDragPointerId !== null &&
        routeMapDragPointerId !== pointerId
      ) {
        return;
      }

      routeMapDragArmed = false;
      routeMapDragPointerId = null;

      if (!routeMapInstance || routeMapInteractive) {
        return;
      }

      routeMapInstance.dragPan.disable();
      routeMapInstance.touchZoomRotate.disable();
    }

    function sync(snapshot) {
      currentSnapshot = normalizeState(snapshot || (typeof getState === "function" ? getState() : {}));

      if (!routeMapInstance) {
        return;
      }

      const source = routeMapInstance.getSource("route-map-segments");
      if (source) {
        source.setData(buildFeatureCollection());
      }

      routeMapMarkers.forEach(({ markerElement, popup }, stopKey) => {
        const { isComplete, isCurrent, isWarning, isUnlocked, hasProgress } =
          getRouteMapStopState(stopKey);
        const stop = routeMapStops[stopKey];

        markerElement.classList.toggle("is-complete", isComplete);
        markerElement.classList.toggle("is-current", isCurrent);
        markerElement.classList.toggle("is-warning", isWarning);
        markerElement.classList.toggle("is-locked", !isUnlocked);
        markerElement.classList.toggle("is-progress", hasProgress && !isComplete && !isWarning);
        markerElement.setAttribute("aria-label", stop.title[currentSnapshot.language]);

        if (popup.isOpen()) {
          popup.setHTML(buildRouteMapPopupContent(stopKey));
        }
      });
    }

    function refreshTheme(snapshot) {
      currentSnapshot = normalizeState(snapshot || (typeof getState === "function" ? getState() : {}));

      if (!routeMapInstance || !window.maplibregl) {
        return;
      }

      const currentCenter = routeMapInstance.getCenter();
      const currentZoom = routeMapInstance.getZoom();
      const currentBearing = routeMapInstance.getBearing();
      const currentPitch = routeMapInstance.getPitch();

      routeMapInstance.once("style.load", () => {
        addRouteMapLayers();
        createRouteMapMarkers(window.maplibregl);
        routeMapInstance.jumpTo({
          center: currentCenter,
          zoom: currentZoom,
          bearing: currentBearing,
          pitch: currentPitch
        });
        sync(currentSnapshot);
      });

      routeMapInstance.setStyle(buildRouteMapStyle());
    }

    function initializeRouteMap() {
      if (!canvas) {
        return Promise.resolve(null);
      }

      if (routeMapInstance) {
        return Promise.resolve(routeMapInstance);
      }

      if (routeMapInitializationPromise) {
        return routeMapInitializationPromise;
      }

      notifyStatus("loading");

      routeMapInitializationPromise = ensureMapAssets()
        .then((maplibregl) => new Promise((resolve, reject) => {
          let didSettle = false;

          const settleSuccess = () => {
            if (didSettle) {
              return false;
            }

            didSettle = true;
            window.clearTimeout(loadTimeoutId);
            return true;
          };

          const settleError = (error) => {
            if (didSettle) {
              return;
            }

            didSettle = true;
            window.clearTimeout(loadTimeoutId);
            notifyStatus("error");
            reject(error);
          };

          const loadTimeoutId = window.setTimeout(() => {
            settleError(new Error("Map load timed out."));
          }, assetUrls.loadTimeoutMs);

          routeMapInstance = new maplibregl.Map({
            container: canvas,
            style: buildRouteMapStyle(),
            center: [137.52, 35.21],
            zoom: 5.25,
            minZoom: 4.65,
            maxZoom: 9,
            attributionControl: false,
            dragRotate: false,
            preserveDrawingBuffer: false
          });

          routeMapInstance.addControl(
            new maplibregl.AttributionControl({ compact: true }),
            "bottom-right"
          );
          routeMapInstance.addControl(
            new maplibregl.NavigationControl({
              showCompass: false,
              visualizePitch: false
            }),
            "top-right"
          );
          routeMapInstance.dragRotate.disable();
          routeMapInstance.touchZoomRotate.disableRotation();
          setInteractive(false);
          routeMapInstance.on("dragstart", () => {
            if (!routeMapInteractive) {
              setInteractive(true);
            }
          });

          routeMapInstance.once("load", async () => {
            try {
              routeMapSegments = await loadRouteMapSegments();
              addRouteMapLayers();
              createRouteMapMarkers(maplibregl);
              sync(currentSnapshot);
              if (!settleSuccess()) {
                return;
              }
              resolve(routeMapInstance);
            } catch (error) {
              settleError(error);
            }
          });
        }))
        .catch((error) => {
          if (routeMapInstance) {
            routeMapInstance.remove();
          }

          routeMapInitializationPromise = null;
          routeMapInstance = null;
          setLiveReady(false);
          notifyStatus("error");
          throw error;
        });

      return routeMapInitializationPromise;
    }

    function loadInteractive(snapshot) {
      currentSnapshot = normalizeState(snapshot || (typeof getState === "function" ? getState() : {}));

      if (routeMapLiveReady) {
        resize({ force: true, fit: true });
        setInteractive(false);
        sync(currentSnapshot);
        return Promise.resolve(api);
      }

      return initializeRouteMap().then(() => {
        setLiveReady(true);
        resize({ force: true, fit: true });
        setInteractive(false);
        sync(currentSnapshot);
        return api;
      });
    }

    if (surface) {
      surface.addEventListener(
        "pointerdown",
        (event) => {
          if (event.button !== 0 || !event.isPrimary || routeMapInteractive || !routeMapLiveReady) {
            return;
          }

          armDrag(event.pointerId);
        },
        { capture: true }
      );

      surface.addEventListener("pointerup", (event) => {
        if (!routeMapInteractive) {
          disarmDrag(event.pointerId);
        }
      });

      surface.addEventListener("pointercancel", (event) => {
        if (!routeMapInteractive) {
          disarmDrag(event.pointerId);
        }
      });

      surface.addEventListener("pointerleave", (event) => {
        if (routeMapInteractive) {
          if (event.buttons !== 0) {
            return;
          }

          setInteractive(false);
          return;
        }

        if (event.buttons === 0) {
          disarmDrag();
        }
      });
    }

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && routeMapInteractive) {
        setInteractive(false);
      }
    });

    document.addEventListener("pointerdown", (event) => {
      if (!routeMapInteractive || !surface) {
        return;
      }

      if (!surface.contains(event.target)) {
        setInteractive(false);
      }
    });

    document.addEventListener("pointerup", (event) => {
      if (routeMapInteractive && surface && !surface.contains(event.target)) {
        setInteractive(false);
        return;
      }

      if (!routeMapInteractive) {
        disarmDrag(event.pointerId);
      }
    });

    document.addEventListener("pointercancel", (event) => {
      if (routeMapInteractive) {
        setInteractive(false);
        return;
      }

      if (!routeMapInteractive) {
        disarmDrag(event.pointerId);
      }
    });

    window.addEventListener(
      "scroll",
      () => {
        if (routeMapInteractive) {
          setInteractive(false);
        }
      },
      { passive: true }
    );

    const api = {
      isLiveReady() {
        return routeMapLiveReady;
      },
      loadInteractive,
      refreshTheme,
      resize,
      setInteractive,
      sync
    };

    return api;
  };
})();
