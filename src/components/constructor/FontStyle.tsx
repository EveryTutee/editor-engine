import React, { useMemo } from 'react';
import { ModelConfig } from '../../base/base.types';
import { FontStyle } from '../components.types';
import { BiFontFamily } from 'react-icons/bi';
import Model from '../../base/model/Model';
import fontstyleHandlerFn from '../handler/fontstyle';


export default function FontStyle({ editorState, onClick }: FontStyle) {
    const config = useMemo<ModelConfig>(() => ({
        type: 'submenu',
        name: 'font', // to be the current fontstyle
        buttonIcon: <BiFontFamily />,
        handlerFn: fontstyleHandlerFn
    }), [editorState])
    return (
        <Model
            config={config}
            editorState={editorState}
            subMenuView={onClick}

            btnType='button'
        />
    )
}
