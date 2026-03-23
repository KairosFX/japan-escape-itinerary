const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const indexPath = path.join(repoRoot, "docs", "index.html");
const cssPath = path.join(repoRoot, "docs", "style.min.css");
const jsPath = path.join(repoRoot, "docs", "script.min.js");
const bookingTransitDataPath = path.join(
  repoRoot,
  "docs",
  "assets",
  "data",
  "booking-transit-items.json"
);
const transitDetailsDataPath = path.join(
  repoRoot,
  "docs",
  "assets",
  "data",
  "transit-details.json"
);

const styleStartMarker = "<!-- build:inline-style:start -->";
const styleEndMarker = "<!-- build:inline-style:end -->";
const dataStartMarker = "<!-- build:inline-data:start -->";
const dataEndMarker = "<!-- build:inline-data:end -->";
const scriptStartMarker = "<!-- build:inline-script:start -->";
const scriptEndMarker = "<!-- build:inline-script:end -->";

const html = fs.readFileSync(indexPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8").trim();
const bookingTransitData = fs
  .readFileSync(bookingTransitDataPath, "utf8")
  .trim()
  .replace(/<\/script/gi, "<\\/script");
const transitDetailsData = fs
  .readFileSync(transitDetailsDataPath, "utf8")
  .trim()
  .replace(/<\/script/gi, "<\\/script");
const js = fs
  .readFileSync(jsPath, "utf8")
  .trim()
  .replace(/<\/script/gi, "<\\/script");

const styleBlock = `${styleStartMarker}\n  <style data-inline-style>${css}</style>\n  ${styleEndMarker}`;
const dataBlock = `${dataStartMarker}\n  <script type="application/json" data-booking-transit-inline>${bookingTransitData}</script>\n  <script type="application/json" data-transit-details-inline>${transitDetailsData}</script>\n  ${dataEndMarker}`;
const scriptBlock = `${scriptStartMarker}\n  <script data-inline-script>${js}</script>\n  ${scriptEndMarker}`;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceBlock(documentHtml, startMarker, endMarker, nextBlock, label) {
  if (!documentHtml.includes(startMarker) || !documentHtml.includes(endMarker)) {
    throw new Error(`${label} markers not found in docs/index.html`);
  }

  return documentHtml.replace(
    new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`),
    () => nextBlock
  );
}

const withInlineStyle = replaceBlock(
  html,
  styleStartMarker,
  styleEndMarker,
  styleBlock,
  "Inline style"
);

const withInlineData = replaceBlock(
  withInlineStyle,
  dataStartMarker,
  dataEndMarker,
  dataBlock,
  "Inline data"
);

const nextHtml = replaceBlock(
  withInlineData,
  scriptStartMarker,
  scriptEndMarker,
  scriptBlock,
  "Inline script"
);

fs.writeFileSync(indexPath, nextHtml);
