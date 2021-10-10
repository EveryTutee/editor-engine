import { EditorStateType } from "../../base/base.types";

export function underlineHandlerFn(name: string, editorState: EditorStateType) {
    editorState.__document__.execCommand('underline', false, 'true');
    return null;
}