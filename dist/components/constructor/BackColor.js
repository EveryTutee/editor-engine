"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ai_1 = require("react-icons/ai");
var Model_1 = __importDefault(require("../../base/model/Model"));
var colorHandlerFn_1 = __importDefault(require("../handler/colorHandlerFn"));
var config = {
    name: "Highlight",
    type: "submenu",
    buttonIcon: (react_1.default.createElement("p", null,
        react_1.default.createElement(ai_1.AiTwotoneHighlight, null),
        react_1.default.createElement("span", null, "Highlight"))),
    handlerFn: colorHandlerFn_1.default,
};
function BackColor(_a) {
    var editorState = _a.editorState, onClick = _a.onClick;
    return (react_1.default.createElement(Model_1.default, { btnType: "button", editorState: editorState, config: config, subMenuView: onClick, 
        //@ts-ignore
        onCurrentStyle: function (styles) { return styles.color; } }));
}
exports.default = BackColor;
