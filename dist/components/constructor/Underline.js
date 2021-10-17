import React from "react";
import Model from "../../base/model/Model";
import { FaUnderline } from 'react-icons/fa';
import { underlineHandlerFn } from "../handler/underline";
const config = {
    name: 'Bold',
    type: 'click',
    buttonIcon: React.createElement(FaUnderline, null),
    handlerFn: underlineHandlerFn
};
export default function Underline({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config }));
}
