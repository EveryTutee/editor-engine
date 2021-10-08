import { createElement } from "react";
import { EditorStateType } from "../component.types";

const EditorState = {
    __document__: document,
    editor: null,
    content: "",
    undoStack: [],
    redoStack: [],

    init: function () {
        this.__document__ = this.editor?.ownerDocument || document;
        this.__document__.execCommand('styleWithCSS', false, "true");
        this.__document__.execCommand('defaultParagraphSeparator', false, "p");
        this.content = "";
    },
    setEditor: function (node) {
        if (this.editor) return;
        this.editor = node;
    },
    createEmpty: function () {
        this.content = "";
        this.undoStack = [];
        this.redoStack = [];
        this.editor = null;

        return this;
    },
    setUndoStack: function (content: string) {
        this.undoStack.push(content);
    },
    setRedoStack: function (content: string) {
        this.redoStack.push(content);
    },

    undo: function () {
        const content = this.undoStack.pop();
        if (!content) return;

        this.setRedoStack(content);
        return content;
    },

    redo: function () {
        const content = this.redoStack.pop();
        if (!content) return;

        this.setUndoStack(content);
        return content;
    }






} as EditorStateType;

export default EditorState;