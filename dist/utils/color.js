"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb2string = void 0;
function rgb2string(rgb) {
    return "rgb(" + rgb.r + ", " + rgb.b + ", " + rgb.g + ", " + (rgb.a || 1) + ")";
}
exports.rgb2string = rgb2string;
