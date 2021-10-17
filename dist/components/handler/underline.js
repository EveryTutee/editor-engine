"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.underlineHandlerFn = void 0;
function underlineHandlerFn(_a) {
    var editorState = _a.editorState;
    editorState.__document__.execCommand('underline', false, 'true');
    return null;
}
exports.underlineHandlerFn = underlineHandlerFn;
