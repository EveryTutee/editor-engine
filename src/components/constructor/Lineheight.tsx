import React, { Fragment } from 'react'
import { ModelConfig } from '../../base/base.types'
import Model from '../../base/model/Model'
import { FontSize } from '../components.types';
import { MdFormatLineSpacing } from 'react-icons/md';
import lineheightHandlerFn from '../handler/lineheightHandlerFn';
const config = {
    buttonIcon: <MdFormatLineSpacing />,
    name: "line-height",
    type: 'submenu',
    handlerFn: lineheightHandlerFn,

} as ModelConfig;

export default function Lineheight({ editorState, onClick }: FontSize) {
    return (
        <Model
            config={config}
            editorState={editorState}
            btnType='button'
            onCurrentStyle={(styles) => (styles.fontSize)}
            subMenuView={onClick}
        />
    )
}