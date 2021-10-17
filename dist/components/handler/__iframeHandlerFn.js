"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Draggable_1 = require("../../base/model/Draggable");
var uuid_1 = require("../../utils/uuid");
var parentStyle = {
    position: 'absolute',
    width: '40%',
    height: '40%',
    minHeight: 'fit-content',
    top: '60px',
    zIndex: 1,
    cursor: 'pointer',
};
var childStyle = {
    height: "100%",
    width: "100%",
    pointerEvents: 'all',
    border: "1rem solid cyan",
    borderRadius: "0 15px 0 15px"
};
function iframeHandlerFn(e, name, editorState) {
    var src = prompt("Paste Embedded link");
    if (!src)
        return;
    var childId = (0, uuid_1.uuid)();
    var parentId = (0, uuid_1.uuid)();
    var __text__ = (react_1.default.createElement(Draggable_1.Textbox, { parentClassName: "iframeBoxWrapper", childClassName: "iframeBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: false },
        react_1.default.createElement("iframe", { frameBorder: "0", src: src, width: "100%", height: "100%", style: {
                opacity: "inherit",
            } })));
    (0, Draggable_1.insertDraggable)(editorState, __text__, name + parentId);
    return null;
}
exports.default = iframeHandlerFn;
