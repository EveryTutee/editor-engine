"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var alignHandlerFn_1 = __importDefault(require("../handler/alignHandlerFn"));
var ai_1 = require("react-icons/ai");
var config = {
    name: "alignCenter",
    type: "click",
    buttonIcon: react_1.default.createElement(ai_1.AiOutlineAlignCenter, null),
    handlerFn: alignHandlerFn_1.default,
};
function AlignLeft(_a) {
    var editorState = _a.editorState;
    return (react_1.default.createElement(Model_1.default, { btnType: "button", editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: function (styles) { return ({
            "data-selected": styles.textAlign === "center",
        }); } }));
}
exports.default = AlignLeft;
