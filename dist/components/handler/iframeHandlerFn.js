"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Draggable_1 = require("../../base/model/Draggable");
var uuid_1 = require("../../utils/uuid");
var parentStyle = {
    position: 'relative',
    width: '40%',
    height: '40%',
    minHeight: 'fit-content',
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
function iframeHandlerFn(_a) {
    var editorState = _a.editorState, name = _a.name;
    var src = prompt("Paste Embedded link");
    if (!src)
        return;
    var childId = (0, uuid_1.uuid)();
    var parentId = (0, uuid_1.uuid)();
    var __text__ = (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(Draggable_1.Textbox, { parentClassName: "iframeBoxWrapper", childClassName: "iframeBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: false },
            react_1.default.createElement("iframe", { frameBorder: "0", src: src, width: "100%", height: "100%", style: {
                    opacity: "inherit",
                } })),
        react_1.default.createElement("p", null,
            react_1.default.createElement("br", null))));
    (0, Draggable_1.insertDraggable)(editorState, __text__, name + parentId, ['resize']);
    return null;
}
exports.default = iframeHandlerFn;
