import React, { CSSProperties, Fragment, useEffect, useRef, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { EditorStateType } from '../../base/base.types'
import { defaultName, insertDraggable, Textbox } from '../../base/model/Draggable';
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

const parentStyle = {
    position: 'absolute',
    width: '40%',
    height: '40%',
    minHeight: 'fit-content',
    top: '60px',
    zIndex: 1,
    cursor: 'pointer'

} as CSSProperties;

const childStyle = {
    padding: "0.25rem 0.75rem",
    height: "100%",
    width: "100%",
} as CSSProperties;


export default function textboxHandlerFn(name: string, editorState: EditorStateType) {
    const childId = uuid();
    const parentId = uuid();
    const __text__ = (
        <Textbox
            parentClassName="textBoxWrapper"
            childClassName="textBox"
            parentId={name + parentId}
            childId={name + childId}
            parentStyle={parentStyle}
            childStyle={childStyle}
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

    insertDraggable(editorState, __text__);

    return null;
}


