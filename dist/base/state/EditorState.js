"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorState = /** @class */ (function () {
    function EditorState() {
        var _this = this;
        this.__document__ = document;
        this.editor = null;
        this.content = "";
        this.text = "";
        this.cleanMarkUp = null;
        this.undoStack = [];
        this.redoStack = [];
        this.setEditor = function (node) {
            if (_this.editor)
                return;
            _this.editor = node;
        };
        this.setUndoStack = function (content) {
            _this.undoStack.push(content);
        };
        this.setRedoStack = function (content) {
            _this.redoStack.push(content);
        };
        this.undo = function () {
            var content = _this.undoStack.pop();
            if (!content)
                return;
            _this.setRedoStack(content);
            return content;
        };
        this.redo = function () {
            var content = _this.redoStack.pop();
            if (!content)
                return;
            _this.setUndoStack(content);
            return content;
        };
        this.setContent = function (content) {
            console.log(_this.editor);
            if (!_this.editor)
                return;
            var div = document.createElement('div');
            div.innerHTML = content.trim();
            var first = div.firstElementChild;
            if (!first)
                return;
            _this.cleanMarkUp = first;
            _this.content = first.outerHTML;
            _this.setText(first.outerText);
            _this.undoStack = [];
            _this.redoStack = [];
            _this.editor.innerHTML = first.innerHTML;
            var style = first.getAttribute('style');
            style && _this.editor.setAttribute('style', style);
        };
        this.setText = function (value) {
            _this.text = value;
        };
        this.init();
    }
    EditorState.prototype.init = function () {
        var _a;
        this.__document__ = ((_a = this.editor) === null || _a === void 0 ? void 0 : _a.ownerDocument) || document;
        this.__document__.execCommand("styleWithCSS", false, "true");
        this.__document__.execCommand("defaultParagraphSeparator", false, "p");
        this.content = "";
    };
    return EditorState;
}());
exports.default = EditorState;
