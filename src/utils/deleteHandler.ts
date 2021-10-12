import { unmountComponentAtNode } from "react-dom";
import { EditorStateType } from "../base/base.types";
import { removeDraggable } from "../base/model/Draggable";

export function deleteHandler(editorState: EditorStateType, parent: HTMLElement) {
    const ctxMenuHolder = parent.querySelector('.contextMenuWrapper') as Element;
    unmountComponentAtNode(ctxMenuHolder);
    ctxMenuHolder.remove();

    removeDraggable(editorState, parent);


}

export interface EventDetails {
    editorState: EditorStateType;
    parent: string;
}