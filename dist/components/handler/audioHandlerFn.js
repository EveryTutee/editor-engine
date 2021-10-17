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
var server_1 = require("react-dom/server");
var fileToDataUrl_1 = require("../../utils/fileToDataUrl");
var uuid_1 = require("../../utils/uuid");
function audioHandlerFn(_a) {
    var e = _a.e, editorState = _a.editorState;
    var target = e.target;
    var editor = editorState.editor;
    if (!target.files || !editor)
        return null;
    var file = target.files[0];
    if (!file)
        return;
    (0, fileToDataUrl_1.fileToDataUrl)(file).then(function (src) {
        var parentId = (0, uuid_1.uuid)();
        var __text__ = (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("audio", { id: "Audio " + parentId, "data-name": file.name, src: src, controls: true, controlsList: 'nodownload', contextMenu: "", style: {
                    height: '60px',
                    width: '100%'
                } }),
            react_1.default.createElement("p", null,
                react_1.default.createElement("br", null))));
        var audio = (0, server_1.renderToString)(__text__);
        editor.innerHTML += audio;
        target.value = "";
    });
    return null;
}
exports.default = audioHandlerFn;
