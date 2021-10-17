import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { EditorStateType, HandlerFn, HandlerFnProps } from "../base/base.types";

export interface ShowNavType {
    Menu: FunctionComponent<HandlerFnProps>;
    props: any;
}
type OnClick = Dispatch<SetStateAction<ShowNavType | null>>;

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
    onClick: OnClick;
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
    onClick: OnClick;
}
export interface Align extends Constructor {

}
export interface WordSpacing extends Constructor {
    onClick: OnClick;
}
export interface LineHeight extends Constructor {
    onClick: OnClick;
}
export interface Bullets extends Constructor {

}