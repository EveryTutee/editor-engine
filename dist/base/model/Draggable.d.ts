import { CSSProperties, ReactChild } from 'react';
import { EditorStateType } from '../base.types';
export declare const defaultName = "draggable";
export declare function Textbox({ childClassName, parentClassName, parentId, children, parentStyle, childId, childStyle, contentEditable }: TextboxProps): JSX.Element;
export declare function insertDraggable(editorState: EditorStateType, markup: JSX.Element, identifier: string, toShow?: string[]): void;
export declare function removeDraggable(editorState: EditorStateType, draggable: HTMLElement, toShow?: string[]): void;
interface TextboxProps {
    parentId: string;
    childId: string;
    parentClassName: string;
    childClassName: string;
    children: ReactChild;
    parentStyle: CSSProperties;
    childStyle: CSSProperties;
    editorState: EditorStateType;
    contentEditable: boolean;
}
export declare function draggableOnClick(parent: HTMLElement, editorState: EditorStateType, toShow?: string[]): void;
export {};
