"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_color_1 = require("react-color");
function Colorpicker(_a) {
    var value = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_color_1.SketchPicker, { disableAlpha: true, color: value, presetColors: [], onChange: function (color, ev) {
                ev.preventDefault();
                ev.stopPropagation();
                onChange(color.hex);
            } })));
}
exports.default = Colorpicker;
