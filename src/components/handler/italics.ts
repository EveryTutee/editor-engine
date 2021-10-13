import { EditorStateType } from "../../base/base.types";

export function italicsHandlerFn(e: any, name: string, editorState: EditorStateType) {
    editorState.__document__.execCommand('italic', false, 'true');
    return null
}