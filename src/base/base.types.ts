import { ReactElement } from "react";

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

export interface ModelConfig {
    name: string;
    buttonIcon: JSX.Element | SVGAElement;
    type: 'click' | 'submenu';
    handlerFn: (editorState: EditorStateType) => JSX.Element | void;
}