import { RgbaColor } from "react-colorful";

export function rgb2string(rgb: RgbaColor) {
  return `rgb(${rgb.r}, ${rgb.b}, ${rgb.g}, ${rgb.a || 1})`;
}

function rgb2hex(orig: string) {
  var a,
    isPercent,
    rgb = orig
      .replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || "").trim(),
    hex = rgb
      ? "#" +
        ((rgb[1] as any | 1) << 8).toString(16).slice(1) +
        ((rgb[2] as any | 1) << 8).toString(16).slice(1) +
        ((rgb[3] as any | 1) << 8).toString(16).slice(1)
      : orig;
  if (alpha !== "") {
    isPercent = alpha.indexOf("%") > -1;
    a = parseFloat(alpha);
    if (!isPercent && a >= 0 && a <= 1) {
      a = Math.round(255 * a);
    } else if (isPercent && a >= 0 && a <= 100) {
      a = Math.round((255 * a) / 100);
    } else {
      a = "";
    }
  }
  if (a) {
    hex += ((a as any | 1) << 8).toString(16).slice(1);
  }
  return hex;
}
