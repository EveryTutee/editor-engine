import React from "react";
import Model from "../../base/model/Model";
import alignHandlerFn from "../handler/alignHandlerFn";
import { AiOutlineAlignRight } from "react-icons/ai";
const config = {
    name: 'alignRight',
    type: 'click',
    buttonIcon: React.createElement(AiOutlineAlignRight, null),
    handlerFn: alignHandlerFn
};
export default function AlignRight({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: (styles) => ({
            "data-selected": styles.textAlign === 'right'
        }) }));
}
