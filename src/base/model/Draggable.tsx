import React, { CSSProperties, Fragment, ReactChild, useEffect, useRef } from 'react';
import { createPortal, hydrate, render } from 'react-dom';
import ContextMenu from '../../UI/ContextMenu';
import { EditorStateType } from '../base.types';

export function Textbox({ className, parentId, children, style, editorState }: TextboxProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const parent = ref.current.parentElement as HTMLElement;
        if (!parent) return;


        parent.addEventListener('click', (e) => draggableOnClick(e, parent, editorState), false);

        return () => {
            parent.addEventListener('click', e => draggableOnClick(e, parent, editorState), false);

        }
    }, [ref.current])

    return (
        <Fragment>
            <div
                id={parentId}
                style={style}
                className={`${className}`}
                ref={ref}
            >
                {children}
            </div>
        </Fragment>
    )
}

export const parentDiv = (className: string, parentId: string, style: { [key: string]: string }) => (`
    <div 
        id="${parentId}"
        class="${className}"
        style="${JSON.stringify(style)
        .replaceAll("\"", "")
        .replaceAll("{", "")
        .replaceAll(",", ";")
        .replaceAll("}", ";")}"
        >
    </div>
`);



interface TextboxProps {
    parentId: string;
    className: string;
    children: ReactChild;
    contentEditable?: boolean;
    style: CSSProperties;
    editorState: EditorStateType
}

function draggableOnClick(e: Event, parent: HTMLElement, editorState: EditorStateType) {
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
