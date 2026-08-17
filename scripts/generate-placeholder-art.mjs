// Generates the branded placeholder illustrations used across /public/images
// until real photography is available. Re-run with `node scripts/generate-placeholder-art.mjs`
// after editing this file if you add new menu items and want matching art.
// To go live with real photos: just drop a photo with the same filename (and
// extension) into public/images/menu or public/images/gallery — nothing in
// the components needs to change, since they reference paths from /data.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MENU_DIR = path.join(ROOT, "public/images/menu");
const GALLERY_DIR = path.join(ROOT, "public/images/gallery");

mkdirSync(MENU_DIR, { recursive: true });
mkdirSync(GALLERY_DIR, { recursive: true });

const PALETTE = {
  paper: "#F7F1E4",
  paperDim: "#EFE4CC",
  card: "#FFFBF1",
  ink: "#241712",
  inkSoft: "#55443A",
  brick: "#C22F1D",
  brickDark: "#8F2214",
  brickLight: "#E3573C",
  pine: "#2B4634",
  pineDark: "#182A1F",
  pineLight: "#4B6F55",
  mustard: "#E8A93E",
  mustardDark: "#C4841F",
  dough: "#EAC784",
  doughDark: "#D9AE5F",
};

const ACCENTS = [PALETTE.brick, PALETTE.pine, PALETTE.mustard, PALETTE.brickLight];

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

function write(dir, filename, svg) {
  writeFileSync(path.join(dir, filename), svg.trim() + "\n", "utf8");
}

function svgWrap(width, height, bg, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}" />
  ${body}
</svg>`;
}

// ---------- Pizza icon (menu cards, 4:3) ----------
function pizzaIcon(seed) {
  const rand = hashSeed(seed);
  const w = 640;
  const h = 480;
  const cx = w / 2;
  const cy = h / 2 + 6;
  const r = 168;
  const accent = ACCENTS[Math.floor(rand() * ACCENTS.length)];
  const accent2 = ACCENTS[Math.floor(rand() * ACCENTS.length)];
  const rotation = Math.floor(rand() * 24) - 12;
  const toppingCount = 10 + Math.floor(rand() * 10);

  const cuts = Array.from({ length: 8 }, (_, i) => {
    const angle = (Math.PI / 4) * i;
    const x2 = cx + Math.cos(angle) * r;
    const y2 = cy + Math.sin(angle) * r;
    return `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(
      1
    )}" stroke="${PALETTE.doughDark}" stroke-width="2.5" opacity="0.55" />`;
  }).join("\n    ");

  const toppings = Array.from({ length: toppingCount }, () => {
    const a = rand() * Math.PI * 2;
    const dist = rand() * (r - 40);
    const x = cx + Math.cos(a) * dist;
    const y = cy + Math.sin(a) * dist;
    const size = 6 + rand() * 8;
    const color = rand() > 0.5 ? accent : accent2;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${size.toFixed(
      1
    )}" fill="${color}" opacity="0.9" />`;
  }).join("\n    ");

  const body = `
  <g transform="rotate(${rotation} ${cx} ${cy})">
    <ellipse cx="${cx}" cy="${cy + r + 18}" rx="${r + 10}" ry="18" fill="${
    PALETTE.ink
  }" opacity="0.12" />
    <circle cx="${cx}" cy="${cy}" r="${r + 14}" fill="${PALETTE.dough}" />
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${PALETTE.doughDark}" opacity="0.35" />
    <circle cx="${cx}" cy="${cy}" r="${r - 8}" fill="${accent}" opacity="0.16" />
    <circle cx="${cx}" cy="${cy}" r="${r - 22}" fill="${PALETTE.mustard}" opacity="0.28" />
    ${toppings}
    ${cuts}
    <circle cx="${cx}" cy="${cy}" r="${
    r + 14
  }" fill="none" stroke="${PALETTE.ink}" stroke-opacity="0.08" stroke-width="3" />
  </g>`;

  return svgWrap(w, h, PALETTE.paperDim, body);
}

