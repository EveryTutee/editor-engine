import React, { useMemo } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Bold } from "../components.types";
import { FaBold } from 'react-icons/fa';
import { boldHandlerFn } from "../handler/bold";

const config = {
    name: 'Bold',
    type: 'click',
    buttonIcon: <FaBold />,
    handlerFn: boldHandlerFn
} as ModelConfig
export default function Bold({ editorState }: Bold) {

    return (
        <Model
            btnType='button'
            editorState={editorState}
            config={config}
            onCurrentStyle={(styles) => {
                return {
                    style: {
                        backgroundColor: styles.fontWeight === 'bold' ? 'green' : 'white'
                    }
                }
            }}
        />
    )
}