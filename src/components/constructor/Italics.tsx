import React, { useMemo } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Italics } from "../components.types";
import { FaItalic } from 'react-icons/fa';
import { italicsHandlerFn } from "../handler/italics";

const config = {
    name: 'Italics',
    type: 'click',
    buttonIcon: <FaItalic />,
    handlerFn: italicsHandlerFn
} as ModelConfig
export default function Italics({ editorState }: Italics) {

    return (
        <Model
            btnType='button'
            editorState={editorState}
            config={config}
        />
    )
}