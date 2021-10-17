import React from "react";
import Model from "../../base/model/Model";
import alignHandlerFn from "../handler/alignHandlerFn";
import { AiOutlineAlignLeft } from "react-icons/ai";
const config = {
    name: 'alignLeft',
    type: 'click',
    buttonIcon: React.createElement(AiOutlineAlignLeft, null),
    handlerFn: alignHandlerFn
};
export default function AlignLeft({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: (styles) => ({
            "data-selected": styles.textAlign === 'left'
        }) }));
}
