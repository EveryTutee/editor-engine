import React from 'react';
import { EditorStateType } from "../../base/base.types";

export default function (e: any, name: string, editorState: EditorStateType, onBack?: (container: Element | null) => void) {

    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLElement;
        if (!target) return;
        const value = target.id;

        editorState.__document__.execCommand('fontSize', false, "7");

        (document.querySelectorAll(`span[style="font-size: xxx-large;"]`) as NodeListOf<HTMLSpanElement>)
            .forEach((span: HTMLSpanElement) => {
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