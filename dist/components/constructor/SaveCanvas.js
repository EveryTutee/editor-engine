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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var html2canvas_1 = __importDefault(require("html2canvas"));
var utils_1 = require("../../base/core/utils");
var displayStyle = function (width, height) { return ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: width,
    height: height,
    pointerEvents: 'none',
    border: 'none'
}); };
function SaveCanvas(_a) {
    var editorState = _a.editorState, onClick = _a.onClick, display = _a.display, onStart = _a.onStart, onEnd = _a.onEnd;
    var displayRef = (0, react_1.useRef)(null);
    var style = (0, react_1.useMemo)(function () {
        if (!editorState || !editorState.editor)
            return;
        var _a = editorState.editor.getBoundingClientRect(), width = _a.width, height = _a.height;
        return displayStyle(width, height + 10);
    }, [editorState]);
    function handleClick(e) {
        var _a;
        if (!editorState || !editorState.editor || !displayRef.current)
            return;
        (0, utils_1.removeContext)(editorState.__document__);
        var value = editorState.content;
        console.log(value);
        var editor = editorState.editor;
        onStart();
        var __display__ = displayRef.current;
        __display__.innerHTML = value;
        (_a = __display__.firstElementChild) === null || _a === void 0 ? void 0 : _a.style.setProperty('border', 'none');
        (0, html2canvas_1.default)(displayRef.current).then(function (canvas) {
            var dataUrl = canvas.toDataURL("image/png");
            onClick === null || onClick === void 0 ? void 0 : onClick(dataUrl, editor.getBoundingClientRect());
            editorState.setContent("<p><br/></p>");
            __display__.innerHTML = "";
            onEnd();
        });
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("button", { className: "saveBtn", onClick: handleClick }, display),
        react_1.default.createElement("div", { ref: displayRef, style: style })));
}
exports.default = SaveCanvas;
