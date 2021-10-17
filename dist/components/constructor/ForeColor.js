import React from "react";
import Model from "../../base/model/Model";
import colorHandlerFn from "../handler/colorHandlerFn";
const config = {
    name: 'Font Color',
    type: 'submenu',
    buttonIcon: React.createElement("p", null, "default color"),
    handlerFn: colorHandlerFn
};
export default function ForeColor({ editorState, onClick }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, subMenuView: onClick, 
        //@ts-ignore
        onCurrentStyle: (styles) => (styles.color) }));
}