// ---------- Pasta icon ----------
function pastaIcon(seed) {
  const rand = hashSeed(seed);
  const w = 640;
  const h = 480;
  const cx = w / 2;
  const cy = h / 2 + 10;
  const rx = 190;
  const ry = 130;
  const accent = ACCENTS[Math.floor(rand() * ACCENTS.length)];

  const swirls = Array.from({ length: 5 }, (_, i) => {
    const offset = i * 14 - 28;
    return `<path d="M ${cx - 110} ${cy + offset} C ${cx - 40} ${
      cy + offset - 40
    }, ${cx + 40} ${cy + offset + 40}, ${cx + 110} ${
      cy + offset
    }" stroke="${PALETTE.mustard}" stroke-width="10" fill="none" stroke-linecap="round" opacity="${(
      0.5 + i * 0.08
    ).toFixed(2)}" />`;
  }).join("\n    ");

  const dots = Array.from({ length: 8 }, () => {
    const a = rand() * Math.PI * 2;
    const dist = rand() * 90;
    const x = cx + Math.cos(a) * dist;
    const y = cy + Math.sin(a) * dist * 0.6;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(
      4 + rand() * 5
    ).toFixed(1)}" fill="${accent}" />`;
  }).join("\n    ");

  const body = `
  <ellipse cx="${cx}" cy="${cy + ry - 6}" rx="${rx + 20}" ry="24" fill="${
    PALETTE.ink
  }" opacity="0.1" />
  <ellipse cx="${cx}" cy="${cy}" rx="${rx + 16}" ry="${
    ry + 16
  }" fill="${PALETTE.card}" stroke="${PALETTE.inkSoft}" stroke-opacity="0.25" stroke-width="6" />
  <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${
    PALETTE.dough
  }" opacity="0.35" />
  ${swirls}
  ${dots}`;

  return svgWrap(w, h, PALETTE.paperDim, body);
}

// ---------- Drink icon ----------
function drinkIcon(seed, kind) {
  const rand = hashSeed(seed);
  const w = 640;
  const h = 480;
  const cx = w / 2;
  const accent = ACCENTS[Math.floor(rand() * ACCENTS.length)];

  let body = "";
  if (kind === "jarra") {
    body = `
    <ellipse cx="${cx}" cy="392" rx="120" ry="16" fill="${PALETTE.ink}" opacity="0.1" />
    <path d="M ${cx - 90} 140 L ${cx - 70} 360 Q ${cx} 385 ${cx + 70} 360 L ${
      cx + 90
    } 140 Z" fill="${accent}" opacity="0.85" />
    <path d="M ${cx - 90} 140 L ${cx + 90} 140 L ${cx + 82} 190 L ${
      cx - 82
    } 190 Z" fill="${PALETTE.card}" opacity="0.5" />
    <path d="M ${cx + 90} 200 q 60 20 4 130" stroke="${
      PALETTE.inkSoft
    }" stroke-width="14" fill="none" opacity="0.4" />
    `;
  } else if (kind === "agua") {
    body = `
    <ellipse cx="${cx}" cy="392" rx="70" ry="14" fill="${PALETTE.ink}" opacity="0.1" />
    <path d="M ${cx - 55} 150 L ${cx - 48} 360 Q ${cx} 380 ${cx + 48} 360 L ${
      cx + 55
    } 150 Z" fill="${PALETTE.card}" stroke="${accent}" stroke-width="6" opacity="0.9" />
    `;
  } else {
    body = `
    <ellipse cx="${cx}" cy="392" rx="80" ry="14" fill="${PALETTE.ink}" opacity="0.1" />
    <path d="M ${cx - 20} 100 h 40 v 40 l 30 30 v 190 q 0 20 -20 20 h -60 q -20 0 -20 -20 V 170 l 30 -30 Z" fill="${accent}" opacity="0.85" />
    <rect x="${cx - 50}" y="230" width="100" height="18" fill="${
      PALETTE.card
    }" opacity="0.85" />
    `;
  }

  return svgWrap(w, h, PALETTE.paperDim, body);
}

