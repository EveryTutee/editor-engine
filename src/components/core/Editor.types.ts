
export interface EditorProps {
    editorState: EditorState;
    onChange?: (e: EditorState) => void;
    placeholder?: string;
    readonly?: string;
    id: string;
}

export interface EditorState {
    __document__: Document;
    __window__: Window & typeof globalThis;
    isIE: boolean;
    isIE_Edge: boolean;
    isOSX_IOS: boolean;
    editor: HTMLElement | null;
    init: (r: HTMLDivElement) => void


};