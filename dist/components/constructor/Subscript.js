import React from "react";
import Model from "../../base/model/Model";
import { FaSubscript } from "react-icons/fa";
import supSubHandlerFn from "../handler/supSubHandlerFn";
const config = {
    name: 'subscript',
    type: 'click',
    buttonIcon: React.createElement(FaSubscript, null),
    handlerFn: supSubHandlerFn
};
export default function Subscript({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: (styles) => ({
            "data-selected": styles.verticalAlign === 'sub'
        }) }));
}
