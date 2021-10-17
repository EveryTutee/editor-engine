/// <reference types="react" />
import { EditorStateType } from '../base/base.types';
export default function CanvasHolder({ editorState, shelf }: CanvasHolderProps): JSX.Element;
interface CanvasHolderProps {
    editorState: EditorStateType;
    shelf: string[];
}
export {};
