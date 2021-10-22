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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styleEvents = [
    'keyup',
    'mouseup'
];
function Model(_a) {
    var editorState = _a.editorState, config = _a.config, subMenuView = _a.subMenuView, onCurrentStyle = _a.onCurrentStyle, btnType = _a.btnType, accept = _a.accept;
    var name = config.name, buttonIcon = config.buttonIcon, type = config.type, handlerFn = config.handlerFn;
    var btnRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(null), currAttributes = _b[0], setCurrAttributes = _b[1];
    function onBack() {
        subMenuView === null || subMenuView === void 0 ? void 0 : subMenuView(null);
    }
    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        // handlerFn is expected to return nothing
        if (type === 'click')
            handlerFn({ e: e, name: name, editorState: editorState, onBack: onBack });
        // toggle to show expanded bar
        else if (type === 'submenu') {
            if (!subMenuView)
                throw Error("Sub menu is not provided");
            var subMenu_1 = {
                Menu: handlerFn,
                props: { e: e, name: name, editorState: editorState, onBack: onBack }
            };
            if (subMenu_1)
                subMenuView(function (prev) {
                    if ((prev === null || prev === void 0 ? void 0 : prev.props.name) === subMenu_1.props.name)
                        return null;
                    return subMenu_1;
                });
        }
    }
    (0, react_1.useEffect)(function () {
        if (!editorState.editor)
            return;
        function listener(e) {
            var _a;
            // styling highlights is still underway
            var selection = editorState.__document__.getSelection();
            if (!selection)
                return;
            var node = (_a = selection.focusNode) === null || _a === void 0 ? void 0 : _a.parentElement;
            if (!node)
                return;
            var styles = window.getComputedStyle(node);
            if (onCurrentStyle) {
                setCurrAttributes(function () { return onCurrentStyle(styles); });
            }
        }
        styleEvents.forEach(function (trigger) {
            var _a;
            (_a = editorState.editor) === null || _a === void 0 ? void 0 : _a.addEventListener(trigger, listener, false);
        });
        return function () {
            styleEvents.forEach(function (trigger) {
                var _a;
                (_a = editorState.editor) === null || _a === void 0 ? void 0 : _a.removeEventListener(trigger, listener, false);
            });
        };
    }, [editorState.editor, editorState.__document__, onCurrentStyle]);
    var file = (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("label", __assign({ htmlFor: name, className: "modelLabel", ref: btnRef }, currAttributes),
            react_1.default.createElement("input", { type: "file", style: { display: 'none' }, id: name, onChange: handleClick }),
            buttonIcon)));
    var button = (react_1.default.createElement("button", __assign({ id: name, title: name, className: "modelBtn", onClick: handleClick, ref: btnRef }, currAttributes), buttonIcon));
    /**
     * currAttributes = children => <p>{font_name}</p>
     */
    var text = (react_1.default.createElement("button", { id: name, title: name, className: "modelBtn", onClick: handleClick, ref: btnRef },
        react_1.default.createElement("p", null,
            react_1.default.createElement("span", null, !!currAttributes ? currAttributes : buttonIcon))));
    return (react_1.default.createElement(react_1.Fragment, null,
        btnType === 'file' && file,
        btnType === 'button' && button,
        btnType === 'text' && text));
}
exports.default = Model;
