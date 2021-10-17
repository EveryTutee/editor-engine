import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export default function supSubHandlerFn({ editorState, name }: HandlerFnProps) {
    editorState.__document__.execCommand(name, false, "true");

    return null;
}