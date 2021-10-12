import { EditorStateType } from "../base/base.types";

export interface ContextMenuWrapper {
    editorState: EditorStateType;
    parent: HTMLElement;
}

export interface ContextMenuItemsProps {
    editorState: EditorStateType;
    parent: HTMLElement;

}