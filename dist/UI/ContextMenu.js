"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONTEXT_ITEMS = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var moveHandler_1 = require("../utils/moveHandler");
var resizeHandler_1 = require("../utils/resizeHandler");
var fi_1 = require("react-icons/fi");
var ai_1 = require("react-icons/ai");
var deleteHandler_1 = require("../utils/deleteHandler");
exports.DEFAULT_CONTEXT_ITEMS = [
    'move',
    'delete',
    'resize'
];
function ContextMenuItems(_a) {
    var editorState = _a.editorState, parent = _a.parent, toShow = _a.toShow;
    var show = toShow || exports.DEFAULT_CONTEXT_ITEMS;
    function __moveHandler__(e) {
        e.preventDefault();
        e.stopPropagation();
        (0, moveHandler_1.moveHandler)(editorState, parent, e, 'both');
    }
    function __resizeHandler__(e) {
        e.preventDefault();
        e.stopPropagation();
        (0, resizeHandler_1.onResizeMouseDownHandler)(editorState, parent, e, parent.id.includes('Audio') ? 'x' : 'both');
    }
    function __deleteHandler__(e) {
        e.preventDefault();
        e.stopPropagation();
        (0, deleteHandler_1.deleteHandler)(editorState, parent);
    }
    return (react_1.default.createElement("div", { id: "contextMenu", className: "contextMenu" },
        react_1.default.createElement("div", { className: "ctxBtnWrapper" },
            show.includes('move') && react_1.default.createElement("button", { className: "ctxBtn move", onMouseDown: __moveHandler__, onTouchStart: __moveHandler__ },
                react_1.default.createElement(fi_1.FiMove, null)),
            show.includes('delete') && react_1.default.createElement("button", { className: "ctxBtn delete", onClick: __deleteHandler__ },
                react_1.default.createElement(ai_1.AiFillDelete, null))),
        show.includes('resize') && react_1.default.createElement("button", { className: "ctxBtn resize", onMouseDown: __resizeHandler__, onTouchStart: __resizeHandler__ })));
}
function ContextMenu(_a) {
    var editorState = _a.editorState, parent = _a.parent, toShow = _a.toShow;
    return (0, react_dom_1.createPortal)(react_1.default.createElement(ContextMenuItems, { editorState: editorState, parent: parent, toShow: toShow }), parent);
}
exports.default = ContextMenu;
