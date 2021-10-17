import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Bullets } from "../components.types";
import { MdFormatListBulleted } from "react-icons/md";
import { listHandlerFn } from "../handler/listHandlerFn";

const config = {
    name: 'Bullets',
    type: 'click',
    buttonIcon: <MdFormatListBulleted />,
    handlerFn: listHandlerFn
} as ModelConfig
export default function Bullets({ editorState }: Bullets) {

    return (
        <Model
            btnType='button'
            editorState={editorState}
            config={config}
            //@ts-ignore
            onCurrentStyle={(styles) => ({
                "data-selected": styles.fontWeight === '700'
            })}
        />
    )
}