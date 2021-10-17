"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveHandler = void 0;
var clientCoordinates_1 = require("./clientCoordinates");
function moveHandler(editorState, concern, event, dir) {
    var mousePosition = (0, clientCoordinates_1.clientCoord)(event);
    var button = event.target;
    var editor = editorState.editor;
    if (!editor || !button || !concern)
        return;
    var editorRect = editor.getBoundingClientRect();
    var isDown = true;
    var onmouseup = function () { return isDown = false; };
    var onmousemove = function (e) {
        if (!isDown)
            return;
        mousePosition = (0, clientCoordinates_1.clientCoord)(e);
        var width = editorRect.width, height = editorRect.height;
        var concernRect = concern.getBoundingClientRect();
        var x = mousePosition.x - editorRect.x;
        var y = mousePosition.y - editorRect.y;
        if (dir === 'both' || dir === 'x') {
            if (x < width - concernRect.width && x > 0)
                concern.style.setProperty('left', ((x / editorRect.width) * 100) + "%");
        }
        if (dir === 'both' || dir === 'y') {
            if (y < height - concernRect.height && y > 0)
                concern.style.setProperty('top', y + "px");
        }
    };
    editorState.__document__.addEventListener('mouseup', onmouseup, false);
    editorState.__document__.addEventListener('touchend', onmouseup, false);
    editorState.__document__.addEventListener('mousemove', onmousemove, false);
    editorState.__document__.addEventListener('touchmove', onmousemove, false);
    if (!isDown) {
        editorState.__document__.removeEventListener('mouseup', onmouseup, false);
        editorState.__document__.removeEventListener('touchend', onmouseup, false);
        editorState.__document__.removeEventListener('mousemove', onmousemove, false);
        editorState.__document__.removeEventListener('touchmove', onmousemove, false);
    }
}
exports.moveHandler = moveHandler;
