import React from 'react';
import { execBlockStyle } from '../../utils/domManipulation';
export default function lineheightHandlerFn({ name, editorState, onBack }) {
    function onClick(e) {
        const target = e.target;
        if (!target)
            return;
        const value = target.id;
        execBlockStyle(name, value, editorState.__document__);
    }
    return (React.createElement("div", { id: "subMenu" + name },
        React.createElement("div", null,
            React.createElement("button", { onClick: () => onBack?.(document.getElementById("subMenu" + name)) }, "Back"),
            React.createElement("span", null, name)),
        React.createElement("div", null, LINE_HEIGHT.map((value, key) => (React.createElement("button", { id: value, key: value + key, onClick: onClick }, value))))));
}
export const LINE_HEIGHT = [
    '1',
    '1.15',
    '1.5',
    '2'
];
