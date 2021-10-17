import React from "react";
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
};
const childStyle = {
    height: "100%",
    width: "100%",
};
export default function imageHandlerFn({ e, editorState, name }) {
    const target = e.target;
    if (!target.files)
        return null;
    const file = target.files[0];
    if (!file)
        return;
    fileToDataUrl(file).then(src => {
        const childId = uuid();
        const parentId = uuid();
        const __text__ = (React.createElement(Textbox, { parentClassName: "imageBoxWrapper", childClassName: "imageBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: false },
            React.createElement("img", { "data-name": file.name, src: src, style: {
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    opacity: "inherit"
                } })));
        insertDraggable(editorState, __text__, name + parentId);
        target.value = "";
    });
    return null;
}
