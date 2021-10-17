import { EditorStateType } from "../../base/base.types";

export default function (e: any, name: string, editorState: EditorStateType) {
    editorState.__document__.execCommand(name, false, "true");

    return null;
}