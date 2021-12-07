"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execBlockStyle = exports.execStyle = exports.containerIterator = exports.getPosition = exports.getHeadElement = void 0;
function getHeadElement(element) {
    var nodeName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nodeName[_i - 1] = arguments[_i];
    }
    if (!element)
        return;
    while (element) {
        if (nodeName.includes(element.nodeName.toLowerCase()) ||
            nodeName.includes(element.nodeName) ||
            element.nodeName === 'BODY' ||
            element.nodeName === 'HTML')
            break;
        element = element.parentElement;
    }
    return element;
}
exports.getHeadElement = getHeadElement;
function getPosition(startContainer, endContainer) {
    var position = startContainer.compareDocumentPosition(endContainer);
    if (position & 0x02)
        return 'before';
    return 'after';
}
exports.getPosition = getPosition;
function containerIterator(startContainer, endContainer, iterCallback) {
    if (!startContainer || !endContainer)
        return;
    if (startContainer === endContainer) {
        iterCallback(startContainer);
        return;
    }
    var pos = getPosition(startContainer, endContainer);
    console.log("This is position", pos);
    var iter = startContainer;
    while (true) {
        if (!iter)
            break;
        iterCallback(iter);
        if (iter === endContainer) {
            break;
        }
        iter = (pos === 'before' ? iter.previousSibling : iter.nextSibling);
        // iterCallback(iter);
    }
}
exports.containerIterator = containerIterator;
function execStyle(command, value, document) {
    var sel = document.getSelection();
    if (!sel)
        return;
    var range = sel.getRangeAt(0);
    var startContainer = range.startContainer, endContainer = range.endContainer;
    var startNode = getHeadElement(startContainer, 'P');
    var endNode = getHeadElement(endContainer, 'P');
    if (!startNode || !endNode)
        return;
    containerIterator(startNode, endNode, function (pIter) {
        var children = pIter.children;
        //@ts-ignore
        Array.from(children).forEach(function (child, key) {
            var style = child.style, nodeName = child.nodeName, nodeValue = child.nodeValue, outerHTML = child.outerHTML;
            // if (nodeName === 'BR') return;
            if (nodeName === 'SPAN') {
                style.setProperty(command, value);
            }
            else {
                var span = document.createElement('span');
                span.setAttribute('style', "".concat(command, ": ").concat(value, ";"));
                span.innerHTML = outerHTML || nodeValue;
                child.replaceWith(span);
            }
        });
        pIter.normalize();
    });
    range.detach();
}
exports.execStyle = execStyle;
function execBlockStyle(command, value, document) {
    var sel = document.getSelection();
    if (!sel)
        return;
    var range = sel.getRangeAt(0);
    var startContainer = range.startContainer, endContainer = range.endContainer;
    var startNode = getHeadElement(startContainer, 'P');
    var endNode = getHeadElement(endContainer, 'P');
    if (!startNode || !endNode)
        return;
    containerIterator(startNode, endNode, function (iter) {
        iter.style.setProperty(command, value);
        iter.normalize();
    });
    range.detach();
}
exports.execBlockStyle = execBlockStyle;
