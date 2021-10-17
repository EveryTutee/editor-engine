import React, { Fragment } from "react";
import { renderToString } from "react-dom/server";
import { fileToDataUrl } from "../../utils/fileToDataUrl";
import { uuid } from "../../utils/uuid";
export default function audioHandlerFn({ e, editorState }) {
    const target = e.target;
    const { editor } = editorState;
    if (!target.files || !editor)
        return null;
    const file = target.files[0];
    if (!file)
        return;
    fileToDataUrl(file).then(src => {
        const parentId = uuid();
        const __text__ = (React.createElement(Fragment, null,
            React.createElement("audio", { id: "Audio " + parentId, "data-name": file.name, src: src, controls: true, controlsList: 'nodownload', contextMenu: "", style: {
                    height: '60px',
                    width: '100%'
                } }),
            React.createElement("p", null,
                React.createElement("br", null))));
        const audio = renderToString(__text__);
        editor.innerHTML += audio;
        target.value = "";
    });
    return null;
}
