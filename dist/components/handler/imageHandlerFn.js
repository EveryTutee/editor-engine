"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Draggable_1 = require("../../base/model/Draggable");
var fileToDataUrl_1 = require("../../utils/fileToDataUrl");
var uuid_1 = require("../../utils/uuid");
var parentStyle = {
    position: 'absolute',
    width: '100px',
    height: 'auto',
    minHeight: 'fit-content',
    top: '60px',
    zIndex: 1,
    cursor: 'pointer'
};
var childStyle = {
    height: "100%",
    width: "100%",
};
function imageHandlerFn(_a) {
    var e = _a.e, editorState = _a.editorState, name = _a.name;
    var target = e.target;
    if (!target.files)
        return null;
    var file = target.files[0];
    if (!file)
        return;
    (0, fileToDataUrl_1.fileToDataUrl)(file).then(function (src) {
        var childId = (0, uuid_1.uuid)();
        var parentId = (0, uuid_1.uuid)();
        var __text__ = (react_1.default.createElement(Draggable_1.Textbox, { parentClassName: "imageBoxWrapper", childClassName: "imageBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: false },
            react_1.default.createElement("img", { "data-name": file.name, src: src, style: {
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    opacity: "inherit"
                } })));
        (0, Draggable_1.insertDraggable)(editorState, __text__, name + parentId);
        target.files = null;
        target.value = "";
    });
    return null;
}
exports.default = imageHandlerFn;
