import React, { useMemo } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Underline } from "../components.types";
import { FaUnderline } from 'react-icons/fa';
import { underlineHandlerFn } from "../handler/underline";

const config = {
    name: 'Bold',
    type: 'click',
    buttonIcon: <FaUnderline />,
    handlerFn: underlineHandlerFn
} as ModelConfig
export default function Underline({ editorState }: Underline) {

    return (
        <Model
            btnType='button'
            editorState={editorState}
            config={config}
        />
    )
}