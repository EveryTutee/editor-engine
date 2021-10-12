import React, { Fragment, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { EditorStateType } from '../../base/base.types'
import { parentDiv, Textbox } from '../../base/model/Draggable';
import { uuid } from '../../utils/uuid';

const textBoxStyle = {
    position: "absolute",
    width: "40%",
    height: "40%",
    "min-height": 'fit-content',
    top: "60px",
    "z-index": "1",
    cursor: "pointer"
}

export default function textboxHandlerFn(name: string, editorState: EditorStateType) {
    const childId = uuid();
    const parentId = uuid();
    const __text__ = (
        <Textbox
            className="textBox"
            parentId={name + childId}
            style={{
                padding: "0.25rem 0.75rem",
                height: "100%",
                width: "100%",
            }}
            editorState={editorState}
        >
            <p style={{
                backgroundColor: 'transparent',
                width: "100%",
                height: "1em",
                resize: "none",
                wordWrap: "break-word",
                pointerEvents: "none",
                opacity: "inherit"
            }}>
                <br />
            </p>
        </Textbox>);

    if (!editorState.editor) return null;
    editorState.editor.innerHTML += parentDiv('textBoxWrapper', name + parentId, textBoxStyle)
    const div = document.getElementById(name + parentId);
    ReactDOM.render(
        __text__,
        div
    )

    return null;
}


