import React from "react";
import Model from "../../base/model/Model";
import { FaBold } from 'react-icons/fa';
import { boldHandlerFn } from "../handler/bold";
const config = {
    name: 'Bold',
    type: 'click',
    buttonIcon: React.createElement(FaBold, null),
    handlerFn: boldHandlerFn
};
export default function Bold({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, 
        //@ts-ignore
        onCurrentStyle: (styles) => ({
            "data-selected": styles.fontWeight === '700'
        }) }));
}
