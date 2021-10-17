import React, { Fragment } from 'react'
import { ModelConfig } from '../../base/base.types'
import Model from '../../base/model/Model'
import { WordSpacing } from '../components.types';
import { CgSpaceBetween } from 'react-icons/cg';
import wordSpacingHandlerFn from '../handler/wordSpacingHandlerFn';
const config = {
    buttonIcon: <CgSpaceBetween />,
    name: "word-spacing",
    type: 'submenu',
    handlerFn: wordSpacingHandlerFn,

} as ModelConfig;

export default function WordSpacing({ editorState, onClick }: WordSpacing) {
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