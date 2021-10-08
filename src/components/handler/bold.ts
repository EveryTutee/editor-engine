import { EditorStateType } from "../../base/base.types";

export function boldHandlerFn(editorState: EditorStateType) {
    editorState.__document__.execCommand('bold', false, 'true');
}