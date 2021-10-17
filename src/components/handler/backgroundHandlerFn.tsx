import React, { MouseEvent, useEffect, useMemo, useRef, useState } from 'react'
import { EditorStateType, HandlerFnProps } from '../../base/base.types'
import Colorpicker from '../../UI/Colorpicker';

export default function backgroundHandlerFn({ editorState, onBack, name }: HandlerFnProps) {

    function onChange(color: string) {
        if (!editorState.editor) return;
        editorState.editor.style.setProperty('background', color);
    }

    return (
        <div id={"subMenu" + name}>
            <div>
                <button onClick={() => onBack(document.getElementById("subMenu" + name))}>Back</button>
                <span>{name}</span>
            </div>

            <Colorpicker value={"#000"} onChange={onChange} />

        </div>
    )
}