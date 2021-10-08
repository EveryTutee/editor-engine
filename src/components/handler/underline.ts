import { EditorStateType } from "../../base/base.types";

export function underlineHandlerFn(editorState: EditorStateType) {
    editorState.__document__.execCommand('underline', false, 'true');
}