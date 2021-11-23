import React, { CSSProperties, ReactPortal } from "react";
export interface EditorProps {
    className: string;
    editorState: EditorStateType;
    onChange?: (e: EditorStateType) => void;
    placeholder?: string;
    readonly?: boolean;
    id: string;
    value?: string;
    type?: "editor" | "canvas";
    maxcount: number;
    style: CSSProperties;
}
export interface EditorStateType {
    __document__: Document;
    editor: HTMLDivElement | null;
    cleanMarkUp: HTMLDivElement | null;
    content: string;
    text: string;
    undoStack: string[];
    redoStack: string[];
    setEditor: (elem: HTMLDivElement) => void;
    init: () => void;
    setUndoStack: (content: string) => void;
    setRedoStack: (content: string) => void;
    undo: () => string | undefined;
    redo: () => string | undefined;
    setText: (value: string) => void;
    setContent: (content: string) => void;
}
export interface ModelConfig {
    name: string;
    buttonIcon: JSX.Element | SVGAElement;
    type: "click" | "submenu";
    handlerFn: (props: HandlerFnProps) => ReactPortal | null;
}
export declare type HandlerFn = React.FunctionComponent<HandlerFnProps>;
export interface HandlerFnProps {
    e: React.MouseEvent<HTMLInputElement>;
    name: string;
    editorState: EditorStateType;
    onBack: (container: Element | null) => void;
}
