"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_color_1 = require("react-color");
var color_1 = require("../utils/color");
function Colorpicker(_a) {
    var value = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_color_1.SketchPicker
        // disableAlpha={true}
        , { 
            // disableAlpha={true}
            color: value, presetColors: [], className: "colorPicker", onChange: function (color, ev) {
                // ev.preventDefault();
                // ev.stopPropagation();
                var rgba = color.rgb;
                var hex = (0, color_1.rgb2string)(rgba);
                console.log(hex);
                onChange(hex);
            } })));
}
exports.default = Colorpicker;