// ---------- Hot drink icon ----------
function hotDrinkIcon(seed) {
  const rand = hashSeed(seed);
  const w = 640;
  const h = 480;
  const cx = w / 2;
  const accent = ACCENTS[Math.floor(rand() * ACCENTS.length)];
  const body = `
  <ellipse cx="${cx}" cy="360" rx="110" ry="16" fill="${PALETTE.ink}" opacity="0.1" />
  <path d="M ${cx - 100} 220 h 200 v 90 q 0 60 -100 60 q -100 0 -100 -60 Z" fill="${accent}" opacity="0.85" />
  <path d="M ${cx + 100} 240 q 50 10 30 60 q -20 40 -50 30" stroke="${
    PALETTE.inkSoft
  }" stroke-width="12" fill="none" opacity="0.5" />
  <path d="M ${cx - 40} 190 q 10 -30 -6 -50" stroke="${
    PALETTE.card
  }" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.7" />
  <path d="M ${cx + 10} 190 q 10 -30 -6 -50" stroke="${
    PALETTE.card
  }" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.7" />`;
  return svgWrap(w, h, PALETTE.paperDim, body);
}

// ---------- Bread icon ----------
function breadIcon(seed, hasCheese, hasHam) {
  const w = 640;
  const h = 480;
  const cx = w / 2;
  const cy = h / 2 + 10;
  const scores = [0, 1, 2, 3].map((i) => {
    const x = cx - 90 + i * 60;
    return `<path d="M ${x} ${cy - 60} q 10 60 0 120" stroke="${
      PALETTE.doughDark
    }" stroke-width="4" fill="none" opacity="0.5" />`;
  });
  const cheese = hasCheese
    ? Array.from({ length: 10 }, (_, i) => {
        const x = cx - 120 + ((i * 97) % 240);
        const y = cy - 40 + ((i * 53) % 90);
        return `<circle cx="${x}" cy="${y}" r="6" fill="${PALETTE.mustard}" opacity="0.85" />`;
      }).join("\n    ")
    : "";
  const ham = hasHam
    ? `<rect x="${cx - 60}" y="${cy + 20}" width="120" height="22" rx="8" fill="${
        PALETTE.brick
      }" opacity="0.8" />`
    : "";

  const body = `
  <ellipse cx="${cx}" cy="${cy + 100}" rx="180" ry="20" fill="${
    PALETTE.ink
  }" opacity="0.1" />
  <rect x="${cx - 200}" y="${cy - 70}" width="400" height="150" rx="60" fill="${
    PALETTE.dough
  }" />
  <rect x="${cx - 200}" y="${cy - 70}" width="400" height="150" rx="60" fill="${
    PALETTE.doughDark
  }" opacity="0.18" />
  ${scores.join("\n  ")}
  ${cheese}
  ${ham}`;

  return svgWrap(w, h, PALETTE.paperDim, body);
}

// ---------- Promo icon ----------
function promoIcon(seed, style) {
  const w = 640;
  const h = 480;
  const cx = w / 2;
  const cy = h / 2;
  let body = "";
  if (style === "x2") {
    body = `
    <circle cx="${cx - 90}" cy="${cy}" r="130" fill="${PALETTE.dough}" />
    <circle cx="${cx - 90}" cy="${cy}" r="90" fill="${PALETTE.brick}" opacity="0.3" />
    <circle cx="${cx + 90}" cy="${cy}" r="130" fill="${PALETTE.dough}" opacity="0.85" />
    <circle cx="${cx + 90}" cy="${cy}" r="90" fill="${PALETTE.mustard}" opacity="0.4" />
    <text x="${cx}" y="${cy + 24}" text-anchor="middle" font-family="Georgia, serif" font-size="120" font-weight="700" fill="${
      PALETTE.card
    }">x2</text>`;
  } else {
    body = `
    <circle cx="${cx - 70}" cy="${cy - 20}" r="130" fill="${PALETTE.dough}" />
    <circle cx="${cx - 70}" cy="${cy - 20}" r="90" fill="${PALETTE.brick}" opacity="0.3" />
    <ellipse cx="${cx + 110}" cy="${cy + 40}" rx="150" ry="100" fill="${
      PALETTE.card
    }" stroke="${PALETTE.inkSoft}" stroke-opacity="0.25" stroke-width="6" />
    <path d="M ${cx + 10} ${cy + 40} C ${cx + 60} ${cy}, ${cx + 160} ${
      cy + 80
    }, ${cx + 210} ${cy + 40}" stroke="${
      PALETTE.mustard
    }" stroke-width="8" fill="none" stroke-linecap="round" />`;
  }
  return svgWrap(w, h, PALETTE.paperDim, body);
}

