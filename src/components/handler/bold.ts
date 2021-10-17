import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export function boldHandlerFn({ editorState }: HandlerFnProps) {
    editorState.__document__.execCommand('bold', false, 'true');
    return null
}