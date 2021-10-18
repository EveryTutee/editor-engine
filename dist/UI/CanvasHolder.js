"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uuid_1 = require("../utils/uuid");
function CanvasHolder(_a) {
    var editorState = _a.editorState, shelf = _a.shelf;
    function selectedCanvas(e) {
        if (!editorState.editor)
            return;
        var target = e.target;
        editorState.editor.appendChild(target);
    }
    return (react_1.default.createElement("div", { className: "canvasHolder" }, shelf.map(function (value, index) { return (react_1.default.createElement("img", { src: value, alt: index + "", onClick: selectedCanvas, key: "Image" + (0, uuid_1.uuid)(), width: "100%" })); })));
}
exports.default = CanvasHolder;
