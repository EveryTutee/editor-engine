"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringManipulation_1 = require("../../utils/stringManipulation");
function default_1(_a) {
    var editorState = _a.editorState;
    if (!editorState.editor)
        return null;
    var sText = editorState.__document__.getSelection();
    if (!sText || sText.isCollapsed)
        return null;
    var link = prompt("Enter a URL:", "http://");
    if (!(0, stringManipulation_1.validURL)(link))
        return null;
    var htmlString = "<a href=".concat(link, " target=\"_blank\">").concat(sText.toString(), "</a>");
    editorState.__document__.execCommand("insertHTML", false, htmlString);
    return null;
}
exports.default = default_1;
