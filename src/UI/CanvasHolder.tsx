import React from 'react'
import { EditorStateType } from '../base/base.types'
import { uuid } from '../utils/uuid';

export default function CanvasHolder({ editorState, shelf }: CanvasHolderProps) {
    function selectedCanvas(e: React.MouseEvent<HTMLImageElement>) {
        if (!editorState.editor) return;
        const target = e.target as HTMLImageElement;
        const src = target.src;
        const image = editorState.__document__.createElement('img');
        image.src = src;
        image.setAttribute('width', "100%");
        image.setAttribute('data-name', target.id);
        editorState.editor.appendChild(image);
    }
    return (
        <div className="canvasHolder">
            {shelf.map((value, index) => {
                let id = "Image" + uuid()
                return <img src={value} alt={index + ""} onClick={selectedCanvas} key={id} id={id} width="100%" />
            })}
        </div>
    )
}

interface CanvasHolderProps {
    editorState: EditorStateType;
    shelf: string[];

}
