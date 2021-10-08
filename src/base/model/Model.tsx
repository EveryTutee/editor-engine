import React, { MouseEvent, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { EditorStateType, ModelConfig } from '../base.types'

export default function Model({ editorState, config, attachToDiv }: ModelProps) {
    const { name, buttonIcon, type, handlerFn } = config;
    const btnRef = useRef<HTMLButtonElement | null>(null);

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        e.stopPropagation();

        // handlerFn is expected to return nothing
        if (type === 'click') handlerFn(editorState);
        // handlerFn is expected to return JSX
        else if (type === 'submenu') {
            const sub = handlerFn(editorState);
            if (sub)
                ReactDOM.render(sub, attachToDiv || btnRef.current);
        }
    }
    return (
        <button id={name} title={name} onClick={handleClick} ref={btnRef}>
            {buttonIcon}
        </button>
    )
}

interface ModelProps {
    editorState: EditorStateType;
    config: ModelConfig;
    attachToDiv?: HTMLDivElement;
}
