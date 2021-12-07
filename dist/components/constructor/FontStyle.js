"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var fontstyle_1 = __importDefault(require("../handler/fontstyle"));
var config = {
    type: "submenu",
    name: "Font Name",
    buttonIcon: react_1.default.createElement("p", null, "Font"),
    handlerFn: fontstyle_1.default,
};
function FontStyle(_a) {
    var editorState = _a.editorState, onClick = _a.onClick;
    return (react_1.default.createElement(Model_1.default, { config: config, editorState: editorState, subMenuView: onClick, btnType: "text", onCurrentStyle: function (styles) { return styles.fontFamily; } }));
}
exports.default = FontStyle;
