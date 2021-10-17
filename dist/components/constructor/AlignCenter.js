import React from "react";
import Model from "../../base/model/Model";
import alignHandlerFn from "../handler/alignHandlerFn";
import { AiOutlineAlignCenter } from "react-icons/ai";
const config = {
    name: 'alignCenter',
    type: 'click',
    buttonIcon: React.createElement(AiOutlineAlignCenter, null),
    handlerFn: alignHandlerFn
};
export default function AlignLeft({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: (styles) => ({
            "data-selected": styles.textAlign === 'center'
        }) }));
}
