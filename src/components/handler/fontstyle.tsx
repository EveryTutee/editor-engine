import React, { MouseEvent, useRef } from 'react'
import { EditorStateType } from '../../base/base.types'

export default function fontstyleHandlerFn(name: string, editorState: EditorStateType, onBack: (container: Element | null) => void) {
    function onClick(e: MouseEvent<HTMLButtonElement>) {
        const element = e.target as HTMLButtonElement;
        if (!element) return;


        const value = element.id;
        console.log(value)

        editorState.__document__.execCommand('fontName', false, value);

    }

    return (
        <div id={"subMenu" + name}>
            <div>
                <button onClick={() => onBack(document.getElementById("subMenu" + name))}>Back</button>
                <span>{name}</span>
            </div>

            <div>
                {fontStyleArray.map((value, key) => (
                    <button id={value} key={value + key} onClick={onClick}>{value}</button>
                ))}
            </div>

        </div>
    )
}

export const fontStyleArray = [
    "Arial",
    "Verdana",
    "Helvetica",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Brush Script MT"

]
