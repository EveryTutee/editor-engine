"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToDataUrl = void 0;
var fileToDataUrl = function (file) { return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () { var _a; return resolve(((_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString()) || ""); };
    reader.onerror = function (error) { return reject(error); };
    reader.readAsDataURL(file);
}); };
exports.fileToDataUrl = fileToDataUrl;
