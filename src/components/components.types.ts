import { EditorStateType } from "../base/base.types";

interface Constructor {
    editorState: EditorStateType
}

export interface Bold extends Constructor {

}
export interface Italics extends Constructor {

}
export interface Underline extends Constructor {

}