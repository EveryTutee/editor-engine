import React, { CSSProperties, Fragment, ReactChild, useEffect, useRef } from 'react';
import { createPortal, hydrate, render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import ContextMenu from '../../UI/ContextMenu';
import { EditorStateType } from '../base.types';

export const defaultName = "draggable";

export function Textbox({ childClassName, parentClassName, parentId, children, parentStyle, childId, childStyle }: TextboxProps) {

    return (
        <div
            id={parentId}
            className={parentClassName + " " + defaultName}
            style={parentStyle}
        >
            <div
                id={childId}
                style={childStyle}
                className={childClassName}
            >
                {children}
            </div>
        </div>
    )
}

export function insertDraggable(editorState: EditorStateType, markup: JSX.Element) {
    const { editor } = editorState;
    if (!editor) return;
    const div = renderToString(markup);

    editor.innerHTML += div;

    const draggable = editor.querySelector("." + defaultName) as HTMLDivElement;
    if (!draggable) return;

    draggable.addEventListener('click', (e) => draggableOnClick(e, draggable, editorState), false);
    draggable.focus();
}

export function removeDraggable(editorState: EditorStateType, draggable: HTMLElement) {
    draggable.removeEventListener('click', (e) => draggableOnClick(e, draggable, editorState), false);
    draggable.remove();
    editorState.editor?.focus();
}


interface TextboxProps {
    parentId: string;
    childId: string;
    parentClassName: string;
    childClassName: string;
    children: ReactChild;
    contentEditable?: boolean;
    parentStyle: CSSProperties;
    childStyle: CSSProperties;
    editorState: EditorStateType
}

export function draggableOnClick(e: Event, parent: HTMLElement, editorState: EditorStateType) {
    if (parent.classList.contains('selectedBox')) return;
    parent.classList.add('selectedBox');
    parent.innerHTML += "<div class=\"contextMenuWrapper\"></div>"
    const contextMenuWrapper = document.querySelector('.contextMenuWrapper') as HTMLDivElement;

    render(
        <ContextMenu parent={parent} editorState={editorState} />,
        contextMenuWrapper
    )

    // contextMenuWrapper.remove()
}
