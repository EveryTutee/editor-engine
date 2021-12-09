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
function UnsplashDock(_a) {
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    var _b = (0, react_1.useState)({ items: [], DataisLoaded: false }), unslapshSearch = _b[0], setUnsplashSearch = _b[1];
    function getImages(query) {
        fetch("https://api.unsplash.com/photos/?client_id=n3uKfn5DuxU6jNwLwMUb5ehAL-bDxCJBwY8gLj5F-Wo")
            .then(function (res) { return res.json(); })
            .then(function (json) {
            setUnsplashSearch({
                items: json,
                DataisLoaded: true
            });
        });
    }
    if (unslapshSearch === null || unslapshSearch === void 0 ? void 0 : unslapshSearch.DataisLoaded) {
        console.log(unslapshSearch === null || unslapshSearch === void 0 ? void 0 : unslapshSearch.items);
    }
    else {
        getImages("");
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, name)),
        react_1.default.createElement("div", { className: "unsplashInput" },
            react_1.default.createElement("input", { type: "text" })),
        react_1.default.createElement("div", { className: "unsplashGallery" })));
}
exports.default = UnsplashDock;
