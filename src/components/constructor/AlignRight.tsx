import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Align } from "../components.types";
import alignHandlerFn from "../handler/alignHandlerFn";
import { AiOutlineAlignRight } from "react-icons/ai";

const config = {
    name: 'alignRight',
    type: 'click',
    buttonIcon: <AiOutlineAlignRight />,
    handlerFn: alignHandlerFn
} as ModelConfig
export default function AlignRight({ editorState }: Align) {

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