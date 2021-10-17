import React from "react";
import Model from "../../base/model/Model";
import { MdFormatListBulleted } from "react-icons/md";
import { listHandlerFn } from "../handler/listHandlerFn";
const config = {
    name: 'Numbers',
    type: 'click',
    buttonIcon: React.createElement(MdFormatListBulleted, null),
    handlerFn: listHandlerFn
};
export default function Numbers({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: (styles) => ({
            "data-selected": styles.fontWeight === '700'
        }) }));
}
