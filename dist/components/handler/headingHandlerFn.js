"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var uuid_1 = require("../../utils/uuid");
function headingHandlerFn(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    function onClick(e) {
        var _a, _b;
        var element = e.target;
        if (!element)
            return;
        var value = element.id;
        var tag = "<" + value + ">";
        console.log(value);
        editorState.__document__.execCommand("formatBlock", false, tag);
        if (value !== "p")
            (_b = (_a = editorState.editor) === null || _a === void 0 ? void 0 : _a.querySelector(value + ":not([id])")) === null || _b === void 0 ? void 0 : _b.setAttribute("id", "a" + (0, uuid_1.uuid)());
    }
    (0, react_dom_1.render)(react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", { className: "subMenuExpanded" }, headingName.map(function (size, value) { return (react_1.default.createElement("button", { className: "modelBtn", id: size.tag, key: value + size.value, onClick: onClick, style: {
                fontWeight: "bolder",
                fontSize: size.value + "px",
            } }, size.name)); }))), document.getElementById("expanded"));
}
exports.default = headingHandlerFn;
var headingName = [
    {
        name: "Title",
        value: 24,
        tag: "h2",
    },
    {
        name: "Subtitle",
        value: 18.72,
        tag: "h3",
    },
    {
        name: "Paragraph",
        value: 16,
        tag: "p",
    },
];
