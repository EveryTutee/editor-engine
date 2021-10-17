"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORD_SPACING = void 0;
var react_1 = __importDefault(require("react"));
var domManipulation_1 = require("../../utils/domManipulation");
var baseWordSpacing = 0.25;
function wordSpacingHandlerFn(_a) {
    var editorState = _a.editorState, name = _a.name, onBack = _a.onBack;
    function onClick(e) {
        var target = e.target;
        if (!target)
            return;
        var value = parseInt(target.id);
        var sValue = (value * baseWordSpacing) + "rem";
        (0, domManipulation_1.execBlockStyle)(name, sValue, editorState.__document__);
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name },
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { onClick: function () { return onBack === null || onBack === void 0 ? void 0 : onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", null, exports.WORD_SPACING.map(function (value, key) { return (react_1.default.createElement("button", { id: value, key: value + key, onClick: onClick }, value)); }))));
}
exports.default = wordSpacingHandlerFn;
exports.WORD_SPACING = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8'
];
