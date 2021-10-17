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
    cursor: 'pointer'
};
var childStyle = {
    padding: "0.25rem 0.75rem",
    height: "100%",
    width: "100%",
};
function textboxHandlerFn(_a) {
    var editorState = _a.editorState, name = _a.name;
    var childId = (0, uuid_1.uuid)();
    var parentId = (0, uuid_1.uuid)();
    var __text__ = (react_1.default.createElement(Draggable_1.Textbox, { parentClassName: "textBoxWrapper", childClassName: "textBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: true },
        react_1.default.createElement("p", { style: {
                backgroundColor: 'transparent',
                width: "100%",
                height: "1em",
                resize: "none",
                wordWrap: "break-word",
                pointerEvents: "none",
                opacity: "inherit"
            } },
            react_1.default.createElement("br", null))));
    (0, Draggable_1.insertDraggable)(editorState, __text__, name + parentId);
    return null;
}
exports.default = textboxHandlerFn;
