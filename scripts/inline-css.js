const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const indexPath = path.join(repoRoot, "docs", "index.html");
const cssPath = path.join(repoRoot, "docs", "style.min.css");

const startMarker = "<!-- build:inline-style:start -->";
const endMarker = "<!-- build:inline-style:end -->";

const html = fs.readFileSync(indexPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8").trim();

const styleBlock = `${startMarker}\n  <style data-inline-style>${css}</style>\n  ${endMarker}`;

if (!html.includes(startMarker) || !html.includes(endMarker)) {
  throw new Error("Inline style markers not found in docs/index.html");
}

const nextHtml = html.replace(
  new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`),
  styleBlock
);

fs.writeFileSync(indexPath, nextHtml);
