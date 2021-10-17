"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWindowDimensions = exports.clientCoord = void 0;
function clientCoord(e) {
    var _a, _b, _c, _d;
    if (e instanceof TouchEvent) {
        return {
            x: ((_b = (_a = e === null || e === void 0 ? void 0 : e.changedTouches) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.clientX) || 0,
            y: ((_d = (_c = e === null || e === void 0 ? void 0 : e.changedTouches) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.clientY) || 0
        };
    }
    return {
        x: (e === null || e === void 0 ? void 0 : e.clientX) || 0,
        y: (e === null || e === void 0 ? void 0 : e.clientY) || 0
    };
}
exports.clientCoord = clientCoord;
function getWindowDimensions() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}
exports.getWindowDimensions = getWindowDimensions;
