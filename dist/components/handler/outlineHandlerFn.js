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
    function onClick(e) {
        var _a, _b;
        if (!editorState.editor)
            return;
        var target = e.target;
        var id = target.id;
        var range = (_a = getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0);
        if (!range || range.collapsed) {
            (_b = editorState.editor.querySelector("#".concat(id))) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
        }
        else {
            editorState.__document__.execCommand("createLink", false, "/#" + id);
            //   editorState.__document__.execCommand("fontSize", false, "7");
            //   (
            //     document.querySelectorAll(`span`) as NodeListOf<HTMLSpanElement>
            //   ).forEach((span: HTMLSpanElement) => {
            //     if (span.style.fontSize === "xxx-large") {
            //       const a = editorState.__document__.createElement("a");
            //       a.href = "/#" + id;
            //       a.setAttribute("style", "");
            //       a.innerHTML = span.innerHTML;
            //       span.replaceWith(a);
            //     }
            //   });
        }
    }
    (0, react_dom_1.render)(react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", { className: "subMenuExpanded" }, outline &&
            outline.map(function (value, index) { return (react_1.default.createElement("button", { className: "modelBtn", id: value.id, onClick: onClick, key: value.id + index, style: {
                    //@ts-ignore
                    marginLeft: marginArray[value.nodeName],
                } }, value.textContent)); }))), document.getElementById("expanded"));
}
exports.default = outlineHandlerFn;
var marginArray = {
    H2: "1rem",
    H3: "2rem",
    H4: "3rem",
    H5: "4rem",
    H6: "5rem",
};
