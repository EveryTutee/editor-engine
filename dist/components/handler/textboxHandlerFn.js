import React from 'react';
import { insertDraggable, Textbox } from '../../base/model/Draggable';
import { uuid } from '../../utils/uuid';
const parentStyle = {
    position: 'absolute',
    width: '40%',
    height: '40%',
    minHeight: 'fit-content',
    top: '60px',
    zIndex: 1,
    cursor: 'pointer'
};
const childStyle = {
    padding: "0.25rem 0.75rem",
    height: "100%",
    width: "100%",
};
export default function textboxHandlerFn({ editorState, name, }) {
    const childId = uuid();
    const parentId = uuid();
    const __text__ = (React.createElement(Textbox, { parentClassName: "textBoxWrapper", childClassName: "textBox", parentId: name + parentId, childId: name + childId, parentStyle: parentStyle, childStyle: childStyle, editorState: editorState, contentEditable: true },
        React.createElement("p", { style: {
                backgroundColor: 'transparent',
                width: "100%",
                height: "1em",
                resize: "none",
                wordWrap: "break-word",
                pointerEvents: "none",
                opacity: "inherit"
            } },
            React.createElement("br", null))));
    insertDraggable(editorState, __text__, name + parentId);
    return null;
}
