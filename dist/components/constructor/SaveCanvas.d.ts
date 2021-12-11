/// <reference types="react" />
import { EditorStateType } from "../../base/base.types";
export default function SaveCanvas({ editorState, onClick, display, onStart, onEnd, }: SaveCanvasProps): JSX.Element;
interface Metadata {
    name: string;
    userlink: string;
    selflink: string;
}
interface SaveCanvasProps {
    editorState: EditorStateType | null;
    onClick?: (value: string, text: string, metadata: Metadata[]) => void;
    display: JSX.Element;
    onStart: () => void;
    onEnd: () => void;
}
export {};
