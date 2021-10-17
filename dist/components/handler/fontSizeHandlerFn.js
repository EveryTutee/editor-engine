import React from 'react';
export default function fontSizeHandlerFn({ editorState, onBack, name }) {
    function onClick(e) {
        const target = e.target;
        if (!target)
            return;
        const value = target.id;
        editorState.__document__.execCommand('fontSize', false, "7");
        document.querySelectorAll(`span`)
            .forEach((span) => {
            if (span.style.fontSize === 'xxx-large')
                span.style.fontSize = value;
        });
    }
    return (React.createElement("div", { id: "subMenu" + name },
        React.createElement("div", null,
            React.createElement("button", { onClick: () => onBack?.(document.getElementById("subMenu" + name)) }, "Back"),
            React.createElement("span", null, name)),
        React.createElement("div", null, FONT_SIZE.map((value, key) => (React.createElement("button", { id: value, key: value + key, onClick: onClick }, value))))));
}
export const FONT_SIZE = [
    '6px',
    '4px',
    '8px',
    '10px',
    '11px',
    '12px',
    '13px',
    '14px',
    '16px',
    '18px',
    '24px',
    '32px',
    '48px',
    '56px',
    '64px',
    '72px',
    '96px',
    '144px'
];