// ---------- Gallery pieces ----------
function ovenGallery() {
  const w = 900;
  const h = 1100;
  const cx = w / 2;
  const body = `
  <path d="M ${cx - 260} 900 L ${cx - 260} 500 Q ${cx - 260} 260 ${cx} 260 Q ${
    cx + 260
  } 260 ${cx + 260} 500 L ${cx + 260} 900 Z" fill="${PALETTE.brickDark}" opacity="0.9" />
  <path d="M ${cx - 190} 900 L ${cx - 190} 520 Q ${cx - 190} 340 ${cx} 340 Q ${
    cx + 190
  } 340 ${cx + 190} 520 L ${cx + 190} 900 Z" fill="${PALETTE.ink}" />
  <path d="M ${cx - 130} 900 L ${cx - 130} 560 Q ${cx - 130} 420 ${cx} 420 Q ${
    cx + 130
  } 420 ${cx + 130} 560 L ${cx + 130} 900 Z" fill="${PALETTE.brick}" opacity="0.9" />
  <path d="M ${cx - 70} 900 L ${cx - 70} 620 Q ${cx - 70} 520 ${cx} 520 Q ${
    cx + 70
  } 520 ${cx + 70} 620 L ${cx + 70} 900 Z" fill="${PALETTE.mustard}" opacity="0.95" />
  <path d="M ${cx - 30} 900 C ${cx - 40} 780, ${cx + 30} 760, ${cx} 650 C ${
    cx - 10
  } 780, ${cx + 40} 800, ${cx} 900 Z" fill="${PALETTE.mustardDark}" opacity="0.9" />`;
  return svgWrap(w, h, PALETTE.ink, body);
}

function doughGallery() {
  const w = 900;
  const h = 700;
  const cx = w / 2;
  const cy = h / 2;
  const rand = hashSeed("masa-fresca");
  const flour = Array.from({ length: 40 }, () => {
    const x = rand() * w;
    const y = rand() * h;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(
      1 + rand() * 2.5
    ).toFixed(1)}" fill="${PALETTE.paper}" opacity="0.7" />`;
  }).join("\n  ");
  const body = `
  <ellipse cx="${cx}" cy="${cy}" rx="320" ry="240" fill="${PALETTE.dough}" />
  <ellipse cx="${cx}" cy="${cy}" rx="320" ry="240" fill="${PALETTE.doughDark}" opacity="0.18" />
  <ellipse cx="${cx - 60}" cy="${cy - 40}" rx="140" ry="90" fill="${
    PALETTE.dough
  }" opacity="0.6" />
  ${flour}`;
  return svgWrap(w, h, PALETTE.paperDim, body);
}

function cutGallery() {
  const w = 900;
  const h = 700;
  const cx = w / 2;
  const cy = h / 2;
  const r = 260;
  const cuts = Array.from({ length: 8 }, (_, i) => {
    const angle = (Math.PI / 4) * i;
    const x2 = cx + Math.cos(angle) * r;
    const y2 = cy + Math.sin(angle) * r;
    return `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(
      1
    )}" stroke="${PALETTE.ink}" stroke-width="5" opacity="0.5" />`;
  }).join("\n  ");
  const body = `
  <circle cx="${cx}" cy="${cy}" r="${r + 20}" fill="${PALETTE.dough}" />
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${PALETTE.brick}" opacity="0.25" />
  <circle cx="${cx}" cy="${cy}" r="${r - 30}" fill="${PALETTE.mustard}" opacity="0.35" />
  ${cuts}
  <circle cx="${cx}" cy="${cy}" r="14" fill="${PALETTE.ink}" opacity="0.6" />`;
  return svgWrap(w, h, PALETTE.paperDim, body);
}

function ingredientsGallery() {
  const w = 900;
  const h = 700;
  const rand = hashSeed("ingredientes-frescos");
  const shapes = Array.from({ length: 22 }, () => {
    const x = 60 + rand() * (w - 120);
    const y = 60 + rand() * (h - 120);
    const r = 18 + rand() * 30;
    const color = ACCENTS[Math.floor(rand() * ACCENTS.length)];
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(
      1
    )}" fill="${color}" opacity="${(0.55 + rand() * 0.3).toFixed(2)}" />`;
  }).join("\n  ");
  return svgWrap(w, h, PALETTE.card, shapes);
}

