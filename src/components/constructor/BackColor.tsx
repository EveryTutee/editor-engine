import React, { useMemo, useState } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { FontStyle } from "../components.types";
import colorHandlerFn from "../handler/colorHandlerFn";

const config = {
    name: "Highlight",
    type: 'submenu',
    buttonIcon: <p>default color</p>,
    handlerFn: colorHandlerFn
} as ModelConfig
export default function BackColor({ editorState, onClick }: FontStyle) {

    return (
        <Model
            btnType='button'
            editorState={editorState}
            config={config}
            subMenuView={onClick}
            //@ts-ignore
            onCurrentStyle={(styles) => (styles.color)}
        />
    )
}