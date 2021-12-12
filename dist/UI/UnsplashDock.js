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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Draggable_1 = require("../base/model/Draggable");
var fileToDataUrl_1 = require("../utils/fileToDataUrl");
var uuid_1 = require("../utils/uuid");
var parentStyle = {
    position: "absolute",
    width: "100px",
    height: "auto",
    minHeight: "fit-content",
    top: "60px",
    zIndex: 1,
    cursor: "pointer",
};
var childStyle = {
    height: "100%",
    width: "100%",
};
function UnsplashDock(_a) {
    var _this = this;
    var editorState = _a.editorState, onBack = _a.onBack, name = _a.name;
    var _b = (0, react_1.useState)({ items: [], DataisLoaded: false }), unslapshSearch = _b[0], setUnsplashSearch = _b[1];
    var _c = (0, react_1.useState)(""), searchKey = _c[0], setSearchKey = _c[1];
    var _d = (0, react_1.useState)(null), image = _d[0], setImage = _d[1];
    var _e = (0, react_1.useState)(false), loading = _e[0], setLoading = _e[1];
    function getImages(e) {
        var value = e ? e.target.value : "";
        console.log(value);
        setSearchKey(value);
    }
    (0, react_1.useEffect)(function () {
        var timeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var res, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.unsplash.com/search/photos/?page=1&query=" +
                            searchKey +
                            "&client_id=n3uKfn5DuxU6jNwLwMUb5ehAL-bDxCJBwY8gLj5F-Wo&sig=123")];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        json = _a.sent();
                        setUnsplashSearch({
                            items: json.results,
                            DataisLoaded: true,
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 4000);
        return function () {
            clearTimeout(timeout);
        };
    }, [searchKey]);
    function handleUnsplashImage(item) {
        var url = item.urls.regular;
        var name = item.user.name;
        var userlink = item.user.links.html;
        var selfLink = item.links.self;
        var childId = (0, uuid_1.uuid)();
        var parentId = (0, uuid_1.uuid)();
        fetch(url)
            .then(function (res) { return res.blob(); })
            .then(function (blob) { return (0, fileToDataUrl_1.fileToDataUrl)(blob); })
            .then(function (src) {
            var __text__ = (react_1.default.createElement(Draggable_1.Textbox, { parentClassName: "imageBoxWrapper", childClassName: "imageBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: false },
                react_1.default.createElement("img", { "data-type": "unsplash", "data-name": name, "data-userlink": userlink, "data-selfLink": selfLink, src: src, style: {
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        opacity: "inherit",
                    } })));
            (0, Draggable_1.insertDraggable)(editorState, __text__, name + parentId);
        });
    }
    return (react_1.default.createElement("div", { id: "subMenu" + name, className: "subMenuWrapper" },
        react_1.default.createElement("div", { className: "subMenuHeading" },
            react_1.default.createElement("button", { onClick: function () { return onBack(document.getElementById("subMenu" + name)); } }, "Back"),
            react_1.default.createElement("span", null, loading ? "loading" : name)),
        react_1.default.createElement("div", { className: "unsplashInput" },
            react_1.default.createElement("input", { type: "text", onChange: getImages })),
        react_1.default.createElement("div", { className: "unsplashGallery" }, unslapshSearch === null || unslapshSearch === void 0 ? void 0 : unslapshSearch.items.map(function (item, index) { return (react_1.default.createElement("img", { src: item.urls.small, alt: item.alt_description, key: index, onClick: function () { return handleUnsplashImage(item); } })); }))));
}
exports.default = UnsplashDock;
/**
 *
 *
 */
