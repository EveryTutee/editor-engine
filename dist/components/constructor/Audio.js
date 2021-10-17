"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var bs_1 = require("react-icons/bs");
var Model_1 = __importDefault(require("../../base/model/Model"));
var audioHandlerFn_1 = __importDefault(require("../handler/audioHandlerFn"));
var config = {
    buttonIcon: react_1.default.createElement(bs_1.BsMusicNoteList, null),
    handlerFn: audioHandlerFn_1.default,
    name: "Audio",
    type: 'click'
};
function Audio(_a) {
    var editorState = _a.editorState;
    return (react_1.default.createElement(Model_1.default, { btnType: 'file', config: config, editorState: editorState, accept: 'audio/*' }));
}
exports.default = Audio;
