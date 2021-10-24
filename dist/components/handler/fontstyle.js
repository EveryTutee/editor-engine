"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontStyleArray = void 0;
var react_1 = __importDefault(require("react"));
function fontstyleHandlerFn(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    function onClick(e) {
        var element = e.target;
        if (!element)
            return;
        var value = element.id;
        console.log(value);
        editorState.__document__.execCommand("fontName", false, value);
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", { className: "subMenuExpanded" }, exports.fontStyleArray.map(function (value, key) { return (react_1.default.createElement("button", { className: "modelBtn", id: value, key: value + key, onClick: onClick, style: {
                fontFamily: value
            } }, value)); }))));
}
exports.default = fontstyleHandlerFn;
exports.fontStyleArray = [
    "Arial",
    "Arial Black",
    "Courier New",
    "Times New Roman",
    "Abhaya Libre",
    "Alfa Slab One",
    "Amatic SC",
    "Andada Pro",
    "Anton",
    "Archivo",
    "Bebas Neue",
    "BioRhyme",
    "Bungee",
    "Cabin Sketch",
    "Caveat",
    "Caveat Brush",
    "Codystar",
    "Comfortaa",
    "Cookie",
    "Cormorant",
    "Courier Prime",
    "EB Garamond",
    "Encode Sans",
    "Epilogue",
    "Ewert",
    "Great Vibes",
    "Hahmlet",
    "Inter",
    "JetBrains Mono",
    "Kalam",
    "Lato",
    "Lobster",
    "Lora",
    "Manrope",
    "Marienda",
    "Merrieweather",
    "Monofett",
    "Monoton",
    "Montserrat",
    "Mountains of Christmas",
    "Nunito",
    "Old Standard TT",
    "Open Sans",
    "Oswald",
    "Oxygen",
    "Pacifico",
    "Patrick Hand",
    "Playfair Display",
    "Poppins",
    "Raleway",
    "Roboto",
    "Sacramento",
    "Shadows Into Light",
    "Sora",
    "Source Sans Pro",
    "Special Elite",
    "Spectral",
    "Staatliches",
    "Work Sans",
];
