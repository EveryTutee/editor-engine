"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.draggableOnClick = exports.removeDraggable = exports.insertDraggable = exports.Textbox = exports.defaultName = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var server_1 = require("react-dom/server");
var ContextMenu_1 = __importDefault(require("../../UI/ContextMenu"));
exports.defaultName = "draggable";
function Textbox(_a) {
    var childClassName = _a.childClassName, parentClassName = _a.parentClassName, parentId = _a.parentId, children = _a.children, parentStyle = _a.parentStyle, childId = _a.childId, childStyle = _a.childStyle, contentEditable = _a.contentEditable;
    return (react_1.default.createElement("div", { id: parentId.replaceAll("-", ""), className: parentClassName + " " + exports.defaultName, style: parentStyle, key: parentId + childId, contentEditable: false },
        react_1.default.createElement("div", { id: childId.replaceAll("-", ""), style: childStyle, className: childClassName, contentEditable: contentEditable }, children)));
}
exports.Textbox = Textbox;
function insertDraggable(editorState, markup, identifier, toShow) {
    var editor = editorState.editor;
    if (!editor)
        return;
    var div = (0, server_1.renderToStaticMarkup)(markup);
    editor.innerHTML += div;
    var draggable = editor.querySelector("#" + identifier.replaceAll("-", ""));
    if (!draggable)
        return;
    draggable.addEventListener("click", function () { return draggableOnClick(draggable, editorState, toShow); }, false);
    draggable.focus();
}
exports.insertDraggable = insertDraggable;
function removeDraggable(editorState, draggable, toShow) {
    var _a;
    draggable.removeEventListener("click", function () { return draggableOnClick(draggable, editorState, toShow); }, false);
    draggable.remove();
    (_a = editorState.editor) === null || _a === void 0 ? void 0 : _a.focus();
}
exports.removeDraggable = removeDraggable;
function draggableOnClick(parent, editorState, toShow) {
    if (parent.classList.contains("selectedBox"))
        return;
    parent.classList.add("selectedBox");
    console.log(parent.id);
    parent.innerHTML += '<div class="contextMenuWrapper"></div>';
    var contextMenuWrapper = parent.querySelector(".contextMenuWrapper");
    (0, react_dom_1.render)(react_1.default.createElement(ContextMenu_1.default, { parent: parent, editorState: editorState, toShow: toShow }), contextMenuWrapper);
    // contextMenuWrapper.remove()
}
exports.draggableOnClick = draggableOnClick;
