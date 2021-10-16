import React from 'react'
import { EditorStateType } from '../base/base.types'
import { uuid } from '../utils/uuid';

export default function CanvasHolder({ editorState, shelf }: CanvasHolderProps) {
    function selectedCanvas(e: React.MouseEvent<HTMLImageElement>) {
        const target = e.target as HTMLImageElement;
        editorState.editor?.appendChild(target);
    }
    return (
        <div className="canvasHolder">
            {shelf.map((value, index) => (
                <img src={value} alt={index + ""} onClick={selectedCanvas} id={"Image" + uuid()} width="100%" />
            ))}
        </div>
    )
}

interface CanvasHolderProps {
    editorState: EditorStateType;
    shelf: string[];

}
