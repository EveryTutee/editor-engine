import { EditorStateType } from "../base/base.types";
export declare function deleteHandler(editorState: EditorStateType, parent: HTMLElement): void;
export interface EventDetails {
    editorState: EditorStateType;
    parent: string;
}
