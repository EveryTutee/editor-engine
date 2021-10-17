"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var colorHandlerFn_1 = __importDefault(require("../handler/colorHandlerFn"));
var config = {
    name: 'Font Color',
    type: 'submenu',
    buttonIcon: react_1.default.createElement("p", null, "default color"),
    handlerFn: colorHandlerFn_1.default
};
function ForeColor(_a) {
    var editorState = _a.editorState, onClick = _a.onClick;
    return (react_1.default.createElement(Model_1.default, { btnType: 'button', editorState: editorState, config: config, subMenuView: onClick, 
        //@ts-ignore
        onCurrentStyle: function (styles) { return (styles.color); } }));
}
exports.default = ForeColor;
