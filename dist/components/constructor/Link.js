"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var ai_1 = require("react-icons/ai");
var linkHandlerFn_1 = __importDefault(require("../handler/linkHandlerFn"));
var config = {
    name: "Link",
    type: "click",
    buttonIcon: (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(ai_1.AiOutlineLink, null),
        react_1.default.createElement("p", null, "Add URL"))),
    handlerFn: linkHandlerFn_1.default,
};
function Link(_a) {
    var editorState = _a.editorState;
    return react_1.default.createElement(Model_1.default, { btnType: "button", editorState: editorState, config: config });
}
exports.default = Link;
