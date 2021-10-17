"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var bs_1 = require("react-icons/bs");
var Model_1 = __importDefault(require("../../base/model/Model"));
var textboxHandlerFn_1 = __importDefault(require("../handler/textboxHandlerFn"));
var config = {
    name: 'Textbox',
    type: 'click',
    buttonIcon: react_1.default.createElement(bs_1.BsTextareaResize, null),
    handlerFn: textboxHandlerFn_1.default
};
function Textbox(_a) {
    var editorState = _a.editorState;
    return (react_1.default.createElement(Model_1.default, { config: config, editorState: editorState, btnType: 'button' }));
}
exports.default = Textbox;
