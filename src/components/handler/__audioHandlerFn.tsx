import React, { CSSProperties } from "react";
import { EditorStateType } from "../../base/base.types";
import { insertDraggable, Textbox } from "../../base/model/Draggable";
import { fileToDataUrl } from "../../utils/fileToDataUrl";
import { uuid } from "../../utils/uuid";

const parentStyle = {
    position: 'absolute',
    width: '90%',
    height: '80px',
    minHeight: 'fit-content',
    top: '60px',
    zIndex: 1,
    cursor: 'pointer',
    backgroundColor: 'cyan',
    borderRadius: '10px 45px 10px 45px',

} as CSSProperties;

const childStyle = {
    height: "100%",
    width: "100%",
    pointerEvents: 'all',
    margin: 'auto',
    padding: '1rem'
} as CSSProperties;

export default function audioHandlerFn(e: React.MouseEvent<HTMLInputElement>, name: string, editorState: EditorStateType) {
    const target = e.target as HTMLInputElement;
    if (!target.files) return null;

    const file = target.files[0];
    if (!file) return;

    fileToDataUrl(file).then(src => {
        const childId = uuid();
        const parentId = uuid();
        const __text__ = (
            <Textbox
                parentClassName="audioBoxWrapper"
                childClassName="audioBox"
                parentId={name + parentId}
                childId={name + childId}
                parentStyle={parentStyle}
                childStyle={childStyle}
                editorState={editorState}
                contentEditable={false}
            >
                <audio
                    data-name={file.name}
                    src={src}
                    controls={true}
                    controlsList='nodownload'
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                />
            </Textbox>);

        insertDraggable(editorState, __text__, name + parentId);

        target.value = "";

    });

    return null
}
