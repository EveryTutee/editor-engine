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
    width: '90%',
    height: '80px',
    minHeight: 'fit-content',
    top: '60px',
    zIndex: 1,
    cursor: 'pointer',
    backgroundColor: 'cyan',
    borderRadius: '10px 45px 10px 45px',
};
var childStyle = {
    height: "100%",
    width: "100%",
    pointerEvents: 'all',
    margin: 'auto',
    padding: '1rem'
};
function audioHandlerFn(e, name, editorState) {
    var target = e.target;
    if (!target.files)
        return null;
    var file = target.files[0];
    if (!file)
        return;
    (0, fileToDataUrl_1.fileToDataUrl)(file).then(function (src) {
        var childId = (0, uuid_1.uuid)();
        var parentId = (0, uuid_1.uuid)();
        var __text__ = (react_1.default.createElement(Draggable_1.Textbox, { parentClassName: "audioBoxWrapper", childClassName: "audioBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: false },
            react_1.default.createElement("audio", { "data-name": file.name, src: src, controls: true, controlsList: 'nodownload', style: {
                    height: '100%',
                    width: '100%'
                } })));
        (0, Draggable_1.insertDraggable)(editorState, __text__, name + parentId);
        target.value = "";
    });
    return null;
}
exports.default = audioHandlerFn;
