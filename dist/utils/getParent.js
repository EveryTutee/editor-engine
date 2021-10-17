"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getParent(element, queryParent) {
    var __element__ = element;
    var parent = document.querySelector(queryParent);
    if (!parent) {
        console.error("could not find query element");
        return element;
    }
    ;
    while (__element__ !== parent) {
        __element__ = __element__.parentElement;
        if (__element__.nodeName === 'BODY') {
            console.error("No parent found");
            return element;
        }
    }
    console.log("This is parent", __element__);
    return __element__;
}
exports.default = getParent;
