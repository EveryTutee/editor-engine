
export interface EditorProps {
    editorState: EditorStateType;
    onChange?: (e: EditorStateType) => void;
    placeholder?: string;
    readonly?: string;
    id: string;
}

export interface EditorStateType {
    __document__: Document;
    editor: HTMLDivElement | null;
    content: string;
    undoStack: string[];
    redoStack: string[];

    setEditor: (elem: HTMLDivElement) => void;
    init: () => void;
    createEmpty: () => EditorStateType;
    setUndoStack: (content: string) => void;
    setRedoStack: (content: string) => void;

    undo: () => string;
    redo: () => string;

};