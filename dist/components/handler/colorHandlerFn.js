"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Colorpicker_1 = __importDefault(require("../../UI/Colorpicker"));
function colorHandlerFn(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    function onChange(color) {
        // const cmd = name === 'Font Color' ? 'foreColor' : 'hiliteColor';
        editorState.__document__.execCommand('foreColor', false, color);
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name },
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement(Colorpicker_1.default, { value: "#000", onChange: onChange })));
}
exports.default = colorHandlerFn;
