import { EditorStateType } from "../../base/base.types";

export function italicsHandlerFn(editorState: EditorStateType) {
    editorState.__document__.execCommand('italic', false, 'true');
}