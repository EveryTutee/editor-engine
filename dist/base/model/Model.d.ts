/// <reference types="react" />
import { OnClick } from "../../components/components.types";
import { EditorStateType, ModelConfig } from "../base.types";
export default function Model({ editorState, config, subMenuView, onCurrentStyle, btnType, accept, }: ModelProps): JSX.Element;
interface ModelProps {
    editorState: EditorStateType;
    config: ModelConfig;
    subMenuView?: OnClick;
    onCurrentStyle?: (styles: CSSStyleDeclaration) => any;
    btnType: "file" | "button" | "text";
    accept?: string;
}
export {};
