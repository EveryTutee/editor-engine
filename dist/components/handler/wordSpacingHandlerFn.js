import React from 'react';
import { execBlockStyle } from '../../utils/domManipulation';
const baseWordSpacing = 0.25;
export default function wordSpacingHandlerFn({ editorState, name, onBack }) {
    function onClick(e) {
        const target = e.target;
        if (!target)
            return;
        const value = parseInt(target.id);
        const sValue = (value * baseWordSpacing) + "rem";
        execBlockStyle(name, sValue, editorState.__document__);
    }
    return (React.createElement("div", { id: "subMenu" + name },
        React.createElement("div", null,
            React.createElement("button", { onClick: () => onBack?.(document.getElementById("subMenu" + name)) }, "Back"),
            React.createElement("span", null, name)),
        React.createElement("div", null, WORD_SPACING.map((value, key) => (React.createElement("button", { id: value, key: value + key, onClick: onClick }, value))))));
}
export const WORD_SPACING = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8'
];
