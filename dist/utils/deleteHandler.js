"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHandler = void 0;
var react_dom_1 = require("react-dom");
var Draggable_1 = require("../base/model/Draggable");
function deleteHandler(editorState, parent) {
    var ctxMenuHolder = parent.querySelector('.contextMenuWrapper');
    (0, react_dom_1.unmountComponentAtNode)(ctxMenuHolder);
    ctxMenuHolder.remove();
    (0, Draggable_1.removeDraggable)(editorState, parent);
}
exports.deleteHandler = deleteHandler;
