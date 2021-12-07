"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onResizeMouseDownHandler = void 0;
var clientCoordinates_1 = require("./clientCoordinates");
function onResizeMouseDownHandler(editorState, concern, e, dir, ignoreContainer) {
    var mousePosition = (0, clientCoordinates_1.clientCoord)(e);
    var button = e.target;
    var editor = editorState.editor;
    if (!editor || !button || !concern)
        return;
    var _a = editor.getBoundingClientRect(), right = _a.right, bottom = _a.bottom, width = _a.width;
    var concernRect = concern.getBoundingClientRect();
    var isDown = true;
    var onmouseup = function () { return isDown = false; };
    var onmousemove = function (e) {
        if (!isDown)
            return;
        mousePosition = (0, clientCoordinates_1.clientCoord)(e);
        var _width = Math.max(mousePosition.x - concernRect.x, 0);
        var finalWidth = ((_width / width) * 100) + "%";
        var _height = Math.max(mousePosition.y - concernRect.y, 0);
        var finalHeight = _height + "px";
        if (dir === 'both' || dir === 'x') {
            if (ignoreContainer || mousePosition.x <= right)
                concern.style.setProperty('width', finalWidth);
        }
        if (dir === 'both' || dir === 'y') {
            if (ignoreContainer || mousePosition.y <= bottom)
                concern.style.setProperty('height', finalHeight);
        }
    };
    editorState.__document__.addEventListener('mousemove', onmousemove, false);
    editorState.__document__.addEventListener('touchmove', onmousemove, false);
    editorState.__document__.addEventListener('mouseup', onmouseup, false);
    editorState.__document__.addEventListener('touchend', onmouseup, false);
    if (!isDown) {
        editorState.__document__.removeEventListener('mousemove', onmousemove, false);
        editorState.__document__.removeEventListener('touchmove', onmousemove, false);
        editorState.__document__.removeEventListener('mouseup', onmouseup, false);
        editorState.__document__.removeEventListener('touchend', onmouseup, false);
    }
}
exports.onResizeMouseDownHandler = onResizeMouseDownHandler;
