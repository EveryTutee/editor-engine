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
            editorState.editor.style.setProperty("background", value);
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
    var changeColor = function (value) {
        var _a;
        setColor(value);
        (_a = changer[name]) === null || _a === void 0 ? void 0 : _a.call(changer, value);
    };
    function changeColorInput(e) {
        var value = e.target.value;
        changeColor(value);
    }
    function changeColorBtn(e) {
        var value = e.target.id;
        changeColor(value);
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", { className: "currentColor" },
            react_1.default.createElement("input", { className: "colorPickerInput", type: "color", onChange: changeColorInput, value: color })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("span", { className: "colorHeading" }, "Standard colors"),
        react_1.default.createElement("div", { className: "defaultColors" }, colorBox.map(function (color, index) { return (react_1.default.createElement("button", { key: color + index, className: "colorBox", style: { background: color }, id: color, onClick: changeColorBtn })); })),
        name == "Editor Background" && (react_1.default.createElement("div", { className: "" },
            react_1.default.createElement("span", { className: "colorHeading" }, "Gradients"),
            react_1.default.createElement("div", { className: "defaultColors" }, colorgradient.map(function (grad, index) { return (react_1.default.createElement("button", { className: "gradientBox", key: index + grad, id: grad, style: {
                    background: grad,
                }, onClick: changeColorBtn })); }))))));
}
exports.default = SubMenu;
var colorBox = [
    "#000000",
    "#545454",
    "#737373",
    "#a6a6a6",
    "#d9d9d9",
    "#ffffff",
    "#ff1616",
    "#ff5757",
    "#ff66c4",
    "#cb6ce6",
    "#8c52ff",
    "#5e17eb",
    "#03989e",
    "#00c2cb",
    "#5ce1e6",
    "#38b6ff",
    "#5271ff",
    "#004aad",
    "#008037",
    "#7ed957",
    "#c9e265",
    "#ffde59",
    "#ffbd59",
    "#ff914d",
];
var colorgradient = [
    "linear-gradient(135deg, rgba(253,251,251,1) 0%, rgba(235,237,238,1) 100%)",
    "linear-gradient(135deg, rgba(245,247,250,1) 0%, rgba(195,207,226,1) 100%)",
    "inear-gradient(135deg, rgba(207,217,223,1) 0%, rgba(226,235,240,1) 100%)",
    "linear-gradient(135deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%)",
    "linear-gradient(165deg, rgba(255,154,158,1) 0%, rgba(250,208,196,1) 100%)",
    "linear-gradient(135deg, rgba(161,196,253,1) 0%, rgba(194,233,251,1) 100%)",
    "linear-gradient(135deg, rgba(163,189,237,1) 0%, rgba(160,186,235,1) 46%, rgba(105,145,199,1) 100%)",
    "linear-gradient(135deg, rgba(137,247,254,1) 0%, rgba(102,166,255,1) 100%)",
    "linear-gradient(165deg, rgba(19,84,122,1) 0%, rgba(94,170,175,1) 22%, rgba(209,226,227,1) 43%, rgba(231,251,252,1) 57%, rgba(128,208,199,1) 100%)",
    "linear-gradient(165deg, rgba(57,46,46,1) 2%, rgba(0,0,0,1) 100%)",
];
