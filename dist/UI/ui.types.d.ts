import { EditorStateType } from "../base/base.types";
export interface ContextMenuWrapper {
    editorState: EditorStateType;
    parent: HTMLElement;
    toShow?: string[];
}
export interface ContextMenuItemsProps {
    editorState: EditorStateType;
    parent: HTMLElement;
    toShow?: string[];
}
