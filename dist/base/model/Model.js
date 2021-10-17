import React, { Fragment, useEffect, useRef, useState } from 'react';
const styleEvents = [
    'keyup',
    'mouseup'
];
export default function Model({ editorState, config, subMenuView, onCurrentStyle, btnType, accept }) {
    const { name, buttonIcon, type, handlerFn } = config;
    const btnRef = useRef(null);
    const [currAttributes, setCurrAttributes] = useState(null);
    function onBack() {
        subMenuView?.(null);
    }
    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        // handlerFn is expected to return nothing
        if (type === 'click')
            handlerFn({ e, name, editorState, onBack });
        // toggle to show expanded bar
        else if (type === 'submenu') {
            if (!subMenuView)
                throw Error("Sub menu is not provided");
            const subMenu = {
                Menu: handlerFn,
                props: { e, name, editorState, onBack }
            };
            if (subMenu)
                subMenuView((prev) => {
                    if (prev?.props.name === subMenu.props.name)
                        return null;
                    return subMenu;
                });
        }
    }
    useEffect(() => {
        if (!editorState.editor)
            return;
        function listener(e) {
            // styling highlights is still underway
            const selection = editorState.__document__.getSelection();
            if (!selection)
                return;
            const node = selection.focusNode?.parentElement;
            if (!node)
                return;
            const styles = window.getComputedStyle(node);
            if (onCurrentStyle) {
                setCurrAttributes(() => onCurrentStyle(styles));
            }
        }
        styleEvents.forEach(trigger => {
            editorState.editor?.addEventListener(trigger, listener, false);
        });
        return () => {
            styleEvents.forEach(trigger => {
                editorState.editor?.removeEventListener(trigger, listener, false);
            });
        };
    }, [editorState.editor, editorState.__document__, onCurrentStyle]);
    const file = (React.createElement(Fragment, null,
        React.createElement("label", { htmlFor: name, className: "modelLabel", ref: btnRef, ...currAttributes },
            React.createElement("input", { type: "file", style: { display: 'none' }, id: name, onChange: handleClick }),
            buttonIcon)));
    const button = (React.createElement("button", { id: name, title: name, className: "modelBtn", onClick: handleClick, ref: btnRef, ...currAttributes }, buttonIcon));
    /**
     * currAttributes = children => <p>{font_name}</p>
     */
    const text = (React.createElement("button", { id: name, title: name, className: "modelBtn", onClick: handleClick, ref: btnRef }, !!currAttributes ? currAttributes : buttonIcon));
    return (React.createElement(Fragment, null,
        btnType === 'file' && file,
        btnType === 'button' && button,
        btnType === 'text' && text));
}
