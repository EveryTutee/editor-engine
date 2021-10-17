"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Model_1 = __importDefault(require("../../base/model/Model"));
var md_1 = require("react-icons/md");
var listHandlerFn_1 = require("../handler/listHandlerFn");
var config = {
    name: 'Numbers',
    type: 'click',
    buttonIcon: react_1.default.createElement(md_1.MdFormatListBulleted, null),
    handlerFn: listHandlerFn_1.listHandlerFn
};
function Numbers(_a) {
    var editorState = _a.editorState;
    return (react_1.default.createElement(Model_1.default, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: function (styles) { return ({
            "data-selected": styles.fontWeight === '700'
        }); } }));
}
exports.default = Numbers;
