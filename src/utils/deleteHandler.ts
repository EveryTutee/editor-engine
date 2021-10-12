import { unmountComponentAtNode } from "react-dom";
import { EditorStateType } from "../base/base.types";

export function deleteHandler(editorState: EditorStateType, parent: HTMLElement) {
    if (!editorState.editor) return;
    const event = new CustomEvent('deletebox', {
        detail: {
            editorState,
            parent: parent.id
        } as EventDetails
    });

    editorState.editor.dispatchEvent(event);


}

export interface EventDetails {
    editorState: EditorStateType;
    parent: string;
}