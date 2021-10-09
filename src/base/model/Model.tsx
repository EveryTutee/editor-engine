import React, { Dispatch, HTMLAttributes, MouseEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import ReactDOM, { createPortal, render, unmountComponentAtNode } from 'react-dom';
import { EditorStateType, ModelConfig } from '../base.types'

export default function Model({ editorState, config, subMenuView, onCurrentStyle }: ModelProps) {
    const { name, buttonIcon, type, handlerFn } = config;
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const [currAttributes, setCurrAttributes] = useState<HTMLAttributes<HTMLButtonElement> | null>(null);

    function onBack() {
        subMenuView?.(null)
    }

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        e.stopPropagation();

        // handlerFn is expected to return nothing
        if (type === 'click') handlerFn(name, editorState, onBack);
        // toggle to show expanded bar
        else if (type === 'submenu') {
            if (!subMenuView) throw Error("Sub menu is not provided");
            const subMenu = handlerFn(name, editorState, onBack);
            if (subMenu)
                subMenuView((prev) => {
                    if (prev?.props.id === subMenu.props.id) return null;
                    return subMenu;
                });
        }
    }

    useEffect(() => {
        if (!editorState.editor) return;

        function listener(e: Event) {
            // styling highlights is still underway
            const selection = editorState.__document__.getSelection();
            console.log(selection)
            if (!selection) return;

            const node = selection.focusNode?.parentElement;
            if (!node) return;

            const styles = window.getComputedStyle(node);

            if (onCurrentStyle) {
                setCurrAttributes(() => onCurrentStyle(styles));
            }

        }

        editorState.editor.addEventListener('focus', listener, false)

        return () => {
            editorState.editor?.removeEventListener('focus', listener, false);
        }
    }, [editorState.editor, editorState.__document__])

    return (
        <button id={name} title={name} onClick={handleClick} ref={btnRef} {...currAttributes}>
            {buttonIcon}
        </button>
    )
}

interface ModelProps {
    editorState: EditorStateType;
    config: ModelConfig;
    subMenuView?: Dispatch<SetStateAction<JSX.Element | null>>;
    onCurrentStyle?: (styles: CSSStyleDeclaration) => HTMLAttributes<HTMLButtonElement>
}
