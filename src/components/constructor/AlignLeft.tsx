import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Align } from "../components.types";
import { FaBold } from 'react-icons/fa';
import { boldHandlerFn } from "../handler/bold";
import alignHandlerFn from "../handler/alignHandlerFn";

const config = {
    name: 'alignLeft',
    type: 'click',
    buttonIcon: <FaBold />,
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