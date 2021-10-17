import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export function italicsHandlerFn({ editorState }: HandlerFnProps) {
    editorState.__document__.execCommand('italic', false, 'true');
    return null
}