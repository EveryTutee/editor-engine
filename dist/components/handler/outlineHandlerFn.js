"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var outlineArray = function (editor) {
    return Array.from(editor.querySelectorAll("*")).filter(function (value) {
        return /h\d/gim.test(value.nodeName.toLowerCase());
    });
};
function outlineHandlerFn(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    var outline = editorState.editor && outlineArray(editorState.editor);
    (0, react_dom_1.render)(react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name))), document.getElementById("expanded"));
}
exports.default = outlineHandlerFn;
var marginArray = {
    H2: "1rem",
    H3: "2rem",
    H4: "3rem",
    H5: "4rem",
    H6: "5rem",
};
