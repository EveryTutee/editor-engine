import React from "react";
import Model from "../../base/model/Model";
import colorHandlerFn from "../handler/colorHandlerFn";
const config = {
    name: "Highlight",
    type: 'submenu',
    buttonIcon: React.createElement("p", null, "default color"),
    handlerFn: colorHandlerFn
};
export default function BackColor({ editorState, onClick }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, subMenuView: onClick, 
        //@ts-ignore
        onCurrentStyle: (styles) => (styles.color) }));
}
