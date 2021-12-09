"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var UnsplashDock_1 = __importDefault(require("../../UI/UnsplashDock"));
function UnsplashPictureHandlerFn(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    (0, react_dom_1.render)(react_1.default.createElement(UnsplashDock_1.default, { editorState: editorState, onBack: onBack, name: name }), editorState.__document__.getElementById("expanded"));
    return null;
}
exports.default = UnsplashPictureHandlerFn;
