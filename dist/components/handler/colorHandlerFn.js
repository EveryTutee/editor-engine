import React from 'react';
import Colorpicker from '../../UI/Colorpicker';
export default function colorHandlerFn({ editorState, onBack, name }) {
    function onChange(color) {
        // const cmd = name === 'Font Color' ? 'foreColor' : 'hiliteColor';
        editorState.__document__.execCommand('foreColor', false, color);
    }
    return (React.createElement("div", { id: "subMenu" + name },
        React.createElement("div", null,
            React.createElement("button", { onClick: () => onBack(document.getElementById("subMenu" + name)) }, "Back"),
            React.createElement("span", null, name)),
        React.createElement(Colorpicker, { value: "#000", onChange: onChange })));
}
