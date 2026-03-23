const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const docsDir = path.join(repoRoot, "docs");
const indexPath = path.join(docsDir, "index.html");
const snapshotPath = path.join(docsDir, "japan-escape-itinerary-offline.html");
const routePreviewPath = path.join(docsDir, "assets", "route-map-preview.svg");

function stripHeadTag(documentHtml, pattern) {
  return documentHtml.replace(pattern, "");
}

let html = fs.readFileSync(indexPath, "utf8");
const routePreviewSvg = fs.readFileSync(routePreviewPath, "utf8");
const routePreviewDataUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(routePreviewSvg)}`;

html = html.replace("<html lang=\"en\">", "<html lang=\"en\" data-offline-snapshot=\"true\">");
html = html.replace('src="./assets/route-map-preview.svg"', `src="${routePreviewDataUrl}"`);
html = stripHeadTag(html, /\s*<link rel="manifest" href="\.\/manifest\.webmanifest">\r?\n/g);
html = stripHeadTag(
  html,
  /\s*<link rel="apple-touch-icon" sizes="180x180" href="\.\/assets\/icons\/apple-touch-icon\.png">\r?\n/g
);
html = stripHeadTag(html, /\s*<meta name="apple-mobile-web-app-capable" content="yes">\r?\n/g);
html = stripHeadTag(html, /\s*<meta name="apple-mobile-web-app-title" content="Japan Escape">\r?\n/g);
html = stripHeadTag(
  html,
  /\s*<meta name="apple-mobile-web-app-status-bar-style" content="default">\r?\n/g
);

fs.writeFileSync(snapshotPath, html);
