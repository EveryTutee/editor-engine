"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FONT_SIZE = void 0;
var react_1 = __importDefault(require("react"));
function fontSizeHandlerFn(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    function onClick(e) {
        var target = e.target;
        if (!target)
            return;
        var value = target.id;
        editorState.__document__.execCommand("fontSize", false, "7");
        document.querySelectorAll("span").forEach(function (span) {
            if (span.style.fontSize === "xxx-large")
                span.style.fontSize = value;
        });
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack === null || onBack === void 0 ? void 0 : onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", { className: "subMenuExpanded" }, exports.FONT_SIZE.map(function (value, key) { return (react_1.default.createElement("button", { className: "modelBtn", id: value, key: value + key, onClick: onClick }, value)); }))));
}
exports.default = fontSizeHandlerFn;
exports.FONT_SIZE = [
    "6px",
    "4px",
    "8px",
    "10px",
    "11px",
    "12px",
    "13px",
    "14px",
    "16px",
    "18px",
    "24px",
    "32px",
    "48px",
    "56px",
    "64px",
    "72px",
    "96px",
    "144px",
];
