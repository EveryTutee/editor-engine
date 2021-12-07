"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function supSubHandlerFn(_a) {
    var editorState = _a.editorState, name = _a.name;
    editorState.__document__.execCommand(name, false, "true");
    return null;
}
exports.default = supSubHandlerFn;
