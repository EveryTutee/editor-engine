"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINE_HEIGHT = void 0;
var react_1 = __importDefault(require("react"));
var domManipulation_1 = require("../../utils/domManipulation");
function lineheightHandlerFn(_a) {
    var name = _a.name, editorState = _a.editorState, onBack = _a.onBack;
    function onClick(e) {
        var target = e.target;
        if (!target)
            return;
        var value = target.id;
        (0, domManipulation_1.execBlockStyle)(name, value, editorState.__document__);
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack === null || onBack === void 0 ? void 0 : onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", null, exports.LINE_HEIGHT.map(function (value, key) { return (react_1.default.createElement("button", { className: "modelBtn", id: value, key: value + key, onClick: onClick }, value)); }))));
}
exports.default = lineheightHandlerFn;
exports.LINE_HEIGHT = ["1", "1.15", "1.5", "2"];
