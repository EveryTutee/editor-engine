import React from 'react'
import { BsTextareaResize } from 'react-icons/bs';
import { ModelConfig } from '../../base/base.types'
import Model from '../../base/model/Model'
import { Textbox } from '../components.types'
import textboxHandlerFn from '../handler/textboxHandlerFn';



export default function Textbox({ editorState }: Textbox) {
    const config = {
        name: 'Textbox',
        type: 'click',
        buttonIcon: <BsTextareaResize />,
        handlerFn: textboxHandlerFn

    } as ModelConfig;
    return (
        <Model
            config={config}
            editorState={editorState}

        />
    )
}
