import React, { CSSProperties, Fragment, ReactChild, useEffect, useRef } from 'react';
import { createPortal, hydrate, render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import ContextMenu from '../../UI/ContextMenu';
import getParent from '../../utils/getParent';
import { EditorStateType } from '../base.types';

export const defaultName = "draggable";

export function Textbox({ childClassName, parentClassName, parentId, children, parentStyle, childId, childStyle, contentEditable }: TextboxProps) {

    return (
        <div
            id={parentId}
            className={parentClassName + " " + defaultName}
            style={parentStyle}
            key={parentId + childId}
            contentEditable={contentEditable}
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

export function insertDraggable(editorState: EditorStateType, markup: JSX.Element, identifier: string) {
    const { editor } = editorState;
    if (!editor) return;
    const div = renderToString(markup);

    editor.innerHTML += div;
    const draggable = editor.querySelector(`#${identifier}`) as HTMLElement;
    if (!draggable) return;

    draggable.addEventListener('click', () => draggableOnClick(draggable, editorState), false);
    draggable.focus();
}

export function removeDraggable(editorState: EditorStateType, draggable: HTMLElement) {
    draggable.removeEventListener('click', () => draggableOnClick(draggable, editorState), false);
    draggable.remove();
    editorState.editor?.focus();
}


interface TextboxProps {
    parentId: string;
    childId: string;
    parentClassName: string;
    childClassName: string;
    children: ReactChild;
    parentStyle: CSSProperties;
    childStyle: CSSProperties;
    editorState: EditorStateType
    contentEditable: boolean;
}

export function draggableOnClick(parent: HTMLElement, editorState: EditorStateType) {
    if (parent.classList.contains('selectedBox')) return;
    parent.classList.add('selectedBox');
    parent.innerHTML += "<div class=\"contextMenuWrapper\"></div>";

    const contextMenuWrapper = parent.querySelector('.contextMenuWrapper') as HTMLDivElement;

    render(
        <ContextMenu parent={parent} editorState={editorState} />,
        contextMenuWrapper
    )

    // contextMenuWrapper.remove()
}
