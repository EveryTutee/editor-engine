import { EditorStateType } from "../../base/base.types";

export function italicsHandlerFn(name: string, editorState: EditorStateType) {
    editorState.__document__.execCommand('italic', false, 'true');
    return null
}