import React from 'react';
import { ImEmbed } from 'react-icons/im';
import { ModelConfig } from '../../base/base.types';
import Model from '../../base/model/Model';
import { Iframe } from '../components.types'
import iframeHandlerFn from '../handler/iframeHandlerFn';

const config = {
    buttonIcon: <ImEmbed />,
    handlerFn: iframeHandlerFn,
    name: "Iframe",
    type: 'click'

} as ModelConfig;

export default function Iframe({ editorState }: Iframe) {
    return (
        <Model
            btnType='button'
            config={config}
            editorState={editorState}

        />
    )
}
