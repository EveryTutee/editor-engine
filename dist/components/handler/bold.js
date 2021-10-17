"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boldHandlerFn = void 0;
function boldHandlerFn(_a) {
    var editorState = _a.editorState;
    editorState.__document__.execCommand('bold', false, 'true');
    return null;
}
exports.boldHandlerFn = boldHandlerFn;
