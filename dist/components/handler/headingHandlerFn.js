"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadingArray = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
function headingHandlerFn(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    function onClick(e) {
        var element = e.target;
        if (!element)
            return;
        var value = element.id;
        console.log(value);
        editorState.__document__.execCommand("formatBlock", false, value);
    }
    (0, react_dom_1.render)(react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", { className: "subMenuExpanded" }, exports.HeadingArray.map(function (size, value) { return (react_1.default.createElement("button", { className: "modelBtn", id: "<h".concat(value + 1, ">"), key: value + size, onClick: onClick, style: {
                fontWeight: "bolder",
                fontSize: "".concat(size, "px"),
            } }, "Heading ".concat(value + 1))); }))), document.getElementById("expanded"));
}
exports.default = headingHandlerFn;
exports.HeadingArray = [32, 24, 18.72, 16, 13.28, 10.72];
