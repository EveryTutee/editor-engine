import React from 'react'
import { Fa500Px } from 'react-icons/fa';
import { ModelConfig } from '../../base/base.types'
import Model from '../../base/model/Model'
import { Textbox } from '../components.types'
import textboxHandlerFn from '../handler/textboxHandlerFn';



export default function Textbox({ editorState }: Textbox) {
    const config = {
        name: 'Textbox',
        type: 'click',
        buttonIcon: <Fa500Px />,
        handlerFn: textboxHandlerFn

    } as ModelConfig;
    return (
        <Model
            config={config}
            editorState={editorState}

        />
    )
}
