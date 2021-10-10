import { EditorStateType } from "../../base/base.types";

export function boldHandlerFn(name: string, editorState: EditorStateType) {
    editorState.__document__.execCommand('bold', false, 'true');
    return null
}