"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa");
var Model_1 = __importDefault(require("../../base/model/Model"));
var ColorHandlerFn_1 = __importDefault(require("../handler/ColorHandlerFn"));
var config = {
    name: "Editor Background",
    type: "submenu",
    buttonIcon: (react_1.default.createElement("p", null,
        react_1.default.createElement(fa_1.FaPaintRoller, null),
        react_1.default.createElement("span", null, "Editor Background"))),
    handlerFn: ColorHandlerFn_1.default,
};
function EditorBackground(_a) {
    var editorState = _a.editorState, onClick = _a.onClick;
    return (react_1.default.createElement(Model_1.default, { btnType: "button", editorState: editorState, config: config, subMenuView: onClick, 
        //@ts-ignore
        onCurrentStyle: function (styles) { return styles.color; } }));
}
exports.default = EditorBackground;