function tableGallery() {
  const w = 900;
  const h = 1100;
  const rand = hashSeed("mesa-compartida");
  const plates = Array.from({ length: 4 }, () => {
    const x = 150 + rand() * (w - 300);
    const y = 150 + rand() * (h - 300);
    const r = 90 + rand() * 40;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(
      1
    )}" fill="${PALETTE.card}" stroke="${
      PALETTE.inkSoft
    }" stroke-opacity="0.2" stroke-width="6" />
    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(
      r * 0.6
    ).toFixed(1)}" fill="${PALETTE.brick}" opacity="0.25" />`;
  }).join("\n  ");
  return svgWrap(w, h, PALETTE.paperDim, plates);
}

function deliveryGallery() {
  const w = 900;
  const h = 700;
  const cx = w / 2;
  const cy = h / 2;
  const body = `
  <rect x="${cx - 130}" y="${cy - 90}" width="260" height="200" rx="18" fill="${
    PALETTE.brick
  }" />
  <rect x="${cx - 130}" y="${cy - 90}" width="260" height="40" fill="${
    PALETTE.brickDark
  }" opacity="0.6" />
  <rect x="${cx - 30}" y="${cy - 130}" width="60" height="50" rx="10" fill="${
    PALETTE.ink
  }" opacity="0.7" />
  <path d="M ${cx - 220} ${cy + 40} h 60 M ${cx - 240} ${cy + 80} h 80 M ${
    cx - 200
  } ${cy + 120} h 50" stroke="${PALETTE.mustard}" stroke-width="10" stroke-linecap="round" />`;
  return svgWrap(w, h, PALETTE.paperDim, body);
}

// ---------- Hero + OG ----------
function heroPizza() {
  const w = 900;
  const h = 900;
  const cx = w / 2;
  const cy = h / 2;
  const r = 320;
  const rand = hashSeed("hero-pizza");
  const cuts = Array.from({ length: 8 }, (_, i) => {
    const angle = (Math.PI / 4) * i;
    const x2 = cx + Math.cos(angle) * r;
    const y2 = cy + Math.sin(angle) * r;
    return `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(
      1
    )}" stroke="${PALETTE.ink}" stroke-width="6" opacity="0.4" />`;
  }).join("\n  ");
  const toppings = Array.from({ length: 26 }, () => {
    const a = rand() * Math.PI * 2;
    const dist = rand() * (r - 60);
    const x = cx + Math.cos(a) * dist;
    const y = cy + Math.sin(a) * dist;
    const color = rand() > 0.5 ? PALETTE.brickDark : PALETTE.pineLight;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(
      9 + rand() * 10
    ).toFixed(1)}" fill="${color}" />`;
  }).join("\n  ");
  const body = `
  <circle cx="${cx}" cy="${cy}" r="${r + 30}" fill="${PALETTE.dough}" />
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${PALETTE.mustard}" opacity="0.9" />
  <circle cx="${cx}" cy="${cy}" r="${r - 40}" fill="${PALETTE.brick}" opacity="0.25" />
  ${toppings}
  ${cuts}
  <circle cx="${cx}" cy="${cy}" r="${
    r + 30
  }" fill="none" stroke="${PALETTE.paper}" stroke-opacity="0.15" stroke-width="10" />`;
  return svgWrap(w, h, PALETTE.brick, body);
}

function ogCover() {
  const w = 1200;
  const h = 630;
  const body = `
  <circle cx="1020" cy="120" r="220" fill="${PALETTE.mustard}" opacity="0.25" />
  <circle cx="120" cy="560" r="180" fill="${PALETTE.pine}" opacity="0.18" />
  <circle cx="220" cy="315" r="150" fill="${PALETTE.dough}" />
  <circle cx="220" cy="315" r="110" fill="${PALETTE.brick}" opacity="0.3" />
  <text x="420" y="290" font-family="Georgia, serif" font-size="72" font-weight="700" fill="${PALETTE.ink}">Pizza's JAMM</text>
  <text x="420" y="350" font-family="Georgia, serif" font-size="30" fill="${PALETTE.brick}" font-style="italic">La pizza que junta a Comas en una mesa.</text>
  <text x="420" y="410" font-family="Arial, sans-serif" font-size="22" fill="${PALETTE.inkSoft}">Sede Belaúnde · Sede Puno — Todos los días 3pm a 11pm</text>`;
  return svgWrap(w, h, PALETTE.paper, body);
}

