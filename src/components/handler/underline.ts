import { EditorStateType } from "../../base/base.types";

export function underlineHandlerFn(e: any, name: string, editorState: EditorStateType) {
    editorState.__document__.execCommand('underline', false, 'true');
    return null;
}