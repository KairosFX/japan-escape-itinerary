const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const indexPath = path.join(repoRoot, "docs", "index.html");
const cssPath = path.join(repoRoot, "docs", "style.min.css");
const jsPath = path.join(repoRoot, "docs", "script.min.js");

const styleStartMarker = "<!-- build:inline-style:start -->";
const styleEndMarker = "<!-- build:inline-style:end -->";
const scriptStartMarker = "<!-- build:inline-script:start -->";
const scriptEndMarker = "<!-- build:inline-script:end -->";

const html = fs.readFileSync(indexPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8").trim();
const js = fs
  .readFileSync(jsPath, "utf8")
  .trim()
  .replace(/<\/script/gi, "<\\/script");

const styleBlock = `${styleStartMarker}\n  <style data-inline-style>${css}</style>\n  ${styleEndMarker}`;
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

const nextHtml = replaceBlock(
  withInlineStyle,
  scriptStartMarker,
  scriptEndMarker,
  scriptBlock,
  "Inline script"
);

fs.writeFileSync(indexPath, nextHtml);
