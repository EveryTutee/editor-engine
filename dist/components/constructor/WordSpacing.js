"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var cg_1 = require("react-icons/cg");
var wordSpacingHandlerFn_1 = __importDefault(require("../handler/wordSpacingHandlerFn"));
var config = {
    buttonIcon: react_1.default.createElement(cg_1.CgSpaceBetween, null),
    name: "word-spacing",
    type: 'submenu',
    handlerFn: wordSpacingHandlerFn_1.default,
};
function WordSpacing(_a) {
    var editorState = _a.editorState, onClick = _a.onClick;
    return (react_1.default.createElement(Model_1.default, { config: config, editorState: editorState, btnType: 'button', onCurrentStyle: function (styles) { return (styles.fontSize); }, subMenuView: onClick }));
}
exports.default = WordSpacing;
