"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb2string = void 0;
function rgb2string(rgb) {
    return "rgb(".concat(rgb.r, ", ").concat(rgb.b, ", ").concat(rgb.g, ", ").concat(rgb.a || 1, ")");
}
exports.rgb2string = rgb2string;
function rgb2hex(orig) {
    var a, isPercent, rgb = orig
        .replace(/\s/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i), alpha = ((rgb && rgb[4]) || "").trim(), hex = rgb
        ? "#" +
            (rgb[1] << 8).toString(16).slice(1) +
            (rgb[2] << 8).toString(16).slice(1) +
            (rgb[3] << 8).toString(16).slice(1)
        : orig;
    if (alpha !== "") {
        isPercent = alpha.indexOf("%") > -1;
        a = parseFloat(alpha);
        if (!isPercent && a >= 0 && a <= 1) {
            a = Math.round(255 * a);
        }
        else if (isPercent && a >= 0 && a <= 100) {
            a = Math.round((255 * a) / 100);
        }
        else {
            a = "";
        }
    }
    if (a) {
        hex += (a << 8).toString(16).slice(1);
    }
    return hex;
}
