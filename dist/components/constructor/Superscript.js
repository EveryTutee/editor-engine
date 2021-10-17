import React from "react";
import Model from "../../base/model/Model";
import { FaSuperscript } from "react-icons/fa";
import supSubHandlerFn from "../handler/supSubHandlerFn";
const config = {
    name: 'superscript',
    type: 'click',
    buttonIcon: React.createElement(FaSuperscript, null),
    handlerFn: supSubHandlerFn
};
export default function Superscript({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: (styles) => ({
            "data-selected": styles.verticalAlign === 'super'
        }) }));
}
