import React from 'react';
import { EditorStateType, HandlerFnProps } from "../../base/base.types";
import { execBlockStyle } from '../../utils/domManipulation';

const baseWordSpacing = 0.25

export default function ({ editorState, name, onBack }: HandlerFnProps) {

    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLElement;
        if (!target) return;
        const value = parseInt(target.id);
        const sValue = (value * baseWordSpacing) + "rem";

        execBlockStyle(name, sValue, editorState.__document__);

    }

    return (
        <div id={"subMenu" + name}>
            <div>
                <button onClick={() => onBack?.(document.getElementById("subMenu" + name))}>Back</button>
                <span>{name}</span>
            </div>

            <div>
                {WORD_SPACING.map((value, key) => (
                    <button id={value} key={value + key} onClick={onClick}>{value}</button>
                ))}
            </div>

        </div>
    )
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
]