import React, { CSSProperties } from "react";
import { EditorStateType } from "../../base/base.types";
import { insertDraggable, Textbox } from "../../base/model/Draggable";
import { fileToDataUrl } from "../../utils/fileToDataUrl";
import { uuid } from "../../utils/uuid";

const parentStyle = {
    position: 'absolute',
    width: '100px',
    height: 'auto',
    minHeight: 'fit-content',
    top: '60px',
    zIndex: 1,
    cursor: 'pointer'

} as CSSProperties;

const childStyle = {
    height: "100%",
    width: "100%",
} as CSSProperties;

export default function imageHandlerFn(e: React.MouseEvent<HTMLInputElement>, name: string, editorState: EditorStateType) {
    const target = e.target as HTMLInputElement;
    if (!target.files) return null;

    const file = target.files[0];
    if (!file) return;

    fileToDataUrl(file).then(src => {
        const childId = uuid();
        const parentId = uuid();
        const __text__ = (
            <Textbox
                parentClassName="imageBoxWrapper"
                childClassName="imageBox"
                parentId={name + parentId}
                childId={name + childId}
                parentStyle={parentStyle}
                childStyle={childStyle}
                editorState={editorState}
                contentEditable={false}
            >
                <img
                    src={src}
                    style={{
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        opacity: "inherit"
                    }} />
            </Textbox>);

        insertDraggable(editorState, __text__, name + parentId);

        target.value = "";

    });

    return null
}