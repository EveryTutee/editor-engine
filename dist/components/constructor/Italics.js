import React from "react";
import Model from "../../base/model/Model";
import { FaItalic } from 'react-icons/fa';
import { italicsHandlerFn } from "../handler/italics";
const config = {
    name: 'Italics',
    type: 'click',
    buttonIcon: React.createElement(FaItalic, null),
    handlerFn: italicsHandlerFn
};
export default function Italics({ editorState }) {
    return (React.createElement(Model, { btnType: 'button', editorState: editorState, config: config }));
}
