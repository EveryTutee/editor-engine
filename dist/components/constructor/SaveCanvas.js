import React, { Fragment, useRef } from 'react';
import html2canvas from 'html2canvas';
export default function SaveCanvas({ editorState, onClick, display }) {
    const displayRef = useRef(null);
    function handleClick(e) {
        if (!editorState.editor || !displayRef.current)
            return;
        const value = editorState.content;
        let editor = editorState.editor;
        const __display__ = displayRef.current;
        __display__.innerHTML = value;
        html2canvas(displayRef.current).then(canvas => {
            const dataUrl = canvas.toDataURL('image/png');
            onClick?.(dataUrl, editor.getBoundingClientRect());
            editorState.setContent("<p><br/></p>");
            __display__.innerHTML = "";
        });
    }
    return (React.createElement(Fragment, null,
        React.createElement("button", { onClick: handleClick }, display),
        React.createElement("div", { ref: displayRef })));
}
