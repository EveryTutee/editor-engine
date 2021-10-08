import React from 'react';
import { EditorProps } from './Editor.types';

// Returns the Editor or MainTextArea :)
export default function Editor({ editorState, placeholder, readonly, id, }: EditorProps) {

    return (
        <div
            className="main_editor"
            ref={editorState.init}
        >

        </div>
    )
}
