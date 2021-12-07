"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var bs_1 = require("react-icons/bs");
var Model_1 = __importDefault(require("../../base/model/Model"));
var imageHandlerFn_1 = __importDefault(require("../handler/imageHandlerFn"));
var config = {
    name: 'Imagebox',
    type: 'click',
    buttonIcon: react_1.default.createElement("div", { className: "modelIcon" },
        react_1.default.createElement(bs_1.BsFileImage, null),
        react_1.default.createElement("p", null, "Image")),
    handlerFn: imageHandlerFn_1.default
};
function Image(_a) {
    var editorState = _a.editorState;
    return (react_1.default.createElement(Model_1.default, { editorState: editorState, config: config, btnType: 'file', accept: "image/*" }));
}
exports.default = Image;
