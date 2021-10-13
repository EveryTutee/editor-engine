
export interface EditorProps {
    editorState: EditorStateType;
    onChange?: (e: EditorStateType) => void;
    placeholder?: string;
    readonly?: string;
    id: string;
    type: 'editor' | 'canvas';
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

    setContent: (content: string) => void;

};

export interface ModelConfig {
    name: string;
    buttonIcon: JSX.Element | SVGAElement;
    type: 'click' | 'submenu';
    handlerFn: (e: React.MouseEvent<HTMLInputElement>, name: string, editorState: EditorStateType, onBack: (container: Element | null) => void) => JSX.Element | null;
}