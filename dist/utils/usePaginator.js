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
function parseConfig(config, pos) {
    var key = config.key;
    var queryString = "";
    Object.keys(config.query).forEach(function (key) {
        queryString += key + "=" + config.query[key] + "&";
    });
    return config.endpoint + "?" + queryString + config.key + "=" + pos;
}
function usePaginator(config, parser, reset) {
    var _this = this;
    var ismounted = (0, react_1.useRef)(false);
    var _a = (0, react_1.useState)(1), pos = _a[0], setPos = _a[1];
    var _b = (0, react_1.useState)(null), data = _b[0], setData = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(), error = _d[0], setError = _d[1];
    (0, react_1.useEffect)(function () {
        setPos(1);
    }, [reset]);
    (0, react_1.useEffect)(function () {
        ismounted.current = true;
        return function () {
            ismounted.current = false;
        };
    }, []);
    var makeRequest = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var data_1, json, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(parseConfig(config, pos))];
                case 2:
                    data_1 = _a.sent();
                    return [4 /*yield*/, data_1.json()];
                case 3:
                    json = _a.sent();
                    setData(parser(json));
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    setError(error_1);
                    return [3 /*break*/, 5];
                case 5:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); }, [config, pos, reset, config.endpoint]);
    (0, react_1.useEffect)(function () {
        if (!config.endpoint || !ismounted.current)
            return;
        makeRequest();
    }, [config.endpoint, pos, reset]);
    var _e = (0, react_1.useMemo)(function () { return data || { maxBullet: 1, list: [] }; }, [data]), _f = _e.maxBullet, maxBullet = _f === void 0 ? 1 : _f, _g = _e.list, list = _g === void 0 ? [] : _g;
    function nextPage() {
        setPos(function (x) { return x + 1; });
    }
    function prevPage() {
        setPos(function (x) { return x - 1; });
    }
    return {
        index: pos,
        list: list,
        Paginator: function (_a) {
            var renderer = _a.renderer;
            if (loading)
                return react_1.default.createElement("p", null, "Loading...");
            return (react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement("div", { className: "bulletWrapper" },
                    react_1.default.createElement("button", { className: "prev", disabled: pos <= 1, onClick: prevPage }, "< prev"),
                    react_1.default.createElement("div", { className: "bullet" },
                        react_1.default.createElement("p", null, pos),
                        react_1.default.createElement("span", null, "of"),
                        react_1.default.createElement("p", null, maxBullet)),
                    react_1.default.createElement("button", { className: "next", disabled: pos >= maxBullet, onClick: nextPage }, "next >")),
                error && react_1.default.createElement("pre", null, JSON.stringify(error, null, 2)),
                react_1.default.createElement(react_1.Fragment, null, renderer)));
        },
    };
}
exports.default = usePaginator;
