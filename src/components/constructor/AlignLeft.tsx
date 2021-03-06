import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Align } from "../components.types";
import alignHandlerFn from "../handler/alignHandlerFn";
import { AiOutlineAlignLeft } from "react-icons/ai";

const config = {
    name: 'alignLeft',
    type: 'click',
    buttonIcon: <AiOutlineAlignLeft />,
    handlerFn: alignHandlerFn
} as ModelConfig
export default function AlignLeft({ editorState }: Align) {

    return (
        <Model
            btnType='button'
            editorState={editorState}
            config={config}
            //@ts-ignore
            onCurrentStyle={(styles) => ({
                "data-selected": styles.textAlign === 'left'
            })}
        />
    )
}