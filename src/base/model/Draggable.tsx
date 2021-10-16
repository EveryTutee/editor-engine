import React, { CSSProperties, Fragment, ReactChild, useEffect, useRef } from 'react';
import { createPortal, hydrate, render } from 'react-dom';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
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

export function insertDraggable(editorState: EditorStateType, markup: JSX.Element, identifier: string, toShow?: string[]) {
    const { editor } = editorState;
    if (!editor) return;
    const div = renderToStaticMarkup(markup);

    editor.innerHTML += div;
    const draggable = editor.querySelector(`#${identifier}`) as HTMLElement;
    if (!draggable) return;

    draggable.addEventListener('click', () => draggableOnClick(draggable, editorState, toShow), false);
    draggable.focus();
}

export function removeDraggable(editorState: EditorStateType, draggable: HTMLElement, toShow?: string[]) {
    draggable.removeEventListener('click', () => draggableOnClick(draggable, editorState, toShow), false);
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

export function draggableOnClick(parent: HTMLElement, editorState: EditorStateType, toShow?: string[]) {
    if (parent.classList.contains('selectedBox')) return;
    parent.classList.add('selectedBox');
    parent.innerHTML += "<div class=\"contextMenuWrapper\"></div>";

    const contextMenuWrapper = parent.querySelector('.contextMenuWrapper') as HTMLDivElement;

    render(
        <ContextMenu parent={parent} editorState={editorState} toShow={toShow} />,
        contextMenuWrapper
    )

    // contextMenuWrapper.remove()
}
