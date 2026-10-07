// The Athena palette, in one place. tailwind.config.ts reads it for the
// `athena-*` classes (bg-athena-red3, text-athena-maroon2, ...), and
// components import it directly wherever a colour has to go in an inline
// style, SVG fill or gradient, which Tailwind classes can't reach.
export const athena = {
  red: "#D42E4B",
  red2: "#D7274D",
  // headings, navbar, "Pick your first step" band, footer
  red3: "#BF1938",
  red4: "#DF383B",
  maroon: "#7F172B",
  maroon2: "#52242C",
  // newsletter section pink
  cream: "#FFECEB",
  // "By joining Athena" / Parthenon section cream
  cream2: "#FFF6EA",
  cream3: "#FFFCF9",
  accent: "#A91E38",
  // hero and photo-clothesline grid paper, and its lines
  paper: "#FFF6E5",
  paperline: "#FFDDCE",
  // yellow graph-paper grid lines
  gold: "#F2B705",
} as const;

// "#RRGGBB" + opacity -> "rgba(r,g,b,a)"
export function withAlpha(hex: string, alpha: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
}

// Faint graph-paper lines in one colour, for a `backgroundImage` (pair with a
// `backgroundSize` such as "28px 28px").
export function graphPaper(hex: string, alpha: number) {
  const line = withAlpha(hex, alpha);
  return `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`;
}
