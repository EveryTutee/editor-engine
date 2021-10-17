import { Dispatch, SetStateAction } from "react";
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

export interface FontStyle extends Constructor {
    onClick: Dispatch<SetStateAction<JSX.Element | null>>;
}

export interface Textbox extends Constructor {

}
export interface Image extends Constructor {

}
export interface Audio extends Constructor {

}
export interface Iframe extends Constructor {

}
export interface FontSize extends Constructor {
    onClick: Dispatch<SetStateAction<JSX.Element | null>>;
}