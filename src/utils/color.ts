import { RGBColor } from "react-color";

export function rgb2string(rgb : RGBColor) {
    return `rgb(${rgb.r}, ${rgb.b}, ${rgb.g}, ${rgb.a || 1})`
}