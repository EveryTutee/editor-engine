import React from 'react';
import { uuid } from '../utils/uuid';
export default function CanvasHolder({ editorState, shelf }) {
    function selectedCanvas(e) {
        const target = e.target;
        editorState.editor?.appendChild(target);
    }
    return (React.createElement("div", { className: "canvasHolder" }, shelf.map((value, index) => (React.createElement("img", { src: value, alt: index + "", onClick: selectedCanvas, id: "Image" + uuid(), width: "100%" })))));
}
