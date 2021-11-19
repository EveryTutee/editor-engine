declare class EditorState {
    __document__: Document;
    editor: HTMLDivElement | null;
    content: string;
    text: string;
    undoStack: string[];
    redoStack: string[];
    constructor();
    init(): void;
    setEditor: (node: HTMLDivElement) => void;
    setUndoStack: (content: string) => void;
    setRedoStack: (content: string) => void;
    undo: () => string | undefined;
    redo: () => string | undefined;
    setContent: (content: string) => void;
    setText: (value: string) => void;
}
export default EditorState;
