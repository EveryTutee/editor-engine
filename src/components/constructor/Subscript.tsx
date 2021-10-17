import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Align } from "../components.types";
import { FaSubscript } from "react-icons/fa";
import supSubHandlerFn from "../handler/supSubHandlerFn";

const config = {
    name: 'subscript',
    type: 'click',
    buttonIcon: <FaSubscript />,
    handlerFn: supSubHandlerFn
} as ModelConfig
export default function Subscript({ editorState }: Align) {

    return (
        <Model
            btnType='button'
            editorState={editorState}
            config={config}
            //@ts-ignore
            onCurrentStyle={(styles) => ({
                "data-selected": styles.verticalAlign === 'sub'
            })}
        />
    )
}