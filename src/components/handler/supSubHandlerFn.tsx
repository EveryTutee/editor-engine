import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export default function ({ editorState, name }: HandlerFnProps) {
    editorState.__document__.execCommand(name, false, "true");

    return null;
}