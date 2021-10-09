import React, { MouseEvent, useRef } from 'react'
import { EditorStateType } from '../../base/base.types'

export default function fontstyleHandlerFn(name: string, editorState: EditorStateType, onBack: (container: Element | null) => void) {
    function onClick(e: MouseEvent<HTMLLIElement>) {
        const element = e.target as HTMLLIElement;
        if (!element) return;

        const value = element.id;

        editorState.__document__.execCommand('fontName', false, value);

    }

    return (
        <div id={"subMenu" + name}>
            <div>
                <button onClick={() => onBack(document.getElementById("subMenu" + name))}>Back</button>
                <span>{name}</span>
            </div>

            <ul>
                {fontStyleArray.map((value, key) => (
                    <li id={value} key={value + key} onClick={onClick}>{value}</li>
                ))}
            </ul>

        </div>
    )
}

export const fontStyleArray = [

]
