"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var getParent_1 = __importDefault(require("../../utils/getParent"));
var resizeHandler_1 = require("../../utils/resizeHandler");
var Draggable_1 = require("../model/Draggable");
var utils_1 = require("./utils");
// Returns the Editor or MainTextArea :)
function Editor(_a) {
    var _b, _c;
    var className = _a.className, editorState = _a.editorState, placeholder = _a.placeholder, readonly = _a.readonly, id = _a.id, value = _a.value, onChange = _a.onChange, _d = _a.type, type = _d === void 0 ? "editor" : _d, style = _a.style;
    var editorRef = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), showPlaceholder = _e[0], setShowPlaceholder = _e[1];
    function resizeEditor(e) {
        if (!editorState.editor)
            return;
        console.log("ola amigas");
        (0, resizeHandler_1.onResizeMouseDownHandler)(editorState, editorState.editor, e, "y", true);
    }
    function canvasClick(e) {
        // if (type !== "canvas") return;
        if (!editorState.editor)
            return;
        var target = e.target;
        if (target.classList.contains("finish")) {
            (0, utils_1.removeContext)(editorState.__document__);
            return;
        }
        var parent = (0, getParent_1.default)(target, ".".concat(Draggable_1.defaultName));
        if (!parent)
            return;
        if (parent.classList.contains(Draggable_1.defaultName)) {
            (0, Draggable_1.draggableOnClick)(parent, editorState);
        }
        else {
            (0, utils_1.removeContext)(editorState.__document__);
        }
    }
    (0, react_1.useEffect)(function () {
        if (editorRef.current) {
            if (value) {
                editorRef.current.innerText = value;
                editorState.setContent(value);
            }
            if (editorRef.current.innerText.length === 0) {
                console.log(type, editorRef.current.innerText);
                editorRef.current.innerHTML += "<p><br /></p>";
            }
        }
    }, [(_b = editorRef.current) === null || _b === void 0 ? void 0 : _b.innerText]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (((_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.innerText) &&
            (editorRef.current.innerText === "\n" ||
                editorRef.current.innerText.length === 0)) {
            setShowPlaceholder(true);
        }
        else {
            setShowPlaceholder(false);
        }
    }, [(_c = editorRef.current) === null || _c === void 0 ? void 0 : _c.innerText]);
    (0, react_1.useEffect)(function () {
        if (!editorRef.current)
            return;
        editorState.setEditor(editorRef.current);
        var obs = observeEditor(editorRef.current, function () {
            var _a;
            if (!editorRef.current)
                return;
            var clone = editorRef.current.cloneNode(true);
            clone.removeAttribute("contenteditable");
            clone.removeAttribute("placeholder");
            clone.removeAttribute("data-showplaceholder");
            clone.removeAttribute("data-type");
            clone.removeAttribute("id");
            (0, utils_1.removeContext)(clone);
            var innerHTML = clone.outerHTML;
            var innerText = clone.outerText;
            var newState = __assign(__assign({}, editorState), { editor: editorRef.current, content: innerHTML, text: innerText, cleanMarkUp: clone });
            console.log(newState);
            (_a = newState === null || newState === void 0 ? void 0 : newState.setUndoStack) === null || _a === void 0 ? void 0 : _a.call(newState, newState.content);
            onChange === null || onChange === void 0 ? void 0 : onChange(newState);
            clone.remove();
        });
        return function () {
            obs === null || obs === void 0 ? void 0 : obs.disconnect();
            editorRef.current = null;
        };
        //eslint-disable-next-line
    }, []);
    function handlePaste(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!editorState.editor)
            return;
        var pastedData = e.clipboardData
            .getData("text/plain")
            .trim()
            .replaceAll(">", "&gt;")
            .replaceAll("<", "&lt;");
        var final = "<p>".concat(pastedData.replaceAll("\n", "</p><p>"), "</p>");
        console.log(final);
        editorState.__document__.execCommand("insertHTML", false, final);
    }
    function handleFocus(e) {
        var div = e.target;
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { key: id, ref: editorRef, className: className + " main_editor " + id, contentEditable: !!!readonly, id: id, style: style, placeholder: placeholder, suppressContentEditableWarning: true, onClick: canvasClick, onFocus: handleFocus, onKeyDown: function (e) {
                if (e.keyCode === 8 &&
                    editorState.editor &&
                    editorState.editor.innerHTML === "<p><br></p>")
                    e.preventDefault();
            }, "data-showplaceholder": showPlaceholder, "data-type": type, onPasteCapture: handlePaste },
            react_1.default.createElement("p", null,
                react_1.default.createElement("br", null))),
        type === "canvas" && (react_1.default.createElement("button", { className: "canvasResizer", 
            //@ts-expect-error
            onMouseDown: resizeEditor, 
            //@ts-expect-error
            onTouchStart: resizeEditor }))));
}
exports.default = Editor;
var observeEditor = function (node, callback) {
    if (!node || node.nodeType !== 1)
        return;
    if (window.MutationObserver) {
        var observer = new MutationObserver(callback);
        observer.observe(node, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
        });
        return observer;
    }
    node.addEventListener("DOMNodeInserted", callback, false);
    node.addEventListener("DOMNodeRemoved", callback, false);
    return {
        disconnect: function () {
            node.removeEventListener("DOMNodeInserted", callback, false);
            node.removeEventListener("DOMNodeRemoved", callback, false);
        },
    };
};
