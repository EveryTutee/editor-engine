import React from "react";
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
};
const childStyle = {
    height: "100%",
    width: "100%",
    pointerEvents: 'all',
    margin: 'auto',
    padding: '1rem'
};
export default function audioHandlerFn(e, name, editorState) {
    const target = e.target;
    if (!target.files)
        return null;
    const file = target.files[0];
    if (!file)
        return;
    fileToDataUrl(file).then(src => {
        const childId = uuid();
        const parentId = uuid();
        const __text__ = (React.createElement(Textbox, { parentClassName: "audioBoxWrapper", childClassName: "audioBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: false },
            React.createElement("audio", { "data-name": file.name, src: src, controls: true, controlsList: 'nodownload', style: {
                    height: '100%',
                    width: '100%'
                } })));
        insertDraggable(editorState, __text__, name + parentId);
        target.value = "";
    });
    return null;
}
