import React from 'react';
import { EditorStateType, HandlerFnProps } from "../../base/base.types";

export default function ({ editorState, onBack, name }: HandlerFnProps) {

    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLElement;
        if (!target) return;
        const value = target.id;

        editorState.__document__.execCommand('fontSize', false, "7");

        (document.querySelectorAll(`span`) as NodeListOf<HTMLSpanElement>)
            .forEach((span: HTMLSpanElement) => {
                if (span.style.fontSize === 'xxx-large')
                    span.style.fontSize = value;
            })

    }

    return (
        <div id={"subMenu" + name}>
            <div>
                <button onClick={() => onBack?.(document.getElementById("subMenu" + name))}>Back</button>
                <span>{name}</span>
            </div>

            <div>
                {FONT_SIZE.map((value, key) => (
                    <button id={value} key={value + key} onClick={onClick}>{value}</button>
                ))}
            </div>

        </div>
    )
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
]