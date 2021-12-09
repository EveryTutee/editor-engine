"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validURL = void 0;
var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
function validURL(str) {
    if (!str)
        return false;
    console.log(parseFloat(str.replaceAll("http://", "").replaceAll("https://", "").trim()) === NaN);
    return (parseFloat(str.replaceAll("http://", "").replaceAll("https://", "").trim()) === NaN && pattern.test(str));
}
exports.validURL = validURL;
