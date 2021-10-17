class EditorState {
    __document__ = document;
    editor = null;
    content = "";
    undoStack = [];
    redoStack = [];
    constructor() {
        this.init();
    }
    init() {
        this.__document__ = this.editor?.ownerDocument || document;
        this.__document__.execCommand('styleWithCSS', false, "true");
        this.__document__.execCommand('defaultParagraphSeparator', false, "p");
        this.content = "";
    }
    setEditor = (node) => {
        if (this.editor)
            return;
        this.editor = node;
    };
    setUndoStack = (content) => {
        this.undoStack.push(content);
    };
    setRedoStack = (content) => {
        this.redoStack.push(content);
    };
    undo = () => {
        const content = this.undoStack.pop();
        if (!content)
            return;
        this.setRedoStack(content);
        return content;
    };
    redo = () => {
        const content = this.redoStack.pop();
        if (!content)
            return;
        this.setUndoStack(content);
        return content;
    };
    setContent = (content) => {
        console.log(this.editor);
        if (!this.editor)
            return;
        this.content = content;
        this.undoStack = [];
        this.redoStack = [];
        this.editor.innerHTML = content;
    };
}
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
export default EditorState;
