"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var ai_1 = require("react-icons/ai");
var linkHandlerFn_1 = __importDefault(require("../handler/linkHandlerFn"));
var config = {
    name: "Link",
    type: "click",
    buttonIcon: (react_1.default.createElement("div", { className: "modelIcon" },
        react_1.default.createElement(ai_1.AiOutlineLink, null),
        react_1.default.createElement("p", null, "Add URL"))),
    handlerFn: linkHandlerFn_1.default,
};
function Link(_a) {
    var editorState = _a.editorState;
    return react_1.default.createElement(Model_1.default, { btnType: "button", editorState: editorState, config: config });
}
exports.default = Link;
