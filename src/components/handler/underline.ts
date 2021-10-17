import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export function underlineHandlerFn({ editorState }: HandlerFnProps) {
    editorState.__document__.execCommand('underline', false, 'true');
    return null;
}