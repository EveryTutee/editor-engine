"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.italicsHandlerFn = void 0;
function italicsHandlerFn(_a) {
    var editorState = _a.editorState;
    editorState.__document__.execCommand('italic', false, 'true');
    return null;
}
exports.italicsHandlerFn = italicsHandlerFn;
