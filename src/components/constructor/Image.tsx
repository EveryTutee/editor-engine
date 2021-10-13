import React from 'react'
import { BsFileImage } from 'react-icons/bs'
import { EditorState } from '../..'
import { ModelConfig } from '../../base/base.types'
import Model from '../../base/model/Model'
import { Image } from '../components.types'
import imageHandlerFn from '../handler/imageHandlerFn'

const config = {
    name: 'Imagebox',
    type: 'click',
    buttonIcon: <BsFileImage />,
    handlerFn: imageHandlerFn

} as ModelConfig;

export default function Image({ editorState }: Image) {
    return (
        <Model
            editorState={editorState}
            config={config}
            btnType='file'
            accept="image/*"
        />
    )
}
