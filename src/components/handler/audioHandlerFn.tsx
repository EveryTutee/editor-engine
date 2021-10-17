import React, { CSSProperties, Fragment } from "react";
import { renderToString } from "react-dom/server";
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
    const { editor } = editorState;
    if (!target.files || !editor) return null;

    const file = target.files[0];
    if (!file) return;

    fileToDataUrl(file).then(src => {

        const parentId = uuid();
        const __text__ = (
            <Fragment>
                <audio
                    id={"Audio " + parentId}
                    data-name={file.name}
                    src={src}
                    controls={true}
                    controlsList='nodownload'
                    contextMenu=""
                    style={{
                        height: '60px',
                        width: '100%'
                    }}
                />
                <p><br /></p>
            </Fragment>);

        const audio = renderToString(__text__);
        editor.innerHTML += audio;



        target.value = "";

    });

    return null
}