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
        editorState.__document__.execCommand('fontName', false, value);
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name },
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", null, exports.fontStyleArray.map(function (value, key) { return (react_1.default.createElement("button", { id: value, key: value + key, onClick: onClick }, value)); }))));
}
exports.default = fontstyleHandlerFn;
exports.fontStyleArray = [
    'Arial',
    'Arial Black',
    'Courier New',
    'Times New Roman',
    'Abhaya Libre',
    'Alfa slab one',
    'Amatic SC',
    'Andada Pro',
    'Anton',
    'Archivo',
    'Bebas Neue',
    'BioRhyme',
    'Bungee',
    'cabin sketch',
    'Caveat',
    'Caveat brush',
    'codystar',
    'comfortaa',
    'cookie',
    'Cormorant',
    'Courier prime',
    'EB garamond',
    'Encode Sans',
    'Epilogue',
    'ewert',
    'Great Vibes',
    'Hahmlet',
    'Inter',
    'JetBrains Mono',
    'kalam',
    'Lato',
    'lobster',
    'Lora',
    'Manrope',
    'marienda',
    'Merrieweather',
    'monofett',
    'Monoton',
    'Montserrat',
    'mountains of Christmas',
    'Nunito',
    'Old Standard TT',
    'Open Sans',
    'Oswald',
    'Oxygen',
    'Pacifico',
    'Patrick hand',
    'Playfair Display',
    'Poppins',
    'Raleway',
    'Roboto',
    'Sacramento',
    'shadows into light',
    'Sora',
    'Source Sans Pro',
    'Special Elite',
    'Spectral',
    'staatliches',
    'Work Sans',
];
