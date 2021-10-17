"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var im_1 = require("react-icons/im");
var Model_1 = __importDefault(require("../../base/model/Model"));
var iframeHandlerFn_1 = __importDefault(require("../handler/iframeHandlerFn"));
var config = {
    buttonIcon: react_1.default.createElement(im_1.ImEmbed, null),
    handlerFn: iframeHandlerFn_1.default,
    name: "Iframe",
    type: 'click'
};
function Iframe(_a) {
    var editorState = _a.editorState;
    return (react_1.default.createElement(Model_1.default, { btnType: 'button', config: config, editorState: editorState }));
}
exports.default = Iframe;
