"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorState = /** @class */ (function () {
    function EditorState() {
        var _this = this;
        this.__document__ = document;
        this.editor = null;
        this.content = "";
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
            _this.content = content;
            _this.undoStack = [];
            _this.redoStack = [];
            _this.editor.innerHTML = content;
        };
        this.init();
    }
    EditorState.prototype.init = function () {
        var _a;
        this.__document__ = ((_a = this.editor) === null || _a === void 0 ? void 0 : _a.ownerDocument) || document;
        this.__document__.execCommand('styleWithCSS', false, "true");
        this.__document__.execCommand('defaultParagraphSeparator', false, "p");
        this.content = "";
    };
    return EditorState;
}());
// const EditorState = {
//     __document__: document,
//     editor: null,
//     content: "",
//     undoStack: [],
//     redoStack: [],
//     init: function () {
//         this.__document__ = this.editor?.ownerDocument || document;
//         this.__document__.execCommand('styleWithCSS', false, "true");
//         this.__document__.execCommand('defaultParagraphSeparator', false, "p");
//         this.content = "";
//     },
//     setEditor: function (node) {
//         if (this.editor) return;
//         this.editor = node;
//     },
//     createEmpty: function () {
//         this.content = "";
//         this.undoStack = [];
//         this.redoStack = [];
//         this.editor = null;
//         this.init();
//         return this;
//     },
//     setUndoStack: function (content: string) {
//         this.undoStack.push(content);
//     },
//     setRedoStack: function (content: string) {
//         this.redoStack.push(content);
//     },
//     undo: function () {
//         const content = this.undoStack.pop();
//         if (!content) return;
//         this.setRedoStack(content);
//         return content;
//     },
//     redo: function () {
//         const content = this.redoStack.pop();
//         if (!content) return;
//         this.setUndoStack(content);
//         return content;
//     },
//     setContent: function (content: string) {
//         console.log(this.editor)
//         if (!this.editor) return;
//         this.content = content;
//         this.undoStack = [];
//         this.redoStack = [];
//         this.editor.innerHTML = content;
//     }
// } as EditorStateType;
exports.default = EditorState;
