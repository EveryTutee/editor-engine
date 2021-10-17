import React from 'react';
import { EditorStateType } from "../../base/base.types";
import { execBlockStyle } from '../../utils/domManipulation';

export default function (e: any, name: string, editorState: EditorStateType, onBack?: (container: Element | null) => void) {

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