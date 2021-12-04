"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var outlineArray = function (editor) {
    return Array.from(editor.querySelectorAll("*")).filter(function (value) {
        return /h\d/gim.test(value.nodeName.toLowerCase());
    });
};
function Outline(_a) {
    var editorState = _a.editorState;
    var _b = (0, react_1.useState)(function () { return editorState.editor && outlineArray(editorState.editor); }), outline = _b[0], setOutline = _b[1];
    (0, react_1.useEffect)(function () {
        setOutline(function () { return editorState.editor && outlineArray(editorState.editor); });
    }, [editorState.content]);
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
        }
    }
    return (react_1.default.createElement("div", { className: "subMenuExpanded" }, outline &&
        outline.map(function (value, index) { return (react_1.default.createElement("button", { className: "modelBtn", id: value.id, onClick: onClick, key: value.id + index, style: {
                //@ts-ignore
                marginLeft: marginArray[value.nodeName],
            } }, value.textContent)); })));
}
exports.default = Outline;
var marginArray = {
    H2: "1rem",
    H3: "2rem",
    H4: "3rem",
    H5: "4rem",
    H6: "5rem",
};
