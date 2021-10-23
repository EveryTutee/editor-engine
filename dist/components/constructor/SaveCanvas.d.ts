/// <reference types="react" />
import { EditorStateType } from "../../base/base.types";
export default function SaveCanvas({ editorState, onClick, display, }: SaveCanvasProps): JSX.Element;
interface SaveCanvasProps {
    editorState: EditorStateType | null;
    onClick?: (value: string, editorDim: DOMRect) => void;
    display: JSX.Element;
}
export {};
