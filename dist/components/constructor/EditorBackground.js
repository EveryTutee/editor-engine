import React from "react";
import Model from "../../base/model/Model";
import backgroundHandlerFn from "../handler/backgroundHandlerFn";
const config = {
    name: "Editor Background",
    type: 'submenu',
    buttonIcon: React.createElement("p", null, "default color"),
    handlerFn: backgroundHandlerFn
};
export default function EditorBackground({ editorState, onClick }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config, subMenuView: onClick, 
        //@ts-ignore
        onCurrentStyle: (styles) => (styles.color) }));
}
