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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function SubMenu(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    var _b = (0, react_1.useState)("#000"), color = _b[0], setColor = _b[1];
    var changer = (0, react_1.useMemo)(function () { return ({
        "Editor Background": function (value) {
            if (!editorState.editor)
                return;
            editorState.editor.style.setProperty("background-color", value);
        },
        "Font Color": function (value) {
            editorState.__document__.execCommand("foreColor", false, value);
        },
        Highlight: function (value) {
            editorState.__document__.execCommand("hiliteColor", false, value);
        },
    }); }, [editorState]);
    // useEffect(() => {
    //   const str = rgb2string(color);
    //   changer[name]?.(str);
    // }, [color, name]);
    function changeColor(e) {
        var _a;
        var value = e.target.value;
        console.log(e);
        setColor(value);
        (_a = changer[name]) === null || _a === void 0 ? void 0 : _a.call(changer, value);
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("input", { type: "color", onChange: changeColor, value: color })));
}
exports.default = SubMenu;
