"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listHandlerFn = void 0;
function listHandlerFn(_a) {
    var name = _a.name, editorState = _a.editorState;
    if (!editorState.editor)
        return null;
    var cmd = 'insertUnorderedList';
    switch (name) {
        case 'Bullets':
            cmd = 'insertUnorderedList';
            break;
        case 'Numbers':
            cmd = 'insertOrderedList';
            break;
        default:
            cmd = 'insertUnorderedList';
            break;
    }
    editorState.__document__.execCommand(cmd, false, 'true');
    editorState.editor.querySelectorAll('li').forEach(function (li) {
        li.setAttribute('style', 'margin-left: 2rem');
    });
    return null;
}
exports.listHandlerFn = listHandlerFn;
