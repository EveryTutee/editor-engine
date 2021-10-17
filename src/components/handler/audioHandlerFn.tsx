import React, { CSSProperties, Fragment } from "react";
import { renderToString } from "react-dom/server";
import { EditorStateType, HandlerFnProps } from "../../base/base.types";
import { fileToDataUrl } from "../../utils/fileToDataUrl";
import { uuid } from "../../utils/uuid";

export default function audioHandlerFn({ e, editorState }: HandlerFnProps) {
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
