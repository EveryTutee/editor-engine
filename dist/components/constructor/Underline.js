"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var fa_1 = require("react-icons/fa");
var underline_1 = require("../handler/underline");
var config = {
    name: 'Bold',
    type: 'click',
    buttonIcon: react_1.default.createElement(fa_1.FaUnderline, null),
    handlerFn: underline_1.underlineHandlerFn
};
function Underline(_a) {
    var editorState = _a.editorState;
    return (react_1.default.createElement(Model_1.default, { btnType: 'button', editorState: editorState, config: config }));
}
exports.default = Underline;
