import React from 'react';
import Colorpicker from '../../UI/Colorpicker';
export default function backgroundHandlerFn({ editorState, onBack, name }) {
    function onChange(color) {
        if (!editorState.editor)
            return;
        editorState.editor.style.setProperty('background', color);
    }
    return (React.createElement("div", { id: "subMenu" + name },
        React.createElement("div", null,
            React.createElement("button", { onClick: () => onBack(document.getElementById("subMenu" + name)) }, "Back"),
            React.createElement("span", null, name)),
        React.createElement(Colorpicker, { value: "#000", onChange: onChange })));
}
