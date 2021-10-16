import React, { CSSProperties, Fragment } from 'react';
import { EditorStateType } from '../../base/base.types'
import { insertDraggable, Textbox } from '../../base/model/Draggable';
import { uuid } from '../../utils/uuid';

const parentStyle = {
    position: 'relative',
    width: '40%',
    height: '40%',
    minHeight: 'fit-content',
    zIndex: 1,
    cursor: 'pointer',

} as CSSProperties;

const childStyle = {
    height: "100%",
    width: "100%",
    pointerEvents: 'all',
    border: "1rem solid cyan",
    borderRadius: "0 15px 0 15px"
} as CSSProperties;


export default function iframeHandlerFn(e: any, name: string, editorState: EditorStateType) {
    const src = prompt("Paste Embedded link");
    if (!src) return;
    const childId = uuid();
    const parentId = uuid();
    const __text__ = (
        <Fragment>
            <Textbox
                parentClassName="iframeBoxWrapper"
                childClassName="iframeBox"
                parentId={name + parentId}
                childId={name + childId}
                parentStyle={parentStyle}
                childStyle={childStyle}
                editorState={editorState}
                contentEditable={false}
            >
                <iframe
                    frameBorder="0"
                    src={src}
                    width="100%"
                    height="100%"
                    style={{
                        opacity: "inherit",
                    }}>
                </iframe>
            </Textbox>
            <p><br /></p>
        </Fragment>
    );

    insertDraggable(editorState, __text__, name + parentId, ['resize']);

    return null;
}