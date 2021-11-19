"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanUpDraggables = exports.removeContext = void 0;
var react_dom_1 = require("react-dom");
function removeContext(document) {
    var boxes = document.querySelectorAll('.selectedBox');
    boxes.forEach(function (box) {
        box.classList.remove('selectedBox');
        var ctxMenuHolder = box.querySelector('.contextMenuWrapper');
        var ctxMenu = box.querySelector('.contextMenu');
        (0, react_dom_1.unmountComponentAtNode)(ctxMenuHolder);
        (0, react_dom_1.unmountComponentAtNode)(ctxMenu);
        ctxMenuHolder.remove();
        ctxMenu.remove();
    });
}
exports.removeContext = removeContext;
function cleanUpDraggables(editorState) {
    var doc = editorState.__document__;
    var boxes = doc.querySelectorAll('.selectedBox');
    boxes.forEach(function (box) {
        var ctxMenuHolder = box.querySelector('.contextMenuWrapper');
        (0, react_dom_1.unmountComponentAtNode)(ctxMenuHolder);
        ctxMenuHolder.remove();
        box.remove();
    });
}
exports.cleanUpDraggables = cleanUpDraggables;
