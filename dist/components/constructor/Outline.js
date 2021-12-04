"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var outlineHandlerFn_1 = __importDefault(require("../handler/outlineHandlerFn"));
var config = {
    buttonIcon: react_1.default.createElement("p", null, "Outline"),
    name: "Outline",
    type: "submenu",
    handlerFn: outlineHandlerFn_1.default,
};
function Outline(_a) {
    var editorState = _a.editorState, onClick = _a.onClick;
    return (react_1.default.createElement(Model_1.default, { config: config, btnType: "button", editorState: editorState, subMenuView: onClick }));
}
exports.default = Outline;
