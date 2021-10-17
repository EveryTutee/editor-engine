import React from 'react';
import { EditorStateType, HandlerFnProps } from "../../base/base.types";
import { execBlockStyle } from '../../utils/domManipulation';

export default function ({ name, editorState, onBack }: HandlerFnProps) {

    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLElement;
        if (!target) return;
        const value = target.id;

        execBlockStyle(name, value, editorState.__document__);

    }

    return (
        <div id={"subMenu" + name}>
            <div>
                <button onClick={() => onBack?.(document.getElementById("subMenu" + name))}>Back</button>
                <span>{name}</span>
            </div>

            <div>
                {LINE_HEIGHT.map((value, key) => (
                    <button id={value} key={value + key} onClick={onClick}>{value}</button>
                ))}
            </div>

        </div>
    )
}

export const LINE_HEIGHT = [
    '1',
    '1.15',
    '1.5',
    '2'
]