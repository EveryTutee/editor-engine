import React, { useMemo } from "react";
import { ModelConfig } from "../../base/base.types";
import Model from "../../base/model/Model";
import { Bold } from "../components.types";
import { FaBold } from 'react-icons/fa';
import { boldHanderFn } from "../handler/bold";

export default function Bold({ editorState }: Bold) {
    const config = useMemo<ModelConfig>(() => ({
        name: 'Bold',
        type: 'click',
        buttonIcon: <FaBold />,
        handlerFn: boldHanderFn.bind(editorState)
    }), [editorState])

    return (
        <Model
            editorState={editorState}
            config={config}
        />
    )
}