// ---------- Menu items to render ----------
const pizzaSlugs = [
  "americana",
  "italiana",
  "napolitana",
  "francesa-vegetariana",
  "hawaiana",
  "hawaiana-especial",
  "peruana",
  "brasilera",
  "espanola",
  "naciones-unidas",
  "jamm",
  "jamm-especial",
  "brava",
  "gourmet",
  "tradicional-de-pollo",
  "4-estaciones",
  "siciliana",
  "portuguesa",
];

pizzaSlugs.forEach((slug) => {
  write(MENU_DIR, `pizza-${slug}.svg`, pizzaIcon(slug));
});

const pastaSlugs = [
  "lasagna",
  "lasagna-especial",
  "lasagna-alfredo",
  "lasagna-jamm",
  "lasagna-pollo",
  "canelones",
  "canelones-alfredo",
  "fettuccini-bolognesa",
  "fettuccini-alfredo",
  "fettuccini-especial-alfredo",
  "ravioles-carne",
  "ravioles-alfredo",
  "ravioles-especial-alfredo",
];

pastaSlugs.forEach((slug) => {
  write(MENU_DIR, `pasta-${slug}.svg`, pastaIcon(slug));
});

write(MENU_DIR, "bebida-pepsi-500.svg", drinkIcon("pepsi-500", "botella"));
write(MENU_DIR, "bebida-gaseosa-gordita.svg", drinkIcon("gordita", "botella"));
write(MENU_DIR, "bebida-gaseosa-750.svg", drinkIcon("750", "botella"));
write(
  MENU_DIR,
  "bebida-gaseosa-litro-inca-coca.svg",
  drinkIcon("litro-inca-coca", "botella")
);
write(
  MENU_DIR,
  "bebida-gaseosa-litro-pepsi.svg",
  drinkIcon("litro-pepsi", "botella")
);
write(
  MENU_DIR,
  "bebida-gaseosa-1-5-inca-coca.svg",
  drinkIcon("1-5-inca-coca", "botella")
);
write(
  MENU_DIR,
  "bebida-gaseosa-1-5-pepsi.svg",
  drinkIcon("1-5-pepsi", "botella")
);
write(MENU_DIR, "bebida-jarra-chicha.svg", drinkIcon("jarra-chicha", "jarra"));
write(
  MENU_DIR,
  "bebida-jarra-maracuya.svg",
  drinkIcon("jarra-maracuya", "jarra")
);
write(
  MENU_DIR,
  "bebida-media-jarra-chicha.svg",
  drinkIcon("media-jarra-chicha", "jarra")
);
write(MENU_DIR, "bebida-vaso-chicha.svg", drinkIcon("vaso-chicha", "botella"));
write(MENU_DIR, "bebida-agua-mineral.svg", drinkIcon("agua-mineral", "agua"));

write(MENU_DIR, "bebida-cafe.svg", hotDrinkIcon("cafe"));
write(MENU_DIR, "bebida-te.svg", hotDrinkIcon("te"));

write(MENU_DIR, "adicional-pan-al-ajo.svg", breadIcon("pan-al-ajo", false, false));
write(
  MENU_DIR,
  "adicional-pan-al-ajo-especial.svg",
  breadIcon("pan-al-ajo-especial", true, false)
);
write(
  MENU_DIR,
  "adicional-pan-al-ajo-jamm.svg",
  breadIcon("pan-al-ajo-jamm", true, true)
);

write(MENU_DIR, "promo-x2.svg", promoIcon("promo-x2", "x2"));
write(
  MENU_DIR,
  "promo-combinacion-perfecta.svg",
  promoIcon("combinacion-perfecta", "combo")
);

write(GALLERY_DIR, "horno-encendido.svg", ovenGallery());
write(GALLERY_DIR, "masa-fresca.svg", doughGallery());
write(GALLERY_DIR, "corte-perfecto.svg", cutGallery());
write(GALLERY_DIR, "ingredientes-frescos.svg", ingredientsGallery());
write(GALLERY_DIR, "mesa-compartida.svg", tableGallery());
write(GALLERY_DIR, "camino-a-tu-mesa.svg", deliveryGallery());
write(GALLERY_DIR, "hero-pizza.svg", heroPizza());
write(GALLERY_DIR, "og-cover.svg", ogCover());

console.log("Placeholder art generated.");
