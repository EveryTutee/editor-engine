"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function alignHandlerFn(_a) {
    var name = _a.name, editorState = _a.editorState;
    console.log(name);
    var cmd = 'justifyLeft';
    switch (name) {
        case 'alignLeft':
            cmd = 'justifyLeft';
            break;
        case 'alignRight':
            cmd = 'justifyRight';
            break;
        case 'alignCenter':
            cmd = 'justifyCenter';
            break;
        default:
            cmd = 'justifyLeft';
            break;
    }
    console.log(cmd);
    editorState.__document__.execCommand(cmd, false, 'true');
    return null;
}
exports.default = alignHandlerFn;
