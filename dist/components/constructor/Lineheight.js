"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var md_1 = require("react-icons/md");
var lineheightHandlerFn_1 = __importDefault(require("../handler/lineheightHandlerFn"));
var config = {
    buttonIcon: react_1.default.createElement(md_1.MdFormatLineSpacing, null),
    name: "line-height",
    type: 'submenu',
    handlerFn: lineheightHandlerFn_1.default,
};
function Lineheight(_a) {
    var editorState = _a.editorState, onClick = _a.onClick;
    return (react_1.default.createElement(Model_1.default, { config: config, editorState: editorState, btnType: 'button', onCurrentStyle: function (styles) { return (styles.fontSize); }, subMenuView: onClick }));
}
exports.default = Lineheight;
