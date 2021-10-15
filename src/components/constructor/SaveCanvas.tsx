import React from 'react'
import { EditorStateType } from '../../base/base.types'
import { removeContext } from '../../base/core/utils';

export default function SaveCanvas({ editorState, onClick, display }: SaveCanvasProps) {

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const value = editorState.content;
        if (!editorState.editor) return
        onClick?.(value, editorState.editor.getBoundingClientRect())
        editorState.setContent("<p><br/></p>");
    }

    return (
        <button onClick={handleClick}>
            {display}
        </button>
    )
}

interface SaveCanvasProps {
    editorState: EditorStateType;
    onClick?: (value: string, editorDim: DOMRect) => void;
    display: HTMLElement;

}
